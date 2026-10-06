
/* =====================================================================
   v3 : 80 % végétarien, légumes variés, herbes, plats japonais et coréens doux,
   petits-déjeuners légers (sucré / salé), recette visible tout de suite, aperçu des menus
   ===================================================================== */
const NONVEG = ["Poulet", "Sardines"];
const isVegCat = c => NONVEG.indexOf(c) < 0;
const vegRatio = () => S.vegRatio > 0 ? S.vegRatio : 80;
const EGG_PREPS = [/oeufs? (?:durs?|mollets?|poches?|au plat|brouilles?|cocotte)/, /omelette/, /chawan/];
function eggsOK(m){
  const t = norm((m.name || m.n || "") + " " + (m.steps || []).join(" ").replace(/\{\{[^}]*\}\}/g, " ")); let n = 0;
  EGG_PREPS.forEach(re => { if (re.test(t)) n++; }); return n <= 1;
}
/* ---------- variété du planning ----------
   Ingrédients principaux d'un repas : sa protéine (œufs, poulet, tofu, protéine de pois, protéine de soja, sardines, okara) et son féculent.
   Deux repas qui se suivent (petit-déjeuner, déjeuner, dîner, puis petit-déjeuner du lendemain) n'en partagent aucun,
   ce qui interdit aussi le même ingrédient principal midi et soir. Œufs : EGG_MAX repas par semaine au plus, jamais à la suite. */
const EGG_MAX = 3;
const MAIN_RE = [["œufs", /\boeufs?\b/], ["poulet", /poulet/], ["tofu", /\btofu\b/], ["protéine de pois", /pois texturee/], ["protéine de soja", /soja texturee/], ["sardines", /sardine/], ["okara", /okara/]];
const isSnack = m => !!m && m.cat === "Collation";
const MAIN_SLOTS = () => SLOTS.filter(sl => sl.k !== "c");
/* petits-déjeuners : 70 % sucrés, 30 % salés (3 salés tous les 10 jours) */
const pdSalty = i => Math.floor((i + 1) * 3 / 10) > Math.floor(i * 3 / 10);
function mainKeys(m){
  if (!m || isSnack(m)) return []; const t = (m.ing || []).map(i => norm(i.n)).join(" | ");
  const k = MAIN_RE.filter(x => x[1].test(t)).map(x => x[0]); if (m.base) k.push("féculent : " + String(m.base).toLowerCase()); return k;
}
function isEgg(m){ return mainKeys(m).indexOf("œufs") >= 0; }
function clash(a, b){ if (!a || !b) return null; const kb = mainKeys(b); return mainKeys(a).find(k => kb.indexOf(k) >= 0) || null; }
/* repas dans l'ordre de la semaine (b, l, d, b, l, d…) : liste des règles non respectées */
function planIssues(seq){
  seq = seq.filter(m => !isSnack(m));   /* les collations ne comptent pas : elles ne contiennent ni œuf ni protéine principale */
  const out = []; let eggs = 0;
  seq.forEach((m, i) => { if (!m) return; if (isEgg(m)) eggs++; const c = clash(seq[i - 1], m); if (c) out.push("repas " + (i + 1) + " : " + c + " deux repas de suite"); });
  if (eggs > EGG_MAX * Math.max(1, Math.ceil(seq.length / 21))) out.push(eggs + " repas aux œufs (maximum " + EGG_MAX + " par semaine)");
  return out;
}
const FERMENTED_RE = /\b(miso|sauce soja)\b/;
const hasFermented = m => (m.ing || []).some(i => FERMENTED_RE.test(norm(i.n)));

/* ---------- variations : légumes variés, herbes, 80 % végétarien ---------- */
const RECENT_VEG = [];
function pickVeg(f, not){
  const cs = vegCombos(f).filter(c => !not || c.join() !== not.join()); if (!cs.length) return null;
  const ws = cs.map(c => c.reduce((p, k) => p * vegWeight(k) * (RECENT_VEG.indexOf(k) >= 0 ? .25 : 1), 1));
  let r = Math.random() * ws.reduce((a, b) => a + b, 0), res = cs[cs.length - 1];
  for (let i = 0; i < cs.length; i++) { r -= ws[i]; if (r <= 0) { res = cs[i]; break; } }
  RECENT_VEG.push(...res); while (RECENT_VEG.length > 14) RECENT_VEG.shift(); return res;
}
const HERBS_DEFAULT = ["persil", "basilic", "aneth", "cerfeuil", "thym", "estragon"];
["bamboo", "slow", "cocon", "fraicheur", "bol"].forEach(id => { const f = FORMATS.find(x => x.id === id); if (f && !f.herbs) f.herbs = HERBS_DEFAULT; });
function buildGen(g){
  const f = FORMATS.find(x => x.id === g.f);
  if (g.herb === undefined) g.herb = f.herbs && f.herbs.length ? pick(f.herbs) : "";
  const m = buildGen0(g), fin = m.steps.findIndex(s => /^Finition — /.test(s));
  if (g.herb && !m.ing.some(i => norm(i.n).indexOf(norm(g.herb)) >= 0)) {
    m.ing.push({ n: g.herb, q: "", u: H });
    const extra = " Ciseler très finement quelques brins " + de(g.herb) + " frais : un parfum doux, sans aucun piquant.";
    if (fin >= 0) m.steps[fin] += extra; else m.steps.splice(m.steps.length - 1, 0, "Finition —" + extra);
  }
  m.gen = { ...g }; return m;
}
function randomGen(filters = {}, tries = 160){
  const cats = filters.cats || [], bases = filters.bases || [], styles = filters.styles || [];
  const wv = cats.length ? null : Math.random() * 100 < vegRatio();
  for (let t = 0; t < tries; t++){
    const fl = FORMATS.filter(f => (!styles.length || styles.includes(f.st)) && f.s.some(s => !bases.length || bases.includes(STARCHES[s].base)));
    if (!fl.length) return null;
    const f = pick(fl);
    const ps = formatProteins(f).filter(p => PROTEINS[p] && (!cats.length || cats.includes(PROTEINS[p].cat)) && (wv === null || isVegCat(PROTEINS[p].cat) === wv));
    const ss = f.s.filter(s => !bases.length || bases.includes(STARCHES[s].base));
    if (!ps.length || !ss.length) continue;
    const m = buildGen({ f: f.id, p: pick(ps), s: pick(ss), v: pickVeg(f), sa: pick(f.sa) });
    if (!protoCheck(m).bad.length && eggsOK(m) && !(S.sensible && hasFermented(m))) return m;
  }
  return null;
}
function catalogFor(f){
  const bk = slotOf(f) === "b", wv = bk || (f.cats && f.cats.length) ? null : Math.random() * 100 < vegRatio();
  return S.recipes.filter(r => CATS.includes(r.cat) && r.st !== "Douceurs" && ((r.st === "Petit-déjeuner") === bk) && okSens(r) && eggsOK(r) &&
    (!bk || !f.pd || r.go === f.pd) && (wv === null || isVegCat(r.cat) === wv) &&
    (!f.cats || !f.cats.length || f.cats.includes(r.cat)) && (!f.bases || !f.bases.length || f.bases.includes(r.base)) && (!f.styles || !f.styles.length || f.styles.includes(r.st)));
}
/* petits-déjeuners : 70 % sucrés, 30 % salés */
function proposeMeals(n, f){
  const out = [], seen = new Set(), bk = slotOf(f) === "b", off = Math.floor(Math.random() * 10);
  for (let i = 0; i < n * 3 && out.length < n; i++){
    const ff = bk && !f.pd ? { ...f, pd: pdSalty(out.length + off) ? "Salé" : "Sucré" } : f;
    const m = oneProposal(ff, seen); if (m && !seen.has(m.name)) { seen.add(m.name); out.push(m); }
  }
  return out;
}
/* une journée : chaque repas évite l'ingrédient principal du repas précédent (ctx.prev : dîner de la veille)
   et le dîner évite celui du petit-déjeuner suivant (ctx.next) ; ctx.eggs : repas aux œufs déjà prévus dans la semaine */
function proposeDay(f, avoid, ctx){
  avoid = new Set(avoid || []); ctx = ctx || {}; f = f || {};
  const out = {}, eggMax = ctx.eggMax != null ? ctx.eggMax : EGG_MAX; let prev = ctx.prev || null, eggs = ctx.eggs || 0;
  const MAINS = MAIN_SLOTS();
  MAINS.forEach((sl, si) => {
    const bk = sl.k === "b", last = si === MAINS.length - 1; let best = null, bestBad = 1e9;
    for (let t = 0; t < 150; t++){
      const m = oneProposal({ ...f, slot: sl.k }, avoid) || oneProposal({ src: bk ? "book" : "gen", slot: sl.k }, avoid); if (!m) continue;
      const bad = (clash(prev, m) ? 2 : 0) + (last && clash(m, ctx.next) ? 2 : 0) + (isEgg(m) && eggs >= eggMax ? 3 : 0) + (ctx.ok && !ctx.ok(m, sl.k) ? 1 : 0);
      if (bad < bestBad) { best = m; bestBad = bad; } if (!bad) break;
    }
    if (!best) best = oneProposal({ src: "mix", slot: sl.k }, new Set());
    out[sl.k] = best; if (best) { avoid.add(best.name); if (isEgg(best)) eggs++; prev = best; }
  });
  if (ctx.snack !== false) { const c = oneProposal({ slot: "c" }, avoid) || oneProposal({ slot: "c" }, new Set()); if (c) { out.c = c; avoid.add(c.name); } }
  return out;
}
/* une semaine : mêmes règles d'un jour à l'autre, œufs limités, poulet limité (80 % végétarien) */
function proposeWeek(f){
  f = f || {}; const off = Math.floor(Math.random() * 10), limit = f.cats && f.cats.length ? 99 : 5;
  let best = null, bestN = 1e9;
  for (let a = 0; a < 40; a++){
    const days = [], avoid = new Set(), count = {}; let prev = null, eggs = 0;
    for (let i = 0; i < 7; i++){
      const ok = (m, k) => k === "b" || (count[m.cat] || 0) < (limit > 50 ? limit : isVegCat(m.cat) ? 7 : 3);
      const p = proposeDay({ ...f, pd: f.pd || (pdSalty(i + off) ? "Salé" : "Sucré") }, avoid, { prev, eggs, ok });
      SLOTS.forEach(sl => { const m = p[sl.k]; if (!m) return; avoid.add(m.name); if (sl.k === "c") return; if (isEgg(m)) eggs++; if (sl.k !== "b") count[m.cat] = (count[m.cat] || 0) + 1; prev = m; });
      days.push(p);
    }
    const n = planIssues(days.flatMap(p => SLOTS.map(sl => p[sl.k]))).length;
    if (n < bestN) { best = days; bestN = n; } if (!n) break;
  }
  return best;
}
/* contexte d'un jour du planning : dîner de la veille, petit-déjeuner du lendemain, œufs des autres jours */
function dayCtx(w, di){
  const d = w.days, prev = di > 0 ? d[di - 1].meals.d : null, next = di < d.length - 1 ? d[di + 1].meals.b : null;
  let eggs = 0; d.forEach((x, i) => { if (i !== di) SLOTS.forEach(sl => { if (isEgg(x.meals[sl.k])) eggs++; }); });
  return { prev, next, eggs };
}
function bfFilter(ns){
  const st = ns === "prop" ? PROP : INSP;
  return `<div class="filters"><div class="frow"><span class="flabel">Petit-déjeuner</span><div class="chips">
    ${[["", "Sucré et salé"], ["Sucré", "Sucré"], ["Salé", "Salé"]].map(([v, l]) => `<button class="chip" data-act="pdKind" data-ns="${ns}" data-v="${v}" aria-pressed="${(st.pd || "") === v}">${l}</button>`).join("")}</div></div>
    <p class="muted small">Légers : 10 minutes au plus, 70 % sucrés et 30 % salés.</p></div>`;
}
A.pdKind = ds => { const st = ds.ns === "prop" ? PROP : INSP; st.pd = ds.v;
  if (ds.ns === "prop") { PROP.items = proposeMeals(6, PROP); renderPropModal(); } else { INSP.result = null; render(); } };
A.vegRatio = ds => { S.vegRatio = +ds.v; save(); render(); };

/* ---------- recette visible tout de suite, sans quitter l'écran ---------- */
let NEWSET = new Set();
function mealBadges(m){
  const b = []; if (NEWSET.has(m.id)) b.push("nouveau");
  if (m.go) b.push(m.go.toLowerCase());
  if (m.adj && Math.abs(m.adj - 1) > .02) b.push("portions " + (m.adj > 1 ? "+" : "−") + Math.round(Math.abs(m.adj - 1) * 100) + " %");
  (m.iv || []).slice(0, 2).forEach(v => b.push("+ " + v));
  return b.map(x => `<span class="mb${x === "nouveau" ? " new" : ""}">${esc(x)}</span>`).join("");
}
function mealPeek(m){
  const ings = (m.ing || []).filter(i => String(i.n).trim());
  return `<div class="peek"><p class="muted small">${m.t ? m.t + " min · " : ""}≈ ${fmtK(kcalOf(m))} kcal</p>${protoBanner(m)}
    <h5>Ingrédients</h5><ul class="peek-ing">${ings.map(i => `<li>${hasQ(i) ? `<b>${esc(qtyStr(i))}</b> ` : ""}${esc(i.n)}${!hasQ(i) && i.u ? ` <span class="muted">(${esc(i.u)})</span>` : ""}</li>`).join("")}</ul>
    <h5>Préparation</h5><ol class="steps">${stepsHTML(m.steps, m.ing)}</ol>${m.tip ? `<p class="peek-tip"><b>Astuce du chef :</b> ${esc(m.tip)}</p>` : ""}</div>`;
}
function propCard(m, i, actions){
  const ings = m.ing.filter(x => x.q !== "").slice(0, 5).map(x => x.n).join(", ");
  return `<article class="prop" ${catSt(m.cat)}><p class="prop-tag">${catTag(m.cat)}<span>${m.gen ? "Variation" : "Carnet"}, ${esc(m.st || "")}${m.go ? " · " + esc(m.go.toLowerCase()) : ""}</span></p>
    <h4 class="dish-name">${esc(m.name)}</h4>${m.sub ? `<p class="dish-sub">${esc(m.sub)}</p>` : ""}
    <p class="muted small">${esc(ings)}…</p><p class="dish-meta">≈ ${fmtK(kcalOf(m))} kcal ${protoDot(m)}</p>
    <details class="peek-d"><summary>${ic("book")} Voir la recette complète</summary>${mealPeek(m)}</details>
    <div class="prop-actions">${S.recipes.some(r => r.n === m.name) ? actions.replace(/<button class="btn" data-act="inspSave"[^>]*>[^<]*<\/button>/, '<span class="muted small">✓ Déjà dans tes recettes</span>') : actions}</div></article>`;
}

/* ---------- aperçu des nouveaux menus : rien ne change tant qu'on n'applique pas ---------- */
let PV = null;
function pvMeal(m, di, sk){
  if (!m) return "";
  return `<div class="pv-meal" ${catSt(m.cat)}><details><summary><span class="slot">${slotLabel(sk)}</span><span class="pv-n">${esc(m.name)}</span><span class="pv-k">≈ ${fmtK(kcalOf(m))} kcal</span></summary>${mealPeek(m)}</details>
    <button class="mini" data-act="pvRe" data-di="${di}" data-s="${sk}" aria-label="Autre proposition">${ic("swap")} Autre</button></div>`;
}
function pvBody(){
  const w = curWeek();
  const day = (p, di, name) => `<article class="day pv-day"><div class="day-head"><span class="day-name static">${esc(name)}</span><span class="muted small">≈ ${fmtK(SLOTS.reduce((s, sl) => s + (p[sl.k] ? kcalOf(p[sl.k]) : 0), 0))} kcal par jour</span></div>${SLOTS.map(sl => pvMeal(p[sl.k], di, sl.k)).join("")}</article>`;
  return PV.scope === "week" ? PV.items.map((p, i) => day(p, i, w.days[i].name)).join("") : day(PV.items, 0, w.days[PV.di].name);
}
function openPreview(){
  const w = curWeek(), wk = PV.scope === "week";
  MODAL = { kind: "preview" };
  openModal(`<p class="eyebrow">${esc(w.name)}</p><h2 class="display-s">${wk ? "Nouveaux menus pour la semaine" : "Nouveaux repas pour " + esc(w.days[PV.di].name)}</h2>
    <p class="muted"><b>Rien n'est encore modifié.</b> Touche un repas pour lire sa recette, « Autre » pour le changer, puis applique quand le menu te plaît.</p>
    <div id="pvBody">${pvBody()}</div>
    <div class="sheet-foot"><button class="btn ghost" data-act="close">Annuler</button><button class="btn" data-act="pvAgain">${ic("swap")} Tout refaire</button><button class="btn primary push" data-act="pvApply">${wk ? "Appliquer à la semaine" : "Appliquer à ce jour"}</button></div>`, { wide: true });
}
function pvAvoid(){ const s = new Set(); (PV.scope === "week" ? PV.items : [PV.items]).forEach(p => SLOTS.forEach(sl => p[sl.k] && s.add(p[sl.k].name))); return s; }
function pvNew(){
  const w = curWeek();
  if (PV.scope === "week") { const ps = proposeWeek({}); PV.items = w.days.map((d, i) => ps[i % 7]); }
  else PV.items = proposeDay({}, weekUsed(w, PV.di), dayCtx(w, PV.di));
}
A.proposeWeek = () => { PV = { scope: "week" }; pvNew(); openPreview(); };
A.proposeDay = ds => { PV = { scope: "day", di: +ds.d }; pvNew(); openPreview(); };
A.pvAgain = () => { pvNew(); $("#pvBody").innerHTML = pvBody(); };
A.pvRe = ds => { const p = PV.scope === "week" ? PV.items[+ds.di] : PV.items, m = oneProposal({ slot: ds.s }, pvAvoid()); if (!m) return toast("Pas d'autre idée pour l'instant");
  p[ds.s] = m; $("#pvBody").innerHTML = pvBody(); };
A.pvApply = () => {
  const w = curWeek(); snapshot(); NEWSET = new Set(); let n = 0;
  const put = (d, p) => SLOTS.forEach(sl => { if (p[sl.k]) { d.meals[sl.k] = p[sl.k]; NEWSET.add(p[sl.k].id); n++; } });
  if (PV.scope === "week") w.days.forEach((d, i) => put(d, PV.items[i])); else put(w.days[PV.di], PV.items);
  save(); closeModal(); render(); toast(n + " repas remplacés", true); PV = null;
};

/* ---------- version 3 : migration ---------- */
const V3_REMOVED = { "pdj-millet-potimarron": "pdj-potimarron-vanille", "p-poulet-millet-haricots": "p-poulet-riz-pakchoi", "p-tofu-millet-potimarron": "p-tofu-quinoa-potimarron" };
const V3_OLD_PDJ = ["pdj-porridge-sale", "pdj-galette-sarrasin", "pdj-riz-tiede-sesame", "pdj-puree-oeuf-poulet", "pdj-chawanmushi", "pdj-pouding-avoine", "pdj-crepe-sarrasin-tofu"];
function migrate3(){
  const own = S.recipes.filter(r => r.own); S.recipes = DEFAULT_RECIPES.map(recipeToState).concat(own);
  const fresh = buildDefaultPlan(S.recipes), byId = id => S.recipes.find(r => r.id === id);
  let j = 0;
  S.weeks.forEach((w, wi) => w.days.forEach((d, di) => {
    const src = fresh[wi % fresh.length].days[di % 7].meals;
    ["b", "l", "d"].forEach(k => {
      const m = d.meals[k]; if (!m || !m.recipeId) return;
      if (V3_REMOVED[m.recipeId] && byId(V3_REMOVED[m.recipeId])) d.meals[k] = mealFromRecipe(byId(V3_REMOVED[m.recipeId]));
      else if (V3_OLD_PDJ.indexOf(m.recipeId) >= 0 || (k !== "b" && /millet/.test(norm(m.ing.map(i => i.n).join(" "))))) d.meals[k] = copyMeal(src[k] || src.l);
    });
  }));
  if (!(S.vegRatio > 0)) S.vegRatio = 80;
  S.v = 3;
}

/* ---------- version 4 : recettes remises en conformité avec le mode d'emploi du Bamboo ---------- */
function migrate4(){
  const own = S.recipes.filter(r => r.own), oldIds = new Set(S.recipes.filter(r => !r.own).map(r => r.id));
  S.recipes = DEFAULT_RECIPES.map(recipeToState).concat(own);
  const fresh = buildDefaultPlan(S.recipes), byId = id => S.recipes.find(r => r.id === id);
  S.weeks.forEach((w, wi) => w.days.forEach((d, di) => {
    const src = fresh[wi % fresh.length].days[di % 7].meals;
    ["b", "l", "d"].forEach(k => {
      const m = d.meals[k]; if (!m || !m.recipeId || !oldIds.has(m.recipeId)) return;
      const r = byId(m.recipeId), nm = r ? mealFromRecipe(r) : copyMeal(src[k] || src.l);
      nm.id = m.id; protoAdaptMeal(nm, k, kT(k)); d.meals[k] = nm;
    });
  }));
  S.v = 4;
}

/* ---------- version 5 : temps vapeur alignés sur le guide du fabricant (docs/bamboo.md) ---------- */
function migrate5(){
  const own = S.recipes.filter(r => r.own), oldIds = new Set(S.recipes.filter(r => !r.own).map(r => r.id));
  S.recipes = DEFAULT_RECIPES.map(recipeToState).concat(own);
  const fresh = buildDefaultPlan(S.recipes), byId = id => S.recipes.find(r => r.id === id);
  S.weeks.forEach((w, wi) => w.days.forEach((d, di) => {
    const src = fresh[wi % fresh.length].days[di % 7].meals;
    ["b", "l", "d"].forEach(k => {
      const m = d.meals[k]; if (!m || !m.recipeId || !oldIds.has(m.recipeId)) return;
      const r = byId(m.recipeId), nm = r ? mealFromRecipe(r) : copyMeal(src[k] || src.l);
      nm.id = m.id; protoAdaptMeal(nm, k, kT(k)); d.meals[k] = nm;
    });
  }));
  S.v = 5;
}

/* ---------- version 6 : relecture des recettes avec docs/bamboo.md (poulet 30 min, cuve à revêtement céramique, réchauffage 5 min) ---------- */
function migrate6(){
  const own = S.recipes.filter(r => r.own), oldIds = new Set(S.recipes.filter(r => !r.own).map(r => r.id));
  S.recipes = DEFAULT_RECIPES.map(recipeToState).concat(own);
  const fresh = buildDefaultPlan(S.recipes), byId = id => S.recipes.find(r => r.id === id);
  S.weeks.forEach((w, wi) => w.days.forEach((d, di) => {
    const src = fresh[wi % fresh.length].days[di % 7].meals;
    ["b", "l", "d"].forEach(k => {
      const m = d.meals[k]; if (!m || !m.recipeId || !oldIds.has(m.recipeId)) return;
      const r = byId(m.recipeId), nm = r ? mealFromRecipe(r) : copyMeal(src[k] || src.l);
      nm.id = m.id; protoAdaptMeal(nm, k, kT(k)); d.meals[k] = nm;
    });
  }));
  S.v = 6;
}

/* ---------- version 7 : petits-déjeuners ramenés à 15 minutes au plus (mise en place + cuisson + dressage) ---------- */
const V7_REPLACED = { "pdj-flan-vanille": "pdj-creme-avoine", "pdj-moelleux-sarrasin": "pdj-crepe-sarrasin-banane", "pdj-puree-oeuf-poche": "pdj-oeufs-brouilles", "pdj-chawanmushi": "pdj-soupe-oeuf-tofu" };
function migrate7(){
  const own = S.recipes.filter(r => r.own), oldIds = new Set(S.recipes.filter(r => !r.own).map(r => r.id));
  S.recipes = DEFAULT_RECIPES.map(recipeToState).concat(own);
  const fresh = buildDefaultPlan(S.recipes), byId = id => S.recipes.find(r => r.id === id);
  S.weeks.forEach((w, wi) => w.days.forEach((d, di) => {
    const src = fresh[wi % fresh.length].days[di % 7].meals;
    ["b", "l", "d"].forEach(k => {
      const m = d.meals[k]; if (!m || !m.recipeId || !oldIds.has(m.recipeId)) return;
      const r = byId(m.recipeId) || byId(V7_REPLACED[m.recipeId]), nm = r ? mealFromRecipe(r) : copyMeal(src[k] || src.l);
      nm.id = m.id; protoAdaptMeal(nm, k, kT(k)); d.meals[k] = nm;
    });
  }));
  S.v = 7;
}

/* ---------- version 8 : sans isolat de pois, durées au barème par geste, doublons remplacés, protéines texturées ---------- */
const V8_REPLACED = { "p-poulet-quinoa-courgette": "l-bol-pois-butternut", "p-poulet-riz-pakchoi": "l-tofu-soyeux-pakchoi", "p-poulet-puree-panais": "l-hachis-pois-panais",
  "p-poulet-riz-aubergine": "l-soja-donburi-aubergine", "p-parmentier-poulet": "l-tofu-fume-brocoli", "p-bol-avocat": "l-galettes-okara-pois",
  "p-risotto-riz-poulet": "l-vermicelles-bouillon-tofu", "p-okayu-soir": "l-pot-au-feu-tofu", "p-gnocchis-sarrasin": "l-gateau-pdt-tofu",
  "p-chawanmushi-riz": "l-soja-miso-soba", "p-oeufs-poches-veloute": "l-veloute-celeri-tofu-soyeux", "p-oeufs-cocotte": "l-quinoa-tofu-soyeux-blettes",
  "p-tofu-puree-courgette": "l-papillote-tofu-basilic", "p-tofu-quinoa-potimarron": "l-minestrone-pois", "pdj-oeuf-mouillettes": "pdj-omelette-roulee" };
function migrate8(){
  const own = S.recipes.filter(r => r.own), oldIds = new Set(S.recipes.filter(r => !r.own).map(r => r.id));
  S.recipes = DEFAULT_RECIPES.map(recipeToState).concat(own);
  const fresh = buildDefaultPlan(S.recipes), byId = id => S.recipes.find(r => r.id === id);
  S.weeks.forEach((w, wi) => w.days.forEach((d, di) => {
    const src = fresh[wi % fresh.length].days[di % 7].meals;
    ["b", "l", "d"].forEach(k => {
      const m = d.meals[k]; if (!m || !m.recipeId || (!oldIds.has(m.recipeId) && !V8_REPLACED[m.recipeId])) return;
      const r = byId(m.recipeId) || byId(V8_REPLACED[m.recipeId]), nm = r ? mealFromRecipe(r) : copyMeal(src[k] || src.l);
      nm.id = m.id; protoAdaptMeal(nm, k, kT(k)); d.meals[k] = nm;
    });
  }));
  S.v = 8;
}

/* ---------- version 9 : catalogue entièrement renouvelé, planning refait ----------
   Toutes les recettes fournies sont remplacées. Chaque repas du planning est refait avec le nouveau planning de départ,
   sauf ceux tirés d'une recette personnelle ou créés à la main (sans recette ni génération). */
function migrate9(){
  const own = S.recipes.filter(r => r.own), ownIds = new Set(own.map(r => r.id));
  S.recipes = DEFAULT_RECIPES.map(recipeToState).concat(own);
  const fresh = buildDefaultPlan(S.recipes);
  S.weeks.forEach((w, wi) => w.days.forEach((d, di) => {
    const src = fresh[wi % fresh.length].days[di % 7].meals;
    ["b", "l", "d"].forEach(k => {
      const m = d.meals[k];
      if (m && ((m.recipeId && ownIds.has(m.recipeId)) || (!m.recipeId && !m.gen))) return;
      const nm = copyMeal(src[k] || src.l); if (m) nm.id = m.id; protoAdaptMeal(nm, k, kT(k)); d.meals[k] = nm;
    });
  }));
  S.v = 9;
}

/* ---------- version 10 : recettes plus savoureuses (petits-déjeuners, poulet, œufs, tofu) ----------
   Les recettes fournies sont remplacées. Seuls les repas du planning issus d'une recette qui n'existe plus sont refaits ;
   les autres repas, les recettes de Cat, ses pesées et ses réglages sont conservés. */
function migrate10(){
  const own = S.recipes.filter(r => r.own), oldIds = new Set(S.recipes.filter(r => !r.own).map(r => r.id));
  S.recipes = DEFAULT_RECIPES.map(recipeToState).concat(own);
  const have = new Set(S.recipes.map(r => r.id));
  const fresh = buildDefaultPlan(S.recipes);
  S.weeks.forEach((w, wi) => w.days.forEach((d, di) => {
    const src = fresh[wi % fresh.length].days[di % 7].meals;
    ["b", "l", "d"].forEach(k => {
      const m = d.meals[k];
      if (!m || !m.recipeId || have.has(m.recipeId) || !oldIds.has(m.recipeId)) return;
      const nm = copyMeal(src[k] || src.l); nm.id = m.id; protoAdaptMeal(nm, k, kT(k)); d.meals[k] = nm;
    });
  }));
  S.v = 10;
}

/* ---------- version 11 : collations, petits-déjeuners 70 % sucrés / 30 % salés, banchan ----------
   Les recettes fournies sont renouvelées (nouvelles collations et nouveaux banchan). Chaque jour reçoit une collation s'il n'en a pas.
   Dans chaque semaine, les petits-déjeuners salés issus du carnet au-delà de 30 % (2 sur 7) deviennent des sucrés, sans casser les règles de variété.
   Les repas faits à la main, les recettes de Cat, ses pesées et ses réglages ne bougent pas. */
function migrate11(){
  const own = S.recipes.filter(r => r.own);
  S.recipes = DEFAULT_RECIPES.map(recipeToState).concat(own);
  const have = new Set(S.recipes.map(r => r.id));
  const sweet = S.recipes.filter(r => r.st === "Petit-déjeuner" && r.go === "Sucré" && !r.own), snacks = S.recipes.filter(r => r.cat === "Collation" && !r.own);
  const fresh = buildDefaultPlan(S.recipes);
  S.weeks.forEach((w, wi) => {
    const names = new Set(); w.days.forEach(d => SLOTS.forEach(sl => d.meals[sl.k] && names.add(d.meals[sl.k].name)));
    let salty = w.days.filter(d => d.meals.b && d.meals.b.go === "Salé").length; const maxSalty = Math.round(w.days.length * .3);
    w.days.forEach((d, di) => {
      d.meals = d.meals || {};
      const b = d.meals.b;
      if (b && b.go === "Salé" && b.recipeId && have.has(b.recipeId) && salty > maxSalty) {
        const prev = di > 0 ? w.days[di - 1].meals.d : null, next = d.meals.l;
        const ok = sweet.filter(r => !names.has(r.n)).map(r => mealFromRecipe(r)).find(m => !clash(prev, m) && !clash(m, next));
        if (ok) { ok.id = b.id; protoAdaptMeal(ok, "b", kT("b")); d.meals.b = ok; names.add(ok.name); salty--; }
      }
      if (!d.meals.c) {
        const src = fresh[wi % fresh.length].days[di % 7].meals.c, pick1 = src && !names.has(src.name) ? src : mealFromRecipe(snacks.find(r => !names.has(r.n)) || snacks[0]);
        d.meals.c = copyMeal(pick1); names.add(d.meals.c.name);
      }
    });
  });
  S.v = 11;
}

/* ---------- Carnet : onglet Banchan (traités à part) ---------- */
const bcRecipes = () => S.recipes.filter(r => r.cat === "Banchan");
const bcShort = n => String(n).split(":")[0].trim();
const bcSub = n => String(n).indexOf(":") >= 0 ? String(n).split(":").slice(1).join(":").trim() : "";
function viewBook(){
  const tab = BOOK.tab === "banchan" ? "banchan" : "recettes";
  const seg = `<div class="seg bk-tabs" role="tablist">${[["recettes", "Recettes (" + S.recipes.filter(r => r.cat !== "Banchan").length + ")"], ["banchan", "Banchan coréens (" + bcRecipes().length + ")"]].map(([v, l]) => `<button class="seg-b" data-act="bookTab" data-v="${v}" aria-pressed="${tab === v}">${l}</button>`).join("")}</div>`;
  return seg + (tab === "banchan" ? viewBanchan() : viewBookRecipes());
}
A.bookTab = ds => { BOOK.tab = ds.v; render(); window.scrollTo(0, 0); };
function viewBanchan(){
  const all = bcRecipes().filter(okSens), group = (title, note, list) => `<section class="book-group" style="--cc:var(--c-veg)"><h2 class="group-title">${esc(title)}</h2><p class="muted small">${esc(note)}</p>
    <ul class="book-list">${list.map(r => `<li><button class="book-item" data-act="openRecipe" data-id="${r.id}"><span class="dish-name">${esc(bcShort(r.n))}</span>
    <span class="dish-meta">${esc(bcSub(r.n))}${r.t ? " · " + r.t + " min" : ""} · ≈ ${fmtK(kcalOf(r))} kcal</span></button></li>`).join("")}</ul></section>`;
  return `<header class="pagehead"><div><h1 class="display">Banchan</h1><p class="muted">Petits plats coréens servis avec du riz. Un repas coréen complet : un banchan à protéine et deux banchan de légumes.</p></div>
      <button class="btn primary" data-act="krOpen">Composer un repas coréen</button></header>
    ${group("À protéine", "Tofu ou œuf : le plat principal du repas (80 à 100 g de protéine).", all.filter(r => r.go === "Protéine"))}
    ${group("De légumes", "Légumes cuits et tièdes, à l'huile de sésame grillé : deux par repas.", all.filter(r => r.go === "Légume"))}
    ${S.sensible ? `<p class="muted small">Phase de sensibilité aiguë : les banchan à la sauce soja sont masqués.</p>` : ""}`;
}

/* ---------- repas coréen : riz + 1 banchan à protéine + 2 banchan de légumes ---------- */
let KR = null;
function krBody(){
  const all = bcRecipes().filter(okSens), P = all.filter(r => r.go === "Protéine"), V = all.filter(r => r.go === "Légume");
  const item = (r, on, act) => `<button class="choice kr-it" data-act="${act}" data-id="${r.id}" aria-pressed="${on}"><strong>${esc(bcShort(r.n))}</strong><span>${esc(bcSub(r.n))} · ${r.t} min · ≈ ${fmtK(kcalOf(r))} kcal</span></button>`;
  const p = KR.p && P.find(r => r.id === KR.p), vs = KR.v.map(id => V.find(r => r.id === id)).filter(Boolean);
  const veg = vs.reduce((s, r) => s + r.ing.reduce((t, i) => (lookup(i.n) || {}).a === "Légumes" ? t + num(i.q) : t, 0), 0);
  const ready = p && vs.length === 2, meal = ready ? composeKorean(p, vs) : null;
  return `<h3 class="kr-h">1 · Le plat principal</h3><div class="choice-list kr-list">${P.map(r => item(r, KR.p === r.id, "krP")).join("")}</div>
    <h3 class="kr-h">2 · Deux banchan de légumes</h3><div class="choice-list kr-list">${V.map(r => item(r, KR.v.indexOf(r.id) >= 0, "krV")).join("")}</div>
    <p class="muted small kr-sum">${ready ? `Riz ${KR_RICE} g + ${esc(bcShort(p.n))} + ${vs.map(r => esc(bcShort(r.n))).join(" + ")} · ≈ ${fmtK(kcalOf(meal))} kcal · légumes ${Math.round(veg)} g${veg < 150 ? " (un légume de saison sera ajouté pour atteindre 150 g)" : ""}`
      : "Choisis un banchan à protéine et deux banchan de légumes."}</p>`;
}
A.krOpen = ds => {
  const t = ds && ds.d != null ? T(ds) : null; KR = { t, p: null, v: [] }; MODAL = { kind: "kr", t };
  openModal(`<p class="eyebrow">${t ? esc(S.weeks[t.w].name) + ", " + esc(S.weeks[t.w].days[t.d].name) + ", " + slotLabel(t.s).toLowerCase() : "Carnet de banchan"}</p><h2 class="display-s">Composer un repas coréen</h2>
    <div id="krBody">${krBody()}</div>
    <div class="sheet-foot"><button class="btn ghost" data-act="close">Annuler</button><button class="btn primary push" data-act="krGo">${t ? "Mettre au planning" : "Choisir où l'ajouter"}</button></div>`, { wide: true });
};
const krRefresh = () => { const e = $("#krBody"); if (e) e.innerHTML = krBody(); };
A.krP = ds => { KR.p = KR.p === ds.id ? null : ds.id; krRefresh(); };
A.krV = ds => { const i = KR.v.indexOf(ds.id); if (i >= 0) KR.v.splice(i, 1); else { KR.v.push(ds.id); if (KR.v.length > 2) KR.v.shift(); } krRefresh(); };
A.krGo = () => {
  const p = bcRecipes().find(r => r.id === KR.p), vs = KR.v.map(id => bcRecipes().find(r => r.id === id)).filter(Boolean);
  if (!p || vs.length < 2) return toast("Choisis un banchan à protéine et deux banchan de légumes");
  const meal = composeKorean(p, vs), t = KR.t; KR = null;
  if (t) { snapshot(); setMeal(t, meal); afterSelect(t); } else { closeModal(); placeTemp(meal); }
};

/* ---------- version 12 : 20 recettes tofu / protéines végétales / sardines simplifiées, 10 banchan en plus ----------
   Les recettes fournies sont renouvelées. Les repas du planning tirés d'une des 20 recettes réécrites reprennent la version simple ;
   le reste (repas faits main, recettes de Cat, pesées, réglages) ne bouge pas. */
const V12_REWRITTEN = ["t-bol-tofu-sesame-daikon", "t-risotto-quinoa-potimarron", "t-miso-tofu-soyeux-navet", "t-quinoa-blettes-patisson", "t-donburi-tofu-soyeux",
  "l-tofu-soyeux-pakchoi", "l-tofu-fume-brocoli", "l-papillote-tofu-basilic", "l-quinoa-tofu-soyeux-blettes", "l-vermicelles-bouillon-tofu",
  "l-hachis-pois-panais", "l-bol-pois-butternut", "l-soja-miso-soba", "l-soja-donburi-aubergine", "l-galettes-okara-pois", "l-minestrone-pois",
  "x-boulettes-pois-brocoli", "x-bol-pois-potimarron", "s-sardines-pdt-haricots"];
function migrate12(){
  const own = S.recipes.filter(r => r.own);
  S.recipes = DEFAULT_RECIPES.map(recipeToState).concat(own);
  const byId = id => S.recipes.find(r => r.id === id);
  S.weeks.forEach(w => w.days.forEach(d => ["l", "d"].forEach(k => {
    const m = d.meals[k]; if (!m || !m.recipeId || V12_REWRITTEN.indexOf(m.recipeId) < 0 || !byId(m.recipeId)) return;
    const nm = mealFromRecipe(byId(m.recipeId)); nm.id = m.id; protoAdaptMeal(nm, k, kT(k)); d.meals[k] = nm;
  })));
  S.v = 12;
}

/* ---------- migration 13 : cohérence ingrédients / étapes ----------
   Les recettes fournies sont renouvelées ; les repas du planning tirés d'une recette corrigée, et les plats générés
   (leurs textes citaient du sel, de la crème, des pommes de terre… absents de la liste), sont reconstruits.
   Repas faits main, recettes de Cat, pesées et réglages ne bougent pas. */
const V13_CHANGED = ["n-pdj-galette-sarrasin-tofu-epinards", "n-c-poulet-hainanais", "l-vermicelles-bouillon-tofu", "n-col-avoine-minute-banane",
  "n-col-tofu-soyeux-sesame", "n-col-tartine-tofu-soyeux"];
function migrate13(){
  const own = S.recipes.filter(r => r.own);
  S.recipes = DEFAULT_RECIPES.map(recipeToState).concat(own);
  const byId = id => S.recipes.find(r => r.id === id);
  S.weeks.forEach(w => w.days.forEach(d => SLOTS.forEach(sl => {
    const k = sl.k, m = d.meals[k]; if (!m) return; let nm = null;
    if (m.recipeId && V13_CHANGED.indexOf(m.recipeId) >= 0 && byId(m.recipeId)) nm = mealFromRecipe(byId(m.recipeId));
    else if (m.gen && !m.recipeId) { try { nm = mealFromGen(buildGen({ ...m.gen })); } catch (e) { nm = null; } }
    if (nm) { nm.id = m.id; protoAdaptMeal(nm, k, kT(k)); d.meals[k] = nm; }
  })));
  S.v = 13;
}
