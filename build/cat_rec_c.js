/* ============ COLLATIONS (environ 80 à 160 kcal) : 6 sucrées, 4 salées ============
   Une petite chose tiède, prête en 6 minutes au plus, entre le déjeuner et le dîner (ou quand la faim vient).
   Même protocole que les repas : tout est cuit ou très doux, tiède, sans friture ni coloration, sans ail, oignon, citron ni vinaigre.
   Les collations ne comptent pas dans les règles de variété des repas (ingrédient principal, œufs) : elles n'en contiennent pas. */
const SNACK_MAX = 6;   /* minutes, étapes comprises */
const COLLATIONS = [
/* ---------- sucrées ---------- */
RC({id:"n-col-banane-yaourt-vanille", n:"Banane tiède écrasée, yaourt de soja & vanille", cat:"Collation", st:"Collation", base:"Aucun", d:1, go:"Sucré",
 ing:[["banane",60,"g"],["yaourt de soja nature",70,"g"],["vanille naturelle",1,"pincée"],["sirop d'érable",0.5,"c. à café"]],
 steps:[
  "Avant de commencer — Ustensiles : une petite casserole, une fourchette, un petit bol.",
  "La banane tiède — Écraser la banane ({{banane}}) à la fourchette dans la casserole avec une cuillère d'eau et la vanille, puis la chauffer 1 minute à feu très doux en remuant : elle devient tiède et crémeuse comme une compote. [[ecraser banane; casserole; cuisson 1]]",
  "Dressage — Verser dans le bol, déposer le yaourt de soja ({{yaourt de soja nature}}) par-dessus et finir d'un demi-filet de sirop d'érable ({{sirop d'érable}}). [[dresser x3]]"],
 tip:"La banane bien mûre est déjà très sucrée : plus elle est tachetée de brun, moins il faut de sirop."}),

RC({id:"n-col-compote-myrtilles", n:"Compote tiède de myrtilles & yaourt de soja", cat:"Collation", st:"Collation", base:"Aucun", d:1, go:"Sucré",
 ing:[["myrtilles",60,"g"],["yaourt de soja nature",70,"g"],["sirop d'érable",0.5,"c. à café"]],
 steps:[
  "Avant de commencer — Ustensiles : une petite casserole, une fourchette, un petit bol.",
  "Les myrtilles — Chauffer les myrtilles ({{myrtilles}}) avec une cuillère d'eau et le sirop d'érable ({{sirop d'érable}}) à feu doux 3 minutes, jusqu'à ce qu'elles éclatent et rendent un jus brillant ; en écraser quelques-unes à la fourchette. [[casserole; ecraser myrtilles; cuisson 3]]",
  "Dressage — Verser le yaourt de soja ({{yaourt de soja nature}}) dans le bol, recouvrir de compote tiède et de son jus. [[dresser x2]]"],
 tip:"Le contraste chaud et frais est ce qui rend cette collation gourmande : verser la compote au dernier moment."}),

RC({id:"n-col-tartine-sarrasin-banane", n:"Tartine de pain de sarrasin tiède, banane écrasée & vanille", cat:"Collation", st:"Collation", base:"Sarrasin", d:1, go:"Sucré",
 ing:[["pain de sarrasin",35,"g"],["banane",50,"g"],["vanille naturelle",1,"pincée"],["sirop d'érable",0.5,"c. à café"]],
 steps:[
  "Avant de commencer — Ustensiles : une casserole avec son couvercle, une fourchette, une assiette.",
  "Le pain — Réchauffer le pain de sarrasin ({{pain de sarrasin}}) 2 minutes dans la casserole couverte hors du feu, juste assez pour qu'il soit tiède et souple. [[// cuisson 2]]",
  "La banane — Écraser la banane ({{banane}}) à la fourchette avec la vanille jusqu'à obtenir une crème épaisse. [[ecraser banane]]",
  "Dressage — Poser le pain tiède sur l'assiette, étaler la banane écrasée, finir d'un petit filet de sirop d'érable ({{sirop d'érable}}). [[sortir; dresser x3]]"],
 tip:"Le pain de sarrasin reste tendre s'il est seulement tiédi : ne jamais le faire griller, il durcit."}),

RC({id:"n-col-riz-lait-vanille", n:"Petit riz au lait de riz vanillé", cat:"Collation", st:"Collation", base:"Riz", d:1, go:"Sucré",
 ing:[["riz cuit",50,"g"],["lait de riz",80,"ml"],["vanille naturelle",1,"pincée"],["sirop d'érable",0.5,"c. à café"]],
 steps:[
  "Avant de commencer — Ustensiles : une petite casserole, une cuillère en bois, un petit bol. Le riz est celui cuit la veille au Bamboo.",
  "Le riz au lait — Chauffer le riz cuit ({{riz cuit}}) avec le lait de riz ({{lait de riz}}) et la vanille à feu doux 4 minutes en remuant : le riz boit le lait et devient crémeux. [[sortir; casserole; cuisson 4]]",
  "Dressage — Verser dans le bol et finir d'un demi-filet de sirop d'érable ({{sirop d'érable}}). [[dresser x2]]"],
 tip:"Un reste de riz suffit : le même riz que celui des repas, réchauffé dans du lait de riz, devient un dessert."}),

RC({id:"n-col-avoine-minute-banane", n:"Avoine minute au lait d'avoine & rondelles de banane", cat:"Collation", st:"Collation", base:"Avoine", d:1, go:"Sucré",
 ing:[["flocons d'avoine",20,"g"],["lait d'avoine",100,"ml"],["banane",30,"g"],["vanille naturelle",1,"pincée"]],
 steps:[
  "Avant de commencer — Ustensiles : une petite casserole, une cuillère en bois, une planche et un couteau, un bol.",
  "L'avoine — Cuire les flocons d'avoine ({{flocons d'avoine}}) dans 80 ml d'eau à feu doux 2 minutes en remuant (l'avoine cuit à l'eau), puis ajouter le lait d'avoine ({{lait d'avoine}}) chaud et la vanille, et laisser épaissir 1 minute. [[sortir; casserole; cuisson 3]]",
  "La banane — Couper la banane ({{banane}}) en fines rondelles et les poser dans le bol, verser l'avoine tiède dessus : elles ramollissent. [[couper banane; dresser x2]]"],
 tip:"Jamais de lait pour cuire l'avoine : il déborde. L'eau d'abord, le lait chaud ensuite."}),

RC({id:"n-col-creme-tofu-soyeux-vanille", n:"Crème de tofu soyeux à la vanille & myrtilles tièdes", cat:"Collation", st:"Collation", base:"Aucun", d:1, go:"Sucré",
 ing:[["tofu soyeux",100,"g"],["myrtilles",30,"g"],["vanille naturelle",1,"pincée"],["sirop d'érable",1,"c. à café"]],
 steps:[
  "Avant de commencer — Ustensiles : un petit mixeur plongeant (ou une fourchette), un petit bol, une petite casserole.",
  "La crème — Mixer le tofu soyeux ({{tofu soyeux}}) avec la vanille et le sirop d'érable ({{sirop d'érable}}) jusqu'à une crème lisse et brillante, comme une crème dessert. [[sortir; mixer; verser]]",
  "Les myrtilles — Chauffer les myrtilles ({{myrtilles}}) 2 minutes avec une cuillère d'eau à feu doux, jusqu'à ce qu'elles éclatent. [[casserole; cuisson 2]]",
  "Dressage — Verser la crème dans le bol et déposer les myrtilles tièdes et leur jus par-dessus. [[dresser x2]]"],
 tip:"Le tofu soyeux bien mixé n'a aucun goût de soja : c'est la vanille et le sirop qui parlent."}),

/* ---------- salées ---------- */
RC({id:"n-col-tofu-soyeux-sesame", n:"Tofu soyeux tiède, huile de sésame grillé & ciboulette", cat:"Collation", st:"Collation", base:"Aucun", d:1, go:"Salé",
 ing:[["tofu soyeux",120,"g"],["sauce soja",0.5,"c. à café"],["huile de sésame grillé",0.5,"c. à café"],["ciboulette",1,"quelques brins"]],
 steps:[
  "Avant de commencer — Ustensiles : une petite casserole, une cuillère, un petit bol.",
  "Le tofu — Réchauffer le tofu soyeux ({{tofu soyeux}}) en gros morceaux 2 minutes dans la casserole avec une cuillère d'eau, à feu très doux, sans remuer : il se réchauffe sans se défaire. [[sortir; casserole; cuisson 2]]",
  "Dressage — Déposer délicatement le tofu dans le bol, verser la sauce soja ({{sauce soja}}) et l'huile de sésame ({{huile de sésame grillé}}), puis parsemer de la ciboulette ({{ciboulette}}) finement coupée, pointes vertes seulement. [[ciseler; dresser x3]]"],
 tip:"Chauffé à peine, le tofu soyeux garde sa texture de flan : le servir tiède, jamais bouillant."}),

RC({id:"n-col-onigiri-nori", n:"Onigiri tiède de riz au nori & sésame grillé", cat:"Collation", st:"Collation", base:"Riz", d:1, go:"Salé",
 ing:[["riz cuit",80,"g"],["nori",1,"pièce"],["huile de sésame grillé",0.5,"c. à café"],["sel",1,"pincée"]],
 steps:[
  "Avant de commencer — Ustensiles : un bol, une petite casserole, une assiette. Le riz est celui cuit la veille au Bamboo.",
  "Le riz tiède — Réchauffer le riz cuit ({{riz cuit}}) 2 minutes avec une cuillère d'eau dans la casserole couverte, à feu doux, puis le mélanger avec l'huile de sésame ({{huile de sésame grillé}}) et le sel. [[sortir; casserole; cuisson 2; delayer]]",
  "Les boules — Avec les mains légèrement mouillées, former deux petites boules de riz tiède, puis les envelopper chacune dans une demi-feuille de nori ({{nori}}). [[former x2]]",
  "Dressage — Poser les deux onigiri sur l'assiette. [[dresser x2]]"],
 tip:"Mouiller les mains avant de façonner : le riz ne colle plus aux doigts."}),

RC({id:"n-col-tartine-tofu-soyeux", n:"Tartine de sarrasin, tofu soyeux écrasé & ciboulette", cat:"Collation", st:"Collation", base:"Sarrasin", d:1, go:"Salé",
 ing:[["pain de sarrasin",35,"g"],["tofu soyeux",60,"g"],["huile d'olive",0.5,"c. à café"],["ciboulette",1,"quelques brins"],["sel",1,"pincée"]],
 steps:[
  "Avant de commencer — Ustensiles : une casserole avec son couvercle, une fourchette, une assiette.",
  "Le pain — Réchauffer le pain de sarrasin ({{pain de sarrasin}}) 2 minutes dans la casserole couverte hors du feu, juste assez pour qu'il soit tiède et souple. [[// cuisson 2]]",
  "La crème de tofu — Écraser le tofu soyeux ({{tofu soyeux}}) à la fourchette avec le sel et l'huile d'olive ({{huile d'olive}}) jusqu'à une crème épaisse, puis ciseler la ciboulette ({{ciboulette}}), pointes vertes seulement, et la mêler. [[sortir; ecraser tofu soyeux; ciseler]]",
  "Dressage — Étaler la crème sur le pain tiède, sur l'assiette. [[dresser x2]]"],
 tip:"Le tofu soyeux écrasé fait une crème douce qui remplace le fromage frais."}),

RC({id:"n-col-soupe-miso-wakame", n:"Petite soupe miso, tofu soyeux & wakame", cat:"Collation", st:"Collation", base:"Aucun", d:1, go:"Salé",
 ing:[["bouillon",200,"ml"],["tofu soyeux",50,"g"],["wakame",5,"g"],["miso blanc",0.5,"c. à café"]],
 steps:[
  "Avant de commencer — Ustensiles : une petite casserole, une cuillère, un bol à soupe.",
  "Le bouillon — Chauffer le bouillon ({{bouillon}}) à feu doux avec le wakame ({{wakame}}) 3 minutes, jusqu'à ce que l'algue se déploie. Éteindre le feu. [[sortir; casserole; cuisson 3]]",
  "Le miso — Délayer le miso blanc ({{miso blanc}}) dans une louche de bouillon tiède, puis le verser dans la casserole : le miso ne doit jamais bouillir. Ajouter le tofu soyeux ({{tofu soyeux}}) en petits dés à la cuillère. [[delayer; verser]]",
  "Dressage — Servir tiède dans le bol à soupe. [[dresser x1]]"],
 tip:"Le miso se délaye hors du feu : bouilli, il perd son parfum. À éviter pendant une phase de sensibilité aiguë."})
];
