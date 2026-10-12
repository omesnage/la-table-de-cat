"""Test navigateur de la réécriture par Claude (mise en attente des ingrédients) avec une capacité sample simulée.
Usage : python3 build/tests/rework.py   (après python3 build/build_cat.py)"""
import os, sys, json
from playwright.sync_api import sync_playwright
URL = "file://" + os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", "index.html"))
MOCK = """
window.__prompts = []; window.__reply = null;
window.claude = { use: async (n) => { if (n !== 'sample') return null;
  return async (p, o) => { window.__prompts.push(p); if (!window.__reply) throw { code: 'unavailable' }; return { text: JSON.stringify(window.__reply) }; }; } };
"""
errs = []
def check(ok, msg):
    print(("✓ " if ok else "✗ ") + msg)
    if not ok: errs.append(msg)
with sync_playwright() as p:
    b = p.chromium.launch()
    def page(mock):
        ctx = b.new_context(viewport={"width": 430, "height": 900})
        if mock: ctx.add_init_script(MOCK)
        pg = ctx.new_page(); pg.logs = []; pg.on("pageerror", lambda e: pg.logs.append(str(e))); pg.goto(URL); pg.wait_for_selector(".dish"); pg.wait_for_timeout(300); return pg
    meal = lambda pg: pg.evaluate("JSON.parse(localStorage.getItem('la-table-cat-v1')).weeks[0].days[0].meals.l")
    # 1. hors artefact : aucun nouveau bouton, retrait immédiat comme avant
    pg = page(False); pg.click(".meal.slot-l .dish"); pg.wait_for_selector("#modal:not([hidden])"); pg.wait_for_timeout(300)
    check(pg.locator(".ck-review").count() == 0 and pg.locator('[data-act="ckSwapOpen"]').count() == 0, "hors artefact : pas de bouton « Faire revoir », pas de ⇄")
    n0 = len(meal(pg)["ing"]); pg.locator('.ci [data-act="ingDelCook"]').first.click(); pg.wait_for_timeout(300)
    check(len(meal(pg)["ing"]) == n0 - 1 and pg.locator("#ckPend").count() == 0, "hors artefact : le retrait s'applique tout de suite")
    check(not pg.logs, "hors artefact : aucune erreur")
    # 2. Claude joignable : mise en attente puis réécriture
    pg = page(True); pg.click(".meal.slot-l .dish"); pg.wait_for_selector("#modal:not([hidden])"); pg.wait_for_timeout(500)
    check(pg.locator(".ck-review:visible").count() == 1 and pg.locator('[data-act="ckSwapOpen"]').count() > 0, "Claude joignable : grand bouton « Faire revoir » et ⇄ présents")
    m0 = meal(pg); idx = next(i for i, x in enumerate(m0["ing"]) if x["n"] == "carotte")
    pg.evaluate("A.vegSwapTo({ i: %d, k: 'courgette' })" % idx); pg.wait_for_timeout(300)
    check(pg.locator("#ckPend").count() == 1 and "1 changement en attente" in pg.inner_text("#ckPend"), "le changement est mis en attente")
    check(meal(pg)["ing"] == m0["ing"] and meal(pg)["steps"] == m0["steps"], "la recette n'a pas bougé")
    ing = [dict(n=("courgette" if x["n"] == "carotte" else x["n"]), q=(50 if x["n"] == "carotte" else x["q"]), u=x["u"]) for x in m0["ing"]]
    steps = [s.replace("{{carotte}}", "{{courgette}}").replace("la carotte", "la courgette").replace("carotte", "courgette") for s in m0["steps"]]
    reply = dict(coherent=True, verdict="La courgette remplace la carotte.", name=m0["name"], t=m0["t"], ing=ing, steps=steps, tip="", changes=["La courgette remplace la carotte."])
    pg.evaluate("window.__reply = %s" % json.dumps(reply)); pg.click('#ckPend [data-act="rewGo"]'); pg.wait_for_selector("#rewOv .rew-verdict", timeout=5000)
    pr = pg.evaluate("window.__prompts[0]")
    check("Tu aides Cat" in pr and "MODE D'EMPLOI DU BAMBOO" in pr and "STYLE DES ÉTAPES" in pr and "Remplacer carotte par courgette" in pr and "gochujang" not in pr, "texte envoyé : protocole de Cat, Bamboo, style, changements demandés")
    check("courgette" in pr.split("Utilise UNIQUEMENT")[1], "liste d'aliments autorisés jointe")
    pg.click('#rewOv [data-act="rewUse"]'); pg.wait_for_timeout(400)
    m1 = meal(pg)
    check(any(x["n"] == "courgette" for x in m1["ing"]) and not any(x["n"] == "carotte" for x in m1["ing"]) and "carotte" not in " ".join(m1["steps"]), "recette réécrite : liste et étapes à jour")
    check("Ajouter au carnet" in pg.inner_text("#rewOv"), "proposition d'ajouter au carnet")
    pg.click('#rewOv [data-act="rewToBook"]'); pg.wait_for_timeout(300)
    check(pg.evaluate("JSON.parse(localStorage.getItem('la-table-cat-v1')).recipes.some(r => r.own && r.n.indexOf(%s) === 0)" % json.dumps(m1["name"])), "ajoutée au carnet")
    check(not pg.logs, "aucune erreur dans la page")
    # 3. réponse hors protocole : refusée, recette intacte
    pg = page(True); pg.click(".meal.slot-l .dish"); pg.wait_for_selector("#modal:not([hidden])"); pg.wait_for_timeout(500)
    m0 = meal(pg); bad = dict(reply, name=m0["name"], ing=m0["ing"] + [dict(n="ail", q=1, u="pièce")], steps=m0["steps"] + ["Finition — Ajouter l'ail. [1 min]"])
    pg.evaluate("window.__reply = %s" % json.dumps(bad)); pg.click('.ck-review'); pg.wait_for_selector("#rewOv .rew-text", timeout=5000)
    check("pas pu proposer" in pg.inner_text("#rewOv") and meal(pg)["ing"] == m0["ing"] and pg.evaluate("window.__prompts.length") == 2, "ail refusé après 2 essais, recette intacte")
    # 4. portions remises dans les fourchettes
    pg.click('#rewOv [data-act="rewClose"]')
    ing = [dict(n=x["n"], q=(300 if x["n"] == "pommes de terre" else x["q"]), u=x["u"]) for x in m0["ing"]]
    big = dict(reply, name=m0["name"], t=m0["t"], ing=ing, steps=m0["steps"], changes=[], coherent=True)
    pg.evaluate("window.__reply = %s" % json.dumps(big)); pg.click('.ck-review'); pg.wait_for_selector("#rewOv .rew-verdict", timeout=5000)
    check("Portions remises" in pg.inner_text("#rewOv"), "féculent trop gros : remis dans la fourchette du protocole")
    pg.click('#rewOv [data-act="rewUse"]'); pg.wait_for_timeout(300)
    pdt = next(x for x in meal(pg)["ing"] if x["n"] == "pommes de terre")
    check(120 <= float(pdt["q"]) <= 150, "pommes de terre : %s g (120 à 150)" % pdt["q"])
    check(not pg.logs, "aucune erreur dans la page")
    # 5. éditeur classique : barre « Valider » seulement si Claude est joignable
    for mock in (True, False):
        pg = page(mock); pg.click(".meal.slot-l .dish"); pg.wait_for_selector("#modal:not([hidden])"); pg.wait_for_timeout(400)
        pg.click('[data-act="toEdit"]'); pg.wait_for_timeout(400); pg.locator('[data-act="ingDel"]').first.click(); pg.wait_for_timeout(400)
        check((pg.locator("#rewBar").count() == 1) == mock, "éditeur : barre « Valider » " + ("affichée" if mock else "absente hors artefact"))
    b.close()
sys.exit(1 if errs else 0)
