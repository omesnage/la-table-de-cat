/* ====== Outils communs aux recettes fournies ======
   RC : une recette ; t (durée totale) et tc (cuisson) sont calculés par cat_time.js à partir des gestes de chaque étape.
   Règles du Bamboo reprises dans les étapes (docs/bamboo.md) :
   - STEAM : eau chaude jusqu'au repère « 2-3 » de la cuve (au moins 2 tasses de 180 ml, soit 360 ml), durée réglable jusqu'à 1 h par paliers de 5 ou 10 minutes ;
     le décompte ne démarre qu'une fois l'eau chaude ; ne jamais ouvrir pendant un cycle ; aliments de 3,5 cm d'épaisseur au maximum.
   - Guide vapeur : carotte 20 min, brocoli 15, épinards 15, potimarron 20, pomme de terre 40 (450 g), patate douce 35 (300 g), poulet 30, poisson 25.
   - SLOW COOK : de 2 à 8 heures. PORRIDGE : de 1 à 3 heures. Riz blanc (WHITE) : 35 min ; quinoa : QUICK COOK, 1 volume d'eau pour 1 de quinoa.
   - Jamais de lait pour cuire l'avoine ; jamais de vinaigre dans la cuve ; pas de papier absorbant ni ciré dans la cuve. */
const RC = o => ({ tc: 0, t: 0, ...o, ing: o.ing.map(([n, q, u]) => ({ n, q, u })) });
const intro = extra => "Avant de commencer — Ustensiles : le rice cooker Yum Asia Bamboo (cuve à revêtement céramique et panier vapeur fournis), du papier sulfurisé percé de quelques trous pour le fond du panier, " + extra + ". Poser le Bamboo sur un plan plat, avec de la place autour pour la sortie de vapeur.";
const introPoele = extra => "Avant de commencer — Ustensiles : " + extra + ".";
const c1 = (n, items, tail, g) => "Cycle vapeur 1 — Remplir la cuve d'eau, de préférence chaude, jusqu'au repère « 2-3 » (au moins 2 tasses de 180 ml, soit 360 ml). Poser le panier garni de papier sulfurisé percé et y répartir " + items + " en une seule couche, sans dépasser 3,5 cm d'épaisseur. Fermer, appuyer sur MENU jusqu'à STEAM, régler " + n + " minutes avec HOURS/MINUTES puis maintenir START 2 secondes. Le décompte ne démarre qu'une fois l'eau chaude ; ne pas ouvrir pendant le cycle. " + (tail || "") + " [[bamboo; cuisson " + n + (g ? "; " + g : "") + "]]";
const c2 = (n, items, tail, g) => "Cycle vapeur 2 — Au bip, ouvrir le couvercle en éloignant le visage de la vapeur, vérifier qu'il reste de l'eau au moins au niveau du repère 2 (en rajouter de chaude si besoin) et ajouter " + items + ". Refermer, relancer STEAM " + n + " minutes. " + (tail || "") + " [[ouvrir; cuisson " + n + (g ? "; " + g : "") + "]]";
const bol = "dans un bol posé sur le panier";
const OEUF_MOLLET = "Faire frémir de l'eau dans une petite casserole, y glisser délicatement les œufs sortis du frigo 10 minutes avant, les cuire 6 minutes 30 pour un blanc pris et un jaune coulant, puis les passer 2 minutes sous l'eau froide et les écaler sous un filet d'eau.";
