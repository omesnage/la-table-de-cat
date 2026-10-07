"""Test navigateur du champ « Une question ? » avec une capacité sample simulée.
Usage : python3 build/tests/ask.py   (après python3 build/build_cat.py)"""
import os, sys
from playwright.sync_api import sync_playwright
URL = "file://" + os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", "index.html"))
def mock(mode):
    return """
window.__prompts = [];
window.claude = { use: async (n) => { if (n !== 'sample') return null;
  return async (p, o) => { window.__prompts.push(p); %s }; } };
""" % {"ok": "const t = (p.indexOf('Bamboo') >= 0 && p.indexOf('MODE D') >= 0 ? 'Réponse avec mode d emploi. ' : 'Réponse courte. ') + (p.indexOf('Question de Cat : ail') >= 0 ? 'Ajoute de l ail.' : 'Voilà.'); o.onText && o.onText({ text: t }); return { text: t };",
       "down": "throw { code: 'unavailable' };"}[mode]
errs = []
def check(ok, msg):
    print(("✓ " if ok else "✗ ") + msg)
    if not ok: errs.append(msg)
with sync_playwright() as p:
    b = p.chromium.launch()
    def page(m=None):
        ctx = b.new_context(viewport={"width": 430, "height": 900})
        if m: ctx.add_init_script(mock(m))
        pg = ctx.new_page(); pg.logs = []; pg.on("pageerror", lambda e: pg.logs.append(str(e))); pg.goto(URL); pg.wait_for_selector(".dish"); return pg
    # 1. Claude joignable
    pg = page("ok"); pg.click(".meal.slot-l .dish"); pg.wait_for_selector("#modal:not([hidden])"); pg.wait_for_timeout(400)
    check(pg.is_visible("#askSec"), "champ « Une question ? » visible sur la fiche")
    pg.fill("#askIn", "Comment savoir si c'est cuit ?"); pg.press("#askIn", "Enter"); pg.wait_for_timeout(500)
    check("Réponse" in pg.inner_text("#askOut"), "la réponse s'affiche dans la fiche")
    pr = pg.evaluate("window.__prompts[0]")
    name = pg.inner_text("#modal h2")
    check(name[:20] in pr and "Étapes :" in pr and "Aliments exclus" in pr and "tièdes" in pr and "N'invente jamais" in pr, "contexte : recette complète, protocole, consignes")
    pg.keyboard.press("Escape"); pg.click(".meal.slot-c .dish"); pg.wait_for_timeout(500); pg.fill("#askIn", "Puis-je le préparer la veille ?"); pg.click("#askSec .btn.primary"); pg.wait_for_timeout(500)
    check("MODE D'EMPLOI DU RICE COOKER" not in pg.evaluate("window.__prompts[1]"), "collation sans rice cooker : mode d'emploi du Bamboo non joint")
    pg.keyboard.press("Escape"); pg.click(".meal.slot-l .dish"); pg.wait_for_timeout(500)
    pg.fill("#askIn", "Quel réglage pour le rice cooker ?"); pg.click("#askSec .btn.primary"); pg.wait_for_timeout(500)
    pr2 = pg.evaluate("window.__prompts[2]")
    check("MODE D'EMPLOI DU RICE COOKER" in pr2 and "Yum Asia" in pr2 and "Umai" in pr2, "question sur le rice cooker : docs/bamboo.md joint")
    pg.fill("#askIn", "ail"); pg.click("#askSec .btn.primary"); pg.wait_for_timeout(500)
    check("Attention" in pg.inner_text("#askOut"), "réponse qui cite un aliment exclu : avertissement affiché")
    pg.click("#askSec [data-act=askGo].chip >> nth=0"); pg.wait_for_timeout(400)
    check(pg.evaluate("window.__prompts.length") == 5, "boutons de questions courantes")
    check(not pg.logs, "aucune erreur dans la page")
    # 2. Claude injoignable : le champ disparaît, sans erreur
    pg = page("down"); pg.click(".meal.slot-l .dish"); pg.wait_for_timeout(400)
    visible = pg.is_visible("#askSec"); pg.fill("#askIn", "test") if visible else None
    if visible: pg.click("#askSec .btn.primary"); pg.wait_for_timeout(400)
    check(not pg.is_visible("#askSec") and not pg.logs and "Erreur" not in pg.inner_text("#modal"), "Claude injoignable : champ masqué proprement, sans erreur")
    # 3. hors artefact : jamais visible
    pg = page(); pg.click(".meal.slot-l .dish"); pg.wait_for_timeout(500)
    check(not pg.is_visible("#askSec") and not pg.logs, "hors artefact : champ caché, aucune erreur")
    b.close()
sys.exit(1 if errs else 0)
