/* ============ DÉJEUNERS ET DÎNERS : PROTÉINES TEXTURÉES, OKARA, SARDINES ============
   Protéine de pois texturée ou de soja texturée : 30 g secs par repas (comptés 90 g une fois réhydratés), dans quelques plats seulement.
   La réhydratation (10 minutes dans du bouillon chaud) est comptée dans la durée ; la mise en place se fait pendant ce temps. */
const REHYD = (nom, ref) => "Réhydratation — Chauffer le bouillon ({{bouillon}}) dans une petite casserole jusqu'au frémissement, le verser sur la " + nom + " ({{" + ref + "}}) dans un bol, mélanger et laisser gonfler 10 minutes : elle triple de volume et devient tendre. Presser ensuite légèrement à la cuillère pour retirer le bouillon en trop. [[sortir; casserole; attente 3; verser; attente 10; presser]]";
/* même réhydratation, faite pendant que le cycle vapeur tourne : le temps compte en parallèle */
const REHYD2 = (nom, ref) => "Pendant le cycle — Chauffer le bouillon ({{bouillon}}) dans une petite casserole jusqu'au frémissement, le verser sur la " + nom + " ({{" + ref + "}}) dans un bol, mélanger et laisser gonfler 10 minutes : elle triple de volume et devient tendre. Presser ensuite légèrement à la cuillère pour retirer le bouillon en trop. [[// sortir; casserole; attente 3; verser; attente 10; presser]]";
LUNCH.push(
RC({id:"l-hachis-pois-panais", n:"Hachis de protéine de pois au thym, purée pomme de terre–panais & haricots verts", cat:"Protéines végétales", st:"Cocon & purées", base:"Pommes de terre", d:1,
 ing:[["protéine de pois texturée (sèche)",30,"g"],["bouillon",100,"ml"],["pommes de terre",140,"g"],["panais",80,"g"],["haricots verts",70,"g"],["crème de soja",1,"c. à soupe"],["huile d'olive",1,"c. à café"],["thym","",HERBS],["persil","",HERBS],["sel","","1 pincée"]],
 steps:[
  intro("une petite casserole, un bol, une cuillère, un économe, une planche et un couteau, un presse-purée, un cercle de 10 cm (ou un bol), une assiette creuse tiède"),
  "Mise en place — Éplucher les pommes de terre ({{pommes de terre}}) et le panais ({{panais}}) et les couper en cubes de 2 cm. Peser 70 g de haricots verts ({{haricots verts}}), les équeuter et les couper en tronçons de 3 cm. [[sortir; eplucher pommes de terre; couper pommes de terre; eplucher panais; couper panais; peser haricots verts; couper haricots verts]]",
  c1(25, "les pommes de terre, le panais et les haricots verts", "Les haricots sont mous, les cubes s'écrasent à la fourchette."),
  REHYD2("protéine de pois texturée", "protéine de pois texturée (sèche)"),
  "Le hachis et la purée — Mêler la protéine de pois au thym effeuillé ({{thym}}). Écraser les pommes de terre et le panais au presse-purée avec la crème de soja ({{crème de soja}}), une cuillère d'eau de la cuve et le sel. [[ecraser]]",
  "Dressage — Dans le cercle posé sur l'assiette tiède, tasser le hachis, couvrir de purée lissée à la cuillère, retirer le cercle. Haricots verts autour, huile d'olive crue ({{huile d'olive}}) et persil ciselé ({{persil}}). [[ciseler; dresser x3]]"],
 tip:"Réhydratée dans le bouillon pendant que les légumes cuisent, la protéine de pois est prête sans une minute de plus."}),

RC({id:"l-bol-pois-butternut", n:"Bol de quinoa tiède, protéine de pois au bouillon, butternut & brocoli, sauce persillée", cat:"Protéines végétales", st:"Vapeur Bamboo", base:"Quinoa", d:1,
 ing:[["protéine de pois texturée (sèche)",30,"g"],["bouillon",100,"ml"],["quinoa cuit",140,"g"],["butternut",100,"g"],["brocoli",80,"g"],["huile d'olive",1,"c. à café"],["persil","",HERBS],["sel","","1 pincée"]],
 steps:[
  intro("une petite casserole, un bol, une cuillère, un économe, une planche et un couteau, un petit bol, un bol large tiède"),
  "Mise en place — Éplucher la butternut ({{butternut}}), retirer les graines et la couper en cubes de 2 cm. Détailler les têtes de brocoli ({{brocoli}}) en petits bouquets. [[sortir; eplucher butternut; couper butternut; couper brocoli]]",
  c1(20, "la butternut, le brocoli et le quinoa ({{quinoa cuit}}) mouillé d'une cuillère d'eau " + bol, "La butternut s'écrase à la fourchette et le brocoli est très tendre."),
  REHYD2("protéine de pois texturée", "protéine de pois texturée (sèche)"),
  "La sauce persillée — Mélanger le persil ciselé ({{persil}}), l'huile d'olive crue ({{huile d'olive}}), 2 cuillères d'eau tiède et le sel. [[ciseler; delayer]]",
  "Dressage — Quinoa au fond du bol large tiède, protéine de pois au centre, butternut et brocoli autour, sauce persillée en filet. [[dresser x4]]"],
 tip:"Le bouillon de réhydratation parfume la protéine : choisir un bouillon de légumes doux, sans oignon."}),

RC({id:"l-soja-miso-soba", n:"Soja texturé au miso doux, soba tièdes, épinards & daikon fondants", cat:"Protéines végétales", st:"Fraîcheur tiède", base:"Sarrasin", d:1,
 ing:[["protéine de soja texturée (sèche)",30,"g"],["bouillon",100,"ml"],["soba cuites",140,"g"],["épinards",80,"g"],["daikon",90,"g"],["miso blanc",1,"c. à café"],["huile de sésame grillé",1,"c. à café"],["graines de sésame",1,"c. à café"]],
 steps:[
  intro("une petite casserole, un bol, une cuillère, un économe, une planche et un couteau, une casserole pour les soba, une passoire, un petit bol, un bol large tiède"),
  "Mise en place — Éplucher le daikon ({{daikon}}) et le couper en demi-rondelles de 5 mm, laver les épinards ({{épinards}}). Vérifier que les soba sont 100 % sarrasin. [[sortir; eplucher daikon; couper daikon; laver epinards]]",
  c1(20, "le daikon et les épinards", "Le daikon devient translucide et perd tout piquant."),
  REHYD2("protéine de soja texturée", "protéine de soja texturée (sèche)"),
  "Les soba — Pendant le cycle, plonger les soba ({{soba cuites}}) 6 minutes dans l'eau frémissante non salée, les rincer à l'eau tiède et bien les égoutter. [[// casserole; cuisson 6; rincer; egoutter]]",
  "La sauce miso — Délayer le miso ({{miso blanc}}) dans 3 cuillères d'eau tiède, ajouter l'huile de sésame grillé ({{huile de sésame grillé}}) et y mêler le soja. Ne jamais chauffer le miso. [[presser epinards; delayer]]",
  "Dressage — Soba en nid dans le bol large tiède, soja au miso au centre, épinards pressés et daikon autour, graines de sésame ({{graines de sésame}}) en pluie. [[dresser x4]]"],
 tip:"Le soja texturé se garde en petite quantité : 30 g secs suffisent pour un repas complet."}),

RC({id:"l-soja-donburi-aubergine", n:"Donburi doux de soja texturé, aubergine pelée & courgette fondantes sur riz", cat:"Protéines végétales", st:"Vapeur Bamboo", base:"Riz", d:1,
 ing:[["protéine de soja texturée (sèche)",30,"g"],["bouillon",100,"ml"],["riz cuit",140,"g"],["aubergine",90,"g"],["courgette épluchée",60,"g"],["sauce soja",1,"c. à café"],["sirop d'érable",1,"c. à café"],["huile de sésame grillé",1,"c. à café"]],
 steps:[
  intro("une petite casserole, un bol, une cuillère, un économe, une planche et un couteau, un petit bol, un bol large tiède"),
  "Mise en place — Éplucher entièrement l'aubergine ({{aubergine}}) et la couper en dés de 1,5 cm. Éplucher la courgette ({{courgette épluchée}}), retirer le cœur et la couper en dés. [[sortir; eplucher aubergine; couper aubergine; eplucher courgette; couper courgette]]",
  c1(25, "l'aubergine, la courgette et le riz ({{riz cuit}}) mouillé d'une cuillère d'eau " + bol, "L'aubergine est presque en purée : toujours très cuite."),
  REHYD2("protéine de soja texturée", "protéine de soja texturée (sèche)"),
  "La sauce — Mélanger la sauce soja ({{sauce soja}}), le sirop d'érable ({{sirop d'érable}}) et 2 cuillères d'eau tiède, puis y mêler le soja pressé. [[delayer]]",
  "Dressage — Riz dans le bol large tiède, soja laqué au centre, aubergine et courgette autour, huile de sésame grillé ({{huile de sésame grillé}}) à la fin. [[dresser x4]]"],
 tip:"L'aubergine pelée et très cuite devient fondante : c'est elle qui donne la douceur du donburi."}),

RC({id:"l-galettes-okara-pois", n:"Galettes vapeur d'okara & de pois texturé, riz tiède, carotte & haricots verts", cat:"Protéines végétales", st:"Vapeur Bamboo", base:"Riz", d:1,
 ing:[["protéine de pois texturée (sèche)",30,"g"],["bouillon",100,"ml"],["okara d'amande",50,"g"],["riz cuit",140,"g"],["carotte",100,"g"],["haricots verts",60,"g"],["crème de soja",1,"c. à soupe"],["huile d'olive",1,"c. à café"],["thym","",HERBS],["sel","","1 pincée"]],
 steps:[
  intro("une petite casserole, un bol, une cuillère, un économe, une planche et un couteau, un bol pour le mélange"),
  REHYD("protéine de pois texturée", "protéine de pois texturée (sèche)"),
  "Mise en place — Pendant que la protéine gonfle : éplucher la carotte ({{carotte}}) et la couper en rondelles. Peser 60 g de haricots verts ({{haricots verts}}), les équeuter et les couper en tronçons. [[// eplucher carotte; couper carotte; peser haricots verts; couper haricots verts]]",
  "Les galettes — Mélanger la protéine pressée, l'okara ({{okara d'amande}}), la crème de soja ({{crème de soja}}), le thym effeuillé ({{thym}}) et le sel, puis former 4 galettes plates de 1 cm d'épaisseur, posées sur du papier sulfurisé percé. [[delayer; former x4]]",
  c1(15, "les galettes, la carotte, les haricots verts et le riz ({{riz cuit}}) mouillé d'une cuillère d'eau " + bol, "Les galettes sont fermes au toucher, les haricots très tendres."),
  "Dressage — Riz dans l'assiette, galettes en ligne, légumes autour, huile d'olive crue ({{huile d'olive}}) en filet. [[dresser x4]]"],
 tip:"L'okara lie la protéine : les galettes tiennent sans œuf et sans friture, cuites à la vapeur."}),

RC({id:"l-minestrone-pois", n:"Minestrone doux sans tomate : quinoa, protéine de pois, carotte, courgette & haricots verts", cat:"Protéines végétales", st:"Cocon & purées", base:"Quinoa", d:1,
 ing:[["protéine de pois texturée (sèche)",30,"g"],["bouillon",400,"ml"],["quinoa cuit",140,"g"],["carotte",80,"g"],["courgette épluchée",55,"g"],["haricots verts",40,"g"],["huile d'olive",1,"c. à café"],["basilic","",HERBS]],
 steps:[
  introPoele("une casserole, une planche et un couteau, un économe, une louche, un grand bol tiède"),
  "Mise en place — Éplucher la carotte ({{carotte}}) et la couper en petits dés. Éplucher la courgette ({{courgette épluchée}}) et la couper en dés de 1 cm. Peser 40 g de haricots verts ({{haricots verts}}), les équeuter et les couper en petits tronçons. [[sortir; eplucher carotte; couper carotte; eplucher courgette; couper courgette; peser haricots verts; couper haricots verts]]",
  "Le bouillon — Porter le bouillon ({{bouillon}}) à frémissement avec la protéine de pois ({{protéine de pois texturée (sèche)}}), la carotte et les haricots verts, et cuire 12 minutes à petit frémissement : la protéine gonfle et tout devient tendre. [[casserole; cuisson 12]]",
  "Le quinoa et la courgette — Ajouter la courgette et le quinoa ({{quinoa cuit}}) pour les 3 dernières minutes. [[cuisson 3]]",
  "Dressage — Servir dans le grand bol tiède, avec l'huile d'olive crue ({{huile d'olive}}) et le basilic ciselé ({{basilic}}). [[ciseler; dresser x2]]"],
 tip:"Sans tomate ni oignon, le minestrone tient par le basilic frais et le bouillon : une soupe-repas complète dans une seule casserole."}),

RC({id:"x-boulettes-pois-brocoli", n:"Boulettes de protéine de pois et pomme de terre, brocoli & carotte, crème de soja persillée", cat:"Protéines végétales", st:"Vapeur Bamboo", base:"Pommes de terre", d:1,
 ing:[["protéine de pois texturée (sèche)",30,"g"],["bouillon",100,"ml"],["pommes de terre",140,"g"],["brocoli",90,"g"],["carotte",70,"g"],["crème de soja",1,"c. à soupe"],["huile d'olive",1,"c. à café"],["persil","",HERBS],["sel","","1 pincée"]],
 steps:[
  intro("une petite casserole, un bol, une cuillère, un économe, une planche et un couteau, une fourchette, un petit bol, une assiette creuse tiède"),
  "Mise en place — Éplucher les pommes de terre ({{pommes de terre}}) et les couper en cubes de 2 cm. Éplucher la carotte ({{carotte}}) et la couper en rondelles. Détacher les têtes du brocoli ({{brocoli}}) en petits bouquets. [[sortir; eplucher pommes de terre; couper pommes de terre; eplucher carotte; couper carotte; couper brocoli]]",
  c1(25, "les pommes de terre, la carotte et le brocoli", "Les pommes de terre s'écrasent à la fourchette."),
  REHYD2("protéine de pois texturée", "protéine de pois texturée (sèche)"),
  "Les boulettes — Écraser les pommes de terre ({{pommes de terre}}) à la fourchette avec la protéine pressée et le sel, puis former 6 boulettes de la taille d'une noix. Elles sont tièdes et tendres, sans autre cuisson. [[ecraser pommes de terre; former x6]]",
  "La crème persillée — Mélanger la crème de soja ({{crème de soja}}), le persil ciselé ({{persil}}) et l'huile d'olive crue ({{huile d'olive}}). [[ciseler; delayer]]",
  "Dressage — Boulettes dans l'assiette creuse tiède, brocoli et carotte autour, crème persillée en filet. [[dresser x3]]"],
 tip:"La pomme de terre écrasée lie la protéine sans œuf ni friture : les boulettes sont tendres et gardent leur forme."}),

RC({id:"x-bol-pois-potimarron", n:"Bol de riz tiède, protéine de pois au thym, potimarron & épinards", cat:"Protéines végétales", st:"Vapeur Bamboo", base:"Riz", d:1,
 ing:[["protéine de pois texturée (sèche)",30,"g"],["bouillon",100,"ml"],["riz cuit",140,"g"],["potimarron",100,"g"],["épinards",60,"g"],["huile d'olive",1,"c. à café"],["thym","",HERBS],["sel","","1 pincée"]],
 steps:[
  intro("une petite casserole, un bol, une cuillère, un économe, une planche et un couteau, un bol large tiède"),
  "Mise en place — Éplucher le potimarron ({{potimarron}}), retirer les graines et le couper en cubes de 2 cm. Laver les épinards ({{épinards}}). [[sortir; eplucher potimarron; couper potimarron; laver epinards]]",
  c1(20, "le potimarron, les épinards et le riz ({{riz cuit}}) mouillé d'une cuillère d'eau " + bol, "Le potimarron s'écrase sous la pointe d'un couteau."),
  REHYD2("protéine de pois texturée", "protéine de pois texturée (sèche)"),
  "Dressage — Riz dans le bol large tiède, protéine mêlée au thym effeuillé ({{thym}}) au centre, potimarron et épinards pressés autour, huile d'olive crue ({{huile d'olive}}) et sel. [[presser epinards; dresser x4]]"],
 tip:"Le thym parfume la protéine de pois, le potimarron lui apporte sa douceur sucrée."}),

RC({id:"s-sardines-pdt-haricots", n:"Salade tiède de pommes de terre, sardines au naturel, haricots verts & carotte, sauce persillée", cat:"Sardines", st:"Fraîcheur tiède", base:"Pommes de terre", d:1,
 ing:[["sardines au naturel",90,"g"],["pommes de terre",140,"g"],["haricots verts",75,"g"],["carotte",90,"g"],["huile d'olive",1,"c. à café"],["persil","",HERBS],["sel","","1 pincée"]],
 steps:[
  intro("une balance, du papier absorbant, une planche et un couteau, un économe, un petit bol, une assiette creuse"),
  "Mise en place — Éplucher les pommes de terre ({{pommes de terre}}) et les couper en cubes de 2 cm. Peser 75 g de haricots verts ({{haricots verts}}), les équeuter et les couper en tronçons. Éplucher la carotte ({{carotte}}) et la couper en rondelles. Égoutter les sardines au naturel ({{sardines au naturel}}) sur du papier absorbant et retirer l'arête centrale. Plat du midi, hors phase sensible. [[sortir; eplucher pommes de terre; couper pommes de terre; peser haricots verts; couper haricots verts; eplucher carotte; couper carotte; egoutter; presser sardines]]",
  c1(25, "les pommes de terre, les haricots verts et la carotte", "Les haricots sont mous, les pommes de terre tendres."),
  "Sauce et dressage — Mélanger le persil ciselé ({{persil}}), l'huile d'olive crue ({{huile d'olive}}), 2 cuillères d'eau tiède et le sel. Dresser les légumes tièdes en couronne dans l'assiette, sardines émiettées au centre, sauce persillée sur l'ensemble. [[ciseler; delayer; dresser x2]]"],
 tip:"Les sardines au naturel, bien égouttées, restent légères ; la sauce persillée les rafraîchit."}),

RC({id:"s-sardines-vapeur-fenouil", n:"Filets de sardines vapeur, riz tiède, fenouil & courgette fondants", cat:"Sardines", st:"Vapeur Bamboo", base:"Riz", d:2,
 ing:[["sardines fraîches",90,"g"],["riz cuit",140,"g"],["fenouil",60,"g"],["courgette épluchée",55,"g"],["carotte",50,"g"],["huile d'olive",1,"c. à café"],["aneth","",HERBS],["sel","","1 pincée"]],
 steps:[
  intro("une pince à arêtes, du papier absorbant, une planche et un couteau, un économe, un bol pour le riz, une assiette creuse tiède"),
  "Mise en place — Faire lever les filets des sardines fraîches ({{sardines fraîches}}) chez le poissonnier ; à la maison, les éponger et retirer les arêtes restantes à la pince. Retirer les parties dures du fenouil ({{fenouil}}) et l'émincer. Éplucher la carotte ({{carotte}}) et la couper en rondelles. Éplucher entièrement la courgette ({{courgette épluchée}}) et la couper en dés. Plat du midi, hors phase sensible. [[sortir; presser sardines; emincer fenouil; eplucher carotte; couper carotte; eplucher courgette; couper courgette]]",
  c1(25, "le fenouil, la carotte, la courgette, les filets de sardines posés directement sur la grille (rien sous le poisson) et le riz ({{riz cuit}}) mouillé d'une cuillère d'eau " + bol, "Le guide du fabricant donne 25 minutes pour le poisson : les filets sont opaques et se détachent sans effort."),
  "Dressage — Riz en dôme, légumes autour, filets de sardines posés dessus, huile d'olive crue ({{huile d'olive}}), aneth ciselé ({{aneth}}) et une pincée de sel. [[ciseler; dresser x3]]"],
 tip:"Un seul cycle vapeur pour tout le plat : poisson et légumes cuisent ensemble."})
);
