# La Table de Cat : consignes de travail (sessions cloud uniquement)

Application web d'une seule page (`index.html`) : planning de repas, recettes, courses, suivi du poids et réintroduction alimentaire, pour Cat (protocole reflux LPR + SII). Les données de Cat restent dans son navigateur (clé `la-table-cat-v1`) : ne jamais la changer sans migration.

## Règle d'or
`index.html` est **généré**. Ne jamais le modifier à la main : on modifie `build/`, puis on lance

    python3 build/build_cat.py
    node build/tests/validate.js

et on commite `build/` **et** `index.html` ensemble. Le script échoue si une ancre n'existe plus dans `build/source-originale.html` (ne pas modifier ce fichier).

## Où modifier quoi (`build/`)
- Recettes déjeuner/dîner, classées par protéine : `cat_rec_l1.js` (poulet, œufs), `cat_rec_l2.js` (tofu ferme, soyeux, fumé), `cat_rec_l3.js` (protéines texturées, sardines). Outils communs (cycles vapeur `c1`/`c2`, `intro`…) : `cat_rec_lib.js`.
- Petits-déjeuners : `cat_rec_b.js` (12 sucrés, 12 salés, environ 250 kcal) ; **70 % sucrés, 30 % salés** dans le planning de départ et dans les propositions (`pdSalty` dans `cat_v6.js`).
- Collations : `cat_rec_c.js` (8 sucrées, 6 salées, 6 minutes au plus). Quatrième créneau `c` de chaque jour (`SLOTS`), entre déjeuner et dîner : jamais générées, jamais adaptées (`protoAdaptMeal` rend la main), non comptées dans les règles de variété (`isSnack`, `planIssues`).
- Banchan coréens : `cat_banchan.js` (17 à protéine : tofu, œufs, poulet, sardines ; 23 de légumes aux apprêts variés), rubrique à part dans le Carnet (onglet « Banchan »). `composeKorean` assemble un repas coréen (riz 140 g + 1 banchan à protéine + 2 de légumes, 40 minutes au plus) proposé aussi dans « Créer un déjeuner / dîner » ; son rayon (`krCat`) est Œufs, Poulet, Sardines ou Tofu selon la protéine. Les banchan de poulet et de sardines s'ajoutent aux « 4 recettes de poulet » du catalogue des repas, qui ne les compte pas. Dans les étapes d'un banchan, les assaisonnements sont écrits en toutes lettres (pas de `{{ }}`) pour ne pas fusionner de quantités.
- Remplacer un ingrédient par un équivalent à calories constantes : `cat_subs.js` (table `SUBT`, boutons « Équivalent » de la fiche de cuisine et de l'éditeur). Seuls les remplacements qui ne changent ni la cuisson ni les gestes sont permis (même famille, même genre grammatical : le texte des étapes est réécrit avec le bon article) ; la quantité garde les calories dans les bornes de portion du protocole. `validate.js` essaie tous les remplacements possibles sur tout le carnet.
- Banchan en lot (« Préparer pour 3 repas », onglet Banchan) : `cat_lot.js`. Répartit N repas (1 protéine + 2 légumes chacun), additionne quantités, temps et courses, donne la conservation au frais (`lotKeep` : 2 jours œufs et tofu soyeux, 4 jours braisés, 3 jours le reste) et place les plus fragiles en premier.
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

## Équilibres du catalogue (version 16, demande d'Olivier du 9 octobre 2026)
- **Tofu** : 60 % au plus des déjeuners et dîners (recettes du carnet et repas proposés), tofu ferme et tofu soyeux en proportions voisines (`cat_gen.js` a une protéine « soyeux » ; `validate.js` contrôle).
- **Laits végétaux variés** : amande, riz, soja et avoine (pas seulement l'avoine). Jamais de lait pour cuire l'avoine. `crème de soja` est utilisée dans au moins 8 recettes.
- **Œufs** : mollets (casserole 6 min 30), durs (10 min), brouillés, omelette roulée, flan à la vapeur ; toujours 3 repas aux œufs par semaine au plus.
- **Tarte sans gluten** (`n-e-tarte-sans-gluten-courgette`) : pâte de pommes de terre, farine de riz et fécule de maïs, cuite directement dans la cuve en mode CAKE (voir `docs/bamboo.md`), sans papier ni moule dans la cuve. Cuisson à tester une première fois.
- **Jambon végétal « La Vie »** : au moins 5 % des recettes, surtout petits-déjeuners et collations, **25 g au plus par recette** (garniture, déjà salé : pas de sel en plus). Fait de protéines de pois et de soja réhydratées : à classer « toléré en petite quantité » ; ne compte pas dans la limite des 8 recettes de protéines texturées, mais **à faire valider par Cat / son médecin** (arôme naturel de composition inconnue). Lire l'étiquette avant usage.

## Écrire une recette
- **Lire `docs/style-recettes.md` avant d'écrire** : chaque étape dit quoi faire, avec quoi, quel repère de réussite, pourquoi, quelles erreurs éviter ; tout mot technique ou produit peu courant (croûte, napper, frémir, kombu, okara…) est expliqué à sa première apparition dans la recette ; « Le plat en deux mots » pour les plats à nom étranger. `validate.js` contrôle une liste de mots techniques (`JARGON`) : chacun doit avoir une explication proche.
- La fiche de cuisine affiche le texte complet de chaque étape (plus de bloc replié).
- Étapes sous la forme « Titre — consigne [[gestes]] » : on n'écrit jamais une durée à la main, on liste les gestes de l'étape (voir « Durées »). `{{ingrédient}}` insère la quantité réelle de la liste (le nom doit correspondre à celui de l'ingrédient).
- Être **loquace et précis** : ustensiles dès la première étape (« Avant de commencer — Ustensiles : … »), temps de cuisson minute par minute quand plusieurs éléments cuisent ensemble, repères (couleur, texture), dressage détaillé. Pas de phrases télégraphiques.
- Français simple, sans jargon.

## Durées (`build/cat_time.js`)
- Chaque étape finit par ses gestes : `[[sortir; eplucher carotte; couper carotte]]`. La durée vient du barème `GESTES` (minutes pour 100 g de l'ingrédient de la liste, par pièce ou fixe), donc une même opération a le même temps dans toutes les recettes. Compter tout : sortir les ingrédients, peser, laver, éplucher, couper, égoutter le tofu, délayer, écraser, ciseler, dresser…
- Les gestes sont réduits de 30 % (`REDUC`, demande d'Olivier). `cuisson N` (temps de l'appareil ou de la casserole, d'après `docs/bamboo.md`) et `attente N` (réhydratation, eau qui chauffe, tiédir) ne sont jamais réduits. `bamboo` = remplir la cuve et programmer, `ouvrir` = second cycle.
- `//` en tête de liste : étape faite pendant une cuisson, affichée « en parallèle » et non ajoutée au total.
- Le total `t` est la somme exacte des étapes, `tc` la somme des cuissons ; `validate.js` vérifie aussi qu'un verbe de la consigne (éplucher, couper, râper, laver, écraser…) a son geste dans la liste.

## Ajouts de la version 14
- `cat_resume.js` : reprise de la recette ouverte (`S.ui.open`, effacée à la fermeture), semaine et onglet du carnet conservés, ligne « Préparation / Cuisson » sur les cartes.
- `cat_swap.js` : bouton « Remplacer » en un tap sur la carte d'un repas (annulable), qui respecte le protocole et les règles de variété.
- `cat_sync.js` : sauvegarde automatique sur le compte (capacité `db`), seulement dans l'artefact Claude ; jamais de donnée locale écrasée par une version plus ancienne ; message d'import au premier lancement.
- `cat_ask.js` : bouton « Question » sous chaque étape de la fiche (4 questions rapides + champ libre, réponse sur place, « Ajouter à l'astuce du chef » annulable), capacité `sample` ; texte envoyé avec le protocole de Cat et, pour le rice cooker, les règles et `docs/bamboo.md` (intégré au build) ; boutons masqués si Claude est injoignable. Contient aussi l'écriture des quantités en français (`renderQ`, `qPhrase`, `qtyChip` : « 3 œufs »).
- Publication : artefact Claude de Cat, voir `docs/artefact.md` (toujours republier sur le même lien).

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
Les recettes fournies sont recopiées dans les données de chaque utilisateur. Toute modification des recettes fournies exige une migration dans `build/cat_v6.js` (fonction `migrateN`) et une montée de version dans `build/build_cat.py` (`return { v: N`) et `build/cat_proto.js` (`migrateAll`). Version actuelle : 16 (migration 16 : équilibre tofu ferme / soyeux, 10 recettes aux œufs de plus dont une tarte sans gluten, laits d'amande, de riz, de soja et d'avoine, crème de soja, jambon végétal La Vie ; `validate.js` contrôle ces équilibres). Version précédente : 15 (migration 15 : toutes les recettes fournies réécrites en détail et 40 banchan variés ; `migrate15` appelle `refreshRecipes` sur tous les identifiants des recettes fournies). Version 14 (migration 14 : durées vapeur arrondies au palier de 5 min, Japchae à une seule cuillère d'huile ; elle utilise `refreshRecipes(ids, regen)` de `cat_v6.js`, le mécanisme de mise à jour automatique : pour réviser des recettes fournies, corriger la recette, ajouter une liste d'identifiants et une `migrateN` qui appelle `refreshRecipes`. Les recettes faites main de Cat (`own`) et les repas faits main ne sont jamais touchés ; un repas dont la liste d'ingrédients correspond est mis à jour sur place, sinon il est reconstruit). Version 13 (migration 13 : cohérence liste d'ingrédients / étapes, plats générés reconstruits et six recettes corrigées ; `validate.js` contrôle désormais qu'un aliment cité dans une étape figure dans la liste et inversement, sur les recettes, des plats générés et des repas coréens composés). Version 12 (migration 12 : les 19 recettes tofu / protéines végétales / sardines réécrites en version simple, un seul cycle vapeur ou une casserole, protéines texturées réhydratées en parallèle ; 10 banchan en plus). Version 11 (collations, banchan, petits-déjeuners 70 % sucrés ; migration 11 : ajoute une collation chaque jour et ramène les petits-déjeuners salés du carnet à 30 % par semaine, sans toucher aux repas faits main). La version 10 avait rendu les recettes plus savoureuses.
