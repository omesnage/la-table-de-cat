/* ============ DURÉES : barème par geste ============
   Chaque étape se termine par la liste de ses gestes entre [[ ]], par exemple
     "Mise en place — Éplucher la carotte… [[eplucher carotte; couper carotte]]"
   La durée affichée est calculée ici, à partir du geste et de la quantité de l'ingrédient (liste de la recette) :
   une même opération prend donc le même temps dans toutes les recettes.
   - geste actif : barème ci-dessous (minutes pour 100 g, ou par pièce, ou fixe), puis réduction de 30 % (REDUC) ;
   - « cuisson N » : temps de l'appareil ou de la casserole, jamais réduit (durées de docs/bamboo.md) ;
   - « attente N » : temps passif compté tel quel (réhydratation, repos, eau qui chauffe) ;
   - « // » en tête : étape faite pendant une cuisson, affichée « en parallèle » et non ajoutée au total.
   Le total de la recette (t) est la somme exacte des durées affichées des étapes, la cuisson (tc) la somme des cuissons. */
const REDUC = 0.7;
const BK_MAX = 10;   /* minutes, petit-déjeuner, étapes comprises */
const T100 = (tab, def, min) => (q, k) => Math.max(min, ((tab[k] != null ? tab[k] : def) * (q || 100)) / 100);
const GESTES = {
  sortir:     () => 1,                               /* réunir ingrédients et ustensiles sur le plan de travail */
  peser:      () => 0.3,                             /* par ingrédient pesé */
  laver:      (q, k) => /epinards|blettes|pak choi|herbe/.test(k) ? 1 : 0.3,
  rincer:     () => 1,                               /* riz, quinoa, nouilles : passoire sous l'eau */
  eplucher:   T100({ "carotte": 1, "pommes de terre": 1.5, "pomme de terre": 1.5, "panais": 1.2, "navet": 1.2, "courgette": 1, "potimarron": 2.5, "butternut": 2.5, "patate douce": 1.2,
                     "celeri-rave": 2, "aubergine": 1.2, "daikon": 1, "patisson": 2, "banane": 0.3 }, 1.2, 0.5),
  couper:     (q, k) => /tofu/.test(k) ? 0.5 : /poulet/.test(k) ? 1 : /courge spaghetti/.test(k) ? 1.5 : /banane/.test(k) ? 0.5
                 : T100({ "haricots verts": 2.5, "brocoli": 1.5, "fenouil": 1.5, "blettes": 1.5, "pak choi": 1, "epinards": 0.5 }, 1, 0.5)(q, k),
  emincer:    T100({}, 1.5, 0.5),
  raper:      T100({}, 1.5, 0.5),
  rubans:     T100({}, 1.5, 0.5),
  ciseler:    () => 0.5,
  presser:    (q, k) => /tofu/.test(k) ? 1 : 0.5,    /* éponger le tofu ; presser des légumes cuits */
  delayer:    () => 1,                               /* délayer, fouetter, mélanger une sauce ou une pâte */
  battre:     () => 1,
  ecraser:    () => 2,
  mixer:      () => 2,
  effilocher: () => 2,
  trancher:   () => 1,
  ecaler:     (q, k, n) => 0.5 * (n || 1),
  former:     (q, k, n) => 0.5 * (n || 1),           /* boulettes, galettes, rouleaux : par pièce */
  bamboo:     () => 1.5,                             /* remplir la cuve, poser le panier, programmer */
  ouvrir:     () => 1,                               /* au bip : ouvrir, ajouter, relancer */
  casserole:  () => 0.5,                             /* remplir et poser sur le feu */
  egoutter:   () => 0.5,
  assaisonner: () => 0.5,
  verser:     () => 0.5,
  rechauffer: () => 0.5,                             /* lancer un réchauffage (micro-ondes, casserole) */
  dresser:    (q, k, n) => 1 + 0.5 * (n || 2)        /* n = nombre d'éléments à disposer */
};
/* mots de la consigne et geste qui doit figurer dans la liste (contrôlé par validate.js : rien n'est oublié) */
const GESTE_MOTS = [[/[ée]plucher/i, "eplucher"], [/\b(couper(?! le feu)|tailler|d[ée]tailler)\b/i, "couper"], [/[ée]mincer/i, "emincer"], [/r[âa]per/i, "raper"],
[/\blaver\b/i, "laver|rincer"], [/\brincer\b/i, "rincer|laver"], [/\bciseler\b/i, "ciseler"], [/(?<!s')[ée]craser/i, "ecraser"], [/\bmixer\b/i, "mixer"],
  [/effilocher/i, "effilocher"], [/[ée]caler/i, "ecaler"], [/\bd[ée]layer\b|\bfouetter\b/i, "delayer"], [/\bbattre\b/i, "battre"], [/\bpeser\b/i, "peser"], [/\btrancher\b/i, "trancher"]];
function ingQty(r, ref){
  const k = norm(ref), i = r.ing.find(x => norm(x.n) === k) || r.ing.find(x => norm(x.n).indexOf(k) >= 0);
  if (!i) return null;
  const q = parseFloat(String(i.q).replace(",", ".")) || 0, u = norm(i.u || "");
  return { k, q: u === "g" || u === "ml" ? q : 0, n: u === "g" || u === "ml" ? 0 : q };
}
/* calcule une étape : { txt, act, wait, cook, par, err } */
function timeStep(r, raw){
  const m = String(raw).match(/\s*\[\[([^\]]*)\]\]\s*$/); if (!m) return { txt: raw, none: true };
  let spec = m[1].trim(), par = false, act = 0, wait = 0, cook = 0; const err = [], gs = [];
  if (spec.indexOf("//") === 0) { par = true; spec = spec.slice(2); }
  spec.split(";").map(x => x.trim()).filter(Boolean).forEach(g => {
    const w = g.split(/\s+/), v = w[0], rest = w.slice(1);
    if (v === "cuisson" || v === "attente") { const x = parseFloat(rest[0]); if (!(x > 0)) err.push("durée ? " + g); else if (v === "cuisson") cook += x; else wait += x; gs.push(v); return; }
    const f = GESTES[v]; if (!f) { err.push("geste inconnu : " + v); return; }
    let mult = 1; if (/^x\d+$/.test(rest[rest.length - 1] || "")) mult = +rest.pop().slice(1);
    const ref = rest.join(" "); let q = 0, k = "", n = mult;
    if (ref) { const iq = ingQty(r, ref); if (!iq) { err.push("ingrédient ? " + ref); return; } q = iq.q; k = iq.k; if (iq.n && mult === 1) n = iq.n; }
    act += f(q, k, n); gs.push(v);
  });
  const a = act > 0 ? Math.max(1, Math.round(act * REDUC)) : 0, p = a + Math.round(wait);
  const body = String(raw).slice(0, m.index);
  const tag = par ? "[en parallèle " + Math.max(1, p + cook) + " min]" : cook ? (p ? "[" + p + " min + cuisson " + cook + " min]" : "[cuisson " + cook + " min]") : "[" + Math.max(1, p) + " min]";
  return { txt: body + " " + tag, gs, par, prep: par ? 0 : (cook ? p : Math.max(1, p)), cook: par ? 0 : cook, err };
}
function timeRecipe(r){
  let t = 0, tc = 0; const err = [];
  r.steps = r.steps.map(s => { const x = timeStep(r, s); if (x.none) { if (!/^Avant de commencer/.test(s)) err.push("étape sans gestes : " + s.slice(0, 40)); return s; }
    t += x.prep + x.cook; tc += x.cook; x.err.forEach(e => err.push(e));
    const body = x.txt.replace(/\s*\[[^\]]*\]\s*$/, "");
    GESTE_MOTS.forEach(([re, g]) => { if (re.test(body) && !g.split("|").some(y => x.gs.indexOf(y) >= 0)) err.push("geste oublié (" + g + ") : " + body.slice(0, 40)); });
    return x.txt; });
  r.t = t; r.tc = tc; r.timeErr = err; return r;
}
const NEW_RECIPES = BREAKFAST.concat(LUNCH, COLLATIONS, BANCHAN);
NEW_RECIPES.forEach(timeRecipe);
