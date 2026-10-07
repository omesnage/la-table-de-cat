
/* ---------- remplacer un repas en un geste (version 14) ----------
   Un seul tap sur la carte du repas : un autre repas est choisi, annulation proposée.
   Le remplaçant : même créneau, protocole respecté (protoCheck), pas le même ingrédient principal que le repas d'avant ni d'après,
   œufs : EGG_MAX par semaine au plus, jamais un nom déjà présent dans la semaine, et un repas végétarien reste végétarien (80 % végétarien). */
function swapCandidate(t, tries){
  const w = S.weeks[t.w], old = getMeal(t); if (!old) return null;
  const seq = []; let at = -1;
  S.weeks.forEach((wk, wi) => wk.days.forEach((d, di) => MAIN_SLOTS().forEach(sl => {
    const m = d.meals[sl.k]; if (wi === t.w && di === t.d && sl.k === t.s) at = seq.length; seq.push(m && !isSnack(m) ? m : null);
  })));
  const snack = t.s === "c", prev = snack ? null : (seq.slice(0, at).reverse().find(Boolean) || null), next = snack ? null : (seq.slice(at + 1).find(Boolean) || null);
  const inWeek = w.days.flatMap(d => SLOTS.map(sl => d.meals[sl.k])).filter(Boolean);
  const eggs = inWeek.filter(m => m !== old && !isSnack(m) && isEgg(m)).length, avoid = new Set(inWeek.map(m => m.name));
  const oldRec = old.recipeId && recipeById(old.recipeId), f = { slot: t.s };
  if (t.s === "b") f.pd = (oldRec && oldRec.go) || (pdSalty(t.d) ? "Salé" : "Sucré");
  const main = t.s === "l" || t.s === "d", oldVeg = isVegCat(old.cat);
  for (let i = 0; i < (tries || 120); i++) {
    const m = oneProposal(f, avoid) || oneProposal({ src: "gen", slot: t.s }, avoid); if (!m || avoid.has(m.name)) continue;
    if (protoCheck(m).bad.length) continue;
    if (!snack) { if (clash(prev, m) || clash(m, next) || (isEgg(m) && eggs >= EGG_MAX)) continue; }
    if (main && oldVeg && !isVegCat(m.cat)) continue;
    return m;
  }
  return null;
}
A.swapMeal = ds => {
  const t = T(ds), old = getMeal(t); if (!old) return;
  const nm = swapCandidate(t); if (!nm) return toast("Pas d'autre idée qui respecte tes règles pour ce repas");
  snapshot(); nm.id = old.id; setMeal(t, nm);
  if (S.autoVeg !== false && t.s !== "b" && t.s !== "c") autoSide(nm);
  if (S.autoAdapt !== false) protoAdaptMeal(nm, t.s, kT(t.s));
  save(); render(); toast("Remplacé par « " + nm.name + " »", true);
};
