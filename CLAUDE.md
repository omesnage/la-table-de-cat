# La Table de Cat : consignes de travail (sessions cloud uniquement)

Application web d'une seule page (`index.html`) : planning de repas, recettes, courses, suivi du poids et réintroduction alimentaire, pour Cat (protocole reflux LPR + SII). Les données de Cat restent dans son navigateur (clé `la-table-cat-v1`) : ne jamais la changer sans migration.

## Règle d'or
`index.html` est **généré**. Ne jamais le modifier à la main : on modifie `build/`, puis on lance

    python3 build/build_cat.py
    node build/tests/validate.js

et on commite `build/` **et** `index.html` ensemble. Le script échoue si une ancre n'existe plus dans `build/source-originale.html` (ne pas modifier ce fichier).

## Où modifier quoi (`build/`)
- Recettes déjeuner/dîner, classées par protéine : `cat_rec_l1.js` (poulet, œufs), `cat_rec_l2.js` (tofu ferme, soyeux, fumé), `cat_rec_l3.js` (protéines texturées, sardines). Outils communs (cycles vapeur `c1`/`c2`, `intro`…) : `cat_rec_lib.js`.
- Petits-déjeuners : `cat_rec_b.js` (8 sucrés, 8 salés, environ 250 kcal).
- Durées : `cat_time.js` (barème par geste, voir « Durées » plus bas).
- Aliments, calories, niveaux du protocole : `cat_db.js` (`n:1` base sûre, `"t"` toléré en petite quantité, `"r"` non listé, `"p2"`/`"p3"` paliers de réintroduction).
- Générateur de plats (protéines, féculents, légumes, sauces, formats) : `cat_gen.js` ; règles de variation (80 % végétarien, herbes, variété du planning) et migrations : `cat_v6.js`.
- Protocole, portions, réintroduction, réglages : `cat_proto.js` ; panneau d'explications : `cat_panel.js`.
- Style : `cat_css.css`, `cat_css6.css`, `part_css.css`.
- Moteur commun (mode cuisine, ingrédients, courses…) : `part_app.js`.

## Protocole de Cat (ne jamais enfreindre)
- **Exclus (niveau 3)** : légumineuses (pois chiches, lentilles, haricots secs, falafels), ail, oignon, échalote, poivre, piment, vinaigre, citron, moutarde, tomate crue, fibres crues, fritures, cuissons à haute température (ni rissolage ni dorure forte).
- Légumes **toujours cuits, pelés, épépinés**. Plats tièdes. Huile d'olive ou de sésame grillé à cru, ajoutée au service.
- Seuils FODMAP : haricots verts 75 g, courgette épluchée 60 g maximum par repas ; petites portions pour patate douce, fenouil, céleri-rave.
- Portions (poids cuits) : déjeuner et dîner = féculent 120-150 g, protéine solide 80-100 g (tofu ferme, soyeux ou fumé, blanc ou cuisse de poulet, œuf compté 50 g, ou protéine texturée comptée 3 fois son poids sec), légumes 150-200 g, 1 c. à café d'huile. Petit-déjeuner léger d'environ 250 kcal. **Durée d'un petit-déjeuner : 10 minutes au maximum**, étapes comprises, sans nouvelle préparation de la veille (seuls riz et quinoa cuits la veille) ; contrôlé par `validate.js`.
- Plus d'isolat de pois. Protéine de pois texturée (348 kcal/100 g, niveau 1) ou de soja texturée (niveau « toléré en petite quantité ») : **30 g secs par repas, dans quelques plats seulement** (8 recettes au plus), réhydratés 10 minutes dans du bouillon chaud, temps compté dans la durée. Tofu fumé et cuisse de poulet : tolérés (cuisse désossée, sans peau). **4 recettes de poulet** dans le catalogue.
- Planning : jamais le même ingrédient principal (protéine ou féculent) sur deux repas qui se suivent, donc ni midi et soir ; **3 repas aux œufs par semaine au plus**, jamais à la suite (`EGG_MAX`, `planIssues` dans `cat_v6.js`) ; contrôlé par `validate.js` sur des centaines de semaines générées.
- Pas plus d'une préparation d'œuf par plat (pas d'œuf dur plus œuf au plat, etc.).
- Environ 80 % de repas végétariens (œufs, tofu, protéines végétales).
- Matériel : rice cooker Yum Asia Bamboo (modes STEAM et SLOW COOK, papier sulfurisé percé sous les légumes, rien sous les viandes).
- **Référence pour toute cuisson au rice cooker : `docs/bamboo.md`** (mode d'emploi réel de l'appareil). Lire ce fichier avant d'écrire ou de corriger une recette, et ne jamais inventer un réglage, un temps ou une quantité d'eau qui n'y figure pas. Si le fichier est incomplet, le signaler à Olivier avant de continuer.
- `node build/tests/validate.js` contrôle les recettes (portions, aliments interdits, quantités, ingrédients inconnus, durées), le planning généré et la migration : il doit afficher « 0 en erreur ». Il lit `index.html` : lancer le build avant.

## Écrire une recette
- Étapes sous la forme « Titre — consigne [[gestes]] » : on n'écrit jamais une durée à la main, on liste les gestes de l'étape (voir « Durées »). `{{ingrédient}}` insère la quantité réelle de la liste (le nom doit correspondre à celui de l'ingrédient).
- Être **loquace et précis** : ustensiles dès la première étape (« Avant de commencer — Ustensiles : … »), temps de cuisson minute par minute quand plusieurs éléments cuisent ensemble, repères (couleur, texture), dressage détaillé. Pas de phrases télégraphiques.
- Français simple, sans jargon.

## Durées (`build/cat_time.js`)
- Chaque étape finit par ses gestes : `[[sortir; eplucher carotte; couper carotte]]`. La durée vient du barème `GESTES` (minutes pour 100 g de l'ingrédient de la liste, par pièce ou fixe), donc une même opération a le même temps dans toutes les recettes. Compter tout : sortir les ingrédients, peser, laver, éplucher, couper, égoutter le tofu, délayer, écraser, ciseler, dresser…
- Les gestes sont réduits de 30 % (`REDUC`, demande d'Olivier). `cuisson N` (temps de l'appareil ou de la casserole, d'après `docs/bamboo.md`) et `attente N` (réhydratation, eau qui chauffe, tiédir) ne sont jamais réduits. `bamboo` = remplir la cuve et programmer, `ouvrir` = second cycle.
- `//` en tête de liste : étape faite pendant une cuisson, affichée « en parallèle » et non ajoutée au total.
- Le total `t` est la somme exacte des étapes, `tc` la somme des cuissons ; `validate.js` vérifie aussi qu'un verbe de la consigne (éplucher, couper, râper, laver, écraser…) a son geste dans la liste.

## Git et sessions cloud
- Le dépôt GitHub, branche `main`, est la référence. Les sessions cloud ne modifient jamais `main` directement : branche `claude/…` puis pull request.
- **Fusion automatique en fin de session** : la pull request est fusionnée dès que les changements sont terminés et corrects. Avant de fusionner :
  1. `python3 build/build_cat.py` lancé et `index.html` commité avec `build/` ;
  2. `node build/tests/validate.js` sans erreur ;
  3. aucun mot de passe, jeton ou donnée personnelle commité ;
  4. aucun conflit.
- **Pas de fusion automatique** si un point échoue, si la session s'est arrêtée en cours de travail, ou si une règle du protocole risque d'être contournée : la pull request reste ouverte et la session l'explique à Olivier.
- Après la fusion : une phrase sur ce qui a changé et le lien de la pull request.

## Mise en ligne
GitHub Pages sert `index.html` depuis `main` (racine). Un changement fusionné est en ligne en une à deux minutes.

## Règles du Bamboo appliquées aux recettes (d'après `docs/bamboo.md`)
- Vapeur (STEAM) : eau chaude jusqu'au repère « 2-3 » de la cuve (au moins 2 tasses de 180 ml, soit 360 ml) ; durée réglable jusqu'à 1 h par paliers de 5 ou 10 minutes ; **ne jamais ouvrir pendant un cycle** : on enchaîne deux cycles (éléments longs, puis éléments courts) ; aliments de 3,5 cm d'épaisseur au maximum.
- Guide du fabricant : carotte 20 min, brocoli 15, épinards 15, potimarron 20, pomme de terre 40 (450 g), poulet 30, poisson 25.
- SLOW COOK : de 2 à 8 heures seulement. PORRIDGE : de 1 à 3 heures. Riz blanc : programme WHITE, 35 minutes. Quinoa : QUICK COOK, 1 volume de quinoa pour 1 volume d'eau.
- **Jamais de lait pour cuire l'avoine** (débordement) : cuire à l'eau, ajouter le lait chaud après. Pas de vinaigre dans la cuve, pas de papier absorbant ni ciré dans la cuve.
- Œufs : à la casserole (mollet 6 min 30, dur 10 min), pas dans le Bamboo.
- Les recettes de `cat_rec_l*.js` et `cat_rec_b.js` suivent ces règles ; en cas de doute, relire `docs/bamboo.md`.

## Migrations de données
Les recettes fournies sont recopiées dans les données de chaque utilisateur. Toute modification des recettes fournies exige une migration dans `build/cat_v6.js` (fonction `migrateN`) et une montée de version dans `build/build_cat.py` (`return { v: N`) et `build/cat_proto.js` (`migrateAll`). Version actuelle : 10 (recettes plus savoureuses : petits-déjeuners, poulet, œufs, tofu ; migration douce qui ne refait que les repas issus de recettes disparues).
