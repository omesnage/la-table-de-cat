/* ============ PETITS-DÉJEUNERS LÉGERS (environ 250 kcal) : 8 sucrés, 8 salés ============
   Féculent 60-100 g cuits (ou 25-35 g de flocons ou de farine crus), protéine légère (soja, tofu) ou 1 œuf.
   10 minutes au maximum, étapes comprises (durées calculées par cat_time.js), rien à préparer la veille
   sauf le riz ou le quinoa déjà cuits. Tout est cuit, tiède, sans friture ni coloration.
   Catalogue v10 : chaque recette a un parti pris de goût (texture, parfum infusé, contraste tiède/frais) plutôt qu'un simple assemblage. */
const BREAKFAST = [
/* ---------- sucrés ---------- */
RC({id:"n-pdj-porridge-banane-erable", n:"Porridge d'avoine crémeux, banane tiède écrasée & fil de sirop d'érable", cat:"Protéines végétales", st:"Petit-déjeuner", base:"Avoine", d:1, go:"Sucré",
 ing:[["flocons d'avoine",30,"g"],["lait de soja",100,"ml"],["banane",50,"g"],["yaourt de soja nature",40,"g"],["sirop d'érable",1,"c. à café"],["vanille naturelle",1,"pincée"]],
 steps:[
  "Avant de commencer — Ustensiles : une petite casserole, une cuillère en bois, une fourchette, un bol de service tiède.",
  "L'avoine à l'eau — Verser les flocons d'avoine ({{flocons d'avoine}}) et 100 ml d'eau dans la casserole (l'avoine cuit à l'eau, jamais au lait, qui déborderait) et cuire à feu doux 3 minutes en remuant : l'eau est absorbée, les flocons sont tendres et gonflés. [[sortir; casserole; cuisson 3]]",
  "Le lait et la banane — Ajouter le lait de soja ({{lait de soja}}) chaud, la vanille et la banane ({{banane}}) écrasée à la fourchette directement dans la casserole, 2 minutes à feu doux en remuant. La banane fond et sucre le porridge de l'intérieur. [[ecraser banane; cuisson 2]]",
  "Dressage — Verser dans le bol tiède, déposer le yaourt de soja ({{yaourt de soja nature}}) en quenelle au centre et finir d'un fil de sirop d'érable ({{sirop d'érable}}) : le chaud du porridge et le frais du yaourt se répondent. [[dresser x3]]"],
 tip:"Cuire l'avoine à l'eau puis ajouter le lait chaud : le porridge reste crémeux et ne déborde jamais ; la banane écrasée dedans remplace le sucre."}),

RC({id:"n-pdj-riz-vanille-myrtilles", n:"Riz crémeux au lait de riz vanillé, myrtilles éclatées & yaourt de soja", cat:"Protéines végétales", st:"Petit-déjeuner", base:"Riz", d:1, go:"Sucré",
 ing:[["riz cuit",80,"g"],["lait de riz",80,"ml"],["yaourt de soja nature",50,"g"],["myrtilles",40,"g"],["sirop d'érable",1,"c. à café"],["vanille naturelle",1,"pincée"]],
 steps:[
  "Avant de commencer — Ustensiles : deux petites casseroles, une cuillère en bois, une fourchette, un bol de service tiède. Le riz basmati est cuit la veille au Bamboo (programme WHITE, 35 minutes).",
  "Le riz au lait — Dans une casserole, chauffer le riz cuit ({{riz cuit}}) avec le lait de riz ({{lait de riz}}) et la vanille à feu doux, 5 minutes en remuant, jusqu'à ce que le riz ait bu presque tout le lait et épaissi comme un riz au lait. [[sortir; casserole; cuisson 5]]",
  "Les myrtilles — Pendant ce temps, chauffer les myrtilles ({{myrtilles}}) avec une cuillère d'eau et le sirop d'érable ({{sirop d'érable}}) dans la seconde casserole, 3 minutes, jusqu'à ce qu'elles éclatent et rendent un jus violet brillant ; en écraser la moitié à la fourchette. [[// casserole; cuisson 3; ecraser myrtilles]]",
  "Dressage — Riz au lait dans le bol, yaourt de soja ({{yaourt de soja nature}}) au centre, myrtilles tièdes et leur jus versés en spirale par-dessus. [[dresser x3]]"],
 tip:"Le riz de la veille a déjà gonflé : il devient crémeux en cinq minutes, sans le remuer vingt minutes comme un riz au lait classique."}),

RC({id:"n-pdj-quinoa-banane-erable", n:"Quinoa tiède au lait d'avoine, banane fondante & sirop d'érable", cat:"Protéines végétales", st:"Petit-déjeuner", base:"Quinoa", d:1, go:"Sucré",
 ing:[["quinoa cuit",90,"g"],["lait d'avoine",100,"ml"],["banane",40,"g"],["sirop d'érable",1,"c. à café"],["vanille naturelle",1,"pincée"]],
 steps:[
  "Avant de commencer — Ustensiles : une petite casserole, une cuillère en bois, une planche et un couteau, un bol de service tiède. Le quinoa est cuit la veille au Bamboo (QUICK COOK, 1 volume de quinoa pour 1 volume d'eau).",
  "Le quinoa au lait — Chauffer le quinoa cuit ({{quinoa cuit}}) avec le lait d'avoine ({{lait d'avoine}}) et la vanille à feu très doux, 5 minutes, en remuant : les grains boivent le lait et deviennent crémeux comme un pudding. [[sortir; casserole; cuisson 5]]",
  "La banane — Couper la banane ({{banane}}) en rondelles de 5 mm et les poser sur le quinoa pour les 2 dernières minutes : elles ramollissent et parfument le dessus. [[couper banane; cuisson 2]]",
  "Dressage — Verser dans le bol tiède, terminer d'un fil de sirop d'érable ({{sirop d'érable}}) en zigzag. [[dresser x2]]"],
 tip:"Le lait d'avoine, naturellement doux, arrondit le quinoa sans sucre ajouté : le sirop d'érable n'est là que pour la finition."}),

RC({id:"n-pdj-pancakes-sarrasin-compotee", n:"Pancakes épais de sarrasin à la banane, compotée minute de myrtilles & yaourt de soja", cat:"Protéines végétales", st:"Petit-déjeuner", base:"Sarrasin", d:1, go:"Sucré",
 ing:[["farine de sarrasin",30,"g"],["banane",50,"g"],["lait de soja",50,"ml"],["myrtilles",40,"g"],["yaourt de soja nature",50,"g"],["vanille naturelle",1,"pincée"]],
 steps:[
  "Avant de commencer — Ustensiles : un bol, une fourchette, une poêle antiadhésive bien sèche, une petite casserole, une spatule fine, une assiette.",
  "La pâte — Écraser la banane ({{banane}}) à la fourchette dans le bol, ajouter la farine de sarrasin ({{farine de sarrasin}}), le lait de soja ({{lait de soja}}) et la vanille, mélanger jusqu'à une pâte épaisse et lisse, qui tient sur la cuillère. [[sortir; ecraser banane; delayer]]",
  "Les pancakes — Chauffer la poêle sèche à feu doux, sans matière grasse. Y déposer 3 petites louches de pâte, cuire 2 minutes jusqu'à ce que des bulles apparaissent à la surface, retourner et cuire encore 1 minute. Les pancakes restent pâles et moelleux, jamais colorés. [[casserole; cuisson 3]]",
  "La compotée — Pendant la cuisson, chauffer les myrtilles ({{myrtilles}}) avec une cuillère d'eau dans la petite casserole, 3 minutes, jusqu'à ce qu'elles éclatent. [[// casserole; cuisson 3]]",
  "Dressage — Empiler les pancakes sur l'assiette tiède, poser le yaourt de soja ({{yaourt de soja nature}}) au centre et la compotée tiède en nappage. [[dresser x3]]"],
 tip:"La banane écrasée lie la pâte sans œuf et la sucre : le pancake de sarrasin garde son goût de noisette."}),

RC({id:"n-pdj-galette-avoine-banane", n:"Galettes moelleuses d'avoine et de banane, crème de soja vanillée", cat:"Protéines végétales", st:"Petit-déjeuner", base:"Avoine", d:1, go:"Sucré",
 ing:[["flocons d'avoine",30,"g"],["banane",60,"g"],["lait de soja",60,"ml"],["crème de soja",1,"c. à soupe"],["vanille naturelle",1,"pincée"]],
 steps:[
  "Avant de commencer — Ustensiles : un mixeur plongeant avec son verre (ou un mixeur), une poêle antiadhésive bien sèche, une spatule fine, un petit bol, une assiette.",
  "La pâte — Mixer les flocons d'avoine ({{flocons d'avoine}}), la banane ({{banane}}) en morceaux, le lait de soja ({{lait de soja}}) et la moitié de la vanille jusqu'à obtenir une pâte lisse et épaisse. [[sortir; couper banane; mixer]]",
  "Les galettes — Chauffer la poêle sèche à feu doux. Verser 2 petites louches de pâte, étaler en rond de 8 cm, cuire 2 minutes jusqu'à ce que la surface soit mate, retourner et cuire 1 minute : la galette reste pâle et moelleuse. [[casserole; cuisson 3]]",
  "La crème — Mélanger la crème de soja ({{crème de soja}}) avec le reste de vanille dans le petit bol. [[delayer]]",
  "Dressage — Poser les galettes sur l'assiette tiède, napper de crème vanillée. [[dresser x2]]"],
 tip:"Mixer les flocons avec la banane donne des galettes plus soyeuses qu'un simple porridge : une texture entre la crêpe et le gâteau."}),

RC({id:"n-pdj-sarrasin-gonfle-banane", n:"Flocons de sarrasin gonflés à l'eau chaude, banane vanillée & yaourt de soja", cat:"Protéines végétales", st:"Petit-déjeuner", base:"Sarrasin", d:1, go:"Sucré",
 ing:[["flocons de sarrasin",30,"g"],["lait de soja",80,"ml"],["banane",50,"g"],["yaourt de soja nature",40,"g"],["vanille naturelle",1,"pincée"]],
 steps:[
  "Avant de commencer — Ustensiles : une petite casserole, une cuillère en bois, une planche et un couteau, un bol de service tiède.",
  "Les flocons — Chauffer le lait de soja ({{lait de soja}}) avec la vanille jusqu'à ce qu'il fume, y verser les flocons de sarrasin ({{flocons de sarrasin}}), mélanger, couvrir et laisser gonfler 4 minutes hors du feu : les flocons deviennent tendres et nappés de lait. [[sortir; casserole; attente 4]]",
  "La banane — Pendant ce temps, couper la banane ({{banane}}) en rondelles. [[// couper banane]]",
  "Dressage — Remuer les flocons, les verser dans le bol, poser les rondelles de banane et une quenelle de yaourt de soja ({{yaourt de soja nature}}). [[dresser x3]]"],
 tip:"Hors du feu, les flocons de sarrasin gonflent sans jamais coller : c'est le petit-déjeuner le plus rapide du carnet."}),

RC({id:"n-pdj-creme-riz-carotte", n:"Crème de riz tiède à la carotte et à la vanille, façon gâteau de carotte", cat:"Protéines végétales", st:"Petit-déjeuner", base:"Riz", d:1, go:"Sucré",
 ing:[["riz cuit",80,"g"],["lait de soja",100,"ml"],["carotte",40,"g"],["sirop d'érable",1,"c. à café"],["vanille naturelle",1,"pincée"]],
 steps:[
  "Avant de commencer — Ustensiles : une petite casserole, une cuillère en bois, un économe, une râpe fine, un bol de service tiède. Le riz basmati est cuit la veille au Bamboo (programme WHITE, 35 minutes).",
  "La carotte — Éplucher la carotte ({{carotte}}) et la râper très finement : elle cuit en quelques minutes. [[eplucher carotte; raper carotte]]",
  "La crème — Chauffer le riz cuit ({{riz cuit}}), la carotte râpée, le lait de soja ({{lait de soja}}) et la vanille à feu doux 5 minutes en remuant, jusqu'à ce que la carotte soit tendre et que le riz ait épaissi en crème orangée. [[sortir; casserole; cuisson 5]]",
  "Dressage — Verser dans le bol tiède et finir d'un fil de sirop d'érable ({{sirop d'érable}}). [[dresser x2]]"],
 tip:"La carotte, très sucrée une fois cuite, parfume le riz comme un gâteau de carotte, sans épice ni sucre en excès."}),

RC({id:"n-pdj-tartine-sarrasin-compote", n:"Pain de sarrasin tiède, compote minute de myrtilles & yaourt de soja", cat:"Protéines végétales", st:"Petit-déjeuner", base:"Sarrasin", d:1, go:"Sucré",
 ing:[["pain de sarrasin",60,"g"],["myrtilles",50,"g"],["yaourt de soja nature",60,"g"],["sirop d'érable",1,"c. à café"],["vanille naturelle",1,"pincée"]],
 steps:[
  "Avant de commencer — Ustensiles : une petite casserole, une fourchette, un couteau à tartiner, une assiette tiède.",
  "La compote — Chauffer les myrtilles ({{myrtilles}}) avec une cuillère d'eau, le sirop d'érable ({{sirop d'érable}}) et la vanille dans la casserole, 4 minutes à feu doux, puis en écraser la moitié à la fourchette : une compote brillante, avec des fruits entiers. [[sortir; casserole; cuisson 4; ecraser myrtilles]]",
  "Le pain — Réchauffer le pain de sarrasin ({{pain de sarrasin}}) 2 minutes dans la casserole couverte hors du feu, juste assez pour qu'il soit tiède et souple, puis le trancher en deux. [[// trancher; cuisson 2]]",
  "Dressage — Tartiner le yaourt de soja ({{yaourt de soja nature}}) sur le pain, déposer la compote tiède par-dessus. [[dresser x3]]"],
 tip:"Le yaourt frais sous la compote chaude : un contraste de température qui réveille un petit-déjeuner très doux."}),
/* ---------- salés ---------- */
RC({id:"n-pdj-okayu-bouillon-nori", n:"Okayu au bouillon : riz fondant, tofu soyeux, nori & huile de sésame grillé", cat:"Tofu", st:"Petit-déjeuner", base:"Riz", d:1, go:"Salé",
 ing:[["riz cuit",80,"g"],["bouillon",250,"ml"],["tofu soyeux",60,"g"],["nori",1,"pièce"],["sauce soja",0.5,"c. à café"],["huile de sésame grillé",1,"c. à café"]],
 steps:[
  "Avant de commencer — Ustensiles : une petite casserole, une cuillère en bois, une écumoire, un bol de service tiède. Le riz basmati est cuit la veille au Bamboo (programme WHITE, 35 minutes).",
  "Le riz dans le bouillon — Chauffer le bouillon ({{bouillon}}) avec le riz cuit ({{riz cuit}}) à feu doux 5 minutes en remuant de temps en temps : les grains s'ouvrent, le bouillon épaissit en une soupe de riz crémeuse. Ajouter le tofu soyeux ({{tofu soyeux}}) en gros morceaux à la cuillère pour les 2 dernières minutes, sans remuer : il se réchauffe sans se défaire. [[sortir; casserole; cuisson 5]]",
  "Dressage — Verser dans le bol tiède, émietter le nori ({{nori}}) au-dessus, ajouter la sauce soja ({{sauce soja}}) goutte à goutte et un filet d'huile de sésame grillé ({{huile de sésame grillé}}). [[dresser x3]]"],
 tip:"Dans un bouillon bien parfumé, le riz de la veille devient un okayu réconfortant en quelques minutes : le premier repas doux de la journée."}),

RC({id:"n-pdj-bol-riz-tofu-soyeux", n:"Bol de riz tiède, tofu soyeux, sauce soja-sésame & nori", cat:"Tofu", st:"Petit-déjeuner", base:"Riz", d:1, go:"Salé",
 ing:[["riz cuit",80,"g"],["tofu soyeux",100,"g"],["sauce soja",1,"c. à café"],["huile de sésame grillé",1,"c. à café"],["graines de sésame",1,"c. à café"],["nori",1,"pièce"]],
 steps:[
  "Avant de commencer — Ustensiles : une petite casserole avec couvercle, une cuillère, des ciseaux de cuisine, un bol de service tiède. Le riz basmati est cuit la veille au Bamboo (programme WHITE, 35 minutes).",
  "Le riz et le tofu — Mettre 2 cuillères d'eau dans la casserole, y poser le riz cuit ({{riz cuit}}) et le tofu soyeux ({{tofu soyeux}}) côte à côte, couvrir et chauffer 4 minutes à feu doux : la vapeur les réchauffe doucement. [[sortir; casserole; cuisson 4]]",
  "La sauce — Mélanger la sauce soja ({{sauce soja}}), l'huile de sésame grillé ({{huile de sésame grillé}}) et une cuillère d'eau tiède dans un petit bol. [[delayer]]",
  "Dressage — Riz au fond du bol, tofu soyeux détaillé en gros morceaux à la cuillère, sauce en filet, graines de sésame ({{graines de sésame}}) et nori ({{nori}}) coupé aux ciseaux en fins rubans. [[dresser x4]]"],
 tip:"Détailler le tofu soyeux à la cuillère plutôt qu'au couteau : les surfaces irrégulières retiennent mieux la sauce."}),

RC({id:"n-pdj-brouillade-tofu-sarrasin", n:"Brouillade crémeuse d'œuf et de tofu soyeux, pain de sarrasin tiède & ciboulette", cat:"Œufs", st:"Petit-déjeuner", base:"Sarrasin", d:1, go:"Salé",
 ing:[["œuf",1,"pièce"],["tofu soyeux",50,"g"],["pain de sarrasin",60,"g"],["ciboulette","",HERBS],["sel","","1 pincée"]],
 steps:[
  "Avant de commencer — Ustensiles : une petite casserole à fond épais, un fouet, une spatule, une assiette tiède.",
  "La brouillade — Casser l'œuf ({{œuf}}) dans la casserole froide, ajouter le tofu soyeux ({{tofu soyeux}}) écrasé à la fourchette et une pincée de sel, battre au fouet. Poser sur feu très doux et remuer sans cesse à la spatule 4 minutes : de petits grumeaux crémeux se forment. Retirer du feu quand la masse est encore brillante et humide. [[sortir; battre; casserole; cuisson 4]]",
  "Le pain — Pendant ce temps, trancher le pain de sarrasin ({{pain de sarrasin}}) en mouillettes. Le réchauffer 1 minute à couvert dans une poêle sèche tiède. [[// trancher; cuisson 1]]",
  "Dressage — Brouillade sur l'assiette tiède, mouillettes à côté, pointes vertes de ciboulette ({{ciboulette}}) ciselées en pluie. [[ciseler; dresser x3]]"],
 tip:"Le tofu soyeux prolonge la douceur de l'œuf comme une crème fraîche : retirer du feu avant la fin, la chaleur résiduelle finit la cuisson."}),

RC({id:"n-pdj-galette-sarrasin-tofu-epinards", n:"Galette fine de sarrasin, tofu soyeux & épinards fondus", cat:"Tofu", st:"Petit-déjeuner", base:"Sarrasin", d:1, go:"Salé",
 ing:[["farine de sarrasin",30,"g"],["tofu soyeux",60,"g"],["épinards",40,"g"],["huile d'olive",1,"c. à café"],["sel","","1 pincée"]],
 steps:[
  "Avant de commencer — Ustensiles : un bol, un fouet, une poêle antiadhésive bien sèche, une spatule fine, une assiette tiède.",
  "La pâte — Fouetter la farine de sarrasin ({{farine de sarrasin}}), 60 ml d'eau et le sel jusqu'à une pâte fluide et lisse, comme une crème liquide. [[sortir; delayer]]",
  "La galette — Chauffer la poêle sèche à feu doux, verser la pâte, étaler en cercle très fin, cuire 2 minutes jusqu'à ce que le bord se décolle, retourner et cuire 30 secondes. La galette reste pâle et souple. [[casserole; cuisson 3]]",
  "La garniture — Dans la même poêle, faire tomber les épinards ({{épinards}}) lavés 1 minute avec le tofu soyeux ({{tofu soyeux}}) en morceaux, sans remuer trop pour ne pas le défaire. [[laver epinards; cuisson 1]]",
  "Dressage — Garnir la galette de tofu et d'épinards, la replier en quatre, poser sur l'assiette tiède et terminer d'un filet d'huile d'olive crue ({{huile d'olive}}). [[dresser x2]]"],
 tip:"Une pâte très fluide donne une galette dentelée sur les bords et très souple : elle se plie sans se casser."}),

RC({id:"n-pdj-tartine-tofu-carotte", n:"Pain de sarrasin tiède, tofu écrasé à la ciboulette & carotte fondante", cat:"Tofu", st:"Petit-déjeuner", base:"Sarrasin", d:1, go:"Salé",
 ing:[["pain de sarrasin",60,"g"],["tofu ferme",50,"g"],["carotte",40,"g"],["ciboulette","",HERBS],["huile d'olive",1,"c. à café"],["sel","","1 pincée"]],
 steps:[
  "Avant de commencer — Ustensiles : une petite casserole avec couvercle, une fourchette, un économe, une râpe fine, une assiette tiède.",
  "La carotte — Éplucher la carotte ({{carotte}}), la râper finement et la cuire 3 minutes avec une cuillère d'eau dans la casserole couverte, à feu doux, jusqu'à ce qu'elle soit fondante. [[sortir; eplucher carotte; raper carotte; casserole; cuisson 3]]",
  "Le tofu — Pendant la cuisson de la carotte, écraser le tofu ferme ({{tofu ferme}}) à la fourchette avec l'huile d'olive crue ({{huile d'olive}}), le sel et la ciboulette ({{ciboulette}}) ciselée en pointes vertes, jusqu'à une texture de fromage frais. [[// ecraser; ciseler]]",
  "Le pain — Réchauffer le pain de sarrasin ({{pain de sarrasin}}) 2 minutes à couvert dans une poêle sèche, le trancher en deux. [[// trancher; cuisson 2]]",
  "Dressage — Tartiner le tofu sur le pain, poser la carotte fondante par-dessus. [[dresser x3]]"],
 tip:"Le tofu écrasé à l'huile d'olive imite un fromage frais aux herbes, sans lait ; la carotte cuite apporte la douceur sucrée."}),

RC({id:"n-pdj-soupe-miso-express", n:"Soupe miso express : riz tiède, tofu, épinards & wakamé", cat:"Tofu", st:"Petit-déjeuner", base:"Riz", d:1, go:"Salé",
 ing:[["riz cuit",70,"g"],["bouillon",250,"ml"],["miso blanc",1,"c. à café"],["tofu ferme",50,"g"],["épinards",30,"g"],["wakamé",1,"g"],["ciboulette","",HERBS]],
 steps:[
  "Avant de commencer — Ustensiles : une petite casserole, une louche, un petit bol, une cuillère, un bol de service tiède. Le riz basmati est cuit la veille au Bamboo (programme WHITE, 35 minutes).",
  "Le bouillon — Chauffer le bouillon ({{bouillon}}) à frémissement avec le wakamé ({{wakamé}}) et le riz cuit ({{riz cuit}}), 3 minutes. Couper le tofu ({{tofu ferme}}) en dés et laver les épinards ({{épinards}}), les ajouter 2 minutes. [[sortir; casserole; couper tofu; laver epinards; cuisson 5]]",
  "Le miso — Hors du feu, délayer le miso ({{miso blanc}}) dans une louche de bouillon tiède, puis le remettre dans la casserole. Le miso ne bout jamais : sa saveur serait perdue. [[delayer]]",
  "Dressage — Verser dans le bol tiède et parsemer de pointes vertes de ciboulette ({{ciboulette}}). [[ciseler; dresser x2]]"],
 tip:"Délayé hors du feu, le miso garde tout son parfum ; le wakamé donne la profondeur d'un bouillon marin."}),

RC({id:"n-pdj-quinoa-courgette-tofu", n:"Quinoa tiède, courgette râpée fondue & crème de tofu soyeux à l'aneth", cat:"Tofu", st:"Petit-déjeuner", base:"Quinoa", d:1, go:"Salé",
 ing:[["quinoa cuit",90,"g"],["courgette",40,"g"],["tofu soyeux",60,"g"],["aneth","",HERBS],["huile d'olive",1,"c. à café"],["sel","","1 pincée"]],
 steps:[
  "Avant de commencer — Ustensiles : une petite casserole avec couvercle, un économe, une râpe fine, une fourchette, un bol de service tiède. Le quinoa est cuit la veille au Bamboo (QUICK COOK, 1 volume de quinoa pour 1 volume d'eau).",
  "La courgette — Éplucher entièrement la courgette ({{courgette}}), sans laisser de vert, la râper finement et la cuire 2 minutes avec le quinoa cuit ({{quinoa cuit}}) et une cuillère d'eau dans la casserole couverte, à feu doux. [[sortir; eplucher courgette; raper courgette; casserole; cuisson 2]]",
  "La crème d'aneth — Écraser le tofu soyeux ({{tofu soyeux}}) à la fourchette avec l'aneth ({{aneth}}) ciselé, une pincée de sel et l'huile d'olive crue ({{huile d'olive}}) jusqu'à une crème lisse. [[ecraser; ciseler]]",
  "Dressage — Quinoa et courgette dans le bol tiède, crème de tofu au centre. [[dresser x2]]"],
 tip:"La courgette râpée très fin fond dans le quinoa chaud et le rend moelleux ; la crème d'aneth apporte sa fraîcheur herbacée."}),

RC({id:"n-pdj-oeuf-mollet-riz-sesame", n:"Riz tiède au sésame, œuf mollet coulant & nori", cat:"Œufs", st:"Petit-déjeuner", base:"Riz", d:1, go:"Salé",
 ing:[["riz cuit",80,"g"],["œuf",1,"pièce"],["nori",1,"pièce"],["graines de sésame",1,"c. à café"],["huile de sésame grillé",1,"c. à café"],["sauce soja",0.5,"c. à café"]],
 steps:[
  "Avant de commencer — Ustensiles : une petite casserole, une écumoire, un bol d'eau froide, une petite casserole avec couvercle pour le riz, des ciseaux de cuisine, un bol de service tiède. Le riz basmati est cuit la veille au Bamboo (programme WHITE, 35 minutes).",
  "L'œuf mollet — Faire frémir de l'eau dans la petite casserole, y glisser délicatement l'œuf ({{œuf}}) sorti du frigo, le cuire 6 minutes 30 pour un blanc pris et un jaune coulant, puis le passer 2 minutes sous l'eau froide et l'écaler sous un filet d'eau. [[sortir; casserole; cuisson 6; ecaler]]",
  "Le riz — Pendant ce temps, réchauffer le riz cuit ({{riz cuit}}) avec 2 cuillères d'eau dans la seconde casserole couverte, 3 minutes à feu doux. [[// casserole; cuisson 3]]",
  "Dressage — Riz dans le bol tiède, œuf coupé en deux au centre, sauce soja ({{sauce soja}}), huile de sésame grillé ({{huile de sésame grillé}}), graines de sésame ({{graines de sésame}}) et nori ({{nori}}) en rubans. Le jaune coule dans le riz. [[trancher; dresser x4]]"],
 tip:"Le jaune coulant sur le riz chaud fait office de sauce : un classique japonais, ici entièrement cuit."})
];
