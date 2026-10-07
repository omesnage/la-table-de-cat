/* ============================================================
   PROTOCOLE DE CAT : niveaux d'aliments, portions par repas,
   calories par repas (sans objectif de régime), leviers de poids,
   réintroduction progressive après 90 jours
   ============================================================ */
const num = v => parseFloat(String(v == null ? "" : v).replace(",", ".")) || 0;
const todayISO = () => { const d = new Date(); return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0"); };
const addDays = (iso, n) => { const d = new Date(iso + "T12:00:00"); d.setDate(d.getDate() + n); return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0"); };
const diffDays = (a, b) => Math.round((new Date(b + "T12:00:00") - new Date(a + "T12:00:00")) / 86400000);
const fmtDate = iso => iso ? new Date(iso + "T12:00:00").toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" }) : "";

/* ---------- portions par repas (poids cuits) ---------- */
const PORTIONS = { b: { f: [60, 100], fr: [25, 35], p: [40, 60] }, l: { f: [120, 150], fr: [20, 40], p: [80, 100] }, d: { f: [120, 150], fr: [20, 40], p: [80, 100] } };
const RAW_STARCH = ["riz cru", "flocons d'avoine", "avoine", "farine de sarrasin", "flocons de sarrasin"];
const SOLID_PROT = ["tofu ferme", "tofu", "tofu soyeux", "tofu fume", "blanc de poulet", "cuisse de poulet", "poulet", "sardine"];
const isQty = i => num(i.q) > 0 && unitKind(i.u) === "g";
function starchItems(m){ return (m.ing || []).filter(i => { const e = lookup(i.n); return e && e.a === "Féculents" && isQty(i); }); }
function starchSplit(m){ let c = 0, r = 0; starchItems(m).forEach(i => { const e = lookup(i.n); if (RAW_STARCH.indexOf(e.k) >= 0) r += num(i.q); else c += num(i.q); }); return { c, r }; }
function protItems(m){ return (m.ing || []).filter(i => { const e = lookup(i.n); return e && SOLID_PROT.indexOf(e.k) >= 0 && isQty(i); }); }
const starchKcal = m => starchItems(m).reduce((s, i) => s + ingKcal(i), 0);
const ingTotal = m => (m.ing || []).reduce((s, i) => s + ingKcal(i), 0);
function scaleStarch(m, f){
  starchItems(m).forEach(i => { i.q = Math.max(5, Math.round(num(i.q) * f / 5) * 5); });
  m.adj = Math.round((m.adj || 1) * f * 100) / 100;
}
const kT = k => S.kcalT && num(S.kcalT[k]) > 0 ? Math.round(num(S.kcalT[k])) : null;
const lvlF = m => (m.lf || 0);   /* grammes de féculents ajoutés par le levier 1 (jamais plus de 30 g) */

/* met un repas aux portions du protocole, puis le rapproche de sa cible de calories si elle existe.
   Les protéines ne descendent jamais sous le minimum du repas. */
function protoAdaptMeal(m, k, target){
  if (!m || !m.ing || k === "c") return false; const R = PORTIONS[k] || PORTIONS.l;   /* collation : portions de la recette, jamais adaptées */ let changed = false;
  const sp = starchSplit(m), raw = sp.c === 0 && sp.r > 0, cur = raw ? sp.r : sp.c;
  if (cur > 0) {
    const lo = raw ? R.fr[0] : R.f[0], hi = (raw ? R.fr[1] : R.f[1]) + lvlF(m);
    let x = 1;
    if (target) { const sc = starchKcal(m), tot = ingTotal(m); if (sc > 0) x = (target - (tot - sc)) / sc; }
    let want = Math.max(lo, Math.min(hi, cur * x)); if (!target) want = Math.max(lo, Math.min(hi, cur));
    const f = want / cur; if (Math.abs(f - 1) > .02) { scaleStarch(m, f); changed = true; }
  }
  protItems(m).forEach(i => { const q = num(i.q), lo = R.p[0], hi = R.p[1]; if (protItems(m).length === 1 && (q < lo || q > hi)) { i.q = Math.max(lo, Math.min(hi, q)); changed = true; } });
  return changed;
}
function adaptDay(day, force){
  let n = 0; SLOTS.forEach(sl => { const m = day.meals[sl.k]; if (m && protoAdaptMeal(m, sl.k, kT(sl.k))) n++; }); return n > 0;
}
function slotTarget(t){ return kT(t.s); }
const adaptHint = d => SLOTS.some(sl => { const m = d.meals[sl.k]; if (!m) return false; const c = clone(m); return protoAdaptMeal(c, sl.k, kT(sl.k)); });
function kcalBar(d){
  const k = dayKcal(d); if (!k) return "";
  const ts = SLOTS.filter(sl => sl.k !== "c").map(sl => kT(sl.k)); const all = ts.every(x => x);
  const tg = all ? ts.reduce((a, b) => a + b, 0) : 0, kMain = k - (d.meals.c ? kcalOf(d.meals.c) : 0);
  const diff = kMain - tg, cls = !all ? "" : Math.abs(diff) <= tg * .08 ? "ok" : diff > 0 ? "hi" : "lo";
  return `<div class="kbar ${cls}"><div class="kb-top"><span class="kb-v">≈ ${fmtK(k)} kcal par jour</span>${all ? `<span class="kb-t">cible ${fmtK(tg)}</span>` : ""}</div>${all ? `<span class="kb-d">${Math.abs(diff) <= tg * .08 ? "dans la cible" : (diff > 0 ? "+" : "−") + Math.abs(diff) + " kcal"}</span>` : ""}</div>`;
}
const dayTarget = () => SLOTS.reduce((s, sl) => s + (kT(sl.k) || 0), 0);

/* ---------- contrôle du protocole ---------- */
const L3_RE = /\b(ail|oignons?|echalotes?|poivre|piment|vinaigre|citron|moutarde|pois chiches?|lentilles?|haricots? (?:blancs?|rouges?|secs?)|falafels?|fritur\w*|fruits? a coque brut)\b/;
const RAW_RE = /\b(salade|concombre|radis|crudites?|tomates?|carottes? rapees?)\b/;
function reintOK(key){ const f = S.reint && S.reint.foods && S.reint.foods[key]; return !!f && (f.st === "ok" || f.st === "test"); }
function protoCheck(o){
  const bad = [], warn = [];
  (o.ing || []).forEach(i => {
    const nm = String(i.n || "").trim(); if (!nm) return; const n = norm(nm), q = num(i.q), e = lookup(nm);
    if (L3_RE.test(n)) { bad.push({ n: nm, why: "exclu par le protocole (niveau 3)" }); return; }
    if (RAW_RE.test(n)) { warn.push({ n: nm, why: "cru : à éviter, cuire doucement" }); return; }
    if (!e) return;
    if (e.n === "r") warn.push({ n: nm, why: "non listé dans le protocole : à réintroduire" });
    else if ((e.n === "p2" || e.n === "p3") && !reintOK(e.k)) warn.push({ n: nm, why: "palier de réintroduction : pas encore débloqué" });
    if (e.k === "avocat" && q > 30) warn.push({ n: nm, why: "1/8 d'avocat maximum par repas (30 g)" });
    if (e.k === "sardine") { if (S.sensible) warn.push({ n: nm, why: "phase de sensibilité aiguë : sardines à éviter" }); else warn.push({ n: nm, why: "occasionnelle, de préférence le midi" , soft: true }); }
    if (e.k === "haricots verts" && q > 75) warn.push({ n: nm, why: "75 g maximum cuits (seuil low-FODMAP)" });
    if (e.k === "courgette" && q > 60) warn.push({ n: nm, why: "60 g maximum épluchée (seuil low-FODMAP)" });
    if (e.w && /FODMAP/.test(e.w) && q > 75 && e.k !== "haricots verts" && e.k !== "courgette") warn.push({ n: nm, why: e.w });
  });
  return { bad, warn: warn.filter(w => !w.soft || !S.hideSoft), ok: !bad.length && !warn.some(w => !w.soft) };
}
function protoBanner(o){
  const c = protoCheck(o); if (c.ok && !c.warn.length) return "";
  const li = a => a.map(x => `<li><strong>${esc(x.n)}</strong> : ${esc(x.why)}</li>`).join("");
  return `<div class="pc ${c.bad.length ? "bad" : "warn"}"><p class="pc-h">${ic(c.bad.length ? "x" : "gauge")} ${c.bad.length ? "Ne respecte pas le protocole de Cat" : "À surveiller avec le protocole"}</p><ul>${li(c.bad)}${li(c.warn)}</ul></div>`;
}
function protoDot(m){ const c = protoCheck(m); return c.bad.length ? `<span class="mb bad">hors protocole</span>` : c.warn.some(w => !w.soft) ? `<span class="mb warn">à vérifier</span>` : ""; }

/* ---------- leviers de poids (jamais de légumes en plus) ---------- */
function lever1(m){
  if (!m || (m.lf || 0) >= 30) return false; const add = Math.min(20, 30 - (m.lf || 0)), items = starchItems(m); if (!items.length) return false;
  const main = items.slice().sort((a, b) => num(b.q) - num(a.q))[0]; main.q = num(main.q) + add; m.lf = (m.lf || 0) + add; return true;
}
function lever2(m){
  if (!m || (m.lo || 0) >= .5) return false; const oil = (m.ing || []).find(i => /^huile/.test(norm(i.n)) && unitKind(i.u) === "c");
  if (!oil) return false; oil.q = num(oil.q) + .5; m.lo = (m.lo || 0) + .5; return true;
}
function defineLevers(){
  const run = (title, fn) => { const w = curWeek(); if (!w) return; snapshot(); const b = weekSnap(w); let n = 0;
    w.days.forEach(d => SLOTS.forEach(sl => { if (fn(d.meals[sl.k])) n++; })); save();
    if (n) { render(); reportWeek(title, w, b); } else toast("Rien à ajouter : le plafond du levier est déjà atteint pour tous les repas"); };
  A.lever1 = () => ask("Poids en baisse : ajouter 20 g de féculents cuits à chaque repas de la semaine affichée ? (30 g maximum au total par repas, les légumes ne changent pas)", "Ajouter 20 g", () => run("Levier 1 : +20 g de féculents par repas", lever1));
  A.lever2 = () => ask("Poids en baisse : ajouter une demi-cuillère à café d'huile d'olive crue à chaque repas de la semaine affichée ? (0,5 c. à café maximum au total par repas)", "Ajouter l'huile", () => run("Levier 2 : +0,5 c. à café d'huile à cru par repas", lever2));
}
function leversCard(){
  const ws = [...S.weights].sort((a, b) => a.date.localeCompare(b.date)); let tip = "";
  if (ws.length >= 2) { const d = ws[ws.length - 1].kg - ws[ws.length - 2].kg; tip = d < -0.2 ? `<p class="pc warn-s">Ta dernière pesée est en baisse (${fmtN(d)} kg) : tu peux appliquer les leviers ci-dessous, dans l'ordre.</p>` : ""; }
  return `<section class="lev"><h2 class="group-title">Si le poids baisse</h2>
    <p class="muted">Ne jamais réduire les protéines (200 g de tofu ou de poulet par jour au minimum) et ne jamais augmenter les légumes. Les leviers s'appliquent à la semaine affichée dans le planning et se défont avec « Annuler ».</p>${tip}
    <div class="wa-grid"><button class="wa" data-act="lever1">${ic("plus")}<span><strong>Levier 1 : féculents</strong><em>+20 g cuits à chaque repas (30 g maximum)</em></span></button>
    <button class="wa" data-act="lever2">${ic("plus")}<span><strong>Levier 2 : huile à cru</strong><em>+0,5 c. à café d'huile d'olive par repas</em></span></button></div></section>`;
}

/* ---------- réintroduction progressive ---------- */
const REINT_FOODS = [
  { key: "peche", palier: 2, n: "Compote de pêche ou nectarine maison", ing: "peche", normal: 100, u: "g", note: "fruits épluchés, cuits à la vapeur" },
  { key: "graines de chia", palier: 3, n: "Graines de chia moulues", ing: "graines de chia moulues", normal: 10, u: "g", note: "moulues finement, bien hydratées" }
];
const REINT_P1 = ["Aubergine pelée", "Courge butternut", "Têtes de brocoli vapeur", "Pâtisson"];
const reint = () => (S.reint = S.reint || { start: null, foods: {}, current: null });
const reintDay = () => { const r = reint(); return r.start ? diffDays(r.start, todayISO()) + 1 : 0; };
const reintOpen = () => reintDay() > 90;
function foodPortion(f, day){ const q = day === 1 ? Math.max(1, Math.round(f.normal / 4)) : Math.round(f.normal / 2); return q; }
function viewReint(){
  const r = reint(), day = reintDay(), cur = r.current && r.foods[r.current], head = `<header class="pagehead"><div><h1 class="display">Réintroduction</h1><p class="muted">Après 90 jours de protocole, on réintroduit un seul nouvel aliment tous les 3 jours, avec un journal des symptômes.</p></div></header>`;
  if (!r.start) return head + `<section class="ri-card"><h2 class="display-s">Les 90 jours n'ont pas commencé</h2>
      <p>Le compteur démarre quand tu lances le protocole. Pendant 90 jours, on reste sur la base sûre : aucun aliment à tester. L'algorithme de réintroduction se débloque ensuite tout seul.</p>
      <div class="ri-row"><label class="field"><span>Premier jour du protocole</span><input type="date" id="riStart" value="${todayISO()}"></label><button class="btn primary" data-act="riStart">Démarrer les 90 jours</button></div></section>${riCatalog(false)}`;
  const pct = Math.min(100, Math.round(day / 90 * 100));
  if (!reintOpen()) return head + `<section class="ri-card"><p class="eyebrow">Phase de base</p><h2 class="display-s">Jour ${day} sur 90</h2>
      <span class="ri-track"><i style="width:${pct}%"></i></span>
      <p>Il reste <strong>${90 - day + 1} jour${90 - day + 1 > 1 ? "s" : ""}</strong>. La réintroduction commencera le <strong>${fmtDate(addDays(r.start, 90))}</strong>.</p>
      <div class="ri-row"><label class="field"><span>Premier jour du protocole</span><input type="date" id="riStart" value="${r.start}"></label><button class="btn" data-act="riStart">Changer la date</button></div></section>${riCatalog(false)}`;
  return head + `<section class="ri-card"><p class="eyebrow">Réintroduction ouverte</p><h2 class="display-s">Jour ${day} du protocole</h2><p class="muted">Un seul aliment à la fois, un nouveau tous les 3 jours.</p></section>
    ${cur && cur.st === "test" ? riActive(r.current, cur) : ""}${riCatalog(true)}`;
}
function riActive(key, c){
  const f = REINT_FOODS.find(x => x.key === key), today = todayISO(), step = c.day, done = c.last === today;
  const title = ["", "Jour 1 : un quart de portion normale", "Jour 2 : portion moyenne", "Jour 3 : pause et observation"][step];
  const qty = step === 3 ? "aucun nouvel aliment aujourd'hui" : foodPortion(f, step) + " " + f.u + " (" + f.note + ")";
  return `<section class="ri-card now"><p class="eyebrow">En test · ${esc(f.n)}</p><h2 class="display-s">${title}</h2><p>${step === 3 ? "Observe, sans rien ajouter de nouveau." : "À intégrer au repas : <strong>" + esc(qty) + "</strong>."}</p>
    ${step < 3 ? `<div class="ri-row"><button class="btn" data-act="riAdd" data-s="l">Ajouter au déjeuner d'aujourd'hui</button><button class="btn" data-act="riAdd" data-s="d">Ajouter au dîner d'aujourd'hui</button></div>` : ""}
    <label class="field"><span>Journal du jour (facultatif)</span><textarea id="riNote" rows="2" placeholder="Ce que tu as ressenti…"></textarea></label>
    ${done ? `<p class="muted">Le bilan d'aujourd'hui est déjà enregistré. Reviens demain.</p>` : `<div class="ri-row"><button class="btn primary" data-act="riLog" data-v="0">Aucun symptôme</button><button class="btn danger" data-act="riLog" data-v="1">J'ai eu des symptômes</button></div>`}
    ${(c.log || []).length ? `<ul class="ri-log">${c.log.map(l => `<li><strong>Jour ${l.step}</strong> · ${esc(fmtDate(l.d))} : ${l.sym ? "symptômes" : "aucun symptôme"}${l.note ? " · " + esc(l.note) : ""}</li>`).join("")}</ul>` : ""}
    <button class="link danger" data-act="riCancel">Abandonner ce test</button></section>`;
}
function riCatalog(open){
  const r = reint(), testing = r.current && r.foods[r.current] && r.foods[r.current].st === "test";
  const row = f => { const c = r.foods[f.key]; let st = "", btn = "";
    if (c && c.st === "ok") st = `<span class="ri-st ok">${ic("check")} Validé : niveau 1</span>`;
    else if (c && c.st === "test") st = `<span class="ri-st">En test, jour ${c.day}</span>`;
    else if (c && c.st === "fail") { const left = diffDays(todayISO(), c.lockUntil); st = left > 0 ? `<span class="ri-st lock">Verrouillé jusqu'au ${fmtDate(c.lockUntil)}</span>` : `<span class="ri-st">Échec, nouveau test possible</span>`;
      if (left <= 0 && open && !testing) btn = `<button class="btn" data-act="riTest" data-k="${esc(f.key)}">Retester</button>`; }
    else if (open && !testing) btn = `<button class="btn" data-act="riTest" data-k="${esc(f.key)}">Tester</button>`;
    else st = `<span class="ri-st lock">${open ? "un autre test est en cours" : "pas avant la fin des 90 jours"}</span>`;
    return `<li class="ri-food"><div><strong>${esc(f.n)}</strong><span class="muted small">Palier ${f.palier}${c && c.st === "fail" ? "" : ""}</span></div><div class="ri-act">${st}${btn}</div></li>`; };
  return `<section class="ri-cat"><h2 class="group-title">Paliers proposés</h2>
    <p class="muted">Palier 1 : légumes cuits doux. Déjà remis dans l'appli (${REINT_P1.join(", ")}) : ils sont disponibles dès maintenant.</p>
    <h3 class="ri-h">Palier 2 · fruits doux cuits ou mûrs</h3><ul class="ri-list">${REINT_FOODS.filter(f => f.palier === 2).map(row).join("")}</ul>
    <h3 class="ri-h">Palier 3 · féculents et graines</h3><ul class="ri-list">${REINT_FOODS.filter(f => f.palier === 3).map(row).join("")}</ul>
    <p class="muted small">La banane bien mûre et les myrtilles cuites sont maintenant autorisées en petite quantité (60 g environ) dans les petits-déjeuners.</p></section>`;
}
function defineReint(){
  A.riStart = () => { const v = ($("#riStart") || {}).value || todayISO(); reint().start = v; save(); render(); toast("Les 90 jours ont commencé le " + fmtDate(v)); };
  A.riTest = ds => { const r = reint(); if (r.current && r.foods[r.current] && r.foods[r.current].st === "test") return toast("Un test est déjà en cours.");
    r.foods[ds.k] = { st: "test", day: 1, started: todayISO(), log: [], last: null }; r.current = ds.k; save(); render(); toast("Test lancé : jour 1, un quart de portion"); };
  A.riCancel = () => ask("Abandonner ce test ? L'aliment redevient disponible pour un nouveau test.", "Abandonner", () => { const r = reint(); if (r.current) delete r.foods[r.current]; r.current = null; save(); render(); });
  A.riLog = ds => { const r = reint(), c = r.foods[r.current]; if (!c || c.last === todayISO()) return; const sym = ds.v === "1", note = ($("#riNote") || {}).value || "";
    c.log.push({ d: todayISO(), step: c.day, sym, note: note.trim() }); c.last = todayISO();
    if (sym) { c.st = "fail"; c.lockUntil = addDays(todayISO(), 30); r.current = null; save(); render(); toast("Test arrêté : l'aliment est verrouillé 30 jours"); return; }
    if (c.day >= 3) { c.st = "ok"; r.current = null; save(); render(); toast("Aliment validé : il passe au niveau 1"); return; }
    c.day++; save(); render(); toast("Bilan enregistré : passe au jour " + c.day + " demain"); };
  A.riAdd = ds => { const r = reint(), c = r.foods[r.current]; if (!c) return; const f = REINT_FOODS.find(x => x.key === r.current), w = curWeek(); if (!w) return;
    const di = Math.min(w.days.length - 1, (new Date().getDay() + 6) % 7), m = w.days[di].meals[ds.s];
    if (!m) return toast("Aucun " + (ds.s === "l" ? "déjeuner" : "dîner") + " prévu aujourd'hui : ajoute d'abord un repas au planning.");
    snapshot(); const q = foodPortion(f, c.day); const res = addIngredient(m, f.ing, q, f.u); save();
    toast(res === "exists" ? f.n + " est déjà dans ce repas" : f.n + " (" + q + " " + f.u + ") ajouté au " + (ds.s === "l" ? "déjeuner" : "dîner") + " d'aujourd'hui", res !== "exists"); };
}

/* ---------- réglages : calories par repas, interrupteurs ---------- */
function settingsBlock(){
  const f = (k, lab) => `<label class="field"><span>${lab}</span><input data-bind="kcalT" data-k="${k}" inputmode="numeric" placeholder="aucune" value="${kT(k) || ""}"></label>`;
  return `<h2 class="group-title">Calories par repas</h2>
    <p class="muted">Aucun objectif de régime : ces valeurs servent seulement à équilibrer chaque repas. Laisse vide pour garder les portions du protocole. Si tu en renseignes une, les féculents du repas s'ajustent pour s'en approcher, dans les fourchettes du protocole. Les protéines ne baissent jamais.</p>
    <div class="goalrow">${f("b", "Petit-déjeuner (kcal)")}${f("l", "Déjeuner (kcal)")}${f("d", "Dîner (kcal)")}</div>
    <label class="check sw"><input type="checkbox" data-bind="autoAdapt" ${S.autoAdapt !== false ? "checked" : ""}> Mettre automatiquement aux portions du protocole les repas que j'ajoute</label>
    <label class="check sw"><input type="checkbox" data-bind="autoVeg" ${S.autoVeg !== false ? "checked" : ""}> Compléter les repas avec un légume de saison quand il en manque</label>
    <label class="check sw"><input type="checkbox" data-bind="sensible" ${S.sensible ? "checked" : ""}> Phase de sensibilité aiguë (masque les sardines, le miso et la sauce soja)</label>
    <div class="frow"><span class="flabel">Repas végétariens (œufs, tofu, protéines végétales)</span><div class="chips">${[60,70,80,90,100].map(v => `<button class="chip" data-act="vegRatio" data-v="${v}" aria-pressed="${vegRatio() === v}">${v} %</button>`).join("")}</div></div>
    <h2 class="group-title">Légumes de saison</h2><p class="muted">En ${monthName()} : ${esc(seasonVegs({ ing: [] }, 14).map(k => VEGS[k].n).join(", "))}. Tous sont cuits, pelés, épépinés.</p>`;
}
function defineSettingsActions(){
  document.addEventListener("change", e => {
    const el = e.target, b = el.dataset ? el.dataset.bind : null; if (!b) return;
    if (b === "kcalT") { S.kcalT = S.kcalT || {}; const v = num(el.value); S.kcalT[el.dataset.k] = v >= 150 && v <= 1500 ? Math.round(v) : null; save(); render(); }
    if (b === "autoAdapt") { S.autoAdapt = el.checked; save(); }
    if (b === "autoVeg") { S.autoVeg = el.checked; save(); }
    if (b === "sensible") { S.sensible = el.checked; save(); }
  });
  document.addEventListener("input", e => {
    const el = e.target; if (!CR || !MODAL || MODAL.kind !== "creator") return;
    const d = el.dataset; if (!d) return;
    if (d.cr) {
      if (d.cr === "useM") return;
      if (d.cr === "n") { CR.f.n = el.value.replace(/\n/g, " "); el.style.height = "auto"; el.style.height = el.scrollHeight + "px"; }
      else if (d.cr === "kcalM") CR.f.kcalM = parseFloat(String(el.value).replace(",", ".")) || 0;
      else CR.f[d.cr] = el.value;
    }
    if (d.cring) { CR.ing[+d.i][d.cring] = el.value; if (d.cring === "n" || d.cring === "q") crRefreshRow(+d.i); }
    if (d.crst) CR.steps[+d.i][d.crst] = el.value;
  });
  document.addEventListener("change", e => {
    const el = e.target, d = el.dataset; if (!CR || !MODAL || MODAL.kind !== "creator" || !d) return;
    if (d.cr === "useM") { CR.f.useM = el.checked; const w = $("#crMw"); if (w) w.hidden = !el.checked; }
    if (d.cr === "st") CR.f.st = el.value;
    if (d.cring === "u") { CR.ing[+d.i].u = el.value; crRefreshRow(+d.i); }
  });
  document.addEventListener("keydown", e => {
    if (e.key !== "Enter") return;
    if (e.target.id === "frNew") { e.preventDefault(); A.frAdd(); }
    if (e.target.id === "exNew") { e.preventDefault(); A.addExtra(); }
  });
}
defineCookActions(); defineCookEdit(); defineWeekActions(); defineFridgeActions(); defineShopActions(); defineCreatorActions(); defineSettingsActions(); defineLevers(); defineReint();

/* ---------- état par défaut et migration ---------- */
function ensureDefaults(){
  S.ui = S.ui || { view: "plan", week: 0 }; S.checked = S.checked || {}; S.weights = S.weights || [];
  if (S.goal == null) S.goal = 60;
  if (S.ui.view === "weight") S.ui.view = "plan";   /* l'onglet Poids n'existe plus */
  if (!S.kcalT || typeof S.kcalT !== "object") S.kcalT = { b: null, l: null, d: null };
  if (S.autoAdapt == null) S.autoAdapt = true;
  if (S.autoVeg == null) S.autoVeg = true;
  if (S.sensible == null) S.sensible = false;
  if (!(S.vegRatio > 0)) S.vegRatio = 80;
  if (!Array.isArray(S.pantry)) S.pantry = [];
  if (!Array.isArray(S.shopExtra)) S.shopExtra = [];
  if (!S.cooked || typeof S.cooked !== "object") S.cooked = {};
  if (!S.reint || typeof S.reint !== "object") S.reint = { start: null, foods: {}, current: null };
  S.weeks.forEach(w => w.days.forEach(d => { d.meals = d.meals || {}; if (!("b" in d.meals)) d.meals.b = null; if (!("c" in d.meals)) d.meals.c = null; }));
  const ks = Object.keys(S.cooked); if (ks.length > 80) ks.slice(0, ks.length - 80).forEach(k => delete S.cooked[k]);
}
function migrateAll(){ if (!S.v || S.v < 2) migrateProto(); if (S.v < 3) migrate3(); if (S.v < 4) migrate4(); if (S.v < 5) migrate5(); if (S.v < 6) migrate6(); if (S.v < 7) migrate7(); if (S.v < 8) migrate8(); if (S.v < 9) migrate9(); if (S.v < 10) migrate10(); if (S.v < 11) migrate11(); if (S.v < 12) migrate12(); if (S.v < 13) migrate13(); if (S.v < 14) migrate14(); }
/* v2 : nouveau protocole. Le carnet fourni est remplacé par la version mise à jour ; les recettes créées par Cat sont conservées.
   Les repas du planning qui venaient de l'ancien carnet sont renouvelés, et un petit-déjeuner est ajouté là où il manque. */
function migrateProto(){
  const oldIds = new Set(S.recipes.filter(r => !r.own).map(r => r.id)), own = S.recipes.filter(r => r.own);
  S.recipes = DEFAULT_RECIPES.map(recipeToState).concat(own);
  const fresh = buildDefaultPlan(S.recipes);
  S.weeks.forEach((w, wi) => w.days.forEach((d, di) => {
    const src = fresh[wi % fresh.length].days[di % 7].meals;
    ["b", "l", "d"].forEach(k => { const m = d.meals[k]; if (!m || (m.recipeId && oldIds.has(m.recipeId))) d.meals[k] = copyMeal(src[k]); });
  }));
  S.v = 2;
}
