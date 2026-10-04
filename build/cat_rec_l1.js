/* ============ DÉJEUNERS ET DÎNERS : POULET (4 recettes) & ŒUFS ============
   Féculent 120-150 g cuits, protéine solide 80-100 g (œuf compté 50 g), légumes cuits 150-200 g, 1 c. à café d'huile à cru.
   Le riz et le quinoa « cuits » sont préparés à l'avance au Bamboo (WHITE 35 min, QUICK COOK) : ce temps n'est pas compté. */
const LUNCH = [];
LUNCH.push(
RC({id:"p-poulet-effiloche-potimarron", n:"Cuisse de poulet effilochée, purée soyeuse de potimarron & carottes fondantes", cat:"Poulet", st:"Vapeur Bamboo", base:"Pommes de terre", d:1,
 ing:[["cuisse de poulet désossée",90,"g"],["pommes de terre",140,"g"],["potimarron",80,"g"],["carotte",90,"g"],["bouillon",4,"c. à soupe"],["huile d'olive",1,"c. à café"],["thym","",HERBS],["persil","",HERBS],["sel","","1 pincée"]],
 steps:[
  intro("une planche et un couteau, un économe, une cuillère, un presse-purée, deux fourchettes, une assiette creuse tiède"),
  "Mise en place — Retirer la peau et le gras visible du haut de cuisse désossé ({{cuisse de poulet désossée}}) et l'ouvrir en deux pour qu'aucun morceau ne dépasse 2,5 cm d'épaisseur. Éplucher les pommes de terre ({{pommes de terre}}) et les couper en cubes de 2 cm. Couper le potimarron ({{potimarron}}) en quartiers, retirer les graines à la cuillère, l'éplucher et le couper en cubes de 2 cm. Éplucher la carotte ({{carotte}}) et la tailler en bâtonnets de 1 cm. [[sortir; couper cuisse de poulet; eplucher pommes de terre; couper pommes de terre; eplucher potimarron; couper potimarron; eplucher carotte; couper carotte]]",
  c1(30, "le poulet directement sur la grille du panier (rien sous la viande), puis, sur le papier percé, les pommes de terre, le potimarron, la carotte et une branche de thym ({{thym}})", "Repères : le poulet est cuit quand sa chair est blanche à cœur et que son jus est clair ; les légumes s'écrasent à la fourchette. (Le guide du fabricant donne 30 minutes pour le poulet ; les petits cubes de pomme de terre cuisent dans le même temps.)"),
  "L'effilochage — Poser le poulet sur la planche et le tirer à deux fourchettes en fines fibres humides, en écartant les parties dures. Garder le jus du fond de la cuve. [[effilocher]]",
  "La purée — Écraser les pommes de terre et le potimarron au presse-purée avec le bouillon tiède ({{bouillon}}), une cuillère de jus et une pincée de sel : une purée orangée, lisse, qui se tient en nid. [[ecraser]]",
  "Dressage — Assiette creuse tiède : la purée en nid au centre, le poulet effiloché en dôme par-dessus, les bâtonnets de carotte plantés sur le côté. Finir d'un filet d'huile d'olive crue ({{huile d'olive}}) et de persil ciselé ({{persil}}). [[ciseler; dresser x3]]"],
 tip:"La cuisse reste plus moelleuse que le blanc : désossée, sans peau et ouverte en deux, elle cuit en 30 minutes à la vapeur."}),

RC({id:"p-poulet-poche-riz", n:"Blanc de poulet poché au bouillon de carotte et thym, riz basmati & épinards fondus", cat:"Poulet", st:"Vapeur Bamboo", base:"Riz", d:1,
 ing:[["blanc de poulet",90,"g"],["riz cuit",140,"g"],["carotte",100,"g"],["épinards",60,"g"],["bouillon",200,"ml"],["huile d'olive",1,"c. à café"],["thym","",HERBS],["persil","",HERBS],["sel","","1 pincée"]],
 steps:[
  intro("une casserole avec couvercle, une planche et un couteau, un économe, une louche, un bol pour le riz, une assiette creuse tiède"),
  "Mise en place — Éplucher la carotte ({{carotte}}) et la couper en rondelles de 5 mm. Ôter la peau du blanc de poulet ({{blanc de poulet}}). Laver les épinards ({{épinards}}) et retirer les grosses tiges. [[sortir; eplucher carotte; couper carotte; couper blanc de poulet; laver epinards]]",
  "Le bouillon — Dans la casserole, porter à frémissement le bouillon ({{bouillon}}) avec les rondelles de carotte, une branche de thym ({{thym}}) et une pincée de sel. Laisser frémir 12 minutes : la carotte est prête quand elle s'écrase entre deux doigts. [[casserole; cuisson 12]]",
  "Pocher le poulet — Plonger le blanc dans le bouillon frémissant, couvrir, couper le feu et laisser pocher 20 minutes dans la chaleur du bouillon. La chair est blanche et juteuse à cœur. [[cuisson 20]]",
  "Cycle vapeur — Pendant que le poulet poche : remplir la cuve d'eau chaude jusqu'au repère « 2-3 » (au moins 360 ml), poser le panier garni de papier sulfurisé percé avec les épinards et, dans un bol posé sur le panier, le riz cuit ({{riz cuit}}) mouillé d'une cuillère d'eau. Fermer, MENU jusqu'à STEAM, régler 15 minutes et maintenir START 2 secondes ; ne pas ouvrir pendant le cycle. Le riz et les épinards sont prêts en même temps que le poulet. [[// bamboo; cuisson 15]]",
  "Dressage — Dans l'assiette creuse tiède, tasser le riz en dôme. Trancher le poulet en biais en lamelles de 5 mm et les disposer en éventail contre le riz. Épinards pressés d'un côté, carottes de l'autre, deux cuillères de bouillon chaud sur le riz, un filet d'huile d'olive crue ({{huile d'olive}}) et le persil ciselé ({{persil}}). [[trancher; presser epinards; ciseler; dresser x4]]"],
 tip:"Le pochage hors du feu garde le blanc moelleux : un bouillon qui bout le rendrait filandreux."}),

RC({id:"p-veloute-butternut-poulet", n:"Velouté épais de butternut, poulet vapeur & quinoa tiède", cat:"Poulet", st:"Cocon & purées", base:"Quinoa", d:1,
 ing:[["blanc de poulet",90,"g"],["butternut",150,"g"],["carotte",40,"g"],["quinoa cuit",130,"g"],["bouillon",150,"ml"],["crème de soja",1,"c. à soupe"],["huile d'olive",1,"c. à café"],["thym","",HERBS],["sel","","1 pincée"]],
 steps:[
  intro("un économe, une cuillère, une planche et un couteau, une petite casserole, un mixeur plongeant avec son verre, un bol pour le quinoa, une assiette creuse tiède"),
  "Mise en place — Éplucher la butternut ({{butternut}}), retirer les graines à la cuillère et la tailler en cubes de 2 cm. Éplucher la carotte ({{carotte}}) et la couper en rondelles de 5 mm. Ôter la peau du poulet ({{blanc de poulet}}) et le couper en deux dans l'épaisseur. [[sortir; eplucher butternut; couper butternut; eplucher carotte; couper carotte; couper blanc de poulet]]",
  c1(30, "le poulet directement sur la grille (rien sous la viande), puis la butternut, la carotte et une branche de thym ({{thym}}) sur le papier", "Repères : la butternut s'écrase à la fourchette, le jus du poulet est clair."),
  c2(5, "le quinoa cuit ({{quinoa cuit}}) mouillé d'une cuillère d'eau " + bol, "Il redevient moelleux. Pendant ces 5 minutes, chauffer le bouillon ({{bouillon}}) dans la petite casserole sans le faire bouillir.", "casserole"),
  "Le velouté — Mixer la butternut et la carotte avec le bouillon chaud et la crème de soja ({{crème de soja}}) jusqu'à un velouté épais, lisse et brillant. Saler d'une pincée. [[mixer]]",
  "Dressage — Velouté dans l'assiette creuse tiède, quinoa en quenelle au centre, poulet tranché en éventail sur le quinoa. Filet d'huile d'olive crue ({{huile d'olive}}) et quelques feuilles de thym. [[trancher; dresser x3]]"],
 tip:"Une seule cuillère de crème de soja suffit : la butternut mixée fait tout le velouté."}),

RC({id:"p-papillote-poulet", n:"Papillote vapeur de poulet, carottes, courgette & thym, pommes de terre tendres", cat:"Poulet", st:"Vapeur Bamboo", base:"Pommes de terre", d:1,
 ing:[["blanc de poulet",90,"g"],["pommes de terre",140,"g"],["carotte",110,"g"],["courgette épluchée",55,"g"],["huile d'olive",1,"c. à café"],["thym","",HERBS],["persil","",HERBS],["sel","","1 pincée"]],
 steps:[
  intro("une feuille de papier sulfurisé de 35 cm, de la ficelle de cuisine, une planche et un couteau, un économe, un petit bol, une assiette creuse tiède"),
  "Mise en place — Éplucher les pommes de terre ({{pommes de terre}}) et les couper en cubes de 2 cm. Éplucher la carotte ({{carotte}}) et la tailler en bâtonnets de 1 cm. Éplucher entièrement la courgette ({{courgette épluchée}}), sans laisser de vert, retirer le cœur graineux et la couper en dés de 1 cm. Ôter la peau du poulet ({{blanc de poulet}}) et le couper en deux dans l'épaisseur. [[sortir; eplucher pommes de terre; couper pommes de terre; eplucher carotte; couper carotte; eplucher courgette; couper courgette; couper blanc de poulet]]",
  "La papillote — Sur la feuille de papier sulfurisé, déposer la carotte, la courgette, le poulet et le thym ({{thym}}). Saler très légèrement, refermer en plissant les bords et attacher d'un tour de ficelle. Elle doit rester plate, moins de 3,5 cm d'épaisseur. [[former x1]]",
  c1(30, "la papillote et les pommes de terre", "Repères : en ouvrant la papillote au-dessus d'un bol (attention à la vapeur), le poulet est blanc à cœur et la carotte fondante. Garder le jus."),
  "La sauce — Mélanger 3 cuillères du jus de la papillote avec le persil ciselé ({{persil}}) et l'huile d'olive crue ({{huile d'olive}}). [[ciseler; delayer]]",
  "Dressage — Verser le contenu de la papillote dans l'assiette creuse tiède, poulet tranché sur les légumes, pommes de terre à côté, sauce au persil sur l'ensemble. [[trancher; dresser x3]]"],
 tip:"La papillote garde tout le jus : il devient la sauce, avec l'huile crue ajoutée au dernier moment."}),

RC({id:"p-oeufs-mollets-epinards", n:"Œufs mollets sur purée de pommes de terre, épinards fondus & carottes", cat:"Œufs", st:"Cocon & purées", base:"Pommes de terre", d:1,
 ing:[["œufs",2,"pièce"],["pommes de terre",140,"g"],["épinards",80,"g"],["carotte",100,"g"],["lait de riz",30,"ml"],["huile d'olive",1,"c. à café"],["ciboulette","",HERBS],["sel","","1 pincée"]],
 steps:[
  intro("un économe, une planche et un couteau, une petite casserole, une écumoire, une passoire, un presse-purée (ou une fourchette), une assiette creuse tiède"),
  "Mise en place — Sortir les œufs ({{œufs}}) du frigo. Éplucher les pommes de terre ({{pommes de terre}}) et les couper en cubes de 2 cm, éplucher la carotte ({{carotte}}) et la couper en rondelles de 5 mm. Laver les épinards ({{épinards}}) et retirer les grosses tiges. [[sortir; eplucher pommes de terre; couper pommes de terre; eplucher carotte; couper carotte; laver epinards]]",
  c1(25, "les pommes de terre et la carotte", "Les cubes sont cuits quand ils s'écrasent sans résistance à la fourchette."),
  "Les œufs mollets — Pendant le premier cycle : " + OEUF_MOLLET + " [[// casserole; cuisson 7; ecaler oeufs]]",
  c2(15, "les épinards sur le papier", "Ils s'affaissent et deviennent très tendres."),
  "La purée — Presser les épinards dans la passoire pour ôter l'eau. Écraser les pommes de terre au presse-purée avec le lait de riz ({{lait de riz}}) tiédi et une pincée de sel, jusqu'à une purée lisse et brillante. [[presser epinards; ecraser]]",
  "Dressage — Dans l'assiette creuse tiède, déposer la purée en nid avec le dos d'une cuillère. Disposer les épinards d'un côté et les rondelles de carotte en éventail de l'autre. Couper chaque œuf en deux et le poser au centre du nid, jaune vers le haut. Terminer d'un filet d'huile d'olive crue ({{huile d'olive}}) et de pointes vertes de ciboulette ciselées ({{ciboulette}}). [[couper oeufs; ciseler; dresser x4]]"],
 tip:"Les œufs se cuisent pendant le premier cycle vapeur : ils sont prêts, tièdes, au moment de dresser."}),

RC({id:"p-omelette-vapeur", n:"Omelette vapeur soufflée à la courgette, pommes de terre tendres & carottes", cat:"Œufs", st:"Vapeur Bamboo", base:"Pommes de terre", d:2,
 ing:[["œufs",2,"pièce"],["courgette épluchée",55,"g"],["carotte",100,"g"],["pommes de terre",140,"g"],["huile d'olive",1,"c. à café"],["ciboulette","",HERBS],["sel","","1 pincée"]],
 steps:[
  intro("une râpe fine, un fouet, un ramequin ou un petit bol de 15 cm garni de papier sulfurisé, une planche et un couteau, un économe, une assiette tiède"),
  "Mise en place — Éplucher la carotte ({{carotte}}) et les pommes de terre ({{pommes de terre}}) et les couper en cubes de 2 cm. Éplucher entièrement la courgette ({{courgette épluchée}}) et la râper finement. [[sortir; eplucher carotte; couper carotte; eplucher pommes de terre; couper pommes de terre; eplucher courgette; raper courgette]]",
  c1(25, "la carotte et les pommes de terre", "Les cubes s'écrasent à la fourchette."),
  "L'appareil — Pendant le premier cycle, battre les œufs ({{œufs}}) avec 3 cuillères d'eau tiède et une pincée de sel jusqu'à ce qu'ils moussent légèrement, ajouter la courgette râpée et verser dans le ramequin garni de papier sulfurisé. [[// battre]]",
  c2(15, "le ramequin", "L'omelette est cuite quand elle est gonflée et ferme au toucher, sans aucune coloration."),
  "Dressage — Démouler l'omelette tiède, la trancher en deux, disposer pommes de terre et carottes à côté, un filet d'huile d'olive crue ({{huile d'olive}}) et la ciboulette ciselée (pointes vertes). [[trancher; ciseler; dresser x3]]"],
 tip:"L'eau battue avec les œufs fait gonfler l'omelette à la vapeur, comme un soufflé."}),

RC({id:"p-salade-tiede-oeufs", n:"Salade tiède d'œufs durs, haricots verts, carottes & pommes de terre, sauce persillée", cat:"Œufs", st:"Fraîcheur tiède", base:"Pommes de terre", d:1,
 ing:[["œufs",2,"pièce"],["pommes de terre",140,"g"],["haricots verts",75,"g"],["carotte",100,"g"],["huile d'olive",1,"c. à café"],["persil","",HERBS],["sel","","1 pincée"]],
 steps:[
  intro("une balance, une planche et un couteau, un économe, une petite casserole pour les œufs, un petit bol, une assiette creuse"),
  "Mise en place — Sortir les œufs ({{œufs}}) du frigo. Peser 75 g de haricots verts ({{haricots verts}}) au maximum, retirer les deux extrémités et les couper en tronçons de 3 cm. Éplucher les pommes de terre ({{pommes de terre}}) et les couper en cubes de 2 cm, éplucher la carotte ({{carotte}}) et la couper en rondelles de 5 mm. [[sortir; peser haricots verts; couper haricots verts; eplucher pommes de terre; couper pommes de terre; eplucher carotte; couper carotte]]",
  c1(30, "les pommes de terre, la carotte et les haricots verts", "Les haricots doivent être mous, sans aucun croquant."),
  "Les œufs durs — Pendant le cycle, plonger les œufs dans une casserole d'eau frémissante et les cuire 10 minutes, puis les passer sous l'eau froide, les écaler et les couper en quartiers. [[// casserole; cuisson 10; ecaler oeufs; couper oeufs]]",
  "Tiédir et assaisonner — Étaler les légumes dans l'assiette et les laisser tiédir 5 minutes : la salade se sert tiède, jamais froide. Pendant ce temps, mélanger 3 cuillères d'eau tiède, le persil ciselé ({{persil}}), l'huile d'olive crue ({{huile d'olive}}) et une pincée de sel. [[attente 5; ciseler; delayer]]",
  "Dressage — Pommes de terre en couronne, haricots et carottes en éventail, quartiers d'œufs au centre, sauce persillée en filet. [[dresser x3]]"],
 tip:"Les légumes encore tièdes boivent la sauce persillée : bien plus doux pour le larynx qu'une salade froide."}),

RC({id:"v6-bibimbap-doux", n:"Bibimbap doux : riz tiède, légumes de couleurs, tofu & œuf mollet, sauce sésame", cat:"Œufs", st:"Fraîcheur tiède", base:"Riz", d:1,
 ing:[["riz cuit",140,"g"],["tofu ferme",50,"g"],["œuf",1,"pièce"],["épinards",50,"g"],["carotte",60,"g"],["pak choï",60,"g"],["sauce soja",1,"c. à café"],["graines de sésame",1,"c. à café"],["huile de sésame grillé",1,"c. à café"],["nori",1,"pièce"]],
 steps:[
  intro("une planche et un couteau, un économe, du papier absorbant, une petite casserole pour l'œuf, un petit bol, un bol large tiède, un bol pour le riz"),
  "Mise en place — Sortir l'œuf ({{œuf}}) du frigo. Éplucher la carotte ({{carotte}}) et la tailler en bâtonnets de 5 mm. Rincer le pak choï ({{pak choï}}), séparer les feuilles et couper les tiges en tronçons de 2 cm. Laver les épinards ({{épinards}}). Égoutter le tofu ({{tofu ferme}}), l'éponger dans du papier absorbant et le couper en dés de 2 cm. [[sortir; eplucher carotte; couper carotte; laver pak choi; couper pak choi; laver epinards; presser tofu; couper tofu]]",
  c1(20, "la carotte et les tiges de pak choï, chaque légume dans son coin", "Ils restent séparés pour garder leur couleur."),
  "L'œuf mollet — Pendant le premier cycle : faire frémir de l'eau dans une petite casserole, y glisser délicatement l'œuf, le cuire 6 minutes 30, puis le passer 2 minutes sous l'eau froide et l'écaler sous un filet d'eau. [[// casserole; cuisson 7; ecaler oeuf]]",
  c2(15, "les feuilles de pak choï, les épinards, les dés de tofu et le riz ({{riz cuit}}) mouillé d'une cuillère d'eau " + bol, "Ensuite, presser doucement les épinards."),
  "La sauce sésame — Mélanger la sauce soja ({{sauce soja}}) avec 2 cuillères d'eau tiède et l'huile de sésame grillé ({{huile de sésame grillé}}). [[presser epinards; delayer]]",
  "Dressage — Dans le bol large tiède, tasser le riz au fond, disposer les légumes en quartiers de couleurs autour, le tofu au centre et l'œuf coupé en deux dessus. Émietter le nori ({{nori}}), parsemer de sésame ({{graines de sésame}}). Servir la sauce à part et mélanger à table, de bas en haut. [[dresser x5]]"],
 tip:"Tout se mélange à table : chaque bouchée mêle riz tiède, légumes fondants et jaune d'œuf coulant."}),

RC({id:"v6-donburi-oeufs", n:"Donburi tiède d'œufs mollets, épinards & carottes fondantes sur riz", cat:"Œufs", st:"Cocon & purées", base:"Riz", d:1,
 ing:[["riz cuit",140,"g"],["œuf",2,"pièce"],["épinards",60,"g"],["carotte",60,"g"],["pak choï",50,"g"],["sauce soja",1,"c. à café"],["huile de sésame grillé",1,"c. à café"]],
 steps:[
  intro("une planche et un couteau, un économe, une petite casserole pour les œufs, un petit bol, un bol profond tiède, un bol pour le riz"),
  "Mise en place — Sortir les œufs ({{œuf}}) du frigo. Éplucher la carotte ({{carotte}}) et la couper en rondelles de 5 mm, rincer le pak choï ({{pak choï}}) et le couper en tronçons de 2 cm, laver les épinards ({{épinards}}). [[sortir; eplucher carotte; couper carotte; laver pak choi; couper pak choi; laver epinards]]",
  c1(20, "la carotte et les tiges de pak choï", "Les rondelles s'écrasent entre deux doigts."),
  "Les œufs mollets — Pendant le premier cycle : " + OEUF_MOLLET + " [[// casserole; cuisson 7; ecaler oeuf]]",
  c2(15, "les feuilles de pak choï, les épinards et le riz ({{riz cuit}}) mouillé d'une cuillère d'eau " + bol, "Tout est tendre et bien chaud."),
  "La sauce — Mélanger la sauce soja ({{sauce soja}}) avec 2 cuillères d'eau tiède et l'huile de sésame grillé ({{huile de sésame grillé}}). [[delayer]]",
  "Dressage — Riz dans le bol profond tiède, légumes tout autour, œufs coupés en deux au centre, sauce en filet sur l'ensemble. [[dresser x3]]"],
 tip:"Le donburi se mange à la cuillère : le jaune coulant sert de sauce au riz."}),

RC({id:"v6-quinoa-blettes", n:"Quinoa tiède, blettes et carottes fondantes, tofu & œuf dur mimosa", cat:"Œufs", st:"Fraîcheur tiède", base:"Quinoa", d:1,
 ing:[["quinoa cuit",140,"g"],["tofu ferme",50,"g"],["œuf",1,"pièce"],["blettes",75,"g"],["carotte",50,"g"],["courgette",45,"g"],["huile d'olive",1,"c. à café"],["persil","",HERBS],["sel","","1 pincée"]],
 steps:[
  intro("une planche et un couteau, un économe, une petite casserole pour l'œuf, du papier absorbant, une fourchette, un petit bol, un bol pour le quinoa, une assiette creuse"),
  "Mise en place — Sortir l'œuf ({{œuf}}) du frigo. Laver les blettes ({{blettes}}), séparer les côtes des feuilles, éplucher les fils des côtes et les couper en tronçons de 2 cm, couper les feuilles en larges rubans. Éplucher la carotte ({{carotte}}) et la couper en rondelles de 5 mm. Éplucher entièrement la courgette ({{courgette}}), retirer le cœur et la couper en dés de 1 cm. Égoutter le tofu ({{tofu ferme}}), l'éponger et le couper en dés. [[sortir; laver blettes; eplucher blettes; couper blettes; eplucher carotte; couper carotte; eplucher courgette; couper courgette; presser tofu; couper tofu]]",
  c1(20, "la carotte et les côtes de blettes", "Elles s'écrasent à la fourchette."),
  "L'œuf mimosa — Pendant le premier cycle, cuire l'œuf 10 minutes dans de l'eau frémissante, le passer sous l'eau froide, l'écaler et l'écraser finement à la fourchette. [[// casserole; cuisson 10; ecaler oeuf; ecraser]]",
  c2(10, "les feuilles de blettes, la courgette, le tofu et le quinoa cuit ({{quinoa cuit}}) mouillé d'une cuillère d'eau " + bol, "Tout est tendre."),
  "La sauce — Mélanger le persil ciselé ({{persil}}) avec l'huile d'olive crue ({{huile d'olive}}), 2 cuillères d'eau tiède et une pincée de sel. [[ciseler; delayer]]",
  "Dressage — Quinoa en couronne, légumes au centre, tofu autour, mimosa d'œuf en pluie et sauce persillée en filet. [[dresser x4]]"],
 tip:"L'œuf écrasé en mimosa se répartit sur tout le plat : un seul œuf suffit à le parfumer."}),

RC({id:"v6-chawanmushi-tofu", n:"Chawanmushi soyeux au tofu & au daikon, riz tiède", cat:"Œufs", st:"Vapeur Bamboo", base:"Riz", d:2,
 ing:[["riz cuit",140,"g"],["œuf",1,"pièce"],["tofu ferme",50,"g"],["bouillon",150,"ml"],["daikon",60,"g"],["carotte",60,"g"],["pak choï",50,"g"],["huile de sésame grillé",1,"c. à café"]],
 steps:[
  intro("deux ramequins, une passoire fine, un fouet, une planche et un couteau, un économe, du papier sulfurisé pour couvrir les ramequins, un bol pour le riz"),
  "Mise en place — Éplucher le daikon ({{daikon}}) et la carotte ({{carotte}}) et les couper en petits dés de 5 mm. Rincer le pak choï ({{pak choï}}) et le couper en tronçons. Couper le tofu ({{tofu ferme}}) en dés de 1 cm. [[sortir; eplucher daikon; couper daikon; eplucher carotte; couper carotte; laver pak choi; couper pak choi; couper tofu]]",
  c1(20, "le daikon, la carotte et le pak choï", "Les dés s'écrasent entre deux doigts."),
  "Le flan — Pendant le premier cycle, battre l'œuf ({{œuf}}) avec le bouillon tiède ({{bouillon}}) sans faire de mousse et le passer au tamis. Répartir dans les ramequins avec les dés de tofu et couvrir de papier sulfurisé. [[// battre]]",
  c2(15, "les ramequins et le riz ({{riz cuit}}) mouillé d'une cuillère d'eau " + bol, "Le flan est prêt quand il tremble au centre, comme une crème prise."),
  "Dressage — Servir les ramequins sur une assiette, le riz et les légumes à côté, un filet d'huile de sésame grillé ({{huile de sésame grillé}}) sur les légumes. [[dresser x3]]"],
 tip:"Passer l'œuf au tamis donne un flan parfaitement lisse, sans bulles."})
);
