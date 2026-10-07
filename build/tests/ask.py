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
    # 1. Claude joignable : un bouton « Question » sous chaque étape
    pg = page("ok"); pg.click(".meal.slot-l .dish"); pg.wait_for_selector("#modal:not([hidden])"); pg.wait_for_timeout(400)
    nsteps = pg.locator(".cstep").count(); nbtn = pg.locator(".cstep .ask-btn:visible").count()
    check(nsteps > 0 and nbtn == nsteps, "bouton « Question » sous chacune des " + str(nsteps) + " étapes")
    pg.locator(".cstep .ask-btn").nth(1).click()
    check(pg.locator(".cstep").nth(1).locator(".ask .chip").count() == 4, "encart ouvert : 4 questions rapides")
    box = pg.locator(".cstep").nth(1).locator(".ask")
    box.locator(".ask-in").fill("Comment savoir si c'est cuit ?"); box.locator(".ask-in").press("Enter"); pg.wait_for_timeout(500)
    check("Réponse" in box.locator(".ask-out").inner_text(), "la réponse s'affiche sous l'étape (Entrée envoie)")
    pr = pg.evaluate("window.__prompts[0]"); title = pg.locator(".cstep").nth(1).locator("h4").text_content()
    order = [pr.index(x) for x in ["Tu aides Cat à cuisiner, pendant qu'elle est devant ses fourneaux.", "Recette :", "Ingrédients :", "Étape en cours « " + title, "Question de Cat :", "N'utilise jamais : légumineuses", "Réponds en français simple"]]
    check(order == sorted(order) and "{{" not in pr and "[[" not in pr, "texte envoyé : ordre demandé, quantités remplacées, sans {{ }} ni gestes")
    # astuce du chef
    tip_before = pg.evaluate("JSON.parse(localStorage.getItem('la-table-cat-v1')).weeks[0].days[0].meals.l.tip || ''")
    box = pg.locator(".cstep").nth(1).locator(".ask"); box.locator(".ask-save").click(); pg.wait_for_timeout(300)
    tip = pg.evaluate("JSON.parse(localStorage.getItem('la-table-cat-v1')).weeks[0].days[0].meals.l.tip || ''")
    check(("À propos de « " + title + " » : Réponse") in tip and len(tip) > len(tip_before), "« Ajouter à l'astuce du chef » enregistre la réponse, précédée du titre de l'étape")
    pg.click("#toast [data-act=undo]"); pg.wait_for_timeout(300)
    check("À propos de" not in (pg.evaluate("JSON.parse(localStorage.getItem('la-table-cat-v1')).weeks[0].days[0].meals.l.tip || ''")), "annulation possible")
    # rice cooker
    pg.locator(".cstep .ask-btn").nth(1).click(); box = pg.locator(".cstep").nth(1).locator(".ask")
    box.locator(".ask-in").fill("Quel réglage pour le rice cooker ?"); box.locator(".btn.primary").click(); pg.wait_for_timeout(500)
    pr2 = pg.evaluate("window.__prompts[window.__prompts.length-1]")
    check("Umai" in pr2 and "Ne jamais inventer un réglage" in pr2 and "« 2-3 »" in pr2, "question sur le rice cooker : règles et mode d'emploi du Bamboo joints")
    box.locator(".ask-in").fill("ail"); box.locator(".btn.primary").click(); pg.wait_for_timeout(500)
    check("Attention" in box.locator(".ask-out").inner_text(), "réponse qui cite un aliment exclu : avertissement")
    check(not pg.logs, "aucune erreur dans la page")
    # 2. Claude injoignable : le champ disparaît, sans erreur
    pg = page("down"); pg.click(".meal.slot-l .dish"); pg.wait_for_timeout(400)
    pg.locator(".cstep .ask-btn").first.click(force=True); pg.locator(".cstep .ask-in").first.fill("test"); pg.locator(".cstep .ask .btn.primary").first.click(force=True); pg.wait_for_timeout(500)
    check(pg.locator(".cstep .ask-out").first.inner_text() != "" and "Réessaie" in pg.locator(".cstep .ask-out").first.inner_text() and not pg.logs and "Erreur" not in pg.inner_text("#modal"), "Claude injoignable : message simple en français, sans erreur technique")
    # 3. hors artefact : jamais visible
    pg = page(); pg.click(".meal.slot-l .dish"); pg.wait_for_timeout(500)
    check(pg.locator(".cstep .ask-btn:visible").count() == 0 and not pg.logs, "hors artefact : boutons cachés, aucune erreur")
    b.close()
sys.exit(1 if errs else 0)
