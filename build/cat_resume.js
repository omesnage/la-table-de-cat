
/* ---------- reprise de la recette ouverte (version 14) ----------
   À l'ouverture d'une fiche de cuisine (repas du planning ou recette du carnet), S.ui.open = { kind, ref } est mémorisé.
   Il est effacé à la fermeture de la fiche, et au démarrage si la recette n'existe plus. La semaine, la page et l'onglet du carnet sont aussi conservés. */
(function(){
  const _openCook = openCook, _closeModal = closeModal;
  openCook = function(kind, ref){
    _openCook(kind, ref);
    if ((kind === "meal" || kind === "recipe") && MODAL && MODAL.kind === kind) {
      S.ui = S.ui || {}; S.ui.open = { kind, ref: kind === "meal" ? { w: ref.w, d: ref.d, s: ref.s } : ref }; save();
    }
  };
  closeModal = function(){ if (S.ui && S.ui.open) delete S.ui.open; _closeModal(); };
  const _bookTab = A.bookTab; A.bookTab = ds => { _bookTab(ds); S.ui.bookTab = BOOK.tab; save(); };
  const _goShop = A.goShop; A.goShop = ds => { _goShop(ds); save(); };
  window.resumeOpen = function(){
    try {
      if (S.ui && S.ui.bookTab && S.ui.bookTab !== BOOK.tab) { BOOK.tab = S.ui.bookTab; if (S.ui.view === "book") render(); }
      const o = S.ui && S.ui.open; if (!o) return;
      let ok = false;
      if (o.kind === "meal" && o.ref && S.weeks[o.ref.w] && S.weeks[o.ref.w].days[o.ref.d]) { const m = getMeal(o.ref); ok = !!(m && m.steps && m.steps.length); }
      else if (o.kind === "recipe") ok = !!recipeById(o.ref);
      if (!ok) { delete S.ui.open; save(); return; }
      openCook(o.kind, o.ref);
    } catch (e) { if (S.ui) delete S.ui.open; }
  };
})();
