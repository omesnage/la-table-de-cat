# Écrire une recette de La Table de Cat : guide de style

Demande d'Olivier (8 octobre 2026) : « Les recettes ne sont pas assez expliquées, on a l'impression que tu oublies des choses (par exemple la croûte de tofu, jamais expliquée). » Ce guide fixe le niveau de détail attendu.

## Principe
Cat cuisine, sans cuisinier à côté. Elle doit pouvoir réussir le plat du premier coup en lisant seulement la fiche. Rien ne doit être sous-entendu : ni un mot technique, ni un geste, ni un repère de cuisson, ni un ustensile.

## Chaque étape (« Titre — consigne [[gestes]] »)
1. **Dit quoi faire, dans quel ordre, avec quoi** (ustensile, taille des morceaux en cm ou mm, feu doux/moyen, couvert ou non).
2. **Donne un repère pour savoir que c'est réussi** : couleur, texture, bruit, odeur (« les cubes sont translucides et s'écrasent à la fourchette », « aucune trace rosée au cœur du poulet »).
3. **Explique le pourquoi quand il aide** (« on éponge le tofu : sinon il rend de l'eau et la sauce devient fade »).
4. **Prévient des erreurs** habituelles et dit comment rattraper (« si la sauce a trop réduit, ajouter une cuillère d'eau »).
5. Garde des phrases complètes, simples. Pas de style télégraphique, pas de jargon non expliqué. Une étape peut compter 3 à 6 phrases.

## Première étape : « Avant de commencer — Ustensiles : … »
Liste de tous les ustensiles et récipients (casserole avec couvercle, planche, couteau, économe, passoire, bol, fourchette, papier absorbant, papier sulfurisé…). Puis, pour tout plat dont le nom ou la technique n'est pas évident : **« Le plat en deux mots : … »** (1 à 3 phrases : ce que c'est, d'où ça vient si utile, ce qu'on obtient).

## Mots à expliquer dans la recette où ils apparaissent (à leur première apparition)
Tout mot qu'une personne qui cuisine peu pourrait ne pas connaître, entre autres :
- techniques : croûte (de sésame…), enrober, paner (interdit au protocole : fritures), napper, laquer, braiser, étuver, mijoter, frémir / frémissement, pocher, blanchir, réhydrater, effilocher, émincer, ciseler, julienne, écaler, mollet, dur, brouillade, papillote, sulfurisé, tiédir, délayer, lier, réduire, voile, onctueux ;
- produits : tofu ferme / soyeux / fumé, okara, kombu, dashi, miso, nori, wakame, daikon, pak choi, blettes, pâtisson, potimarron, butternut, courge spaghetti, panais, fenouil, céleri-rave, soba, vermicelles de patate douce, quinoa, millet, sarrasin, protéine de pois ou de soja texturée, sirop d'érable, huile de sésame grillé ;
- plats : donburi, chawanmushi, agedashi, tsukune, tortilla, blanquette, hainanais, minestrone, hachis, velouté, flan, soboro, banchan, namul, jorim, jjim, muchim…
Façon d'expliquer : une courte incise au premier emploi (« le tofu est enrobé de graines de sésame : on appuie chaque face dans les graines pour qu'elles collent et forment une fine croûte parfumée ») ou une phrase « Le plat en deux mots ». Jamais de renvoi à une autre recette.

## Rien d'oublié
- Tous les ingrédients de la liste sont cités dans les étapes et inversement (contrôlé par `validate.js`).
- Tous les gestes sont dans la liste `[[ ]]` : sortir, peser, laver, éplucher, couper, égoutter, presser le tofu, écraser, ciseler, dresser… (contrôlé).
- Les cuissons suivent `docs/bamboo.md` (jamais de réglage inventé).
- Dressage décrit : où va quoi, tiède, huile ajoutée à la fin.

## Rappel du protocole (ne jamais enfreindre)
Voir CLAUDE.md : exclus (légumineuses, ail, oignon, échalote, poivre, piment, vinaigre, citron, moutarde, tomate crue, fibres crues, fritures, rissolage/dorure), légumes toujours cuits, pelés, épépinés, plats tièdes, huile ajoutée à cru, portions, 1 c. à café d'huile pour les déjeuners/dîners. On peut écrire une interdiction dans une phrase négative (« sans jamais colorer ») ; éviter pourtant les mots frites, dorer, rissoler, griller, four, vinaigre, citron, ail, oignon, cru dans les consignes.
