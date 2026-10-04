/* ---------- PROTOCOLE DE CAT (rappel affiché dans le planning) ---------- */
function protocolPanel(){
  const li = a => a.map(x => `<li>${x}</li>`).join("");
  return `<div class="proto proto2">
    <details><summary>Routine du matin</summary>
      <ul>${li([
        "Un grand verre d'eau tiède à jeun : il déclenche le réflexe gastro-colique.",
        "Petit-déjeuner, avec un verre de lait végétal fait maison (lait de riz Ollait ou Yum Asia).",
        "En option : 1 c. à café de psyllium blond mélangée dans le lait, à boire immédiatement, sans laisser gélifier.",
        "Obligatoire après le psyllium : un grand verre d'eau plate, pour éviter la formation d'un bouchon."])}</ul>
    </details>
    <details><summary>Les trois niveaux d'aliments</summary>
      <h4>Niveau 1 · base sûre, tous les jours</h4>
      <ul>${li([
        "<span class='ok'>Féculents cuits :</span> riz basmati ou jasmin, pomme de terre, potimarron, farine ou pain de sarrasin pur, quinoa, avoine certifiée sans gluten, soba 100 % sarrasin.",
        "<span class='ok'>Légumes cuits, pelés, épépinés :</span> tous, de préférence de saison (courgette, carotte, potimarron, jeunes pousses d'épinards, haricots verts, aubergine pelée, brocoli en têtes, butternut, pâtisson, panais…). Les fermentescibles (chou-fleur, poireau, petits pois, betterave, céleri, fenouil, patate douce) en petite portion. Cru à éviter au maximum.",
        "<span class='ok'>Protéines :</span> tofu ferme, blanc de poulet, œuf (mollet, poché, dur), isolat de protéine de pois, okara d'amande.",
        "<span class='ok'>Lipides :</span> huile d'olive à cru uniquement, ajoutée au moment de servir ; huile de sésame grillé."])}</ul>
      <h4>Niveau 2 · autorisés sous conditions</h4>
      <ul>${li([
        "<strong>Avocat :</strong> 1/8 maximum par repas (20 à 30 g).",
        "<strong>Sardines :</strong> occasionnelles, fraîches cuites à la vapeur ou en conserve au naturel bien égouttées, de préférence le midi, jamais en phase de sensibilité aiguë (histamine)."])}</ul>
      <h4>Niveau 3 · exclus</h4>
      <ul>${li([
        "<span class='no'>Légumineuses :</span> pois chiches, lentilles, haricots secs, falafels.",
        "<span class='no'>Condiments irritants :</span> ail, oignon, échalote, poivre, piment, vinaigre, citron, moutarde.",
        "<span class='no'>Fibres crues, fritures, cuissons à haute température</span> (ni rissolage ni dorure forte)."])}</ul>
    </details>
    <details><summary>Portions par repas (poids cuits)</summary>
      <table class="tbl"><thead><tr><th></th><th>Petit-déj.</th><th>Déjeuner</th><th>Dîner</th></tr></thead><tbody>
        <tr><th>Féculents</th><td>60 à 100 g (ou 25 à 35 g de flocons crus), petit-déjeuner léger d'environ 250 kcal</td><td>120 à 150 g</td><td>120 à 150 g</td></tr>
        <tr><th>Tofu ou poulet</th><td>40 à 60 g (ou yaourt, skyr ou crème de soja)</td><td>80 à 100 g</td><td>80 à 100 g</td></tr>
        <tr><th>Équivalents</th><td>1 œuf ou 15 g d'isolat</td><td>20 à 25 g d'isolat</td><td>1 œuf ou 20 à 25 g d'isolat</td></tr>
        <tr><th>Légumes doux</th><td>facultatif</td><td>150 à 200 g</td><td>150 à 200 g</td></tr>
        <tr><th>Huile à cru</th><td>1 c. à café</td><td>1 c. à café</td><td>1 c. à café</td></tr></tbody></table>
      <p class="muted">Objectif : stabilité du poids et maintien musculaire (environ 1,1 à 1,2 g de protéines par kg et par jour), sans régime. Les protéines se répartissent sur les trois repas et ne descendent jamais sous 200 g de tofu ou de poulet par jour.</p>
    </details>
    <details><summary>Si le poids baisse</summary>
      <ul>${li([
        "Ne jamais augmenter les légumes.",
        "Levier 1 : augmenter les féculents cuits de 20 à 30 g par repas.",
        "Levier 2 : ajouter 0,5 c. à café d'huile d'olive à cru par repas.",
        "Les deux boutons correspondants sont dans l'onglet Poids."])}</ul>
    </details>
    <details><summary>Le Bamboo, mode d'emploi</summary>
      <ul>${li([
        "<strong>Mode STEAM :</strong> légumes vapeur, poissons et viandes avec le panier inox.",
        "<strong>Mode SLOW COOK :</strong> plats mijotés, viandes fondantes (poulet effiloché : 45 à 50 min).",
        "Sous les légumes : un papier sulfurisé (barrière anti-gras, anti-adhésif).",
        "Sous les viandes : rien, directement sur l'inox, pour que le gras s'égoutte au fond de la cuve.",
        "Ollait : laits végétaux maison (riz, avoine, amande-macadamia) et récupération de l'okara.",
        "Okara : 2 à 3 jours au frigo dans une boîte en verre, toujours réhydraté (il est astringent)."])}</ul>
    </details>
  </div>`;
}
