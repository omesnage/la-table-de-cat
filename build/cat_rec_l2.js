/* ============ DÉJEUNERS ET DÎNERS : TOFU (ferme, soyeux, fumé) ============
   Le tofu ferme est seulement égoutté et épongé (pas de pressage de 10 minutes : il cuit à la vapeur et n'a pas besoin de rendre son eau). */
LUNCH.push(
RC({id:"p-tofu-riz-sesame", n:"Tofu ferme vapeur, riz basmati tiède, carottes & brocoli, huile de sésame grillé", cat:"Tofu", st:"Vapeur Bamboo", base:"Riz", d:1,
 ing:[["tofu ferme",90,"g"],["riz cuit",140,"g"],["carotte",100,"g"],["brocoli",70,"g"],["sauce soja",1,"c. à café"],["huile de sésame grillé",1,"c. à café"],["ciboulette","",HERBS]],
 steps:[
  intro("du papier absorbant, une planche et un couteau, un économe, un petit bol, un bol pour le riz, un bol large tiède"),
  "Mise en place — Égoutter le tofu ferme ({{tofu ferme}}), l'éponger dans du papier absorbant et le couper en dés de 2 cm. Éplucher la carotte ({{carotte}}) et la couper en rondelles de 5 mm. Détailler uniquement les têtes de brocoli ({{brocoli}}) en petits bouquets de 3 cm. [[sortir; presser tofu; couper tofu; eplucher carotte; couper carotte; couper brocoli]]",
  c1(20, "les rondelles de carotte", "Elles deviennent fondantes."),
  c2(15, "les dés de tofu, les bouquets de brocoli et le riz basmati cuit ({{riz cuit}}) mouillé d'une cuillère d'eau " + bol, "Le brocoli doit être très tendre (15 minutes, guide du fabricant), le tofu chaud à cœur."),
  "La sauce — Mélanger la sauce soja ({{sauce soja}}) avec 2 cuillères d'eau tiède, l'huile de sésame grillé ({{huile de sésame grillé}}) et la ciboulette ciselée ({{ciboulette}}, pointes vertes seulement). [[ciseler; delayer]]",
  "Dressage — Riz en dôme dans le bol tiède, tofu au centre, carottes et brocoli en éventail, sauce en zigzag sur l'ensemble. [[dresser x3]]"],
 tip:"Le tofu cuit à la vapeur reste moelleux et boit la sauce au sésame au dernier moment."}),

RC({id:"p-tofu-mijote-quinoa", n:"Tofu mijoté dans un bouillon de carotte et de thym, quinoa tiède & courgette fondante", cat:"Tofu", st:"Cocon & purées", base:"Quinoa", d:1,
 ing:[["tofu ferme",90,"g"],["quinoa cuit",140,"g"],["carotte",110,"g"],["courgette épluchée",55,"g"],["bouillon",250,"ml"],["huile d'olive",1,"c. à café"],["thym","",HERBS],["persil","",HERBS],["sel","","1 pincée"]],
 steps:[
  introPoele("du papier absorbant, une planche et un couteau, un économe, une casserole avec couvercle, une petite poêle, une louche, une assiette creuse tiède"),
  "Mise en place — Égoutter le tofu ({{tofu ferme}}), l'éponger et le couper en cubes de 2 cm. Éplucher la carotte ({{carotte}}) et la couper en rondelles de 5 mm. Éplucher entièrement la courgette ({{courgette épluchée}}), retirer le cœur et la couper en dés de 1 cm. [[sortir; presser tofu; couper tofu; eplucher carotte; couper carotte; eplucher courgette; couper courgette]]",
  "Le bouillon — Porter le bouillon ({{bouillon}}) à frémissement avec les rondelles de carotte et le thym ({{thym}}). Cuire 12 minutes à petit frémissement, jusqu'à ce que les rondelles s'écrasent. [[casserole; cuisson 12]]",
  "Mijoter le tofu — Ajouter le tofu et la courgette, baisser le feu et laisser mijoter 10 minutes sans bouillir : le tofu boit le bouillon et la courgette devient fondante. [[cuisson 10]]",
  "Le quinoa — Pendant que le tofu mijote, réchauffer le quinoa cuit ({{quinoa cuit}}) 3 minutes dans la petite poêle avec une cuillère d'eau, à feu doux. [[// cuisson 3]]",
  "Dressage — Quinoa au fond de l'assiette creuse tiède, tofu et légumes dessus, une louche de bouillon tout autour. Huile d'olive crue ({{huile d'olive}}) et persil ciselé ({{persil}}). [[ciseler; dresser x3]]"],
 tip:"Le tofu mijoté sans bouillir garde une texture fondante et prend tout le goût du thym."}),

RC({id:"p-tofu-aubergine-riz", n:"Tofu & aubergine pelée fondante à la vapeur, riz tiède", cat:"Tofu", st:"Vapeur Bamboo", base:"Riz", d:2,
 ing:[["tofu ferme",90,"g"],["riz cuit",140,"g"],["aubergine épluchée",100,"g"],["carotte",70,"g"],["huile de sésame grillé",1,"c. à café"],["ciboulette","",HERBS],["sel","","1 pincée"]],
 steps:[
  intro("un économe, du papier absorbant, une planche et un couteau, un bol pour le riz, une assiette creuse tiède"),
  "Mise en place — Éplucher entièrement l'aubergine ({{aubergine épluchée}}), la couper en dés de 2 cm, la saler et la laisser dégorger 10 minutes sur du papier absorbant. Pendant ce temps, éponger le tofu ({{tofu ferme}}) et le couper en dés de 2 cm, éplucher la carotte ({{carotte}}) et la couper en rondelles de 5 mm. Éponger l'aubergine. [[sortir; eplucher aubergine; couper aubergine; presser tofu; couper tofu; eplucher carotte; couper carotte; attente 7]]",
  c1(20, "l'aubergine et la carotte", "L'aubergine doit s'écraser comme une crème."),
  c2(10, "le tofu et le riz ({{riz cuit}}) mouillé d'une cuillère d'eau " + bol, "Le tofu est chaud à cœur."),
  "Dressage — Riz en dôme, aubergine écrasée à la fourchette et tofu en quartiers, carottes à côté. Huile de sésame grillé ({{huile de sésame grillé}}) en filet et ciboulette ciselée ({{ciboulette}}, pointes vertes). [[ecraser; ciseler; dresser x3]]"],
 tip:"L'aubergine sans peau et bien cuite devient une crème : elle fait la sauce du plat."}),

RC({id:"p-tofu-haricots-pdt", n:"Salade tiède de tofu, haricots verts, carottes & pommes de terre", cat:"Tofu", st:"Fraîcheur tiède", base:"Pommes de terre", d:1,
 ing:[["tofu ferme",90,"g"],["pommes de terre",140,"g"],["haricots verts",75,"g"],["carotte",100,"g"],["huile d'olive",1,"c. à café"],["persil","",HERBS],["sel","","1 pincée"]],
 steps:[
  intro("une balance, du papier absorbant, une planche et un couteau, un économe, un petit bol, une assiette creuse"),
  "Mise en place — Éponger le tofu ({{tofu ferme}}) et le couper en dés de 2 cm. Peser 75 g de haricots verts ({{haricots verts}}) au maximum, les équeuter et les couper en tronçons de 3 cm. Éplucher les pommes de terre ({{pommes de terre}}) et les couper en cubes de 2 cm, éplucher la carotte ({{carotte}}) et la couper en rondelles de 5 mm. [[sortir; presser tofu; couper tofu; peser haricots verts; couper haricots verts; eplucher pommes de terre; couper pommes de terre; eplucher carotte; couper carotte]]",
  c1(30, "les pommes de terre, la carotte et les haricots verts", "Les haricots doivent être mous."),
  c2(10, "les dés de tofu", "Ils sont chauds à cœur."),
  "Tiédir et assaisonner — Étaler le tout dans l'assiette et laisser tiédir 5 minutes. Pendant ce temps, mélanger le persil ciselé ({{persil}}), l'huile d'olive crue ({{huile d'olive}}), 2 cuillères d'eau tiède et une pincée de sel. [[attente 5; ciseler; delayer]]",
  "Dressage — Pommes de terre en couronne, haricots et carottes en éventail, tofu au centre, sauce persillée en filet. [[dresser x3]]"],
 tip:"Servie tiède, la salade reste douce pour l'estomac et les pommes de terre boivent mieux la sauce."}),

RC({id:"p-boulettes-tofu-okara", n:"Boulettes tendres de tofu & d'okara d'amande à la vapeur, riz tiède, crème de potimarron", cat:"Tofu", st:"Vapeur Bamboo", base:"Riz", d:2,
 ing:[["tofu ferme",90,"g"],["okara d'amande",20,"g"],["riz cuit",140,"g"],["potimarron",100,"g"],["carotte",70,"g"],["bouillon",3,"c. à soupe"],["huile d'olive",1,"c. à café"],["persil","",HERBS],["sel","","1 pincée"]],
 steps:[
  intro("du papier absorbant, une fourchette, un saladier, une planche et un couteau, un économe, une cuillère, un bol pour le riz, une assiette creuse tiède"),
  "La farce — Éponger le tofu ({{tofu ferme}}) et l'écraser finement à la fourchette avec l'okara d'amande ({{okara d'amande}}), le persil ciselé ({{persil}}) et une pincée de sel. Pétrir jusqu'à une farce homogène. [[sortir; presser tofu; ecraser; ciseler; delayer]]",
  "Les boulettes et les légumes — Avec les mains humides, former 6 boulettes de la taille d'une noix (moins de 3,5 cm). Couper le potimarron ({{potimarron}}) en quartiers, retirer les graines, l'éplucher et le couper en cubes de 2 cm. Éplucher la carotte ({{carotte}}) et la couper en rondelles de 5 mm. [[former x6; eplucher potimarron; couper potimarron; eplucher carotte; couper carotte]]",
  c1(20, "les boulettes, le potimarron et la carotte", "Les boulettes sont fermes et chaudes à cœur."),
  c2(5, "le riz basmati cuit ({{riz cuit}}) mouillé d'une cuillère d'eau " + bol, "Il redevient moelleux."),
  "La crème de potimarron — Écraser le potimarron avec le bouillon tiède ({{bouillon}}) en crème lisse. [[ecraser]]",
  "Dressage — Riz dans l'assiette creuse tiède, boulettes dessus, crème de potimarron autour, carottes à côté, huile d'olive crue ({{huile d'olive}}). [[dresser x4]]"],
 tip:"L'okara d'amande lie la farce sans œuf : les boulettes se tiennent à la vapeur."}),

RC({id:"p-tofu-brouille-epinards", n:"Tofu brouillé fondant aux épinards, pommes de terre vapeur & carottes", cat:"Tofu", st:"Cocon & purées", base:"Pommes de terre", d:1,
 ing:[["tofu ferme",90,"g"],["épinards",80,"g"],["pommes de terre",140,"g"],["carotte",100,"g"],["crème de soja",1,"c. à soupe"],["huile d'olive",1,"c. à café"],["ciboulette","",HERBS],["sel","","1 pincée"]],
 steps:[
  intro("du papier absorbant, une planche et un couteau, un économe, une fourchette, une petite casserole antiadhésive, une cuillère en bois, une assiette creuse tiède"),
  "Mise en place — Éplucher les pommes de terre ({{pommes de terre}}) et les couper en cubes de 2 cm, éplucher la carotte ({{carotte}}) et la couper en rondelles de 5 mm. Laver les épinards ({{épinards}}). Éponger le tofu ({{tofu ferme}}) et l'émietter à la fourchette. [[sortir; eplucher pommes de terre; couper pommes de terre; eplucher carotte; couper carotte; laver epinards; presser tofu; ecraser]]",
  c1(30, "les pommes de terre et la carotte", "Tout s'écrase à la fourchette."),
  "Le tofu brouillé — Pendant les 5 dernières minutes du cycle, mettre le tofu émietté, les épinards et une cuillère d'eau dans la petite casserole, à feu très doux, et remuer 5 minutes : les épinards fondent. Hors du feu, ajouter la crème de soja ({{crème de soja}}) et une pincée de sel : une texture de petits grains crémeux, sans aucune coloration. [[// casserole; cuisson 5]]",
  "Dressage — Pommes de terre et carottes dans l'assiette creuse tiède, tofu brouillé au centre, huile d'olive crue ({{huile d'olive}}) et ciboulette ciselée ({{ciboulette}}, pointes vertes). [[ciseler; dresser x3]]"],
 tip:"Une cuillère de crème de soja ajoutée hors du feu rend le brouillé crémeux, comme des œufs."}),

RC({id:"v6-soba-tofu", n:"Soba tièdes au sésame, tofu vapeur, pak choï & daikon fondants", cat:"Tofu", st:"Fraîcheur tiède", base:"Sarrasin", d:1,
 ing:[["soba cuites",140,"g"],["tofu ferme",90,"g"],["pak choï",70,"g"],["carotte",60,"g"],["daikon",40,"g"],["miso blanc",1,"c. à café"],["huile de sésame grillé",1,"c. à café"],["nori",1,"pièce"]],
 steps:[
  intro("du papier absorbant, une planche et un couteau, un économe, une casserole, une passoire, un petit bol, des ciseaux, un bol large tiède"),
  "Mise en place — Éplucher le daikon ({{daikon}}) et le couper en demi-rondelles de 5 mm, éplucher la carotte ({{carotte}}) et la couper en bâtonnets. Rincer le pak choï ({{pak choï}}), séparer feuilles et tiges et couper les tiges en tronçons. Éponger le tofu ({{tofu ferme}}) et le couper en dés de 2 cm. Vérifier que les soba sont 100 % sarrasin. [[sortir; eplucher daikon; couper daikon; eplucher carotte; couper carotte; laver pak choi; couper pak choi; presser tofu; couper tofu]]",
  c1(20, "le daikon, la carotte et les tiges de pak choï", "Ils s'écrasent à la fourchette."),
  "Les soba — Pendant le premier cycle, plonger les soba ({{soba cuites}}) 6 minutes dans l'eau frémissante non salée, les rincer à l'eau tiède en les frottant doucement pour ôter l'amidon, bien égoutter. [[// casserole; cuisson 6; rincer; egoutter]]",
  c2(10, "le tofu et les feuilles de pak choï", "Les feuilles s'affaissent."),
  "La sauce miso — Délayer le miso ({{miso blanc}}) dans 3 cuillères d'eau tiède, ajouter l'huile de sésame grillé ({{huile de sésame grillé}}). Ne jamais chauffer le miso. [[delayer]]",
  "Dressage — Soba enroulées en nid au centre du bol large tiède, tofu posé dessus, légumes tout autour, sauce en filet et nori ({{nori}}) ciselé aux ciseaux en fins rubans. [[ciseler; dresser x4]]"],
 tip:"Rincer les soba à l'eau tiède les rend soyeuses et évite qu'elles collent."}),

RC({id:"v6-miso-repas", n:"Soupe-repas miso douce : riz, tofu, daikon & épinards", cat:"Tofu", st:"Cocon & purées", base:"Riz", d:1,
 ing:[["riz cuit",140,"g"],["tofu ferme",90,"g"],["daikon",80,"g"],["épinards",50,"g"],["carotte",40,"g"],["miso blanc",1,"c. à café"],["wakamé",3,"g"],["eau",350,"ml"],["huile de sésame grillé",1,"c. à café"]],
 steps:[
  introPoele("une planche et un couteau, un économe, un petit bol, une casserole, une louche, des ciseaux, un bol profond tiède"),
  "Mise en place — Éplucher le daikon ({{daikon}}) et la carotte ({{carotte}}) et les couper en fines demi-rondelles de 5 mm. Mettre le wakamé ({{wakamé}}) à tremper dans un bol d'eau froide. Laver les épinards ({{épinards}}). Éponger le tofu ({{tofu ferme}}) et le couper en dés de 1,5 cm. [[sortir; eplucher daikon; couper daikon; eplucher carotte; couper carotte; laver epinards; presser tofu; couper tofu]]",
  "Le bouillon — Porter l'eau ({{eau}}) à frémissement avec le daikon et la carotte et laisser cuire à petit frémissement 12 minutes, jusqu'à ce qu'ils s'écrasent. [[casserole; cuisson 12]]",
  "Le tofu et les épinards — Égoutter le wakamé, l'ajouter avec le tofu et les épinards et laisser 3 minutes à feu très doux. [[egoutter; cuisson 3]]",
  "Le miso — Éteindre. Délayer le miso ({{miso blanc}}) dans une louche de bouillon, puis remettre dans la casserole. Ne jamais faire bouillir. [[delayer]]",
  "Dressage — Riz cuit ({{riz cuit}}), réchauffé dans le bouillon une minute, tassé au fond du bol profond tiède, bouillon et garnitures versés à la louche, goutte d'huile de sésame grillé ({{huile de sésame grillé}}) à la surface. [[dresser x3]]"],
 tip:"Le miso ajouté hors du feu garde son parfum doux ; une seule cuillère à café suffit."}),

RC({id:"v6-japchae-doux", n:"Japchae doux : vermicelles de patate douce, tofu & légumes fondants au sésame", cat:"Tofu", st:"Fraîcheur tiède", base:"Vermicelles", d:2,
 ing:[["vermicelles de patate douce cuits",140,"g"],["tofu ferme",90,"g"],["carotte",70,"g"],["épinards",50,"g"],["blettes",50,"g"],["sauce soja",1,"c. à café"],["graines de sésame",1,"c. à café"],["huile de sésame grillé",1,"c. à café"]],
 steps:[
  intro("une planche et un couteau, un économe, du papier absorbant, une casserole, une passoire, des ciseaux, un saladier, une assiette creuse tiède"),
  "Mise en place — Éplucher la carotte ({{carotte}}) et la couper en fines lanières. Laver les blettes ({{blettes}}), éplucher les fils des côtes et les couper en tronçons de 2 cm, couper les feuilles en rubans. Laver les épinards ({{épinards}}). Éponger le tofu ({{tofu ferme}}) et le couper en bâtonnets de 1 cm. [[sortir; eplucher carotte; couper carotte; laver blettes; eplucher blettes; couper blettes; laver epinards; presser tofu; couper tofu]]",
  c1(20, "la carotte et les côtes de blettes", "Elles sont fondantes."),
  "Les vermicelles — Pendant le premier cycle, cuire les vermicelles 8 minutes dans l'eau frémissante, les égoutter et les couper aux ciseaux en tronçons de 10 cm. [[// casserole; cuisson 8; egoutter; couper vermicelles]]",
  c2(15, "les feuilles de blettes, les épinards et le tofu", "Tout est très tendre."),
  "La sauce — Mélanger la sauce soja ({{sauce soja}}) avec 2 cuillères d'eau tiède et l'huile de sésame grillé ({{huile de sésame grillé}}). [[delayer]]",
  "Le mélange et le dressage — Dans le saladier, mêler délicatement les vermicelles ({{vermicelles de patate douce cuits}}) tièdes, les légumes, le tofu et la sauce, en soulevant à deux mains. Dresser en nid dans l'assiette creuse tiède, les légumes colorés sur le dessus, et parsemer de sésame ({{graines de sésame}}). [[delayer; dresser x3]]"],
 tip:"Mélanger à deux mains, en soulevant, évite de casser les vermicelles et le tofu."}),

RC({id:"v6-gimbap", n:"Gimbap tiède : rouleaux de riz & nori, tofu, carotte et épinards fondants", cat:"Tofu", st:"Vapeur Bamboo", base:"Riz", d:2,
 ing:[["riz cuit",140,"g"],["nori",2,"pièce"],["tofu ferme",90,"g"],["carotte",80,"g"],["épinards",50,"g"],["courge spaghetti",40,"g"],["graines de sésame",1,"c. à café"],["huile de sésame grillé",1,"c. à café"]],
 steps:[
  intro("une planche et un couteau bien aiguisé, un économe, une cuillère, du papier absorbant, une natte à sushi (ou un torchon propre), un bol pour le riz, une assiette plate"),
  "Mise en place — Éplucher la carotte ({{carotte}}) et la couper en bâtonnets fins. Éponger le tofu ({{tofu ferme}}) et le couper en bâtonnets de 1 cm. Laver les épinards ({{épinards}}). Couper le morceau de courge spaghetti ({{courge spaghetti}}) en deux et retirer les graines. [[sortir; eplucher carotte; couper carotte; presser tofu; couper tofu; laver epinards; couper courge spaghetti]]",
  c1(25, "la courge spaghetti (face coupée vers le haut) et la carotte", "La chair de la courge se détache en filaments à la fourchette."),
  c2(15, "le tofu, les épinards et le riz ({{riz cuit}}) mouillé d'une cuillère d'eau " + bol, "Ensuite, presser les épinards et effilocher la courge à la fourchette.", "presser epinards; effilocher"),
  "Le riz — Mêler le riz tiède à l'huile de sésame grillé ({{huile de sésame grillé}}). Il doit rester tiède, jamais chaud. [[delayer]]",
  "Le roulage — Étaler le riz sur les feuilles de nori ({{nori}}) en laissant 2 cm libres en haut, aligner les garnitures au centre, rouler serré avec la natte en humidifiant le bord pour souder. [[former x2]]",
  "Dressage — Trancher les rouleaux en tronçons de 2 cm avec le couteau humide, les dresser debout sur l'assiette et parsemer de sésame ({{graines de sésame}}). [[trancher; dresser x2]]"],
 tip:"Un couteau mouillé entre chaque tranche coupe net sans écraser le rouleau."}),

RC({id:"v6-risotto-potimarron", n:"Risotto de riz au bouillon, potimarron & blettes, dés de tofu tendres", cat:"Tofu", st:"Cocon & purées", base:"Riz", d:2,
 ing:[["riz cuit",140,"g"],["tofu ferme",90,"g"],["potimarron",100,"g"],["blettes",70,"g"],["bouillon",200,"ml"],["huile d'olive",1,"c. à café"],["persil","",HERBS],["sel","","1 pincée"]],
 steps:[
  intro("une planche et un couteau, un économe, une cuillère, du papier absorbant, une casserole, une cuillère en bois, une fourchette, une assiette creuse tiède"),
  "Mise en place — Couper le potimarron ({{potimarron}}) en quartiers, retirer les graines, l'éplucher et le couper en cubes de 2 cm. Laver les blettes ({{blettes}}), éplucher les fils des côtes, les couper en tronçons et couper les feuilles en rubans. Éponger le tofu ({{tofu ferme}}) et le couper en dés. [[sortir; eplucher potimarron; couper potimarron; laver blettes; eplucher blettes; couper blettes; presser tofu; couper tofu]]",
  c1(20, "le potimarron et les côtes de blettes", "Le potimarron s'écrase à la fourchette."),
  c2(10, "les feuilles de blettes et le tofu", "Les feuilles fondent."),
  "Le risotto — Chauffer le riz cuit ({{riz cuit}}) avec le bouillon ({{bouillon}}) à feu doux dans la casserole, en y écrasant le potimarron à la fourchette, 8 minutes, jusqu'à une texture crémeuse. [[casserole; ecraser; cuisson 8]]",
  "Dressage — Risotto dans l'assiette creuse tiède, étalé d'un tour de poignet, blettes et tofu au centre, persil ciselé ({{persil}}) et huile d'olive crue ({{huile d'olive}}). [[ciseler; dresser x3]]"],
 tip:"Le potimarron écrasé dans le bouillon donne un risotto crémeux sans beurre ni fromage."}),

RC({id:"v6-courge-spaghetti", n:"Courge spaghetti tiède, tofu émietté au basilic, pommes de terre tendres", cat:"Tofu", st:"Cocon & purées", base:"Pommes de terre", d:2,
 ing:[["courge spaghetti",75,"g"],["pommes de terre",140,"g"],["tofu ferme",90,"g"],["carotte",50,"g"],["épinards",45,"g"],["huile d'olive",1,"c. à café"],["basilic","",HERBS],["sel","","1 pincée"]],
 steps:[
  intro("un grand couteau et une planche, une cuillère, un économe, du papier absorbant, une fourchette, un petit bol, une assiette creuse tiède"),
  "Mise en place — Couper le morceau de courge spaghetti ({{courge spaghetti}}) en deux dans la longueur et retirer les graines. Éplucher les pommes de terre ({{pommes de terre}}) et les couper en cubes de 2 cm, éplucher la carotte ({{carotte}}) et la couper en rondelles de 5 mm. Laver les épinards ({{épinards}}). Éponger le tofu ({{tofu ferme}}) et l'émietter à la fourchette. [[sortir; couper courge spaghetti; eplucher pommes de terre; couper pommes de terre; eplucher carotte; couper carotte; laver epinards; presser tofu; ecraser]]",
  c1(25, "la courge spaghetti (face coupée vers le haut), les pommes de terre et la carotte", "Tout s'écrase à la fourchette."),
  c2(15, "le tofu émietté et les épinards", "Les épinards s'affaissent (15 minutes, guide du fabricant)."),
  "Les filaments et la sauce — Effilocher la chair de courge à la fourchette en longs spaghettis. Mélanger le basilic ciselé ({{basilic}}), l'huile d'olive crue ({{huile d'olive}}) et une pincée de sel. [[effilocher; ciseler; delayer]]",
  "Dressage — Nid de courge au centre, pommes de terre à côté, tofu et épinards au centre du nid, huile au basilic sur l'ensemble. [[dresser x3]]"],
 tip:"La courge spaghetti cuite se défait en filaments : un « plat de pâtes » sans gluten et très digeste."}),

RC({id:"v6-patate-douce-puree", n:"Purée soyeuse pomme de terre–patate douce, tofu vapeur & brocoli fondant", cat:"Tofu", st:"Cocon & purées", base:"Pommes de terre", d:1,
 ing:[["pommes de terre",140,"g"],["patate douce",75,"g"],["brocoli",60,"g"],["carotte",35,"g"],["tofu ferme",90,"g"],["huile d'olive",1,"c. à café"],["thym","",HERBS],["sel","","1 pincée"]],
 steps:[
  intro("un économe, une planche et un couteau, du papier absorbant, un presse-purée ou une fourchette, une assiette creuse tiède"),
  "Mise en place — Éplucher les pommes de terre ({{pommes de terre}}) et la patate douce ({{patate douce}}) et les couper en cubes de 2 cm. Éplucher la carotte ({{carotte}}) et la couper en rondelles. Détailler les têtes de brocoli ({{brocoli}}) en petits bouquets. Éponger le tofu ({{tofu ferme}}) et le couper en dés. [[sortir; eplucher pommes de terre; couper pommes de terre; eplucher patate douce; couper patate douce; eplucher carotte; couper carotte; couper brocoli; presser tofu; couper tofu]]",
  c1(25, "les pommes de terre, la patate douce et la carotte", "Tout s'écrase."),
  c2(15, "le brocoli et le tofu", "Le brocoli est très tendre."),
  "La purée — Écraser les pommes de terre et la patate douce avec deux cuillères d'eau chaude prise dans la cuve, le thym effeuillé ({{thym}}) et une pincée de sel. [[ecraser]]",
  "Dressage — Purée en nid, tofu et légumes autour, filet d'huile d'olive crue ({{huile d'olive}}). [[dresser x3]]"],
 tip:"La patate douce, en petite portion, sucre naturellement la purée."}),

RC({id:"v6-bol-fenouil", n:"Bol de quinoa tiède, fenouil & haricots verts fondants, tofu à l'aneth", cat:"Tofu", st:"Vapeur Bamboo", base:"Quinoa", d:1,
 ing:[["quinoa cuit",140,"g"],["tofu ferme",90,"g"],["fenouil",60,"g"],["haricots verts",75,"g"],["carotte",35,"g"],["huile d'olive",1,"c. à café"],["aneth","",HERBS],["sel","","1 pincée"]],
 steps:[
  intro("une balance, une planche et un couteau, un économe, du papier absorbant, un petit bol, un bol pour le quinoa, un bol large tiède"),
  "Mise en place — Retirer les parties dures du fenouil ({{fenouil}}) et le couper en fines lamelles. Peser 75 g de haricots verts ({{haricots verts}}) au maximum, les équeuter et les couper en tronçons. Éplucher la carotte ({{carotte}}) et la couper en rondelles. Éponger le tofu ({{tofu ferme}}) et le couper en dés. [[sortir; couper fenouil; peser haricots verts; couper haricots verts; eplucher carotte; couper carotte; presser tofu; couper tofu]]",
  c1(25, "les haricots verts, la carotte et le fenouil", "Les haricots doivent être mous."),
  c2(10, "le tofu et le quinoa ({{quinoa cuit}}) mouillé d'une cuillère d'eau " + bol, "Tout est chaud et tendre."),
  "La sauce à l'aneth — Mélanger l'aneth ciselé finement ({{aneth}}), l'huile d'olive crue ({{huile d'olive}}), 2 cuillères d'eau tiède et une pincée de sel. [[ciseler; delayer]]",
  "Dressage — Quinoa au fond du bol large tiède, légumes en quartiers, tofu au centre, sauce à l'aneth en filet. [[dresser x3]]"],
 tip:"Le fenouil cuit perd son croquant et garde une douce note anisée, très bien accordée à l'aneth."}),

/* ---------- nouvelles recettes (version 8) ---------- */
RC({id:"l-tofu-soyeux-pakchoi", n:"Tofu soyeux vapeur, sauce soja-sésame, riz tiède, pak choï, courgette & potimarron", cat:"Tofu", st:"Vapeur Bamboo", base:"Riz", d:1,
 ing:[["tofu soyeux",100,"g"],["riz cuit",140,"g"],["pak choï",75,"g"],["courgette épluchée",55,"g"],["potimarron",50,"g"],["sauce soja",1,"c. à café"],["huile de sésame grillé",1,"c. à café"],["ciboulette","",HERBS]],
 steps:[
  intro("une planche et un couteau, un économe, une cuillère, une assiette creuse qui tient dans le panier, un petit bol, un bol pour le riz, un bol large tiède"),
  "Mise en place — Couper le potimarron ({{potimarron}}) en quartiers, retirer les graines, l'éplucher et le couper en cubes de 2 cm. Éplucher entièrement la courgette ({{courgette épluchée}}), retirer le cœur et la couper en dés de 1 cm. Rincer le pak choï ({{pak choï}}), séparer les feuilles et couper les tiges en tronçons de 2 cm. Égoutter le tofu soyeux ({{tofu soyeux}}) sans le casser et le poser entier dans l'assiette creuse. [[sortir; eplucher potimarron; couper potimarron; eplucher courgette; couper courgette; laver pak choi; couper pak choi]]",
  c1(20, "le potimarron et les tiges de pak choï", "Le potimarron s'écrase à la fourchette (20 minutes, guide du fabricant)."),
  c2(10, "la courgette, les feuilles de pak choï, l'assiette de tofu soyeux et le riz cuit ({{riz cuit}}) mouillé d'une cuillère d'eau " + bol, "Le tofu soyeux est chaud à cœur et tremble comme un flan."),
  "La sauce — Mélanger la sauce soja ({{sauce soja}}) avec 2 cuillères d'eau tiède, l'huile de sésame grillé ({{huile de sésame grillé}}) et la ciboulette ciselée ({{ciboulette}}, pointes vertes). [[ciseler; delayer]]",
  "Dressage — Riz en dôme dans le bol large tiède. Faire glisser le tofu soyeux à côté avec une grande cuillère, le couper en quatre à la cuillère, le napper de sauce. Légumes en éventail autour. [[couper tofu soyeux; dresser x3]]"],
 tip:"Le tofu soyeux se cuit entier dans son assiette : il garde sa texture de flan et ne se brise pas."}),

RC({id:"l-tofu-fume-brocoli", n:"Tofu fumé tiède, écrasé de pommes de terre à la ciboulette, brocoli & pâtisson fondants", cat:"Tofu", st:"Cocon & purées", base:"Pommes de terre", d:1,
 ing:[["tofu fumé",80,"g"],["pommes de terre",140,"g"],["brocoli",90,"g"],["patisson",80,"g"],["huile d'olive",1,"c. à café"],["ciboulette","",HERBS],["sel","","1 pincée"]],
 steps:[
  intro("une planche et un couteau, un économe, une cuillère, une fourchette, une assiette creuse tiède"),
  "Mise en place — Éplucher les pommes de terre ({{pommes de terre}}) et les couper en cubes de 2 cm. Éplucher le pâtisson ({{patisson}}), retirer les graines et la partie filandreuse, le couper en cubes de 2 cm. Détailler les têtes de brocoli ({{brocoli}}) en petits bouquets. Couper le tofu fumé ({{tofu fumé}}) en tranches de 1 cm. [[sortir; eplucher pommes de terre; couper pommes de terre; eplucher patisson; couper patisson; couper brocoli; couper tofu fume]]",
  c1(20, "les pommes de terre et le pâtisson", "Ils s'écrasent à la fourchette."),
  c2(15, "le brocoli et les tranches de tofu fumé", "Le brocoli est très tendre (15 minutes, guide du fabricant), le tofu chaud à cœur."),
  "L'écrasé — Écraser grossièrement les pommes de terre à la fourchette avec l'huile d'olive crue ({{huile d'olive}}), la ciboulette ciselée ({{ciboulette}}, pointes vertes), une cuillère d'eau de la cuve et une pincée de sel. [[ecraser; ciseler]]",
  "Dressage — Écrasé de pommes de terre au centre de l'assiette creuse tiède, tranches de tofu fumé en éventail dessus, brocoli et pâtisson autour. [[dresser x3]]"],
 tip:"Le tofu fumé parfume tout le plat : une petite portion, une fois par semaine au plus."}),

RC({id:"l-veloute-celeri-tofu-soyeux", n:"Velouté de céleri-rave et pomme de terre, tofu soyeux & carottes fondantes", cat:"Tofu", st:"Cocon & purées", base:"Pommes de terre", d:1,
 ing:[["tofu soyeux",100,"g"],["pommes de terre",140,"g"],["céleri-rave",60,"g"],["carotte",100,"g"],["bouillon",200,"ml"],["huile d'olive",1,"c. à café"],["persil","",HERBS],["sel","","1 pincée"]],
 steps:[
  intro("un économe, une planche et un couteau, une petite casserole, un mixeur plongeant avec son verre, une assiette creuse tiède"),
  "Mise en place — Éplucher épais le céleri-rave ({{céleri-rave}}) et le couper en cubes de 2 cm. Éplucher les pommes de terre ({{pommes de terre}}) et la carotte ({{carotte}}) et les couper en cubes de 2 cm. Égoutter le tofu soyeux ({{tofu soyeux}}) et le couper en cubes de 2 cm à la cuillère. [[sortir; eplucher celeri-rave; couper celeri-rave; eplucher pommes de terre; couper pommes de terre; eplucher carotte; couper carotte; couper tofu soyeux]]",
  c1(30, "le céleri-rave, les pommes de terre et la carotte", "Tout s'écrase entre deux doigts."),
  "Le bouillon — Pendant le cycle, chauffer le bouillon ({{bouillon}}) dans la petite casserole sans le faire bouillir. [[// casserole; cuisson 4]]",
  "Le velouté — Mixer le céleri-rave, les pommes de terre et la moitié de la carotte avec le bouillon chaud et une pincée de sel jusqu'à un velouté épais et lisse. Y glisser les cubes de tofu soyeux 2 minutes pour qu'ils tiédissent. [[mixer; attente 2]]",
  "Dressage — Velouté dans l'assiette creuse tiède, cubes de tofu soyeux au centre, rondelles de carotte restantes autour, huile d'olive crue ({{huile d'olive}}) et persil ciselé ({{persil}}). [[ciseler; dresser x3]]"],
 tip:"Le tofu soyeux se réchauffe dans le velouté chaud : il reste fondant, sans jamais cuire."}),

RC({id:"l-pot-au-feu-tofu", n:"Pot-au-feu doux au bouillon de thym : tofu ferme, navet, panais & pommes de terre", cat:"Tofu", st:"Cocon & purées", base:"Pommes de terre", d:1,
 ing:[["tofu ferme",90,"g"],["pommes de terre",140,"g"],["navet",90,"g"],["panais",80,"g"],["bouillon",400,"ml"],["huile d'olive",1,"c. à café"],["thym","",HERBS],["persil","",HERBS],["sel","","1 pincée"]],
 steps:[
  introPoele("une planche et un couteau, un économe, du papier absorbant, une casserole avec couvercle, une louche, une assiette creuse tiède"),
  "Mise en place — Éplucher généreusement le navet ({{navet}}) et le couper en quartiers de 2 cm. Éplucher le panais ({{panais}}), retirer le cœur s'il est dur, et le couper en tronçons de 2 cm. Éplucher les pommes de terre ({{pommes de terre}}) et les couper en cubes de 2 cm. Éponger le tofu ({{tofu ferme}}) et le couper en gros cubes de 3 cm. [[sortir; eplucher navet; couper navet; eplucher panais; couper panais; eplucher pommes de terre; couper pommes de terre; presser tofu; couper tofu]]",
  "Le bouillon — Mettre les légumes dans la casserole avec le bouillon ({{bouillon}}) et une branche de thym ({{thym}}), porter à frémissement, couvrir et cuire 20 minutes à petit frémissement, jusqu'à ce que tout s'écrase à la fourchette. [[casserole; cuisson 20]]",
  "Le tofu — Ajouter le tofu dans le bouillon et laisser 5 minutes à feu très doux, sans bouillir. [[cuisson 5]]",
  "Dressage — À la louche, disposer légumes et tofu dans l'assiette creuse tiède, verser deux louches de bouillon, finir d'huile d'olive crue ({{huile d'olive}}), de persil ciselé ({{persil}}) et d'une pincée de sel. [[ciseler; dresser x3]]"],
 tip:"Les racines bien cuites dans le bouillon deviennent fondantes et sucrées : un plat réconfortant pour les soirs d'hiver."}),

RC({id:"l-papillote-tofu-basilic", n:"Papillote de tofu ferme au basilic, courgette, fenouil & carotte, quinoa tiède", cat:"Tofu", st:"Vapeur Bamboo", base:"Quinoa", d:1,
 ing:[["tofu ferme",90,"g"],["quinoa cuit",140,"g"],["courgette épluchée",55,"g"],["fenouil",60,"g"],["carotte",60,"g"],["huile d'olive",1,"c. à café"],["basilic","",HERBS],["sel","","1 pincée"]],
 steps:[
  intro("une feuille de papier sulfurisé de 35 cm, de la ficelle de cuisine, une planche et un couteau, un économe, du papier absorbant, un bol pour le quinoa, une assiette creuse tiède"),
  "Mise en place — Éplucher la carotte ({{carotte}}) et la couper en fins bâtonnets. Retirer les parties dures du fenouil ({{fenouil}}) et le couper en fines lamelles. Éplucher entièrement la courgette ({{courgette épluchée}}), retirer le cœur et la couper en dés de 1 cm. Éponger le tofu ({{tofu ferme}}) et le couper en tranches de 1 cm. [[sortir; eplucher carotte; couper carotte; couper fenouil; eplucher courgette; couper courgette; presser tofu; couper tofu]]",
  "La papillote — Sur la feuille de papier sulfurisé, poser la carotte et le fenouil, puis la courgette, les tranches de tofu et quelques feuilles de basilic ({{basilic}}). Saler très légèrement, refermer en plissant les bords et attacher d'un tour de ficelle. Elle doit rester plate, moins de 3,5 cm d'épaisseur. [[former x1]]",
  c1(20, "la papillote", "Le fenouil et la carotte sont fondants."),
  c2(10, "le quinoa cuit ({{quinoa cuit}}) mouillé d'une cuillère d'eau " + bol, "Il redevient moelleux."),
  "Dressage — Ouvrir la papillote au-dessus de l'assiette creuse tiède (attention à la vapeur), quinoa à côté, arrosé du jus de la papillote, filet d'huile d'olive crue ({{huile d'olive}}) et basilic frais ciselé. [[ciseler; dresser x2]]"],
 tip:"Le basilic cuit dans la papillote parfume le tofu ; un peu de basilic frais au service ravive le tout."}),

RC({id:"l-quinoa-tofu-soyeux-blettes", n:"Quinoa tiède, blettes & potimarron fondants, tofu soyeux et crème de soja à la ciboulette", cat:"Tofu", st:"Fraîcheur tiède", base:"Quinoa", d:1,
 ing:[["tofu soyeux",100,"g"],["quinoa cuit",140,"g"],["blettes",75,"g"],["potimarron",100,"g"],["crème de soja",1,"c. à soupe"],["huile d'olive",1,"c. à café"],["ciboulette","",HERBS],["sel","","1 pincée"]],
 steps:[
  intro("une planche et un couteau, un économe, une cuillère, une assiette creuse qui tient dans le panier, un petit bol, un bol pour le quinoa, une assiette creuse tiède"),
  "Mise en place — Couper le potimarron ({{potimarron}}) en quartiers, retirer les graines, l'éplucher et le couper en cubes de 2 cm. Laver les blettes ({{blettes}}), éplucher les fils des côtes et les couper en tronçons de 2 cm, couper les feuilles en rubans. Égoutter le tofu soyeux ({{tofu soyeux}}) et le poser entier dans l'assiette creuse. [[sortir; eplucher potimarron; couper potimarron; laver blettes; eplucher blettes; couper blettes]]",
  c1(20, "le potimarron et les côtes de blettes", "Le potimarron s'écrase à la fourchette."),
  c2(10, "les feuilles de blettes, l'assiette de tofu soyeux et le quinoa ({{quinoa cuit}}) mouillé d'une cuillère d'eau " + bol, "Les feuilles fondent, le tofu est chaud à cœur."),
  "La crème — Mélanger la crème de soja ({{crème de soja}}) avec la ciboulette ciselée ({{ciboulette}}, pointes vertes), une cuillère d'eau tiède et une pincée de sel. [[ciseler; delayer]]",
  "Dressage — Quinoa en couronne dans l'assiette creuse tiède, potimarron et blettes au centre, tofu soyeux coupé à la cuillère par-dessus, crème à la ciboulette en filet puis huile d'olive crue ({{huile d'olive}}). [[dresser x4]]"],
 tip:"Le tofu soyeux, chaud et tremblant, joue le rôle d'une sauce : on le mélange au quinoa à la fourchette."}),

RC({id:"l-vermicelles-bouillon-tofu", n:"Bouillon clair de vermicelles de patate douce, tofu ferme, pak choï & carotte", cat:"Tofu", st:"Cocon & purées", base:"Vermicelles", d:1,
 ing:[["vermicelles de patate douce cuits",140,"g"],["tofu ferme",90,"g"],["pak choï",75,"g"],["carotte",90,"g"],["bouillon",400,"ml"],["sauce soja",1,"c. à café"],["huile de sésame grillé",1,"c. à café"],["coriandre","",HERBS]],
 steps:[
  introPoele("une planche et un couteau, un économe, du papier absorbant, deux casseroles, une passoire, des ciseaux, une louche, un grand bol tiède"),
  "Mise en place — Éplucher la carotte ({{carotte}}) et la couper en fines rondelles de 3 mm. Rincer le pak choï ({{pak choï}}), couper les tiges en tronçons de 2 cm et garder les feuilles entières. Éponger le tofu ({{tofu ferme}}) et le couper en dés de 1,5 cm. [[sortir; eplucher carotte; couper carotte; laver pak choi; couper pak choi; presser tofu; couper tofu]]",
  "Le bouillon — Porter le bouillon ({{bouillon}}) à frémissement avec la carotte et les tiges de pak choï, et cuire 12 minutes à petit frémissement : la carotte s'écrase entre deux doigts. [[casserole; cuisson 12]]",
  "Les vermicelles — Pendant ce temps, cuire les vermicelles 8 minutes dans la seconde casserole d'eau frémissante, les égoutter et les couper aux ciseaux en tronçons de 10 cm. [[// casserole; cuisson 8; egoutter; couper vermicelles]]",
  "Le tofu — Ajouter le tofu et les feuilles de pak choï dans le bouillon, 3 minutes à feu très doux, puis la sauce soja ({{sauce soja}}). [[cuisson 3]]",
  "Dressage — Vermicelles ({{vermicelles de patate douce cuits}}) au fond du grand bol tiède, légumes et tofu dessus, bouillon versé à la louche, quelques gouttes d'huile de sésame grillé ({{huile de sésame grillé}}) et la coriandre ciselée ({{coriandre}}). [[ciseler; dresser x3]]"],
 tip:"Les vermicelles se cuisent à part pour que le bouillon reste clair."}),

RC({id:"l-gateau-pdt-tofu", n:"Gâteau vapeur de pomme de terre râpée au tofu & à l'aneth, haricots verts & courgette", cat:"Tofu", st:"Vapeur Bamboo", base:"Pommes de terre", d:2,
 ing:[["pommes de terre",140,"g"],["tofu ferme",90,"g"],["haricots verts",75,"g"],["courgette épluchée",55,"g"],["carotte",40,"g"],["huile d'olive",1,"c. à café"],["aneth","",HERBS],["sel","","1 pincée"]],
 steps:[
  intro("une balance, un économe, une râpe à gros trous, un torchon propre, une fourchette, du papier absorbant, un saladier, un ramequin de 12 cm garni de papier sulfurisé, une planche et un couteau, une assiette tiède"),
  "Mise en place — Peser 75 g de haricots verts ({{haricots verts}}) au maximum, les équeuter et les couper en tronçons de 3 cm. Éplucher la carotte ({{carotte}}) et la couper en rondelles de 5 mm. Éplucher entièrement la courgette ({{courgette épluchée}}), retirer le cœur et la couper en dés de 1 cm. [[sortir; peser haricots verts; couper haricots verts; eplucher carotte; couper carotte; eplucher courgette; couper courgette]]",
  "Le gâteau — Éplucher les pommes de terre ({{pommes de terre}}), les râper à gros trous et les presser fort dans le torchon pour retirer l'eau. Éponger le tofu ({{tofu ferme}}), l'écraser à la fourchette et le mélanger aux pommes de terre avec l'aneth ciselé ({{aneth}}) et une pincée de sel. Tasser dans le ramequin : 3 cm d'épaisseur au plus. [[eplucher pommes de terre; raper pommes de terre; presser pommes de terre; presser tofu; ecraser; ciseler; delayer; former x1]]",
  c1(25, "le ramequin, les haricots verts et la carotte", "Les haricots doivent être mous."),
  c2(10, "la courgette", "Le gâteau est pris et ferme au toucher, sans aucune coloration."),
  "Dressage — Démouler le gâteau tiède, le couper en deux, légumes autour, filet d'huile d'olive crue ({{huile d'olive}}) et aneth frais. [[couper; dresser x2]]"],
 tip:"Bien presser les pommes de terre râpées : l'amidon qui reste lie le gâteau sans œuf."})
);
