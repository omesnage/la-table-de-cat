/* ============ COLLATIONS (environ 80 à 160 kcal) : 6 sucrées, 4 salées ============
   Une petite chose tiède, prête en 6 minutes au plus, entre le déjeuner et le dîner (ou quand la faim vient).
   Même protocole que les repas : tout est cuit ou très doux, tiède, sans friture ni coloration, sans ail, oignon, citron ni vinaigre.
   Les collations ne comptent pas dans les règles de variété des repas (ingrédient principal, œufs) : elles n'en contiennent pas.
   Réécriture détaillée (guide docs/style-recettes.md) : ustensiles, mots expliqués, repères de réussite, erreurs à éviter. */
const SNACK_MAX = 6;   /* minutes, étapes comprises */
const COLLATIONS = [
/* ---------- sucrées ---------- */
RC({id:"n-col-banane-yaourt-vanille", n:"Banane tiède écrasée, yaourt de soja & vanille", cat:"Collation", st:"Collation", base:"Aucun", d:1, go:"Sucré",
 ing:[["banane",60,"g"],["eau",1,"c. à soupe"],["yaourt de soja nature",70,"g"],["vanille naturelle",1,"pincée"],["sirop d'érable",0.5,"c. à café"]],
 steps:[
  "Avant de commencer — Ustensiles : une petite casserole, une fourchette, une cuillère à café, un petit bol. Le plat en deux mots : une banane réchauffée, écrasée en crème, sous un yaourt de soja (un yaourt végétal, sans lait de vache) bien frais. Le chaud et le frais se répondent.",
  "La banane tiède — Sortir les ingrédients. Retirer la peau de la banane ({{banane}}) et l'écraser à la fourchette dans la casserole, avec l'eau ({{eau}}) et la vanille ({{vanille naturelle}}), jusqu'à obtenir une purée épaisse. La chauffer 1 minute à feu très doux en remuant. Repère : elle est tiède (pas bouillante) et crémeuse comme une compote. Trop chauffée, elle devient pâteuse : la retirer du feu dès qu'elle fume légèrement. [[sortir; ecraser banane; casserole; cuisson 1]]",
  "Dressage — Verser la banane dans le petit bol, déposer le yaourt de soja ({{yaourt de soja nature}}) par-dessus, puis un demi-filet de sirop d'érable ({{sirop d'érable}}), le sirop sucré tiré de la sève de l'érable, au goût de caramel doux. Ne pas mélanger tout de suite : on goûte d'abord le contraste. [[dresser x3]]"],
 tip:"La banane bien mûre (peau tachetée de brun) est déjà très sucrée : plus elle est mûre, moins il faut de sirop."}),

RC({id:"n-col-compote-myrtilles", n:"Compote tiède de myrtilles & yaourt de soja", cat:"Collation", st:"Collation", base:"Aucun", d:1, go:"Sucré",
 ing:[["myrtilles",60,"g"],["eau",1,"c. à soupe"],["yaourt de soja nature",70,"g"],["sirop d'érable",0.5,"c. à café"]],
 steps:[
  "Avant de commencer — Ustensiles : une petite casserole, une fourchette, une cuillère à café, un petit bol. Le plat en deux mots : une compote est un fruit cuit doucement jusqu'à devenir fondant. Ici, des myrtilles chaudes sur un yaourt de soja (un yaourt végétal, sans lait de vache) frais.",
  "Les myrtilles — Sortir les ingrédients. Mettre les myrtilles ({{myrtilles}}), fraîches ou surgelées, dans la casserole avec l'eau ({{eau}}) et le sirop d'érable ({{sirop d'érable}}), le sirop sucré tiré de la sève de l'érable. Chauffer 3 minutes à feu doux, jusqu'à ce que les fruits éclatent et rendent un jus brillant, puis en écraser quelques-uns à la fourchette. Repère : un jus violet épais, avec des fruits entiers. Avec des myrtilles surgelées, compter 1 minute de plus. [[sortir; casserole; ecraser myrtilles; cuisson 3]]",
  "Dressage — Verser le yaourt de soja ({{yaourt de soja nature}}) dans le petit bol, recouvrir de compote tiède et de son jus. Servir tout de suite : le contraste entre le chaud et le frais disparaît si on attend. [[dresser x2]]"],
 tip:"Le contraste chaud et frais est ce qui rend cette collation gourmande : verser la compote au dernier moment."}),

RC({id:"n-col-tartine-sarrasin-banane", n:"Tartine de pain de sarrasin tiède, banane écrasée & vanille", cat:"Collation", st:"Collation", base:"Sarrasin", d:1, go:"Sucré",
 ing:[["pain de sarrasin",35,"g"],["banane",50,"g"],["vanille naturelle",1,"pincée"],["sirop d'érable",0.5,"c. à café"]],
 steps:[
  "Avant de commencer — Ustensiles : une poêle sèche, une fourchette, un petit bol, un couteau à tartiner, une cuillère à café, une assiette. Le plat en deux mots : une tartine douce. Le pain de sarrasin est un pain sans blé, fait à partir de sarrasin (une graine au goût de noisette), vendu en magasin bio ; il est tartiné d'une crème de banane écrasée.",
  "Le pain — Sortir les ingrédients. Poser le pain de sarrasin ({{pain de sarrasin}}) dans la poêle sèche à feu doux et le réchauffer 1 minute de chaque côté, juste assez pour qu'il soit tiède et souple. Ne jamais le laisser durcir ou brunir : il devient dur comme un biscuit. [[sortir; casserole; cuisson 2]]",
  "La crème de banane — Pendant ce temps, retirer la peau de la banane ({{banane}}) et l'écraser à la fourchette dans le petit bol avec la vanille ({{vanille naturelle}}), jusqu'à obtenir une crème épaisse sans gros morceau. [[// ecraser banane]]",
  "Dressage — Poser le pain tiède sur l'assiette, étaler la banane écrasée avec le couteau à tartiner, puis finir d'un petit filet de sirop d'érable ({{sirop d'érable}}), le sirop sucré tiré de la sève de l'érable. [[dresser x3]]"],
 tip:"Le pain de sarrasin reste tendre s'il est seulement tiédi : un pain trop chauffé durcit."}),

RC({id:"n-col-riz-lait-vanille", n:"Petit riz au lait de riz vanillé", cat:"Collation", st:"Collation", base:"Riz", d:1, go:"Sucré",
 ing:[["riz cuit",50,"g"],["lait de riz",80,"ml"],["vanille naturelle",1,"pincée"],["sirop d'érable",0.5,"c. à café"]],
 steps:[
  "Avant de commencer — Ustensiles : une petite casserole, une cuillère en bois, une cuillère à café, un petit bol. Le riz est celui cuit la veille au Bamboo et conservé au frais. Le plat en deux mots : un petit riz au lait express. Le riz déjà cuit se réchauffe dans du lait de riz (une boisson végétale douce et légèrement sucrée) et devient crémeux en quelques minutes.",
  "Le riz au lait — Sortir les ingrédients. Mettre le riz cuit ({{riz cuit}}) dans la casserole, l'émietter du bout de la cuillère (froid, il forme un bloc), ajouter le lait de riz ({{lait de riz}}) et la vanille ({{vanille naturelle}}), puis chauffer à feu doux 4 minutes en remuant souvent. Repère : le riz a bu presque tout le lait et l'ensemble est épais et crémeux. Si cela accroche au fond, baisser le feu et ajouter une cuillère de lait. [[sortir; casserole; cuisson 4]]",
  "Dressage — Verser dans le petit bol et finir d'un demi-filet de sirop d'érable ({{sirop d'érable}}), le sirop sucré tiré de la sève de l'érable. Servir tiède. [[dresser x2]]"],
 tip:"Un reste de riz suffit : le même riz que celui des repas, réchauffé dans du lait de riz, devient un dessert."}),

RC({id:"n-col-avoine-minute-banane", n:"Avoine minute au lait d'avoine & rondelles de banane", cat:"Collation", st:"Collation", base:"Avoine", d:1, go:"Sucré",
 ing:[["flocons d'avoine",20,"g"],["eau",80,"ml"],["lait d'avoine",100,"ml"],["banane",30,"g"],["vanille naturelle",1,"pincée"]],
 steps:[
  "Avant de commencer — Ustensiles : une petite casserole, une cuillère en bois, une planche et un couteau, un petit bol. Le plat en deux mots : un mini-porridge. Les flocons d'avoine sont des grains d'avoine aplatis en fines pétales (vendus en paquet au rayon des céréales) ; cuits quelques minutes, ils forment une bouillie crémeuse. Le lait d'avoine est une boisson végétale douce, légèrement sucrée.",
  "L'avoine à l'eau — Sortir les ingrédients. Mettre les flocons d'avoine ({{flocons d'avoine}}) et l'eau ({{eau}}) dans la casserole et cuire à feu doux 2 minutes en remuant : l'avoine se cuit toujours à l'eau d'abord, car dans du lait elle fait mousser et déborde. Ajouter ensuite le lait d'avoine ({{lait d'avoine}}) et la vanille ({{vanille naturelle}}), et laisser épaissir 1 minute en remuant. Repère : une bouillie crémeuse qui nappe la cuillère (elle la recouvre d'une couche lisse). [[sortir; casserole; cuisson 3]]",
  "La banane — Pendant ce temps, retirer la peau de la banane ({{banane}}) et la couper en fines rondelles d'environ 3 mm sur la planche. [[// couper banane]]",
  "Dressage — Poser les rondelles de banane au fond du petit bol et verser l'avoine tiède par-dessus : la chaleur les attendrit. Servir tiède, jamais bouillant. [[dresser x2]]"],
 tip:"Jamais de lait pour cuire l'avoine : il déborde. L'eau d'abord, le lait ensuite."}),

RC({id:"n-col-creme-tofu-soyeux-vanille", n:"Crème de tofu soyeux à la vanille & myrtilles tièdes", cat:"Collation", st:"Collation", base:"Aucun", d:1, go:"Sucré",
 ing:[["tofu soyeux",100,"g"],["myrtilles",30,"g"],["eau",1,"c. à soupe"],["vanille naturelle",1,"pincée"],["sirop d'érable",1,"c. à café"]],
 steps:[
  "Avant de commencer — Ustensiles : un mixeur plongeant avec son verre (ou une fourchette si le tofu est très tendre), une petite casserole, un petit bol, une cuillère. Le plat en deux mots : une crème dessert sans lait ni œuf. Le tofu soyeux est un tofu à la texture de flan, très tendre, vendu en barquette ; une fois mixé avec de la vanille, il devient une crème lisse et brillante.",
  "La crème — Sortir les ingrédients. Mettre le tofu soyeux ({{tofu soyeux}}), égoutté de son eau, dans le verre du mixeur avec la vanille ({{vanille naturelle}}) et le sirop d'érable ({{sirop d'érable}}), le sirop sucré tiré de la sève de l'érable. Mixer environ 30 secondes, jusqu'à une crème lisse, sans aucun grumeau. Puis la verser dans le petit bol. [[sortir; mixer; verser]]",
  "Les myrtilles — Mettre les myrtilles ({{myrtilles}}), fraîches ou surgelées, dans la casserole avec l'eau ({{eau}}) et les chauffer 2 minutes à feu doux, jusqu'à ce qu'elles éclatent et rendent un jus brillant. [[casserole; cuisson 2]]",
  "Dressage — Déposer les myrtilles tièdes et leur jus sur la crème de tofu, sans attendre. [[dresser x2]]"],
 tip:"Le tofu soyeux bien mixé n'a aucun goût de soja : ce sont la vanille et le sirop qui parlent."}),

/* ---------- salées ---------- */
RC({id:"n-col-tofu-soyeux-sesame", n:"Tofu soyeux tiède, huile de sésame grillé & ciboulette", cat:"Collation", st:"Collation", base:"Aucun", d:1, go:"Salé",
 ing:[["tofu soyeux",120,"g"],["eau",1,"c. à soupe"],["sauce soja",0.5,"c. à café"],["huile de sésame grillé",0.5,"c. à café"],["ciboulette","",HERBS]],
 steps:[
  "Avant de commencer — Ustensiles : une petite casserole, une grande cuillère, des ciseaux de cuisine, un petit bol. Le plat en deux mots : un petit plat japonais tout simple. Le tofu soyeux est un tofu à la texture de flan, très tendre, vendu en barquette ; on le sert tiède avec quelques gouttes de sauce.",
  "Le tofu tiède — Sortir les ingrédients. Verser l'eau ({{eau}}) dans la casserole et y déposer le tofu soyeux ({{tofu soyeux}}) en gros morceaux prélevés à la grande cuillère. Chauffer 2 minutes à feu très doux, sans remuer : il se réchauffe sans se défaire. Repère : il est tiède à cœur, sans bouillir. Remuer le ferait s'émietter. [[sortir; casserole; cuisson 2]]",
  "Dressage — Déposer délicatement le tofu dans le petit bol à l'aide de la grande cuillère, en laissant l'eau dans la casserole. Verser la sauce soja ({{sauce soja}}), puis l'huile de sésame grillé ({{huile de sésame grillé}}), une huile parfumée au sésame torréfié, versée à la fin et jamais chauffée. Avec les ciseaux, ciseler la ciboulette ({{ciboulette}}), une herbe fine au goût frais et doux, en pointes vertes seulement, par-dessus. [[ciseler; dresser x3]]"],
 tip:"Chauffé à peine, le tofu soyeux garde sa texture de flan : le servir tiède, jamais bouillant."}),

RC({id:"n-col-onigiri-nori", n:"Boulettes de riz japonaises (onigiri) tièdes, au nori & sésame grillé", cat:"Collation", st:"Collation", base:"Riz", d:1, go:"Salé",
 ing:[["riz cuit",80,"g"],["eau",1,"c. à soupe"],["nori",1,"pièce"],["huile de sésame grillé",0.5,"c. à café"],["sel",1,"pincée"]],
 steps:[
  "Avant de commencer — Ustensiles : une petite casserole avec son couvercle, une cuillère, un petit bol d'eau pour mouiller les mains, une assiette. Le riz est celui cuit la veille au Bamboo et conservé au frais. Le plat en deux mots : un onigiri est une boulette de riz japonaise que l'on mange avec les doigts. Elle est enveloppée de nori, une algue séchée en feuille fine, comme celle qui entoure les sushis.",
  "Le riz tiède — Sortir les ingrédients. Mettre le riz cuit ({{riz cuit}}) dans la casserole avec l'eau ({{eau}}), l'émietter du bout de la cuillère, couvrir et réchauffer 2 minutes à feu doux. Le mélanger ensuite avec l'huile de sésame grillé ({{huile de sésame grillé}}), une huile parfumée au sésame torréfié, et le sel ({{sel}}), en remuant jusqu'à ce que les grains soient bien enrobés. Repère : le riz est chaud et collant, il tient quand on le serre. [[sortir; casserole; cuisson 2; delayer]]",
  "Les boules — Mouiller légèrement les mains dans le petit bol d'eau, pour que le riz ne colle pas aux doigts. Prélever la moitié du riz, le serrer dans les paumes en boule de la taille d'une grosse noix, et faire de même avec l'autre moitié. Déchirer la feuille de nori ({{nori}}) en deux et envelopper chaque boule dans une moitié. Le riz tiède fait adhérer l'algue ; trop chaud, il la ramollit. [[former x2]]"
  ,
  "Dressage — Poser les deux onigiri sur l'assiette, sans les empiler. À manger tièdes, avec les doigts. [[dresser x2]]"],
 tip:"Mouiller les mains avant de façonner : le riz ne colle plus aux doigts."}),

RC({id:"n-col-tartine-tofu-soyeux", n:"Tartine de sarrasin, tofu soyeux écrasé & ciboulette", cat:"Collation", st:"Collation", base:"Sarrasin", d:1, go:"Salé",
 ing:[["pain de sarrasin",35,"g"],["tofu soyeux",60,"g"],["huile d'olive",0.5,"c. à café"],["ciboulette","",HERBS],["sel",1,"pincée"]],
 steps:[
  "Avant de commencer — Ustensiles : une poêle sèche, une fourchette, un petit bol, des ciseaux de cuisine, un couteau à tartiner, une assiette. Le plat en deux mots : une tartine salée. Le pain de sarrasin est un pain sans blé, fait à partir de sarrasin (une graine au goût de noisette), vendu en magasin bio. Le tofu soyeux, un tofu à la texture de flan, très tendre, est écrasé en une crème douce qui remplace le fromage frais.",
  "Le pain — Sortir les ingrédients. Poser le pain de sarrasin ({{pain de sarrasin}}) dans la poêle sèche à feu doux et le réchauffer 1 minute de chaque côté, juste assez pour qu'il soit tiède et souple. Ne pas le laisser durcir. [[sortir; casserole; cuisson 2]]",
  "La crème de tofu — Pendant ce temps, dans le petit bol, écraser le tofu soyeux ({{tofu soyeux}}) à la fourchette avec le sel ({{sel}}) et l'huile d'olive ({{huile d'olive}}) jusqu'à une crème épaisse et lisse. Avec les ciseaux, ciseler la ciboulette ({{ciboulette}}), une herbe fine au goût frais et doux, en pointes vertes seulement, et la mêler. [[// ecraser tofu soyeux; ciseler]]",
  "Dressage — Poser le pain tiède sur l'assiette et étaler la crème de tofu dessus avec le couteau à tartiner. À manger sans attendre. [[dresser x2]]"],
 tip:"Le tofu soyeux écrasé fait une crème douce qui remplace le fromage frais."}),

RC({id:"n-col-soupe-miso-wakame", n:"Petite soupe miso, tofu soyeux & algue wakame", cat:"Collation", st:"Collation", base:"Aucun", d:1, go:"Salé",
 ing:[["bouillon",200,"ml"],["tofu soyeux",50,"g"],["wakame",5,"g"],["miso blanc",0.5,"c. à café"]],
 steps:[
  "Avant de commencer — Ustensiles : une petite casserole, une louche, une cuillère, un petit bol, un bol à soupe. Le plat en deux mots : la soupe miso est la soupe japonaise du matin. Le miso est une pâte de soja fermenté, salée et parfumée ; le wakame est une algue séchée qui se déploie dans le bouillon ; le tofu soyeux est un tofu à la texture de flan, très tendre.",
  "Le bouillon — Sortir les ingrédients. Verser le bouillon ({{bouillon}}), un bouillon doux de légumes ou de volaille, sans épice forte, dans la casserole avec le wakame ({{wakame}}) et chauffer à feu doux 3 minutes, jusqu'à ce que l'algue se déploie et devienne souple. Éteindre le feu. [[sortir; casserole; cuisson 3]]",
  "Le miso — Prélever une louche de bouillon tiède dans le petit bol et y délayer le miso blanc ({{miso blanc}}) à la cuillère jusqu'à ce qu'il n'y ait plus de grumeau, puis le verser dans la casserole. Le miso ne doit jamais bouillir : sa saveur serait perdue. Ajouter le tofu soyeux ({{tofu soyeux}}) en petits morceaux prélevés à la cuillère, sans remuer. [[delayer; verser]]",
  "Dressage — Verser la soupe dans le bol à soupe, en vérifiant qu'elle soit tiède. [[dresser x1]]"],
 tip:"Le miso se délaye hors du feu : bouilli, il perd son parfum. À éviter pendant une phase de sensibilité aiguë."})
];
