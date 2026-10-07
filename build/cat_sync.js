
/* ---------- sauvegarde sur le compte (version 14) ----------
   Seulement quand la page est ouverte comme artefact Claude (window.claude) : sinon rien ne change.
   - Chaque enregistrement local est recopié sur le compte (capacité « db », découpé en morceaux), après 1,5 s de calme.
   - Au premier lancement (navigateur vide) : les données du compte sont restaurées ; sinon un message explique comment importer l'ancienne sauvegarde.
   - Jamais de donnée locale écrasée par une version plus ancienne du compte (comparaison de S.savedAt) ;
     avant de remplacer des données locales par une version plus récente du compte, une copie reste dans le navigateur.
   - La sauvegarde par fichier (Réglages) reste disponible. */
const SYNC = { booting: true, started: false, edited: false, col: null, timer: null, busy: false, again: false, n: 0 };
const SYNC_FRESH = (() => { try { return !localStorage.getItem(LS_KEY); } catch (e) { return true; } })();
const SYNC_CHUNK = 70000;
function syncMark(txt, bad){
  let el = document.getElementById("syncMark");
  if (!el) { el = document.createElement("span"); el.id = "syncMark"; el.className = "sync-mark"; (document.querySelector(".top-in") || document.body).appendChild(el); }
  el.textContent = txt; el.dataset.bad = bad ? "1" : "";
}
function syncCut(str, from){ let to = Math.min(str.length, from + SYNC_CHUNK); if (to < str.length) { const c = str.charCodeAt(to - 1); if (c >= 0xD800 && c <= 0xDBFF) to--; } return to; }
async function syncPush(){
  if (!SYNC.col) return;
  if (SYNC.busy) { SYNC.again = true; return; }
  SYNC.busy = true; syncMark("Enregistrement…");
  try {
    const str = JSON.stringify(S), at = S.savedAt || Date.now(); let from = 0, n = 0;
    while (from < str.length || n === 0) { const to = syncCut(str, from); await SYNC.col.doc("table-" + n).set({ s: str.slice(from, to) }); from = to; n++; if (to >= str.length) break; }
    await SYNC.col.doc("table-meta").set({ savedAt: at, n, v: S.v });
    for (let i = n; i < SYNC.n; i++) { try { await SYNC.col.doc("table-" + i).delete(); } catch (e) {} }
    SYNC.n = n; syncMark("Enregistré sur ton compte");
  } catch (e) { syncMark("Sauvegarde du compte impossible", true); }
  SYNC.busy = false; if (SYNC.again) { SYNC.again = false; syncPush(); }
}
const _syncSave0 = save;
save = function(){
  if (SYNC.booting) { if (SYNC.started) SYNC.edited = true; _syncSave0(); return; }      /* pendant la vérification du compte : on n'écrit rien dessus */
  S.savedAt = Date.now(); _syncSave0();
  if (SYNC.col) { clearTimeout(SYNC.timer); SYNC.timer = setTimeout(syncPush, 1500); }
};
const _syncImport = importText;
importText = function(txt){ _syncImport(txt); if (MODAL && MODAL.kind === "welcome") closeModal(); };
function syncWelcome(){
  MODAL = { kind: "welcome" };
  openModal(`<p class="eyebrow">Bienvenue</p><h2 class="display-s">Retrouver tes données</h2>
    <p class="muted">Si tu utilisais déjà La Table de Cat sur l'ancien lien, tes repas, tes recettes et tes pesées peuvent être repris ici.</p>
    <ol class="welcome-steps"><li>Ouvre l'ancien lien, puis touche <b>Réglages</b> et <b>Exporter</b> (ou <b>Copier le texte</b>).</li>
    <li>Reviens ici, touche <b>Réglages</b> puis <b>Importer</b>, ou utilise les boutons ci-dessous.</li></ol>
    <p class="muted small">Ensuite, tout est gardé automatiquement sur ton compte : tu retrouveras ton planning à chaque ouverture.</p>
    <div class="sheet-foot"><button class="btn ghost" data-act="close">Commencer à zéro</button><button class="btn" data-act="importPaste">Coller le texte</button>
    <label class="btn primary file push">Choisir le fichier<input type="file" accept="application/json,.json" data-bind="importFile" hidden></label></div>`);
}
async function syncInit(){
  if (!window.claude || !window.claude.use) { SYNC.booting = false; return; }
  let welcome = false;
  try {
    const db = await claude.use("db"), user = await claude.use("user"); if (!db || !user) throw 0;
    const id = await user.id(); if (!id) throw 0;
    SYNC.col = db.collection("data/users/" + id);
    const meta = await SYNC.col.doc("table-meta").get(), local = S.savedAt || 0;
    if (meta.exists) {
      const m = meta.data(); SYNC.n = m.n || 0;
      const mayRestore = m.savedAt > local && (local > 0 || SYNC_FRESH);
      if (mayRestore) {
        const parts = [];
        for (let i = 0; i < m.n; i++) { const d = await SYNC.col.doc("table-" + i).get(); if (!d.exists) throw 0; parts.push(d.data().s); }
        const d2 = JSON.parse(parts.join(""));
        if (d2 && d2.weeks && d2.recipes) {
          try { localStorage.setItem(LS_KEY + "-avant-restauration", JSON.stringify(S)); } catch (e) {}
          S = d2; S.savedAt = m.savedAt; ensureDefaults(); migrateAll(); applyFont(); _syncSave0(); render(); resumeOpen(); toast("Tes données ont été retrouvées sur ton compte");
        }
      } else if (m.savedAt < local) { SYNC.booting = false; await syncPush(); }
    } else if (SYNC_FRESH && !SYNC.edited && !(S.ui && S.ui.welcomed)) welcome = true;
    else if (local > 0 || SYNC.edited) { SYNC.booting = false; S.savedAt = Date.now(); _syncSave0(); await syncPush(); }
    SYNC.booting = false; syncMark("Enregistré sur ton compte");
  } catch (e) { SYNC.booting = false; syncMark("Sauvegarde du compte indisponible", true); }
  if (welcome) { S.ui.welcomed = true; _syncSave0(); syncWelcome(); }
}
setTimeout(() => { SYNC.started = true; }, 0);
setTimeout(syncInit, 60);
