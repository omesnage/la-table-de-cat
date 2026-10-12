/* =====================================================================
   Réécriture de la recette par Claude (version 17) : après un changement d'ingrédients, Claude vérifie la logique de la recette,
   la réécrit entièrement (étapes et liste) en respectant le protocole de Cat, puis propose de l'ajouter au carnet.
   Capacité « sample » : les boutons n'existent que si Claude est joignable (artefact claude.ai). Sinon, la fiche garde ses réglages immédiats.
   ===================================================================== */
const REW = { key: null, base: null, cur: null, prop: null, ctl: null, cook: false, ok: false };
const rewOn = () => REW.ok;
askSample().then(sm => { REW.ok = !!sm; if (sm && MODAL && document.querySelector("#edWrap.cook")) { try { refreshCook(COOKMSG, []); } catch (e) {} } });

/* ce que le protocole de Cat exclut : jamais dans une recette ni dans une proposition */
const REW_BAN = [
  ["ail, oignon ou échalote", /\b(ail|oignons?|echalotes?|cebettes? blanche)\b/], ["poivre", /\bpoivre\b/], ["piment", /\bpiments?\b/], ["vinaigre", /\bvinaigres?\b/],
  ["citron", /\bcitrons?\b/], ["moutarde", /\bmoutarde\b/], ["tomate crue", /\btomates? crues?\b/],
  ["légumineuses", /\b(pois chiches?|lentilles?|flageolets?|houmous|hummus|falafels?|haricots (rouges?|blancs?|secs?|noirs?))\b/],
  ["friture", /\bfritur\w*|\bfrire\b|\bpaner\b|\bpanure\b/], ["œufs brouillés", /\bbrouill\w*/]
];
function rewBanned(texts){
  const t = " " + norm(texts.join(" \n ")) + " ", out = [];
  REW_BAN.forEach(([label, re]) => { if (re.test(t) && out.indexOf(label) < 0) out.push(label); });
  return out;
}

/* ---------- état courant de la recette ouverte (cuisine, éditeur ou création) ---------- */
const rewRaw = s => { const txt = s.txt.trim() || s.h.trim(), h = s.txt.trim() ? s.h.trim() : "";
  return (h ? h + " — " : "") + txt + (s.mins ? " [" + (s.cook ? "cuisson " : "") + s.mins + " min]" : ""); };
function rewCtx(){
  if (!MODAL) return null;
  if (MODAL.kind === "creator" && typeof CR !== "undefined" && CR) {
    return { kind: "creator", name: CR.f.n || "", cat: CR.f.cat, tip: CR.f.tip || "",
      ing: ingSig({ ing: CR.ing }), steps: CR.steps.filter(s => s.txt.trim() || s.h.trim()).map(rewRaw) };
  }
  if (["meal", "recipe", "temp"].indexOf(MODAL.kind) < 0) return null;
  const o = edObj(); if (!o) return null;
  return { kind: MODAL.kind, name: o[nameKey()] || "", cat: o.cat, tip: o.tip || "", ing: ingSig(o), steps: (o.steps || []).slice() };
}
function rewKey(){
  if (!MODAL) return null;
  if (MODAL.kind === "creator") return CR ? "cr:" + CR.id : null;
  if (["meal", "recipe", "temp"].indexOf(MODAL.kind) < 0) return null;
  const o = edObj(); return o ? cookKey() : null;
}
const rewSig = list => list.map(i => norm(i.n) + "|" + String(i.q).replace(",", ".") + "|" + norm(i.u)).sort().join(";");
const rewChanged = () => { const c = rewCtx(); return !!(c && REW.base && rewSig(c.ing) !== rewSig(REW.base.ing)); };

/* suit la recette ouverte : la version de départ sert de référence à Claude */
function rewTrack(){
  const k = rewKey();
  if (!k) { REW.key = null; REW.base = null; return; }
  if (k !== REW.key) { REW.key = k; REW.base = rewCtx(); }
  rewSync();
}
/* affiche ou masque la barre « Valider » sous la liste des ingrédients */
function rewSync(){
  const old = document.getElementById("rewBar");
  if (!rewOn() || !MODAL || !REW.key || document.querySelector("#edWrap.cook") || !rewChanged()) { if (old) old.remove(); return; }
  const sec = [...document.querySelectorAll("#edWrap section")].find(s => !s.classList.contains("vg-sec") && /Ingrédients/.test((s.querySelector("h3") || {}).textContent || ""));
  if (!sec) { if (old) old.remove(); return; }
  if (old && old.parentNode === sec) return;
  if (old) old.remove();
  const bar = document.createElement("div"); bar.id = "rewBar"; bar.className = "rew-bar";
  bar.innerHTML = `<div><strong>Ingrédients modifiés</strong><span>Claude vérifie que la recette tient debout et la repense si besoin.</span></div><button class="btn primary" data-act="rewGo">${ic("sparkle")} Valider</button>`;
  sec.appendChild(bar);
}
(function(){
  const om = openModal, cm = closeModal;
  openModal = function(html, opts){ om(html, opts); try { rewTrack(); } catch (e) {} };
  closeModal = function(){ rewHide(); cm(); REW.key = null; REW.base = null; };
  ["input", "change", "click"].forEach(ev => document.addEventListener(ev, () => setTimeout(() => { try { rewSync(); } catch (e) {} }, 80)));
  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && document.getElementById("rewOv")) { e.stopImmediatePropagation(); A.rewClose(); }
  }, true);
})();

/* fiche cuisine : liste d'ingrédients visée = liste actuelle + changements en attente */
function rewTarget(o){
  const pend = CK.pend || [], out = [];
  (o.ing || []).forEach((i, k) => { const op = pend.find(p => p.t !== "add" && p.i === k); if (!op) out.push({ n: i.n, q: i.q, u: i.u }); else if (op.t === "swap") out.push({ n: op.to.n, q: op.to.q, u: op.to.u }); });
  pend.forEach(p => { if (p.t === "add") out.push({ n: p.to.n, q: p.to.q, u: p.to.u }); });
  return out.filter(i => String(i.n).trim());
}
function rewPendLines(){
  const w = x => x.n + (qtyStr(x) ? " (" + qtyStr(x) + ")" : "");
  return (CK.pend || []).map(p => p.t === "swap" ? "Remplacer " + p.from + " par " + w(p.to) : p.t === "remove" ? "Retirer " + p.from : "Ajouter " + w(p.to));
}

/* ---------- fenêtre de Claude ---------- */
function rewShow(html){
  let ov = document.getElementById("rewOv");
  if (!ov) { ov = document.createElement("div"); ov.id = "rewOv"; ov.className = "rew-ov"; ov.setAttribute("role", "dialog"); ov.setAttribute("aria-modal", "true"); document.body.appendChild(ov); }
  ov.innerHTML = `<div class="rew-panel">${html}</div>`;
  const p = ov.querySelector(".rew-panel"); if (p) p.scrollTop = 0;
}
function rewHide(){ const ov = document.getElementById("rewOv"); if (ov) ov.remove(); }
const rewMsg = (title, text, btns) => rewShow(`<p class="rew-eyebrow">Claude</p><h2 class="rew-title">${esc(title)}</h2>${text ? `<p class="rew-text">${esc(text)}</p>` : ""}<div class="rew-foot">${btns}</div>`);

/* ---------- la demande à Claude ---------- */
/* créneau du repas ouvert : b petit-déjeuner, l/d déjeuner ou dîner, c collation */
function rewSlot(){
  if (MODAL && MODAL.kind === "meal" && MODAL.t) return MODAL.t.s;
  if (MODAL && MODAL.kind === "creator" && CR) return CR.f.cat === "Petit-déjeuner" ? "b" : CR.f.cat === "Collation" ? "c" : "l";
  const o = MODAL && ["recipe", "temp"].indexOf(MODAL.kind) >= 0 ? edObj() : null; return o ? protSlot(o, null) : "l";
}
const REW_LVL = e => e && (e.n === 1 || e.n === "t" || ((e.n === "p2" || e.n === "p3") && reintOK(e.k)));
function rewAllowed(){
  const seen = new Set(), out = [];
  S.recipes.forEach(r => (r.ing || []).forEach(i => { const n = String(i.n || "").trim(), k = norm(n); if (!n || seen.has(k)) return; seen.add(k); if (REW_LVL(lookup(n))) out.push(n); }));
  return out.sort((a, b) => a.localeCompare(b, "fr"));
}
function rewPrompt(cur, base, note){
  const lst = l => l.map(i => "- " + i.n + " : " + (qtyStr(i) || "à ton goût")).join("\n");
  const dl = cur.changes || diffIng(base.ing, cur.ing).lines, slot = rewSlot(), R = PORTIONS[slot] || PORTIONS.l;
  const slotTxt = slot === "b" ? "Il s'agit d'un PETIT-DÉJEUNER léger d'environ 250 kcal : 10 minutes au maximum, étapes comprises, sans préparation la veille (seuls riz et quinoa cuits la veille sont permis). Portions : féculent " + R.f[0] + " à " + R.f[1] + " g cuit (ou " + R.fr[0] + " à " + R.fr[1] + " g pour un féculent sec comme l'avoine), protéines " + R.p[0] + " à " + R.p[1] + " g d'aliment."
    : slot === "c" ? "Il s'agit d'une COLLATION : 6 minutes de préparation au maximum, portions de la recette d'origine."
    : "Il s'agit d'un " + (slot === "d" ? "DÎNER" : "DÉJEUNER") + ". Portions (poids cuits) : féculent " + R.f[0] + " à " + R.f[1] + " g (ou " + R.fr[0] + " à " + R.fr[1] + " g pour un féculent sec : riz cru, avoine, farines), protéine solide " + R.p[0] + " à " + R.p[1] + " g (tofu ferme, soyeux ou fumé, blanc ou cuisse de poulet sans peau, cabillaud, blanc de dinde, sardines ; un œuf compte 50 g ; la protéine texturée compte 3 fois son poids sec, 30 g secs au plus par repas), légumes 150 à 200 g, 1 c. à café d'huile.";
  return "Tu es chef cuisinier. Tu aides Cat, qui suit un protocole alimentaire strict (reflux LPR et côlon irritable) et qui vient de modifier les ingrédients d'une recette de son application.\n\n" +
    "RECETTE D'ORIGINE (cohérente) : " + (base.name || "sans nom") + (base.cat ? " (" + base.cat + ")" : "") + "\n" +
    "Ingrédients d'origine :\n" + lst(base.ing) + "\n" +
    "Étapes d'origine (une par ligne) :\n" + base.steps.join("\n") + "\n" + (base.tip ? "Astuce d'origine : " + base.tip + "\n" : "") + "\n" +
    "INGRÉDIENTS FINAUX VOULUS PAR CAT :\n" + lst(cur.ing) + "\n" +
    (dl.length ? "CHANGEMENTS DEMANDÉS : " + dl.join(" ; ") : "AUCUN CHANGEMENT D'INGRÉDIENT : vérifie que la recette est cohérente avec la liste et corrige-la.") + "\n" +
    "Dans les étapes d'origine, la mention ⟦sans X⟧ signale un ingrédient X retiré à la main : réécris proprement ces étapes, sans X et sans cette mention.\n\n" +
    "TA MISSION, DANS L'ORDRE\n" +
    "1. Vérifie la logique culinaire (si un ingrédient en remplace un autre, adapte la cuisson, le geste et l'assaisonnement à sa nature) : les ingrédients voulus vont-ils ensemble (saveurs, textures, cuissons, rôle dans l'assiette) ? Exemple d'erreur à éviter : mélanger des haricots verts dans une purée.\n" +
    "2. Réécris ce qu'il faut pour intégrer chaque changement de façon naturelle : modifie une étape existante, ajoute une étape bien placée (jamais après le dressage), retire une étape devenue inutile, ajuste quantités et durées. Conserve tous les autres ingrédients et le caractère du plat, sauf si la logique l'impose. Si l'association ne fonctionne pas telle quelle, repense la recette pour qu'elle fonctionne en gardant les ingrédients voulus ; si c'est vraiment impossible, retire le moins possible et dis-le dans « verdict ».\n" +
    "3. RESPECTE LE PROTOCOLE DE CAT, sans exception. " + ASK_RULES + " Pas d'œufs brouillés ; une seule préparation d'œuf par plat. Seuils low-FODMAP : haricots verts 75 g, courgette épluchée 60 g au plus par repas ; petites portions de patate douce, fenouil, céleri-rave. Cuissons douces seulement.\n" +
    "   " + slotTxt + "\n" +
    "   Utilise UNIQUEMENT des aliments de cette liste (écris-les exactement ainsi) : " + rewAllowed().join(", ") + ".\n" +
    "4. Si une étape utilise le rice cooker Bamboo, suis à la lettre ces règles et ce mode d'emploi, sans jamais inventer un réglage, un temps ou une quantité d'eau :\n" + ASK_BAMBOO + "\n=== MODE D'EMPLOI DU BAMBOO ===\n" + BAMBOO_DOC + "\n=== FIN DU MODE D'EMPLOI ===\n\n" +
    "STYLE DES ÉTAPES (Cat cuisine seule, sans personne à côté) :\n" + STYLE_DOC + "\n\n" +
    "FORMAT DES ÉTAPES : « Titre court — consigne détaillée et concrète. [N min] ». Durée à la fin de chaque étape, sous l'une de ces formes : « [N min] » (geste), « [N min + cuisson M min] » (gestes puis cuisson), « [cuisson M min] », « [en parallèle N min] » (étape faite pendant une cuisson). Garde, s'ils existent, « Avant de commencer — Ustensiles : … » en première étape (mise à jour) et « Organisation — … » en dernière. Dans une étape, chaque quantité s'écrit {{nom exact de l'ingrédient}} (exemple : « Ajouter les haricots verts ({{haricots verts}}) »), l'application remplace par la quantité de la liste. Les noms entre accolades doivent être identiques à ceux du tableau « ing ». Tous les ingrédients de la liste sont cités dans les étapes, et aucun autre.\n\n" +
    (note ? "ATTENTION, ta réponse précédente était refusée : " + note + " Corrige.\n\n" : "") +
    "RÉPONDS UNIQUEMENT PAR UN OBJET JSON, sans texte autour, sans bloc de code :\n" +
    '{"coherent": true ou false (la combinaison voulue fonctionne-t-elle telle quelle ?),\n "verdict": "1 à 3 phrases en français simple : ce qui fonctionne ou pas, et ce que tu as décidé",\n "name": "nom du plat à jour",\n "t": temps total en minutes (nombre),\n "ing": [{"n": "nom", "q": nombre ou "", "u": "g|ml|pièce|tranche|c. à café|c. à soupe|pincée|quelques brins|feuille|pot|tasse"}],\n "steps": ["Titre — consigne [N min]"],\n "tip": "astuce du chef courte, ou chaîne vide",\n "changes": ["3 à 6 phrases courtes : ce qui change dans les étapes"]}';
}
function rewParse(txt){
  const a = String(txt || "").indexOf("{"), b = String(txt || "").lastIndexOf("}"); if (a < 0 || b < a) return null;
  let p; try { p = JSON.parse(txt.slice(a, b + 1)); } catch (e) { return null; }
  if (!p || !Array.isArray(p.ing) || !Array.isArray(p.steps)) return null;
  const ing = p.ing.map(i => ({ n: String((i && i.n) || "").trim(), q: i && i.q != null && i.q !== "" ? String(i.q).replace(",", ".") : "", u: String((i && i.u) || "g").trim() })).filter(i => i.n);
  const steps = p.steps.map(s => String(s || "").trim()).filter(Boolean);
  if (ing.length < 2 || steps.length < 2) return null;
  return { coherent: p.coherent !== false, verdict: String(p.verdict || "").trim(), name: String(p.name || "").trim(), t: +p.t > 0 ? Math.round(+p.t) : 0,
    ing, steps, tip: String(p.tip || "").trim(), changes: (Array.isArray(p.changes) ? p.changes : []).map(x => String(x).trim()).filter(Boolean).slice(0, 8) };
}
/* contrôles faits par l'application, quoi que Claude réponde */
function rewCheck(p, base){
  const hard = [], warn = [], slot = rewSlot();
  const had = base ? rewBanned(base.ing.map(i => i.n).concat(base.steps, [base.name, base.tip])) : [];
  const bad = rewBanned(p.ing.map(i => i.n).concat(p.steps, [p.name, p.tip])).filter(x => had.indexOf(x) < 0); if (bad.length) hard.push("la proposition contient « " + bad.join(", ") + " », exclu par le protocole de Cat.");
  const baseNames = base ? base.ing.map(i => norm(i.n)) : [], fresh = p.ing.filter(i => baseNames.indexOf(norm(i.n)) < 0);
  const unk = fresh.filter(i => !lookup(i.n)).map(i => i.n); if (unk.length) hard.push("ingrédient inconnu de l'application : " + unk.join(", ") + " (utilise uniquement la liste d'aliments donnée).");
  const off = fresh.filter(i => lookup(i.n) && !REW_LVL(lookup(i.n))).map(i => i.n); if (off.length) hard.push(off.join(", ") + " n'est pas autorisé par le protocole de Cat (non listé ou palier de réintroduction pas encore débloqué).");
  const pc = protoCheck({ ing: p.ing }), pb = base ? protoCheck({ ing: base.ing }) : { bad: [], warn: [] };
  const pcBad = pc.bad.filter(x => !pb.bad.some(y => norm(y.n) === norm(x.n))); if (pcBad.length) hard.push(pcBad.map(x => x.n + " : " + x.why).join(" ; ") + ".");
  if (p.steps.some(s => /⟦/.test(s))) hard.push("des marqueurs ⟦sans …⟧ restent dans les étapes.");
  if (base) { const txt = " " + norm(p.steps.join(" ")) + " ", gone = base.ing.filter(i => !p.ing.some(x => norm(x.n) === norm(i.n))).map(i => ({ n: i.n, k: ingKey(i.n) })).filter(x => x.k && x.k.length >= 4 && STOP_KEYS.indexOf(x.k) < 0 && txt.indexOf(x.k) >= 0);
    if (gone.length) hard.push("les étapes citent encore " + gone.map(x => x.n).join(", ") + ", qui n'est plus dans la liste d'ingrédients."); }
  const miss = []; (p.steps.join(" ").match(/\{\{([^}]+)\}\}/g) || []).forEach(m => { const n = norm(m.slice(2, -2)); if (!p.ing.some(i => norm(i.n) === n || norm(i.n).indexOf(n) >= 0) && miss.indexOf(n) < 0) miss.push(n); });
  if (miss.length) hard.push("les quantités {{" + miss.join("}}, {{") + "}} ne correspondent à aucun ingrédient de la liste.");
  if (base && /Avant de commencer/i.test(base.steps.join(" ")) && !p.steps.some(s => /^Avant de commencer/i.test(s))) warn.push("l'étape « Avant de commencer » (ustensiles) a disparu.");
  const eggs = norm(p.name + " " + p.steps.join(" ")), nEgg = [/oeufs? durs?/, /au plat/, /mollet/, /poche/, /omelette/].filter(re => re.test(eggs)).length; if (nEgg > 1) hard.push("plus d'une préparation d'œuf dans le même plat.");
  if (slot === "b" && p.t > 10) hard.push("un petit-déjeuner dure 10 minutes au maximum (" + p.t + " min annoncées).");
  if (slot === "c" && p.t > 6) hard.push("une collation dure 6 minutes au maximum (" + p.t + " min annoncées).");
  pc.warn.filter(w => !w.soft && !pb.warn.some(y => norm(y.n) === norm(w.n))).forEach(w => warn.push(w.n + " : " + w.why));
  return { hard, warn, kc: kcalOf({ ing: p.ing }) };
}
/* remet les portions dans les fourchettes du protocole (féculents, protéines), sans toucher au reste */
function rewFix(p){
  const m = { ing: p.ing.map(i => Object.assign({}, i)) }, before = p.ing.map(i => qtyStr(i));
  if (!protoAdaptMeal(m, rewSlot(), null)) return [];
  const out = []; m.ing.forEach((i, k) => { if (qtyStr(i) !== before[k]) out.push(i.n + " : " + before[k] + " → " + qtyStr(i)); });
  p.ing = m.ing; return out.length ? ["Portions remises dans les fourchettes du protocole (" + out.join(" ; ") + ")"] : [];
}
async function rewCall(sample, cur, base){
  let note = "";
  for (let n = 0; n < 2; n++) {
    const r = await sample(rewPrompt(cur, base, note), { cache: false, signal: REW.ctl.signal });
    const p = rewParse(r && r.text);
    if (!p) { note = "le JSON était illisible ou incomplet."; continue; }
    const c = rewCheck(p, base);
    if (!c.hard.length) { const fx = rewFix(p); p.changes = p.changes.concat(fx); c.kc = kcalOf({ ing: p.ing }); return { p, c }; }
    note = c.hard.join(" ");
    if (n === 1) return { p, c };
  }
  return { p: null, c: null, note };
}
A.rewGo = async () => {
  const cook = !!document.querySelector("#edWrap.cook") && MODAL && MODAL.kind !== "creator";
  let cur, base;
  if (cook) { base = rewCtx(); const o = edObj(); cur = base && o ? Object.assign({}, base, { ing: rewTarget(o), changes: rewPendLines() }) : null; }
  else { cur = rewCtx(); base = REW.base; }
  if (!cur || !base) return;
  REW.cur = cur; REW.prop = null; REW.cook = cook;
  const had = base.ing.map(i => norm(i.n)), bad = rewBanned(cur.ing.filter(i => had.indexOf(norm(i.n)) < 0).map(i => i.n));
  if (bad.length) return rewMsg("Ingrédient exclu", "« " + bad.join(", ") + " » est exclu par ton protocole. Retire-le de la liste, puis valide de nouveau.", `<button class="btn primary push" data-act="rewClose">Compris</button>`);
  let sample = null; try { sample = window.claude && window.claude.use ? await window.claude.use("sample") : null; } catch (e) {}
  if (!sample) return rewMsg("Claude n'est pas disponible ici", "Cette fonction marche dans la version publiée sur Claude (page claude.ai), pas dans le fichier ouvert depuis l'ordinateur. " + (cook && (CK.pend || []).length ? "Tes changements restent en attente : la recette n'a pas été modifiée. Tu peux aussi les appliquer sans Claude, mais les étapes seront moins précises." : "La recette n'a pas été modifiée."), cook && (CK.pend || []).length ? `<button class="btn" data-act="rewMech">Appliquer sans Claude</button><button class="btn primary push" data-act="rewClose">Fermer</button>` : `<button class="btn primary push" data-act="rewClose">Fermer</button>`);
  REW.ctl = new AbortController();
  rewShow(`<p class="rew-eyebrow">Claude</p><h2 class="rew-title">Je vérifie la recette…</h2><p class="rew-text">Je contrôle que les ingrédients vont ensemble, puis j'adapte les étapes. Cela peut prendre une minute.</p><div class="rew-pulse" aria-hidden="true"><i></i><i></i><i></i></div><div class="rew-foot"><button class="btn ghost push" data-act="rewStop">Arrêter</button></div>`);
  try {
    const res = await rewCall(sample, cur, base);
    if (!res.p) return rewMsg("Je n'ai pas pu proposer une version fiable", "Claude n'a pas renvoyé de recette exploitable (" + (res.note || "réponse incomplète") + "). Ta recette n'a pas été modifiée.", `<button class="btn" data-act="rewGo">Réessayer</button><button class="btn primary push" data-act="rewClose">Fermer</button>`);
    if (res.c.hard.length) return rewMsg("Je n'ai pas pu proposer une version fiable", "Claude a proposé une recette qui ne passe pas les contrôles : " + res.c.hard.join(" ") + " Ta recette n'a pas été modifiée.", `<button class="btn" data-act="rewGo">Réessayer</button><button class="btn primary push" data-act="rewClose">Fermer</button>`);
    REW.prop = res.p; rewProposal(res.p, res.c, cur);
  } catch (e) {
    if (REW.ctl.signal.aborted || (e && (e.code === "aborted" || e.name === "AbortError"))) return;
    const t = e && e.code === "not_granted" ? "Autorisation refusée : tu peux réessayer et accepter la demande." : e && e.code === "rate_limited" ? "Trop de demandes d'affilée, patiente quelques secondes." : "Claude n'a pas pu répondre pour l'instant. Réessaie dans un instant.";
    rewMsg("Pas de réponse", t + " Ta recette n'a pas été modifiée.", `<button class="btn" data-act="rewGo">Réessayer</button><button class="btn primary push" data-act="rewClose">Fermer</button>`);
  }
};
A.rewStop = () => { if (REW.ctl) REW.ctl.abort(); rewHide(); };
A.rewClose = () => { if (REW.ctl) REW.ctl.abort(); rewHide(); };

/* ---------- la proposition ---------- */
function rewProposal(p, c, cur){
  const dI = diffIng(cur.ing, p.ing), k0 = kcalOf({ ing: cur.ing });
  const lines = p.changes.concat(dI.lines); if (c.kc !== k0) lines.push("≈ " + fmtK(k0) + " → " + fmtK(c.kc) + " kcal");
  const steps = p.steps.map(s => parseStep(renderQ(s, p.ing)));
  const verdict = `<div class="rew-verdict ${p.coherent ? "ok" : "ko"}"><strong>${p.coherent ? "La combinaison fonctionne" : "Telle quelle, la combinaison ne fonctionne pas"}</strong>${p.verdict ? `<p>${esc(p.verdict)}</p>` : ""}</div>`;
  rewShow(`<p class="rew-eyebrow">Proposition de Claude</p><h2 class="rew-title">${esc(p.name || cur.name || "Recette")}</h2>${verdict}
    ${c.warn.length ? `<p class="rew-warn">${c.warn.map(esc).join("<br>")}</p>` : ""}
    ${lines.length ? `<h3 class="rew-h">Ce qui change</h3><ul class="rew-list">${lines.map(l => `<li>${esc(l.replace(/^[+−-]\s+/, ""))}</li>`).join("")}</ul>` : ""}
    <h3 class="rew-h">Ingrédients</h3><ul class="rew-ings">${p.ing.map(i => `<li><span>${esc(i.n)}</span><b>${esc(qtyStr(i))}</b></li>`).join("")}</ul>
    <h3 class="rew-h">Préparation</h3><ol class="rew-steps">${steps.map(s => `<li>${s.h ? `<strong>${esc(s.h)}</strong>` : ""}<span>${esc(s.body)}</span></li>`).join("")}</ol>
    <div class="rew-foot"><button class="btn ghost" data-act="rewKeep">${REW.cook ? "Pas maintenant" : "Garder ma version"}</button><button class="btn primary push" data-act="rewUse">Utiliser cette recette</button></div>`);
}
A.rewKeep = () => { if (!REW.cook) REW.base = rewCtx(); rewHide(); rewSync(); };
/* sans Claude : mêmes changements, mais appliqués mécaniquement aux étapes */
A.rewMech = () => {
  rewHide(); const o = edObj(); if (!o) return; const pend = (CK.pend || []).slice(); CK.pend = [];
  cookOp(o => {
    const at = n => o.ing.findIndex(x => norm(x.n) === norm(n));
    pend.forEach(p => { if (p.t !== "add") { const i = at(p.from); if (i >= 0) removeIngredient(o, i); } if (p.t !== "remove") addIngredient(o, p.to.n, p.to.q, p.to.u); });
    return { title: "Changements appliqués sans Claude", extra: [] };
  });
};

/* applique la proposition à la recette ouverte */
function rewApply(p){
  const idOf = list => n => { const e = list.find(i => norm(i.n) === norm(n)); return e && e.id ? e.id : uid(); };
  if (MODAL.kind === "creator") {
    const id = idOf(CR.ing);
    CR.ing = p.ing.map(i => ({ id: id(i.n), n: i.n, q: i.q, u: i.u }));
    CR.steps = p.steps.map(parseStep).map(s => ({ h: s.h, txt: s.body, mins: s.expl ? s.mins : 0, cook: s.kind === "cook" }));
    if (p.name) CR.f.n = p.name; if (p.tip) CR.f.tip = p.tip; if (p.t) CR.f.t = p.t;
    renderCreator(); return;
  }
  const o = edObj(), persist = MODAL.kind !== "temp"; if (!o) return; if (persist) snapshot();
  const key = cookKey(), id = idOf(o.ing || []);
  o.ing = p.ing.map(i => ({ id: id(i.n), n: i.n, q: i.q, u: i.u })); o.steps = p.steps.slice();
  if (p.name) o[nameKey()] = p.name; if (p.tip) o.tip = p.tip; if (p.t) o.t = p.t; o.tc = 0;
  o.iv = (o.iv || []).filter(x => o.ing.some(i => { const vk = vegKeyOfIng(i.n); return vk && VEGS[vk] && VEGS[vk].n === x; }));
  delete o.gen; if (S.cooked) delete S.cooked[key]; CK.pend = []; CK.sw = CK.swap = null;
  if (persist) save();
  if (document.querySelector("#edWrap.cook")) refreshCook({ title: "Recette mise à jour par Claude", lines: ["Les étapes et la liste d'ingrédients correspondent à nouveau."], undo: persist }, []);
  else openEditorEdit(MODAL.kind, modalRef());
}
A.rewUse = () => {
  const p = REW.prop; if (!p || !MODAL) return rewHide();
  const kind = MODAL.kind; rewApply(p); REW.base = rewCtx(); REW.prop = null;
  const offer = kind === "meal" || kind === "temp";
  if (offer) return rewShow(`<p class="rew-eyebrow">Claude</p><h2 class="rew-title">Recette mise à jour</h2><p class="rew-text">Les ingrédients et les étapes sont à jour. Souhaites-tu aussi l'ajouter à tes recettes ?</p><div class="rew-foot"><button class="btn ghost" data-act="rewClose">Pas maintenant</button><button class="btn primary push" data-act="rewToBook">Ajouter au carnet</button></div>`);
  rewMsg("Recette mise à jour", kind === "creator" ? "Les ingrédients et les étapes sont à jour. Enregistre la recette pour l'ajouter à ton carnet." : "Les ingrédients et les étapes sont à jour dans ton carnet.", `<button class="btn primary push" data-act="rewClose">Fermer</button>`);
};
A.rewToBook = () => {
  const o = MODAL && (MODAL.kind === "meal" || MODAL.kind === "temp") ? edObj() : null; if (!o) return rewHide();
  const taken = n => S.recipes.some(r => norm(r.n) === norm(n)); let name = (o.name || "Recette sans nom").trim();
  if (taken(name)) { const base = name; let k = 2; name = base + " (variante)"; while (taken(name)) name = base + " (variante " + k++ + ")"; }
  const r = { id: "r-" + uid(), n: name, cat: CATS.includes(o.cat) ? o.cat : (o.cat || "Végétarien"), st: o.st || "Français léger", base: o.base || "Aucun", t: o.t || "", d: o.d || 1,
    ing: o.ing.map(i => ({ id: uid(), n: i.n, q: i.q, u: i.u })), steps: [...o.steps], tip: o.tip || "", own: true };
  S.recipes.unshift(r); if (MODAL.kind === "meal") o.recipeId = r.id; save(); rewHide(); toast("Ajouté au carnet : " + r.n);
};
