/* ====== Étapes détaillées, fidèles au mode d'emploi du Bamboo (docs/bamboo.md) ======
   Règles de l'appareil reprises ici :
   - STEAM : eau jusqu'au repère « 2-3 » de la cuve (au moins 2 tasses de 180 ml, soit 360 ml), de préférence chaude ; durée réglable jusqu'à 1 h par paliers de 5 ou 10 minutes ;
     le décompte ne démarre qu'une fois l'eau chaude ; ne pas ouvrir le couvercle pendant le cycle ; aliments de 3,5 cm d'épaisseur au maximum.
   - Durées du guide vapeur : carotte 20 min, brocoli 15, épinards 15, potimarron 20, pomme de terre 40 (450 g), poulet 30, poisson 25.
   - SLOW COOK : de 2 à 8 heures. PORRIDGE : de 1 à 3 heures. Riz blanc (WHITE) : 35 min, quinoa : QUICK COOK avec 1 volume d'eau pour 1 de quinoa.
   - Jamais de lait pour cuire l'avoine (débordement) ; jamais de vinaigre dans la cuve ; pas de papier absorbant ou ciré dans la cuve. */
const OV = {};
const intro = extra => "Avant de commencer — Ustensiles : le rice cooker Yum Asia Bamboo (cuve à revêtement céramique et panier vapeur fournis), du papier sulfurisé percé de quelques trous pour le fond du panier, " + extra + ". Poser le Bamboo sur un plan plat, avec de la place autour pour la sortie de vapeur.";
const introPoele = extra => "Avant de commencer — Ustensiles : " + extra + ".";
const c1 = (n, items, tail) => "Cycle vapeur 1 — Remplir la cuve d'eau, de préférence chaude, jusqu'au repère « 2-3 » (au moins 2 tasses de 180 ml, soit 360 ml). Poser le panier garni de papier sulfurisé percé et y répartir " + items + " en une seule couche, sans dépasser 3,5 cm d'épaisseur. Fermer, appuyer sur MENU jusqu'à STEAM, régler " + n + " minutes avec HOURS/MINUTES puis maintenir START 2 secondes. Le décompte ne démarre qu'une fois l'eau chaude ; ne pas ouvrir pendant le cycle. " + (tail || "") + " [cuisson " + n + " min]";
const c2 = (n, items, tail) => "Cycle vapeur 2 — Au bip, ouvrir le couvercle en éloignant le visage de la vapeur, vérifier qu'il reste de l'eau au moins au niveau du repère 2 (en rajouter de chaude si besoin) et ajouter " + items + ". Refermer, relancer STEAM " + n + " minutes. " + (tail || "") + " [cuisson " + n + " min]";
const bol = "dans un bol posé sur le panier";
const OEUF_MOLLET = "Faire frémir de l'eau dans une petite casserole, y glisser délicatement les œufs sortis du frigo 10 minutes avant, les cuire 6 minutes 30 pour un blanc pris et un jaune coulant, puis les passer 2 minutes sous l'eau froide et les écaler sous un filet d'eau.";
