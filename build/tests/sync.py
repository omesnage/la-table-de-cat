"""Test navigateur de la sauvegarde sur le compte, avec une base simulée (capacité db de Claude).
Usage : python3 build/tests/sync.py   (après python3 build/build_cat.py)"""
import os, sys, json
from playwright.sync_api import sync_playwright
URL = "file://" + os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", "index.html"))
MOCK = """
window.__db = %s;
window.claude = { use: async (n) => {
  if (n === 'user') return { id: async () => 'u1' };
  if (n === 'db') return { collection: (c) => ({ doc: (id) => ({
    get: async () => { const v = window.__db[c + '/' + id]; return { exists: v !== undefined, data: () => v }; },
    set: async (d) => { window.__db[c + '/' + id] = JSON.parse(JSON.stringify(d)); },
    delete: async () => { delete window.__db[c + '/' + id]; } }) }) };
  if (n === 'downloads') return { save: async () => {} };
  return null; } };
"""
errs = []
def check(ok, msg):
    print(("✓ " if ok else "✗ ") + msg)
    if not ok: errs.append(msg)
def page(b, db):
    ctx = b.new_context(viewport={"width": 430, "height": 900}); ctx.add_init_script(MOCK % json.dumps(db))
    pg = ctx.new_page(); pg.logs = []; pg.on("pageerror", lambda e: pg.logs.append(str(e))); return pg
with sync_playwright() as p:
    b = p.chromium.launch()
    # 1. premier lancement, compte vide : message d'accueil, puis sauvegarde après une modification
    pg = page(b, {}); pg.goto(URL); pg.wait_for_selector(".dish"); pg.wait_for_timeout(600)
    check(pg.is_visible("#modal .welcome-steps"), "premier lancement : message pour importer l'ancienne sauvegarde")
    pg.keyboard.press("Escape")
    pg.locator(".meal.slot-l").first.locator("[data-act=swapMeal]").click(); pg.wait_for_timeout(2500)
    db1 = pg.evaluate("window.__db"); meta = db1.get("data/users/u1/table-meta")
    check(bool(meta) and meta["n"] >= 1, "modification enregistrée sur le compte (" + str(meta and meta["n"]) + " morceau(x))")
    name1 = pg.locator(".meal.slot-l").first.locator(".dish-name").inner_text()
    # 1b. import d'une ancienne sauvegarde (version 13) depuis le message d'accueil : migrée, rien de perdu
    old = json.loads(pg.evaluate("localStorage.getItem('la-table-cat-v1')")); old["v"] = 13; old["weights"] = [{"date": "2026-10-01", "kg": 58.5}]
    old["recipes"].append({"id": "perso-x", "n": "Ma recette", "own": True, "ing": [], "steps": ["étape à moi"]})
    pg3 = page(b, {}); pg3.goto(URL); pg3.wait_for_selector(".dish"); pg3.wait_for_timeout(600)
    pg3.click("#modal [data-act=importPaste]"); pg3.fill("#pasteBk", json.dumps(old)); pg3.click("[data-act=pasteGo]"); pg3.wait_for_timeout(500)
    st = json.loads(pg3.evaluate("localStorage.getItem('la-table-cat-v1')"))
    check(st["v"] == 16 and len(st["weights"]) == 1 and any(r["id"] == "perso-x" for r in st["recipes"]) and not pg3.is_visible("#modal:not([hidden]) .welcome-steps"), "import de l'ancienne sauvegarde : migrée en version 16, pesée et recette de Cat conservées")
    # 2. nouvel appareil (navigateur vide) : restauration du compte
    pg2 = page(b, db1); pg2.goto(URL); pg2.wait_for_selector(".dish"); pg2.wait_for_timeout(900)
    check(pg2.locator(".meal.slot-l").first.locator(".dish-name").inner_text() == name1 and not pg2.is_visible("#modal .welcome-steps"), "navigateur vide : planning restauré depuis le compte")
    # 3. données locales plus récentes que le compte : jamais écrasées
    pg2.locator(".meal.slot-d").first.locator("[data-act=swapMeal]").click(); pg2.wait_for_timeout(300)
    newer = pg2.locator(".meal.slot-d").first.locator(".dish-name").inner_text()
    old = json.loads(json.dumps(db1))   # compte resté à l'ancienne version
    pg2.evaluate("window.__db = " + json.dumps(old)); pg2.reload(); pg2.wait_for_selector(".dish"); pg2.wait_for_timeout(2500)
    check(pg2.locator(".meal.slot-d").first.locator(".dish-name").inner_text() == newer, "compte plus ancien : les données locales ne sont pas écrasées")
    check(pg2.evaluate("window.__db['data/users/u1/table-meta'].savedAt") >= meta["savedAt"], "…et le compte est remis à jour")
    check(not pg.logs and not pg2.logs, "aucune erreur dans la page")
    # 4. hors artefact (pas de window.claude) : rien ne change, aucune erreur
    ctx = b.new_context(); q = ctx.new_page(); lg = []; q.on("pageerror", lambda e: lg.append(str(e))); q.goto(URL); q.wait_for_selector(".dish"); q.wait_for_timeout(400)
    check(not lg and not q.is_visible("#modal .welcome-steps") and q.locator("#syncMark").count() == 0, "hors artefact : aucun message ni erreur")
    b.close()
sys.exit(1 if errs else 0)
