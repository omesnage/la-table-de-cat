
/* =====================================================================
   v3 : 80 % végétarien, légumes variés, herbes, plats japonais et coréens doux,
   petits-déjeuners légers (sucré / salé), recette visible tout de suite, aperçu des menus
   ===================================================================== */
const NONVEG = ["Poulet", "Sardines"];
const isVegCat = c => NONVEG.indexOf(c) < 0;
const vegRatio = () => S.vegRatio > 0 ? S.vegRatio : 80;
const EGG_PREPS = [/oeufs? (?:durs?|mollets?|poches?|au plat|brouilles?|cocotte)/, /omelette/, /chawan/, /\boeufs? mollets?\b/];
function eggsOK(m){
  const t = norm((m.name || m.n || "") + " " + (m.steps || []).join(" ").replace(/\{\{[^}]*\}\}/g, " ")); let n = 0;
  EGG_PREPS.forEach(re => { if (re.test(t)) n++; }); return n <= 1;
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
/* petits-déjeuners : une fois sur deux sucré, une fois sur deux salé */
function proposeMeals(n, f){
  const out = [], seen = new Set(), bk = slotOf(f) === "b", off = Math.random() < .5 ? 0 : 1;
  for (let i = 0; i < n * 3 && out.length < n; i++){
    const ff = bk && !f.pd ? { ...f, pd: (out.length + off) % 2 === 0 ? "Sucré" : "Salé" } : f;
    const m = oneProposal(ff, seen); if (m && !seen.has(m.name)) { seen.add(m.name); out.push(m); }
  }
  return out;
}
function proposeWeek(f){
  const days = [], avoid = new Set(), count = {}, off = Math.random() < .5 ? 0 : 1;
  const limit = f.cats && f.cats.length ? 99 : 5;
  for (let i = 0; i < 7; i++){
    let best = null;
    for (let t = 0; t < 30; t++){
      const p = proposeDay({ ...f, pd: f.pd || ((i + off) % 2 === 0 ? "Sucré" : "Salé") }, avoid);
      const ok = [p.l, p.d].every(m => !m || (count[m.cat] || 0) < (limit > 50 ? limit : isVegCat(m.cat) ? 7 : 3));
      best = p; if (ok) break;
    }
    SLOTS.forEach(sl => { const m = best[sl.k]; if (!m) return; avoid.add(m.name); if (sl.k !== "b") count[m.cat] = (count[m.cat] || 0) + 1; });
    days.push(best);
  }
  return days;
}
function bfFilter(ns){
  const st = ns === "prop" ? PROP : INSP;
  return `<div class="filters"><div class="frow"><span class="flabel">Petit-déjeuner</span><div class="chips">
    ${[["", "Sucré et salé"], ["Sucré", "Sucré"], ["Salé", "Salé"]].map(([v, l]) => `<button class="chip" data-act="pdKind" data-ns="${ns}" data-v="${v}" aria-pressed="${(st.pd || "") === v}">${l}</button>`).join("")}</div></div>
    <p class="muted small">Légers : 10 à 20 minutes, une moitié sucrée, une moitié salée.</p></div>`;
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
  else PV.items = proposeDay({}, weekUsed(w, PV.di));
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
