
/* ---------- questions à Claude sur chaque étape de la fiche de cuisine (version 14) ----------
   Un bouton « Question » sous chaque étape ouvre un encart (questions rapides + champ libre), la réponse s'affiche sur place.
   Capacité « sample » des artefacts Claude : les boutons n'apparaissent que si Claude est joignable (sinon rien, aucune erreur).
   Texte envoyé : voir askPrompt (protocole de Cat, règles du Bamboo tirées de docs/bamboo.md pour tout ce qui touche au rice cooker). */

/* quantités dites en français : « 3 œufs », « 1 c. à café de mirin » */
function plNom(n, q){
  const m = String(n).match(/^(.+?)( (?:de|d'|du|à|au) .+)$/), head = m ? m[1] : String(n), tail = m ? m[2] : "";
  return (q > 1 && !/[sxz]$/i.test(head) ? head + "s" : head) + tail;
}
function qPhrase(n, ings){
  const k = norm(n), i = ings.filter(x => norm(x.n) === k)[0] || ings.filter(x => norm(x.n).indexOf(k) >= 0)[0]; if (!i) return "";
  const q = parseFloat(String(i.q).replace(",", "."));
  if (norm(i.u) === "piece" && q > 0) return String(i.q).replace(".", ",") + " " + plNom(i.n, q);
  return qtyStr(i);
}
function renderQ(txt, ings){
  return String(txt).replace(/\s*\(\{\{([^}]+)\}\}\)/g, (m, n) => { const q = qPhrase(n, ings); return q ? " (" + q + ")" : ""; })
    .replace(/\{\{([^}]+)\}\}/g, (m, n) => qPhrase(n, ings));
}
function qtyChip(i){
  const q = parseFloat(String(i.q).replace(",", "."));
  return norm(i.u) === "piece" && q > 0 ? `<b>${esc(String(i.q).replace(".", ","))}</b> ${esc(plNom(i.n, q))}` : `<b>${esc(qtyStr(i))}</b> ${esc(i.n)}`;
}

const ASK_PRESETS = ["Comment savoir si c'est cuit ?", "Explique le geste pas à pas", "Quelle erreur éviter ?", "Puis-je le faire à l'avance ?"];
const ASK_RULES = "N'utilise jamais : légumineuses (pois chiches, lentilles, haricots secs, falafels), ail, oignon, échalote, poivre, piment, vinaigre, citron, moutarde, tomate crue, fibres crues, fritures, cuissons à haute température (ni rissolage ni dorure forte). Les légumes sont toujours cuits, pelés, épépinés. Les plats sont servis tièdes. Huile d'olive ou de sésame grillé ajoutée à cru, au service.";
const ASK_BAMBOO = "Règles du rice cooker Yum Asia Bamboo : vapeur (STEAM) avec de l'eau chaude jusqu'au repère « 2-3 » de la cuve (au moins 360 ml), durée réglable jusqu'à 1 h par paliers de 5 ou 10 minutes ; ne jamais ouvrir le couvercle pendant un cycle (on enchaîne deux cycles au besoin) ; aliments de 3,5 cm d'épaisseur au plus ; papier sulfurisé percé sous les légumes, rien sous les viandes ; jamais de lait pour cuire l'avoine (cuire à l'eau, ajouter le lait chaud après) ; œufs à la casserole, pas dans le Bamboo ; pas de vinaigre ni de papier absorbant dans la cuve ; SLOW COOK de 2 à 8 heures seulement.";
const askCookerTopic = txt => /rice cooker|bamboo|cuiseur|vapeur|steam|slow cook|cuve|panier|programme|minuteur|couvercle/i.test(txt);
function askStepText(o, i){ return renderQ((o.steps || [])[i] || "", o.ing || []).replace(/\s*\[\[[^\]]*\]\]/g, "").replace(/\s*\[[^\]]*\]\s*$/, "").trim(); }
function askPrompt(o, title, stepTxt, q){
  const ings = (o.ing || []).filter(x => String(x.n).trim()).map(x => (hasQ(x) ? qtyStr(x) + " " : "") + x.n).join(", ");
  const cooker = askCookerTopic(stepTxt + " " + q);
  return "Tu aides Cat à cuisiner, pendant qu'elle est devant ses fourneaux.\nRecette : " + (o.n || o.name) + ".\nIngrédients : " + ings + ".\nÉtape en cours « " + title + " » : " + stepTxt +
    "\nQuestion de Cat : " + q + "\n\n" + ASK_RULES +
    (cooker ? "\n\n" + ASK_BAMBOO + "\nVoici le mode d'emploi complet de l'appareil :\n" + BAMBOO_DOC + "\nNe jamais inventer un réglage, un temps ou une quantité d'eau absents de ces règles ; en cas de doute, dis-le." : "") +
    "\n\nRéponds en français simple, sans jargon, en 4 à 7 phrases courtes et concrètes (gestes, temps, repères de couleur ou de texture). Pas de liste à puces, pas de titre, pas de mise en forme. Reste cohérent avec la recette.";
}
const ASK_EXCL = /\b(ail|oignons?|échalotes?|poivre|piment|vinaigre|citron|moutarde|pois chiches?|lentilles?|haricots secs|falafels?|friture|frire|tomates? crues?)\b/gi;
const ASK_NEG = /(sans|pas|jamais|éviter|evite|exclu|exclus|interdit|interdits|ni|aucun|aucune)[^.]{0,40}$/i;
function askGuard(txt){
  let bad = false; String(txt).replace(ASK_EXCL, (m, g, off) => { if (!ASK_NEG.test(String(txt).slice(Math.max(0, off - 45), off))) bad = true; return m; });
  return bad ? "\n\nAttention : cette réponse cite un aliment que ton protocole exclut. Ne l'ajoute pas à ton plat." : "";
}
const askStepBtn = () => `<button class="ask-btn" data-act="askStep" hidden>${ic("sparkle")} Question</button><div class="ask" hidden></div>`;
let ASK_SAMPLE = null;
const askSample = () => ASK_SAMPLE || (ASK_SAMPLE = (async () => { try { return window.claude && window.claude.use ? (await window.claude.use("sample")) || null : null; } catch (e) { return null; } })());
const askShow = on => document.querySelectorAll(".ask-btn").forEach(b => { b.hidden = !on; if (!on) { const bx = b.nextElementSibling; if (bx) bx.hidden = true; } });
(function(){
  const _oc = openCook;
  openCook = function(kind, ref){ _oc(kind, ref); askSample().then(s => { if (s) askShow(true); }); };
})();
A.askStep = (ds, el) => {
  const box = el.closest(".cs-body").querySelector(".ask");
  if (!box.hidden) { box.hidden = true; return; }
  box.hidden = false;
  if (!box.dataset.ready) {
    box.dataset.ready = "1";
    box.innerHTML = `<div class="ask-chips">${ASK_PRESETS.map(q => `<button class="chip" data-act="askGo" data-q="${esc(q)}">${esc(q)}</button>`).join("")}</div>
      <div class="ask-row"><input class="ask-in" type="text" placeholder="Ta question, ex. comment pocher un œuf ?" aria-label="Ta question à Claude"><button class="btn primary" data-act="askGo">Demander</button></div>
      <div class="ask-out" aria-live="polite"></div>`;
  }
  box.querySelector(".ask-in").focus();
};
document.addEventListener("keydown", e => { if (e.key === "Enter" && e.target.classList && e.target.classList.contains("ask-in")) { e.preventDefault(); const b = e.target.closest(".ask").querySelector('.btn[data-act="askGo"]'); if (b) b.click(); } });
A.askGo = async (ds, el) => {
  const box = el.closest(".ask"), li = el.closest(".cstep"), inp = box.querySelector(".ask-in"), out = box.querySelector(".ask-out");
  const q = (ds.q || inp.value || "").trim(); if (!q) { inp.focus(); return; }
  inp.value = q; box._a = "";
  const o = edObj(); if (!o) return;
  const i = +li.querySelector(".chk").dataset.i, title = li.querySelector("h4").textContent, stepTxt = askStepText(o, i);
  const sample = await askSample(); if (!sample) { askShow(false); return; }
  out.textContent = "Claude réfléchit…"; box.querySelectorAll(".ask-save").forEach(b => b.remove());
  try {
    const r = await sample(askPrompt(o, title, stepTxt, q), { cache: false, modelTier: "quick", onText: ({ text }) => { out.textContent = text; } });
    const txt = ((r && r.text) || out.textContent || "").trim(); if (!txt || txt === "Claude réfléchit…") throw 0;
    box._a = txt + askGuard(txt); out.textContent = box._a;
    const b = document.createElement("button"); b.className = "btn ask-save"; b.dataset.act = "askSave"; b.textContent = "Ajouter à l'astuce du chef"; out.after(b);
  } catch (e) {
    out.textContent = e && e.code === "not_granted" ? "Autorisation refusée : tu peux réessayer et accepter la demande."
      : e && e.code === "rate_limited" ? "Trop de questions d'affilée, patiente quelques secondes." : "Claude n'a pas pu répondre pour l'instant. Réessaie dans un instant.";
  }
};
A.askSave = (ds, el) => {
  const box = el.closest(".ask"), li = el.closest(".cstep"), o = edObj(); if (!o || !box._a) return;
  const persist = MODAL.kind !== "temp"; if (persist) snapshot();
  o.tip = (o.tip ? o.tip + "\n\n" : "") + "À propos de « " + li.querySelector("h4").textContent + " » : " + box._a.replace(/\s+/g, " ").trim();
  if (persist) save(); refreshCook(null); toast(persist ? "Ajouté à l'astuce du chef" : "Ajouté à l'astuce (idée non enregistrée)", persist);
};
