/* ============ BANCHAN EN LOT : l'équivalent de plusieurs repas préparé en une fois, avec la conservation ============
   Chaque repas coréen = riz + 1 banchan à protéine + 2 banchan de légumes. On choisit des banchan, l'application répartit les portions,
   regroupe les quantités et les courses, estime le temps total et donne la durée de conservation au frais de chacun :
   les plus fragiles sont mangés les premiers. */
const LOT_KEEP_NOTE = "Refroidir en moins de 2 heures, ranger dans des boîtes en verre fermées, au réfrigérateur (4 °C au plus). Réchauffer doucement à la casserole ou à la vapeur : tiède, jamais brûlant. Ne pas congeler.";
/* jours de conservation au frais, prudents (digestion sensible) */
function lotKeep(r){
  const id = r.id || "";
  if (/gyeran|sundubu/.test(id)) return 2;          /* œufs, tofu soyeux : fragiles */
  if (/jorim|dubu-jjim/.test(id)) return 4;          /* braisés dans leur sauce */
  return 3;                                          /* namul, muchim, tofu assaisonné */
}
const LOT_N = [2, 3, 4];
let LOT = null;
const lotPool = () => bcRecipes().filter(okSens);
const lotP = () => lotPool().filter(r => r.go === "Protéine"), lotV = () => lotPool().filter(r => r.go === "Légume");
const lotAll = ids => ids.map(id => bcRecipes().find(r => r.id === id)).filter(Boolean);
/* répartit N repas : chaque repas reçoit 1 protéine et 2 légumes différents ; les plus fragiles d'abord */
function lotPlan(N, pIds, vIds){
  const P = lotAll(pIds).sort((a, b) => lotKeep(a) - lotKeep(b)), V = lotAll(vIds).sort((a, b) => lotKeep(a) - lotKeep(b));
  if (!P.length || V.length < 2) return null;
  const meals = [], uses = {};
  for (let i = 0; i < N; i++) {
    const p = P[Math.min(P.length - 1, Math.floor(i * P.length / N))], v1 = V[(2 * i) % V.length], v2 = V[(2 * i + 1) % V.length];
    meals.push({ day: i + 1, p, v: [v1, v2] });
    [p, v1, v2].forEach(r => { uses[r.id] = (uses[r.id] || 0) + 1; });
  }
  const parts = Object.keys(uses).map(id => ({ r: bcRecipes().find(x => x.id === id), n: uses[id] }));
  parts.sort((a, b) => (b.r.tc || 0) - (a.r.tc || 0));
  const late = parts.filter(x => { const lastDay = Math.max(...meals.filter(m => m.p === x.r || m.v.indexOf(x.r) >= 0).map(m => m.day)); return lastDay > lotKeep(x.r); }).map(x => x.r);
  /* liste de courses : quantités × portions, regroupées par aliment */
  const ing = [];
  parts.forEach(({ r, n }) => r.ing.forEach(i => {
    const q = num(i.q), k = norm(i.n), ex = ing.find(x => norm(x.n) === k && x.u === i.u);
    if (ex && q > 0 && ex.q !== "") ex.q = Math.round((num(ex.q) + q * n) * 100) / 100;
    else if (!ex) ing.push({ n: i.n, q: q > 0 ? Math.round(q * n * 100) / 100 : "", u: i.u });
  }));
  ing.unshift({ n: "riz cuit", q: KR_RICE * N, u: "g" });
  /* temps : préparations additionnées (un peu plus longues en grande quantité), cuissons qui se chevauchent */
  const prep = parts.reduce((s, x) => s + ((x.r.t || 0) - (x.r.tc || 0)) * (1 + .35 * (x.n - 1)), 0), cook = Math.max(...parts.map(x => x.r.tc || 0));
  const t = Math.round((prep + cook + 10) / 5) * 5;
  const solo = meals.reduce((s, m) => s + composeKorean(m.p, m.v).t, 0);
  const kc = meals.map(m => kcalOf(composeKorean(m.p, m.v)));
  return { N, meals, parts, ing, t, solo, kc, late };
}
function lotAuto(N){
  const P = lotP(), V = lotV(); if (!P.length || V.length < 2) return { p: [], v: [] };
  const sh = a => a.map(x => [Math.random(), x]).sort((a, b) => a[0] - b[0]).map(x => x[1]);
  const np = N >= 3 ? 2 : 1, nv = N >= 3 ? 4 : 3;
  return { p: sh(P).slice(0, np).map(r => r.id), v: sh(V).slice(0, nv).map(r => r.id) };
}
const lotDays = d => d + " jour" + (d > 1 ? "s" : "");
function lotBody(){
  const P = lotP(), V = lotV(), N = LOT.N;
  const item = (r, on, act) => `<button class="choice kr-it" data-act="${act}" data-id="${r.id}" aria-pressed="${on}"><strong>${esc(bcShort(r.n))}</strong><span>${esc(bcSub(r.n))} · se garde ${lotDays(lotKeep(r))}</span></button>`;
  const plan = lotPlan(N, LOT.p, LOT.v);
  const need = `<p class="muted small kr-sum">Pour ${N} repas : au moins 1 banchan à protéine et 2 banchan de légumes (idéalement ${N >= 3 ? "2 et 4" : "1 et 3"} pour varier).</p>`;
  const out = !plan ? need : `<section class="lot-sum"><p class="lot-big">${plan.N} repas · ≈ ${plan.t} min en tout</p>
      <p class="muted small">au lieu de ≈ ${Math.round(plan.solo / 5) * 5} min en les préparant un par un · ≈ ${fmtK(Math.round(plan.kc.reduce((a, b) => a + b, 0) / plan.kc.length / 10) * 10)} kcal par repas, riz compris</p></section>
    <h3 class="kr-h">Les repas, dans l'ordre</h3>
    <ol class="lot-meals">${plan.meals.map((m, i) => `<li><div><strong>Jour ${m.day}</strong> · ${esc(bcShort(m.p.n))} + ${m.v.map(v => esc(bcShort(v.n))).join(" + ")} + riz ${KR_RICE} g
      <span class="muted small"> · ≈ ${fmtK(plan.kc[i])} kcal</span></div><button class="link" data-act="lotMeal" data-i="${i}">Mettre au planning</button></li>`).join("")}</ol>
    <h3 class="kr-h">Conservation</h3>
    <ul class="lot-keep">${plan.parts.map(x => `<li><span>${esc(bcShort(x.r.n))} <em>× ${x.n}</em></span><span class="${plan.late.indexOf(x.r) >= 0 ? "lot-late" : ""}">${lotDays(lotKeep(x.r))}${plan.late.indexOf(x.r) >= 0 ? " : à manger plus tôt" : ""}</span></li>`).join("")}</ul>
    ${plan.late.length ? `<p class="lot-warn">Certains banchan se garderaient moins longtemps que le dernier repas : prends-en d'autres, ou fais ${Math.max(2, N - 1)} repas.</p>` : ""}
    <p class="muted small">${esc(LOT_KEEP_NOTE)} Jour 1 = le lendemain de la préparation.</p>
    <h3 class="kr-h">Ordre de préparation</h3>
    <ol class="lot-order">${plan.parts.map((x, i) => `<li>${i === 0 ? "Lancer d'abord " : i === plan.parts.length - 1 ? "Terminer par " : "Puis "}<strong>${esc(bcShort(x.r.n))}</strong>${x.n > 1 ? ` (×${x.n})` : ""}${x.r.tc ? ` : ${x.r.tc} min de cuisson, à laisser avancer pendant la découpe des autres` : ""}</li>`).join("")}</ol>
    <h3 class="kr-h">Courses pour le lot</h3>
    <ul class="lot-shop">${plan.ing.map(i => `<li><span>${esc(cap(i.n))}</span><span>${esc(qtyStr(i) || "")}</span></li>`).join("")}</ul>
    <p class="muted small">Les étapes de chaque banchan se trouvent dans le Carnet : multiplie les quantités par le nombre de portions indiqué (× ${plan.parts.map(x => x.n).join(", ")}).</p>`;
  return `<div class="lot-n"><span class="flabel">Nombre de repas</span><div class="chips">${LOT_N.map(n => `<button class="chip" data-act="lotN" data-n="${n}" aria-pressed="${N === n}">${n}</button>`).join("")}</div>
      <button class="link" data-act="lotAuto">Me proposer une sélection</button></div>
    <h3 class="kr-h">1 · Les banchan à protéine</h3><div class="choice-list kr-list">${P.map(r => item(r, LOT.p.indexOf(r.id) >= 0, "lotP")).join("")}</div>
    <h3 class="kr-h">2 · Les banchan de légumes</h3><div class="choice-list kr-list">${V.map(r => item(r, LOT.v.indexOf(r.id) >= 0, "lotV")).join("")}</div>${out}`;
}
const lotRefresh = () => { const e = $("#lotBody"); if (e) { const y = e.parentElement ? e.parentElement.scrollTop : 0; e.innerHTML = lotBody(); if (e.parentElement) e.parentElement.scrollTop = y; } };
A.lotOpen = () => {
  const a = lotAuto(3); LOT = { N: 3, p: a.p, v: a.v }; MODAL = { kind: "lot" };
  openModal(`<p class="eyebrow">Carnet de banchan</p><h2 class="display-s">Préparer des banchan pour plusieurs repas</h2>
    <div id="lotBody">${lotBody()}</div>
    <div class="sheet-foot"><button class="btn ghost" data-act="close">Fermer</button><button class="btn primary push" data-act="lotShop">Ajouter aux courses</button></div>`, { wide: true });
};
A.lotN = ds => { LOT.N = +ds.n; const a = lotAuto(LOT.N); LOT.p = a.p; LOT.v = a.v; lotRefresh(); };
A.lotAuto = () => { const a = lotAuto(LOT.N); LOT.p = a.p; LOT.v = a.v; lotRefresh(); };
A.lotP = ds => { const i = LOT.p.indexOf(ds.id); if (i >= 0) LOT.p.splice(i, 1); else LOT.p.push(ds.id); lotRefresh(); };
A.lotV = ds => { const i = LOT.v.indexOf(ds.id); if (i >= 0) LOT.v.splice(i, 1); else LOT.v.push(ds.id); lotRefresh(); };
A.lotMeal = ds => { const plan = lotPlan(LOT.N, LOT.p, LOT.v); if (!plan) return; const m = plan.meals[+ds.i]; closeModal(); placeTemp(composeKorean(m.p, m.v)); };
A.lotShop = () => {
  const plan = lotPlan(LOT.N, LOT.p, LOT.v); if (!plan) return toast("Choisis au moins 1 banchan à protéine et 2 de légumes");
  let n = 0; plan.ing.forEach(i => { if (/^(eau)/.test(norm(i.n))) return; S.shopExtra.push({ id: uid(), n: i.n, q: i.q === "" ? "" : String(i.q), u: i.u, r: "Banchan × " + plan.N + " repas" }); n++; });
  save(); toast(n + " article" + (n > 1 ? "s" : "") + " ajouté" + (n > 1 ? "s" : "") + " à la liste de courses");
};
