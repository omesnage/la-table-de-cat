/* ============ PETITS-DÉJEUNERS LÉGERS (environ 250 kcal) : 8 sucrés, 8 salés ============
   Féculent 60-100 g cuits (ou 25-35 g de flocons ou de farine crus), protéine légère (soja, tofu) ou 1 œuf.
   10 minutes au maximum, étapes comprises (durées calculées par cat_time.js), rien à préparer la veille
   sauf le riz ou le quinoa déjà cuits. Tout est cuit, tiède, sans friture ni coloration. */
const BREAKFAST = [
/* ---------- sucrés ---------- */
RC({id:"b-porridge-avoine-myrtilles", n:"Porridge d'avoine à la banane, lait de soja chaud & myrtilles tièdes", cat:"Protéines végétales", st:"Petit-déjeuner", base:"Avoine", d:1, go:"Sucré",
 ing:[["flocons d'avoine",30,"g"],["lait de soja",100,"ml"],["banane",40,"g"],["myrtilles",30,"g"],["vanille naturelle",1,"pincée"]],
 steps:[
  "Avant de commencer — Ustensiles : une petite casserole, une cuillère en bois, une planche et un couteau, un bol de service.",
  "L'avoine — Verser les flocons d'avoine ({{flocons d'avoine}}) et 100 ml d'eau dans la casserole (l'avoine cuit à l'eau, jamais au lait), poser sur feu doux et cuire 3 minutes en remuant : l'eau est absorbée, les flocons sont tendres. [[sortir; casserole; cuisson 3]]",
  "Le lait chaud et les myrtilles — Ajouter le lait de soja ({{lait de soja}}), la vanille et les myrtilles ({{myrtilles}}), chauffer 2 minutes sans bouillir : les myrtilles éclatent et marbrent le porridge de violet. [[cuisson 2]]",
  "La banane — Pendant ce temps, couper la banane ({{banane}}) en rondelles de 5 mm. [[// couper banane]]",
  "Dressage — Verser le porridge dans le bol tiède et poser les rondelles de banane en couronne sur le dessus. [[dresser x2]]"],
 tip:"Cuire l'avoine à l'eau puis ajouter le lait chaud : le porridge reste crémeux et ne déborde jamais."}),

RC({id:"b-riz-lait-myrtilles", n:"Riz au lait de riz vanillé, yaourt de soja & coulis tiède de myrtilles", cat:"Protéines végétales", st:"Petit-déjeuner", base:"Riz", d:1, go:"Sucré",
 ing:[["riz cuit",80,"g"],["lait de riz",80,"ml"],["yaourt de soja nature",60,"g"],["myrtilles",40,"g"],["vanille naturelle",1,"pincée"]],
 steps:[
  "Avant de commencer — Ustensiles : deux petites casseroles, une cuillère en bois, une fourchette, un bol de service. Riz basmati cuit la veille au Bamboo (programme WHITE, 35 minutes).",
  "Le riz au lait — Dans une casserole, chauffer le riz cuit ({{riz cuit}}) avec le lait de riz ({{lait de riz}}) et la vanille à feu doux, 5 minutes en remuant, jusqu'à ce que le riz ait bu presque tout le lait. [[sortir; casserole; cuisson 5]]",
  "Le coulis — Pendant ce temps, chauffer les myrtilles ({{myrtilles}}) avec une cuillère d'eau dans la seconde casserole, 3 minutes, et les écraser à la fourchette. [[// casserole; cuisson 3; ecraser myrtilles]]",
  "Dressage — Riz au lait dans le bol, une cuillère de yaourt de soja ({{yaourt de soja nature}}) au centre, le coulis tiède versé en spirale. [[dresser x3]]"],
 tip:"Le riz de la veille donne le riz au lait le plus crémeux, en cinq minutes."}),

RC({id:"b-pancakes-sarrasin-banane", n:"Petits pancakes de sarrasin à la banane, yaourt de soja", cat:"Protéines végétales", st:"Petit-déjeuner", base:"Sarrasin", d:1, go:"Sucré",
 ing:[["farine de sarrasin",30,"g"],["banane",50,"g"],["lait de soja",50,"ml"],["yaourt de soja nature",60,"g"],["vanille naturelle",1,"pincée"]],
 steps:[
  "Avant de commencer — Ustensiles : un bol, une fourchette, une poêle antiadhésive, une petite louche, une spatule, une assiette.",
  "La pâte — Écraser la banane ({{banane}}) à la fourchette dans le bol, ajouter la farine de sarrasin ({{farine de sarrasin}}), le lait de soja ({{lait de soja}}) et la vanille, mélanger jusqu'à une pâte épaisse et lisse. [[sortir; ecraser banane; delayer]]",
  "La cuisson — Poser la poêle sèche sur feu doux, y déposer 4 petites louches de pâte et cuire 2 minutes par face, sans colorer : la surface se couvre de petites bulles avant de retourner. [[cuisson 4]]",
  "Dressage — Empiler les pancakes tièdes sur l'assiette, une quenelle de yaourt de soja ({{yaourt de soja nature}}) à côté. [[dresser x2]]"],
 tip:"La banane écrasée lie la pâte : pas besoin d'œuf ni de sucre."}),

RC({id:"b-sarrasin-skyr-banane", n:"Flocons de sarrasin gonflés au lait de soja, skyr de soja & banane vanillée", cat:"Protéines végétales", st:"Petit-déjeuner", base:"Sarrasin", d:1, go:"Sucré",
 ing:[["flocons de sarrasin",25,"g"],["lait de soja",80,"ml"],["skyr de soja",80,"g"],["banane",40,"g"],["vanille naturelle",1,"pincée"]],
 steps:[
  "Avant de commencer — Ustensiles : une petite casserole, une fourchette, une cuillère, un bol de service.",
  "Les flocons — Verser les flocons de sarrasin ({{flocons de sarrasin}}) et 80 ml d'eau dans la casserole, cuire 3 minutes à feu doux en remuant, puis ajouter le lait de soja ({{lait de soja}}) et chauffer 1 minute sans bouillir. [[sortir; casserole; cuisson 4]]",
  "La banane — Pendant ce temps, écraser la banane ({{banane}}) avec la vanille. [[// ecraser banane]]",
  "Dressage — Skyr de soja ({{skyr de soja}}) au fond du bol, flocons tièdes par-dessus, crème de banane au centre. [[dresser x3]]"],
 tip:"Le skyr frais sous les flocons tièdes : deux températures dans la même cuillère."}),

RC({id:"b-quinoa-carotte-vanille", n:"Quinoa au lait de soja, carotte râpée vanillée façon gâteau", cat:"Protéines végétales", st:"Petit-déjeuner", base:"Quinoa", d:1, go:"Sucré",
 ing:[["quinoa cuit",80,"g"],["carotte",40,"g"],["lait de soja",100,"ml"],["yaourt de soja nature",50,"g"],["sirop d'érable",1,"c. à café"],["vanille naturelle",1,"pincée"]],
 steps:[
  "Avant de commencer — Ustensiles : un économe, une râpe fine, une petite casserole, une cuillère en bois, un bol de service. Quinoa cuit la veille au Bamboo (QUICK COOK, 1 volume d'eau pour 1 de quinoa).",
  "La carotte — Éplucher la carotte ({{carotte}}) et la râper finement au-dessus de la casserole. [[sortir; eplucher carotte; raper carotte]]",
  "La cuisson — Ajouter le quinoa ({{quinoa cuit}}), le lait de soja ({{lait de soja}}) et la vanille, cuire 4 minutes à feu doux en remuant : la carotte fond, le quinoa devient crémeux. [[casserole; cuisson 4]]",
  "Dressage — Verser dans le bol tiède, poser le yaourt de soja ({{yaourt de soja nature}}) en quenelle et un filet de sirop d'érable ({{sirop d'érable}}). [[dresser x3]]"],
 tip:"La carotte râpée, cuite dans le lait vanillé, rappelle le carrot cake, sans four."}),

RC({id:"b-galettes-avoine-banane", n:"Galettes moelleuses d'avoine et banane, crème de soja vanillée", cat:"Protéines végétales", st:"Petit-déjeuner", base:"Avoine", d:1, go:"Sucré",
 ing:[["flocons d'avoine",30,"g"],["banane",60,"g"],["crème de soja",1,"c. à soupe"],["lait de soja",30,"ml"],["vanille naturelle",1,"pincée"]],
 steps:[
  "Avant de commencer — Ustensiles : un bol, une fourchette, une poêle antiadhésive avec couvercle, une spatule, une assiette.",
  "La pâte — Écraser la banane ({{banane}}) à la fourchette, mélanger avec les flocons d'avoine ({{flocons d'avoine}}), le lait de soja ({{lait de soja}}) et la vanille. Former 3 galettes de 1 cm d'épaisseur. [[sortir; ecraser banane; delayer; former x3]]",
  "La cuisson — Poser les galettes dans la poêle sèche, couvrir et cuire à feu doux 2 minutes par face, sans colorer : la vapeur sous le couvercle cuit l'avoine à cœur. [[cuisson 4]]",
  "Dressage — Galettes tièdes sur l'assiette, crème de soja ({{crème de soja}}) battue à la fourchette en petit nuage. [[delayer; dresser x2]]"],
 tip:"Le couvercle garde l'humidité : les galettes cuisent à feu doux sans jamais dorer."}),

RC({id:"b-creme-riz-potimarron", n:"Crème de riz au potimarron râpé et à la vanille, yaourt de soja", cat:"Protéines végétales", st:"Petit-déjeuner", base:"Riz", d:1, go:"Sucré",
 ing:[["riz cuit",70,"g"],["potimarron",50,"g"],["lait de riz",100,"ml"],["yaourt de soja nature",60,"g"],["vanille naturelle",1,"pincée"]],
 steps:[
  "Avant de commencer — Ustensiles : un économe, une râpe à gros trous, une petite casserole, un mixeur plongeant, un bol de service. Riz cuit la veille au Bamboo (WHITE, 35 minutes).",
  "Le potimarron — Éplucher le morceau de potimarron ({{potimarron}}) et le râper à gros trous dans la casserole. [[sortir; eplucher potimarron; raper potimarron]]",
  "La cuisson — Ajouter le riz ({{riz cuit}}), le lait de riz ({{lait de riz}}) et la vanille, cuire 4 minutes à feu doux en remuant, puis mixer quelques secondes pour une crème lisse. [[casserole; cuisson 4; mixer]]",
  "Dressage — Crème tiède dans le bol, yaourt de soja ({{yaourt de soja nature}}) en spirale. [[dresser x2]]"],
 tip:"Râpé, le potimarron cuit en quatre minutes et sucre naturellement la crème."}),

RC({id:"b-yaourt-avoine-myrtilles", n:"Yaourt de soja, flocons d'avoine tiédis au lait de riz & compotée de myrtilles", cat:"Protéines végétales", st:"Petit-déjeuner", base:"Avoine", d:1, go:"Sucré",
 ing:[["flocons d'avoine",25,"g"],["lait de riz",60,"ml"],["yaourt de soja nature",100,"g"],["myrtilles",40,"g"]],
 steps:[
  "Avant de commencer — Ustensiles : deux petites casseroles, une fourchette, un verre ou un bol transparent.",
  "La compotée — Chauffer les myrtilles ({{myrtilles}}) avec une cuillère d'eau à feu doux, 3 minutes, jusqu'à ce qu'elles éclatent ; les écraser légèrement. [[sortir; casserole; cuisson 3; ecraser myrtilles]]",
  "L'avoine — En même temps, dans la seconde casserole, cuire les flocons d'avoine ({{flocons d'avoine}}) 2 minutes dans 60 ml d'eau, puis ajouter le lait de riz ({{lait de riz}}) hors du feu. [[// casserole; cuisson 2]]",
  "Dressage — Monter en trois couches : l'avoine au fond, le yaourt de soja ({{yaourt de soja nature}}), la compotée tiède en nappage. [[dresser x3]]"],
 tip:"Trois couches, trois textures : moelleux, frais, fondant."}),

/* ---------- salés ---------- */
RC({id:"pdj-omelette-roulee", n:"Omelette roulée tendre à la ciboulette, pain de sarrasin & yaourt de soja à l'aneth", cat:"Œufs", st:"Petit-déjeuner", base:"Sarrasin", d:1, go:"Salé",
 ing:[["œuf",1,"pièce"],["pain de sarrasin",70,"g"],["yaourt de soja nature",40,"g"],["ciboulette","",HERBS],["aneth","",HERBS],["sel","","1 pincée"]],
 steps:[
  "Avant de commencer — Ustensiles : un bol, une fourchette, une poêle antiadhésive de 18 à 20 cm, une spatule fine, des ciseaux, une planche, une assiette.",
  "Mise en place — Battre l'œuf ({{œuf}}) à la fourchette avec une cuillère à soupe d'eau et une pincée de sel. Ciseler aux ciseaux la ciboulette (pointes vertes) et l'aneth, ajouter la ciboulette dans l'œuf. [[sortir; battre; ciseler]]",
  "L'omelette — Poser la poêle antiadhésive sèche sur feu doux, verser l'œuf en couche fine et cuire 2 à 3 minutes sans colorer, jusqu'à ce que le dessus soit juste pris. La rouler sur elle-même à la spatule, hors du feu. [[cuisson 3]]",
  "La sauce — Pendant la cuisson, mêler le yaourt de soja ({{yaourt de soja nature}}) et l'aneth ciselé. [[// delayer]]",
  "Dressage — Trancher le rouleau en trois tronçons, les dresser debout sur l'assiette avec le pain de sarrasin ({{pain de sarrasin}}) coupé en mouillettes et la sauce à l'aneth dans un petit bol. [[trancher; couper pain de sarrasin; dresser x3]]"],
 tip:"Cuite à feu doux et roulée juste prise, l'omelette reste moelleuse, sans aucune coloration."}),

RC({id:"b-riz-tofu-soyeux-nori", n:"Bol de riz tiède, tofu soyeux, sauce soja-sésame & nori", cat:"Tofu", st:"Petit-déjeuner", base:"Riz", d:1, go:"Salé",
 ing:[["riz cuit",80,"g"],["tofu soyeux",80,"g"],["sauce soja",0.5,"c. à café"],["huile de sésame grillé",0.5,"c. à café"],["nori",1,"pièce"],["ciboulette","",HERBS]],
 steps:[
  "Avant de commencer — Ustensiles : une petite casserole avec couvercle, une cuillère, des ciseaux, un petit bol, un bol de service. Riz cuit la veille au Bamboo (WHITE, 35 minutes).",
  "Le réchauffage — Mettre le riz ({{riz cuit}}) et une cuillère d'eau dans la casserole, poser le tofu soyeux ({{tofu soyeux}}) entier dessus, couvrir et chauffer 4 minutes à feu doux : le riz redevient souple, le tofu tiédit à cœur. [[sortir; casserole; cuisson 4]]",
  "La sauce — Pendant ce temps, mélanger la sauce soja ({{sauce soja}}), l'huile de sésame grillé ({{huile de sésame grillé}}) et une cuillère d'eau ; ciseler le nori ({{nori}}) et la ciboulette en fins rubans. [[// delayer; ciseler]]",
  "Dressage — Riz dans le bol, tofu soyeux posé dessus à la cuillère, sauce versée sur le tofu, nori et ciboulette en pluie. [[dresser x3]]"],
 tip:"Le tofu soyeux se réchauffe sur le riz, sous le couvercle : il garde sa texture de flan."}),

RC({id:"b-tartine-tofu-carotte", n:"Tartine de sarrasin, tofu écrasé à la ciboulette & carotte râpée fondante", cat:"Tofu", st:"Petit-déjeuner", base:"Sarrasin", d:1, go:"Salé",
 ing:[["pain de sarrasin",60,"g"],["tofu ferme",50,"g"],["carotte",50,"g"],["huile d'olive",1,"c. à café"],["ciboulette","",HERBS],["sel","","1 pincée"]],
 steps:[
  "Avant de commencer — Ustensiles : un économe, une râpe, une petite casserole avec couvercle, du papier absorbant, une fourchette, une assiette.",
  "La carotte — Éplucher la carotte ({{carotte}}), la râper dans la casserole avec 2 cuillères d'eau, couvrir et cuire 3 minutes à feu doux : elle devient fondante. [[sortir; eplucher carotte; raper carotte; casserole; cuisson 3]]",
  "Le tofu — Pendant ce temps, éponger le tofu ({{tofu ferme}}) et l'écraser à la fourchette avec l'huile d'olive crue ({{huile d'olive}}), la ciboulette ciselée (pointes vertes) et le sel. [[// presser tofu; ecraser; ciseler]]",
  "Dressage — Tartiner le pain de sarrasin ({{pain de sarrasin}}) de tofu, couvrir de carotte tiède. [[dresser x2]]"],
 tip:"Le tofu écrasé à l'huile d'olive fait une tartinade douce, riche en protéines."}),

RC({id:"b-okayu-epinards", n:"Okayu tiède aux épinards et tofu soyeux, bouillon doux", cat:"Tofu", st:"Petit-déjeuner", base:"Riz", d:1, go:"Salé",
 ing:[["riz cuit",80,"g"],["bouillon",150,"ml"],["épinards",40,"g"],["tofu soyeux",60,"g"],["huile de sésame grillé",0.5,"c. à café"]],
 steps:[
  "Avant de commencer — Ustensiles : une petite casserole, une cuillère en bois, des ciseaux, un bol de service. Riz cuit la veille au Bamboo (WHITE, 35 minutes).",
  "Le riz — Chauffer le riz ({{riz cuit}}) dans le bouillon ({{bouillon}}) à feu doux, 4 minutes en remuant : il se défait en bouillie crémeuse. [[sortir; casserole; cuisson 4]]",
  "Les épinards et le tofu — Pendant ce temps, laver les épinards ({{épinards}}) et les ciseler, couper le tofu soyeux ({{tofu soyeux}}) en cubes. [[// laver epinards; ciseler; couper tofu soyeux]]",
  "La fin de cuisson — Ajouter épinards et tofu dans la casserole pour 2 minutes : les épinards fondent. [[cuisson 2]]",
  "Dressage — Verser dans le bol, une goutte d'huile de sésame grillé ({{huile de sésame grillé}}) à la surface. [[dresser x1]]"],
 tip:"Un riz déjà cuit devient okayu en quelques minutes : un réveil tout en douceur."}),

RC({id:"b-oeuf-brouille-epinards", n:"Œuf brouillé crémeux aux épinards fondus, pain de sarrasin", cat:"Œufs", st:"Petit-déjeuner", base:"Sarrasin", d:1, go:"Salé",
 ing:[["œuf",1,"pièce"],["épinards",40,"g"],["crème de soja",1,"c. à soupe"],["pain de sarrasin",60,"g"],["sel","","1 pincée"]],
 steps:[
  "Avant de commencer — Ustensiles : une fourchette, un bol, des ciseaux, une petite casserole antiadhésive, une cuillère en bois, une assiette.",
  "Mise en place — Laver les épinards ({{épinards}}) et les ciseler. Battre l'œuf ({{œuf}}) avec la crème de soja ({{crème de soja}}) et le sel. [[sortir; laver epinards; ciseler; battre]]",
  "Les épinards — Les faire fondre 1 minute à feu doux dans la casserole avec une cuillère d'eau. [[casserole; cuisson 1]]",
  "Le brouillé — Verser l'œuf sur les épinards et remuer sans cesse 3 minutes à feu très doux : de petits grumeaux crémeux, brillants, sans coloration. [[cuisson 3]]",
  "Dressage — Pain de sarrasin ({{pain de sarrasin}}) en tartines sur l'assiette, brouillé tiède par-dessus. [[dresser x2]]"],
 tip:"Retirer le brouillé du feu quand il brille encore : il finit de prendre dans l'assiette."}),

RC({id:"b-galette-sarrasin-courgette", n:"Galette fine de sarrasin, tofu soyeux et courgette fondue", cat:"Tofu", st:"Petit-déjeuner", base:"Sarrasin", d:1, go:"Salé",
 ing:[["farine de sarrasin",30,"g"],["tofu soyeux",60,"g"],["courgette épluchée",40,"g"],["huile d'olive",0.5,"c. à café"],["sel","","1 pincée"]],
 steps:[
  "Avant de commencer — Ustensiles : un bol, un fouet, un économe, une râpe, une poêle antiadhésive, une petite casserole, une spatule, une assiette.",
  "La pâte et la courgette — Fouetter la farine de sarrasin ({{farine de sarrasin}}) avec 70 ml d'eau et le sel. Éplucher entièrement la courgette ({{courgette épluchée}}) et la râper. [[sortir; delayer; eplucher courgette; raper courgette]]",
  "La galette — Verser la pâte en couche fine dans la poêle sèche à feu doux, cuire sans colorer jusqu'à ce que la surface soit mate, retourner 20 secondes. [[cuisson 4]]",
  "La garniture — Pendant la galette, faire fondre la courgette râpée 3 minutes à feu doux dans la petite casserole, ajouter le tofu soyeux ({{tofu soyeux}}) en cubes pour la dernière minute. [[// casserole; cuisson 3; couper tofu soyeux]]",
  "Dressage — Garnir le centre de la galette, plier les bords en carré, filet d'huile d'olive crue ({{huile d'olive}}). [[dresser x2]]"],
 tip:"La galette se cuit à sec, à feu doux : elle reste souple et sans coloration."}),

RC({id:"b-quinoa-courgette-skyr", n:"Quinoa tiède, courgette râpée fondue & skyr de soja à l'aneth", cat:"Protéines végétales", st:"Petit-déjeuner", base:"Quinoa", d:1, go:"Salé",
 ing:[["quinoa cuit",80,"g"],["courgette épluchée",50,"g"],["skyr de soja",80,"g"],["huile d'olive",0.5,"c. à café"],["aneth","",HERBS],["sel","","1 pincée"]],
 steps:[
  "Avant de commencer — Ustensiles : un économe, une râpe, une petite casserole avec couvercle, un petit bol, des ciseaux, un bol de service. Quinoa cuit la veille au Bamboo (QUICK COOK).",
  "La courgette — Éplucher entièrement la courgette ({{courgette épluchée}}), la râper dans la casserole avec le quinoa ({{quinoa cuit}}) et 2 cuillères d'eau, couvrir et chauffer 3 minutes à feu doux. [[sortir; eplucher courgette; raper courgette; casserole; cuisson 3]]",
  "Le skyr — Pendant ce temps, mélanger le skyr de soja ({{skyr de soja}}) avec l'aneth ciselé et le sel. [[// ciseler; delayer]]",
  "Dressage — Quinoa et courgette tièdes dans le bol, skyr à l'aneth en quenelle, filet d'huile d'olive crue ({{huile d'olive}}). [[dresser x2]]"],
 tip:"Le quinoa de la veille se réchauffe avec la courgette râpée : un bol salé prêt en cinq minutes."}),

RC({id:"b-bouillon-tofu-carotte", n:"Bouillon clair au tofu ferme, carotte en fins bâtonnets & riz", cat:"Tofu", st:"Petit-déjeuner", base:"Riz", d:1, go:"Salé",
 ing:[["riz cuit",70,"g"],["tofu ferme",50,"g"],["carotte",40,"g"],["bouillon",200,"ml"],["huile de sésame grillé",0.5,"c. à café"],["coriandre","",HERBS]],
 steps:[
  "Avant de commencer — Ustensiles : un économe, une planche et un couteau, une petite casserole, une louche, un bol. Riz cuit la veille au Bamboo (WHITE, 35 minutes).",
  "Mise en place — Éplucher la carotte ({{carotte}}) et la tailler en fins bâtonnets ; couper le tofu ({{tofu ferme}}) en dés de 1 cm. [[sortir; eplucher carotte; couper carotte; couper tofu]]",
  "Le bouillon — Chauffer le bouillon ({{bouillon}}) avec la carotte, 4 minutes à petit frémissement, puis ajouter le tofu et le riz ({{riz cuit}}) 1 minute. [[casserole; cuisson 5]]",
  "Dressage — Verser dans le bol, quelques gouttes d'huile de sésame grillé ({{huile de sésame grillé}}) et la coriandre ciselée ({{coriandre}}). [[ciseler; dresser x1]]"],
 tip:"Un bouillon chaud et léger le matin, doux pour l'estomac."})
];
