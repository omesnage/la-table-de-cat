/* ============ DÉJEUNERS ET DÎNERS : TOFU (ferme, soyeux, fumé) ============
   Le tofu ferme est seulement égoutté et épongé (pas de pressage de 10 minutes : il cuit à la vapeur et n'a pas besoin de rendre son eau). */
LUNCH.push(
RC({id:"t-bol-tofu-sesame-daikon", n:"Bol de riz tiède, tofu en croûte de sésame, épinards & daikon fondants", cat:"Tofu", st:"Vapeur Bamboo", base:"Riz", d:1,
 ing:[["tofu ferme",90,"g"],["riz cuit",140,"g"],["daikon",100,"g"],["épinards",70,"g"],["graines de sésame",1,"c. à café"],["sauce soja",1,"c. à café"],["huile de sésame grillé",1,"c. à café"]],
 steps:[
  intro("une planche et un couteau, un économe, du papier absorbant, une assiette, un petit bol, un bol large tiède"),
  "Mise en place — Éplucher le daikon ({{daikon}}) et le couper en demi-rondelles de 5 mm. Laver les épinards ({{épinards}}). Éponger le tofu ({{tofu ferme}}), le couper en 4 tranches, puis presser chaque face dans les graines de sésame ({{graines de sésame}}) étalées sur l'assiette : elles collent comme une croûte. [[sortir; eplucher daikon; couper daikon; laver epinards; presser tofu; couper tofu]]",
  c1(20, "le daikon, les tranches de tofu, les épinards et le riz ({{riz cuit}}) mouillé d'une cuillère d'eau " + bol, "Le daikon devient translucide et perd tout piquant."),
  "La sauce — Mélanger la sauce soja ({{sauce soja}}) et l'huile de sésame grillé ({{huile de sésame grillé}}) avec 2 cuillères d'eau tiède dans le petit bol. [[delayer]]",
  "Dressage — Riz dans le bol large tiède, tofu au sésame dessus, épinards pressés et daikon autour, sauce en filet. [[presser epinards; dresser x4]]"],
 tip:"Les graines de sésame collées sur le tofu prennent un parfum de noisette à la vapeur, sans aucune matière grasse chaude."}),

RC({id:"t-risotto-quinoa-potimarron", n:"Quinoa crémeux au potimarron écrasé, dés de tofu & blettes fondantes", cat:"Tofu", st:"Cocon & purées", base:"Quinoa", d:1,
 ing:[["tofu ferme",90,"g"],["quinoa cuit",140,"g"],["potimarron",110,"g"],["blettes",70,"g"],["crème de soja",1,"c. à soupe"],["huile d'olive",1,"c. à café"],["thym","",HERBS]],
 steps:[
  intro("une planche et un couteau, un économe, du papier absorbant, une fourchette, un bol large tiède"),
  "Mise en place — Éplucher le potimarron ({{potimarron}}), retirer les graines et le couper en cubes de 2 cm. Laver les blettes ({{blettes}}), retirer les côtes et couper les feuilles en lanières. Éponger le tofu ({{tofu ferme}}) et le couper en dés de 1,5 cm. [[sortir; eplucher potimarron; couper potimarron; laver blettes; couper blettes; presser tofu; couper tofu]]",
  c1(20, "le potimarron, les blettes, les dés de tofu et le quinoa ({{quinoa cuit}}) mouillé d'une cuillère d'eau " + bol, "Le potimarron s'écrase sous la pointe d'un couteau."),
  "Le quinoa crémeux — Écraser le potimarron ({{potimarron}}) à la fourchette avec la crème de soja ({{crème de soja}}), puis le mêler au quinoa tiède : il devient crémeux comme un risotto. [[ecraser potimarron]]",
  "Dressage — Quinoa crémeux dans le bol tiède, blettes pressées et dés de tofu dessus, huile d'olive crue ({{huile d'olive}}) et thym effeuillé ({{thym}}). [[presser blettes; dresser x3]]"],
 tip:"Le potimarron écrasé remplace le fromage et la crème : il donne au quinoa une texture de risotto."}),

RC({id:"t-miso-tofu-soyeux-navet", n:"Soupe-repas au miso doux, tofu soyeux, navet & épinards, riz", cat:"Tofu", st:"Cocon & purées", base:"Riz", d:1,
 ing:[["tofu soyeux",100,"g"],["riz cuit",140,"g"],["navet",100,"g"],["épinards",60,"g"],["bouillon",300,"ml"],["miso blanc",1,"c. à café"],["huile de sésame grillé",1,"c. à café"]],
 steps:[
  introPoele("une casserole, une planche et un couteau, un économe, une louche, un petit bol, un grand bol à soupe tiède"),
  "Mise en place — Éplucher le navet ({{navet}}) et le couper en dés de 1 cm. Laver les épinards ({{épinards}}). [[sortir; eplucher navet; couper navet; laver epinards]]",
  "Le bouillon — Porter le bouillon ({{bouillon}}) à frémissement avec le navet et cuire 8 minutes à petit frémissement, jusqu'à ce que les dés soient translucides. Ajouter le riz ({{riz cuit}}) et les épinards pour les 3 dernières minutes. [[casserole; cuisson 11]]",
  "Le miso et le tofu — Éteindre le feu. Délayer le miso ({{miso blanc}}) dans une louche de bouillon tiède dans le petit bol, le verser dans la casserole (il ne doit jamais bouillir) et déposer le tofu soyeux ({{tofu soyeux}}) en gros morceaux à la cuillère : il se réchauffe sans se défaire. [[delayer; verser; cuisson 1]]",
  "Dressage — Servir dans le bol à soupe tiède, avec l'huile de sésame grillé ({{huile de sésame grillé}}) en filet. [[dresser x2]]"],
 tip:"Le miso se délaye toujours hors du feu : bouilli, il perd son parfum et sa douceur."}),

RC({id:"t-quinoa-blettes-patisson", n:"Quinoa tiède, tofu vapeur, blettes & pâtisson, huile verte au persil", cat:"Tofu", st:"Vapeur Bamboo", base:"Quinoa", d:1,
 ing:[["tofu ferme",90,"g"],["quinoa cuit",140,"g"],["pâtisson",100,"g"],["blettes",70,"g"],["huile d'olive",1,"c. à café"],["persil","",HERBS],["sel","","1 pincée"]],
 steps:[
  intro("une planche et un couteau, un économe, du papier absorbant, un petit bol, un bol large tiède"),
  "Mise en place — Éplucher le pâtisson ({{pâtisson}}), retirer les graines et le couper en cubes de 2 cm. Laver les blettes ({{blettes}}), retirer les côtes et couper les feuilles en lanières. Éponger le tofu ({{tofu ferme}}) et le couper en tranches de 1 cm. [[sortir; eplucher patisson; couper patisson; laver blettes; couper blettes; presser tofu; couper tofu]]",
  c1(20, "le pâtisson, les blettes, le tofu et le quinoa ({{quinoa cuit}}) mouillé d'une cuillère d'eau " + bol, "Le pâtisson est fondant et les blettes tombées."),
  "L'huile verte — Dans le petit bol, mêler le persil ciselé ({{persil}}), l'huile d'olive crue ({{huile d'olive}}), 2 cuillères d'eau tiède et le sel. [[ciseler; delayer]]",
  "Dressage — Quinoa au fond du bol large tiède, tofu, pâtisson et blettes pressées dessus, huile verte en filet. [[presser blettes; dresser x4]]"],
 tip:"L'huile verte au persil, ajoutée à la fin, remplace toute sauce : fraîche, parfumée, sans aucun piquant."}),

RC({id:"t-donburi-tofu-soyeux", n:"Donburi de tofu soyeux, riz tiède, épinards & carotte, sauce soja douce", cat:"Tofu", st:"Cocon & purées", base:"Riz", d:1,
 ing:[["tofu soyeux",100,"g"],["riz cuit",140,"g"],["épinards",70,"g"],["carotte",100,"g"],["sauce soja",1,"c. à café"],["sirop d'érable",1,"c. à café"],["huile de sésame grillé",1,"c. à café"]],
 steps:[
  intro("une planche et un couteau, un économe, un petit bol, un bol large tiède"),
  "Mise en place — Éplucher la carotte ({{carotte}}) et la couper en bâtonnets de 3 mm. Laver les épinards ({{épinards}}). [[sortir; eplucher carotte; couper carotte; laver epinards]]",
  c1(20, "les carottes, les épinards, le riz ({{riz cuit}}) mouillé d'une cuillère d'eau et le tofu soyeux ({{tofu soyeux}}) en gros morceaux, " + bol, "Le tofu soyeux est chaud et tremblotant, il ne faut pas le remuer."),
  "La sauce — Mélanger la sauce soja ({{sauce soja}}), le sirop d'érable ({{sirop d'érable}}) et 2 cuillères d'eau tiède. [[delayer]]",
  "Dressage — Riz dans le bol large tiède, tofu soyeux au centre à la cuillère, carottes et épinards pressés autour, sauce en filet, huile de sésame grillé ({{huile de sésame grillé}}) à la fin. [[presser epinards; dresser x4]]"],
 tip:"Le tofu soyeux se pose à la cuillère sans le remuer : il garde sa texture de flan, c'est tout le plaisir de ce bol."}),

RC({id:"l-tofu-soyeux-pakchoi", n:"Tofu soyeux vapeur, sauce soja-sésame, riz tiède, pak choï & potimarron", cat:"Tofu", st:"Vapeur Bamboo", base:"Riz", d:1,
 ing:[["tofu soyeux",100,"g"],["riz cuit",140,"g"],["pak choï",75,"g"],["potimarron",90,"g"],["sauce soja",1,"c. à café"],["huile de sésame grillé",1,"c. à café"],["ciboulette","",HERBS]],
 steps:[
  intro("une planche et un couteau, un économe, un petit bol, un bol large tiède"),
  "Mise en place — Éplucher le potimarron ({{potimarron}}), retirer les graines et le couper en cubes de 2 cm. Laver le pak choï ({{pak choï}}) et le couper en lanières de 2 cm. [[sortir; eplucher potimarron; couper potimarron; laver pak choi; couper pak choi]]",
  c1(20, "le potimarron, le pak choï, le riz ({{riz cuit}}) mouillé d'une cuillère d'eau et le tofu soyeux ({{tofu soyeux}}) en gros morceaux, " + bol, "Le potimarron s'écrase sous un couteau, le tofu est chaud."),
  "La sauce — Mélanger la sauce soja ({{sauce soja}}), l'huile de sésame grillé ({{huile de sésame grillé}}) et 2 cuillères d'eau tiède, puis la ciboulette ciselée ({{ciboulette}}), pointes vertes seulement. [[ciseler; delayer]]",
  "Dressage — Riz dans le bol large tiède, tofu soyeux, potimarron et pak choï pressé dessus, sauce en filet. [[presser pak choi; dresser x4]]"],
 tip:"Un seul cycle vapeur : le tofu soyeux se réchauffe avec les légumes et reste fondant."}),

RC({id:"l-tofu-fume-brocoli", n:"Tofu fumé tiède, écrasé de pommes de terre à la ciboulette, brocoli & pâtisson", cat:"Tofu", st:"Vapeur Bamboo", base:"Pommes de terre", d:1,
 ing:[["tofu fumé",80,"g"],["pommes de terre",140,"g"],["brocoli",90,"g"],["pâtisson",80,"g"],["huile d'olive",1,"c. à café"],["ciboulette","",HERBS],["sel","","1 pincée"]],
 steps:[
  intro("une planche et un couteau, un économe, une fourchette, un bol large tiède"),
  "Mise en place — Éplucher les pommes de terre ({{pommes de terre}}) et les couper en cubes de 2 cm. Éplucher le pâtisson ({{pâtisson}}), retirer les graines et le couper en cubes. Détacher les têtes du brocoli ({{brocoli}}) en petits bouquets, sans les tiges. Couper le tofu fumé ({{tofu fumé}}) en fines tranches. [[sortir; eplucher pommes de terre; couper pommes de terre; eplucher patisson; couper patisson; couper brocoli; couper tofu]]",
  c1(25, "les pommes de terre, le pâtisson, le brocoli et les tranches de tofu fumé", "Les pommes de terre s'écrasent à la fourchette et le brocoli est très tendre."),
  "L'écrasé — Écraser les pommes de terre ({{pommes de terre}}) à la fourchette avec l'huile d'olive crue ({{huile d'olive}}), le sel et la ciboulette ciselée ({{ciboulette}}), pointes vertes seulement. [[ecraser pommes de terre; ciseler]]",
  "Dressage — Écrasé au fond du bol large tiède, brocoli et pâtisson autour, tofu fumé posé en éventail. [[dresser x3]]"],
 tip:"Le tofu fumé est parfumé : il donne du goût à tout le bol sans rien ajouter. À limiter à une fois par semaine."}),

RC({id:"l-papillote-tofu-basilic", n:"Papillote de tofu au basilic, courgette & carotte, quinoa tiède", cat:"Tofu", st:"Vapeur Bamboo", base:"Quinoa", d:1,
 ing:[["tofu ferme",90,"g"],["quinoa cuit",140,"g"],["courgette épluchée",60,"g"],["carotte",90,"g"],["huile d'olive",1,"c. à café"],["basilic","",HERBS],["sel","","1 pincée"]],
 steps:[
  intro("une feuille de papier sulfurisé de 35 cm, de la ficelle de cuisine, une planche et un couteau, un économe, du papier absorbant, un bol pour le quinoa, une assiette creuse tiède"),
  "Mise en place — Éplucher la carotte ({{carotte}}) et la couper en fins bâtonnets. Éplucher entièrement la courgette ({{courgette épluchée}}) et la couper en dés de 1 cm. Éponger le tofu ({{tofu ferme}}) et le couper en tranches de 1 cm. [[sortir; eplucher carotte; couper carotte; eplucher courgette; couper courgette; presser tofu; couper tofu]]",
  "La papillote — Sur la feuille de papier sulfurisé, poser la carotte, la courgette, les tranches de tofu et quelques feuilles de basilic ({{basilic}}). Saler très légèrement, refermer en plissant les bords et attacher d'un tour de ficelle, bien plate (moins de 3,5 cm d'épaisseur). [[former x1]]",
  c1(20, "la papillote et le quinoa ({{quinoa cuit}}) mouillé d'une cuillère d'eau " + bol, "La carotte est fondante et le quinoa moelleux."),
  "Dressage — Ouvrir la papillote au-dessus de l'assiette creuse tiède (attention à la vapeur), quinoa à côté, jus de la papillote en arrosage, filet d'huile d'olive crue ({{huile d'olive}}) et basilic frais ciselé. [[ciseler; dresser x2]]"],
 tip:"Le basilic cuit dans la papillote parfume le tofu ; un peu de basilic frais au service ravive le tout."}),

RC({id:"l-quinoa-tofu-soyeux-blettes", n:"Quinoa tiède, tofu soyeux, blettes & potimarron fondants, crème de soja à la ciboulette", cat:"Tofu", st:"Vapeur Bamboo", base:"Quinoa", d:1,
 ing:[["tofu soyeux",100,"g"],["quinoa cuit",140,"g"],["blettes",70,"g"],["potimarron",90,"g"],["crème de soja",1,"c. à soupe"],["huile d'olive",1,"c. à café"],["ciboulette","",HERBS]],
 steps:[
  intro("une planche et un couteau, un économe, un petit bol, un bol large tiède"),
  "Mise en place — Éplucher le potimarron ({{potimarron}}), retirer les graines et le couper en cubes de 2 cm. Laver les blettes ({{blettes}}), retirer les côtes et couper les feuilles en lanières. [[sortir; eplucher potimarron; couper potimarron; laver blettes; couper blettes]]",
  c1(20, "le potimarron, les blettes, le quinoa ({{quinoa cuit}}) mouillé d'une cuillère d'eau et le tofu soyeux ({{tofu soyeux}}) en gros morceaux, " + bol, "Le potimarron est fondant, le tofu soyeux chaud."),
  "La crème — Mélanger la crème de soja ({{crème de soja}}), l'huile d'olive crue ({{huile d'olive}}) et la ciboulette ciselée ({{ciboulette}}), pointes vertes seulement. [[ciseler; delayer]]",
  "Dressage — Quinoa au fond du bol large tiède, tofu soyeux à la cuillère, potimarron et blettes pressées autour, crème en filet. [[presser blettes; dresser x4]]"],
 tip:"La crème de soja à la ciboulette apporte de l'onctuosité sans aucun produit laitier."}),

RC({id:"l-vermicelles-bouillon-tofu", n:"Bouillon clair de vermicelles de patate douce, tofu, pak choï & carotte", cat:"Tofu", st:"Cocon & purées", base:"Vermicelles", d:1,
 ing:[["vermicelles de patate douce cuits",140,"g"],["tofu ferme",90,"g"],["pak choï",75,"g"],["carotte",90,"g"],["bouillon",400,"ml"],["sauce soja",1,"c. à café"],["huile de sésame grillé",1,"c. à café"],["coriandre","",HERBS]],
 steps:[
  introPoele("une planche et un couteau, un économe, du papier absorbant, une casserole, des ciseaux, une louche, un grand bol tiède. Les vermicelles sont cuits d'avance (6 minutes à l'eau frémissante), comme le riz"),
  "Mise en place — Éplucher la carotte ({{carotte}}) et la couper en fines rondelles de 3 mm. Laver le pak choï ({{pak choï}}), couper les tiges en tronçons de 2 cm et garder les feuilles entières. Éponger le tofu ({{tofu ferme}}) et le couper en dés de 1,5 cm. [[sortir; eplucher carotte; couper carotte; laver pak choi; couper pak choi; presser tofu; couper tofu]]",
  "Le bouillon — Porter le bouillon ({{bouillon}}) à frémissement avec la carotte et les tiges de pak choï et cuire 8 minutes à petit frémissement. Ajouter les vermicelles ({{vermicelles de patate douce cuits}}), le tofu et les feuilles de pak choï pour les 3 dernières minutes. [[casserole; cuisson 11]]",
  "Dressage — Hors du feu, ajouter la sauce soja ({{sauce soja}}) et l'huile de sésame grillé ({{huile de sésame grillé}}), verser dans le grand bol tiède et finir de coriandre ciselée ({{coriandre}}). [[ciseler; dresser x3]]"],
 tip:"Un bouillon qui frémit à peine reste limpide ; les vermicelles déjà cuits n'ont qu'à se réchauffer."}),

RC({id:"n-t-agedashi-dashi", n:"Tofu tendre dans son dashi ambré façon agedashi, sans huile chaude, carotte & épinards fondants, riz tiède", cat:"Tofu", st:"Vapeur Bamboo", base:"Riz", d:2,
 ing:[["tofu ferme",90,"g"],["farine de sarrasin",5,"g"],["riz cuit",140,"g"],["carotte",100,"g"],["épinards",70,"g"],["eau",250,"ml"],["kombu",2,"g"],["sauce soja",1,"c. à café"],["sirop d'érable",1,"c. à café"],["huile de sésame grillé",1,"c. à café"],["ciboulette","",HERBS]],
 steps:[
  intro("une casserole, un petit bol, une planche et un couteau, du papier absorbant, un bol creux tiède"),
  "Mise en place — Éplucher la carotte ({{carotte}}) et la couper en bâtonnets de 5 cm. Laver les épinards ({{épinards}}). Éponger le tofu ({{tofu ferme}}) et le couper en 4 cubes de 3 cm. [[sortir; eplucher carotte; couper carotte; laver epinards; presser tofu; couper tofu]]",
  c1(20, "les bâtonnets de carotte", "Ils s'écrasent sous la pointe d'un couteau."),
  "Le dashi — Pendant ce temps, verser l'eau ({{eau}}) dans la casserole avec le kombu ({{kombu}}) essuyé d'un linge humide et chauffer à feu doux 8 minutes, jusqu'aux premiers frémissements. Retirer le kombu avant l'ébullition (il devient amer), ajouter la sauce soja ({{sauce soja}}) et le sirop d'érable ({{sirop d'érable}}), puis garder tiède hors du feu. Repère : un bouillon ambré, à l'odeur de mer douce. [[// casserole; cuisson 8]]",
  "La peau veloutée — Rouler les cubes de tofu dans la farine de sarrasin ({{farine de sarrasin}}) en secouant l'excédent : elle forme une pellicule très fine qui accrochera le dashi. [[// former x4]]",
  c2(15, "le tofu fariné, les épinards et le riz ({{riz cuit}}) mouillé d'une cuillère d'eau " + bol, "Le tofu est chaud à cœur, sa pellicule est devenue veloutée ; les épinards s'affaissent."),
  "Dressage — Dans un bol creux tiède, poser les cubes de tofu, verser le dashi tiède autour sans les noyer, ajouter les carottes et les épinards pressés, un filet d'huile de sésame grillé ({{huile de sésame grillé}}) et les pointes vertes de ciboulette ({{ciboulette}}) ciselées ; servir le riz à côté. [[presser epinards; ciseler; verser; dresser x4]]"],
 tip:"Le tofu fariné puis cuit à la vapeur prend une peau veloutée qui accroche le dashi : on retrouve le contraste d'un tofu croustillant, sans huile chaude."}),

RC({id:"n-t-tofu-laque-potimarron", n:"Tofu laqué soja-érable à la vapeur, purée soyeuse de potimarron & épinards au sésame", cat:"Tofu", st:"Vapeur Bamboo", base:"Pommes de terre", d:2,
 ing:[["tofu ferme",90,"g"],["pommes de terre",130,"g"],["potimarron",120,"g"],["épinards",60,"g"],["sauce soja",1,"c. à café"],["sirop d'érable",1,"c. à café"],["lait de riz",30,"ml"],["huile d'olive",1,"c. à café"],["graines de sésame",1,"c. à café"]],
 steps:[
  intro("une petite casserole, un petit bol, une planche et un couteau, un économe, du papier absorbant, un presse-purée, une assiette creuse tiède"),
  "Mise en place — Éplucher les pommes de terre ({{pommes de terre}}), les couper en cubes de 3 cm. Éplucher le potimarron ({{potimarron}}), retirer les graines et le couper en cubes de 2 cm. Laver les épinards ({{épinards}}). Éponger le tofu ({{tofu ferme}}) et le couper en 4 tranches de 1,5 cm. [[sortir; eplucher pommes de terre; couper pommes de terre; eplucher potimarron; couper potimarron; laver epinards; presser tofu; couper tofu]]",
  c1(25, "les pommes de terre et le potimarron", "Les cubes s'écrasent sans résistance."),
  "La marinade — Pendant ce temps, mélanger la sauce soja ({{sauce soja}}), le sirop d'érable ({{sirop d'érable}}) et 2 cuillères à soupe d'eau dans le petit bol, y poser les tranches de tofu et les laisser 10 minutes en les retournant une fois : un tofu éponge boit la marinade. [[// delayer; attente 10]]",
  c2(10, "les tranches de tofu égouttées et les épinards", "Le tofu est chaud, les épinards s'affaissent."),
  "La laque — Chauffer la marinade restante 2 minutes à feu doux dans la petite casserole jusqu'à un sirop léger, y rouler le tofu 30 secondes, hors du feu. [[casserole; cuisson 2]]",
  "La purée — Écraser pommes de terre et potimarron au presse-purée avec le lait de riz ({{lait de riz}}) tiédi et l'huile d'olive crue ({{huile d'olive}}) : une purée orange, soyeuse et brillante. [[ecraser]]",
  "Dressage — Purée en nid dans l'assiette creuse tiède, tranches de tofu laqué en éventail, épinards pressés à côté et sésame ({{graines de sésame}}) en pluie. [[presser epinards; dresser x3]]"],
 tip:"Mariner le tofu éponge avant de le laquer : il boit le soja et l'érable au lieu de les laisser couler."}),

RC({id:"n-t-tofu-miso-courgette", n:"Tofu mijoté au miso doux, courgette & carotte fondantes, riz tiède au sésame", cat:"Tofu", st:"Cocon & purées", base:"Riz", d:1,
 ing:[["tofu ferme",90,"g"],["courgette",60,"g"],["carotte",100,"g"],["riz cuit",140,"g"],["eau",150,"ml"],["farine de sarrasin",5,"g"],["miso blanc",1,"c. à café"],["sirop d'érable",0.5,"c. à café"],["huile de sésame grillé",1,"c. à café"],["graines de sésame",1,"c. à café"]],
 steps:[
  introPoele("une casserole à couvercle, un fouet, une planche et un couteau, un économe, du papier absorbant, un bol large tiède"),
  "Mise en place — Éplucher la carotte ({{carotte}}) et la courgette ({{courgette}}), couper la carotte en demi-rondelles de 5 mm et la courgette en petits dés. Éponger le tofu ({{tofu ferme}}) et le couper en dés de 2 cm. [[sortir; eplucher carotte; couper carotte; eplucher courgette; couper courgette; presser tofu; couper tofu]]",
  "Le mijotage — Porter l'eau ({{eau}}) à frémissement dans la casserole, ajouter la carotte et cuire 6 minutes couvert, puis le tofu et la courgette 4 minutes. Repère : le bouillon fume à peine, il ne bout jamais. Contrôle : la carotte s'écrase sous la cuillère. [[casserole; cuisson 10]]",
  "Le riz — Pendant ce temps, réchauffer le riz cuit ({{riz cuit}}) avec une cuillère d'eau 3 minutes dans une petite casserole couverte. [[// rechauffer; cuisson 3]]",
  "La sauce — Délayer la farine de sarrasin ({{farine de sarrasin}}) dans une louche de bouillon froid, la verser dans la casserole et laisser épaissir 2 minutes à feu très doux. Hors du feu, délayer le miso ({{miso blanc}}) avec le sirop d'érable ({{sirop d'érable}}) dans une louche de sauce tiède, puis remettre : le miso ne doit jamais bouillir. Une sauce brune et nappante, comme une béchamel. [[delayer; cuisson 2]]",
  "Dressage — Riz dans le bol tiède, tofu et légumes avec leur sauce par-dessus, un filet d'huile de sésame grillé ({{huile de sésame grillé}}) et du sésame ({{graines de sésame}}). [[dresser x3]]"],
 tip:"Le miso délayé hors du feu garde tout son parfum ; la farine de sarrasin donne à la sauce un corps de béchamel sans beurre."}),

RC({id:"n-t-galette-courgette-tofu", n:"Galette moelleuse façon okonomiyaki à la vapeur : tofu, courgette, carotte & épinards, laque soja-érable", cat:"Tofu", st:"Vapeur Bamboo", base:"Sarrasin", d:2,
 ing:[["tofu ferme",90,"g"],["pommes de terre",130,"g"],["farine de sarrasin",15,"g"],["eau",40,"ml"],["courgette",60,"g"],["carotte",60,"g"],["épinards",40,"g"],["sauce soja",1,"c. à café"],["sirop d'érable",1,"c. à café"],["huile de sésame grillé",1,"c. à café"],["ciboulette","",HERBS]],
 steps:[
  intro("un grand bol, un fouet, une râpe fine, un bol creux ou un ramequin de 14 cm résistant à la vapeur, une petite casserole, du papier absorbant, une assiette tiède"),
  "Mise en place — Éplucher les pommes de terre ({{pommes de terre}}), la courgette ({{courgette}}) et la carotte ({{carotte}}), puis les râper finement et presser le tout dans un linge propre pour chasser l'eau. Laver les épinards ({{épinards}}) et les couper en rubans. Éponger le tofu ({{tofu ferme}}) et l'écraser à la fourchette. [[sortir; eplucher pommes de terre; eplucher courgette; eplucher carotte; raper pommes de terre; raper courgette; raper carotte; presser pommes de terre; laver epinards; couper epinards; presser tofu; ecraser]]",
  "La pâte — Fouetter la farine de sarrasin ({{farine de sarrasin}}) et l'eau ({{eau}}) en une pâte lisse, ajouter le tofu écrasé, les pommes de terre et les légumes râpés et la ciboulette ({{ciboulette}}) ciselée. Elle doit être épaisse et se tenir à la cuillère. Chemiser le bol de papier sulfurisé, y tasser la pâte sur 2 cm et couvrir d'un papier sulfurisé. [[delayer; ciseler; former]]",
  c1(25, "le bol de pâte", "Une lame plantée au centre ressort propre et le dessus est ferme au toucher."),
  "La laque — Pendant ce temps, chauffer la sauce soja ({{sauce soja}}), le sirop d'érable ({{sirop d'érable}}) et 2 cuillères à soupe d'eau 2 minutes à feu doux, jusqu'à un sirop léger. [[// casserole; cuisson 2]]",
  "Dressage — Laisser reposer la galette 5 minutes, la démouler, la couper en quartiers, napper de laque et finir d'un filet d'huile de sésame grillé ({{huile de sésame grillé}}). [[attente 5; couper; trancher; dresser x2]]"],
 tip:"La vapeur remplace la plaque : la galette reste moelleuse comme un flan et la laque lui donne l'éclat que la dorure lui donnerait."}),

RC({id:"n-t-ragout-potimarron-tofu", n:"Ragoût fondant de potimarron, tofu & épinards au thym, quinoa tiède", cat:"Tofu", st:"Cocon & purées", base:"Quinoa", d:1,
 ing:[["tofu ferme",90,"g"],["potimarron",120,"g"],["épinards",60,"g"],["quinoa cuit",140,"g"],["bouillon",150,"ml"],["thym","",HERBS],["huile d'olive",1,"c. à café"],["sel","","1 pincée"]],
 steps:[
  introPoele("une casserole à couvercle, une cuillère en bois, une planche et un couteau, un économe, du papier absorbant, une assiette creuse tiède"),
  "Mise en place — Couper le potimarron ({{potimarron}}) en quartiers, retirer les graines, l'éplucher et le couper en cubes de 2 cm. Laver les épinards ({{épinards}}). Éponger le tofu ({{tofu ferme}}) et le couper en dés de 2 cm. [[sortir; eplucher potimarron; couper potimarron; laver epinards; presser tofu; couper tofu]]",
  "Le mijotage — Verser le bouillon ({{bouillon}}) dans la casserole avec le thym ({{thym}}) effeuillé et le potimarron, couvrir et cuire à feu doux 15 minutes. Repère : une odeur sucrée de courge monte, le bouillon frémit à peine. Contrôle : les cubes s'écrasent à la cuillère. [[casserole; cuisson 15]]",
  "Le fondant — Écraser la moitié du potimarron contre la paroi : le jus épaissit en une sauce orange et soyeuse. Ajouter le tofu 5 minutes, puis les épinards 3 minutes, à feu doux et couvert. [[ecraser; cuisson 8]]",
  "Le quinoa — Réchauffer le quinoa cuit ({{quinoa cuit}}) avec une cuillère d'eau 3 minutes dans une petite casserole couverte. [[rechauffer; cuisson 3]]",
  "Dressage — Quinoa au fond de l'assiette creuse tiède, ragoût dessus, un filet d'huile d'olive crue ({{huile d'olive}}) et une pincée de sel. [[assaisonner; dresser x3]]"],
 tip:"Le potimarron mijote dans son jus jusqu'à devenir sa propre sauce : aucune crème nécessaire, tout est dans la douceur de la cuisson."}),

RC({id:"n-t-croquettes-okara-aneth", n:"Croquettes tendres d'okara & de pommes de terre à la vapeur, crème d'aneth, carotte & épinards fondants", cat:"Okara & douceurs", st:"Vapeur Bamboo", base:"Pommes de terre", d:2,
 ing:[["pommes de terre",130,"g"],["tofu ferme",90,"g"],["okara d'amande",40,"g"],["farine de sarrasin",5,"g"],["carotte",100,"g"],["épinards",60,"g"],["crème de soja",30,"g"],["aneth","",HERBS],["huile d'olive",1,"c. à café"],["sel","","1 pincée"]],
 steps:[
  intro("un presse-purée, un bol, une assiette, une planche et un couteau, un économe, du papier absorbant, une assiette creuse tiède"),
  "Mise en place — Éplucher les pommes de terre ({{pommes de terre}}) et les couper en cubes de 3 cm. Éplucher la carotte ({{carotte}}) et la couper en bâtonnets. Laver les épinards ({{épinards}}). Éponger le tofu ({{tofu ferme}}). [[sortir; eplucher pommes de terre; couper pommes de terre; eplucher carotte; couper carotte; laver epinards; presser tofu]]",
  c1(25, "les pommes de terre et les carottes", "Les cubes s'écrasent sans résistance."),
  "La pâte — Écraser les pommes de terre cuites avec le tofu émietté, l'okara ({{okara d'amande}}) et une pincée de sel. Façonner 6 petites croquettes de 40 g et les rouler dans la farine de sarrasin ({{farine de sarrasin}}) étalée sur une assiette. [[ecraser; former x6]]",
  c2(12, "les croquettes sur papier sulfurisé percé et les épinards", "La surface devient mate et veloutée, la croquette se tient : ni huile chaude ni panure."),
  "La crème d'aneth — Mélanger la crème de soja ({{crème de soja}}), l'aneth ({{aneth}}) ciselé et l'huile d'olive crue ({{huile d'olive}}) dans un petit bol. [[delayer; ciseler]]",
  "Dressage — Croquettes en ligne dans l'assiette creuse tiède, carottes et épinards pressés à côté, crème d'aneth en filet. [[presser epinards; dresser x4]]"],
 tip:"La farine de sarrasin donne à la croquette une surface fine et veloutée : on garde le contraste extérieur-intérieur sans une goutte d'huile chaude."}),

RC({id:"s-bol-tofu-laque-carotte", n:"Bol de riz, tofu laqué soja-érable, carotte & épinards fondants", cat:"Tofu", st:"Vapeur Bamboo", base:"Riz", d:1,
 ing:[["tofu ferme",90,"g"],["riz cuit",140,"g"],["carotte",100,"g"],["épinards",70,"g"],["sauce soja",1,"c. à café"],["sirop d'érable",1,"c. à café"],["huile de sésame grillé",1,"c. à café"],["graines de sésame",1,"c. à café"]],
 steps:[
  intro("une planche et un couteau, un économe, du papier absorbant, un petit bol, un bol large tiède"),
  "Mise en place — Éplucher la carotte ({{carotte}}) et la couper en bâtonnets. Laver les épinards ({{épinards}}). Éponger le tofu ({{tofu ferme}}) et le couper en 4 tranches. Dans le petit bol, mélanger la sauce soja ({{sauce soja}}), le sirop d'érable ({{sirop d'érable}}) et 2 cuillères d'eau, puis y poser le tofu. [[sortir; eplucher carotte; couper carotte; laver epinards; presser tofu; couper tofu; delayer]]",
  c1(20, "les carottes, le tofu égoutté, les épinards et le riz ({{riz cuit}}) mouillé d'une cuillère d'eau " + bol, "Tout est tendre et tiède."),
  "Dressage — Riz dans le bol, tofu et légumes dessus, marinade restante en filet, huile de sésame grillé ({{huile de sésame grillé}}) et sésame ({{graines de sésame}}). [[presser epinards; dresser x4]]"],
 tip:"Un seul cycle vapeur pour tout le repas : le tofu mariné prend le goût de la laque pendant que le reste cuit."}),

RC({id:"s-bol-tofu-potimarron-miso", n:"Bol de riz, tofu vapeur, potimarron fondant & sauce miso-sésame", cat:"Tofu", st:"Vapeur Bamboo", base:"Riz", d:1,
 ing:[["tofu ferme",90,"g"],["riz cuit",140,"g"],["potimarron",130,"g"],["épinards",50,"g"],["miso blanc",1,"c. à café"],["huile de sésame grillé",1,"c. à café"],["graines de sésame",1,"c. à café"]],
 steps:[
  intro("une planche et un couteau, un économe, du papier absorbant, un petit bol, un bol large tiède"),
  "Mise en place — Éplucher le potimarron ({{potimarron}}), retirer les graines et le couper en cubes de 2 cm. Laver les épinards ({{épinards}}). Éponger le tofu ({{tofu ferme}}) et le couper en dés. [[sortir; eplucher potimarron; couper potimarron; laver epinards; presser tofu; couper tofu]]",
  c1(20, "le potimarron, le tofu, les épinards et le riz ({{riz cuit}}) mouillé d'une cuillère d'eau " + bol, "Le potimarron s'écrase sous la pointe d'un couteau."),
  "La sauce — Hors du feu, délayer le miso ({{miso blanc}}) dans 2 cuillères d'eau tiède, puis ajouter l'huile de sésame grillé ({{huile de sésame grillé}}). Le miso ne doit jamais bouillir. [[delayer]]",
  "Dressage — Riz dans le bol, tofu, potimarron et épinards pressés dessus, sauce en filet et sésame ({{graines de sésame}}). [[presser epinards; dresser x4]]"],
 tip:"Le potimarron cuit à la vapeur devient sucré et se marie au miso comme une sauce toute faite."}),

RC({id:"s-quinoa-tofu-basilic", n:"Quinoa tiède, tofu vapeur, carotte & courgette fondantes, huile verte au basilic", cat:"Tofu", st:"Vapeur Bamboo", base:"Quinoa", d:1,
 ing:[["tofu ferme",90,"g"],["quinoa cuit",140,"g"],["carotte",100,"g"],["courgette",60,"g"],["basilic","",HERBS],["huile d'olive",1,"c. à café"],["sel","","1 pincée"]],
 steps:[
  intro("une planche et un couteau, un économe, du papier absorbant, un petit bol, une assiette creuse tiède"),
  "Mise en place — Éplucher la carotte ({{carotte}}) et la courgette ({{courgette}}), couper la carotte en bâtonnets et la courgette en demi-rondelles. Éponger le tofu ({{tofu ferme}}) et le couper en dés. [[sortir; eplucher carotte; couper carotte; eplucher courgette; couper courgette; presser tofu; couper tofu]]",
  c1(20, "les carottes, la courgette, le tofu et le quinoa ({{quinoa cuit}}) mouillé d'une cuillère d'eau " + bol, "Les légumes sont tendres, le tofu est chaud."),
  "L'huile verte — Ciseler le basilic ({{basilic}}) très finement et le mélanger dans le petit bol à l'huile d'olive crue ({{huile d'olive}}) et une pincée de sel. [[ciseler; delayer]]",
  "Dressage — Quinoa dans l'assiette, tofu et légumes dessus, huile au basilic en filet. [[dresser x3]]"],
 tip:"Le basilic ne cuit jamais : mélangé à l'huile crue, il garde tout son parfum."}),

RC({id:"s-soupe-riz-tofu-nori", n:"Soupe-repas express : riz, tofu, épinards & carotte, nori et huile de sésame", cat:"Tofu", st:"Cocon & purées", base:"Riz", d:1,
 ing:[["tofu ferme",90,"g"],["riz cuit",140,"g"],["épinards",100,"g"],["carotte",70,"g"],["bouillon",300,"ml"],["nori",1,"pièce"],["sauce soja",0.5,"c. à café"],["huile de sésame grillé",1,"c. à café"]],
 steps:[
  introPoele("une casserole à couvercle, une planche et un couteau, un économe, du papier absorbant, un bol profond tiède"),
  "Mise en place — Éplucher la carotte ({{carotte}}) et la couper en fines demi-rondelles. Laver les épinards ({{épinards}}). Éponger le tofu ({{tofu ferme}}) et le couper en dés. [[sortir; eplucher carotte; couper carotte; laver epinards; presser tofu; couper tofu]]",
  "La soupe — Porter le bouillon ({{bouillon}}) à frémissement dans la casserole, cuire la carotte 6 minutes, puis ajouter le tofu et le riz ({{riz cuit}}) 4 minutes, et les épinards pour les 2 dernières minutes. Le bouillon fume à peine, il ne bout jamais. [[casserole; cuisson 12]]",
  "Dressage — Verser dans le bol profond tiède, émietter le nori ({{nori}}) dessus, ajouter la sauce soja ({{sauce soja}}) et un filet d'huile de sésame grillé ({{huile de sésame grillé}}). [[assaisonner; dresser x3]]"],
 tip:"Le nori, émietté au dernier moment, parfume tout le bol : il remplace le sel."}),

RC({id:"s-quinoa-tofu-thym-potimarron", n:"Quinoa tiède, tofu au thym, potimarron écrasé à l'huile d'olive & épinards", cat:"Tofu", st:"Vapeur Bamboo", base:"Quinoa", d:1,
 ing:[["tofu ferme",90,"g"],["quinoa cuit",140,"g"],["potimarron",130,"g"],["épinards",50,"g"],["thym","",HERBS],["huile d'olive",1,"c. à café"],["sel","","1 pincée"]],
 steps:[
  intro("une planche et un couteau, un économe, du papier absorbant, une fourchette, une assiette creuse tiède"),
  "Mise en place — Éplucher le potimarron ({{potimarron}}), retirer les graines et le couper en cubes de 2 cm. Laver les épinards ({{épinards}}). Éponger le tofu ({{tofu ferme}}) et le couper en dés. [[sortir; eplucher potimarron; couper potimarron; laver epinards; presser tofu; couper tofu]]",
  c1(20, "le potimarron, le tofu parsemé de thym ({{thym}}) effeuillé, les épinards et le quinoa ({{quinoa cuit}}) mouillé d'une cuillère d'eau " + bol, "Le potimarron s'écrase sans résistance."),
  "Le potimarron écrasé — Écraser la moitié du potimarron à la fourchette avec l'huile d'olive crue ({{huile d'olive}}) et une pincée de sel : une purée rustique et brillante. [[ecraser; assaisonner]]",
  "Dressage — Quinoa dans l'assiette, potimarron écrasé et cubes entiers, tofu au thym et épinards pressés. [[presser epinards; dresser x4]]"],
 tip:"Garder la moitié du potimarron en cubes : on a à la fois le fondant de la purée et la tenue du morceau."}),

RC({id:"s-riz-tofu-pakchoi-sesame", n:"Riz tiède, tofu vapeur, pak choï & carotte, sauce soja-sésame à la ciboulette", cat:"Tofu", st:"Vapeur Bamboo", base:"Riz", d:1,
 ing:[["tofu ferme",90,"g"],["riz cuit",140,"g"],["pak choï",70,"g"],["carotte",100,"g"],["sauce soja",1,"c. à café"],["huile de sésame grillé",1,"c. à café"],["graines de sésame",1,"c. à café"],["ciboulette","",HERBS]],
 steps:[
  intro("une planche et un couteau, un économe, du papier absorbant, un petit bol, un bol large tiède"),
  "Mise en place — Éplucher la carotte ({{carotte}}) et la couper en bâtonnets. Laver le pak choï ({{pak choï}}) et le couper en tronçons de 3 cm. Éponger le tofu ({{tofu ferme}}) et le couper en dés. [[sortir; eplucher carotte; couper carotte; laver pak choi; couper pak choi; presser tofu; couper tofu]]",
  c1(20, "les carottes, le pak choï, le tofu et le riz ({{riz cuit}}) mouillé d'une cuillère d'eau " + bol, "Les tiges du pak choï sont tendres."),
  "La sauce — Dans le petit bol, mélanger la sauce soja ({{sauce soja}}), l'huile de sésame grillé ({{huile de sésame grillé}}), 2 cuillères d'eau tiède et les pointes vertes de ciboulette ({{ciboulette}}) ciselées. [[delayer; ciseler]]",
  "Dressage — Riz dans le bol, tofu et légumes dessus, sauce en filet et sésame ({{graines de sésame}}). [[dresser x4]]"],
 tip:"Un bol complet en un seul cycle de vapeur : il n'y a qu'une sauce à préparer pendant la cuisson."}),

RC({id:"s-riz-tofu-brocoli-aneth", n:"Riz tiède, tofu vapeur, brocoli & carotte fondants, crème de soja à l'aneth", cat:"Tofu", st:"Vapeur Bamboo", base:"Riz", d:1,
 ing:[["tofu ferme",90,"g"],["riz cuit",140,"g"],["brocoli",100,"g"],["carotte",70,"g"],["crème de soja",30,"g"],["aneth","",HERBS],["huile d'olive",1,"c. à café"]],
 steps:[
  intro("une planche et un couteau, un économe, du papier absorbant, un petit bol, une assiette creuse tiède"),
  "Mise en place — Éplucher la carotte ({{carotte}}) et la couper en bâtonnets. Couper uniquement les têtes du brocoli ({{brocoli}}) en petits bouquets. Éponger le tofu ({{tofu ferme}}) et le couper en dés. [[sortir; eplucher carotte; couper carotte; couper brocoli; presser tofu; couper tofu]]",
  c1(20, "les carottes, les bouquets de brocoli, le tofu et le riz ({{riz cuit}}) mouillé d'une cuillère d'eau " + bol, "Le brocoli est tendre, d'un vert vif."),
  "La crème — Mélanger dans le petit bol la crème de soja ({{crème de soja}}), l'aneth ({{aneth}}) ciselé et l'huile d'olive crue ({{huile d'olive}}). [[ciseler; delayer]]",
  "Dressage — Riz dans l'assiette, tofu et légumes dessus, crème d'aneth en filet. [[dresser x3]]"],
 tip:"Les têtes de brocoli seulement : les tiges sont plus fibreuses et plus dures à digérer."}),

RC({id:"s-quinoa-tofu-blettes-persil", n:"Quinoa tiède, tofu vapeur, blettes & carotte fondantes, huile au persil", cat:"Tofu", st:"Vapeur Bamboo", base:"Quinoa", d:1,
 ing:[["tofu ferme",90,"g"],["quinoa cuit",140,"g"],["blettes",70,"g"],["carotte",100,"g"],["persil","",HERBS],["huile d'olive",1,"c. à café"],["sel","","1 pincée"]],
 steps:[
  intro("une planche et un couteau, un économe, du papier absorbant, un petit bol, une assiette creuse tiède"),
  "Mise en place — Éplucher la carotte ({{carotte}}) et la couper en bâtonnets. Laver les blettes ({{blettes}}), éplucher les fils des côtes et couper côtes et feuilles en tronçons de 3 cm. Éponger le tofu ({{tofu ferme}}) et le couper en dés. [[sortir; eplucher carotte; couper carotte; laver blettes; eplucher blettes; couper blettes; presser tofu; couper tofu]]",
  c1(20, "les carottes, les blettes, le tofu et le quinoa ({{quinoa cuit}}) mouillé d'une cuillère d'eau " + bol, "Les côtes de blettes sont tendres."),
  "L'huile au persil — Ciseler le persil ({{persil}}) et le mélanger dans le petit bol à l'huile d'olive crue ({{huile d'olive}}) et une pincée de sel. [[ciseler; delayer]]",
  "Dressage — Quinoa dans l'assiette, tofu et légumes dessus, huile au persil en filet. [[dresser x3]]"],
 tip:"Éplucher les fils des côtes de blettes avant la cuisson : elles deviennent aussi fondantes que les feuilles."})
);
