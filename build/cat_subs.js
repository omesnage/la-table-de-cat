/* ============ REMPLACER UN INGRÉDIENT PAR UN ÉQUIVALENT, EN GARDANT LES CALORIES ============
   Seuls sont proposés des remplacements qui ne changent ni la cuisson ni les gestes de la recette :
   même famille, même genre grammatical (le texte des étapes est réécrit avec le bon article, sans accord à corriger),
   protocole de Cat respecté (aliments de niveau 1 ou tolérés, jamais exclus ni non listés).
   La quantité est recalculée pour garder les calories, dans les bornes de portion du protocole : l'écart restant est affiché. */
/* k : clé de la base d'ingrédients · ing : nom dans la liste · t : nom dans le texte · g : genre · forms : façons de le nommer dans le texte
   grp : famille (on ne remplace qu'au sein d'une famille) · x : précaution ajoutée après le remplacement · cook : mode de cuisson (féculents précuits) */
const SUBT = [
  /* racines et courges à éplucher, cuisson longue à la vapeur */
  { grp: "racm", k: "potimarron", ing: "potimarron", t: "potimarron", g: "m", forms: ["potimarron"], x: "retirer aussi les graines" },
  { grp: "racm", k: "patisson", ing: "pâtisson", t: "pâtisson", g: "m", forms: ["pâtisson", "patisson"], x: "retirer aussi les graines et la partie filandreuse" },
  { grp: "racm", k: "panais", ing: "panais", t: "panais", g: "m", forms: ["panais"], x: "retirer le cœur ligneux" },
  { grp: "racm", k: "navet", ing: "navet", t: "navet", g: "m", forms: ["navets?"], x: "l'éplucher généreusement" },
  { grp: "racm", k: "celeri-rave", ing: "céleri-rave", t: "céleri-rave", g: "m", forms: ["céleri-rave", "celeri-rave"], x: "l'éplucher épais" },
  { grp: "racm", k: "daikon", ing: "daikon", t: "daikon", g: "m", forms: ["daikon"], x: "l'éplucher généreusement" },
  { grp: "racf", k: "carotte", ing: "carotte", t: "carotte", g: "f", forms: ["carottes?"] },
  { grp: "racf", k: "butternut", ing: "butternut", t: "butternut", g: "f", forms: ["butternut"], x: "retirer aussi les graines" },
  { grp: "racf", k: "patate douce", ing: "patate douce", t: "patate douce", g: "f", forms: ["patates? douces?"], cap: 75 },
  /* féculents précuits */
  { grp: "fec", k: "riz", ing: "riz cuit", t: "riz", g: "m", forms: ["riz basmati", "riz cuit", "riz"], nb: "lait de |crème de |farine de |galette de |vermicelles de ", cook: { place: "au Bamboo (programme WHITE, 35 minutes)", lieu: "WHITE" } },
  { grp: "fec", k: "quinoa", ing: "quinoa cuit", t: "quinoa", g: "m", forms: ["quinoa cuit", "quinoa"], cook: { place: "au Bamboo (programme QUICK COOK, 1 volume de quinoa pour 1 volume d'eau)" } },
  /* protéines : même cuisson */
  { grp: "tofu", k: "tofu ferme", ing: "tofu ferme", t: "tofu", g: "m", forms: ["tofu ferme", "tofu"] },
  { grp: "tofu", k: "tofu fume", ing: "tofu fumé", t: "tofu fumé", g: "m", forms: ["tofu fumé", "tofu"] },
  /* laits, yaourts, huiles, herbes */
  { grp: "lait", k: "lait de soja", ing: "lait de soja", t: "lait de soja", g: "m", forms: ["lait de soja"] },
  { grp: "lait", k: "lait d'avoine", ing: "lait d'avoine", t: "lait d'avoine", g: "m", forms: ["lait d'avoine"] },
  { grp: "lait", k: "lait de riz", ing: "lait de riz", t: "lait de riz", g: "m", forms: ["lait de riz"] },
  { grp: "lait", k: "lait d'amande", ing: "lait d'amande", t: "lait d'amande", g: "m", forms: ["lait d'amande"] },
  { grp: "yaourt", k: "yaourt de soja", ing: "yaourt de soja nature", t: "yaourt de soja", g: "m", forms: ["yaourt de soja"] },
  { grp: "yaourt", k: "skyr de soja", ing: "skyr de soja", t: "skyr de soja", g: "m", forms: ["skyr de soja"] },
  { grp: "huile", k: "huile d'olive", ing: "huile d'olive", t: "huile d'olive", g: "f", forms: ["huile d'olive"] },
  { grp: "huile", k: "huile de sesame", ing: "huile de sésame grillé", t: "huile de sésame grillé", g: "f", forms: ["huile de sésame grillé", "huile de sésame"] },
  { grp: "herbm", k: "persil", ing: "persil", t: "persil", g: "m", forms: ["persil"], herb: true },
  { grp: "herbm", k: "basilic", ing: "basilic", t: "basilic", g: "m", forms: ["basilic"], herb: true },
  { grp: "herbm", k: "aneth", ing: "aneth", t: "aneth", g: "m", forms: ["aneth"], herb: true },
  { grp: "herbm", k: "cerfeuil", ing: "cerfeuil", t: "cerfeuil", g: "m", forms: ["cerfeuil"], herb: true },
  { grp: "herbm", k: "estragon", ing: "estragon", t: "estragon", g: "m", forms: ["estragon"], herb: true },
  { grp: "herbm", k: "thym", ing: "thym", t: "thym", g: "m", forms: ["thym"], herb: true },
  { grp: "herbf", k: "coriandre", ing: "coriandre", t: "coriandre", g: "f", forms: ["coriandre"], herb: true },
  { grp: "herbf", k: "ciboulette", ing: "ciboulette", t: "ciboulette", g: "f", forms: ["ciboulette"], herb: true },
  { grp: "herbf", k: "menthe", ing: "menthe", t: "menthe", g: "f", forms: ["menthe"], herb: true }
];
const subOf = i => { const e = lookup(i.n); return e ? SUBT.find(s => s.k === e.k) || null : null; };
const subVow = s => /^[aeiouhéèêâîô]/i.test(s.t);
const subArt = {
  def: s => subVow(s) ? "l'" : s.g === "f" ? "la " : "le ",
  part: s => subVow(s) ? "de l'" : s.g === "f" ? "de la " : "du ",
  de: s => subVow(s) ? "d'" : "de ",
  indef: s => s.g === "f" ? "une " : "un ",
  a: s => subVow(s) ? "à l'" : s.g === "f" ? "à la " : "au "
};
const ART_TYPE = { "le": "def", "la": "def", "l'": "def", "les": "def", "du": "part", "de la": "part", "de l'": "part", "des": "part", "de": "de", "d'": "de", "un": "indef", "une": "indef", "au": "a", "à la": "a", "à l'": "a", "aux": "a" };
const subEsc = x => x.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
/* réécrit un texte : ancien aliment → nouveau, avec l'article qui convient */
function subText(txt, from, to){
  if (!txt) return txt;
  const forms = from.forms.slice().sort((a, b) => b.length - a.length).map(f => f.indexOf("?") >= 0 ? f : subEsc(f) + "s?").join("|");
  const re = new RegExp("(?<![\\p{L}'’-])(?:(le|la|l['’]|les|du|de la|de l['’]|des|de|d['’]|un|une|au|à la|à l['’]|aux)\\s?)?" + (from.nb ? "(?<!(?:" + from.nb + "))" : "") + "(" + forms + ")(?![\\p{L}-])", "giu");
  return txt.replace(re, (m, art, w, off, all) => {
    if (!art) return /^[A-ZÉÈÀ]/.test(w) ? to.t[0].toUpperCase() + to.t.slice(1) : to.t;
    let a = art.toLowerCase().replace("’", "'"), type = ART_TYPE[a.replace(/\s+$/, "")];
    if (!type) return m;
    let rep = subArt[type](to) + to.t; if (/^[A-ZÉÈÀ]/.test(art)) rep = rep[0].toUpperCase() + rep.slice(1);
    return rep;
  });
}
/* remplace dans les ingrédients et dans tous les textes de l'objet (nom, étapes, astuce) */
function subApply(o, idx, from, to, q){
  const it = o.ing[idx];
  o.ing[idx] = { id: it.id, n: to.ing, q: it.q === "" && to.herb ? "" : q, u: to.herb ? it.u : (it.u || "g") };
  const tokRe = /\{\{([^}]+)\}\}/g;
  const fix = t => subText(String(t || "").replace(tokRe, (m, n) => { const e = lookup(n); return e && e.k === from.k ? "{{" + to.ing + "}}" : m; }), from, to);
  if (o.steps) o.steps = o.steps.map(fix);
  ["name", "n", "sub", "tip"].forEach(k => { if (o[k]) o[k] = fix(o[k]); });
  if (from.grp === "fec" && o.steps) {
    const place = to.cook && to.cook.place;
    if (place) o.steps = o.steps.map(s => s.replace(/au Bamboo \((?:programme )?(?:WHITE|QUICK COOK)[^)]*\)/, place));
  }
  /* précaution propre au nouvel aliment, ajoutée une fois à la première étape qui le cite */
  if (to.x) {
    const k = o.steps ? o.steps.findIndex((s, i) => i > 0 && new RegExp("(?<![\\p{L}])" + subEsc(to.t) + "(?![\\p{L}])", "iu").test(s.replace(/\{\{[^}]+\}\}/g, ""))) : -1;
    if (k >= 0) o.steps[k] = o.steps[k].replace(/(\s*\[[^\]]*\]\s*)?$/, m => " Avec " + subArt.def(to) + to.t + " : " + to.x + "." + (m || ""));
  }
  if (o.gen) delete o.gen;   /* le plat n'est plus généré : « Varier ce plat » le recomposerait sans le remplacement */
  o.subs = (o.subs || []).concat([from.ing + " → " + to.ing]);
}
/* quantité qui garde les calories, dans les bornes du protocole */
function subQty(it, from, to, slot){
  const e = lookup(to.ing); if (to.herb) return { q: "", kcal: 0, kold: 0, d: 0 };
  const kold = ingKcal(it), old = num(it.q), R = PORTIONS[slot] || PORTIONS.l, kind = unitKind(it.u);
  if (kind === "c" || kind === "s") return { q: it.q, kcal: Math.round(ingKcal({ n: to.ing, q: it.q, u: it.u })), kold: Math.round(kold), d: 0 };
  if (!e || e.g == null || !(old > 0) || !kold) return { q: it.q, kcal: Math.round(kold), kold: Math.round(kold), d: 0 };
  let q = kold / e.g * 100, lo = old * .7, hi = old * 1.3;
  if (to.grp === "fec") { lo = R.f[0]; hi = R.f[1]; }
  else if (to.grp === "tofu") { lo = R.p[0]; hi = R.p[1]; }
  else if (to.grp === "lait" || to.grp === "yaourt") { lo = old * .8; hi = old * 1.25; }
  if (to.cap) hi = Math.min(hi, to.cap);
  if (e.k === "celeri-rave") hi = Math.min(hi, 60);
  q = Math.round(Math.max(lo, Math.min(hi, q)) / 5) * 5;
  const kcal = Math.round(ingKcal({ n: to.ing, q, u: it.u }));
  return { q, kcal, kold: Math.round(kold), d: kcal - Math.round(kold) };
}
/* remplacements possibles pour un ingrédient (jamais un aliment déjà présent, jamais hors protocole) */
function subChoices(o, idx, slot){
  const it = o.ing[idx]; if (!it) return []; const from = subOf(it); if (!from) return [];
  const have = new Set(o.ing.map(i => { const e = lookup(i.n); return e ? e.k : norm(i.n); }));
  return SUBT.filter(s => s.grp === from.grp && s.k !== from.k && !have.has(s.k)).map(to => {
    const e = lookup(to.ing), ok = e && (e.n === 1 || e.n === "t" || e.n === 2 || (e.n === "p2" || e.n === "p3") && reintOK(e.k));
    if (!ok) return null;
    if (S.sensible && /fume|miso|soja/.test(to.k) && to.grp === "tofu") return null;
    const r = subQty(it, from, to, slot), c = protoCheck({ ing: [{ n: to.ing, q: r.q, u: it.u }] });
    return { to, r, warn: c.warn.map(w => w.why) };
  }).filter(Boolean);
}
const subSlot = () => MODAL && MODAL.kind === "meal" && MODAL.t ? MODAL.t.s : "l";
let SUBI = null;
function subPanel(o, k){
  if (SUBI !== k) return "";
  const from = subOf(o.ing[k]), ch = subChoices(o, k, subSlot());
  const dd = d => d === 0 ? "mêmes calories" : (d > 0 ? "+" : "−") + Math.abs(d) + " kcal";
  return `<li class="sub-panel"><p class="sub-h">Remplacer ${esc(o.ing[k].n)} par</p>
    ${ch.length ? `<div class="sub-list">${ch.map(c => `<button class="sub-it" data-act="subDo" data-i="${k}" data-to="${esc(c.to.k)}"><strong>${esc(cap(c.to.ing))}</strong>
      <span>${c.to.herb ? "sans calories" : (c.r.q !== "" ? esc(String(c.r.q)) + " " + esc(o.ing[k].u || "g") + " · " : "") + "≈ " + c.r.kcal + " kcal · " + dd(c.r.d)}</span>${c.warn.length ? `<em>${esc(c.warn[0])}</em>` : ""}</button>`).join("")}</div>
      <p class="muted small">La quantité garde les calories dans les limites de portion du protocole ; les étapes de la recette sont réécrites avec le nouvel aliment.</p>`
      : `<p class="muted small">Aucun équivalent sûr : la cuisson ou la préparation changerait.</p>`}</li>`;
}
const subBtn = (o, k) => subOf(o.ing[k]) && subChoices(o, k, subSlot()).length
  ? `<button class="icon sub-b" data-act="subOpen" data-i="${k}" aria-label="Remplacer par un équivalent" title="Remplacer par un équivalent" aria-expanded="${SUBI === k}">⇄</button>` : "";
function subRefresh(){
  const o = edObj(); if (!o) return;
  $("#ingList").innerHTML = ingRows(o); $("#edKcal").textContent = fmtK(kcalOf(o));
  const rd = $("#stepsRead"); if (rd) rd.innerHTML = stepsHTML(o.steps || [], o.ing || []);
  const se = $("#stepsEdit"); if (se) se.value = (o.steps || []).join("\n");
  const ti = document.querySelector(".ed-title"); if (ti) { ti.value = o.name != null && MODAL.kind !== "recipe" && MODAL.kind !== "draft" ? o.name : o.n; if (typeof fitTitle === "function") fitTitle(); }
  const tp = document.querySelector('[data-ed="tip"]'); if (tp) tp.value = o.tip || "";
  const gp = document.querySelector(".gen-panel"); if (gp && !o.gen) gp.remove();
}
A.subOpen = ds => { const k = +ds.i; SUBI = SUBI === k ? null : k; const o = edObj(); if (o) $("#ingList").innerHTML = ingRows(o); };
A.subDo = ds => {
  const o = edObj(); if (!o) return; const k = +ds.i, it = o.ing[k], from = subOf(it), to = SUBT.find(s => s.k === ds.to);
  if (!from || !to) return; const r = subQty(it, from, to, subSlot());
  if (MODAL.kind !== "draft") snapshot();
  subApply(o, k, from, to, r.q); SUBI = null;
  if (MODAL.kind !== "draft") save(); subRefresh();
  toast(`Remplacé : ${from.ing} → ${to.ing}${r.d ? " (" + (r.d > 0 ? "+" : "−") + Math.abs(r.d) + " kcal)" : ", mêmes calories"}`);
};

/* ---------- dans la fiche de cuisine (mode cuisine) : bouton « Équivalent » sous chaque ingrédient remplaçable ---------- */
const subCookBtn = (o, idx) => subOf(o.ing[idx]) && subChoices(o, idx, subSlot()).length
  ? `<button class="mini" data-act="cookSubOpen" data-i="${idx}" aria-expanded="${CK.sub === idx}">⇄ Équivalent, mêmes calories</button>` : "";
function subCookPanel(o, idx){
  if (CK.sub !== idx) return "";
  const ch = subChoices(o, idx, subSlot()), dd = d => d === 0 ? "mêmes calories" : (d > 0 ? "+" : "−") + Math.abs(d) + " kcal";
  return `<div class="vg-panel sub-cook"><p class="muted small">Remplacer ${esc(o.ing[idx].n)} par :</p><div class="sub-list">${ch.map(c => `<button class="sub-it" data-act="cookSubDo" data-i="${idx}" data-to="${esc(c.to.k)}"><strong>${esc(cap(c.to.ing))}</strong>
    <span>${c.to.herb ? "sans calories" : (c.r.q !== "" ? esc(String(c.r.q)) + " " + esc(o.ing[idx].u || "g") + " · " : "") + "≈ " + c.r.kcal + " kcal · " + dd(c.r.d)}</span>${c.warn.length ? `<em>${esc(c.warn[0])}</em>` : ""}</button>`).join("")}</div>
    <p class="muted small">La quantité garde les calories dans les limites de portion du protocole ; les étapes sont réécrites avec le nouvel aliment, la cuisson reste la même.</p></div>`;
}
A.cookSubOpen = ds => { const i = +ds.i; CK.sub = CK.sub === i ? null : i; CK.swap = null; CK.addVeg = false; refreshCook(COOKMSG, []); };
A.cookSubDo = ds => {
  CK.sub = null;
  cookOp(o => { const k = +ds.i, it = o.ing[k], from = subOf(it), to = SUBT.find(s => s.k === ds.to); if (!from || !to) return null;
    const r = subQty(it, from, to, subSlot()); subApply(o, k, from, to, r.q);
    return { title: "Remplacé : " + from.ing + " → " + to.ing, extra: r.d ? ["Quantité ajustée à " + (r.q !== "" ? r.q + " " + (it.u || "g") : "") + " pour garder les calories au plus près (" + (r.d > 0 ? "+" : "−") + Math.abs(r.d) + " kcal)"] : ["Mêmes calories"] }; });
};
