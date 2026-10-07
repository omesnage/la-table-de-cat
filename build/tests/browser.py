"""Test navigateur (Playwright) : reprise de la recette ouverte, thème sombre.
Usage : python3 build/tests/browser.py   (après python3 build/build_cat.py)"""
import os, sys, json
from playwright.sync_api import sync_playwright
URL = "file://" + os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", "index.html"))
errs = []
def check(ok, msg):
    print(("✓ " if ok else "✗ ") + msg)
    if not ok: errs.append(msg)
with sync_playwright() as p:
    b = p.chromium.launch(); ctx = b.new_context(viewport={"width": 430, "height": 900}); pg = ctx.new_page()
    logs = []; pg.on("pageerror", lambda e: logs.append(str(e)))
    pg.goto(URL); pg.wait_for_selector(".dish")
    sheet = lambda: pg.evaluate("!document.querySelector('#modal').hidden")
    # 1. repas du planning : ouvrir, recharger → la fiche réapparaît
    pg.click(".dish[data-act=openMeal]"); pg.wait_for_selector("#modal:not([hidden])")
    name = pg.inner_text("#modal h2")
    pg.reload(); pg.wait_for_selector(".dish"); pg.wait_for_timeout(400)
    check(sheet() and pg.inner_text("#modal h2") == name, "repas ouvert : la fiche réapparaît après rechargement")
    # 2. fermer, recharger → retour au planning
    pg.keyboard.press("Escape"); pg.reload(); pg.wait_for_selector(".dish"); pg.wait_for_timeout(300)
    check(not sheet(), "fiche fermée : retour au planning après rechargement")
    # 3. semaine affichée conservée
    pg.click(".wtab[data-i='1']"); pg.reload(); pg.wait_for_selector(".dish")
    check(pg.evaluate("JSON.parse(localStorage.getItem('la-table-cat-v1')).ui.week") == 1 and pg.get_attribute(".wtab[data-i='1']", "aria-current") == "true", "semaine affichée conservée")
    # 4. recette du carnet
    pg.click("[data-nav=book]"); pg.wait_for_selector(".book-item"); pg.click(".book-item >> nth=0"); pg.wait_for_selector("#modal:not([hidden])")
    rn = pg.inner_text("#modal h2"); pg.reload(); pg.wait_for_selector(".book-item"); pg.wait_for_timeout(400)
    check(sheet() and pg.inner_text("#modal h2") == rn, "recette du carnet ouverte : la fiche réapparaît")
    # 5. recette disparue → pas de fiche, pas d'erreur
    pg.keyboard.press("Escape")
    pg.evaluate("(()=>{const s=JSON.parse(localStorage.getItem('la-table-cat-v1'));s.ui.open={kind:'recipe',ref:'inexistante'};localStorage.setItem('la-table-cat-v1',JSON.stringify(s))})()")
    pg.reload(); pg.wait_for_selector(".book-item"); pg.wait_for_timeout(300)
    check(not sheet() and pg.evaluate("!JSON.parse(localStorage.getItem('la-table-cat-v1')).ui.open"), "recette disparue : on reste sur le carnet, mémoire effacée")
    # 6. onglet du carnet conservé
    pg.click("[data-act=bookTab][data-v=banchan]"); pg.reload(); pg.wait_for_selector(".book-tabs, .bk-tabs")
    check(pg.evaluate("JSON.parse(localStorage.getItem('la-table-cat-v1')).ui.bookTab") == "banchan" and "Banchan" in pg.inner_text("#main h1"), "onglet Banchan du carnet conservé")
    check(not logs, "aucune erreur dans la page" + (" : " + "; ".join(logs) if logs else ""))
    b.close()
sys.exit(1 if errs else 0)
