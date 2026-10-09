import re,sys,os
HERE=os.path.dirname(os.path.abspath(__file__))
os.chdir(HERE)   # les morceaux (cat_*.js, part_*.js) sont lus depuis ce dossier
SRC=os.path.join(HERE,'source-originale.html')
OUT=os.path.join(HERE,'..','index.html')
ART=os.path.join(HERE,'artifact.html')   # version pour claude.ai (facultative, non versionnée)
rd=lambda f:open(f,encoding='utf-8').read()
s=rd(SRC)
FAIL=[]
def rep(old,new,count=1,text=None):
    global s
    t=s if text is None else text
    n=t.count(old)
    if n!=count:
        FAIL.append(f"ANCHOR x{n} (attendu {count}): {old[:110]!r}"); return t
    t=t.replace(old,new)
    if text is None: s=t
    return t
def rep_block(start,end,new,text=None,keep_end=True):
    global s
    t=s if text is None else text
    i=t.find(start)
    if i<0: FAIL.append("BLOCK start introuvable: "+start[:80]); return t
    j=t.find(end,i+len(start))
    if j<0: FAIL.append("BLOCK end introuvable: "+end[:80]); return t
    t=t[:i]+new+(t[j:] if keep_end else t[j+len(end):])
    if text is None: s=t
    return t

# 1. meta + css
rep('function viewBook(){','function viewBookRecipes(){')
rep('  ${protocolPanel()}<div class="days">${days}</div>','  <div class="days">${days}</div>')
import re as _re
_n=len(_re.findall(r'  <button data-nav="weight"[^\n]*</button>\n',s))
if _n!=1: FAIL.append("NAV weight x%d"%_n)
s=_re.sub(r'  <button data-nav="weight"[^\n]*</button>\n','',s)
rep('<div class="sheet-close"><button class="icon" data-act="close" aria-label="Fermer">×</button></div>','<div class="sheet-close"><button class="back" data-act="close" aria-label="Retour">← Retour</button><button class="icon" data-act="close" aria-label="Fermer">×</button></div>')
rep('      <button class="choice" data-act="proposeMeal"','      ${t.s === "l" || t.s === "d" ? `<button class="choice" data-act="krOpen" data-w="${t.w}" data-d="${t.d}" data-s="${t.s}"><strong>Composer un repas coréen</strong><span>Du riz, un banchan à protéine et deux banchan de légumes.</span></button>` : ""}\n      <button class="choice" data-act="proposeMeal"')
rep('const el = $("#bookList"); if (!el) return;\n  const list = S.recipes.filter(r => (!BOOK.cat || r.cat === BOOK.cat)','const el = $("#bookList"); if (!el) return;\n  const list = S.recipes.filter(r => r.cat !== "Banchan" && (!BOOK.cat || r.cat === BOOK.cat)')
rep('$("#bookCount").textContent = `${list.length} recette${list.length > 1 ? "s" : ""} sur ${S.recipes.length}`;','$("#bookCount").textContent = `${list.length} recette${list.length > 1 ? "s" : ""} sur ${S.recipes.filter(r => r.cat !== "Banchan").length}`;')
rep('const list = S.recipes.filter(r => (!PICK.cat || r.cat === PICK.cat) && recipeMatches(r, PICK.q));','const list = S.recipes.filter(r => (PICK.t && PICK.t.s === "c" ? r.cat === "Collation" : r.cat !== "Collation" && r.cat !== "Banchan") && (!PICK.cat || r.cat === PICK.cat) && recipeMatches(r, PICK.q));')
rep('const CAT_KEY = { "Poulet":"poulet",','const CAT_KEY = { "Collation":"crevettes", "Banchan":"veg", "Poulet":"poulet",')
rep('<meta name="theme-color" content="#FAFAF7">','<meta name="theme-color" content="#FAFAF7" media="(prefers-color-scheme: light)"><meta name="theme-color" content="#151513" media="(prefers-color-scheme: dark)"><meta name="color-scheme" content="light dark">')
rep('\n</style>\n</head>', rd('part_css.css')+rd('cat_css.css')+rd('cat_css6.css')+'\n</style>\n</head>')

# 2. catalogue de recettes : remplacé par la version du protocole à jour
catalog=('/* ============ CATALOGUE DE RECETTES : PROTOCOLE DE CAT (v2) ============\n'
 '   Niveau 1 : riz, pomme de terre, potimarron, sarrasin, quinoa, avoine sans gluten, soba pur sarrasin ; légumes cuits ; tofu (ferme, soyeux, fumé), blanc ou cuisse de poulet, œuf, protéine de pois ou de soja texturée, okara d\'amande ;\n'
 '   huile d\'olive ou de sésame grillé à cru. Exclus : légumineuses, ail, oignon, fibres crues, fritures, hautes températures.\n'
 '   Étapes linéaires : « Titre — consigne [durée] ». {{ingrédient}} est remplacé par la quantité réelle de la liste. */\n'
 'const HERBS = "quelques brins";\n'+rd('cat_rec_lib.js')+'\n'+rd('cat_rec_b.js')+'\n'+rd('cat_rec_l1.js')+'\n'+rd('cat_rec_l2.js')+'\n'+rd('cat_rec_l3.js')+'\n'+rd('cat_rec_c.js')+'\n'+rd('cat_banchan.js')+'\n'+rd('cat_time.js')+'\nconst DEFAULT_RECIPES = NEW_RECIPES.slice();\nconst SIGNATURE = [];\n\n')
rep_block('/* ============ CATALOGUE DE RECETTES','/* ============ BASE INGRÉDIENTS',catalog)
# 3. base d'ingrédients
rep_block('/* ============ BASE INGRÉDIENTS','function norm(s){',rd('cat_db.js')+'\n')
# 4. données du générateur
rep_block('const H = "quelques brins";','function combos(arr, k){',rd('cat_gen.js')+'\n')
rep('function formatProteins(f){ return f.p || Object.keys(PROTEINS); }','''/* légumes : au moins 150 g par repas, plafonds de portion (haricots verts 75 g, courgette 60 g), saison en priorité */
function vegCombos(f){
  return combos(f.v, f.k).filter(c => c.length === 1 ? !VEGS[c[0]].cap : c.reduce((t, k) => t + (VEGS[k].cap || 120), 0) >= 150);
}
function vegWeight(k){ const v = VEGS[k]; if (!v.ss) return 1; return v.ss.indexOf(curMonth()) >= 0 ? 4 : .08; }
function pickVeg(f, not){
  const cs = vegCombos(f).filter(c => !not || c.join() !== not.join()); if (!cs.length) return null;
  const ws = cs.map(c => c.reduce((p, k) => p * vegWeight(k), 1)); let r = Math.random() * ws.reduce((a, b) => a + b, 0);
  for (let i = 0; i < cs.length; i++) { r -= ws[i]; if (r <= 0) return cs[i]; }
  return cs[cs.length - 1];
}
function vegQty(V){
  const tot = V.length === 1 ? 170 : 180, q = V.map(() => 0); let rem = tot, free = V.length;
  V.forEach((v, i) => { if (v.cap) { q[i] = Math.min(v.cap, Math.round(tot / V.length / 5) * 5); rem -= q[i]; free--; } });
  V.forEach((v, i) => { if (!v.cap) q[i] = free > 0 ? Math.round(rem / free / 5) * 5 : 0; });
  return q;
}
function formatProteins(f){ return f.p || Object.keys(PROTEINS); }''')
rep('V.forEach(v => add(v.ing));','{ const vq = vegQty(V); V.forEach((v, i) => add([[v.ing[0][0], vq[i], v.ing[0][2]]])); }')
rep('v: pick(combos(f.v, f.k)), sa: pick(f.sa) };','v: pickVeg(f), sa: pick(f.sa) };')
rep('if (kcalOf(m) <= 850) return m;','if (!protoCheck(m).bad.length) return m;')
rep('g.v = pick(combos(nf.v, nf.k));','g.v = pickVeg(nf);')
rep('if (key === "v") g.v = pick(combos(f.v, f.k).filter(c => c.join() !== g.v.join())) || g.v;','if (key === "v") g.v = pickVeg(f, g.v) || g.v;')

# 5. repas, catégories, état
rep_block('const SLOTS = [','const CATS = [','''const SLOTS = [
  { k:"b", label:"Petit-déjeuner", create:"Créer un petit-déjeuner" },
  { k:"l", label:"Déjeuner", create:"Créer un déjeuner" },
  { k:"c", label:"Collation", create:"Ajouter une collation" },
  { k:"d", label:"Dîner", create:"Créer un dîner" }
];
''')
rep('const CATS = ["Poulet","Œufs","Tofu","Protéines végétales","Okara & douceurs","Purées & vapeur"];','const CATS = ["Poulet","Œufs","Tofu","Sardines","Protéines végétales","Okara & douceurs","Purées & vapeur"];')
rep('const STYLES = ["Vapeur Bamboo","Slow cook Bamboo","Cocon & purées","Fraîcheur tiède","Au four","Douceurs"];','const STYLES = ["Petit-déjeuner","Vapeur Bamboo","Slow cook Bamboo","Cocon & purées","Fraîcheur tiède"];')
rep('const BASES = ["Riz","Pommes de terre","Pâtes sans gluten","Okara"];','const BASES = ["Riz","Pommes de terre","Quinoa","Avoine","Sarrasin","Vermicelles"];')
rep('"Okara & douceurs":"crevettes", "Purées & vapeur":"poisson" };','"Okara & douceurs":"crevettes", "Purées & vapeur":"poisson", "Sardines":"poisson" };')
rep('function emptyDay(name){ return { id: uid(), name, meals: { l: null, d: null } }; }','function emptyDay(name){ return { id: uid(), name, meals: { b: null, l: null, c: null, d: null } }; }')
rep_block('function buildDefaultPlan(recipes){','function defaultState(){','''/* planning de départ : rotation des recettes, sans le même ingrédient principal sur deux repas qui se suivent, œufs limités (voir cat_v6.js) */
function buildDefaultPlan(recipes){
  const rr = pool => { const cats = [...new Set(pool.map(r => r.cat))], bk = cats.map(c => pool.filter(r => r.cat === c)), out = [];
    while (bk.some(b => b.length)) bk.forEach(b => { if (b.length) out.push(b.shift()); }); return out; };
  const take = (qs, ok) => { for (const q of qs) { const i = q.findIndex(ok); if (i >= 0) { const r = q.splice(i, 1)[0]; q.push(r); return r; } }
    const q = qs.find(x => x.length); const r = q.shift(); q.push(r); return r; };
  const bf = recipes.filter(r => r.st === "Petit-déjeuner"), sw = rr(bf.filter(r => r.go === "Sucré")), sa = rr(bf.filter(r => r.go !== "Sucré"));
  const sn = recipes.filter(r => r.cat === "Collation"), snw = rr(sn.filter(r => r.go === "Sucré")), sns = rr(sn.filter(r => r.go !== "Sucré"));
  const ld = recipes.filter(r => r.st !== "Petit-déjeuner" && r.cat !== "Sardines" && CATS.includes(r.cat));
  const veg = rr(ld.filter(r => isVegCat(r.cat))), meat = rr(ld.filter(r => !isVegCat(r.cat)));
  const weeks = []; let k = 0, prev = null;
  for (let w = 0; w < 4; w++){
    const days = [], names = new Set(); let eggs = 0, nextB = null;
    const ok = r => !names.has(r.n) && !clash(prev, r) && !(isEgg(r) && eggs >= EGG_MAX) && !(nextB && clash(r, nextB));
    const put = r => { names.add(r.n); if (isEgg(r)) eggs++; prev = r; return mealFromRecipe(r); };
    /* petits-déjeuners de la semaine choisis d'abord (70 % sucrés, 30 % salés) : le dîner de la veille évite ensuite celui du lendemain */
    const bs = []; for (let d = 0; d < 7; d++){ const ix = w * 7 + d;
      const r = take(pdSalty(ix) ? [sa, sw] : [sw, sa], x => !names.has(x.n) && !(isEgg(x) && eggs >= EGG_MAX) && (d > 0 || !clash(prev, x)));
      names.add(r.n); if (isEgg(r)) eggs++; bs.push(r); }
    for (let d = 0; d < 7; d++){
      const day = emptyDay(DAY_NAMES[d]);
      const ix = w * 7 + d;   /* petits-déjeuners : 70 % sucrés, 30 % salés */
      day.meals.b = mealFromRecipe(bs[d]); prev = bs[d];
      if (sn.length) { const nm = r => !names.has(r.n); const r = take(ix % 3 === 2 ? [sns, snw] : [snw, sns], nm); names.add(r.n); day.meals.c = mealFromRecipe(r); }
      ["l", "d"].forEach(sl => { nextB = sl === "d" ? bs[d + 1] : null; const isMeat = k++ % 5 === 4 && meat.length; day.meals[sl] = put(take(isMeat ? [meat, veg] : [veg, meat], ok)); }); nextB = null;
      days.push(day);
    }
    weeks.push({ id: uid(), name: "Semaine " + (w + 1), days });
  }
  return weeks;
}
''')
rep('return { v: 1, font: "editorial", recipes, weeks: buildDefaultPlan(recipes), weights: [], goal: 60, checked: {}, ui: { view: "plan", week: 0 } };',
    'return { v: 16, font: "editorial", recipes, weeks: buildDefaultPlan(recipes), weights: [], goal: 60, checked: {}, ui: { view: "plan", week: 0 },\n    kcalT: { b: null, l: null, d: null }, vegRatio: 80, autoAdapt: true, autoVeg: true, sensible: false, pantry: [], shopExtra: [], cooked: {}, reint: { start: null, foods: {}, current: null } };')
rep('''  S.ui = S.ui || { view: "plan", week: 0 }; S.checked = S.checked || {}; S.weights = S.weights || [];
  if (S.goal == null) S.goal = 73;
  S.v = S.v || 1;''','''  S.v = S.v || 1;
  ensureDefaults();
  migrateAll();''')
rep('function weekAvg(week){ const ds = week.days.filter(d => d.meals.l || d.meals.d);','function weekAvg(week){ const ds = week.days.filter(d => d.meals.b || d.meals.l || d.meals.d);')
rep('<p class="muted">${w.days.length} jour${w.days.length > 1 ? "s" : ""}, environ ${fmtK(weekAvg(w))} kcal par jour, déjeuner et dîner</p>',
    '<p class="muted">${w.days.length} jour${w.days.length > 1 ? "s" : ""}, trois repas et une collation par jour, environ ${fmtK(weekAvg(w))} kcal par jour</p>')
rep('<span class="muted small">${dayKcal(d) ? "≈ " + fmtK(dayKcal(d)) + " kcal par jour" : ""}</span>','${kcalBar(d)}')
rep('7 jours, chacun avec un déjeuner et un dîner.','7 jours, chacun avec un petit-déjeuner, un déjeuner, une collation et un dîner.')
rep('quantités cumulées pour les déjeuners et dîners','quantités cumulées pour tous les repas')
rep_block('/* ---------- PROTOCOLE DE CAT (rappel affiché dans le planning) ---------- */','/* ---------- PLANNING ---------- */',rd('cat_panel.js')+'\n')
# navigation
rep('v === "weight" ? viewWeight() : viewData();','v === "weight" ? viewWeight() : v === "reint" ? viewReint() : viewData();')
rep('  <button data-nav="data" style=','  <button data-nav="reint" style="--nc:var(--c-veg)"><i class="ico"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21v-8"/><path d="M12 13c0-3.5-2.5-5.5-6-5.5 0 3.5 2.5 5.5 6 5.5z"/><path d="M12 11c0-3 2-5 5.5-5 0 3-2 5-5.5 5z"/></svg></i><span>Réintro</span></button>\n  <button data-nav="data" style=')
rep('<div class="chart">${chartSvg(ws)}</div>','${leversCard()}\n    <div class="chart">${chartSvg(ws)}</div>')

# 6. moteur de propositions
engine='''function slotOf(f){ return f.slot || (f.t && f.t.s) || (f.to && f.to.s) || "l"; }
const okSens = r => !(S.sensible && (r.ing || []).some(i => /sardine|\bmiso\b|sauce soja/.test(norm(i.n))));
function catalogFor(f){
  const bk = slotOf(f) === "b";
  return S.recipes.filter(r => CATS.includes(r.cat) && r.st !== "Douceurs" && ((r.st === "Petit-déjeuner") === bk) && okSens(r) &&
    (!f.cats || !f.cats.length || f.cats.includes(r.cat)) && (!f.bases || !f.bases.length || f.bases.includes(r.base)) && (!f.styles || !f.styles.length || f.styles.includes(r.st)));
}
function oneProposal(f, avoid){
  avoid = avoid || new Set();
  if (f.slot === "c" || (f.t && f.t.s === "c") || (f.to && f.to.s === "c")) {   /* collation : une petite recette du carnet, jamais générée */
    const list = S.recipes.filter(r => r.cat === "Collation" && okSens(r) && !avoid.has(r.n) && (!f.pd || r.go === f.pd)); return list.length ? mealFromRecipe(pick(list)) : null;
  }
  const src = f.src || "mix", sl = slotOf(f), bk = sl === "b";
  if (bk && !f.pd) f = { ...f, pd: Math.random() < .7 ? "Sucré" : "Salé" };   /* petits-déjeuners : 70 % sucrés, 30 % salés */
  for (let t = 0; t < 40; t++){
    const useBook = bk || src === "book" || (src === "mix" && Math.random() < 0.4);
    let m = null;
    if (useBook) { const list = catalogFor(f).filter(r => !avoid.has(r.n)); if (list.length) m = mealFromRecipe(pick(list)); else if (bk || src === "book") return null; }
    if (!m) { const g = randomGen({ cats: f.cats, bases: f.bases, styles: f.styles }); if (g) m = mealFromGen(g); }
    if (m && !avoid.has(m.name)) { if (S.autoVeg !== false && !bk) autoSide(m); if (S.autoAdapt !== false) protoAdaptMeal(m, sl, kT(sl)); return m; }
  }
  return null;
}
function proposeMeals(n, f){
  const out = [], seen = new Set();
  for (let i = 0; i < n * 3 && out.length < n; i++){ const m = oneProposal(f, seen); if (m && !seen.has(m.name)) { seen.add(m.name); out.push(m); } }
  return out;
}
function weekUsed(w, skip){ const s = new Set(); w.days.forEach((d, i) => { if (i !== skip) SLOTS.forEach(sl => d.meals[sl.k] && s.add(d.meals[sl.k].name)); }); return s; }
function proposeDay(f, avoid){
  avoid = new Set(avoid || []); const out = {};
  SLOTS.forEach(sl => {
    const bk = sl.k === "b";
    const m = oneProposal({ ...f, slot: sl.k }, avoid) || oneProposal({ src: bk ? "book" : "gen", slot: sl.k }, avoid) || oneProposal({ src: "mix", slot: sl.k }, new Set());
    out[sl.k] = m; if (m) avoid.add(m.name);
  });
  return out;
}
function proposeWeek(f){
  const days = [], avoid = new Set(), count = {};
  const limit = f.cats && f.cats.length ? 99 : 5;
  for (let i = 0; i < 7; i++){
    let best = null;
    for (let t = 0; t < 30; t++){
      const p = proposeDay(f, avoid);
      const ok = [p.l, p.d].every(m => !m || (count[m.cat] || 0) < limit);
      best = p; if (ok) break;
    }
    SLOTS.forEach(sl => { const m = best[sl.k]; if (!m) return; avoid.add(m.name); if (sl.k !== "b") count[m.cat] = (count[m.cat] || 0) + 1; });
    days.push(best);
  }
  return days;
}

'''
rep_block('function catalogFor(f){','/* ---------- INSPIRATIONS ---------- */',engine)
rep('/* ---------- moteur de propositions (déjeuner et dîner) ---------- */','/* ---------- moteur de propositions (petit-déjeuner, déjeuner et dîner) ---------- */')
rep('(INSP.scope === "week" ? INSP.result : [INSP.result]).forEach(x => ["l","d"].forEach(k => avoid.add(x[k].name)));','(INSP.scope === "week" ? INSP.result : [INSP.result]).forEach(x => SLOTS.forEach(sl => x[sl.k] && avoid.add(x[sl.k].name)));')
rep('const kc = p => fmtK(SLOTS.reduce((s, sl) => s + kcalOf(p[sl.k]), 0));','const kc = p => fmtK(SLOTS.reduce((s, sl) => s + (p[sl.k] ? kcalOf(p[sl.k]) : 0), 0));')

# 7. mêmes évolutions que La Table d'Olivier v5
rep('steps: [...r.steps], tip: r.tip || "" };','steps: [...r.steps], tip: r.tip || "", kcalM: r.kcalM || 0, tc: r.tc || 0, go: r.go || "" };')
rep('function kcalOf(obj){ if (!obj || !obj.ing) return 0; return','function kcalOf(obj){ if (!obj || !obj.ing) return 0; if (obj.kcalM > 0) return Math.round(obj.kcalM / 10) * 10; return')
rep('S = d; S.ui = S.ui || { view: "plan", week: 0 }; S.checked = S.checked || {}; S.weights = S.weights || []; S.v = S.v || 1; applyFont();','S = d; S.v = S.v || 1; ensureDefaults(); migrateAll(); applyFont();')
rep('function openEditor(kind, ref){','function openEditorEdit(kind, ref){')
rep('''  const o = edObj(); if (!o) return;
  const isRecipe = kind === "recipe" || kind === "draft";''','''  const o = edObj(); if (!o) return; MODAL.mode = "edit";
  const isRecipe = kind === "recipe" || kind === "draft";''')
rep('<p class="eyebrow">${where}</p>\n    <textarea class="ed-title" data-ed="name"','<p class="eyebrow">${where}</p>\n    ${kind !== "draft" ? `<p class="ed-modes"><button class="link" data-act="toCook">← Voir en mode cuisine</button>${kind === "recipe" && o.own ? ` <button class="link" data-act="toCreator">Ouvrir dans le panneau de création</button>` : ""}</p>` : ""}\n    <textarea class="ed-title" data-ed="name"')
rep('if (MODAL.kind === "temp") { TEMP = mealFromGen(swapGen(TEMP, "v")); openEditor("temp", TEMP); return; }','if (MODAL.kind === "temp") { TEMP = mealFromGen(swapGen(TEMP, "v")); openEditorEdit("temp", TEMP); return; }')
rep('nm.id = m.id; setMeal(t, nm); save(); openEditor("meal", t); };','nm.id = m.id; setMeal(t, nm); save(); openEditorEdit("meal", t); };')
rep('TEMP = mealFromGen(swapGen(TEMP, el.dataset.gen, el.value)); openEditor("temp", TEMP); return; }','TEMP = mealFromGen(swapGen(TEMP, el.dataset.gen, el.value)); openEditorEdit("temp", TEMP); return; }')
rep('setMeal(MODAL.t, nm); save(); openEditor("meal", MODAL.t); toast("Plat modifié", true); }','setMeal(MODAL.t, nm); save(); openEditorEdit("meal", MODAL.t); toast("Plat modifié", true); }')
rep('function viewInsp(){','function viewInspCompose(){')
rep('  return items;\n}\nfunction viewShop(){','''  (S.shopExtra || []).forEach(x => { const e = lookup(x.n); items.push({ key: "x:" + x.id, id: x.id, extra: true, name: x.n, aisle: e ? e.a : "Divers", qty: qtyStr(x) || "selon le besoin" }); });
  return items;
}
function viewShop(){''')
rep('<li class="${chk[i.key] ? "done" : ""}"><label>','<li class="${chk[i.key] ? "done" : ""}${i.extra ? " ex" : ""}"><label>')
rep('<span class="si-q">${esc(i.qty)}</span></label></li>','<span class="si-q">${esc(i.qty)}</span></label>${i.extra ? `<button class="icon del" data-act="delExtra" data-id="${i.id}" aria-label="Retirer">${ic("x")}</button>` : ""}</li>')
rep('    <div class="shop-controls">','    ${extraForm()}\n    <div class="shop-controls">')
rep('<p class="muted">Typographie de l\'application et sauvegarde de tes données.</p>','<p class="muted">Calories par repas, typographie et sauvegarde de tes données.</p>')
rep('    <h2 class="group-title">Typographie</h2>','    ${settingsBlock()}\n    <h2 class="group-title">Typographie</h2>')
rep("""A.delWeek = () => { const w = curWeek(); if (!confirm(`Supprimer « ${w.name} » et ses ${w.days.length} jours ?`)) return; snapshot(); S.weeks.splice(S.ui.week, 1); S.ui.week = Math.max(0, S.ui.week - 1); save(); render(); toast("Semaine supprimée", true); };""",
 """A.delWeek = () => { const w = curWeek(); ask(`Supprimer « ${w.name} » et ses ${w.days.length} jours ?`, "Supprimer", () => { snapshot(); S.weeks.splice(S.ui.week, 1); S.ui.week = Math.max(0, S.ui.week - 1); save(); render(); toast("Semaine supprimée", true); }); };""")
rep("""A.applyWeek = () => { const i = +$("#toWk").value, wk = S.weeks[i]; if (!confirm(`Remplacer tous les repas de « ${wk.name} » ?`)) return; snapshot();
  wk.days = INSP.result.map((p, k) => ({ id: uid(), name: DAY_NAMES[k], meals: copyDayMeals(p) })); save(); toast(wk.name + " remplacée", true); };""",
 """A.applyWeek = () => { const i = +$("#toWk").value, wk = S.weeks[i]; ask(`Remplacer tous les repas de « ${wk.name} » ?`, "Remplacer", () => { snapshot();
  wk.days = INSP.result.map((p, k) => ({ id: uid(), name: DAY_NAMES[k], meals: copyDayMeals(p) })); save(); render(); toast(wk.name + " remplacée", true); }); };""")
m=re.search(r'A\.delRecipe = ds => \{.*?\n.*?\};\n',s,re.S)
if not m: FAIL.append("delRecipe introuvable")
else:
    s=s[:m.start()]+"""A.delRecipe = ds => { const r = recipeById(ds.id); ask(`Supprimer « ${r.n} » du carnet ? Les repas déjà planifiés sont conservés.`, "Supprimer", () => {
  snapshot(); S.recipes.splice(S.recipes.indexOf(r), 1); save(); render(); toast("Recette supprimée", true); }); };
"""+s[m.end():]
m=re.search(r'A\.reset = \(\) => \{.*?\};\n',s,re.S)
if not m: FAIL.append("reset introuvable")
else:
    s=s[:m.start()]+"""A.reset = () => { ask("Effacer toutes tes données et recharger le mois de départ ?", "Tout effacer", () => { snapshot(); const f = S.font; S = defaultState(); S.font = f; S.ui.view = "data"; save(); render(); toast("Données réinitialisées", true); }); };
"""+s[m.end():]
rep('function importFile(f){','function importFileOld(f){')
rep('<button class="btn primary" data-act="export">Télécharger la sauvegarde</button>','<div class="actions"><button class="btn primary" data-act="export">Télécharger la sauvegarde</button><button class="btn" data-act="exportText">Copier le texte</button></div>')
rep('<label class="btn file">Choisir un fichier<input type="file" accept="application/json,.json" data-bind="importFile" hidden></label>','<div class="actions"><label class="btn file">Choisir un fichier<input type="file" accept="application/json,.json" data-bind="importFile" hidden></label><button class="btn" data-act="importPaste">Coller le texte</button></div>')
# boutons du planning explicites
rep("""    <div class="actions">
      <button class="btn" data-act="proposeWeek">Proposer toute la semaine</button>
      <button class="btn" data-act="goShop">Liste de courses</button>
      <button class="btn ghost danger" data-act="delWeek">Supprimer</button>
    </div>""","    ${weekActions(w)}")
rep("""      <div class="day-tools">
        <button class="link" data-act="proposeDay" data-d="${di}">Proposer la journée</button>
        <button class="link danger" data-act="delDay" data-d="${di}">Supprimer</button>
      </div>""","      ${dayTools(d, di)}")
rep("""<div class="meal-tools"><button class="link" data-act="proposeMeal" ${at}>Autres idées</button><button class="link" data-act="pickRecipe" ${at}>Carnet</button></div></div>`;""","${mealTools(at)}</div>`;")
rep('<span class="dish-meta">${catTag(m.cat)}<span>${esc(meta)}</span></span></button>','<span class="dish-meta">${catTag(m.cat)}${seasonChip(m)}<span>${esc(meta)}</span></span>${mealBadges(m)}${protoDot(m)}${timesLine(m)}</button>')
rep('${r.own ? ", ma recette" : ""}</span></button></li>','${r.own ? ", ma recette" : ""}</span>${timesLine(r)}</button></li>')
rep('snapshot(); setMeal(t, mealFromRecipe(r)); save(); closeModal(); toast(`${slotLabel(t.s)} : ${r.n}`, true); };','snapshot(); setMeal(t, mealFromRecipe(r)); afterSelect(t); };')
rep('snapshot(); setMeal(t, copyMeal(m)); save(); closeModal(); toast(`${slotLabel(t.s)} : ${m.name}`, true); };','snapshot(); setMeal(t, copyMeal(m)); afterSelect(t); };')
rep('snapshot(); setMeal(t, copyMeal(TEMP)); save(); closeModal(); toast(`Ajouté : ${S.weeks[t.w].name}, ${S.weeks[t.w].days[t.d].name}, ${slotLabel(t.s).toLowerCase()}`, true); };','snapshot(); setMeal(t, copyMeal(TEMP)); afterSelect(t); };')
rep("""function stepsHTML(steps){
  if (!steps || !steps.length) return `<li class="muted">Aucune étape pour l'instant.</li>`;
  return steps.map(st => { const m = st.match(/^([^—]{2,48}?)\\s+—\\s+(.+)$/);
    return m ? `<li><span class="step-h">${esc(m[1])}</span><p>${fmtStep(m[2])}</p></li>` : `<li><p>${fmtStep(st)}</p></li>`; }).join("");
}""","""function stepsHTML(steps, ings){
  if (!steps || !steps.length) return `<li class="muted">Aucune étape pour l'instant.</li>`;
  return steps.map(raw => { const p = parseStep(ings ? renderQ(raw, ings) : raw);
    return p.h ? `<li><span class="step-h">${esc(p.h)}</span><p>${fmtStep(p.body)}</p></li>` : `<li><p>${fmtStep(p.body)}</p></li>`; }).join("");
}""")
rep('${stepsHTML(o.steps)}','${stepsHTML(o.steps, o.ing)}')
rep('read.innerHTML = stepsHTML(edObj().steps);','read.innerHTML = stepsHTML(edObj().steps, edObj().ing);')

rep('<p class="ed-kcal">${catTag(o.cat)}','<div id="edPc">${protoBanner(o)}</div><p class="ed-kcal">${catTag(o.cat)}')
rep('$("#edKcal").textContent = fmtK(kcalOf(o));','$("#edKcal").textContent = fmtK(kcalOf(o)); { const pc = $("#edPc"); if (pc) pc.innerHTML = protoBanner(o); }',2)

rep('<select id="placeS">${SLOTS.map(s => `<option value="${s.k}">${s.label}</option>`).join("")}</select>','<select id="placeS">${SLOTS.map(s => `<option value="${s.k}" ${s.k === (TEMP && TEMP.st === "Petit-déjeuner" ? "b" : TEMP && TEMP.cat === "Collation" ? "c" : "l") ? "selected" : ""}>${s.label}</option>`).join("")}</select>')
# remplacer un ingrédient par un équivalent (cat_subs.js)
rep('      <button class="icon" data-act="ingUp" data-i="${k}"','      ${subBtn(o, k)}\n      <button class="icon" data-act="ingUp" data-i="${k}"')
rep('    </span></li>`).join("");\n}\nfunction refreshIng','    </span></li>${subPanel(o, k)}`).join("");\n}\nfunction refreshIng')
# --- v3 : petits-déjeuners légers, 80 % végétarien, recette visible, aperçu
rep('function buildGen(g){','function buildGen0(g){')
# le sel cité dans les étapes figure dans la liste (une seule ligne), au lieu d'être supprimé
rep('if (norm(n) === "sel") return;','if (norm(n) === "sel" && ing.some(i => norm(i.n) === "sel")) return;')
rep('    ${filterBar("insp")}\n    <div class="insp-go">','    ${slotOf(INSP) === "b" && INSP.scope === "meal" ? bfFilter("insp") : filterBar("insp")}\n    <div class="insp-go">')
rep('    ${filterBar("prop")}\n','    ${PROP.t.s === "b" ? bfFilter("prop") : filterBar("prop")}\n')
rep("""      <button class="btn" data-act="inspView" data-i="${i}">Voir et modifier</button>
      <button class="btn" data-act="inspPlace" data-i="${i}">Ajouter au planning</button>
      <button class="link" data-act="inspSave" data-i="${i}">Enregistrer dans le carnet</button>
      <button class="link" data-act="inspReroll" data-i="${i}">Remplacer</button>""","""      <button class="btn primary" data-act="inspPlace" data-i="${i}">Ajouter au planning</button>
      <button class="btn" data-act="inspSave" data-i="${i}">Garder dans mes recettes</button>
      <button class="btn" data-act="inspView" data-i="${i}">Modifier</button>
      <button class="link" data-act="inspReroll" data-i="${i}">Une autre idée</button>""")

# 8. addendum (moteur d'Olivier adapté + protocole de Cat)
app=rd('part_app.js')
def arep(old,new,count=1):
    global app
    n=app.count(old)
    if n!=count: FAIL.append(f"APP ANCHOR x{n}: {old[:100]!r}"); return
    app=app.replace(old,new)
arep('''        ${rc.length ? `<div class="recall">${rc.map(i => `<span class="rc"><b>${esc(qtyStr(i))}</b> ${esc(i.n)}</span>`).join("")}</div>` : ""}
      </div></li>`;''','''        ${rc.length ? `<div class="recall">${rc.map(i => `<span class="rc">${qtyChip(i)}</span>`).join("")}</div>` : ""}
        ${askStepBtn()}
      </div></li>`;''')
arep('aria-label="Retirer ${esc(r.i.n)}">${ic("x")}</button></li>`;','aria-label="Retirer ${esc(r.i.n)}">${ic("x")}</button>${subCookBtn(o, r.idx)}${subCookPanel(o, r.idx)}</li>`;')
arep('vegChips(o, "vegSwapTo", r.idx, k)}</div>` : ""}</li>`; };','vegChips(o, "vegSwapTo", r.idx, k)}</div>` : ""}${subCookBtn(o, r.idx)}${subCookPanel(o, r.idx)}</li>`; };')
# retirer l'objectif calorique d'Olivier
i=app.find('/* ---------- objectif calorique ---------- */'); j=app.find("/* ce qui change entre deux listes d'ingrédients */")
if i<0 or j<0: FAIL.append("APP calorie block")
else: app=app[:i]+app[j:]
i=app.find('/* ---------- RÉGLAGES : objectif calorique ---------- */'); j=app.find('/* ---------- confirmations et sauvegarde')
if i<0 or j<0: FAIL.append("APP settings block")
else: app=app[:i]+rd('cat_proto.js')+'\n'+app[j:]
arep('''  if (S.autoVeg !== false) autoSide(m);
  if (S.autoAdapt !== false) adaptMeal(m, slotTarget(t));''','''  if (S.autoVeg !== false && t.s !== "b" && t.s !== "c") autoSide(m);
  if (S.autoAdapt !== false) protoAdaptMeal(m, t.s, kT(t.s));''')
arep('''  A.adaptDay = ds => { const w = curWeek(), d = w.days[+ds.d]; snapshot(); const b = weekSnap(w), ok = adaptDay(d, dayTarget()); save(); render();
    if (ok) reportWeek(d.name + " : portions adaptées à ta cible", w, b); else toast("Ce jour est déjà dans ta cible"); };
  A.adaptWeek = () => { const w = curWeek(); snapshot(); const b = weekSnap(w); let n = 0; w.days.forEach(d => { if (adaptDay(d, dayTarget())) n++; }); save(); render();
    if (n) reportWeek("Portions adaptées à ta cible de " + fmtK(dayTarget()) + " kcal par jour", w, b); else toast("Tous les jours sont déjà dans ta cible"); };''','''  A.adaptDay = ds => { const w = curWeek(), d = w.days[+ds.d]; snapshot(); const b = weekSnap(w), ok = adaptDay(d); save(); render();
    if (ok) reportWeek(d.name + " : portions mises au protocole", w, b); else toast("Ce jour respecte déjà les portions"); };
  A.adaptWeek = () => { const w = curWeek(); snapshot(); const b = weekSnap(w); let n = 0; w.days.forEach(d => { if (adaptDay(d)) n++; }); save(); render();
    if (n) reportWeek("Portions mises au protocole (et à tes calories par repas)", w, b); else toast("Tous les repas respectent déjà les portions"); };''')
arep('w.days.forEach(d => SLOTS.forEach(sl => { const m = d.meals[sl.k]; if (m && autoSide(m, 200)) n++; })); save(); render();','w.days.forEach(d => SLOTS.forEach(sl => { const m = d.meals[sl.k]; if (m && sl.k !== "b" && sl.k !== "c" && autoSide(m, 200)) n++; })); save(); render();')
arep('d.meals.l = p.l; d.meals.d = p.d; save(); render(); reportWeek("Nouveaux repas pour " + d.name, w, b); };','SLOTS.forEach(sl => { if (p[sl.k]) d.meals[sl.k] = p[sl.k]; }); save(); render(); reportWeek("Nouveaux repas pour " + d.name, w, b); };')
arep('w.days.forEach((d, i) => { const p = ps[i % 7]; d.meals.l = p.l; d.meals.d = p.d; }); save(); render(); reportWeek("Nouveaux menus pour " + w.name, w, b); };','w.days.forEach((d, i) => { const p = ps[i % 7]; SLOTS.forEach(sl => { if (p[sl.k]) d.meals[sl.k] = p[sl.k]; }); }); save(); render(); reportWeek("Nouveaux menus pour " + w.name, w, b); };')
arep('${card("adaptWeek", "gauge", "Adapter à ma cible", "ajuste les portions pour viser " + fmtK(dayTarget()) + " kcal par jour")}','${card("adaptWeek", "gauge", "Mettre aux portions", "féculents et protéines dans les fourchettes du protocole")}')
arep('<button class="dt" data-act="adaptDay" data-d="${di}">${ic("gauge")} Adapter à ma cible</button>','<button class="dt" data-act="adaptDay" data-d="${di}">${ic("gauge")} Mettre aux portions</button>')
arep('const staples = ["carotte","champignons"].filter(k => !have.has(norm(VEGS[k].ing[0][0])));','const staples = ["carotte"].filter(k => !have.has(norm(VEGS[k].ing[0][0])));')
arep('o.ing.push({ id: uid(), n: b[0], q: grams > 0 ? grams : b[1], u: b[2] });','o.ing.push({ id: uid(), n: b[0], q: grams > 0 ? (v.cap ? Math.min(grams, v.cap) : grams) : (v.cap ? Math.min(v.cap, b[1]) : b[1]), u: b[2] });')
arep('if (!adaptMeal(o, tg)) { toast("Ce repas est déjà dans ta cible"); return null; }','if (!protoAdaptMeal(o, t.s, tg)) { toast("Ce repas est déjà dans ta cible"); return null; }')
arep('<span class="muted small">Saison : ${esc(seasonLabel(o))}</span></p>','<span class="muted small">Saison : ${esc(seasonLabel(o))}</span></p>${protoBanner(o)}')
arep('${sec("basket", "Ingrédients", `<ol class="cr-list">${ingRows}</ol>','${sec("basket", "Ingrédients", `<div id="crPc">${protoBanner({ ing: CR.ing })}</div><ol class="cr-list">${ingRows}</ol>')
arep('function crRefreshKc(){ const e = $("#crKc"); if (e) e.textContent = "≈ " + fmtK(kcalOf({ ing: CR.ing }));','function crRefreshKc(){ const pc = $("#crPc"); if (pc) pc.innerHTML = protoBanner({ ing: CR.ing }); const e = $("#crKc"); if (e) e.textContent = "≈ " + fmtK(kcalOf({ ing: CR.ing }));')
fr_old=app[app.index('const FR_COMMON = {'):app.index('let FR = { min: 0 };')]
app=app.replace(fr_old,'''const FR_COMMON = {
  f: ["œufs","blanc de poulet","tofu ferme","carotte","courgette","potimarron","butternut","épinards","haricots verts","aubergine","brocoli","panais","persil","ciboulette","thym","bouillon","lait de riz"],
  g: ["riz basmati","pommes de terre","quinoa","soba","flocons d'avoine","farine de sarrasin","protéine de pois texturée","okara d'amande","huile d'olive","huile de sésame grillé"]
};
''')
kg_old=app[app.index('const KEY_GROUPS = ['):app.index('const canonKey')]
app=app.replace(kg_old,'''const KEY_GROUPS = [["riz cuit","riz cru","riz basmati","riz"],["oeuf","oeufs"],["quinoa cuit","quinoa"],["soba cuites","soba"],["tofu ferme","tofu"],
  ["proteine de pois texturee","proteine de pois texturee (seche)"],["proteine de soja texturee","proteine de soja texturee (seche)"],["blanc de poulet","poulet"],["huile d'olive","huile"],["flocons d'avoine","avoine"]];
''')
import json as _json
bamboo_doc='const BAMBOO_DOC = '+_json.dumps(open(os.path.join(os.path.dirname(os.path.abspath(__file__)),'..','docs','bamboo.md'),encoding='utf-8').read(),ensure_ascii=False).replace('</','<\\/')+';\n'
extra=bamboo_doc+app+rd('cat_v6.js')+'\n'+rd('cat_subs.js')+'\n'+rd('cat_lot.js')+'\n'+rd('cat_resume.js')+'\n'+rd('cat_swap.js')+'\n'+rd('cat_sync.js')+'\n'+rd('cat_ask.js')+'''
function viewInsp(){
  const mode = (S.ui && S.ui.insp) || "compose";
  const seg = `<div class="seg ins-mode" role="tablist">${[["compose","Composer"],["fridge","Avec mon frigo"]].map(([v, l]) => `<button class="seg-b" data-act="inspMode" data-v="${v}" aria-pressed="${mode === v}">${l}</button>`).join("")}</div>`;
  const sl = INSP.scope === "meal" ? `<div class="frow"><span class="flabel">Pour quel repas</span><div class="chips">${SLOTS.map(x => `<button class="chip" data-act="inspSlot" data-v="${x.k}" aria-pressed="${(INSP.to.s || "l") === x.k}">${x.label}</button>`).join("")}</div></div>` : "";
  return seg + (mode === "fridge" ? viewFridge() : sl + viewInspCompose());
}
A.inspSlot = ds => { INSP.to.s = ds.v; INSP.result = null; render(); };
'''
rep('/* ---------- démarrage ---------- */\nload(); render();',extra+'\n/* ---------- démarrage ---------- */\nload(); render(); resumeOpen();')

# thème sombre
m=re.search(r'@media \(prefers-color-scheme: dark\)\{(.*?)\n\}\n@media print',s,re.S)
inner=m.group(1)
def build_dark(prefix):
    out=[]
    for mm in re.finditer(r'([^{}]+)\{([^{}]*)\}',inner):
        sels=[x.strip() for x in mm.group(1).split(',')]; body=mm.group(2).strip()
        new=[prefix if x==':root' else prefix+' '+x for x in sels]
        if sels==[':root']: body=body.rstrip(';')+';color-scheme:dark'
        out.append(','.join(new)+'{'+body+'}')
    return '\n'.join(out)
dark='@media (prefers-color-scheme: dark){\n'+build_dark(':root:not([data-theme="light"])')+'\n}\n'+build_dark(':root[data-theme="dark"]')+'\n@media print'
s=s[:m.start()]+dark+s[m.end():]

# finitions : textes
s=s.replace("Tous respectent le protocole de Cat : sans ail ni oignon, sans poivre, cuissons fondantes, plats tièdes, huile d'olive crue.","Tous respectent le protocole de Cat : aliments de niveau 1, légumes cuits, pas d'ail ni d'oignon, cuissons douces, plats tièdes, huile crue.")
s=s.replace('<title>La Table de Cat · plan doux</title>','<title>La Table de Cat · plan doux</title>')
if FAIL:
    print('\n'.join(FAIL)); sys.exit(1)
open(OUT,'w',encoding='utf-8').write(s)
print('OK',len(s))
a=s
a=re.sub(r'<!doctype html>\s*','',a)
a=re.sub(r'<html[^>]*>\s*','',a); a=a.replace('<head>','').replace('</head>','').replace('<body>','').replace('</body>','').replace('</html>','')
a=re.sub(r'<meta charset="utf-8">\s*','',a); a=re.sub(r'<meta name="viewport"[^>]*>\s*','',a)
a=re.sub(r'<meta name="theme-color"[^>]*>(<meta name="theme-color"[^>]*>)?(<meta name="color-scheme"[^>]*>)?\s*','',a)
a=re.sub(r'<link rel="icon".*?</svg>">\s*','',a); a=re.sub(r'<link rel="preconnect"[^>]*>(<link rel="preconnect"[^>]*>)?\s*','',a)
a=re.sub(r'<title>.*?</title>','<title>La Table de Cat</title>',a)
assert '<title>La Table' in a[:8000]
a=a.replace('.top{padding-top:env(safe-area-inset-top)}\n','').replace('.top{position:sticky;top:0;','.top{position:sticky;top:env(safe-area-inset-top,0px);')
open(ART,'w',encoding='utf-8').write(a.strip()+'\n')
print('artifact',len(a))
