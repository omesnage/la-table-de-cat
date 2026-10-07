/* ============ DÉJEUNERS ET DÎNERS : POULET (4 recettes) & ŒUFS (6 recettes) ============
   Féculent 120-150 g cuits, protéine solide 80-100 g (œuf compté 50 g), légumes cuits 150-200 g, 1 c. à café d'huile à cru.
   Le riz et le quinoa « cuits » sont préparés à l'avance au Bamboo (WHITE 35 min, QUICK COOK) : ce temps n'est pas compté.
   Catalogue v10 : le goût vient des bouillons infusés (kombu, thym), des laques douces soja-érable, du miso délayé hors du feu,
   des herbes ciselées au dernier moment et des textures (velouté, flan, purée, effiloché) plutôt que de la dorure. */
const LUNCH = [];
LUNCH.push(
/* ---------- poulet ---------- */
RC({id:"n-c-poulet-hainanais", n:"Poulet poché façon hainanais : riz au bouillon de kombu, épinards & crème de sésame à la ciboulette", cat:"Poulet", st:"Cocon & purées", base:"Riz", d:2,
 ing:[["blanc de poulet",90,"g"],["riz cuit",140,"g"],["carotte",90,"g"],["épinards",70,"g"],["bouillon",500,"ml"],["kombu",2,"g"],["sauce soja",1,"c. à café"],["huile de sésame grillé",1,"c. à café"],["graines de sésame",1,"c. à café"],["ciboulette","",HERBS]],
 steps:[
  introPoele("une casserole avec couvercle, une écumoire, une louche, un petit bol et une cuillère pour écraser le sésame, un économe, une planche et un couteau, une assiette creuse tiède. Le riz basmati est cuit la veille au Bamboo (programme WHITE, 35 minutes)"),
  "Mise en place — Sortir le blanc de poulet ({{blanc de poulet}}) 15 minutes à l'avance et ôter la peau et le gras. Éplucher la carotte ({{carotte}}) et la couper en bâtonnets de 5 cm. Laver les épinards ({{épinards}}). Essuyer le kombu ({{kombu}}) avec un linge humide sans le laver : la poudre blanche en surface, c'est le goût. [[sortir; eplucher carotte; couper carotte; laver epinards]]",
  "Le bouillon de kombu — Verser le bouillon ({{bouillon}}) dans la casserole, y poser le kombu et chauffer à feu doux 8 minutes, jusqu'aux premiers petits frémissements. Retirer le kombu avant l'ébullition : il deviendrait amer. Le bouillon est légèrement ambré et sent la mer douce. [[casserole; cuisson 8]]",
  "Le pochage — Plonger le poulet et les bâtonnets de carotte dans le bouillon à peine frémissant, couvrir, couper le feu et laisser pocher 20 minutes sans soulever le couvercle. Contrôle : la chair est blanche à cœur, le jus qui s'écoule est clair et le poulet est tendre comme un blanc de volaille de ferme. [[cuisson 20]]",
  "Les épinards — Sortir le poulet et la carotte à l'écumoire, les garder sous un couvercle. Plonger les épinards dans le bouillon chaud 2 minutes, les égoutter et les presser doucement. [[cuisson 2; presser epinards]]",
  "La crème de sésame — Écraser les graines de sésame ({{graines de sésame}}) au mortier ou au fond d'un bol, y délayer la sauce soja ({{sauce soja}}), l'huile de sésame grillé ({{huile de sésame grillé}}), 3 cuillères à soupe de bouillon tiède et les pointes vertes de ciboulette ({{ciboulette}}) ciselées : une sauce parfumée qui remplace la sauce traditionnelle. [[ecraser; ciseler; delayer]]",
  "Le riz parfumé — Chauffer le riz cuit ({{riz cuit}}) 3 minutes dans une louche de bouillon de cuisson, à feu doux et à couvert : il boit le bouillon de poulet et devient brillant. [[casserole; cuisson 3]]",
  "Dressage — Trancher le poulet en biais en lamelles de 5 mm. Dresser le riz en dôme dans l'assiette creuse tiède, poser les lamelles en éventail, la carotte et les épinards à côté, la crème de sésame en filet. Servir avec une petite tasse de bouillon tiède. [[trancher; dresser x4]]"],
 tip:"Poché hors du feu, le poulet reste très tendre ; le riz réchauffé dans son bouillon et la crème de sésame font tout le goût de ce plat."}),

RC({id:"n-c-blanquette-poulet", n:"Blanquette douce de poulet : carottes & courgette fondantes, velouté à la crème de soja & estragon, pommes de terre tendres", cat:"Poulet", st:"Cocon & purées", base:"Pommes de terre", d:2,
 ing:[["blanc de poulet",90,"g"],["pommes de terre",140,"g"],["farine de sarrasin",5,"g"],["carotte",90,"g"],["courgette épluchée",60,"g"],["bouillon",350,"ml"],["crème de soja",1,"c. à soupe"],["huile d'olive",1,"c. à café"],["estragon","",HERBS],["thym","",HERBS]],
 steps:[
  introPoele("une casserole large avec couvercle, une écumoire, un fouet, un économe, une planche et un couteau, un presse-purée, une assiette creuse tiède"),
  "Mise en place — Éplucher les pommes de terre ({{pommes de terre}}) et la carotte ({{carotte}}) et les couper en cubes et en rondelles de 2 cm. Éplucher entièrement la courgette ({{courgette épluchée}}), sans laisser de vert, et la couper en demi-rondelles. Ôter la peau et le gras du blanc de poulet ({{blanc de poulet}}) et le couper en cubes de 3 cm. [[sortir; eplucher pommes de terre; couper pommes de terre; eplucher carotte; couper carotte; eplucher courgette; couper courgette; couper blanc de poulet]]",
  "Le pochage — Porter le bouillon ({{bouillon}}) à frémissement avec le thym ({{thym}}). Cuire pommes de terre et carotte 12 minutes, ajouter le poulet pour 8 minutes, puis la courgette pour les 3 dernières minutes. Égoutter à l'écumoire en gardant le bouillon. Repère : le bouillon ne bout jamais, le poulet reste blanc et lisse. [[casserole; cuisson 23]]",
  "Le velouté — Délayer la farine de sarrasin ({{farine de sarrasin}}) à froid dans 4 cuillères à soupe de bouillon froid, la verser dans 150 ml de bouillon chaud et fouetter 3 minutes à frémissement jusqu'à une sauce qui nappe la cuillère. Hors du feu, ajouter la crème de soja ({{crème de soja}}) et l'estragon ({{estragon}}) ciselé. [[delayer; ciseler; cuisson 3]]",
  "L'assemblage — Écraser grossièrement la moitié des pommes de terre au presse-purée pour épaissir, puis remettre poulet et légumes dans le velouté 2 minutes à feu très doux, sans bouillir. [[ecraser; cuisson 2]]",
  "Dressage — Verser la blanquette dans l'assiette creuse tiède et terminer d'un filet d'huile d'olive crue ({{huile d'olive}}). [[dresser x3]]"],
 tip:"Une blanquette sans beurre ni jaune d'œuf : le sarrasin lie, la crème de soja arrondit. Une fois la crème ajoutée, la sauce ne doit plus bouillir."}),

RC({id:"n-c-tsukune-soba", n:"Boulettes de poulet vapeur façon tsukune, laque soja-érable, soba tièdes, pak choï & daikon fondants", cat:"Poulet", st:"Vapeur Bamboo", base:"Sarrasin", d:2,
 ing:[["blanc de poulet",90,"g"],["okara d'amande",15,"g"],["ciboulette","",HERBS],["soba cuites",140,"g"],["pak choï",70,"g"],["daikon",90,"g"],["sauce soja",1,"c. à café"],["sirop d'érable",1,"c. à café"],["huile de sésame grillé",1,"c. à café"],["graines de sésame",1,"c. à café"]],
 steps:[
  intro("une planche et un couteau bien affûté, un économe, un bol, une petite casserole pour la laque, une casserole pour les soba, une passoire, un bol large tiède"),
  "Mise en place — Éplucher le daikon ({{daikon}}) et le couper en demi-rondelles de 5 mm. Rincer le pak choï ({{pak choï}}), séparer les tiges et les feuilles. Ôter la peau et le gras du blanc de poulet ({{blanc de poulet}}) et le hacher très finement au couteau (une pâte ni lisse ni granuleuse). Vérifier que les soba sont 100 % sarrasin. [[sortir; eplucher daikon; couper daikon; laver pak choi; couper blanc de poulet]]",
  "Les boulettes — Mélanger le poulet haché à l'okara ({{okara d'amande}}) et aux pointes vertes de ciboulette ({{ciboulette}}) ciselées. Mouiller les mains et former 4 boulettes de 30 g. [[ciseler; former x4]]",
  c1(20, "le daikon et les tiges de pak choï", "Le daikon devient translucide et perd tout piquant."),
  c2(15, "les 4 boulettes directement sur la grille (rien sous la viande) et les feuilles de pak choï sur le papier", "Contrôle : les boulettes sont fermes, d'une teinte uniforme, blanches à cœur."),
  "La laque — Chauffer la sauce soja ({{sauce soja}}), le sirop d'érable ({{sirop d'érable}}) et 2 cuillères à soupe d'eau dans la petite casserole 2 minutes à feu doux, jusqu'à un sirop léger. Y rouler les boulettes 30 secondes, hors du feu. [[// casserole; cuisson 2]]",
  "Les soba — Plonger les soba ({{soba cuites}}) 6 minutes dans l'eau frémissante non salée, les rincer à l'eau tiède et bien les égoutter, puis les huiler d'un filet d'huile de sésame grillé ({{huile de sésame grillé}}). [[// casserole; cuisson 6; rincer; egoutter]]",
  "Dressage — Soba en nid dans le bol large tiède, boulettes laquées au centre, daikon et pak choï autour, graines de sésame ({{graines de sésame}}) en pluie et le reste de laque en filet. [[dresser x4]]"],
 tip:"L'okara d'amande lie et allège : la boulette reste moelleuse après la vapeur, sans œuf ni mie de pain ; la laque donne l'éclat que la dorure donnerait."}),

RC({id:"n-c-poulet-effile-quinoa", n:"Poulet effiloché au bouillon de thym, quinoa tiède, butternut écrasée au sésame & épinards", cat:"Poulet", st:"Fraîcheur tiède", base:"Quinoa", d:1,
 ing:[["blanc de poulet",90,"g"],["quinoa cuit",140,"g"],["butternut",110,"g"],["épinards",60,"g"],["bouillon",300,"ml"],["crème de soja",1,"c. à soupe"],["huile d'olive",1,"c. à café"],["graines de sésame",1,"c. à café"],["thym","",HERBS],["sel","","1 pincée"]],
 steps:[
  intro("une casserole avec couvercle, deux fourchettes, un presse-purée, un petit bol, une planche et un couteau, un économe, un bol large tiède. Le quinoa est cuit la veille au Bamboo (QUICK COOK, 1 volume de quinoa pour 1 volume d'eau)"),
  "Mise en place — Ôter la peau et le gras du blanc de poulet ({{blanc de poulet}}) et le couper en deux dans l'épaisseur. Éplucher la butternut ({{butternut}}), retirer les graines, la couper en cubes de 2 cm. Laver les épinards ({{épinards}}). [[sortir; couper blanc de poulet; eplucher butternut; couper butternut; laver epinards]]",
  "Le poulet au bouillon — Porter le bouillon ({{bouillon}}) à frémissement avec le thym ({{thym}}), y plonger le poulet, couvrir, couper le feu et laisser pocher 18 minutes. Sortir le poulet, l'effilocher à deux fourchettes en fines fibres et le garder dans 4 cuillères de son bouillon pour qu'il reste juteux. [[casserole; cuisson 18; effilocher]]",
  c1(20, "la butternut", "Elle s'écrase à la fourchette."),
  c2(15, "les épinards et le quinoa ({{quinoa cuit}}) mouillé d'une cuillère d'eau " + bol, "Les épinards s'affaissent (15 minutes, guide du fabricant)."),
  "La butternut au sésame — Écraser la butternut avec les graines de sésame ({{graines de sésame}}) et une pincée de sel jusqu'à une purée rustique, orange et parfumée. Mélanger la crème de soja ({{crème de soja}}) avec l'huile d'olive ({{huile d'olive}}) crue dans le petit bol. [[ecraser; delayer; presser epinards]]",
  "Dressage — Quinoa dans le bol large tiède, butternut au sésame à côté, épinards pressés, poulet effiloché au centre avec son bouillon, crème de soja en filet. [[dresser x5]]"],
 tip:"Effiloché dans son propre bouillon de thym, le poulet reste moelleux ; le sésame écrasé donne à la butternut un goût de noisette."}),
/* ---------- œufs ---------- */
RC({id:"n-e-brouillade-pdt", n:"Brouillade crémeuse d'œuf et de tofu soyeux, pommes de terre écrasées à l'huile d'olive & épinards au sésame", cat:"Œufs", st:"Cocon & purées", base:"Pommes de terre", d:2,
 ing:[["œuf",1,"pièce"],["tofu soyeux",50,"g"],["pommes de terre",140,"g"],["épinards",90,"g"],["carotte",60,"g"],["huile d'olive",1,"c. à café"],["graines de sésame",1,"c. à café"],["sel","","1 pincée"]],
 steps:[
  intro("un économe, une planche et un couteau, un presse-purée, un petit bol qui se pose sur une casserole, une casserole, un fouet, une spatule, un mortier ou un bol, une assiette creuse tiède"),
  "Mise en place — Éplucher les pommes de terre ({{pommes de terre}}) et la carotte ({{carotte}}) et les couper en cubes de 2 cm. Laver les épinards ({{épinards}}). [[sortir; eplucher pommes de terre; couper pommes de terre; eplucher carotte; couper carotte; laver epinards]]",
  c1(25, "les pommes de terre et la carotte", "La pointe d'un couteau traverse les cubes sans résistance."),
  c2(5, "les épinards", "Ils s'affaissent et deviennent d'un vert profond."),
  "La brouillade — Dans le petit bol, battre l'œuf ({{œuf}}) avec le tofu soyeux ({{tofu soyeux}}) écrasé et une pincée de sel. Poser le bol sur une casserole d'eau frémissante et remuer sans cesse à la spatule 8 minutes. Repère : de petits grumeaux se forment, puis la masse devient une crème épaisse qui nappe la spatule. Elle reste brillante et humide, sans jamais prendre de couleur. [[battre; casserole; cuisson 8]]",
  "L'écrasé et les épinards — Écraser pommes de terre et carotte au presse-purée avec l'huile d'olive crue ({{huile d'olive}}), jusqu'à une purée rustique. Presser les épinards cuits, les couper, les assaisonner de graines de sésame ({{graines de sésame}}) écrasées. [[ecraser; presser epinards; couper epinards]]",
  "Dressage — Écrasé en nid au centre de l'assiette creuse tiède, brouillade crémeuse par-dessus, épinards à côté. [[dresser x3]]"],
 tip:"Le bain-marie rend l'œuf crémeux sans jamais le colorer, et le tofu soyeux prolonge la douceur comme une crème fraîche."}),

RC({id:"n-e-flan-carotte-riz", n:"Flan de carotte à la vapeur, crème de soja & estragon, dés de tofu et riz tiède", cat:"Œufs", st:"Vapeur Bamboo", base:"Riz", d:2,
 ing:[["œuf",1,"pièce"],["tofu ferme",50,"g"],["riz cuit",140,"g"],["carotte",110,"g"],["épinards",50,"g"],["crème de soja",1,"c. à soupe"],["huile d'olive",1,"c. à café"],["estragon","",HERBS],["sel","","1 pincée"]],
 steps:[
  intro("un économe, une planche et un couteau, un mixeur plongeant, deux ramequins résistant à la vapeur, un torchon propre, un bol pour le riz, une assiette creuse tiède. Le riz basmati est cuit la veille au Bamboo (programme WHITE, 35 minutes)"),
  "Mise en place — Éplucher la carotte ({{carotte}}) et la couper en rondelles de 5 mm. Éponger le tofu ({{tofu ferme}}) dans du papier absorbant et le couper en dés de 1,5 cm. Laver les épinards ({{épinards}}). [[sortir; eplucher carotte; couper carotte; presser tofu; couper tofu; laver epinards]]",
  c1(20, "les rondelles de carotte", "Elles s'écrasent sans résistance."),
  "Le flan — Mixer les carottes cuites avec la crème de soja ({{crème de soja}}), l'œuf ({{œuf}}), l'estragon ({{estragon}}) ciselé et une pincée de sel jusqu'à une crème lisse et orange. Répartir dans les deux ramequins mouillés. [[mixer; ciseler]]",
  c2(20, "les deux ramequins, le tofu, les épinards et le riz cuit ({{riz cuit}}) mouillé d'une cuillère d'eau " + bol + ". Glisser un torchon sous le couvercle pour recueillir la condensation", "Contrôle : les flans tremblent comme une panna cotta et une lame ressort propre."),
  "Dressage — Presser les épinards. Dresser le riz en dôme dans l'assiette creuse tiède, démouler un flan à côté, tofu et épinards autour, filet d'huile d'olive crue ({{huile d'olive}}). [[presser epinards; dresser x4]]"],
 tip:"Le torchon sous le couvercle recueille la condensation : sans lui, des gouttes percent le flan et le trouent."}),

RC({id:"n-e-tortilla-vapeur", n:"Tortilla tendre à la vapeur : pommes de terre, courgette & carotte, ciboulette et tofu écrasé", cat:"Œufs", st:"Vapeur Bamboo", base:"Pommes de terre", d:2,
 ing:[["œuf",1,"pièce"],["tofu ferme",50,"g"],["pommes de terre",140,"g"],["courgette épluchée",60,"g"],["carotte",90,"g"],["huile d'olive",1,"c. à café"],["ciboulette","",HERBS],["sel","","1 pincée"]],
 steps:[
  intro("un économe, une planche et un couteau, un grand bol, un fouet, un bol creux de 14 cm résistant à la vapeur, du papier sulfurisé, une assiette tiède"),
  "Mise en place — Éplucher les pommes de terre ({{pommes de terre}}) et la carotte ({{carotte}}) et les couper en cubes de 2 cm. Éplucher entièrement la courgette ({{courgette épluchée}}), sans laisser de vert, et la couper en petits dés. Éponger le tofu ({{tofu ferme}}). [[sortir; eplucher pommes de terre; couper pommes de terre; eplucher carotte; couper carotte; eplucher courgette; couper courgette; presser tofu]]",
  c1(20, "les pommes de terre, la carotte et la courgette", "Les cubes s'écrasent sans résistance."),
  "Le mélange — Écraser le tofu ferme ({{tofu ferme}}) à la fourchette, y battre l'œuf ({{œuf}}), ajouter pommes de terre, carotte et courgette en gros morceaux, la ciboulette ({{ciboulette}}) ciselée en pointes vertes et une pincée de sel. Le tofu et l'œuf se partagent le liant. [[ecraser; battre; ciseler]]",
  c2(20, "le bol de tortilla, chemisé de papier sulfurisé, tassé et couvert d'un papier sulfurisé", "Contrôle : le dessus est ferme au toucher et une lame ressort propre. Laisser reposer 5 minutes avant de démouler."),
  "Dressage — Démouler sur l'assiette tiède, trancher en parts nettes, napper d'un filet d'huile d'olive crue ({{huile d'olive}}). [[trancher; dresser x2]]"],
 tip:"Pas de poêle, pas d'huile chaude : la vapeur garde la tortilla moelleuse, dense et crémeuse, très proche d'une tortilla espagnole."}),

RC({id:"n-e-donburi-trois-couleurs", n:"Donburi trois couleurs : œuf brouillé crémeux, tofu émietté laqué & épinards au sésame sur riz tiède", cat:"Œufs", st:"Fraîcheur tiède", base:"Riz", d:1,
 ing:[["œuf",1,"pièce"],["tofu ferme",50,"g"],["riz cuit",140,"g"],["épinards",90,"g"],["carotte",60,"g"],["sauce soja",1,"c. à café"],["sirop d'érable",1,"c. à café"],["graines de sésame",1,"c. à café"],["huile de sésame grillé",1,"c. à café"],["ciboulette","",HERBS]],
 steps:[
  intro("un économe, une planche et un couteau, deux petites casseroles, une spatule, un fouet, un mortier ou un bol, un bol large tiède. Le riz basmati est cuit la veille au Bamboo (programme WHITE, 35 minutes)"),
  "Mise en place — Éplucher la carotte ({{carotte}}) et la couper en petits dés. Laver les épinards ({{épinards}}). Éponger le tofu ({{tofu ferme}}) dans du papier absorbant. [[sortir; eplucher carotte; couper carotte; laver epinards; presser tofu]]",
  c1(15, "les dés de carotte et, pour les 3 dernières minutes, les épinards", "Les épinards s'affaissent (15 minutes, guide du fabricant)."),
  "Le tofu laqué — Émietter le tofu à la fourchette. Le chauffer dans une casserole avec la sauce soja ({{sauce soja}}), le sirop d'érable ({{sirop d'érable}}) et 2 cuillères à soupe d'eau, 5 minutes à feu doux, en remuant : les miettes boivent le jus, sans colorer. [[ecraser; casserole; cuisson 5]]",
  "L'œuf brouillé — Battre l'œuf ({{œuf}}) dans un bol, le verser dans la seconde casserole à feu très doux et remuer sans cesse à la spatule 3 minutes jusqu'à de petits grumeaux crémeux. L'œuf reste humide et brillant, jamais sec. [[battre; casserole; cuisson 3]]",
  "Les épinards au sésame — Presser les épinards cuits, les couper grossièrement et les assaisonner de graines de sésame ({{graines de sésame}}) écrasées au mortier. [[presser epinards; couper epinards; ecraser]]",
  "Dressage — Réchauffer le riz ({{riz cuit}}) 3 minutes avec une cuillère d'eau. Le dresser dans le bol large tiède, puis trois bandes bien nettes : tofu laqué, œuf, épinards avec la carotte. Un filet d'huile de sésame grillé ({{huile de sésame grillé}}) et les pointes vertes de ciboulette ({{ciboulette}}) ciselées. [[rechauffer; ciseler; dresser x4]]"],
 tip:"Trois couleurs, trois textures : l'œil mange d'abord. Tout reste tiède, rien n'est coloré à la poêle."}),

RC({id:"n-e-chawanmushi-riz", n:"Chawanmushi au dashi de kombu : flan d'œuf soyeux, épinards & carotte fondants, riz tiède", cat:"Œufs", st:"Vapeur Bamboo", base:"Riz", d:2,
 ing:[["œufs",2,"pièce"],["riz cuit",140,"g"],["carotte",80,"g"],["épinards",70,"g"],["bouillon",250,"ml"],["kombu",2,"g"],["sauce soja",0.5,"c. à café"],["huile de sésame grillé",1,"c. à café"],["ciboulette","",HERBS]],
 steps:[
  intro("une casserole, une passoire fine, un fouet, deux tasses résistant à la vapeur, du papier sulfurisé, un économe, une planche et un couteau, une assiette creuse tiède. Le riz basmati est cuit la veille au Bamboo (programme WHITE, 35 minutes)"),
  "Mise en place — Éplucher la carotte ({{carotte}}) et la couper en fines rondelles. Laver les épinards ({{épinards}}). Essuyer le kombu ({{kombu}}) avec un linge humide. [[sortir; eplucher carotte; couper carotte; laver epinards]]",
  "Le dashi — Chauffer le bouillon ({{bouillon}}) avec le kombu à feu doux 8 minutes, retirer le kombu avant l'ébullition, ajouter la sauce soja ({{sauce soja}}) et laisser tiédir 5 minutes : un œuf versé dans un bouillon chaud coagulerait en filaments. [[casserole; cuisson 8; attente 5]]",
  "Le flan — Battre doucement les œufs ({{œufs}}) pour ne pas faire de mousse, y verser le dashi tiède en filet, mélanger et passer à la passoire fine dans les deux tasses. Couvrir chaque tasse d'un papier sulfurisé. [[battre; egoutter]]",
  c1(15, "les deux tasses couvertes, et en même temps les rondelles de carotte", "Contrôle : le flan est pris mais tremble, le liquide qui s'en échappe en le piquant est clair."),
  c2(5, "les épinards et le riz cuit ({{riz cuit}}) mouillé d'une cuillère d'eau " + bol, "Les épinards sont tendres."),
  "Dressage — Presser les épinards. Poser les tasses sur des assiettes creuses tièdes, le riz et les légumes à côté, un filet d'huile de sésame grillé ({{huile de sésame grillé}}) et la ciboulette ({{ciboulette}}) en pointes vertes ciselées. [[presser epinards; ciseler; dresser x4]]"],
 tip:"Un flan salé tremblant, parfumé au dashi : la finesse d'un plat de restaurant japonais, sans une goutte d'huile chaude."}),

RC({id:"n-e-veloute-carotte-miso", n:"Velouté de carotte au miso doux, œufs mollets & pommes de terre tendres", cat:"Œufs", st:"Cocon & purées", base:"Pommes de terre", d:1,
 ing:[["œufs",2,"pièce"],["pommes de terre",140,"g"],["carotte",170,"g"],["bouillon",250,"ml"],["miso blanc",1,"c. à café"],["huile de sésame grillé",1,"c. à café"],["ciboulette","",HERBS]],
 steps:[
  intro("un économe, une planche et un couteau, un mixeur plongeant, une petite casserole, une écumoire, un bol d'eau froide, un petit bol, une assiette creuse tiède"),
  "Mise en place — Sortir les œufs ({{œufs}}) du frigo 10 minutes avant. Éplucher les pommes de terre ({{pommes de terre}}) et la carotte ({{carotte}}) et les couper en cubes et en rondelles de 2 cm. [[sortir; eplucher pommes de terre; couper pommes de terre; eplucher carotte; couper carotte]]",
  c1(25, "les pommes de terre et les carottes", "La pointe d'un couteau traverse les cubes sans résistance."),
  "Les œufs mollets — Pendant la vapeur : " + OEUF_MOLLET + " [[// casserole; cuisson 7; ecaler oeufs x2]]",
  "Le velouté — Mixer les carottes et la moitié des pommes de terre avec le bouillon ({{bouillon}}) chaud jusqu'à une crème épaisse et lisse. Délayer le miso ({{miso blanc}}) dans une louche de velouté tiède, hors du feu, et le remettre : le miso ne doit jamais bouillir. [[mixer; delayer]]",
  "Dressage — Verser le velouté dans l'assiette creuse tiède, poser le reste des pommes de terre au centre et les œufs mollets coupés en deux dessus. Finir d'un filet d'huile de sésame grillé ({{huile de sésame grillé}}) et de pointes vertes de ciboulette ({{ciboulette}}) ciselées. [[trancher; ciseler; dresser x4]]"],
 tip:"Le sucre naturel de la carotte, rond et profond, s'accorde au miso : le plat réconforte sans aucun assaisonnement agressif."})
);
