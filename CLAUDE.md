# La Table de Cat : consignes de travail (sessions cloud uniquement)

Application web d'une seule page (`index.html`) : planning de repas, recettes, courses, suivi du poids et réintroduction alimentaire, pour Cat (protocole reflux LPR + SII). Les données de Cat restent dans son navigateur (clé `la-table-cat-v1`) : ne jamais la changer sans migration.

## Règle d'or
`index.html` est **généré**. Ne jamais le modifier à la main : on modifie `build/`, puis on lance

    python3 build/build_cat.py
    node build/tests/validate.js

et on commite `build/` **et** `index.html` ensemble. Le script échoue si une ancre n'existe plus dans `build/source-originale.html` (ne pas modifier ce fichier).

## Où modifier quoi (`build/`)
- Recettes déjeuner/dîner : `cat_rec_1.js`, `cat_rec_2.js`, `cat_rec_v6.js` ; étapes détaillées : `cat_ov_1.js`, `cat_ov_2.js`, `cat_ov_3.js` (elles remplacent les étapes par identifiant).
- Petits-déjeuners : `cat_rec_b.js` (8 sucrés, 8 salés, environ 250 kcal).
- Aliments, calories, niveaux du protocole : `cat_db.js` (`n:1` base sûre, `"t"` toléré en petite quantité, `"r"` non listé, `"p2"`/`"p3"` paliers de réintroduction).
- Générateur de plats (protéines, féculents, légumes, sauces, formats) : `cat_gen.js` ; règles de variation (80 % végétarien, herbes) : `cat_v6.js`.
- Protocole, portions, réintroduction, réglages : `cat_proto.js` ; panneau d'explications : `cat_panel.js`.
- Style : `cat_css.css`, `cat_css6.css`, `part_css.css`.
- Moteur commun (mode cuisine, ingrédients, courses…) : `part_app.js`.

## Protocole de Cat (ne jamais enfreindre)
- **Exclus (niveau 3)** : légumineuses (pois chiches, lentilles, haricots secs, falafels), ail, oignon, échalote, poivre, piment, vinaigre, citron, moutarde, tomate crue, fibres crues, fritures, cuissons à haute température (ni rissolage ni dorure forte).
- Légumes **toujours cuits, pelés, épépinés**. Plats tièdes. Huile d'olive ou de sésame grillé à cru, ajoutée au service.
- Seuils FODMAP : haricots verts 75 g, courgette épluchée 60 g maximum par repas ; petites portions pour patate douce, fenouil, céleri-rave.
- Portions (poids cuits) : déjeuner et dîner = féculent 120-150 g, protéine solide 80-100 g (tofu ou poulet, ou œuf compté 50 g), isolat de pois 20-25 g, légumes 150-200 g, 1 c. à café d'huile. Petit-déjeuner léger d'environ 250 kcal.
- Pas plus d'une préparation d'œuf par plat (pas d'œuf dur plus œuf au plat, etc.).
- Environ 80 % de repas végétariens (œufs, tofu, protéines végétales).
- Matériel : rice cooker Yum Asia Bamboo (modes STEAM et SLOW COOK, papier sulfurisé percé sous les légumes, rien sous les viandes).
- **Référence pour toute cuisson au rice cooker : `docs/bamboo.md`** (mode d'emploi réel de l'appareil). Lire ce fichier avant d'écrire ou de corriger une recette, et ne jamais inventer un réglage, un temps ou une quantité d'eau qui n'y figure pas. Si le fichier est incomplet, le signaler à Olivier avant de continuer.
- `node build/tests/validate.js` contrôle les recettes (portions, aliments interdits, quantités, ingrédients inconnus) : il doit afficher « 0 en erreur ».

## Écrire une recette
- Étapes sous la forme « Titre — consigne [durée] » ; `[cuisson 8 min]` pour une cuisson. `{{ingrédient}}` insère la quantité réelle de la liste (le nom doit correspondre à celui de l'ingrédient).
- Être **loquace et précis** : ustensiles dès la première étape (« Avant de commencer — Ustensiles : … »), temps de cuisson minute par minute quand plusieurs éléments cuisent ensemble, repères (couleur, texture), dressage détaillé. Pas de phrases télégraphiques.
- Français simple, sans jargon.

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
- Les recettes de `cat_ov_v4*.js` suivent ces règles ; en cas de doute, relire `docs/bamboo.md`.

## Migrations de données
Les recettes fournies sont recopiées dans les données de chaque utilisateur. Toute modification des recettes fournies exige une migration dans `build/cat_v6.js` (fonction `migrateN`) et une montée de version dans `build/build_cat.py` (`return { v: N`) et `build/cat_proto.js` (`migrateAll`). Version actuelle : 6.
