
/* ---------- question à Claude sur la fiche de cuisine (version 14) ----------
   Un champ par fiche, réponse affichée sur place (capacité « sample » des artefacts Claude).
   Le champ n'apparaît que si Claude est joignable ; sinon il reste caché, sans message d'erreur.
   Contexte envoyé : la recette ouverte en entier, le protocole de Cat et, pour tout ce qui touche au rice cooker, docs/bamboo.md. */
const ASK_PRESETS = ["Comment savoir si c'est cuit ?", "Puis-je le faire à l'avance ?", "Par quoi remplacer un ingrédient ?"];
const ASK_PROTOCOL = "Cat suit un protocole alimentaire strict (reflux LPR et côlon irritable).\n" +
  "- Aliments exclus, à ne jamais proposer ni citer comme option : légumineuses (pois chiches, lentilles, haricots secs, falafels), ail, oignon, échalote, poivre, piment, vinaigre, citron, moutarde, tomate crue, fibres crues, fritures.\n" +
  "- Légumes toujours cuits, pelés et épépinés. Plats tièdes, jamais brûlants ni glacés. Huile d'olive ou de sésame grillé ajoutée à cru, au service.\n" +
  "- Aucune cuisson à haute température : ni friture, ni rissolage, ni dorure forte.\n" +
  "- Portions (poids cuits) : féculent 120 à 150 g, protéine 80 à 100 g, légumes 150 à 200 g, 1 cuillère à café d'huile.\n" +
  "- Matériel : rice cooker Yum Asia Bamboo (modes STEAM et SLOW COOK), casserole, plaque.";
const ASK_EXCL = /\b(ail|oignons?|échalotes?|poivre|piment|vinaigre|citron|moutarde|pois chiches?|lentilles?|haricots secs|falafels?|friture|frire|tomates? crues?)\b/gi;
const ASK_NEG = /(sans|pas|jamais|éviter|evite|exclu|exclus|interdit|interdits|ni|aucun|aucune)[^.]{0,40}$/i;
const askCookerTopic = (o, q) => /rice cooker|bamboo|cuiseur|vapeur|steam|slow cook|cuve|panier|programme|minuteur|couvercle/i.test(q + " " + (o.steps || []).join(" "));
function askRecipeText(o){
  const ings = (o.ing || []).filter(x => String(x.n).trim()).map(x => (hasQ(x) ? qtyStr(x) + " " : "") + x.n).join(", ");
  const st = (o.steps || []).map((s, i) => (i + 1) + ". " + renderQ(s, o.ing || []).replace(/\s*\[[^\]]*\]\s*$/, "")).join("\n");
  return "Recette : " + (o.n || o.name) + ".\nIngrédients : " + ings + ".\nÉtapes :\n" + st + (o.tip ? "\nAstuce : " + o.tip : "");
}
function askPrompt(o, q){
  return "Tu aides Cat à cuisiner, pendant qu'elle est devant ses fourneaux.\n\n" + ASK_PROTOCOL + "\n\n" + askRecipeText(o) +
    (askCookerTopic(o, q) ? "\n\nMODE D'EMPLOI DU RICE COOKER (seule référence autorisée pour les réglages) :\n" + BAMBOO_DOC : "") +
    "\n\nQuestion de Cat : " + q +
    "\n\nRéponds en français simple et court (4 à 7 phrases), sans jargon, sans liste, sans titre ni mise en forme. Reste cohérent avec la recette ci-dessus. Ne propose jamais un aliment exclu. " +
    "N'invente jamais un réglage, un temps ou une quantité d'eau du Bamboo : utilise uniquement le mode d'emploi fourni ; si tu n'es pas sûr, dis-le clairement et conseille de relire la recette.";
}
function askGuard(txt){
  let bad = false; String(txt).replace(ASK_EXCL, (m, g, off) => { if (!ASK_NEG.test(String(txt).slice(Math.max(0, off - 45), off))) bad = true; return m; });
  return bad ? "\n\nAttention : cette réponse cite un aliment que ton protocole exclut. Ne l'ajoute pas à ton plat." : "";
}
let ASKST = { key: "", q: "", a: "" };
function askSection(o){
  const key = typeof cookKey === "function" ? cookKey() : "", mine = ASKST.key === key;
  return `<section class="ed-sec ask-sec" id="askSec" hidden><h3>${ic("sparkle")} Une question ?</h3>
    <p class="muted small">Pose ta question à Claude : il connaît cette recette et ton protocole.</p>
    <div class="ask-chips">${ASK_PRESETS.map(q => `<button class="chip" data-act="askGo" data-q="${esc(q)}">${esc(q)}</button>`).join("")}</div>
    <div class="ask-row"><input class="ask-in" id="askIn" type="text" placeholder="Ta question, par exemple : puis-je remplacer le brocoli ?" aria-label="Ta question à Claude" value="${mine ? esc(ASKST.q) : ""}"><button class="btn primary" data-act="askGo">Demander</button></div>
    <div class="ask-out" id="askOut" aria-live="polite">${mine ? esc(ASKST.a).replace(/\n/g, "<br>") : ""}</div></section>`;
}
let ASK_SAMPLE = null;
const askSample = () => ASK_SAMPLE || (ASK_SAMPLE = (async () => { try { return window.claude && window.claude.use ? (await window.claude.use("sample")) || null : null; } catch (e) { return null; } })());
(function(){
  const _oc = openCook;
  openCook = function(kind, ref){
    _oc(kind, ref);
    askSample().then(s => { const sec = document.getElementById("askSec"); if (s && sec && !(sec.dataset.off)) sec.hidden = false; });
  };
})();
document.addEventListener("keydown", e => { if (e.key === "Enter" && e.target && e.target.id === "askIn") { e.preventDefault(); const b = document.querySelector('#askSec .btn[data-act="askGo"]'); if (b) b.click(); } });
A.askGo = async ds => {
  const inp = document.getElementById("askIn"), out = document.getElementById("askOut"), sec = document.getElementById("askSec"); if (!inp || !out) return;
  const q = (ds.q || inp.value || "").trim(); if (!q) { inp.focus(); return; }
  inp.value = q; const o = edObj(); if (!o) return;
  const key = cookKey(); ASKST = { key, q, a: "" };
  const sample = await askSample(); if (!sample) { if (sec) sec.hidden = true; return; }
  out.textContent = "Claude réfléchit…";
  try {
    const r = await sample(askPrompt(o, q), { cache: false, modelTier: "quick", onText: ({ text }) => { const e = document.getElementById("askOut"); if (e && cookKey() === key) e.textContent = text; } });
    const txt = ((r && r.text) || (document.getElementById("askOut") || {}).textContent || "").trim();
    if (!txt) throw 0;
    ASKST.a = txt + askGuard(txt); const e = document.getElementById("askOut"); if (e && cookKey() === key) e.innerHTML = esc(ASKST.a).replace(/\n/g, "<br>");
  } catch (e) {
    if (e && e.code === "not_granted") out.textContent = "Autorisation refusée : tu peux réessayer et accepter la demande.";
    else if (e && e.code === "rate_limited") out.textContent = "Trop de questions d'affilée, patiente quelques secondes.";
    else { ASKST = { key: "", q: "", a: "" }; ASK_SAMPLE = null; if (sec) { sec.hidden = true; sec.dataset.off = "1"; } }   /* Claude injoignable : le champ disparaît, sans erreur */
  }
};
