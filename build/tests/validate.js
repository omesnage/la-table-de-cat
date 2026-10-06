/* Contrôle des recettes fournies et du planning. À lancer après python3 build/build_cat.py :
     node build/tests/validate.js      → doit afficher « 0 en erreur ».
   1. Recettes : portions, aliments interdits, ingrédients inconnus, quantités, {{ingrédient}}.
   2. Durées : chaque étape a ses gestes (cat_time.js), t = somme exacte des étapes, tc = somme des cuissons,
      petit-déjeuner de BK_MAX minutes au plus.
   3. Planning : de nombreuses semaines et journées générées par l'application (index.html), le planning de départ
      et la migration des anciennes données ne doivent jamais servir le même ingrédient principal sur deux repas
      qui se suivent, ni plus de EGG_MAX repas aux œufs par semaine. */
const fs = require('fs'), path = require('path');
const norm = s => String(s || "").toLowerCase().replace(/œ/g, "oe").replace(/æ/g, "ae").replace(/[’`]/g, "'").normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/\s+/g, " ").trim();
global.norm = norm; global.HERBS = "quelques brins";
const load = f => fs.readFileSync(path.join(__dirname, '..', f), 'utf8');
const FILES = ['cat_db.js', 'cat_rec_lib.js', 'cat_rec_b.js', 'cat_rec_l1.js', 'cat_rec_l2.js', 'cat_rec_l3.js', 'cat_rec_c.js', 'cat_banchan.js', 'cat_time.js', 'cat_gen.js'];
(0, eval)(FILES.map(load).join('\n') + '\n;global.__R = { NEW_RECIPES, ING_DB, BK_MAX, SNACK_MAX, KR_STEP_MAX };');
const { NEW_RECIPES, ING_DB, BK_MAX, SNACK_MAX, KR_STEP_MAX } = global.__R;
let errors = 0;
const out = [], fail = (where, msg) => { errors++; out.push('✗ ' + where + '  ' + msg); };

/* ---------- 1 et 2 : recettes et durées ---------- */
function lookup(name){ const n = norm(name); return ING_DB.find(e => n.includes(e.k)) || null; }
function unitKind(u){ const x = norm(u); if (!x) return "p"; if (x === "g" || x === "ml") return "g"; if (/(cafe|c\.? ?a ?c)/.test(x)) return "c"; if (/(soupe|c\.? ?a ?s)/.test(x)) return "s"; if (/(pincee|brins|quelques)/.test(x)) return "z"; return "p"; }
function ingKcal(i){ const q = parseFloat(String(i.q).replace(',', '.')); if (!q) return 0; const e = lookup(i.n); if (!e) return 0;
  switch (unitKind(i.u)){ case 'g': return e.g != null ? e.g * q / 100 : 0; case 'c': return e.c != null ? e.c * q : 0; case 's': return e.c != null ? e.c * 3 * q : (e.g != null ? e.g * q * 15 / 100 : 0); case 'p': return e.p != null ? e.p * q : 0; } return 0; }
const L3 = /\b(ail|oignons?|echalotes?|poivre|piment|vinaigre|citron|moutarde|pois chiches?|lentilles?|haricots? (blancs?|rouges?|secs?)|falafels?|fritur\w*|concombre|salade|radis|crudit\w*|tomate|isolat)\b/;
const SOLID = ['tofu ferme', 'tofu', 'tofu soyeux', 'tofu fume', 'blanc de poulet', 'cuisse de poulet', 'poulet'];
const TEXT = ['proteine de pois texturee', 'proteine de soja texturee'];
const BRACKET = /\s*\[(en parall[eè]le\s+)?(?:(\d+)\s*min\s*\+\s*)?(cuisson\s+)?(\d+)\s*min\]\s*$/i;
let nPST = 0, nChicken = 0;
NEW_RECIPES.forEach(r => {
  const b = r.st === 'Petit-déjeuner', sn = r.st === 'Collation', bn = r.st === 'Banchan', P = [];
  let fec = 0, sol = 0, pst = 0, veg = 0, oil = 0, egg = 0, kc = 0;
  r.ing.forEach(i => {
    const e = lookup(i.n), q = parseFloat(String(i.q).replace(',', '.')) || 0; kc += ingKcal(i);
    if (L3.test(norm(i.n))) P.push('niv3:' + i.n);
    if (!e) { if (!/^(sel|eau)/.test(norm(i.n))) P.push('inconnu:' + i.n); return; }
    if (e.n === 'r' || e.n === 'p2' || e.n === 'p3') P.push('nonlisté:' + i.n);
    if (e.a === 'Féculents') fec += q;
    else if (SOLID.indexOf(e.k) >= 0) sol += q;
    else if (TEXT.indexOf(e.k) >= 0) { pst += q; if (q < 25 || q > 35) P.push('protéine texturée ' + q + ' g (30 g secs)'); }
    else if (e.a === 'Œufs') egg += q;
    else if (e.k === 'sardine') sol += q;
    else if (e.a === 'Légumes') veg += q;
    if (e.k.indexOf('huile') === 0) oil += q;
    if (e.k === 'avocat' && q > 30) P.push('avocat>30');
    if (e.k === 'haricots verts' && q > 75) P.push('haricots>75');
    if (e.k === 'courgette' && q > 60) P.push('courgette>60');
  });
  if (pst) nPST++; if (r.cat === 'Poulet') nChicken++;
  const solT = sol + egg * 50 + pst * 3;
  if (b) { if (fec < 25 || fec > 100) P.push('fec b ' + fec); if (kc > 270) P.push('kcal b ' + Math.round(kc)); }
  else if (sn) { if (fec > 100) P.push('fec collation ' + fec); if (kc > 200) P.push('kcal collation ' + Math.round(kc)); if (!/^(Sucré|Salé)$/.test(r.go || '')) P.push('collation sans go'); }
  else if (bn) { if (fec > 0) P.push('féculent dans un banchan'); if (r.go === 'Protéine' && (solT < 80 || solT > 100)) P.push('protéine ' + solT); if (r.go === 'Légume' && (veg < 60 || veg > 100)) P.push('légumes ' + veg); if (r.go !== 'Protéine' && r.go !== 'Légume') P.push('banchan sans go'); if (kc > 200) P.push('kcal banchan ' + Math.round(kc)); }
  else { if (fec < 120 || fec > 150) P.push('fec ' + fec); if (solT < 80 || solT > 100) P.push('protéine ' + solT); if (veg < 150 || veg > 200) P.push('veg ' + veg); if (oil !== 1) P.push('huile ' + oil); }
  if (!r.steps.length) P.push('nosteps');
  /* durées */
  (r.timeErr || []).forEach(e => P.push(e));
  let tot = 0, cook = 0;
  r.steps.forEach(s => {
    if (/^Avant de commencer/i.test(s)) return;
    if (/\[\[/.test(s)) { P.push('gestes non calculés:' + s.slice(0, 30)); return; }
    const m = s.match(BRACKET); if (!m) { P.push('durée manquante:' + s.slice(0, 30)); return; }
    if (m[1]) return;                                   /* en parallèle : pas dans le total */
    const a = m[2] ? +m[2] : 0, v = +m[4];
    if (m[3]) { tot += a + v; cook += v; } else tot += v;
  });
  if (tot !== +r.t) P.push('t=' + r.t + ' ≠ somme des étapes ' + tot);
  if (cook !== +r.tc) P.push('tc=' + r.tc + ' ≠ cuissons ' + cook);
  if (b && tot > BK_MAX) P.push('durée ' + tot + ' min > ' + BK_MAX);
  if (sn && tot > SNACK_MAX) P.push('durée ' + tot + ' min > ' + SNACK_MAX);
  if (bn && tot > KR_STEP_MAX) P.push('durée ' + tot + ' min > ' + KR_STEP_MAX);
  if (b && /la veille/i.test(r.steps.join(' ')) && !/(riz|quinoa)[^.]*la veille/i.test(r.steps.join(' '))) P.push('préparation de la veille');
  /* {{ingrédient}} et mots interdits */
  r.steps.forEach(s => {
    (s.match(/\{\{([^}]+)\}\}/g) || []).forEach(t => { const k = norm(t.slice(2, -2)); if (!r.ing.some(i => norm(i.n).includes(k) || k.includes(norm(i.n)))) P.push('token?' + k); });
    const w = s.replace(/huile[^.]*crue?/gi, '').replace(/ crue? /g, ' ').match(/\b(dor[eé]|rissol|friture|frire|croustill|four\b|rôti|saisir|griller|vinaigre|citron|ail\b|oignon|cru\b|isolat)/i);
    if (w) P.push('mot?:' + w[0]);
  });
  if (P.length) fail(r.id, P.join(' | '));
  else out.push('✓ ' + r.id + '  ' + r.t + ' min (cuisson ' + r.tc + '), ' + Math.round(kc) + ' kcal' + (b ? '' : ', protéine ' + solT + ' g, légumes ' + veg + ' g'));
});
if (NEW_RECIPES.length !== 95) fail('catalogue', NEW_RECIPES.length + ' recettes au lieu de 95 (60 repas, 10 collations, 25 banchan)');
if (nChicken !== 4) fail('catalogue', nChicken + ' recettes de poulet au lieu de 4');
if (nPST > 8) fail('catalogue', nPST + ' recettes à la protéine texturée : quelques plats seulement (8 au plus)');
const ids = NEW_RECIPES.map(r => r.id); ids.forEach((id, i) => { if (ids.indexOf(id) !== i) fail(id, 'identifiant en double'); });

/* ---------- 3 : planning, avec le code de l'application ---------- */
function loadApp(){
  const html = fs.readFileSync(path.join(__dirname, '..', '..', 'index.html'), 'utf8');
  const code = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(m => m[1]).join('\n');
  const noop = new Proxy(function(){}, { get: (t, k) => k === Symbol.toPrimitive ? () => "" : noop, apply: () => noop, construct: () => noop });
  let store = null;
  Object.assign(global, { window: global, document: noop, location: { hash: "" }, addEventListener(){}, requestAnimationFrame(){}, setTimeout(){},
    matchMedia: () => ({ matches: false, addEventListener(){} }), localStorage: { getItem: () => store, setItem(k, v){ store = v; }, removeItem(){} } });
  (0, eval)(code + '\n;global.__A = { proposeWeek, proposeDay, planIssues, buildDefaultPlan, dayCtx, SLOTS, composeKorean, protoCheck, pdSalty, isSnack, EGG_MAX, migrateAll, defaultState, getS: () => S, setS: x => { S = x; } };');
  return global.__A;
}
let A = null;
try { A = loadApp(); } catch (e) { fail('planning', "impossible de charger index.html (lancer d'abord python3 build/build_cat.py) : " + e.message); }
if (A) {
  const seqOf = days => days.flatMap(p => A.SLOTS.map(s => (p.meals || p)[s.k]));
  const N = 200; let bad = 0, first = '';
  for (let i = 0; i < N; i++){ const is = A.planIssues(seqOf(A.proposeWeek({}))); if (is.length) { bad++; first = first || is.join(' ; '); } }
  if (bad) fail('planning', bad + ' semaines sur ' + N + ' (« une semaine ») ne respectent pas les règles, ex. : ' + first);
  else out.push('✓ planning « une semaine » : ' + N + ' semaines générées, aucune règle enfreinte');
  bad = 0; first = '';
  for (let i = 0; i < N; i++){ const is = A.planIssues(seqOf([A.proposeDay({})])); if (is.length) { bad++; first = first || is.join(' ; '); } }
  if (bad) fail('planning', bad + ' journées sur ' + N + ' (« une journée ») ne respectent pas les règles, ex. : ' + first);
  else out.push('✓ planning « une journée » : ' + N + ' journées générées, aucune règle enfreinte');
  /* « une journée » dans une semaine existante : jour par jour, avec la veille et le lendemain */
  bad = 0; first = '';
  for (let i = 0; i < 40; i++){
    const w = { days: A.buildDefaultPlan(A.getS().recipes)[0].days };
    w.days.forEach((d, di) => { const p = A.proposeDay({}, new Set(), A.dayCtx(w, di)); A.SLOTS.forEach(s => { if (p[s.k]) d.meals[s.k] = p[s.k]; }); });
    const is = A.planIssues(seqOf(w.days)); if (is.length) { bad++; first = first || is.join(' ; '); }
  }
  if (bad) fail('planning', bad + ' semaines sur 40 refaites jour par jour ne respectent pas les règles, ex. : ' + first);
  else out.push('✓ planning jour par jour dans une semaine : 40 semaines, aucune règle enfreinte');
  A.buildDefaultPlan(A.getS().recipes).forEach(w => { const is = A.planIssues(seqOf(w.days)); if (is.length) fail('planning de départ', w.name + ' : ' + is.join(' ; ')); });
  /* migration : d'anciennes données (version 7) avec des recettes supprimées */
  const S0 = A.defaultState(); S0.v = 8;
  const gone = ["p-poulet-poche-riz", "v6-bibimbap-doux", "pdj-okayu-express", "p-tofu-riz-sesame"];
  S0.weeks[0].days[0].meals.l.recipeId = gone[0]; S0.weeks[0].days[1].meals.d.recipeId = gone[1]; S0.weeks[0].days[2].meals.b.recipeId = gone[2]; S0.weeks[1].days[3].meals.l.recipeId = gone[3];
  gone.forEach(id => S0.recipes.push({ id, n: "ancienne recette " + id, ing: [], steps: [] }));
  A.setS(S0); A.migrateAll(); const S1 = A.getS();
  const left = S1.weeks.flatMap(w => w.days.flatMap(d => A.SLOTS.map(s => d.meals[s.k]))).filter(m => m && gone.indexOf(m.recipeId) >= 0);
  if (S1.v !== 12) fail('migration', 'version ' + S1.v + ' au lieu de 12');
  if (left.length || S1.recipes.some(r => gone.indexOf(r.id) >= 0)) fail('migration', 'des recettes supprimées restent dans les données');
  const wk = S1.weeks.slice(0, 4).flatMap(w => w.days.flatMap(d => A.SLOTS.map(s => d.meals[s.k]))), is = A.planIssues(wk);
  if (is.length) fail('migration', 'planning refait non conforme : ' + is.slice(0, 2).join(' ; '));
  if (!left.length && S1.v === 12 && !is.length) out.push('✓ migration depuis une ancienne version : anciennes recettes remplacées, planning conforme, version 12');
  /* migration 9 → 10 : seuls les repas issus d'une recette disparue sont refaits, le reste de Cat est conservé */
  const S9 = A.defaultState(); S9.v = 9; const gone9 = ['b-porridge-avoine-myrtilles', 't-salade-riz-basilic'];
  const keepId = S9.weeks[0].days[3].meals.l.recipeId, keepName = S9.weeks[0].days[3].meals.l.name;
  S9.weeks[0].days[0].meals.b.recipeId = gone9[0]; S9.weeks[0].days[1].meals.l.recipeId = gone9[1];
  gone9.forEach(id => S9.recipes.push({ id, n: 'ancienne recette ' + id, ing: [], steps: [] }));
  S9.recipes.push({ id: 'perso-1', n: 'Recette de Cat', own: true, ing: [], steps: [] }); S9.weights.push({ date: '2026-10-01', kg: 59.3 });
  A.setS(S9); A.migrateAll(); const T1 = A.getS(), mm = T1.weeks.flatMap(w => w.days.flatMap(d => A.SLOTS.map(s => d.meals[s.k])));
  const ok10 = T1.v === 12 && !mm.some(m => m && gone9.indexOf(m.recipeId) >= 0) && T1.recipes.some(r => r.id === 'perso-1') && T1.weights.length === 1
    && T1.weeks[0].days[3].meals.l.name === keepName && !T1.recipes.some(r => gone9.indexOf(r.id) >= 0);
  if (!ok10) fail('migration 10', 'repas refaits, recette perso, pesées ou repas conservés incorrects');
  else out.push('✓ migration 9 → 10 : repas des recettes disparues refaits, recettes de Cat, pesées et autres repas conservés');
  /* collations : chaque jour du planning de départ en a une, et les règles de variété ne les comptent pas */
  const dp = A.buildDefaultPlan(A.getS().recipes);
  if (!dp.every(w => w.days.every(d => d.meals.c && A.isSnack(d.meals.c)))) fail('collations', 'un jour du planning de départ n\'a pas de collation');
  else out.push('✓ collations : une par jour dans le planning de départ');
  /* petits-déjeuners 70 % sucrés / 30 % salés */
  { const all = dp.flatMap(w => w.days.map(d => d.meals.b)), sal = all.filter(m => m.go === 'Salé').length, share = sal / all.length;
    if (share < .25 || share > .35) fail('petits-déjeuners', 'planning de départ : ' + Math.round(share * 100) + ' % de salés (30 % attendus)');
    let sal2 = 0, tot2 = 0; for (let i = 0; i < 100; i++) A.proposeWeek({}).forEach(p => { tot2++; if (p.b.go === 'Salé') sal2++; });
    const sh2 = sal2 / tot2; if (sh2 < .22 || sh2 > .38) fail('petits-déjeuners', 'propositions : ' + Math.round(sh2 * 100) + ' % de salés (30 % attendus)');
    else out.push('✓ petits-déjeuners : ' + Math.round(share * 100) + ' % de salés dans le planning de départ, ' + Math.round(sh2 * 100) + ' % dans les propositions');
    const withSn = A.proposeWeek({}); if (!withSn.every(p => p.c && A.isSnack(p.c))) fail('collations', 'une semaine proposée sans collation');
    for (let i = 0; i < 100; i++) A.proposeDay({}).c || fail('collations', 'journée proposée sans collation'); }
  /* repas coréens : riz + 1 banchan à protéine + 2 banchan de légumes */
  { const R = A.getS().recipes, P = R.filter(r => r.cat === 'Banchan' && r.go === 'Protéine'), V = R.filter(r => r.cat === 'Banchan' && r.go === 'Légume'); let n = 0, bad = 0;
    if (P.length !== 8 || V.length !== 17) fail('banchan', P.length + ' à protéine et ' + V.length + ' de légumes (8 et 17 attendus)');
    P.forEach(p => { for (let i = 0; i < V.length; i++) for (let j = i + 1; j < V.length; j++) {
      const m = A.composeKorean(p, [V[i], V[j]]); n++; const why = [];
      const chk = A.protoCheck(m); if (chk.bad.length) why.push('protocole : ' + chk.bad.map(x => x.n).join(','));
      const rice = m.ing.find(x => /^riz/i.test(x.n)); if (!rice || +rice.q !== 140) why.push('riz');
      (m.steps.join(' ').match(/\{\{([^}]+)\}\}/g) || []).forEach(t => { const k = t.slice(2, -2).toLowerCase(); if (!m.ing.some(x => x.n.toLowerCase().includes(k) || k.includes(x.n.toLowerCase()))) why.push('token ' + k); });
      if (m.steps.some(s => /\{\{[^}]*\}\}/.test(s) && !/\{\{[^}]*\}\}/.test(s))) why.push('?');
      if (!(m.t > 0 && m.t <= 35)) why.push('durée ' + m.t);
      if (why.length) { bad++; if (bad < 4) fail('repas coréen', P.indexOf(p) + '/' + i + '/' + j + ' : ' + why.join(' ; ')); } } });
    if (!bad) out.push('✓ repas coréens : ' + n + ' combinaisons composées, protocole respecté'); }
  /* migration 10 → 11 : collations ajoutées, petits-déjeuners salés ramenés à 30 %, le reste de Cat conservé */
  { const S10 = A.defaultState(); S10.v = 10;
    S10.weeks.forEach(w => w.days.forEach(d => { delete d.meals.c; }));
    const salty = A.getS().recipes.filter(r => r.st === 'Petit-déjeuner' && r.go === 'Salé');
    S10.weeks[0].days.forEach((d, i) => { const r = salty[i % salty.length], keep = d.meals.b; d.meals.b = Object.assign({}, keep, { name: r.n, recipeId: r.id, go: 'Salé', ing: r.ing.map(x => Object.assign({ id: x.id }, x)) }); });
    S10.weeks[0].days[4].meals.l = { id: 'm-main', name: 'Plat fait main', recipeId: null, cat: '', st: '', base: '', ing: [], steps: [], tip: '' };
    S10.recipes.push({ id: 'perso-2', n: 'Recette de Cat', own: true, ing: [], steps: [] }); S10.weights.push({ date: '2026-10-02', kg: 59.1 });
    const seq10 = S => S.weeks.flatMap(w => w.days.flatMap(d => A.SLOTS.map(s => d.meals[s.k]))), before10 = A.planIssues(seq10(S10)).length;
    A.setS(S10); A.migrateAll(); const T = A.getS(), w0 = T.weeks[0];
    const salN = w0.days.filter(d => d.meals.b && d.meals.b.go === 'Salé').length, allC = T.weeks.every(w => w.days.every(d => d.meals.c && A.isSnack(d.meals.c)));
    const ok = T.v === 12 && allC && salN <= 2 && T.weights.length === 1 && T.recipes.some(r => r.id === 'perso-2') && w0.days[4].meals.l.name === 'Plat fait main'
      && T.recipes.filter(r => r.cat === 'Banchan').length === 25 && A.planIssues(seq10(T)).length <= before10;
    if (!ok) fail('migration 11', 'version ' + T.v + ', collations partout : ' + allC + ', salés semaine 1 : ' + salN + ', pesées ' + T.weights.length + ', perso ' + T.recipes.some(r => r.id === 'perso-2') + ', fait main ' + (w0.days[4].meals.l && w0.days[4].meals.l.name) + ', banchan ' + T.recipes.filter(r => r.cat === 'Banchan').length + ', règles : ' + A.planIssues(T.weeks.flatMap(w => w.days.flatMap(d => A.SLOTS.map(s => d.meals[s.k])))).slice(0, 2).join(' ; '));
    else out.push('✓ migration 10 → 11 : collations ajoutées, salés ramenés à ' + salN + ' sur 7, repas faits main, recettes de Cat et pesées conservés'); }
  /* migration 11 → 12 : les repas des recettes réécrites reprennent la version simple, le reste est conservé */
  { const S11 = A.defaultState(); S11.v = 11; const old = 'l-hachis-pois-panais';
    const m = S11.weeks[0].days[1].meals.l; m.recipeId = old; m.steps = ['ancienne étape trop longue']; S11.weights.push({ date: '2026-10-03', kg: 59 });
    const keep = S11.weeks[0].days[2].meals.d.name;
    A.setS(S11); A.migrateAll(); const U = A.getS(), mm = U.weeks[0].days[1].meals.l;
    const ok = U.v === 12 && mm.steps.length > 3 && !mm.steps.some(x => /ancienne étape/.test(x)) && U.weights.length === 1 && U.weeks[0].days[2].meals.d.name === keep;
    if (!ok) fail('migration 12', 'repas réécrit non remplacé ou données non conservées'); else out.push('✓ migration 11 → 12 : repas des recettes réécrites remplacés par la version simple, le reste conservé'); }
}
console.log(out.join('\n'));
console.log(NEW_RECIPES.length + ' recettes, ' + errors + ' en erreur');
process.exitCode = errors ? 1 : 0;
