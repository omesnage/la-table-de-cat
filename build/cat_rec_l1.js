/* ============ DÉJEUNERS ET DÎNERS : POULET (4 recettes) & ŒUFS ============
   Féculent 120-150 g cuits, protéine solide 80-100 g (œuf compté 50 g), légumes cuits 150-200 g, 1 c. à café d'huile à cru.
   Le riz et le quinoa « cuits » sont préparés à l'avance au Bamboo (WHITE 35 min, QUICK COOK) : ce temps n'est pas compté. */
const LUNCH = [];
LUNCH.push(
/* ---------- poulet ---------- */
RC({id:"c-poulet-thym-rubans", n:"Blanc de poulet vapeur au thym, riz basmati, rubans de courgette & de carotte fondants", cat:"Poulet", st:"Vapeur Bamboo", base:"Riz", d:1,
 ing:[["blanc de poulet",90,"g"],["riz cuit",140,"g"],["carotte",110,"g"],["courgette épluchée",55,"g"],["huile d'olive",1,"c. à café"],["thym","",HERBS],["sel","","1 pincée"]],
 steps:[
  intro("une planche et un couteau, un économe, un bol pour le riz, une assiette creuse tiède"),
  "Mise en place — Ôter la peau et le gras du blanc de poulet ({{blanc de poulet}}) et le couper en deux dans l'épaisseur (moins de 2,5 cm). Éplucher la carotte ({{carotte}}) puis la tailler en longs rubans à l'économe. Éplucher entièrement la courgette ({{courgette épluchée}}), sans laisser de vert, et la tailler en rubans en s'arrêtant au cœur graineux. [[sortir; couper blanc de poulet; eplucher carotte; rubans carotte; eplucher courgette; rubans courgette]]",
  c1(30, "le poulet directement sur la grille (rien sous la viande) avec deux branches de thym ({{thym}}) et, sur le papier percé, les rubans de carotte", "Le guide du fabricant donne 30 minutes pour le poulet : sa chair est blanche à cœur, son jus clair."),
  c2(10, "les rubans de courgette et le riz cuit ({{riz cuit}}) mouillé d'une cuillère d'eau " + bol, "Les rubans deviennent translucides et souples."),
  "Dressage — Riz en dôme dans l'assiette creuse tiède, poulet tranché en biais contre le riz, rubans de carotte et de courgette enroulés en nids légers. Filet d'huile d'olive crue ({{huile d'olive}}), feuilles de thym et une pincée de sel. [[trancher; dresser x4]]"],
 tip:"Taillés en rubans, les légumes cuisent vite et s'enroulent joliment : une assiette légère et élégante."}),

RC({id:"c-cuisse-navet-bouillon", n:"Cuisse de poulet mijotée au bouillon, navet, pommes de terre & persil", cat:"Poulet", st:"Cocon & purées", base:"Pommes de terre", d:1,
 ing:[["cuisse de poulet désossée",90,"g"],["pommes de terre",140,"g"],["navet",100,"g"],["carotte",60,"g"],["bouillon",400,"ml"],["huile d'olive",1,"c. à café"],["thym","",HERBS],["persil","",HERBS],["sel","","1 pincée"]],
 steps:[
  introPoele("une planche et un couteau, un économe, une casserole avec couvercle, une louche, une assiette creuse tiède"),
  "Mise en place — Retirer la peau et le gras du haut de cuisse désossé ({{cuisse de poulet désossée}}) et le couper en 4 morceaux. Éplucher les pommes de terre ({{pommes de terre}}) et le navet ({{navet}}) et les couper en cubes de 2 cm, éplucher la carotte ({{carotte}}) et la couper en tronçons de 2 cm. [[sortir; couper cuisse de poulet; eplucher pommes de terre; couper pommes de terre; eplucher navet; couper navet; eplucher carotte; couper carotte]]",
  "Le mijotage — Mettre le poulet, les légumes, le thym ({{thym}}) et le bouillon ({{bouillon}}) dans la casserole, porter à frémissement, couvrir et laisser mijoter 25 minutes à tout petit feu, sans bouillir : le poulet est tendre, les légumes s'écrasent à la fourchette. [[casserole; cuisson 25]]",
  "Dressage — À la louche, dans l'assiette creuse tiède : légumes, poulet, deux louches de bouillon. Huile d'olive crue ({{huile d'olive}}), persil ciselé ({{persil}}) et une pincée de sel. [[ciseler; dresser x3]]"],
 tip:"Un mijotage à tout petit feu garde la cuisse fondante ; le bouillon devient la sauce."}),

RC({id:"c-poulet-quinoa-butternut", n:"Poulet effiloché, quinoa tiède, butternut & épinards, crème de soja au thym", cat:"Poulet", st:"Fraîcheur tiède", base:"Quinoa", d:1,
 ing:[["blanc de poulet",90,"g"],["quinoa cuit",140,"g"],["butternut",110,"g"],["épinards",60,"g"],["crème de soja",1,"c. à soupe"],["huile d'olive",1,"c. à café"],["thym","",HERBS],["sel","","1 pincée"]],
 steps:[
  intro("une planche et un couteau, un économe, une cuillère, deux fourchettes, un petit bol, un bol pour le quinoa, une assiette creuse"),
  "Mise en place — Ôter la peau du poulet ({{blanc de poulet}}) et le couper en deux dans l'épaisseur. Éplucher la butternut ({{butternut}}), retirer les graines et la couper en cubes de 2 cm. Laver les épinards ({{épinards}}). [[sortir; couper blanc de poulet; eplucher butternut; couper butternut; laver epinards]]",
  c1(30, "le poulet directement sur la grille et la butternut sur le papier", "Le poulet est blanc à cœur, la butternut s'écrase."),
  c2(15, "les épinards et le quinoa ({{quinoa cuit}}) mouillé d'une cuillère d'eau " + bol, "Les épinards s'affaissent (15 minutes, guide du fabricant)."),
  "L'effilochage et la crème — Effilocher le poulet à deux fourchettes en fines fibres. Mélanger la crème de soja ({{crème de soja}}) avec le thym effeuillé ({{thym}}), l'huile d'olive crue ({{huile d'olive}}), une cuillère d'eau tiède et le sel. [[effilocher; delayer]]",
  "Dressage — Laisser tiédir 3 minutes. Quinoa dans l'assiette creuse, butternut et épinards pressés autour, poulet effiloché au centre, crème au thym en filet. [[attente 3; presser epinards; dresser x4]]"],
 tip:"Servi tiède, le poulet effiloché se mêle au quinoa comme une salade réconfortante."}),

RC({id:"c-soba-bouillon-poulet", n:"Soba en bouillon, blanc de poulet poché, pak choï & daikon", cat:"Poulet", st:"Cocon & purées", base:"Sarrasin", d:1,
 ing:[["blanc de poulet",90,"g"],["soba cuites",140,"g"],["pak choï",75,"g"],["daikon",90,"g"],["bouillon",400,"ml"],["sauce soja",1,"c. à café"],["huile de sésame grillé",1,"c. à café"],["coriandre","",HERBS]],
 steps:[
  introPoele("une planche et un couteau, un économe, deux casseroles dont une avec couvercle, une passoire, une louche, un grand bol tiède"),
  "Mise en place — Éplucher le daikon ({{daikon}}) et le couper en demi-rondelles de 5 mm. Rincer le pak choï ({{pak choï}}), couper les tiges en tronçons et garder les feuilles. Ôter la peau du poulet ({{blanc de poulet}}). Vérifier que les soba sont 100 % sarrasin. [[sortir; eplucher daikon; couper daikon; laver pak choi; couper pak choi; couper blanc de poulet]]",
  "Le bouillon — Porter le bouillon ({{bouillon}}) à frémissement avec le daikon, y plonger le poulet, couvrir et cuire 15 minutes à tout petit frémissement. Ajouter le pak choï et la sauce soja ({{sauce soja}}) pour 5 dernières minutes. [[casserole; cuisson 20]]",
  "Les soba — Pendant ce temps, cuire les soba ({{soba cuites}}) 6 minutes dans la seconde casserole d'eau frémissante, les rincer à l'eau tiède et les égoutter. [[// casserole; cuisson 6; rincer; egoutter]]",
  "Dressage — Trancher le poulet. Soba au fond du grand bol tiède, poulet et légumes dessus, bouillon versé à la louche, quelques gouttes d'huile de sésame grillé ({{huile de sésame grillé}}) et la coriandre ciselée ({{coriandre}}). [[trancher; ciseler; dresser x3]]"],
 tip:"Le poulet poché dans le bouillon le parfume : rien d'autre n'est nécessaire."}),

/* ---------- œufs ---------- */
RC({id:"e-oeufs-mollets-patate-douce", n:"Œufs mollets, purée de patate douce et pomme de terre, brocoli fondant", cat:"Œufs", st:"Cocon & purées", base:"Pommes de terre", d:1,
 ing:[["œufs",2,"pièce"],["pommes de terre",130,"g"],["patate douce",70,"g"],["brocoli",100,"g"],["huile d'olive",1,"c. à café"],["ciboulette","",HERBS],["sel","","1 pincée"]],
 steps:[
  intro("un économe, une planche et un couteau, une petite casserole, une écumoire, un presse-purée, une assiette creuse tiède"),
  "Mise en place — Sortir les œufs ({{œufs}}) du frigo. Éplucher les pommes de terre ({{pommes de terre}}) et la patate douce ({{patate douce}}) et les couper en cubes de 2 cm. Détailler les têtes de brocoli ({{brocoli}}) en petits bouquets. [[sortir; eplucher pommes de terre; couper pommes de terre; eplucher patate douce; couper patate douce; couper brocoli]]",
  c1(25, "les pommes de terre et la patate douce", "Les cubes s'écrasent sans résistance."),
  "Les œufs mollets — Pendant le premier cycle : " + OEUF_MOLLET + " [[// casserole; cuisson 7; ecaler oeufs]]",
  c2(15, "le brocoli", "Il est très tendre (15 minutes, guide du fabricant)."),
  "La purée — Écraser les pommes de terre et la patate douce avec deux cuillères d'eau de la cuve et le sel : une purée orangée et lisse. [[ecraser]]",
  "Dressage — Purée en nid, bouquets de brocoli autour, œufs coupés en deux au centre, huile d'olive crue ({{huile d'olive}}) et ciboulette ciselée ({{ciboulette}}). [[couper oeufs; ciseler; dresser x3]]"],
 tip:"Le jaune coulant se mêle à la purée orangée : une sauce toute prête."}),

RC({id:"e-omelette-vapeur-epinards", n:"Omelette vapeur aux épinards en ramequin, riz tiède & potimarron", cat:"Œufs", st:"Vapeur Bamboo", base:"Riz", d:1,
 ing:[["œufs",2,"pièce"],["riz cuit",140,"g"],["épinards",60,"g"],["potimarron",110,"g"],["huile d'olive",1,"c. à café"],["sel","","1 pincée"]],
 steps:[
  intro("une planche et un couteau, un économe, une cuillère, des ciseaux, un fouet, un ramequin de 12 cm garni de papier sulfurisé, un bol pour le riz, une assiette tiède"),
  "Mise en place — Couper le potimarron ({{potimarron}}) en quartiers, retirer les graines, l'éplucher et le couper en cubes de 2 cm. Laver les épinards ({{épinards}}) et les ciseler. Battre les œufs ({{œufs}}) avec 2 cuillères d'eau et le sel, ajouter les épinards et verser dans le ramequin. [[sortir; eplucher potimarron; couper potimarron; laver epinards; ciseler; battre]]",
  c1(20, "le potimarron", "Il s'écrase à la fourchette (20 minutes, guide du fabricant)."),
  c2(15, "le ramequin et le riz ({{riz cuit}}) mouillé d'une cuillère d'eau " + bol, "L'omelette est gonflée et ferme au toucher, sans coloration."),
  "Dressage — Démouler l'omelette, la couper en deux, riz et potimarron à côté, filet d'huile d'olive crue ({{huile d'olive}}). [[couper; dresser x3]]"],
 tip:"Cuite à la vapeur en ramequin, l'omelette reste moelleuse, sans matière grasse."}),

RC({id:"e-oeufs-poches-bouillon", n:"Œufs pochés dans un bouillon clair, vermicelles de patate douce, carotte & pak choï", cat:"Œufs", st:"Cocon & purées", base:"Vermicelles", d:2,
 ing:[["œufs",2,"pièce"],["vermicelles de patate douce cuits",140,"g"],["carotte",100,"g"],["pak choï",70,"g"],["bouillon",400,"ml"],["huile de sésame grillé",1,"c. à café"],["ciboulette","",HERBS]],
 steps:[
  introPoele("une planche et un couteau, un économe, deux casseroles, une passoire, des ciseaux, une petite tasse, une louche, un grand bol tiède"),
  "Mise en place — Éplucher la carotte ({{carotte}}) et la couper en fines rondelles de 3 mm. Rincer le pak choï ({{pak choï}}), couper les tiges en tronçons. Casser chaque œuf ({{œufs}}) dans une petite tasse. [[sortir; eplucher carotte; couper carotte; laver pak choi; couper pak choi]]",
  "Le bouillon — Cuire la carotte et les tiges de pak choï dans le bouillon ({{bouillon}}) frémissant, 12 minutes : la carotte s'écrase entre deux doigts. [[casserole; cuisson 12]]",
  "Les vermicelles — Pendant ce temps, cuire les vermicelles 8 minutes dans la seconde casserole d'eau frémissante, les égoutter et les couper aux ciseaux. [[// casserole; cuisson 8; egoutter; couper vermicelles]]",
  "Les œufs pochés — Baisser le feu pour que le bouillon frémisse à peine, y glisser les œufs un à un et les feuilles de pak choï, pocher 3 minutes : le blanc est pris, le jaune coulant. [[cuisson 3]]",
  "Dressage — Vermicelles ({{vermicelles de patate douce cuits}}) au fond du bol, légumes et bouillon à la louche, œufs pochés posés dessus à l'écumoire, quelques gouttes d'huile de sésame grillé ({{huile de sésame grillé}}) et la ciboulette ciselée ({{ciboulette}}). [[ciseler; dresser x3]]"],
 tip:"Un bouillon qui frémit à peine poche les œufs sans les déchirer."}),

RC({id:"e-salade-quinoa-oeufs-fenouil", n:"Salade tiède de quinoa, œufs durs, haricots verts & fenouil, sauce à l'aneth", cat:"Œufs", st:"Fraîcheur tiède", base:"Quinoa", d:1,
 ing:[["œufs",2,"pièce"],["quinoa cuit",140,"g"],["haricots verts",75,"g"],["fenouil",60,"g"],["carotte",40,"g"],["yaourt de soja nature",30,"g"],["huile d'olive",1,"c. à café"],["aneth","",HERBS],["sel","","1 pincée"]],
 steps:[
  intro("une balance, une planche et un couteau, un économe, une petite casserole, un petit bol, un bol pour le quinoa, une assiette creuse"),
  "Mise en place — Sortir les œufs ({{œufs}}) du frigo. Peser 75 g de haricots verts ({{haricots verts}}) au maximum, les équeuter et les couper en tronçons. Retirer les parties dures du fenouil ({{fenouil}}) et l'émincer finement. Éplucher la carotte ({{carotte}}) et la couper en fines rondelles. [[sortir; peser haricots verts; couper haricots verts; emincer fenouil; eplucher carotte; couper carotte]]",
  c1(25, "les haricots verts, le fenouil et la carotte", "Les haricots doivent être mous."),
  "Les œufs durs — Pendant le cycle, cuire les œufs 10 minutes dans l'eau frémissante, les refroidir, les écaler et les couper en quartiers. [[// casserole; cuisson 10; ecaler oeufs; couper oeufs]]",
  c2(5, "le quinoa ({{quinoa cuit}}) mouillé d'une cuillère d'eau " + bol, "Il redevient moelleux."),
  "La sauce et le dressage — Mélanger le yaourt de soja ({{yaourt de soja nature}}), l'huile d'olive crue ({{huile d'olive}}), l'aneth ciselé ({{aneth}}) et le sel. Quinoa en couronne, légumes au centre, quartiers d'œufs autour, sauce en filet. [[ciseler; delayer; dresser x3]]"],
 tip:"La sauce au yaourt de soja et à l'aneth remplace la vinaigrette, sans acidité."}),

RC({id:"e-oeufs-brouilles-panais", n:"Œufs brouillés crémeux, pommes de terre vapeur, panais & courgette fondants", cat:"Œufs", st:"Cocon & purées", base:"Pommes de terre", d:1,
 ing:[["œufs",2,"pièce"],["pommes de terre",140,"g"],["panais",100,"g"],["courgette épluchée",55,"g"],["crème de soja",1,"c. à soupe"],["huile d'olive",1,"c. à café"],["ciboulette","",HERBS],["sel","","1 pincée"]],
 steps:[
  intro("un économe, une planche et un couteau, un bol, une fourchette, une petite casserole antiadhésive, une cuillère en bois, une assiette creuse tiède"),
  "Mise en place — Éplucher les pommes de terre ({{pommes de terre}}) et le panais ({{panais}}) et les couper en cubes de 2 cm. Éplucher entièrement la courgette ({{courgette épluchée}}), retirer le cœur et la couper en dés. [[sortir; eplucher pommes de terre; couper pommes de terre; eplucher panais; couper panais; eplucher courgette; couper courgette]]",
  c1(25, "les pommes de terre et le panais", "Ils s'écrasent à la fourchette."),
  c2(10, "la courgette", "Elle devient translucide. Pendant ce cycle, battre les œufs ({{œufs}}) avec la crème de soja ({{crème de soja}}) et le sel.", "battre"),
  "Le brouillé — Verser les œufs dans la casserole sèche à feu très doux et remuer sans cesse 4 minutes : de petits grumeaux crémeux, sans aucune coloration. [[casserole; cuisson 4]]",
  "Dressage — Pommes de terre, panais et courgette dans l'assiette creuse tiède, brouillé au centre, huile d'olive crue ({{huile d'olive}}) et ciboulette ciselée ({{ciboulette}}). [[ciseler; dresser x3]]"],
 tip:"La crème de soja rend le brouillé crémeux à feu très doux."}),

RC({id:"e-flan-potimarron-riz", n:"Flan vapeur au potimarron et au bouillon, riz tiède & épinards", cat:"Œufs", st:"Vapeur Bamboo", base:"Riz", d:2,
 ing:[["œufs",2,"pièce"],["riz cuit",140,"g"],["potimarron",100,"g"],["épinards",60,"g"],["bouillon",100,"ml"],["huile de sésame grillé",1,"c. à café"],["sel","","1 pincée"]],
 steps:[
  intro("une planche et un couteau, un économe, une cuillère, une fourchette, un fouet, une passoire fine, deux ramequins couverts de papier sulfurisé, un bol pour le riz"),
  "Mise en place — Couper le potimarron ({{potimarron}}) en quartiers, retirer les graines, l'éplucher et le couper en cubes de 2 cm. Laver les épinards ({{épinards}}). [[sortir; eplucher potimarron; couper potimarron; laver epinards]]",
  c1(20, "le potimarron", "Il s'écrase à la fourchette."),
  "Le flan — Écraser la moitié du potimarron cuit, le battre avec les œufs ({{œufs}}), le bouillon tiède ({{bouillon}}) et le sel, passer au tamis et répartir dans les ramequins couverts de papier sulfurisé. [[ecraser; battre]]",
  c2(15, "les ramequins, les épinards et le riz ({{riz cuit}}) mouillé d'une cuillère d'eau " + bol, "Le flan tremble au centre comme une crème prise."),
  "Dressage — Ramequins sur l'assiette, riz, épinards pressés et cubes de potimarron à côté, quelques gouttes d'huile de sésame grillé ({{huile de sésame grillé}}). [[presser epinards; dresser x4]]"],
 tip:"Le potimarron écrasé dans le flan lui donne une couleur d'automne et un goût de châtaigne."})
);
