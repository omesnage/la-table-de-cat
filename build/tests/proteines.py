"""Test navigateur : protéines du repas (total affiché, réglage par boutons – / +).
Usage : python3 build/tests/proteines.py   (après python3 build/build_cat.py)"""
import os, re
from playwright.sync_api import sync_playwright
URL = "file://" + os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", "index.html"))
errs = []
def check(ok, msg):
    print(("✓ " if ok else "✗ ") + msg)
    if not ok: errs.append(msg)
grams = lambda s: int(re.search(r"(\d+)\s*g", s).group(1))
with sync_playwright() as p:
    b = p.chromium.launch(); pg = b.new_context(viewport={"width": 430, "height": 900}).new_page()
    logs = []; pg.on("pageerror", lambda e: logs.append(str(e)))
    pg.goto(URL); pg.wait_for_selector(".dish")
    pg.click(".meal.slot-l .dish[data-act=openMeal] >> nth=0"); pg.wait_for_selector("#modal:not([hidden])")
    check(pg.locator(".prot-tot").count() == 1, "la fiche affiche « Protéines du repas »")
    t0 = grams(pg.inner_text(".prot-tot")); check(80 <= t0 <= 150, "total de protéines plausible : %d g" % t0)
    k0 = pg.inner_text(".cpills")
    if pg.locator("[data-act=protQ]").count() == 2:
        pg.click("[data-act=protQ][data-d='-1']"); pg.wait_for_timeout(300)
        t1 = grams(pg.inner_text(".prot-tot")); check(t1 <= t0, "– diminue (ou s'arrête à la limite) : %d → %d g" % (t0, t1))
        for _ in range(6): pg.click("[data-act=protQ][data-d='-1']"); pg.wait_for_timeout(120)
        t2 = grams(pg.inner_text(".prot-tot")); check(t2 >= 40, "jamais sous la borne du protocole (%d g)" % t2)
        for _ in range(12): pg.click("[data-act=protQ][data-d='1']"); pg.wait_for_timeout(120)
        t3 = grams(pg.inner_text(".prot-tot")); check(t3 <= 150 and t3 > t2, "+ augmente puis s'arrête à la borne (%d g)" % t3)
        check(pg.inner_text(".cpills") != k0 or t3 == t0, "les calories suivent")
    else:
        print("– repas à plusieurs protéines : réglage par la liste des ingrédients")
    check(not logs, "aucune erreur dans la page")
    b.close()
raise SystemExit(1 if errs else 0)
