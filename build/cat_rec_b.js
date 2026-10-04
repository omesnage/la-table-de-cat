/* ============ PETITS-DÉJEUNERS LÉGERS (environ 250 kcal) : 8 sucrés, 8 salés ============
   Féculent 80-100 g cuits (ou 30 g de flocons d'avoine / farine de sarrasin crus), protéine 50-60 g ou 1 œuf, 1 c. à café d'huile à cru.
   10 minutes au maximum, étapes comprises (durées calculées par cat_time.js). Tout est cuit, tiède, sans friture ni coloration. */
const BREAKFAST = [
RC({id:"pdj-porridge-sarrasin", n:"Porridge de flocons de sarrasin à la vanille, banane écrasée & nuage de yaourt de soja", cat:"Protéines végétales", st:"Petit-déjeuner", base:"Sarrasin", d:1, go:"Sucré",
 ing:[["flocons de sarrasin",30,"g"],["lait de soja",120,"ml"],["banane",40,"g"],["yaourt de soja nature",60,"g"],["vanille naturelle",1,"pincée"]],
 steps:[
  "Avant de commencer — Ustensiles : une casserole de 1 litre, une cuillère en bois, une fourchette, une petite assiette, un joli bol.",
  "Le porridge — Dans la casserole, verser les flocons de sarrasin ({{flocons de sarrasin}}) et 100 ml d'eau (les flocons cuisent à l'eau, jamais au lait). Chauffer à feu doux 5 minutes en remuant jusqu'à ce que l'eau soit absorbée. [[sortir; casserole; cuisson 5]]",
  "Le lait chaud — Ajouter le lait de soja ({{lait de soja}}) et la vanille, chauffer 2 minutes à feu doux sans bouillir en remuant : le porridge devient soyeux. [[cuisson 2]]",
  "La banane — Pendant ce temps, écraser la banane ({{banane}}) à la fourchette en purée lisse, dans une petite assiette. [[// ecraser banane]]",
  "Dressage — Verser le porridge dans un joli bol, creuser un puits au centre, y déposer la banane, puis poser le yaourt de soja ({{yaourt de soja nature}}) en quenelle avec une cuillère passée sous l'eau chaude. [[dresser x3]]"],
 tip:"Le sarrasin se cuit à l'eau, le lait chaud n'arrive qu'à la fin : un porridge soyeux, prêt en une seule casserole."}),

RC({id:"pdj-verrine-myrtilles", n:"Verrine de yaourt de soja, avoine ramollie au lait de soja chaud & myrtilles compotées", cat:"Protéines végétales", st:"Petit-déjeuner", base:"Avoine", d:1, go:"Sucré",
 ing:[["flocons d'avoine",25,"g"],["lait de soja",60,"ml"],["yaourt de soja nature",100,"g"],["myrtilles",50,"g"],["vanille naturelle",1,"pincée"]],
 steps:[
  "Avant de commencer — Ustensiles : une petite casserole, un verre transparent ou un petit bol, une cuillère à long manche.",
  "La compote — Chauffer les myrtilles ({{myrtilles}}) avec une cuillère d'eau dans une petite casserole à feu doux, 4 minutes, jusqu'à ce qu'elles éclatent, puis les écraser légèrement à la fourchette. [[sortir; casserole; cuisson 4; ecraser myrtilles]]",
  "L'avoine — Pendant la compote, chauffer le lait de soja ({{lait de soja}}) 1 à 2 minutes dans une seconde petite casserole, sans bouillir, et le verser sur les flocons d'avoine ({{flocons d'avoine}}) placés au fond du verre : ils gonflent et deviennent tendres. [[// casserole; verser; cuisson 2]]",
  "Le yaourt — Parfumer le yaourt de soja ({{yaourt de soja nature}}) avec la vanille et le fouetter à la cuillère. [[delayer]]",
  "Dressage — Monter la verrine en trois couches nettes : l'avoine au fond, le yaourt au milieu, la compote de myrtilles tiède en nappage, en la faisant couler le long du verre. [[dresser x3]]"],
 tip:"Servir la compote encore tiède sur le yaourt frais : le contraste est la partie gourmande de la verrine."}),

RC({id:"pdj-skyr-banane", n:"Bol de skyr de soja, banane vanillée & flocons de sarrasin gonflés", cat:"Protéines végétales", st:"Petit-déjeuner", base:"Sarrasin", d:1, go:"Sucré",
 ing:[["skyr de soja",100,"g"],["banane",50,"g"],["flocons de sarrasin",25,"g"],["lait de riz",40,"ml"],["vanille naturelle",1,"pincée"]],
 steps:[
  "Avant de commencer — Ustensiles : un petit bol, une casserole, une fourchette, un bol de service.",
  "Les flocons — Dans une casserole, chauffer le lait de riz ({{lait de riz}}) à feu doux et y verser les flocons de sarrasin ({{flocons de sarrasin}}) : en 3 minutes, ils gonflent et deviennent moelleux. [[sortir; casserole; cuisson 3]]",
  "La banane — Écraser la banane ({{banane}}) avec la vanille jusqu'à une crème épaisse. [[// ecraser banane]]",
  "Le skyr — Détendre le skyr de soja ({{skyr de soja}}) à la fourchette pour qu'il soit lisse. [[delayer]]",
  "Dressage — Dans le bol, étaler le skyr, déposer au centre les flocons tièdes en dôme et couronner de la crème de banane. Un dernier trait de vanille. [[dresser x3]]"],
 tip:"Le skyr de soja reste frais sous les flocons chauds : deux températures dans la même cuillère."}),

RC({id:"pdj-riz-au-lait-vanille", n:"Riz au lait de soja vanillé, banane tiède & crème de soja", cat:"Protéines végétales", st:"Petit-déjeuner", base:"Riz", d:1, go:"Sucré",
 ing:[["riz cuit",80,"g"],["lait de soja",100,"ml"],["banane",30,"g"],["crème de soja",1,"c. à soupe"],["vanille naturelle",1,"pincée"]],
 steps:[
  "Avant de commencer — Ustensiles : une casserole, une cuillère en bois, une fourchette, un bol de service. Utiliser un riz basmati cuit la veille au programme WHITE du Bamboo (1 tasse de 180 ml de riz, eau jusqu'au repère, 35 minutes).",
  "Le riz au lait — Dans la casserole, chauffer le riz cuit ({{riz cuit}}) avec le lait de soja ({{lait de soja}}) et la vanille à feu doux, 6 minutes en remuant, jusqu'à une consistance de riz au lait. [[sortir; casserole; cuisson 6]]",
  "La banane — Couper la banane ({{banane}}) en rondelles de 5 mm. [[// couper banane]]",
  "La crème — Fouetter la crème de soja ({{crème de soja}}) à la fourchette pour l'alléger. [[// delayer]]",
  "Dressage — Verser le riz au lait dans le bol tiède, disposer les rondelles de banane en rosace, napper d'un ruban de crème de soja. [[dresser x3]]"],
 tip:"Un riz de la veille donne un riz au lait plus crémeux qu'un riz tout juste cuit."}),

RC({id:"pdj-creme-avoine", n:"Crème tiède d'avoine vanille-banane au lait de soja, coulis de myrtilles", cat:"Protéines végétales", st:"Petit-déjeuner", base:"Avoine", d:1, go:"Sucré",
 ing:[["flocons d'avoine",25,"g"],["lait de soja",120,"ml"],["banane",40,"g"],["myrtilles",30,"g"],["vanille naturelle",1,"pincée"]],
 steps:[
  "Avant de commencer — Ustensiles : une casserole, un mixeur plongeant avec un grand verre doseur, une cuillère, un joli bol.",
  "L'avoine — Dans la casserole, chauffer les flocons d'avoine ({{flocons d'avoine}}) avec 100 ml d'eau à feu doux, 4 minutes en remuant (les flocons cuisent à l'eau, jamais au lait), jusqu'à ce qu'ils soient très tendres. [[sortir; casserole; cuisson 4]]",
  "La crème — Verser l'avoine dans le verre doseur avec le lait de soja froid ({{lait de soja}}), la banane ({{banane}}) en morceaux et la vanille, puis mixer jusqu'à une crème lisse et tiède. [[verser; couper banane; mixer]]",
  "Le coulis — Écraser les myrtilles ({{myrtilles}}) à la fourchette avec une cuillère d'eau chaude. [[// ecraser myrtilles]]",
  "Dressage — Verser la crème dans le bol, puis tracer un cordon de coulis de myrtilles en spirale à la surface. [[dresser x2]]"],
 tip:"L'avoine mixée donne une crème onctueuse en quelques minutes, sans aucun four ni vapeur."}),

RC({id:"pdj-potimarron-vanille", n:"Bouillie de potimarron râpé vanillée, flocons de sarrasin, lait de soja & yaourt de soja", cat:"Protéines végétales", st:"Petit-déjeuner", base:"Sarrasin", d:1, go:"Sucré",
 ing:[["potimarron",60,"g"],["flocons de sarrasin",25,"g"],["lait de soja",80,"ml"],["yaourt de soja nature",40,"g"],["vanille naturelle",1,"pincée"]],
 steps:[
  "Avant de commencer — Ustensiles : un économe, une râpe à gros trous, une petite casserole, une cuillère en bois, un bol de service.",
  "Mise en place — Éplucher le morceau de potimarron ({{potimarron}}) et le râper à gros trous directement au-dessus de la casserole. [[sortir; eplucher potimarron; raper potimarron]]",
  "La cuisson — Ajouter les flocons de sarrasin ({{flocons de sarrasin}}) et 80 ml d'eau, poser sur feu doux et cuire 4 minutes en remuant : le potimarron râpé fond et l'eau est absorbée (les flocons cuisent à l'eau, jamais au lait). [[casserole; cuisson 4]]",
  "Le lait chaud — Verser le lait de soja ({{lait de soja}}) et la vanille, chauffer 1 minute sans bouillir en remuant : la bouillie devient crémeuse et orangée. [[cuisson 1]]",
  "Dressage — Verser dans le bol tiède et poser au centre une quenelle de yaourt de soja ({{yaourt de soja nature}}). [[dresser x2]]"],
 tip:"Râpé, le potimarron cuit en même temps que les flocons : sa douceur de châtaigne remplace le sucre."}),

RC({id:"pdj-crepe-sarrasin-banane", n:"Crêpe fine de sarrasin à la banane, crème de soja vanillée", cat:"Œufs", st:"Petit-déjeuner", base:"Sarrasin", d:1, go:"Sucré",
 ing:[["farine de sarrasin",25,"g"],["œuf",1,"pièce"],["banane",30,"g"],["lait de soja",40,"ml"],["crème de soja",1,"c. à soupe"],["vanille naturelle",1,"pincée"]],
 steps:[
  "Avant de commencer — Ustensiles : un bol, un fouet ou une fourchette, une poêle antiadhésive de 18 à 20 cm, une spatule fine, une fourchette, une assiette de service.",
  "La pâte — Dans le bol, battre l'œuf ({{œuf}}) avec le lait de soja ({{lait de soja}}) et 30 ml d'eau, ajouter la farine de sarrasin ({{farine de sarrasin}}) et la vanille, puis fouetter jusqu'à une pâte très fluide. [[sortir; battre; delayer]]",
  "La crêpe — Verser la pâte d'un coup dans la poêle antiadhésive sèche, à feu doux, en la répartissant en couche fine. Cuire sans colorer : environ 2 minutes, jusqu'à ce que la surface soit mate, puis retourner et cuire 2 minutes de plus. [[cuisson 4]]",
  "La banane — Écraser la banane ({{banane}}) à la fourchette en purée. [[// ecraser banane]]",
  "La crème — Fouetter la crème de soja ({{crème de soja}}). [[// delayer]]",
  "Dressage — Poser la crêpe tiède à plat sur l'assiette, étaler la banane sur la moitié, replier en demi-lune puis en éventail et napper de crème de soja. [[dresser x3]]"],
 tip:"La pâte très fluide donne une crêpe fine et souple, cuite à feu doux sans jamais dorer."}),

RC({id:"pdj-quinoa-lait", n:"Quinoa tiède au lait de riz, banane & yaourt de soja", cat:"Protéines végétales", st:"Petit-déjeuner", base:"Quinoa", d:1, go:"Sucré",
 ing:[["quinoa cuit",80,"g"],["lait de riz",60,"ml"],["banane",30,"g"],["yaourt de soja nature",60,"g"],["vanille naturelle",1,"pincée"]],
 steps:[
  "Avant de commencer — Ustensiles : une casserole, une fourchette, un bol de service. Utiliser un quinoa cuit la veille au Bamboo (programme QUICK COOK, 1 volume de quinoa rincé pour 1 volume d'eau, repos 5 à 10 minutes couvercle fermé).",
  "Le quinoa — Chauffer le quinoa cuit ({{quinoa cuit}}) avec le lait de riz ({{lait de riz}}) et la vanille à feu doux, 4 minutes, jusqu'à ce qu'il boive le lait. [[sortir; casserole; cuisson 4]]",
  "La banane — Écraser la banane ({{banane}}) à la fourchette. [[// ecraser banane]]",
  "Dressage — Quinoa dans le bol de service, banane écrasée sur un côté, yaourt de soja ({{yaourt de soja nature}}) en quenelle de l'autre : deux demi-lunes bien nettes. [[dresser x3]]"],
 tip:"Le quinoa du matin se prépare en 5 minutes si on le cuit la veille en même temps que le riz."}),

RC({id:"pdj-omelette-roulee", n:"Omelette roulée tendre à la ciboulette, pain de sarrasin & yaourt de soja à l'aneth", cat:"Œufs", st:"Petit-déjeuner", base:"Sarrasin", d:1, go:"Salé",
 ing:[["œuf",1,"pièce"],["pain de sarrasin",70,"g"],["yaourt de soja nature",40,"g"],["ciboulette","",HERBS],["aneth","",HERBS],["sel","","1 pincée"]],
 steps:[
  "Avant de commencer — Ustensiles : un bol, une fourchette, une poêle antiadhésive de 18 à 20 cm, une spatule fine, des ciseaux, une planche, une assiette.",
  "Mise en place — Battre l'œuf ({{œuf}}) à la fourchette avec une cuillère à soupe d'eau et une pincée de sel. Ciseler aux ciseaux la ciboulette (pointes vertes) et l'aneth, ajouter la ciboulette dans l'œuf. [[sortir; battre; ciseler]]",
  "L'omelette — Poser la poêle antiadhésive sèche sur feu doux, verser l'œuf en couche fine et cuire 2 à 3 minutes sans colorer, jusqu'à ce que le dessus soit juste pris. La rouler sur elle-même à la spatule, hors du feu. [[cuisson 3]]",
  "La sauce — Pendant la cuisson, mêler le yaourt de soja ({{yaourt de soja nature}}) et l'aneth ciselé. [[// delayer]]",
  "Dressage — Trancher le rouleau en trois tronçons, les dresser debout sur l'assiette avec le pain de sarrasin ({{pain de sarrasin}}) coupé en mouillettes et la sauce à l'aneth dans un petit bol. [[trancher; couper pain de sarrasin; dresser x3]]"],
 tip:"Cuite à feu doux et roulée juste prise, l'omelette reste moelleuse, sans aucune coloration."}),

RC({id:"pdj-okayu-express", n:"Okayu express au tofu, riz mijoté au bouillon & nori", cat:"Tofu", st:"Petit-déjeuner", base:"Riz", d:1, go:"Salé",
 ing:[["riz cuit",80,"g"],["bouillon",150,"ml"],["tofu ferme",50,"g"],["nori",1,"pièce"],["graines de sésame",1,"c. à café"],["huile de sésame grillé",0.5,"c. à café"]],
 steps:[
  "Avant de commencer — Ustensiles : une casserole, une cuillère en bois, des ciseaux, un bol de service tiède. Le riz est cuit la veille au Bamboo (programme WHITE, 35 minutes).",
  "Le riz — Dans la casserole, chauffer le riz cuit ({{riz cuit}}) avec le bouillon ({{bouillon}}) à feu doux, 6 minutes en remuant de temps en temps : le riz se défait en une bouillie claire et crémeuse. [[sortir; casserole; cuisson 6]]",
  "Le tofu — Pendant ce temps, couper le tofu ({{tofu ferme}}) en dés de 1 cm. Les ajouter dans la casserole pour les 3 dernières minutes afin qu'ils se réchauffent à cœur. [[// couper tofu ferme]]",
  "Le nori — Ciseler la feuille de nori ({{nori}}) en fins rubans. [[// ciseler]]",
  "Dressage — Verser l'okayu dans le bol, déposer les rubans de nori en tas au centre, parsemer de sésame ({{graines de sésame}}) et finir d'un filet d'huile de sésame grillé ({{huile de sésame grillé}}). [[dresser x4]]"],
 tip:"L'okayu se mange tiède : il apaise l'estomac dès le réveil."}),

RC({id:"pdj-tartine-skyr", n:"Tartine de sarrasin, skyr de soja à la ciboulette & rubans de carotte fondants", cat:"Protéines végétales", st:"Petit-déjeuner", base:"Sarrasin", d:1, go:"Salé",
 ing:[["pain de sarrasin",60,"g"],["skyr de soja",90,"g"],["carotte",50,"g"],["ciboulette","",HERBS],["huile d'olive",0.5,"c. à café"],["sel","","1 pincée"]],
 steps:[
  "Avant de commencer — Ustensiles : une casserole, une écumoire, un économe, un couteau, des ciseaux, une petite assiette.",
  "Les rubans — Éplucher la carotte ({{carotte}}) en rubans très fins à l'économe, de 1 à 2 mm d'épaisseur. [[sortir; eplucher carotte; rubans carotte]]",
  "La cuisson — Dans la casserole, porter à frémissement 300 ml d'eau (3 minutes), y plonger les rubans et les cuire 2 minutes, jusqu'à ce qu'ils soient souples et fondants. Les sortir à l'écumoire et les égoutter. [[casserole; attente 3; cuisson 2; egoutter]]",
  "La crème — Pendant ce temps, mélanger le skyr de soja ({{skyr de soja}}) avec la ciboulette ciselée (pointes vertes) et une pincée de sel. [[// delayer; ciseler]]",
  "Dressage — Tartiner généreusement le pain de sarrasin ({{pain de sarrasin}}) de skyr, enrouler les rubans de carotte tièdes en rosace dessus, un filet d'huile d'olive crue ({{huile d'olive}}) pour la brillance. [[dresser x3]]"],
 tip:"Des rubans de carotte très fins cuisent en 2 minutes : ils s'enroulent en rose et se mangent à la fourchette."}),

RC({id:"pdj-oeufs-brouilles", n:"Œuf brouillé crémeux à la ciboulette & crème de soja, pain de sarrasin", cat:"Œufs", st:"Petit-déjeuner", base:"Sarrasin", d:1, go:"Salé",
 ing:[["œuf",1,"pièce"],["pain de sarrasin",70,"g"],["crème de soja",1,"c. à soupe"],["ciboulette","",HERBS],["sel","","1 pincée"]],
 steps:[
  "Avant de commencer — Ustensiles : un bol, une fourchette, une petite casserole antiadhésive, une cuillère en bois, des ciseaux, un couteau, une assiette.",
  "Mise en place — Battre l'œuf ({{œuf}}) à la fourchette avec la crème de soja ({{crème de soja}}) et une pincée de sel. Ciseler la ciboulette (pointes vertes) et trancher le pain de sarrasin ({{pain de sarrasin}}) en deux tartines fines. [[sortir; battre; ciseler; trancher]]",
  "Le brouillé — Verser l'œuf dans la casserole antiadhésive sèche, à feu très doux, et remuer sans cesse à la cuillère en bois pendant 4 minutes : les œufs forment de petits grumeaux crémeux, encore brillants. Les retirer du feu un peu avant qu'ils soient fermes, ils finissent de cuire dans la casserole. Ne jamais les laisser colorer. [[cuisson 4]]",
  "Dressage — Poser les tartines sur l'assiette, répartir l'œuf brouillé tiède dessus et parsemer de ciboulette. [[dresser x2]]"],
 tip:"À feu très doux, l'œuf reste crémeux et ne colore jamais : une cuisson à la casserole, sans huile ni friture."}),

RC({id:"pdj-soupe-oeuf-tofu", n:"Soupe d'œuf filée au tofu soyeux, carotte & riz tiède", cat:"Œufs", st:"Petit-déjeuner", base:"Riz", d:1, go:"Salé",
 ing:[["œuf",1,"pièce"],["bouillon",150,"ml"],["tofu soyeux",40,"g"],["carotte",30,"g"],["riz cuit",50,"g"],["huile de sésame grillé",0.5,"c. à café"]],
 steps:[
  "Avant de commencer — Ustensiles : une casserole, une râpe fine, une fourchette, un bol de service tiède, une cuillère. Le riz est cuit la veille au Bamboo (programme WHITE, 35 minutes).",
  "Mise en place — Râper finement la carotte ({{carotte}}), couper le tofu soyeux ({{tofu soyeux}}) en petits cubes et battre l'œuf ({{œuf}}) à la fourchette dans un bol. [[sortir; raper carotte; couper tofu soyeux; battre]]",
  "Le bouillon — Dans la casserole, chauffer le bouillon ({{bouillon}}) avec la carotte râpée à feu doux, 4 minutes, jusqu'à ce que la carotte soit tendre. [[casserole; cuisson 4]]",
  "L'œuf filé — Ajouter le tofu, attendre 1 minute, puis verser l'œuf battu en filet en remuant doucement une seule fois : il forme de longs rubans soyeux. Éteindre aussitôt. [[cuisson 2]]",
  "Dressage — Tasser le riz cuit ({{riz cuit}}) au fond du bol, verser la soupe tiède par-dessus, ajouter un trait d'huile de sésame grillé ({{huile de sésame grillé}}). [[dresser x2]]"],
 tip:"L'œuf versé en filet dans le bouillon chaud cuit en quelques secondes : c'est le chawanmushi en version express."}),

RC({id:"pdj-miso-doux", n:"Soupe miso douce, tofu, wakamé & riz", cat:"Tofu", st:"Petit-déjeuner", base:"Riz", d:1, go:"Salé",
 ing:[["eau",250,"ml"],["miso blanc",1,"c. à café"],["wakamé",2,"g"],["tofu ferme",50,"g"],["riz cuit",80,"g"],["huile de sésame grillé",0.5,"c. à café"]],
 steps:[
  "Avant de commencer — Ustensiles : une casserole, une louche, un bol de service, une cuillère, des ciseaux. Le riz est cuit la veille au Bamboo (programme WHITE, 35 minutes).",
  "Le bouillon — Dans la casserole, mettre l'eau ({{eau}}) froide, le wakamé ({{wakamé}}) coupé en petits morceaux aux ciseaux et le tofu ({{tofu ferme}}) en dés. Chauffer 5 minutes à feu doux, jusqu'à ce que la soupe fume doucement sans bouillir : le wakamé se réhydrate dans l'eau qui chauffe. [[sortir; couper tofu ferme; casserole; cuisson 5]]",
  "Le miso — Éteindre. Délayer le miso ({{miso blanc}}) dans une louche de bouillon, puis le verser dans la casserole : il ne doit jamais bouillir pour garder son parfum. [[delayer]]",
  "Dressage — Riz cuit ({{riz cuit}}) tassé au fond du bol, bouillon versé à la louche autour, goutte d'huile de sésame grillé ({{huile de sésame grillé}}) à la surface. [[dresser x3]]"],
 tip:"Le miso est fermenté : une cuillère à café suffit, et à éviter en phase de sensibilité aiguë."}),

RC({id:"pdj-galette-sarrasin-epinards", n:"Galette fine de sarrasin, épinards fondus, tofu & skyr de soja", cat:"Tofu", st:"Petit-déjeuner", base:"Sarrasin", d:1, go:"Salé",
 ing:[["farine de sarrasin",30,"g"],["épinards",30,"g"],["tofu ferme",50,"g"],["skyr de soja",40,"g"],["huile d'olive",0.5,"c. à café"],["sel","","1 pincée"]],
 steps:[
  "Avant de commencer — Ustensiles : un fouet, une petite casserole avec son couvercle, une poêle antiadhésive de 22 cm à feu doux, une spatule fine, une fourchette.",
  "La pâte — Fouetter la farine de sarrasin ({{farine de sarrasin}}) avec 80 ml d'eau et une pincée de sel jusqu'à une pâte fluide, et la laisser reposer pendant la garniture. [[sortir; delayer]]",
  "La galette — Verser la pâte en couche fine dans la poêle huilée ({{huile d'olive}}) à feu doux, cuire sans colorer jusqu'à ce que la surface soit mate, retourner 20 secondes. [[cuisson 4]]",
  "La garniture — Pendant la galette, dans la petite casserole, mettre le tofu ({{tofu ferme}}) émietté à la fourchette, les épinards ({{épinards}}) et 2 cuillères à soupe d'eau. Couvrir et cuire à feu moyen 3 minutes, jusqu'à ce que les épinards soient fondus, puis les presser pour ôter l'eau. [[// casserole; cuisson 3; presser epinards]]",
  "Dressage — Poser la galette à plat, garnir le centre d'épinards et de tofu, plier les quatre côtés en carré, couronner d'une quenelle de skyr de soja ({{skyr de soja}}). [[dresser x3]]"],
 tip:"Une pâte bien fluide donne une galette fine et souple qui se plie sans casser."}),

RC({id:"pdj-onigiri-sesame", n:"Onigiri tiède au sésame & tofu soyeux, crème de soja au sésame grillé", cat:"Tofu", st:"Petit-déjeuner", base:"Riz", d:1, go:"Salé",
 ing:[["riz cuit",90,"g"],["nori",1,"pièce"],["graines de sésame",1,"c. à café"],["tofu soyeux",70,"g"],["crème de soja",1,"c. à soupe"],["huile de sésame grillé",0.5,"c. à café"]],
 steps:[
  "Avant de commencer — Ustensiles : une petite casserole avec son couvercle, un petit bol d'eau pour les mains, une cuillère, des ciseaux, une assiette plate. Le riz est cuit la veille au programme WHITE du Bamboo (35 minutes).",
  "Le réchauffage — Dans la petite casserole, mettre le riz cuit ({{riz cuit}}) avec une cuillère à soupe d'eau, couvrir et chauffer 3 minutes à feu doux : le riz redevient tiède et souple. Poser sur le riz, pour la dernière minute, le tofu soyeux ({{tofu soyeux}}) coupé en cubes. [[sortir; casserole; couper tofu soyeux; cuisson 3]]",
  "Les boulettes — Mouiller les mains, façonner le riz tiède en deux triangles en pressant doucement, puis les ceinturer d'une bande de nori ({{nori}}) et les rouler dans le sésame ({{graines de sésame}}). [[former x2]]",
  "La crème — Mélanger la crème de soja ({{crème de soja}}) avec l'huile de sésame grillé ({{huile de sésame grillé}}). [[delayer]]",
  "Dressage — Dresser les deux onigiri en V sur l'assiette, le tofu tiède entre les deux et la crème de sésame en petits points tout autour. [[dresser x3]]"],
 tip:"Un onigiri se mange à la main : le riz doit être tiède, jamais brûlant."})
];
