/* ============ DÉJEUNERS ET DÎNERS : PROTÉINES TEXTURÉES, OKARA, SARDINES ============
   Protéine de pois texturée ou de soja texturée : 30 g secs par repas (comptés 90 g une fois réhydratés), dans quelques plats seulement.
   La réhydratation (10 minutes dans du bouillon chaud) est comptée dans la durée ; la mise en place se fait pendant ce temps. */
const REHYD = (nom, ref) => "Réhydratation — Chauffer le bouillon ({{bouillon}}) dans une petite casserole jusqu'au frémissement, le verser sur la " + nom + " ({{" + ref + "}}) dans un bol, mélanger et laisser gonfler 10 minutes : elle triple de volume et devient tendre. Presser ensuite légèrement à la cuillère pour retirer le bouillon en trop. [[sortir; casserole; attente 3; verser; attente 10; presser]]";
LUNCH.push(
RC({id:"l-hachis-pois-panais", n:"Hachis de protéine de pois texturée au thym, purée pomme de terre–panais & haricots verts", cat:"Protéines végétales", st:"Cocon & purées", base:"Pommes de terre", d:1,
 ing:[["protéine de pois texturée (sèche)",30,"g"],["bouillon",100,"ml"],["pommes de terre",140,"g"],["panais",80,"g"],["haricots verts",70,"g"],["crème de soja",1,"c. à soupe"],["huile d'olive",1,"c. à café"],["thym","",HERBS],["persil","",HERBS],["sel","","1 pincée"]],
 steps:[
  intro("une petite casserole, un bol, une cuillère, une balance, un économe, une planche et un couteau, un presse-purée, un cercle de 10 cm (ou un bol), une assiette creuse tiède"),
  REHYD("protéine de pois texturée", "protéine de pois texturée (sèche)"),
  "Mise en place — Pendant que la protéine gonfle : éplucher les pommes de terre ({{pommes de terre}}) et le panais ({{panais}}) et les couper en cubes de 2 cm. Peser 70 g de haricots verts ({{haricots verts}}), les équeuter et les couper en tronçons de 3 cm. [[// eplucher pommes de terre; couper pommes de terre; eplucher panais; couper panais; peser haricots verts; couper haricots verts]]",
  c1(25, "les pommes de terre, le panais et les haricots verts", "Les haricots doivent être mous, les cubes s'écrasent à la fourchette."),
  c2(10, "la protéine de pois mêlée au thym effeuillé ({{thym}}) " + bol, "Elle est chaude à cœur et moelleuse."),
  "La purée — Écraser les pommes de terre et le panais au presse-purée avec la crème de soja ({{crème de soja}}), une cuillère d'eau de la cuve et une pincée de sel. [[ecraser]]",
  "Dressage — Dans le cercle posé sur l'assiette tiède, tasser la protéine au thym, couvrir de purée lissée à la cuillère, retirer le cercle. Haricots verts autour, huile d'olive crue ({{huile d'olive}}) et persil ciselé ({{persil}}). Pas de gratin : le plat se sert tiède. [[ciseler; dresser x3]]"],
 tip:"Réhydratée dans le bouillon, la protéine de pois prend son goût : pas besoin de la faire revenir."}),

RC({id:"l-bol-pois-butternut", n:"Bol de quinoa tiède, protéine de pois texturée au bouillon, butternut & brocoli, sauce persillée", cat:"Protéines végétales", st:"Vapeur Bamboo", base:"Quinoa", d:1,
 ing:[["protéine de pois texturée (sèche)",30,"g"],["bouillon",100,"ml"],["quinoa cuit",140,"g"],["butternut",100,"g"],["brocoli",80,"g"],["huile d'olive",1,"c. à café"],["persil","",HERBS],["sel","","1 pincée"]],
 steps:[
  intro("une petite casserole, deux bols, une cuillère, un économe, une planche et un couteau, un petit bol, un bol large tiède"),
  REHYD("protéine de pois texturée", "protéine de pois texturée (sèche)"),
  "Mise en place — Pendant que la protéine gonfle : éplucher la butternut ({{butternut}}), retirer les graines et la couper en cubes de 2 cm. Détailler les têtes de brocoli ({{brocoli}}) en petits bouquets. [[// eplucher butternut; couper butternut; couper brocoli]]",
  c1(20, "la butternut", "Elle s'écrase à la fourchette."),
  c2(15, "le brocoli, la protéine de pois " + bol + " et le quinoa ({{quinoa cuit}}) mouillé d'une cuillère d'eau dans un second bol", "Le brocoli est très tendre (15 minutes, guide du fabricant)."),
  "La sauce persillée — Mélanger le persil ciselé ({{persil}}), l'huile d'olive crue ({{huile d'olive}}), 2 cuillères d'eau tiède et une pincée de sel. [[ciseler; delayer]]",
  "Dressage — Quinoa au fond du bol large tiède, protéine de pois au centre, butternut et brocoli en quartiers, sauce persillée en filet. [[dresser x4]]"],
 tip:"Le bouillon de réhydratation parfume la protéine : choisir un bouillon de légumes doux, sans oignon."}),

RC({id:"l-soja-miso-soba", n:"Soja texturé au miso doux, soba tièdes, épinards & daikon fondants", cat:"Protéines végétales", st:"Fraîcheur tiède", base:"Sarrasin", d:1,
 ing:[["protéine de soja texturée (sèche)",30,"g"],["bouillon",100,"ml"],["soba cuites",140,"g"],["épinards",80,"g"],["daikon",90,"g"],["miso blanc",1,"c. à café"],["huile de sésame grillé",1,"c. à café"],["graines de sésame",1,"c. à café"]],
 steps:[
  intro("une petite casserole, un bol, une cuillère, un économe, une planche et un couteau, une casserole pour les soba, une passoire, un petit bol, un bol large tiède"),
  REHYD("protéine de soja texturée", "protéine de soja texturée (sèche)"),
  "Mise en place — Pendant que le soja gonfle : éplucher le daikon ({{daikon}}) et le couper en demi-rondelles de 5 mm, laver les épinards ({{épinards}}). Vérifier que les soba sont 100 % sarrasin. [[// eplucher daikon; couper daikon; laver epinards]]",
  c1(20, "le daikon", "Il devient translucide et perd tout piquant."),
  c2(15, "les épinards et le soja " + bol, "Les épinards s'affaissent (15 minutes, guide du fabricant)."),
  "Les soba — Pendant le second cycle, plonger les soba ({{soba cuites}}) 6 minutes dans l'eau frémissante non salée, les rincer à l'eau tiède et bien les égoutter. [[// casserole; cuisson 6; rincer; egoutter]]",
  "La sauce miso — Délayer le miso ({{miso blanc}}) dans 3 cuillères d'eau tiède, ajouter l'huile de sésame grillé ({{huile de sésame grillé}}) et y mêler le soja. Ne jamais chauffer le miso. [[presser epinards; delayer]]",
  "Dressage — Soba en nid dans le bol large tiède, soja au miso au centre, épinards pressés et daikon autour, graines de sésame ({{graines de sésame}}) en pluie. [[dresser x4]]"],
 tip:"Le soja texturé se garde en petite quantité : 30 g secs suffisent pour un repas complet."}),

RC({id:"l-soja-donburi-aubergine", n:"Donburi doux de soja texturé, aubergine pelée & courgette fondantes sur riz", cat:"Protéines végétales", st:"Vapeur Bamboo", base:"Riz", d:1,
 ing:[["protéine de soja texturée (sèche)",30,"g"],["bouillon",100,"ml"],["riz cuit",140,"g"],["aubergine épluchée",100,"g"],["courgette épluchée",55,"g"],["sauce soja",1,"c. à café"],["huile de sésame grillé",1,"c. à café"],["ciboulette","",HERBS]],
 steps:[
  intro("une petite casserole, deux bols, une cuillère, un économe, une planche et un couteau, un petit bol, un bol profond tiède"),
  REHYD("protéine de soja texturée", "protéine de soja texturée (sèche)"),
  "Mise en place — Pendant que le soja gonfle : éplucher entièrement l'aubergine ({{aubergine épluchée}}) et la couper en dés de 2 cm. Éplucher entièrement la courgette ({{courgette épluchée}}), retirer le cœur et la couper en dés de 1 cm. [[// eplucher aubergine; couper aubergine; eplucher courgette; couper courgette]]",
  c1(20, "l'aubergine", "Elle doit s'écraser comme une crème."),
  c2(10, "la courgette, le soja mêlé à la sauce soja ({{sauce soja}}) " + bol + " et le riz ({{riz cuit}}) mouillé d'une cuillère d'eau dans un second bol", "Tout est chaud et fondant."),
  "Dressage — Riz dans le bol profond tiède, soja par-dessus d'un côté, aubergine et courgette de l'autre, huile de sésame grillé ({{huile de sésame grillé}}) en filet et ciboulette ciselée ({{ciboulette}}, pointes vertes). [[ciseler; dresser x3]]"],
 tip:"L'aubergine sans peau, très cuite, enrobe le riz comme une sauce."}),

RC({id:"l-galettes-okara-pois", n:"Galettes vapeur d'okara d'amande & de pois texturé, riz tiède, carotte & haricots verts", cat:"Protéines végétales", st:"Vapeur Bamboo", base:"Riz", d:2,
 ing:[["protéine de pois texturée (sèche)",30,"g"],["bouillon",100,"ml"],["okara d'amande",25,"g"],["riz cuit",140,"g"],["carotte",100,"g"],["haricots verts",70,"g"],["huile d'olive",1,"c. à café"],["persil","",HERBS],["sel","","1 pincée"]],
 steps:[
  intro("une petite casserole, un bol, une fourchette, une balance, un économe, une planche et un couteau, un bol pour le riz, une assiette creuse tiède"),
  REHYD("protéine de pois texturée", "protéine de pois texturée (sèche)"),
  "Mise en place — Pendant que la protéine gonfle : peser 70 g de haricots verts ({{haricots verts}}), les équeuter et les couper en tronçons de 3 cm. Éplucher la carotte ({{carotte}}) et la couper en rondelles de 5 mm. [[// peser haricots verts; couper haricots verts; eplucher carotte; couper carotte]]",
  c1(25, "les haricots verts et la carotte", "Les haricots doivent être mous."),
  "Les galettes — Pendant le premier cycle, écraser la protéine de pois à la fourchette avec l'okara d'amande ({{okara d'amande}}), le persil ciselé ({{persil}}) et une pincée de sel, puis former 3 galettes de 2 cm d'épaisseur en les serrant bien entre les mains. [[// ecraser; ciseler; former x3]]",
  c2(10, "les galettes sur le papier et le riz ({{riz cuit}}) mouillé d'une cuillère d'eau " + bol, "Les galettes sont chaudes à cœur et se tiennent."),
  "Dressage — Riz en dôme dans l'assiette creuse tiède, galettes posées en appui, carottes et haricots verts autour, huile d'olive crue ({{huile d'olive}}) en filet. [[dresser x3]]"],
 tip:"L'okara d'amande lie la protéine de pois : bien serrer les galettes pour qu'elles se tiennent à la vapeur."}),

RC({id:"l-minestrone-pois", n:"Minestrone doux sans tomate : quinoa, protéine de pois texturée, carotte, courgette & haricots verts au basilic", cat:"Protéines végétales", st:"Cocon & purées", base:"Quinoa", d:1,
 ing:[["protéine de pois texturée (sèche)",30,"g"],["quinoa cuit",140,"g"],["carotte",70,"g"],["courgette épluchée",55,"g"],["haricots verts",50,"g"],["bouillon",450,"ml"],["huile d'olive",1,"c. à café"],["basilic","",HERBS],["sel","","1 pincée"]],
 steps:[
  introPoele("une balance, un économe, une planche et un couteau, une casserole avec couvercle, une louche, une assiette creuse tiède"),
  "Mise en place — Éplucher la carotte ({{carotte}}) et la couper en petits dés de 1 cm. Peser 50 g de haricots verts ({{haricots verts}}), les équeuter et les couper en tronçons de 1 cm. Éplucher entièrement la courgette ({{courgette épluchée}}), retirer le cœur et la couper en dés de 1 cm. [[sortir; eplucher carotte; couper carotte; peser haricots verts; couper haricots verts; eplucher courgette; couper courgette]]",
  "Le bouillon — Porter le bouillon ({{bouillon}}) à frémissement avec la carotte et les haricots verts, couvrir et cuire 15 minutes à petit frémissement : les haricots deviennent mous. [[casserole; cuisson 15]]",
  "La protéine et la courgette — Verser la protéine de pois texturée ({{protéine de pois texturée (sèche)}}) et la courgette dans le bouillon frémissant et laisser 10 minutes à feu doux : la protéine se réhydrate dans la soupe et la courgette fond. [[cuisson 10]]",
  "Le quinoa — Ajouter le quinoa cuit ({{quinoa cuit}}) et laisser 2 minutes pour le réchauffer. [[cuisson 2]]",
  "Dressage — Servir à la louche dans l'assiette creuse tiède, laisser tiédir 2 minutes, puis finir d'huile d'olive crue ({{huile d'olive}}) et de basilic ciselé ({{basilic}}). [[attente 2; ciseler; dresser x1]]"],
 tip:"La protéine de pois se réhydrate directement dans la soupe : rien à préparer à part."}),

RC({id:"x-boulettes-pois-brocoli", n:"Boulettes vapeur de protéine de pois et pomme de terre, brocoli & carotte, crème de soja persillée", cat:"Protéines végétales", st:"Vapeur Bamboo", base:"Pommes de terre", d:2,
 ing:[["protéine de pois texturée (sèche)",30,"g"],["bouillon",100,"ml"],["pommes de terre",140,"g"],["brocoli",90,"g"],["carotte",80,"g"],["crème de soja",1,"c. à soupe"],["huile d'olive",1,"c. à café"],["persil","",HERBS],["sel","","1 pincée"]],
 steps:[
  intro("une petite casserole, un bol, une cuillère, une fourchette, un économe, une planche et un couteau, un petit bol, une assiette creuse tiède"),
  REHYD("protéine de pois texturée", "protéine de pois texturée (sèche)"),
  "Mise en place — Pendant que la protéine gonfle : éplucher les pommes de terre ({{pommes de terre}}) et les couper en cubes de 2 cm, éplucher la carotte ({{carotte}}) et la couper en rondelles, détailler les têtes de brocoli ({{brocoli}}). [[// eplucher pommes de terre; couper pommes de terre; eplucher carotte; couper carotte; couper brocoli]]",
  c1(25, "les pommes de terre et la carotte", "Elles s'écrasent à la fourchette."),
  "Les boulettes — Écraser un tiers des pommes de terre avec la protéine de pois, la moitié du persil ciselé ({{persil}}) et le sel, puis former 6 boulettes bien serrées. [[ecraser; ciseler; delayer; former x6]]",
  c2(15, "les boulettes et le brocoli", "Le brocoli est très tendre (15 minutes, guide du fabricant), les boulettes se tiennent."),
  "Dressage — Mélanger la crème de soja ({{crème de soja}}) avec le reste du persil et une cuillère d'eau. Boulettes au centre, pommes de terre, carotte et brocoli autour, crème persillée et huile d'olive crue ({{huile d'olive}}). [[delayer; dresser x4]]"],
 tip:"La pomme de terre écrasée lie la protéine de pois : des boulettes moelleuses, sans œuf."}),

RC({id:"x-bol-pois-potimarron", n:"Bol de riz tiède, protéine de pois au thym, potimarron & épinards", cat:"Protéines végétales", st:"Vapeur Bamboo", base:"Riz", d:1,
 ing:[["protéine de pois texturée (sèche)",30,"g"],["bouillon",100,"ml"],["riz cuit",140,"g"],["potimarron",100,"g"],["épinards",70,"g"],["huile d'olive",1,"c. à café"],["thym","",HERBS],["sel","","1 pincée"]],
 steps:[
  intro("une petite casserole, deux bols, une cuillère, une planche et un couteau, un économe, un bol large tiède"),
  REHYD("protéine de pois texturée", "protéine de pois texturée (sèche)"),
  "Mise en place — Pendant que la protéine gonfle : couper le potimarron ({{potimarron}}) en quartiers, retirer les graines, l'éplucher et le couper en cubes de 2 cm ; laver les épinards ({{épinards}}). [[// eplucher potimarron; couper potimarron; laver epinards]]",
  c1(20, "le potimarron", "Il s'écrase à la fourchette (20 minutes, guide du fabricant)."),
  c2(15, "les épinards, la protéine de pois mêlée au thym ({{thym}}) " + bol + " et le riz ({{riz cuit}}) mouillé d'une cuillère d'eau dans un second bol", "Tout est chaud ; les épinards s'affaissent."),
  "Dressage — Riz au fond du bol tiède, protéine au thym au centre, potimarron et épinards pressés autour, huile d'olive crue ({{huile d'olive}}) et une pincée de sel. [[presser epinards; dresser x4]]"],
 tip:"Le thym parfume la protéine de pois pendant qu'elle se réchauffe à la vapeur."}),

RC({id:"s-sardines-pdt-haricots", n:"Salade tiède de pommes de terre, sardines au naturel, haricots verts & carotte, sauce persillée", cat:"Sardines", st:"Fraîcheur tiède", base:"Pommes de terre", d:1,
 ing:[["sardines au naturel",90,"g"],["pommes de terre",140,"g"],["haricots verts",75,"g"],["carotte",90,"g"],["huile d'olive",1,"c. à café"],["persil","",HERBS],["sel","","1 pincée"]],
 steps:[
  intro("une balance, du papier absorbant, une planche et un couteau, un économe, un petit bol, une assiette creuse"),
  "Mise en place — Éplucher les pommes de terre ({{pommes de terre}}) et les couper en cubes de 2 cm. Peser 75 g de haricots verts ({{haricots verts}}) au maximum, les équeuter et les couper en tronçons. Éplucher la carotte ({{carotte}}) et la couper en rondelles. Égoutter longuement les sardines au naturel ({{sardines au naturel}}) sur du papier absorbant et retirer l'arête centrale. Plat du midi, hors phase sensible. [[sortir; eplucher pommes de terre; couper pommes de terre; peser haricots verts; couper haricots verts; eplucher carotte; couper carotte; egoutter; presser sardines]]",
  c1(30, "les pommes de terre, les haricots verts et la carotte", "Les haricots doivent être mous."),
  "Tiédir et assaisonner — Laisser tiédir les légumes 5 minutes dans l'assiette ; mélanger le persil ciselé ({{persil}}), l'huile d'olive crue ({{huile d'olive}}), 2 cuillères d'eau tiède et le sel. [[attente 5; ciseler; delayer]]",
  "Dressage — Légumes en couronne, sardines émiettées au centre, sauce persillée sur l'ensemble. [[dresser x2]]"],
 tip:"Les sardines au naturel, bien égouttées, restent légères."}),

RC({id:"s-sardines-vapeur-fenouil", n:"Filets de sardines vapeur, riz tiède, fenouil & courgette fondants", cat:"Sardines", st:"Vapeur Bamboo", base:"Riz", d:2,
 ing:[["sardines fraîches",90,"g"],["riz cuit",140,"g"],["fenouil",60,"g"],["courgette épluchée",55,"g"],["carotte",50,"g"],["huile d'olive",1,"c. à café"],["aneth","",HERBS],["sel","","1 pincée"]],
 steps:[
  intro("une pince à arêtes, du papier absorbant, une planche et un couteau, un économe, un bol pour le riz, une assiette creuse tiède"),
  "Mise en place — Faire lever les filets des sardines fraîches ({{sardines fraîches}}) chez le poissonnier ; à la maison, les éponger et retirer les arêtes restantes à la pince. Retirer les parties dures du fenouil ({{fenouil}}) et l'émincer. Éplucher la carotte ({{carotte}}) et la couper en rondelles. Éplucher entièrement la courgette ({{courgette épluchée}}) et la couper en dés. Plat du midi, hors phase sensible. [[sortir; presser sardines; emincer fenouil; eplucher carotte; couper carotte; eplucher courgette; couper courgette]]",
  c1(25, "le fenouil, la carotte, la courgette, les filets de sardines posés directement sur la grille (rien sous le poisson) et le riz ({{riz cuit}}) mouillé d'une cuillère d'eau " + bol, "Le guide du fabricant donne 25 minutes pour le poisson : les filets sont opaques et se détachent sans effort."),
  "Dressage — Riz en dôme, légumes autour, filets de sardines posés dessus, huile d'olive crue ({{huile d'olive}}), aneth ciselé ({{aneth}}) et une pincée de sel. [[ciseler; dresser x3]]"],
 tip:"Un seul cycle vapeur pour tout le plat : poisson et légumes cuisent ensemble."})
);
