/* ============ BANCHAN : petits plats coréens servis avec du riz ============
   Un banchan est un petit accompagnement coréen : on en sert plusieurs autour du riz, chacun avec une texture et un goût différents.
   Ils sont traités à part (rubrique « Banchan » du Carnet) :
   - 17 banchan à protéine (80 à 100 g de protéine : tofu, œufs, poulet ou sardines) ;
   - 23 banchan de légumes (60 à 100 g de légumes cuits).
   Un REPAS CORÉEN complet = riz cuit 140 g + 1 banchan à protéine + 2 banchan de légumes (voir composeKorean).
   Version douce du protocole : ni ail, ni piment, ni oignon, ni vinaigre ; sauce soja et miso en toute petite quantité
   (les banchan avec sauce soja ou miso disparaissent en phase de sensibilité aiguë) ; légumes toujours cuits, tièdes ; huile de sésame grillé ajoutée à la fin.
   Les mots coréens sont toujours expliqués dans la première étape (« Le plat en deux mots »).
   Dans les étapes, les assaisonnements sont écrits en toutes lettres (pas de {{ }}) : deux banchan réunis dans un même repas ne partagent aucune quantité.
   go = "Protéine" ou "Légume" ; cat et st = "Banchan". */
const KR_STEP_MAX = 15;   /* minutes par banchan, étapes comprises */
const BANCHAN = [
/* ---------- à protéine : tofu ---------- */
RC({id:"n-bc-dubu-jorim", n:"Dubu-jorim : tofu braisé à la sauce soja sucrée", cat:"Banchan", st:"Banchan", base:"Aucun", d:1, go:"Protéine",
 ing:[["tofu ferme",90,"g"],["sauce soja",0.5,"c. à café"],["sirop d'érable",0.5,"c. à café"],["huile de sésame grillé",0.5,"c. à café"],["ciboulette","",HERBS],["eau",60,"ml"]],
 steps:[
  "Avant de commencer — Ustensiles : une petite casserole avec son couvercle, une planche et un couteau, du papier absorbant, un petit bol, une cuillère. Le plat en deux mots : « dubu » veut dire tofu et « jorim » veut dire braisé, c'est-à-dire cuit doucement, à couvert, dans un peu de liquide parfumé. En fin de cuisson ce liquide a réduit et forme un sirop brillant qui enrobe le tofu. Le tofu ferme est le tofu en bloc, assez compact pour être coupé en tranches sans se défaire. Il reste clair et tendre : il n'y a ni poêle, ni dorure.",
  "Le tofu — Sortir le tofu ferme ({{tofu ferme}}) de son emballage, le poser entre deux épaisseurs de papier absorbant et appuyer doucement avec la main : il rend un peu d'eau, qui sinon diluerait la sauce. Le couper en tranches régulières de 1 cm d'épaisseur : des tranches égales cuisent au même rythme. [[sortir; presser tofu ferme; couper tofu ferme]]",
  "La sauce — Dans le petit bol, verser 60 ml d'eau, 1/2 c. à café de sauce soja et 1/2 c. à café de sirop d'érable, puis mélanger à la cuillère. Cette sauce doit être à peine salée : le sirop n'est là que pour le brillant. [[delayer]]",
  "La braise — Verser la sauce dans la casserole, y ranger les tranches de tofu sur une seule couche et couvrir. Chauffer à feu très doux : dès que de petites bulles apparaissent sur les bords, compter 6 minutes en retournant délicatement les tranches à mi-cuisson avec la cuillère. Repère : les tranches sont brun clair, la sauce a diminué de moitié et colle à la cuillère. [[casserole; cuisson 6]]",
  "Dressage — Poser les tranches dans un petit bol, verser le reste de sauce par-dessus et finir de 1/2 c. à café d'huile de sésame grillé (huile de sésame au parfum de noisette, ajoutée seulement à la fin pour ne pas la chauffer). Parsemer de la ciboulette ({{ciboulette}}) ciselée, pointes vertes seulement. [[ciseler; dresser x3]]"],
 tip:"Une cuisson très douce et couverte suffit : la sauce réduit d'elle-même et le tofu garde un cœur tendre. Servi tiède, il a plus de goût que brûlant."}),

RC({id:"n-bc-dubu-muchim", n:"Dubu-muchim : tofu écrasé, carotte tendre & sésame", cat:"Banchan", st:"Banchan", base:"Aucun", d:1, go:"Protéine",
 ing:[["tofu ferme",90,"g"],["carotte",25,"g"],["graines de sésame",1,"c. à café"],["huile de sésame grillé",0.5,"c. à café"],["sel",1,"pincée"],["ciboulette","",HERBS]],
 steps:[
  "Avant de commencer — Ustensiles : une petite casserole avec son couvercle, une râpe, un bol, une fourchette, du papier absorbant. Le plat en deux mots : « muchim » veut dire assaisonné à la main, c'est-à-dire mélangé avec les doigts ou une fourchette plutôt que cuit dans une sauce. Ici le tofu est écrasé grossièrement, un peu comme une salade d'œufs mimosa sans œuf, et parfumé au sésame. Les graines de sésame sont utilisées telles quelles, à l'état naturel, sans les faire revenir.",
  "La carotte — Éplucher la carotte ({{carotte}}) et la râper très finement. La mettre dans la casserole avec 2 cuillères d'eau, couvrir et cuire à feu doux 3 minutes : elle devient tendre et ne craque plus sous la dent. L'égoutter et la laisser tiédir. [[eplucher carotte; raper carotte; casserole; cuisson 3; egoutter]]",
  "Le tofu — Éponger le tofu ferme ({{tofu ferme}}) dans du papier absorbant, puis l'écraser dans le bol avec la fourchette : on cherche des petits morceaux irréguliers, pas une purée. Ajouter la carotte tiède. [[sortir; presser tofu ferme; ecraser tofu ferme]]",
  "L'assaisonnement — Écraser les graines de sésame ({{graines de sésame}}) du dos de la cuillère contre la paroi d'un bol pour libérer leur parfum (entières, elles traversent l'intestin sans être digérées), les verser sur le tofu avec 1/2 c. à café d'huile de sésame grillé et une pincée de sel, puis mélanger du bout de la fourchette. Goûter : le goût doit être rond, jamais salé. [[ecraser graines de sesame; delayer]]",
  "Dressage — Faire un petit dôme dans un bol, parsemer de la ciboulette ({{ciboulette}}) ciselée, pointes vertes seulement, et servir tiède. [[ciseler; dresser x2]]"],
 tip:"Le tofu écrasé à la fourchette garde du relief : le passer au mixeur lui ôterait tout son charme. Il est encore meilleur le lendemain."}),

RC({id:"n-bc-sundubu-doux", n:"Sundubu doux : tofu soyeux au bouillon de kombu", cat:"Banchan", st:"Banchan", base:"Aucun", d:1, go:"Protéine",
 ing:[["tofu soyeux",100,"g"],["bouillon",150,"ml"],["kombu",3,"g"],["sauce soja",0.5,"c. à café"],["huile de sésame grillé",0.5,"c. à café"],["ciboulette","",HERBS]],
 steps:[
  "Avant de commencer — Ustensiles : une petite casserole, une cuillère, un petit bol creux, des ciseaux. Le plat en deux mots : « sundubu » est un tofu très mou, presque une crème prise, qui se mange à la cuillère ; en Corée on le sert souvent dans une soupe brûlante et pimentée, ici dans un bouillon doux et tiède. Le tofu soyeux est le tofu le plus fragile : on le manipule sans le serrer. Le kombu est une algue brune séchée : elle donne du goût au bouillon (un goût de mer rond, appelé umami) puis elle est retirée.",
  "Le bouillon — Verser le bouillon ({{bouillon}}) dans la casserole avec le kombu ({{kombu}}). Chauffer à feu très doux 5 minutes : de minuscules bulles se forment au fond, mais le bouillon ne bout pas, sinon l'algue le rendrait amer. Retirer le kombu avec la cuillère et le jeter. [[sortir; casserole; cuisson 5]]",
  "Le tofu — Ajouter la sauce soja (1/2 c. à café), puis faire glisser le tofu soyeux ({{tofu soyeux}}) à la cuillère, en 3 ou 4 gros morceaux. Ne pas remuer : laisser tiédir 2 minutes à feu éteint, le tofu se réchauffe sans se défaire. [[// verser; cuisson 2]]",
  "Dressage — Verser délicatement dans le bol creux avec le bouillon, ajouter 1/2 c. à café d'huile de sésame grillé et la ciboulette ({{ciboulette}}) coupée aux ciseaux, pointes vertes seulement. [[ciseler; dresser x2]]"],
 tip:"Un bouillon qui ne bout jamais reste limpide et doux ; le kombu lui donne sa profondeur sans aucun piment."}),

RC({id:"n-bc-dubu-jjim", n:"Dubu-jjim : tofu à la vapeur, sauce sésame & ciboulette", cat:"Banchan", st:"Banchan", base:"Aucun", d:1, go:"Protéine",
 ing:[["tofu ferme",90,"g"],["sauce soja",0.5,"c. à café"],["huile de sésame grillé",0.5,"c. à café"],["graines de sésame",1,"c. à café"],["ciboulette","",HERBS]],
 steps:[
  "Avant de commencer — Ustensiles : une casserole avec son couvercle, une planche et un couteau, du papier absorbant, un petit bol, une cuillère. Le plat en deux mots : « jjim » veut dire cuit à la vapeur. Ici la vapeur est celle de 4 cuillères d'eau qui chauffent dans la casserole fermée : le tofu se réchauffe en douceur, gonfle un peu et reste blanc, sans aucune matière grasse chaude. La sauce se prépare à froid et se verse à la fin.",
  "Le tofu — Éponger le tofu ferme ({{tofu ferme}}) dans du papier absorbant en appuyant doucement, puis le couper en tranches de 1 cm. Verser 4 cuillères d'eau dans la casserole, y ranger les tranches côte à côte, couvrir et chauffer à feu doux 5 minutes : le tofu est chaud, gonflé de vapeur et tendre à cœur. [[sortir; presser tofu ferme; couper tofu ferme; casserole; cuisson 5]]",
  "La sauce — Pendant ce temps, mélanger dans le petit bol 1/2 c. à café de sauce soja, 1/2 c. à café d'huile de sésame grillé, une cuillère d'eau et les graines de sésame ({{graines de sésame}}) légèrement écrasées du dos de la cuillère. [[// delayer]]",
  "Dressage — Égoutter le tofu, le ranger en rosace (comme les pétales d'une fleur) dans une petite assiette, napper de sauce et parsemer de la ciboulette ({{ciboulette}}) ciselée, pointes vertes seulement. [[egoutter; ciseler; dresser x3]]"],
 tip:"La vapeur douce de la casserole couverte garde le tofu blanc et fondant. Plus il est chaud en sortant, plus il boit la sauce."}),

RC({id:"n-bc-sundubu-muchim", n:"Sundubu-muchim : tofu soyeux tiède, sauce soja & sésame", cat:"Banchan", st:"Banchan", base:"Aucun", d:1, go:"Protéine",
 ing:[["tofu soyeux",100,"g"],["sauce soja",0.5,"c. à café"],["huile de sésame grillé",0.5,"c. à café"],["graines de sésame",1,"c. à café"],["ciboulette","",HERBS]],
 steps:[
  "Avant de commencer — Ustensiles : une petite casserole avec son couvercle, une cuillère, un petit bol creux, des ciseaux. Le plat en deux mots : « sundubu » est le tofu très mou, presque une crème prise ; « muchim » veut dire assaisonné. On le réchauffe à peine, puis on le nappe d'une sauce soja-sésame. C'est la version la plus rapide et la plus légère de tous les banchan à protéine.",
  "Le tofu — Verser 2 cuillères d'eau dans la casserole, y poser le tofu soyeux ({{tofu soyeux}}) en 3 ou 4 gros morceaux, couvrir et chauffer à feu très doux 3 minutes, sans remuer : il se réchauffe sans se défaire et devient tiède au toucher. [[sortir; casserole; cuisson 3]]",
  "La sauce — Dans le petit bol, mélanger 1/2 c. à café de sauce soja, 1/2 c. à café d'huile de sésame grillé et les graines de sésame ({{graines de sésame}}) écrasées du dos de la cuillère : ainsi elles libèrent leur parfum. [[// delayer]]",
  "Dressage — Soulever le tofu avec la cuillère en laissant l'eau dans la casserole, le poser dans le bol creux, napper de sauce et parsemer de la ciboulette ({{ciboulette}}) coupée aux ciseaux, pointes vertes seulement. [[ciseler; dresser x3]]"],
 tip:"Servi tiède, le tofu soyeux est presque une crème : la sauce n'est là que pour lui donner du relief."}),

RC({id:"n-bc-dubu-soboro", n:"Dubu-soboro : tofu émietté mijoté, façon « petite viande hachée »", cat:"Banchan", st:"Banchan", base:"Aucun", d:1, go:"Protéine",
 ing:[["tofu ferme",90,"g"],["carotte",20,"g"],["sauce soja",0.5,"c. à café"],["sirop d'érable",0.5,"c. à café"],["huile de sésame grillé",0.5,"c. à café"],["eau",40,"ml"]],
 steps:[
  "Avant de commencer — Ustensiles : une petite casserole avec son couvercle, une râpe, une fourchette, du papier absorbant, une cuillère. Le plat en deux mots : « soboro » est un mot japonais pour des miettes mijotées dans une sauce sucrée-salée ; on le prépare d'habitude avec de la viande hachée. Ici le tofu ferme est émietté à la fourchette en petits grains, et mijote doucement dans la sauce jusqu'à l'absorber. C'est moelleux, légèrement sucré, et chaque miette se mêle bien aux autres plats du repas.",
  "La carotte — Éplucher la carotte ({{carotte}}) et la râper finement : des petits filaments colorés qui cuiront en même temps que le tofu. [[eplucher carotte; raper carotte]]",
  "Le tofu — Éponger le tofu ferme ({{tofu ferme}}) dans du papier absorbant, puis l'émietter à la fourchette dans la casserole : on cherche de petites miettes de 3 à 5 mm, comme de la chapelure grossière. [[sortir; presser tofu ferme; ecraser tofu ferme]]",
  "Le mijotage — Ajouter 40 ml d'eau, 1/2 c. à café de sauce soja, 1/2 c. à café de sirop d'érable et la carotte râpée. Couvrir et chauffer à feu doux 6 minutes en remuant à la cuillère à mi-cuisson. Repère : le liquide a été absorbé, les grains sont brun clair et brillants, tendres mais encore séparés. [[casserole; cuisson 6]]",
  "Dressage — Hors du feu, ajouter 1/2 c. à café d'huile de sésame grillé, mélanger et servir tiède en petit monticule. [[dresser x2]]"],
 tip:"Plus le tofu est émietté finement, mieux il absorbe la sauce. Le reste se garde au frais, bien couvert, jusqu'au lendemain."}),

/* ---------- à protéine : œufs ---------- */
RC({id:"n-bc-gyeran-jjim", n:"Gyeran-jjim : œuf soufflé à la coréenne, au bouillon", cat:"Banchan", st:"Banchan", base:"Aucun", d:1, go:"Protéine",
 ing:[["oeuf",2,"pièce"],["bouillon",100,"ml"],["huile de sésame grillé",0.5,"c. à café"],["ciboulette","",HERBS],["sel",1,"pincée"]],
 steps:[
  "Avant de commencer — Ustensiles : une petite casserole épaisse avec son couvercle, un bol, une fourchette, une cuillère, des ciseaux. Le plat en deux mots : « gyeran » veut dire œuf et « jjim » cuit à la vapeur. C'est un flan d'œuf léger, gonflé comme un soufflé, qui tremble quand on bouge le plat. Un seul œuf préparé de cette façon par plat.",
  "Le mélange — Casser les œufs ({{oeuf}}) dans le bol et les battre à la fourchette avec le bouillon ({{bouillon}}) tiède et le sel, jusqu'à obtenir un liquide homogène et jaune pâle, sans mousse ni filaments blancs. Plus on bat doucement, plus le résultat est lisse. [[sortir; ecaler x2; battre]]",
  "La cuisson — Verser dans la casserole, couvrir et cuire à feu très doux 8 minutes. Remuer doucement une seule fois après 3 minutes, avec la cuillère, en ramenant les bords vers le centre. Repère : l'œuf gonfle au-dessus des bords, devient jaune pâle et tremblotant ; au centre, il n'est plus liquide. [[casserole; cuisson 8]]",
  "Dressage — Servir dans la casserole même ou dans un bol, avec un filet de 1/2 c. à café d'huile de sésame grillé et la ciboulette ({{ciboulette}}) coupée aux ciseaux, pointes vertes seulement. [[ciseler; dresser x2]]"],
 tip:"Le secret du gonflé : un feu minuscule et un couvercle. Plus le feu est fort, plus l'œuf se rétracte et devient caoutchouteux."}),

RC({id:"n-bc-gyeran-mari", n:"Gyeran-mari : omelette roulée coréenne à la carotte", cat:"Banchan", st:"Banchan", base:"Aucun", d:1, go:"Protéine",
 ing:[["oeuf",2,"pièce"],["carotte",25,"g"],["huile de sésame grillé",0.5,"c. à café"],["sel",1,"pincée"],["ciboulette","",HERBS]],
 steps:[
  "Avant de commencer — Ustensiles : une petite poêle antiadhésive, une spatule fine, une râpe, un bol, une fourchette, une planche et un couteau. Le plat en deux mots : « gyeran » veut dire œuf et « mari » roulé. On cuit l'omelette en trois fines couches, chacune roulée sur la précédente, puis on la tranche en rondelles qui montrent la spirale. Cuisson très douce, sans matière grasse : l'omelette reste jaune pâle, jamais colorée. Une seule préparation d'œuf par plat.",
  "La carotte — Éplucher la carotte ({{carotte}}) et la râper très finement : de fins filaments qui cuiront dans l'œuf sans rester durs. [[eplucher carotte; raper carotte]]",
  "Les œufs — Casser les œufs ({{oeuf}}) dans le bol, ajouter la carotte, le sel et la ciboulette ({{ciboulette}}) coupée en petits morceaux, pointes vertes seulement. Battre à la fourchette jusqu'à un mélange homogène. [[sortir; ecaler x2; ciseler; battre]]",
  "L'omelette — Chauffer la poêle à feu très doux, sans matière grasse : une goutte d'eau doit y rester sans grésiller. Verser un tiers du mélange en fine couche. Laisser prendre sans colorer environ 1 minute, jusqu'à ce que le dessus ne soit plus liquide. Rouler l'omelette sur elle-même avec la spatule, la pousser sur le côté, verser le deuxième tiers dans l'espace libre en soulevant le rouleau pour que l'œuf passe dessous, et rouler de nouveau autour du premier. Recommencer avec le dernier tiers. [[casserole; cuisson 3]]",
  "Dressage — Laisser reposer 1 minute pour que le rouleau se raffermisse, puis le trancher en rondelles de 2 cm avec un couteau bien affûté. Ajouter 1/2 c. à café d'huile de sésame grillé et dresser les rondelles en rond. [[trancher; dresser x3]]"],
 tip:"Une poêle très douce et peu de mélange à la fois donnent un rouleau tendre, sans aucune coloration. Les rondelles se mangent tièdes."}),

RC({id:"n-bc-gyeran-guk", n:"Gyeran-guk : soupe d'œuf en rubans, bouillon de kombu", cat:"Banchan", st:"Banchan", base:"Aucun", d:1, go:"Protéine",
 ing:[["oeuf",2,"pièce"],["bouillon",250,"ml"],["kombu",3,"g"],["huile de sésame grillé",0.5,"c. à café"],["ciboulette","",HERBS]],
 steps:[
  "Avant de commencer — Ustensiles : une petite casserole, une fourchette, un bol, une cuillère, un bol à soupe. Le plat en deux mots : « gyeran » veut dire œuf et « guk » soupe. L'œuf battu est versé en filet dans un bouillon qui frémit : il se fige aussitôt en longs rubans soyeux, un peu comme dans la soupe chinoise « à l'œuf filé ». Le kombu est une algue séchée qui parfume le bouillon puis est retirée. Un seul œuf préparé de cette façon par plat.",
  "Le bouillon — Chauffer le bouillon ({{bouillon}}) avec le kombu ({{kombu}}) à feu très doux 5 minutes, sans bouillir (il bouillirait à gros bouillons, l'algue deviendrait amère), puis retirer le kombu. [[sortir; casserole; cuisson 5]]",
  "Les œufs — Casser les œufs ({{oeuf}}) dans le bol et les battre à la fourchette. Verser en filet fin, en tournant lentement la casserole, dans le bouillon qui frémit à peine. Remuer doucement une seule fois avec la cuillère puis éteindre aussitôt : les œufs finissent de prendre à la chaleur du bouillon. [[ecaler x2; battre; verser; cuisson 1]]",
  "Dressage — Servir dans le bol à soupe, avec 1/2 c. à café d'huile de sésame grillé et la ciboulette ({{ciboulette}}) coupée aux ciseaux, pointes vertes seulement. [[ciseler; dresser x2]]"],
 tip:"Verser l'œuf en filet fin dans un bouillon qui frémit à peine : les rubans restent soyeux et ne se brisent pas."}),

RC({id:"n-bc-gyeran-jangjorim", n:"Gyeran-jangjorim : œufs mollets laqués au soja et à l'érable", cat:"Banchan", st:"Banchan", base:"Aucun", d:1, go:"Protéine",
 ing:[["oeuf",2,"pièce"],["sauce soja",0.5,"c. à café"],["sirop d'érable",0.5,"c. à café"],["huile de sésame grillé",0.5,"c. à café"],["ciboulette","",HERBS],["eau",60,"ml"]],
 steps:[
  "Avant de commencer — Ustensiles : une petite casserole avec son couvercle, une cuillère, un bol, un bol d'eau froide. Le plat en deux mots : « jangjorim » est un plat mijoté dans une sauce soja légèrement sucrée ; en Corée on le prépare avec des œufs durs ou de la viande effilochée. Ici l'œuf est mollet : le blanc est pris et le jaune est encore crémeux. On le trempe dans la sauce : il se colore de brun clair. « Laqués » veut dire enrobés d'une sauce brillante, comme vernie. Un seul œuf préparé de cette façon par plat.",
  "Les œufs mollets — Faire frémir de l'eau dans la casserole, y glisser délicatement les œufs ({{oeuf}}) sortis du frigo 10 minutes avant. Les cuire 6 minutes 30 : le blanc est pris, le jaune coule encore. Les passer ensuite 2 minutes dans un bol d'eau froide pour stopper la cuisson, puis les écaler sous un filet d'eau en les roulant doucement sur le plan de travail. [[sortir; casserole; cuisson 7; ecaler x2]]",
  "La laque — Vider la casserole, y verser 60 ml d'eau, 1/2 c. à café de sauce soja et 1/2 c. à café de sirop d'érable. Faire frémir 1 minute à feu doux en mélangeant, jusqu'à ce que la sauce soit légèrement sirupeuse. Éteindre. [[casserole; cuisson 1]]",
  "L'enrobage — Remettre les œufs dans la sauce tiède et les rouler doucement avec la cuillère 1 minute pour qu'ils prennent une jolie couleur. Les ouvrir en deux au dernier moment, d'un coup de couteau mouillé : le jaune reste en place. [[attente 1; trancher]]",
  "Dressage — Poser les demi-œufs dans un petit bol, napper de sauce, ajouter 1/2 c. à café d'huile de sésame grillé et la ciboulette ({{ciboulette}}) ciselée, pointes vertes seulement. [[ciseler; dresser x3]]"],
 tip:"Le trempage dans la sauce doit rester bref : plus longtemps, les œufs deviennent trop salés. Le jaune crémeux fait office de sauce pour le riz."}),

RC({id:"n-bc-gyeran-gim-mari", n:"Gyeran-gim-mari : omelette tendre roulée dans une feuille de nori", cat:"Banchan", st:"Banchan", base:"Aucun", d:1, go:"Protéine",
 ing:[["oeuf",2,"pièce"],["nori",0.5,"pièce"],["epinards",15,"g"],["sel",1,"pincée"],["huile de sésame grillé",0.5,"c. à café"]],
 steps:[
  "Avant de commencer — Ustensiles : une petite poêle antiadhésive avec son couvercle, une spatule fine, un bol, une fourchette, une planche et un couteau bien affûté. Le plat en deux mots : « gim » est le nom coréen de l'algue nori, ces feuilles fines et séchées qui roulent les sushis ; « mari » veut dire roulé. On cuit une omelette plate, très mince, on la couvre d'une demi-feuille de nori et d'épinards tendres, on roule le tout, puis on tranche pour voir la spirale verte et noire. Une seule préparation d'œuf par plat.",
  "Les épinards — Laver les épinards ({{epinards}}), les poser dans la poêle avec une cuillère d'eau, couvrir et chauffer à feu doux 1 minute : ils tombent et deviennent tendres. Les presser dans la paume pour retirer l'eau et les hacher finement au couteau. [[sortir; laver epinards; casserole; cuisson 1; presser epinards; couper epinards]]",
  "Les œufs — Casser les œufs ({{oeuf}}) dans le bol avec le sel, battre à la fourchette jusqu'à un mélange homogène et jaune pâle. [[ecaler x2; battre]]",
  "L'omelette — Essuyer la poêle, la chauffer à feu très doux, sans matière grasse, et verser tout l'œuf en fine couche. Laisser prendre environ 2 minutes à couvert, sans colorer, jusqu'à ce que le dessus ne soit plus liquide. Poser aussitôt la demi-feuille de nori ({{nori}}) sur l'omelette, répartir les épinards dessus, puis rouler serré avec la spatule en commençant par le bord le plus proche. [[cuisson 3]]",
  "Dressage — Laisser reposer 1 minute pour que le rouleau tienne bien, puis le trancher en rondelles de 2 cm. Ajouter 1/2 c. à café d'huile de sésame grillé et dresser en rond. [[trancher; dresser x3]]"],
 tip:"Le nori ramolli par la chaleur de l'omelette se rend tendre et parfumé. Poser la feuille tout de suite, pendant que l'omelette est encore chaude."}),

RC({id:"n-bc-gyeran-dashi", n:"Gyeran-dashi : œufs mollets dans un bouillon ambré, nori & ciboulette", cat:"Banchan", st:"Banchan", base:"Aucun", d:1, go:"Protéine",
 ing:[["oeuf",2,"pièce"],["bouillon",120,"ml"],["kombu",3,"g"],["sauce soja",0.5,"c. à café"],["nori",0.5,"pièce"],["ciboulette","",HERBS]],
 steps:[
  "Avant de commencer — Ustensiles : deux petites casseroles, une cuillère, un bol d'eau froide, des ciseaux, un bol creux. Le plat en deux mots : le « dashi » est un bouillon japonais très léger, parfumé par l'algue kombu, qui sert de base à beaucoup de plats. Ici on y trempe deux œufs mollets (blanc pris, jaune crémeux) qui s'imprègnent de son goût. C'est tiède, doux et très rassasiant. Un seul œuf préparé de cette façon par plat.",
  "Le dashi — Chauffer le bouillon ({{bouillon}}) avec le kombu ({{kombu}}) dans la première casserole à feu très doux 5 minutes, sans bouillir. Retirer l'algue, ajouter 1/2 c. à café de sauce soja et laisser tiédir hors du feu : le bouillon prend une couleur ambrée. [[sortir; casserole; cuisson 5]]",
  "Les œufs mollets — Pendant que le bouillon infuse, faire frémir de l'eau dans la deuxième casserole, y glisser délicatement les œufs ({{oeuf}}) sortis du frigo 10 minutes avant, et les cuire 6 minutes 30. Les passer 2 minutes sous l'eau froide, puis les écaler délicatement sous un filet d'eau. [[// casserole; cuisson 7; ecaler x2]]",
  "Dressage — Déposer les œufs dans le bol creux, verser le dashi tiède autour, émietter la demi-feuille de nori ({{nori}}) du bout des doigts par-dessus et parsemer de la ciboulette ({{ciboulette}}) coupée aux ciseaux, pointes vertes seulement. Piquer le jaune à table : il coule dans le bouillon. [[ciseler; dresser x3]]"],
 tip:"Un dashi qui ne bout pas reste limpide et doux. Si l'on veut plus de goût, laisser le kombu infuser 5 minutes de plus hors du feu."}),

/* ---------- à protéine : poulet ---------- */
RC({id:"n-bc-dak-jorim", n:"Dak-jorim : poulet braisé soja-érable, patate douce fondante", cat:"Banchan", st:"Banchan", base:"Aucun", d:1, go:"Protéine",
 ing:[["blanc de poulet",90,"g"],["patate douce",30,"g"],["sauce soja",0.5,"c. à café"],["sirop d'érable",0.5,"c. à café"],["huile de sésame grillé",0.5,"c. à café"],["eau",80,"ml"],["ciboulette","",HERBS]],
 steps:[
  "Avant de commencer — Ustensiles : une casserole avec son couvercle, une planche réservée à la volaille crue et un couteau, un économe, une cuillère. Le plat en deux mots : « dak » veut dire poulet et « jorim » braisé, c'est-à-dire cuit doucement, à couvert, dans un peu de liquide parfumé qui réduit en sirop brillant. Les morceaux de poulet sont petits : ils cuisent vite et restent juteux. Aucune coloration à la poêle : la sauce donne la couleur.",
  "Le poulet — Couper le blanc de poulet ({{blanc de poulet}}) en cubes de 2 cm, en retirant toute trace de gras ou de nerf. Éplucher la patate douce ({{patate douce}}) et la couper en petits dés de 1 cm : une petite portion, la patate douce étant limitée dans le protocole. [[sortir; couper blanc de poulet; eplucher patate douce; couper patate douce]]",
  "La braise — Mettre le poulet et la patate douce dans la casserole avec 80 ml d'eau, 1/2 c. à café de sauce soja et 1/2 c. à café de sirop d'érable. Couvrir et laisser frémir (l'eau bouge à peine, quelques petites bulles montent, sans bouillir) à feu doux 10 minutes en remuant deux fois. Contrôle : ouvrir un cube de poulet en deux avec la cuillère, il doit être blanc partout, sans aucune trace rosée, et la patate douce s'écrase sous la cuillère. Si le liquide s'évapore, ajouter une cuillère d'eau. [[casserole; cuisson 10]]",
  "Dressage — Hors du feu, ajouter 1/2 c. à café d'huile de sésame grillé et mélanger. Verser dans un petit bol avec le jus de cuisson et parsemer de la ciboulette ({{ciboulette}}) ciselée, pointes vertes seulement. Servir tiède. [[ciseler; dresser x2]]"],
 tip:"Des cubes de 2 cm cuisent à cœur en 10 minutes sans sécher. Le jus de cuisson, légèrement sucré, parfume le riz."}),

RC({id:"n-bc-dak-muchim", n:"Dak-muchim : poulet effiloché, sauce sésame & érable", cat:"Banchan", st:"Banchan", base:"Aucun", d:1, go:"Protéine",
 ing:[["blanc de poulet",90,"g"],["huile de sésame grillé",0.5,"c. à café"],["sauce soja",0.5,"c. à café"],["sirop d'érable",0.5,"c. à café"],["ciboulette","",HERBS],["eau",200,"ml"],["sel",1,"pincée"]],
 steps:[
  "Avant de commencer — Ustensiles : une casserole avec son couvercle, une planche réservée à la volaille crue et un couteau, deux fourchettes, un bol, une cuillère. Le plat en deux mots : « dak » veut dire poulet et « muchim » assaisonné. Le blanc de poulet est poché, c'est-à-dire cuit dans de l'eau qui frémit à peine, ce qui le garde très tendre. Puis il est effiloché, c'est-à-dire déchiré en longs filaments avec deux fourchettes, et mêlé à une sauce douce à l'huile de sésame.",
  "Le pochage — Couper le blanc de poulet ({{blanc de poulet}}) en deux escalopes de 1 cm d'épaisseur en le fendant dans l'épaisseur. Porter 200 ml d'eau salée d'une pincée de sel ({{sel}}) à frémissement dans la casserole, y glisser le poulet, couvrir et éteindre le feu après 2 minutes : la chaleur de l'eau finit la cuisson, 6 minutes de plus. Contrôle : la chair est blanche et ferme, sans aucune trace rosée, et le jus qui s'écoule est clair. [[sortir; couper blanc de poulet; casserole; cuisson 8]]",
  "L'effilochage — Sortir le poulet, le laisser tiédir 2 minutes, puis le déchirer avec deux fourchettes dans le sens des fibres, en filaments fins. Garder 2 cuillères d'eau de pochage pour la sauce. [[effilocher blanc de poulet]]",
  "La sauce — Dans le bol, mélanger 1/2 c. à café d'huile de sésame grillé, 1/2 c. à café de sauce soja, 1/2 c. à café de sirop d'érable et 2 cuillères d'eau de pochage tiède. Verser sur le poulet effiloché et mêler délicatement. [[delayer; verser]]",
  "Dressage — Servir tiède en petit tas, parsemé de la ciboulette ({{ciboulette}}) ciselée, pointes vertes seulement. [[ciseler; dresser x2]]"],
 tip:"Éteindre le feu et laisser le poulet finir de cuire dans l'eau chaude évite qu'il durcisse. L'eau de pochage ajoutée à la sauce la rend plus douce."}),

RC({id:"n-bc-dak-jjim", n:"Dak-jjim : poulet tendre à la vapeur, carotte & sauce soja douce", cat:"Banchan", st:"Banchan", base:"Aucun", d:1, go:"Protéine",
 ing:[["blanc de poulet",90,"g"],["carotte",30,"g"],["sauce soja",0.5,"c. à café"],["sirop d'érable",0.5,"c. à café"],["huile de sésame grillé",0.5,"c. à café"],["eau",100,"ml"]],
 steps:[
  "Avant de commencer — Ustensiles : une casserole avec son couvercle, une planche réservée à la volaille crue et un couteau, un économe, un petit bol, une cuillère. Le plat en deux mots : « dak » veut dire poulet et « jjim » cuit à la vapeur. Le poulet cuit dans la vapeur de la casserole fermée, sur un lit de carottes, ce qui le garde très moelleux. Dans cette version la sauce est préparée à part et versée à la fin, pour que le poulet reste clair.",
  "La préparation — Éplucher la carotte ({{carotte}}) et la couper en fins bâtonnets de 3 mm : ils serviront de lit au poulet. Couper le blanc de poulet ({{blanc de poulet}}) en lanières de 1 cm d'épaisseur, en retirant le gras et les nerfs. [[sortir; eplucher carotte; couper carotte; couper blanc de poulet]]",
  "La vapeur — Mettre les bâtonnets de carotte dans la casserole avec 100 ml d'eau, poser le poulet par-dessus sur une seule couche, couvrir et chauffer à feu doux 10 minutes sans soulever le couvercle. Contrôle : une lanière coupée en deux est blanche à cœur, sans trace rosée. [[casserole; cuisson 10]]",
  "La sauce — Pendant ce temps, mélanger dans le petit bol 1/2 c. à café de sauce soja, 1/2 c. à café de sirop d'érable et 1 cuillère d'eau. [[// delayer]]",
  "Dressage — Égoutter la carotte et le poulet, les ranger dans un petit bol, napper de la sauce (la verser par-dessus pour recouvrir le poulet) et ajouter 1/2 c. à café d'huile de sésame grillé. Servir tiède. [[egoutter; dresser x3]]"],
 tip:"Le poulet ne touche jamais l'eau : la vapeur le cuit en douceur et la carotte dessous prend son jus."}),

RC({id:"n-bc-dak-guk", n:"Dak-guk : petite soupe de poulet haché, bouillon de kombu & épinards", cat:"Banchan", st:"Banchan", base:"Aucun", d:1, go:"Protéine",
 ing:[["poulet",90,"g"],["bouillon",250,"ml"],["kombu",3,"g"],["epinards",20,"g"],["huile de sésame grillé",0.5,"c. à café"],["ciboulette","",HERBS]],
 steps:[
  "Avant de commencer — Ustensiles : une casserole, une planche réservée à la volaille crue et un couteau, une cuillère, un bol à soupe. Le plat en deux mots : « dak » veut dire poulet et « guk » soupe. Le poulet est coupé très finement, presque haché, pour cuire en quelques minutes dans le bouillon : on obtient une soupe claire et réconfortante, tiède et sans piment. Le kombu est une algue séchée qui parfume le bouillon puis est retirée.",
  "Le poulet — Hacher le poulet ({{poulet}}) au couteau en tout petits morceaux de 3 mm, en retirant gras et nerfs. Laver les épinards ({{epinards}}) et les couper en fines lanières. [[sortir; couper poulet; laver epinards; couper epinards]]",
  "Le bouillon — Chauffer le bouillon ({{bouillon}}) avec le kombu ({{kombu}}) à feu très doux 4 minutes, sans bouillir, puis retirer l'algue. [[casserole; cuisson 4]]",
  "La cuisson — Ajouter le poulet haché dans le bouillon frémissant en le séparant avec la cuillère, puis les épinards. Laisser frémir à petit feu 5 minutes : le poulet devient blanc et ferme, les épinards tombent. Contrôle : goûter un morceau de poulet, il ne doit y avoir aucune trace rosée. [[cuisson 5]]",
  "Dressage — Verser dans le bol à soupe, ajouter 1/2 c. à café d'huile de sésame grillé et parsemer de la ciboulette ({{ciboulette}}) coupée aux ciseaux, pointes vertes seulement. Servir tiède. [[ciseler; dresser x2]]"],
 tip:"Un poulet haché très fin cuit en quelques minutes et reste tendre : à surveiller, car trop cuit il devient filandreux."}),

/* ---------- à protéine : sardines ---------- */
RC({id:"n-bc-godeungeo-jorim", n:"Godeungeo-jorim : sardines mijotées au daikon, sauce douce", cat:"Banchan", st:"Banchan", base:"Aucun", d:1, go:"Protéine",
 ing:[["sardines au naturel",85,"g"],["daikon",30,"g"],["sauce soja",0.5,"c. à café"],["sirop d'érable",0.5,"c. à café"],["huile de sésame grillé",0.5,"c. à café"],["eau",60,"ml"],["ciboulette","",HERBS]],
 steps:[
  "Avant de commencer — Ustensiles : une casserole avec son couvercle, une planche et un couteau, un économe, du papier absorbant, une cuillère. Le plat en deux mots : « godeungeo-jorim » est en Corée du maquereau braisé avec du radis ; ici on utilise des sardines au naturel en boîte, déjà cuites, qui n'ont qu'à se réchauffer dans une sauce douce. Le daikon est un gros radis blanc, très doux une fois cuit. Plat du midi, occasionnel, hors phase sensible.",
  "Les sardines et le daikon — Égoutter les sardines au naturel ({{sardines au naturel}}) sur du papier absorbant et retirer l'arête centrale si elle est présente. Éplucher le daikon ({{daikon}}) et le couper en fines demi-rondelles de 3 mm : elles cuisent vite et deviennent translucides. [[sortir; egoutter; eplucher daikon; couper daikon]]",
  "Le daikon — Mettre le daikon dans la casserole avec 60 ml d'eau, 1/2 c. à café de sauce soja et 1/2 c. à café de sirop d'érable. Couvrir et laisser frémir (l'eau bouge à peine, quelques petites bulles montent, sans bouillir) à feu doux 5 minutes : il devient translucide et tendre. [[casserole; cuisson 5]]",
  "Les sardines — Poser les sardines sur le daikon, couvrir et chauffer 3 minutes à feu très doux, sans remuer pour ne pas les émietter : elles se réchauffent dans la vapeur et se laissent napper de sauce. [[cuisson 3]]",
  "Dressage — Glisser le tout dans un petit bol avec la sauce, ajouter 1/2 c. à café d'huile de sésame grillé et la ciboulette ({{ciboulette}}) ciselée, pointes vertes seulement. Servir tiède. [[ciseler; dresser x3]]"],
 tip:"Des sardines déjà cuites n'ont besoin que de quelques minutes de chaleur : plus longtemps, elles s'émiettent et sentent fort."}),

/* ---------- légumes : verts et tendres ---------- */
RC({id:"n-bc-sigeumchi-namul", n:"Sigeumchi-namul : épinards tendres à l'huile de sésame", cat:"Banchan", st:"Banchan", base:"Aucun", d:1, go:"Légume",
 ing:[["epinards",90,"g"],["huile de sésame grillé",0.5,"c. à café"],["sel",1,"pincée"]],
 steps:[
  "Avant de commencer — Ustensiles : une casserole avec son couvercle, une passoire, un bol, un couteau et une planche. Le plat en deux mots : « sigeumchi » veut dire épinards et « namul » désigne un légume cuit puis assaisonné à la main, servi tiède. C'est le banchan le plus courant en Corée.",
  "Les épinards — Laver les épinards ({{epinards}}) en plusieurs eaux : la terre se cache entre les feuilles. Les mettre dans la casserole avec une cuillère d'eau, couvrir et chauffer à feu doux 3 minutes. Repère : ils ont diminué de volume, ils sont d'un vert foncé brillant et très tendres. [[sortir; laver epinards; casserole; cuisson 3]]",
  "L'essorage — Verser dans la passoire, laisser égoutter une minute, puis presser doucement entre les mains pour chasser l'eau. C'est le geste clé : un épinard bien essoré garde son goût et ne dilue pas l'huile. Couper en morceaux de 4 cm. [[egoutter; presser epinards; couper epinards]]",
  "Dressage — Dans le bol, mélanger les épinards avec 1/2 c. à café d'huile de sésame grillé (huile au parfum de noisette, ajoutée à froid) et une pincée de sel. Servir tiède, en petit tas bien rond. [[dresser x2]]"],
 tip:"Bien presser les épinards est le geste clé : un banchan dense et parfumé, jamais baignant d'eau."}),

RC({id:"n-bc-haricots-verts-namul", n:"Haricots verts : tendres, sauce soja & sésame", cat:"Banchan", st:"Banchan", base:"Aucun", d:1, go:"Légume",
 ing:[["haricots verts",70,"g"],["huile de sésame grillé",0.5,"c. à café"],["sauce soja",0.5,"c. à café"]],
 steps:[
  "Avant de commencer — Ustensiles : une casserole avec son couvercle, une passoire, un bol, un couteau et une planche. Les haricots verts sont limités à 75 g cuits par repas : au-delà, ils fermentent dans l'intestin (c'est le seuil FODMAP). Le plat en deux mots : un namul, c'est-à-dire un légume cuit puis assaisonné à la main.",
  "Les haricots — Équeuter les haricots verts ({{haricots verts}}) (couper le petit bout dur), les laver, puis les couper en deux. Les mettre dans la casserole avec 3 cuillères d'eau, couvrir et cuire à feu doux 8 minutes. Repère : ils sont très tendres et s'écrasent entre la langue et le palais, sans aucun craquant. [[sortir; laver haricots verts; couper haricots verts; casserole; cuisson 8]]",
  "Dressage — Égoutter dans la passoire. Dans le bol, mélanger avec 1/2 c. à café d'huile de sésame grillé et 1/2 c. à café de sauce soja. Servir tièdes. [[egoutter; dresser x2]]"],
 tip:"Cuits très tendres, les haricots verts se digèrent mieux : c'est l'inverse du « croquant » des restaurants."}),

RC({id:"n-bc-hobak-namul", n:"Hobak-namul : courgette étuvée, douce comme de la soie", cat:"Banchan", st:"Banchan", base:"Aucun", d:1, go:"Légume",
 ing:[["courgette",60,"g"],["huile de sésame grillé",0.5,"c. à café"],["sel",1,"pincée"]],
 steps:[
  "Avant de commencer — Ustensiles : une casserole avec son couvercle, un économe (l'éplucheur), une planche et un couteau. Le plat en deux mots : « hobak » veut dire courgette ; elle est ici « étuvée », c'est-à-dire cuite à couvert dans très peu d'eau, sans jamais colorer. La courgette est limitée à 60 g épluchée par repas (seuil FODMAP).",
  "La courgette — Éplucher entièrement la courgette ({{courgette}}), la couper en demi-lunes de 5 mm d'épaisseur. Les mettre dans la casserole avec 2 cuillères d'eau, couvrir et étuver à feu doux 5 minutes. Repère : les demi-lunes sont devenues translucides et se coupent à la cuillère. [[sortir; eplucher courgette; couper courgette; casserole; cuisson 5]]",
  "Dressage — Égoutter, ajouter 1/2 c. à café d'huile de sésame grillé et une pincée de sel, mélanger doucement et servir tiède. [[egoutter; dresser x2]]"],
 tip:"Épluchée et étuvée à l'eau, la courgette est très douce ; l'huile de sésame fait tout le parfum."}),

RC({id:"n-bc-gaji-namul", n:"Gaji-namul : aubergine pelée, fondante, sauce soja douce", cat:"Banchan", st:"Banchan", base:"Aucun", d:1, go:"Légume",
 ing:[["aubergine",90,"g"],["huile de sésame grillé",0.5,"c. à café"],["sauce soja",0.5,"c. à café"]],
 steps:[
  "Avant de commencer — Ustensiles : une casserole avec son couvercle, un économe, une planche et un couteau, un bol, une fourchette. Le plat en deux mots : « gaji » veut dire aubergine. Cuite à la vapeur douce, elle devient presque une purée tendre, très loin de l'aubergine frite.",
  "L'aubergine — Éplucher entièrement l'aubergine ({{aubergine}}) : la peau est difficile à digérer. La couper en bâtonnets de 1 cm de côté, les mettre dans la casserole avec 3 cuillères d'eau, couvrir et cuire à feu doux 8 minutes. Repère : un bâtonnet s'écrase sans effort contre la paroi de la casserole. [[sortir; eplucher aubergine; couper aubergine; casserole; cuisson 8]]",
  "Dressage — Égoutter, puis effilocher légèrement les bâtonnets à la fourchette. Les mélanger doucement avec 1/2 c. à café d'huile de sésame grillé et 1/2 c. à café de sauce soja. Servir tiède. [[egoutter; effilocher aubergine; dresser x2]]"],
 tip:"Toujours bien pelée et très cuite : l'aubergine doit se défaire à la fourchette."}),

RC({id:"n-bc-dangeun-namul", n:"Dangeun-namul : fines carottes étuvées, parfum de sésame", cat:"Banchan", st:"Banchan", base:"Aucun", d:1, go:"Légume",
 ing:[["carotte",90,"g"],["huile de sésame grillé",0.5,"c. à café"],["sel",1,"pincée"]],
 steps:[
  "Avant de commencer — Ustensiles : une casserole avec son couvercle, un économe, une planche et un couteau. Le plat en deux mots : « dangeun » est la carotte coréenne. Coupée en fins bâtonnets (la « julienne »), elle cuit vite et reste tendre jusqu'au cœur.",
  "Les carottes — Éplucher la carotte ({{carotte}}), puis la couper en fins bâtonnets de 3 mm d'épaisseur et 5 cm de long : d'abord en tranches fines, puis les tranches en bâtonnets. Les étuver dans la casserole couverte avec 3 cuillères d'eau, à feu doux 7 minutes. Repère : ils plient sans casser. [[sortir; eplucher carotte; couper carotte; casserole; cuisson 7]]",
  "Dressage — Égoutter, ajouter 1/2 c. à café d'huile de sésame grillé et une pincée de sel. Servir tièdes en petit fagot. [[egoutter; dresser x2]]"],
 tip:"Plus les bâtonnets sont fins, plus ils cuisent vite et plus ils sont tendres."}),

RC({id:"n-bc-daikon-namul", n:"Mu-namul : daikon étuvé, translucide et sucré", cat:"Banchan", st:"Banchan", base:"Aucun", d:1, go:"Légume",
 ing:[["daikon",90,"g"],["huile de sésame grillé",0.5,"c. à café"],["sel",1,"pincée"]],
 steps:[
  "Avant de commencer — Ustensiles : une casserole avec son couvercle, un économe, une planche et un couteau. Le plat en deux mots : le daikon est un gros radis blanc asiatique (« mu » en coréen). À l'état naturel il est piquant ; étuvé longtemps, il devient doux et sucré, c'est pourquoi on ne le mange qu'étuvé ici.",
  "Le daikon — Éplucher le daikon ({{daikon}}), puis le couper en fins bâtonnets de 3 mm. Les étuver dans la casserole couverte avec 3 cuillères d'eau, à feu doux 8 minutes. Repère : ils sont devenus translucides, comme du verre dépoli, et sans aucune résistance sous la fourchette. [[sortir; eplucher daikon; couper daikon; casserole; cuisson 8]]",
  "Dressage — Égoutter, ajouter 1/2 c. à café d'huile de sésame grillé et une pincée de sel. Servir tiède. [[egoutter; dresser x2]]"],
 tip:"Étuvé, le daikon perd tout son piquant : si un bâtonnet pique encore, prolonger de 2 minutes."}),

RC({id:"n-bc-pak-choi-namul", n:"Cheong-gyeong-chae : pak choi étuvé à l'huile de sésame", cat:"Banchan", st:"Banchan", base:"Aucun", d:1, go:"Légume",
 ing:[["pak choi",75,"g"],["huile de sésame grillé",0.5,"c. à café"],["sel",1,"pincée"]],
 steps:[
  "Avant de commencer — Ustensiles : une casserole avec son couvercle, une planche et un couteau. Le plat en deux mots : le pak choi est un chou chinois à côtes blanches et feuilles vertes. Il est limité à 75 g cuits par repas (seuil FODMAP). Les côtes sont plus longues à cuire que les feuilles : on les met en premier.",
  "Le pak choi — Laver le pak choi ({{pak choi}}), puis le couper en lanières de 2 cm en séparant les côtes blanches des feuilles vertes. Mettre d'abord les côtes dans la casserole avec 2 cuillères d'eau, couvrir et cuire à feu doux 2 minutes. Ajouter alors les feuilles, couvrir et cuire encore 2 minutes. Repère : les côtes se piquent facilement à la fourchette. [[sortir; laver pak choi; couper pak choi; casserole; cuisson 4]]",
  "Dressage — Égoutter, ajouter 1/2 c. à café d'huile de sésame grillé et une pincée de sel. Servir tiède. [[egoutter; dresser x2]]"],
 tip:"Couper les côtes en lanières fines évite les parties dures au centre."}),

RC({id:"n-bc-brocoli-muchim", n:"Brocoli-muchim : brocoli très tendre, écrasé au sésame", cat:"Banchan", st:"Banchan", base:"Aucun", d:1, go:"Légume",
 ing:[["brocoli",90,"g"],["huile de sésame grillé",0.5,"c. à café"],["sel",1,"pincée"]],
 steps:[
  "Avant de commencer — Ustensiles : une casserole avec son couvercle, une planche et un couteau, une fourchette. Le plat en deux mots : « muchim » désigne un légume assaisonné à la main, en mélangeant doucement. On utilise seulement les têtes (les petits bouquets) du brocoli, jamais les tiges qui sont plus difficiles à digérer.",
  "Le brocoli — Détacher les têtes du brocoli ({{brocoli}}) et les couper en petits bouquets de 2 cm. Les étuver dans la casserole couverte avec 3 cuillères d'eau, à feu doux 8 minutes. Repère : un bouquet s'écrase sous la fourchette, bien plus tendre qu'un brocoli de cantine. [[sortir; laver brocoli; couper brocoli; casserole; cuisson 8]]",
  "Dressage — Égoutter, écraser légèrement quelques bouquets à la fourchette pour que l'huile s'accroche, ajouter 1/2 c. à café d'huile de sésame grillé et une pincée de sel. Servir tiède. [[egoutter; ecraser brocoli; dresser x2]]"],
 tip:"Un brocoli bien cuit, presque trop, est indispensable avec un intestin sensible."}),

RC({id:"n-bc-blettes-namul", n:"Blettes-namul : feuilles de blettes tendres au sésame", cat:"Banchan", st:"Banchan", base:"Aucun", d:1, go:"Légume",
 ing:[["blettes",75,"g"],["huile de sésame grillé",0.5,"c. à café"],["sauce soja",0.5,"c. à café"]],
 steps:[
  "Avant de commencer — Ustensiles : une casserole avec son couvercle, une passoire, une planche et un couteau. Le plat en deux mots : les blettes sont un légume-feuille tendre, avec de grosses côtes blanches. On n'utilise ici que les feuilles : les côtes, plus fibreuses, sont retirées. Préparées à la coréenne.",
  "Les blettes — Laver les blettes ({{blettes}}), retirer les côtes en les découpant à la base des feuilles, puis couper les feuilles en lanières de 3 cm. Les cuire dans la casserole couverte avec 2 cuillères d'eau, à feu doux 5 minutes. Repère : elles sont complètement tombées et d'un vert sombre. [[sortir; laver blettes; couper blettes; casserole; cuisson 5]]",
  "Dressage — Égoutter dans la passoire et presser doucement pour retirer l'eau. Mélanger avec 1/2 c. à café d'huile de sésame grillé et 1/2 c. à café de sauce soja. Servir tiède. [[egoutter; presser blettes; dresser x2]]"],
 tip:"Sans leurs côtes, les blettes sont très douces."}),

RC({id:"n-bc-poireau-namul", n:"Poireau-namul : vert de poireau fondant", cat:"Banchan", st:"Banchan", base:"Aucun", d:1, go:"Légume",
 ing:[["poireau",80,"g"],["huile de sésame grillé",0.5,"c. à café"],["sel",1,"pincée"]],
 steps:[
  "Avant de commencer — Ustensiles : une casserole avec son couvercle, une planche et un couteau, une passoire. Le plat en deux mots : un namul à base de poireau. On n'utilise que le vert tendre du poireau (la partie foncée du haut) : le blanc, riche en sucres fermentescibles, est exclu du protocole.",
  "Le poireau — Détacher les feuilles vertes du poireau ({{poireau}}), les laver en écartant bien les couches (le sable se cache entre elles), puis les couper en tronçons de 3 cm. Les cuire dans la casserole couverte avec 3 cuillères d'eau, à feu doux 8 minutes. Repère : ils sont mous, luisants et se détachent en rubans. [[sortir; laver poireau; couper poireau; casserole; cuisson 8]]",
  "Dressage — Égoutter dans la passoire, presser doucement, ajouter 1/2 c. à café d'huile de sésame grillé et une pincée de sel. Servir tiède. [[egoutter; presser poireau; dresser x2]]"],
 tip:"Le vert de poireau, bien cuit, est très doux et presque sucré : il remplace avantageusement l'oignon."}),

/* ---------- légumes : braisés et sucrés ---------- */
RC({id:"n-bc-potimarron-jorim", n:"Danhobak-jorim : potimarron braisé, laqué au sirop d'érable", cat:"Banchan", st:"Banchan", base:"Aucun", d:1, go:"Légume",
 ing:[["potimarron",90,"g"],["sirop d'érable",0.5,"c. à café"],["sauce soja",0.5,"c. à café"],["huile de sésame grillé",0.5,"c. à café"],["eau",80,"ml"]],
 steps:[
  "Avant de commencer — Ustensiles : une casserole avec son couvercle, un économe, une planche et un couteau solide, une cuillère. Le plat en deux mots : « danhobak » est la courge sucrée, « jorim » signifie braisé, c'est-à-dire cuit doucement à couvert dans un peu de liquide parfumé. Le potimarron est déjà naturellement sucré : le sirop ne sert que de laque brillante.",
  "Le potimarron — Éplucher le potimarron ({{potimarron}}) avec l'économe (sa peau est dure : bien appuyer, ou le couper d'abord en quartiers), retirer les graines avec une cuillère, puis le couper en cubes de 2 cm. [[sortir; eplucher potimarron; couper potimarron]]",
  "La braise — Mettre les cubes dans la casserole avec 80 ml d'eau, 1/2 c. à café de sauce soja et 1/2 c. à café de sirop d'érable. Couvrir et laisser frémir (l'eau bouge à peine, quelques petites bulles montent, sans bouillir) à feu doux 10 minutes, en remuant une fois à mi-cuisson. Repère : les cubes sont fondants, la sauce a presque disparu et les enrobe d'un voile brillant. [[casserole; cuisson 10]]",
  "Dressage — Verser dans un petit bol et finir de 1/2 c. à café d'huile de sésame grillé. [[dresser x2]]"],
 tip:"Le potimarron est naturellement sucré : s'il reste de la sauce au fond, laisser réduire 1 minute à découvert."}),

RC({id:"n-bc-navet-jorim", n:"Naengi-jorim : navet braisé, translucide et sucré", cat:"Banchan", st:"Banchan", base:"Aucun", d:1, go:"Légume",
 ing:[["navet",90,"g"],["sauce soja",0.5,"c. à café"],["huile de sésame grillé",0.5,"c. à café"],["eau",80,"ml"]],
 steps:[
  "Avant de commencer — Ustensiles : une casserole avec son couvercle, un économe, une planche et un couteau. Le plat en deux mots : « jorim » signifie braisé, c'est-à-dire cuit doucement et à couvert dans un peu de liquide. Longuement cuit, le navet perd son amertume et devient presque sucré.",
  "Le navet — Éplucher le navet ({{navet}}) assez profondément pour retirer la peau et la couche dure dessous, puis le couper en cubes de 1,5 cm. [[sortir; eplucher navet; couper navet]]",
  "La braise — Mettre les cubes dans la casserole avec 80 ml d'eau et 1/2 c. à café de sauce soja. Couvrir et laisser frémir (l'eau bouge à peine, quelques petites bulles montent, sans bouillir) à feu doux 10 minutes. Repère : les cubes sont translucides, bruns clair sur les bords, et s'écrasent à la fourchette. [[casserole; cuisson 10]]",
  "Dressage — Verser dans un petit bol et finir de 1/2 c. à café d'huile de sésame grillé. [[dresser x2]]"],
 tip:"Le navet cuit longtemps à l'eau perd toute son amertume et devient sucré."}),

RC({id:"n-bc-goguma-jorim", n:"Goguma-jorim : patate douce braisée & laquée", cat:"Banchan", st:"Banchan", base:"Aucun", d:1, go:"Légume",
 ing:[["patate douce",60,"g"],["sirop d'érable",0.5,"c. à café"],["sauce soja",0.5,"c. à café"],["huile de sésame grillé",0.5,"c. à café"],["eau",60,"ml"]],
 steps:[
  "Avant de commencer — Ustensiles : une casserole avec son couvercle, un économe, une planche et un couteau, une cuillère. Le plat en deux mots : « goguma » est la patate douce. La patate douce est limitée à une petite portion (60 g) car elle fermente facilement ; on la braise, c'est-à-dire qu'on la cuit doucement à couvert dans un peu de liquide.",
  "La patate douce — Éplucher la patate douce ({{patate douce}}) et la couper en cubes de 2 cm. [[sortir; eplucher patate douce; couper patate douce]]",
  "La braise — Mettre les cubes dans la casserole avec 60 ml d'eau, 1/2 c. à café de sauce soja et 1/2 c. à café de sirop d'érable. Couvrir et cuire à feu doux 10 minutes en retournant une fois. Repère : un cube s'écrase sans résistance et la sauce a épaissi en un sirop collant. [[casserole; cuisson 10]]",
  "Dressage — Verser dans un petit bol et finir de 1/2 c. à café d'huile de sésame grillé. Servir tiède. [[dresser x2]]"],
 tip:"Comme la patate douce est riche en sucres, la servir en petite quantité et toujours avec un banchan de protéine."}),

RC({id:"n-bc-panais-jorim", n:"Panais-jorim : panais braisé, parfum de noisette", cat:"Banchan", st:"Banchan", base:"Aucun", d:1, go:"Légume",
 ing:[["panais",80,"g"],["sirop d'érable",0.5,"c. à café"],["huile de sésame grillé",0.5,"c. à café"],["eau",70,"ml"],["sel",1,"pincée"]],
 steps:[
  "Avant de commencer — Ustensiles : une casserole avec son couvercle, un économe, une planche et un couteau. Le plat en deux mots : le panais est une racine blanche, à la chair crème, au goût sucré et légèrement noisette. « Jorim » signifie braisé : cuit doucement à couvert dans un peu de liquide.  Ici seul le sirop d'érable sucre le plat.",
  "Le panais — Éplucher le panais ({{panais}}), retirer le cœur dur s'il est gros, puis le couper en bâtonnets de 1 cm sur 4 cm. [[sortir; eplucher panais; couper panais]]",
  "La braise — Mettre les bâtonnets dans la casserole avec 70 ml d'eau, 1/2 c. à café de sirop d'érable et une pincée de sel. Couvrir et laisser frémir (l'eau bouge à peine, quelques petites bulles montent, sans bouillir) à feu doux 10 minutes. Repère : le panais est translucide et la sauce a épaissi en un voile brillant. [[casserole; cuisson 10]]",
  "Dressage — Verser dans un petit bol, finir de 1/2 c. à café d'huile de sésame grillé et servir tiède. [[dresser x2]]"],
 tip:"Le panais est sucré : on peut même se passer du sirop si les bâtonnets sont bien mûrs."}),

RC({id:"n-bc-fenouil-jorim", n:"Fenouil-jorim : fenouil braisé, doux et anisé", cat:"Banchan", st:"Banchan", base:"Aucun", d:1, go:"Légume",
 ing:[["fenouil",60,"g"],["sauce soja",0.5,"c. à café"],["huile de sésame grillé",0.5,"c. à café"],["eau",60,"ml"]],
 steps:[
  "Avant de commencer — Ustensiles : une casserole avec son couvercle, une planche et un couteau. Le plat en deux mots : le fenouil est un légume à bulbe blanc au parfum d'anis. Cuit, l'anis s'adoucit et le bulbe devient fondant. Portion limitée à 60 g (seuil FODMAP). « Jorim » signifie braisé : cuit à couvert dans un peu de liquide.",
  "Le fenouil — Retirer les feuilles abîmées et la base dure du fenouil ({{fenouil}}), puis le couper en fines lamelles de 5 mm : la finesse garantit la tendreté. [[sortir; couper fenouil]]",
  "La braise — Mettre les lamelles dans la casserole avec 60 ml d'eau et 1/2 c. à café de sauce soja. Couvrir et laisser frémir (l'eau bouge à peine, quelques petites bulles montent, sans bouillir) à feu doux 10 minutes. Repère : les lamelles sont translucides et fondent sous la fourchette. [[casserole; cuisson 10]]",
  "Dressage — Verser dans un petit bol et finir de 1/2 c. à café d'huile de sésame grillé. [[dresser x2]]"],
 tip:"Le fenouil cuit longtemps perd son parfum d'anis trop fort : il reste une douceur sucrée."}),

/* ---------- légumes : tendres, doux et nouveaux ---------- */
RC({id:"n-bc-celeri-rave-namul", n:"Celeri-rave-muchim : céleri-rave fondant, sésame doux", cat:"Banchan", st:"Banchan", base:"Aucun", d:1, go:"Légume",
 ing:[["celeri-rave",60,"g"],["huile de sésame grillé",0.5,"c. à café"],["sel",1,"pincée"]],
 steps:[
  "Avant de commencer — Ustensiles : une casserole avec son couvercle, un économe, une planche et un couteau, une fourchette. Le plat en deux mots : le céleri-rave est une racine ronde et irrégulière, au goût de noisette. Portion limitée à 60 g (seuil FODMAP). « Muchim » désigne un légume assaisonné à la main, en mélangeant doucement.",
  "Le céleri-rave — Éplucher largement le céleri-rave ({{celeri-rave}}) au couteau (sa peau est épaisse et pleine de creux), puis le couper en petits dés de 1 cm. Les cuire dans la casserole couverte avec 3 cuillères d'eau, à feu doux 10 minutes. Repère : les dés s'écrasent sans résistance. [[sortir; eplucher celeri-rave; couper celeri-rave; casserole; cuisson 10]]",
  "Dressage — Égoutter, écraser grossièrement à la fourchette, ajouter 1/2 c. à café d'huile de sésame grillé et une pincée de sel. Servir tiède. [[egoutter; ecraser celeri-rave; dresser x2]]"],
 tip:"Écrasé grossièrement, le céleri-rave fait penser à une purée rustique."}),

RC({id:"n-bc-chou-fleur-muchim", n:"Chou-fleur-muchim : fleurettes très tendres au sésame", cat:"Banchan", st:"Banchan", base:"Aucun", d:1, go:"Légume",
 ing:[["chou-fleur",60,"g"],["huile de sésame grillé",0.5,"c. à café"],["sauce soja",0.5,"c. à café"]],
 steps:[
  "Avant de commencer — Ustensiles : une casserole avec son couvercle, une planche et un couteau, une fourchette. Le plat en deux mots : « muchim » est un légume assaisonné à la main. Le chou-fleur est limité à 60 g (seuil FODMAP) et cuit bien plus longtemps que d'habitude, pour qu'il devienne presque crémeux.",
  "Le chou-fleur — Détacher de petites fleurettes de chou-fleur ({{chou-fleur}}) sans garder les tiges dures, les laver et les couper en bouquets de 2 cm. Les cuire dans la casserole couverte avec 3 cuillères d'eau, à feu doux 9 minutes. Repère : un bouquet s'effrite à la pression de la fourchette. [[sortir; laver chou-fleur; couper chou-fleur; casserole; cuisson 9]]",
  "Dressage — Égoutter, écraser légèrement à la fourchette, ajouter 1/2 c. à café d'huile de sésame grillé et 1/2 c. à café de sauce soja. Servir tiède. [[egoutter; ecraser chou-fleur; dresser x2]]"],
 tip:"Cuit à fond, le chou-fleur est doux et sucré : c'est la cuisson qui évite les ballonnements."}),

/* ---------- légumes : nouveaux ---------- */
RC({id:"n-bc-patisson-jorim", n:"Patisson-jorim : pâtisson braisé à la sauce soja douce", cat:"Banchan", st:"Banchan", base:"Aucun", d:1, go:"Légume",
 ing:[["patisson",90,"g"],["sauce soja",0.5,"c. à café"],["sirop d'érable",0.5,"c. à café"],["huile de sésame grillé",0.5,"c. à café"],["eau",60,"ml"]],
 steps:[
  "Avant de commencer — Ustensiles : une casserole avec son couvercle, un économe, une planche et un couteau solide, une cuillère. Le plat en deux mots : le pâtisson est une petite courge blanche en forme de soucoupe, au goût d'artichaut doux. « Jorim » signifie braisé : cuit à couvert dans un peu de liquide parfumé.",
  "Le pâtisson — Éplucher le pâtisson ({{patisson}}) (sa peau est épaisse : le couper d'abord en quartiers, puis retirer la peau), enlever les graines, puis le couper en cubes de 2 cm. [[sortir; eplucher patisson; couper patisson]]",
  "La braise — Mettre les cubes dans la casserole avec 60 ml d'eau, 1/2 c. à café de sauce soja et 1/2 c. à café de sirop d'érable. Couvrir et laisser frémir (l'eau bouge à peine, quelques petites bulles montent, sans bouillir) à feu doux 8 minutes. Repère : les cubes sont translucides et ont bruni légèrement par la sauce. [[casserole; cuisson 8]]",
  "Dressage — Verser dans un petit bol et finir de 1/2 c. à café d'huile de sésame grillé. [[dresser x2]]"],
 tip:"Le pâtisson a une chair plus fine que le potimarron : il cuit un peu plus vite."}),

RC({id:"n-bc-wakame-muchim", n:"Miyeok-muchim : algue wakame tendre, sésame & érable", cat:"Banchan", st:"Banchan", base:"Aucun", d:1, go:"Légume",
 ing:[["wakame",8,"g"],["carotte",60,"g"],["huile de sésame grillé",0.5,"c. à café"],["sauce soja",0.5,"c. à café"],["sirop d'érable",0.5,"c. à café"],["eau",300,"ml"]],
 steps:[
  "Avant de commencer — Ustensiles : un bol, une casserole, une passoire, des ciseaux de cuisine. Le plat en deux mots : le wakame est une algue verte, vendue séchée, qui gonfle dans l'eau et devient souple et douce, au goût de mer très léger. On la sert souvent en Corée à la fois en soupe et en salade (« miyeok » en coréen). Une petite quantité suffit : 8 g secs donnent environ 60 g une fois réhydratés. On la mêle à de la carotte fine, qui lui apporte sa douceur et sa couleur.",
  "La réhydratation — Mettre le wakame ({{wakame}}) sec dans le bol, le couvrir de 300 ml d'eau chaude du robinet et attendre 5 minutes. Repère : il a plusieurs fois gonflé, il est souple et d'un vert profond. [[sortir; peser; attente 5]]",
  "La carotte — Pendant que le wakame gonfle, éplucher la carotte ({{carotte}}) et la couper en fins bâtonnets de 3 mm. [[// eplucher carotte; couper carotte]]",
  "La cuisson — Verser le wakame dans la passoire et le rincer à l'eau claire pour retirer le surplus de salaison. Le couper aux ciseaux en lanières de 3 cm, puis le faire chauffer 4 minutes dans la casserole avec la carotte et 2 cuillères d'eau : la carotte devient tendre et le wakame tout à fait souple. [[rincer; couper wakame; casserole; cuisson 4]]",
  "Dressage — Égoutter, presser doucement, puis mélanger avec 1/2 c. à café d'huile de sésame grillé, 1/2 c. à café de sauce soja et 1/2 c. à café de sirop d'érable. Servir tiède. [[egoutter; presser wakame; dresser x2]]"],
 tip:"Le wakame est déjà salé naturellement : n'ajouter rien d'autre. Il se garde très bien un jour au frais."}),

RC({id:"n-bc-butternut-jjim", n:"Hobak-jjim : butternut vapeur, sauce miso douce", cat:"Banchan", st:"Banchan", base:"Aucun", d:1, go:"Légume",
 ing:[["butternut",90,"g"],["miso blanc",0.5,"c. à café"],["huile de sésame grillé",0.5,"c. à café"],["eau",60,"ml"]],
 steps:[
  "Avant de commencer — Ustensiles : une casserole avec son couvercle, un économe, une planche et un couteau solide, un petit bol, une cuillère. Le plat en deux mots : « jjim » désigne un plat cuit à la vapeur. Le butternut est une courge beige à chair orange, très douce. Le miso blanc est une pâte de soja fermentée, salée et un peu sucrée ; on le dilue d'abord dans un peu d'eau pour qu'il ne forme pas de grumeaux.",
  "Le butternut — Éplucher le butternut ({{butternut}}), retirer les graines, puis le couper en cubes de 1,5 cm. [[sortir; eplucher butternut; couper butternut]]",
  "La vapeur — Verser 60 ml d'eau dans la casserole, mettre les cubes dedans, couvrir et cuire à feu doux 8 minutes. Repère : un cube s'écrase à la fourchette. Pendant ce temps, délayer le miso blanc (1/2 c. à café) dans 1 cuillère d'eau chaude dans le petit bol. [[casserole; cuisson 8; delayer]]",
  "Dressage — Égoutter les cubes, les mettre dans le bol, ajouter le miso délayé et 1/2 c. à café d'huile de sésame grillé, mélanger doucement et servir tiède. [[egoutter; dresser x2]]"],
 tip:"Le miso ne doit jamais bouillir : il est ajouté hors du feu pour garder son goût."}),

RC({id:"n-bc-courge-spaghetti-muchim", n:"Courge spaghetti-muchim : longs filaments au sésame", cat:"Banchan", st:"Banchan", base:"Aucun", d:1, go:"Légume",
 ing:[["courge spaghetti",75,"g"],["huile de sésame grillé",0.5,"c. à café"],["sauce soja",0.5,"c. à café"]],
 steps:[
  "Avant de commencer — Ustensiles : une casserole avec son couvercle, un économe, une planche et un couteau solide, une fourchette. Le plat en deux mots : la courge spaghetti est une courge jaune dont la chair cuite se détache en longs filaments qui ressemblent à des spaghettis. Limitée à 75 g cuits par repas (seuil FODMAP). « Muchim » désigne un légume assaisonné à la main.",
  "La courge — Éplucher la courge spaghetti ({{courge spaghetti}}), retirer les graines, puis la couper en lamelles de 1 cm d'épaisseur. Les cuire dans la casserole couverte avec 3 cuillères d'eau, à feu doux 8 minutes. Repère : une lamelle se défait en fins filaments quand on la gratte à la fourchette. [[sortir; eplucher courge spaghetti; couper courge spaghetti; casserole; cuisson 8]]",
  "Dressage — Égoutter, gratter la chair à la fourchette pour obtenir de longs filaments, mélanger avec 1/2 c. à café d'huile de sésame grillé et 1/2 c. à café de sauce soja. Servir tiède. [[egoutter; effilocher courge spaghetti; dresser x2]]"],
 tip:"Les filaments se forment dans le sens de la longueur : on gratte toujours dans ce sens pour de beaux fils."}),

RC({id:"n-bc-petits-pois-jorim", n:"Wandukong-jorim : petits pois braisés, sauce soja & érable", cat:"Banchan", st:"Banchan", base:"Aucun", d:1, go:"Légume",
 ing:[["petits pois",40,"g"],["carotte",30,"g"],["sauce soja",0.5,"c. à café"],["sirop d'érable",0.5,"c. à café"],["huile de sésame grillé",0.5,"c. à café"],["eau",50,"ml"]],
 steps:[
  "Avant de commencer — Ustensiles : une casserole avec son couvercle, une cuillère, un bol. Le plat en deux mots : « wandukong » veut dire petits pois et « jorim » braisé, c'est-à-dire cuit doucement à couvert dans un liquide parfumé qui réduit. Les petits pois sont limités à 40 g par repas (seuil FODMAP) : c'est un banchan à petite portion.",
  "La braise — Éplucher la carotte ({{carotte}}) et la couper en dés de 5 mm. Mettre les petits pois ({{petits pois}}) (frais écossés ou surgelés, rincés à l'eau tiède) et les dés de carotte dans la casserole avec 50 ml d'eau, 1/2 c. à café de sauce soja et 1/2 c. à café de sirop d'érable. Couvrir et cuire à feu doux 8 minutes en remuant deux fois. Repère : les petits pois sont ridés et très tendres, la carotte fond sous la fourchette, la sauce est sirupeuse. [[sortir; laver petits pois; eplucher carotte; couper carotte; casserole; cuisson 8]]",
  "Dressage — Verser dans un petit bol et finir de 1/2 c. à café d'huile de sésame grillé. Servir tiède. [[dresser x2]]"],
 tip:"Cuits longtemps, les petits pois deviennent presque fondants et se digèrent mieux."}),

RC({id:"n-bc-poivron-namul", n:"Poivron-muchim : poivron pelé, doux comme une confiture", cat:"Banchan", st:"Banchan", base:"Aucun", d:1, go:"Légume",
 ing:[["poivron",70,"g"],["huile de sésame grillé",0.5,"c. à café"],["sauce soja",0.5,"c. à café"],["eau",60,"ml"]],
 steps:[
  "Avant de commencer — Ustensiles : une casserole avec son couvercle, une planche et un couteau, une assiette creuse, une fourchette. Le plat en deux mots : le poivron est ici cuit longuement puis pelé. Cuit à l'eau, sa peau se détache d'un coup d'ongle, ce qui le rend doux et très digeste. « Muchim » désigne un légume assaisonné à la main.",
  "Le poivron — Couper le poivron ({{poivron}}) en deux, retirer le pédoncule, les graines et les filaments blancs, puis le couper en lanières de 1,5 cm. Les cuire dans la casserole couverte avec 60 ml d'eau, à feu doux 10 minutes. Repère : les lanières sont toutes molles et la peau se ride. [[sortir; couper poivron; casserole; cuisson 10]]",
  "Le pelage — Égoutter, laisser tiédir 1 minute dans l'assiette, puis retirer la peau de chaque lanière avec les doigts : elle se détache comme un petit film coloré. [[egoutter; eplucher poivron]]",
  "Dressage — Mélanger la chair avec 1/2 c. à café d'huile de sésame grillé et 1/2 c. à café de sauce soja. Servir tiède. [[dresser x2]]"],
 tip:"Le plus important est de bien retirer la peau : c'est elle qui rend le poivron indigeste."})

,
/* ---------- version 16 : légumes cuits autrement (soupes, velouté, rouleaux, purée) ---------- */
RC({id:"n-bc-mu-guk", n:"Mu-guk : soupe claire de daikon, bouillon de kombu", cat:"Banchan", st:"Banchan", base:"Aucun", d:1, go:"Légume",
 ing:[["daikon",90,"g"],["kombu",2,"g"],["eau",250,"ml"],["sauce soja",0.5,"c. à café"],["huile de sésame grillé",0.5,"c. à café"],["ciboulette","",HERBS]],
 steps:[
  "Avant de commencer — Ustensiles : une casserole avec son couvercle, un économe, une planche et un couteau, une cuillère, des ciseaux, un bol creux. Le plat en deux mots : « mu » veut dire radis blanc et « guk » soupe claire. Le daikon est un gros radis blanc, très doux une fois cuit. Le kombu est une algue brune séchée qui donne au bouillon un goût de mer rond (l'umami), puis qu'on retire.",
  "Le daikon — Éplucher le daikon ({{daikon}}) et le couper en demi-rondelles très fines de 2 mm : elles cuisent vite et deviennent translucides. [[sortir; eplucher daikon; couper daikon]]",
  "Le bouillon — Verser l'eau ({{eau}}) dans la casserole avec le kombu ({{kombu}}) et le daikon. Couvrir et chauffer à feu doux : au frémissement (l'eau bouge à peine, de toutes petites bulles montent), compter 5 minutes puis retirer le kombu à la cuillère, car bouilli il rend le bouillon amer et visqueux. Laisser le daikon cuire encore 4 minutes, couvert. Repère : les rondelles sont translucides et fondent sous la cuillère. [[casserole; cuisson 9]]",
  "Dressage — Verser dans le bol creux, ajouter 1/2 c. à café de sauce soja et 1/2 c. à café d'huile de sésame grillé, une huile brune au parfum de noisette versée à la fin et jamais chauffée, puis la ciboulette ({{ciboulette}}), une herbe fine au goût doux, ciselée aux ciseaux (pointes vertes seulement). Servir tiède. [[ciseler; dresser x2]]"],
 tip:"Un bouillon qui ne bout jamais reste limpide ; le daikon cuit dans le kombu devient sucré sans rien d'autre."}),

RC({id:"n-bc-miyeok-guk", n:"Miyeok-guk : soupe de wakame & carotte, bouillon doux", cat:"Banchan", st:"Banchan", base:"Aucun", d:1, go:"Légume",
 ing:[["wakame",6,"g"],["carotte",60,"g"],["eau",500,"ml"],["huile de sésame grillé",0.5,"c. à café"]],
 steps:[
  "Avant de commencer — Ustensiles : un bol, une casserole, une passoire, une planche et un couteau, un économe, des ciseaux de cuisine, un bol creux. Le plat en deux mots : « miyeok-guk » est la soupe d'algue que l'on mange en Corée pour les anniversaires. Le wakame est une algue verte vendue séchée, qui gonfle dans l'eau et devient souple, au goût de mer très léger. Il est déjà salé : on n'ajoute rien d'autre.",
  "Le wakame — Mettre le wakame ({{wakame}}) sec dans le bol, le couvrir de 300 ml d'eau chaude du robinet et attendre 5 minutes : il gonfle et devient souple et vert foncé. Le verser dans la passoire, le rincer à l'eau claire et le couper aux ciseaux en lanières de 3 cm. [[sortir; peser; attente 5; rincer; couper wakame]]",
  "La carotte — Pendant ce temps, éplucher la carotte ({{carotte}}) et la couper en fins bâtonnets de 3 mm. [[// eplucher carotte; couper carotte]]",
  "La soupe — Verser 200 ml d'eau dans la casserole, y mettre la carotte, couvrir et chauffer à feu doux 4 minutes, jusqu'à ce qu'elle soit tendre. Ajouter le wakame et chauffer encore 1 minute, sans bouillir. [[casserole; cuisson 5]]",
  "Dressage — Verser la soupe dans le bol creux et ajouter 1/2 c. à café d'huile de sésame grillé, versée à la fin. Servir tiède. [[dresser x2]]"],
 tip:"La soupe de wakame se sert tiède : une algue chauffée trop fort devient filante."}),

RC({id:"n-bc-danhobak-sup", n:"Danhobak-sup : velouté de potimarron au sésame", cat:"Banchan", st:"Banchan", base:"Aucun", d:1, go:"Légume",
 ing:[["potimarron",80,"g"],["bouillon",150,"ml"],["graines de sésame",0.5,"c. à café"],["huile d'olive",0.5,"c. à café"]],
 steps:[
  "Avant de commencer — Ustensiles : une casserole avec son couvercle, un économe, une planche et un couteau solide, une cuillère, un mixeur plongeant ou un presse-purée, un bol creux. Le plat en deux mots : un velouté est une soupe mixée, lisse et épaisse. Le potimarron est une petite courge orange à la chair sucrée, au goût de châtaigne. Servi en petit bol, c'est un banchan doux et chaud, sans trace de piment.",
  "Le potimarron — Ouvrir le potimarron ({{potimarron}}) en deux en le tenant bien à plat, retirer les graines et les filaments à la cuillère, éplucher chaque morceau à l'économe, puis le couper en cubes de 1 cm : plus petits, ils cuisent plus vite. [[sortir; eplucher potimarron; couper potimarron]]",
  "La cuisson — Mettre les cubes dans la casserole avec le bouillon ({{bouillon}}), couvrir et chauffer à feu doux 7 minutes. Repère : un cube s'écrase sans effort contre la paroi. [[casserole; cuisson 7]]",
  "Le velouté — Mixer directement dans la casserole, hors du feu, jusqu'à une crème lisse sans grain. Si elle est trop épaisse, ajouter une cuillère de bouillon chaud. [[mixer]]",
  "Dressage — Verser dans le bol creux, ajouter 1/2 c. à café d'huile d'olive, versée à la fin sans la chauffer, et parsemer de 1/2 c. à café de graines de sésame. Servir tiède : attendre une minute avant de manger. [[dresser x3]]"],
 tip:"Le potimarron fait lui-même la liaison : aucune crème n'est nécessaire."}),

RC({id:"n-bc-gim-ssam", n:"Gim-ssam : petits rouleaux de nori, carotte & courgette tendres", cat:"Banchan", st:"Banchan", base:"Aucun", d:1, go:"Légume",
 ing:[["nori",1,"pièce"],["carotte",50,"g"],["courgette",30,"g"],["huile de sésame grillé",0.5,"c. à café"],["graines de sésame",0.5,"c. à café"]],
 steps:[
  "Avant de commencer — Ustensiles : une casserole avec son couvercle, un économe, une planche et un couteau, une assiette, un petit bol d'eau. Le plat en deux mots : « ssam » veut dire enveloppé. Le nori est une algue séchée en feuille fine, comme celle des sushis : elle sert d'emballage à des bâtonnets de légumes tendres, et se mange en petites bouchées.",
  "Les légumes — Éplucher la carotte ({{carotte}}) et la courgette ({{courgette}}), retirer les pépins de la courgette, puis les couper en bâtonnets de 5 cm de long sur 3 mm d'épaisseur. [[sortir; eplucher carotte; eplucher courgette; couper carotte; couper courgette]]",
  "La cuisson — Mettre les bâtonnets de carotte dans la casserole avec 3 cuillères d'eau, couvrir et étuver (cuire à couvert dans très peu d'eau) à feu doux 3 minutes, puis ajouter la courgette et poursuivre 2 minutes. Les égoutter et les laisser tiédir sur l'assiette. [[casserole; cuisson 5; egoutter]]",
  "Les rouleaux — Couper la feuille de nori ({{nori}}) en deux. Poser la moitié sur la planche, répartir la moitié des légumes en une ligne le long d'un bord, arroser de 1/4 c. à café d'huile de sésame grillé, puis rouler serré. Mouiller le bord libre d'une goutte d'eau pour souder le rouleau. Faire de même avec l'autre moitié, puis couper chaque rouleau en 3 tronçons avec un couteau mouillé. Le nori ramollit au contact des légumes tièdes. [[couper nori; former x2; trancher]]",
  "Dressage — Ranger les 6 tronçons debout sur l'assiette et parsemer d'un peu de graines de sésame. Servir tiède. [[dresser x2]]"],
 tip:"Les légumes doivent être tièdes et bien égouttés : trop humides, ils font fondre le nori."}),

RC({id:"n-bc-blettes-ssam", n:"Blettes-ssam : feuilles de blettes roulées sur une purée de patate douce au miso", cat:"Banchan", st:"Banchan", base:"Aucun", d:1, go:"Légume",
 ing:[["blettes",50,"g"],["patate douce",40,"g"],["miso blanc",0.5,"c. à café"],["huile de sésame grillé",0.5,"c. à café"],["eau",60,"ml"]],
 steps:[
  "Avant de commencer — Ustensiles : une casserole avec son couvercle, un économe, une planche et un couteau, une fourchette, un petit bol, une assiette. Le plat en deux mots : « ssam » veut dire enveloppé. En Corée on enveloppe une garniture dans des feuilles ; ici ce sont des feuilles de blettes (grandes feuilles vertes à la côte blanche), cuites jusqu'à devenir souples, garnies d'une purée de patate douce. Le miso blanc est une pâte de soja fermenté, de couleur crème, au goût rond et salé.",
  "Les légumes — Éplucher la patate douce ({{patate douce}}) et la couper en cubes de 1 cm. Laver les blettes ({{blettes}}), retirer la côte blanche de chaque feuille en la découpant à la base : elle est fibreuse, mais les feuilles restent entières. [[sortir; eplucher patate douce; couper patate douce; laver blettes; couper blettes]]",
  "La cuisson — Mettre la patate douce dans la casserole avec l'eau ({{eau}}), couvrir et chauffer à feu doux 5 minutes. Poser les feuilles de blettes par-dessus, couvrir et poursuivre 2 minutes : elles s'affaissent et deviennent souples. Repère : un cube de patate douce s'écrase sans effort. [[casserole; cuisson 7]]",
  "La purée — Écraser la patate douce égouttée à la fourchette dans le petit bol avec 1/2 c. à café de miso et 1/2 c. à café d'huile de sésame grillé, jusqu'à une purée lisse. Le miso ne se chauffe jamais : bouilli, il perd son parfum. [[egoutter; ecraser]]",
  "Les rouleaux — Étaler chaque feuille sur la planche, déposer une cuillerée de purée au centre, replier les côtés et rouler en petit paquet. Préparer 2 ou 3 paquets, les poser sur l'assiette, plis dessous. Servir tiède. [[former x3; dresser x2]]"],
 tip:"Des feuilles de blettes bien égouttées se roulent sans se déchirer ; la purée de patate douce fait office de sauce."}),

RC({id:"n-bc-mu-mari", n:"Mu-mari : rouleaux de daikon tendre autour de carotte, sauce sésame", cat:"Banchan", st:"Banchan", base:"Aucun", d:1, go:"Légume",
 ing:[["daikon",70,"g"],["carotte",30,"g"],["graines de sésame",0.5,"c. à café"],["huile de sésame grillé",0.5,"c. à café"],["sauce soja",0.5,"c. à café"]],
 steps:[
  "Avant de commencer — Ustensiles : une casserole avec son couvercle, un économe, une planche et un couteau, une assiette, un petit bol, une cuillère. Le plat en deux mots : « mu » veut dire radis blanc et « mari » rouleau. Le daikon est un gros radis blanc, très doux une fois cuit : on le taille en longs rubans fins, cuits jusqu'à devenir souples, que l'on enroule autour de bâtonnets de carotte.",
  "Les légumes — Éplucher le daikon ({{daikon}}) et la carotte ({{carotte}}). Avec l'économe, lever sur le daikon de longs rubans de 2 mm d'épaisseur ; couper la carotte en bâtonnets de 5 cm de long sur 3 mm d'épaisseur. [[sortir; eplucher daikon; eplucher carotte; rubans daikon; couper carotte]]",
  "La cuisson — Mettre les bâtonnets de carotte dans la casserole avec 3 cuillères d'eau, couvrir et étuver (cuire à couvert dans très peu d'eau) à feu doux 3 minutes. Ajouter les rubans de daikon et poursuivre 2 minutes : ils deviennent translucides et souples. Égoutter. [[casserole; cuisson 5; egoutter]]",
  "La sauce — Dans le petit bol, mélanger 1/2 c. à café de sauce soja, 1/2 c. à café d'huile de sésame grillé et 1 cuillère d'eau. [[// delayer]]",
  "Les rouleaux — Poser 2 ou 3 bâtonnets de carotte au bout d'un ruban de daikon tiède et enrouler. Faire de même avec les autres rubans. Ranger les rouleaux debout sur l'assiette, verser la sauce en filet et parsemer de graines de sésame. Servir tiède. [[former x4; dresser x2]]"],
 tip:"Les rubans doivent être fins pour se plier sans casser : lever les derniers au couteau si l'économe n'y arrive plus."}),

RC({id:"n-bc-goguma-puree", n:"Goguma-jjim : patate douce à la vapeur de casserole, écrasée au sésame", cat:"Banchan", st:"Banchan", base:"Aucun", d:1, go:"Légume",
 ing:[["patate douce",70,"g"],["graines de sésame",1,"c. à café"],["huile de sésame grillé",0.5,"c. à café"],["bouillon",2,"c. à soupe"]],
 steps:[
  "Avant de commencer — Ustensiles : une casserole avec son couvercle, un économe, une planche et un couteau, une fourchette, un mortier ou un bol avec le dos d'une cuillère, un petit bol. Le plat en deux mots : « goguma » veut dire patate douce et « jjim » cuit à la vapeur. La patate douce cuite devient une purée sucrée, qu'on parfume de sésame écrasé : c'est un banchan doux et rond, parfumé au seul sésame.",
  "La patate douce — Éplucher la patate douce ({{patate douce}}) et la couper en cubes de 1,5 cm. Les mettre dans la casserole avec 3 cuillères d'eau, couvrir et chauffer à feu doux 8 minutes. Repère : un cube s'écrase sans effort contre la paroi. [[sortir; eplucher patate douce; couper patate douce; casserole; cuisson 8]]",
  "Le sésame — Pendant la cuisson, écraser les graines de sésame ({{graines de sésame}}) au mortier jusqu'à une poudre grossière qui sent la noisette. [[// ecraser]]",
  "La purée — Égoutter la patate douce, la remettre dans le petit bol et l'écraser à la fourchette avec 2 cuillères à soupe de bouillon tiède ({{bouillon}}) jusqu'à une purée souple. Ajouter le sésame écrasé et 1/2 c. à café d'huile de sésame grillé, mélanger doucement. Servir tiède. [[egoutter; ecraser; dresser x2]]"],
 tip:"La patate douce est sucrée : le bouillon l'allonge sans la fadir, et le sésame écrasé lui donne son parfum."}),

/* ---------- version 16 : protéines autres que tofu, œuf, poulet et sardine (cabillaud, dinde, tofu fumé) ---------- */
RC({id:"n-bc-daegu-jjim", n:"Daegu-jjim : cabillaud à la vapeur sur un lit de daikon, sauce sésame", cat:"Banchan", st:"Banchan", base:"Aucun", d:1, go:"Protéine",
 ing:[["cabillaud",90,"g"],["daikon",30,"g"],["eau",100,"ml"],["sauce soja",0.5,"c. à café"],["huile de sésame grillé",0.5,"c. à café"],["ciboulette","",HERBS]],
 steps:[
  "Avant de commencer — Ustensiles : une casserole avec son couvercle, une planche et un couteau, un économe, un petit bol, une cuillère, des ciseaux. Le plat en deux mots : « daegu » veut dire morue (ici du cabillaud) et « jjim » cuit à la vapeur. Le cabillaud est un poisson blanc très maigre, à la chair tendre qui se défait en gros flocons. Il cuit dans la vapeur de la casserole fermée, sur un lit de daikon (un gros radis blanc, très doux une fois cuit), sans jamais toucher l'eau. Frais ou surgelé, il doit être sans peau ni arête.",
  "La préparation — Éplucher le daikon ({{daikon}}) et le couper en bâtonnets de 3 mm. Contrôler le cabillaud ({{cabillaud}}) du bout des doigts pour retirer les arêtes qui resteraient, puis le couper en morceaux de 3 cm. Si le poisson est surgelé, le décongeler d'abord une nuit au réfrigérateur. [[sortir; eplucher daikon; couper daikon; couper cabillaud]]",
  "La vapeur — Mettre le daikon dans la casserole avec l'eau ({{eau}}), poser le cabillaud par-dessus sur une seule couche, couvrir et chauffer à feu doux 6 minutes sans soulever le couvercle. Repère : la chair est devenue blanche et opaque, et se détache en flocons à la fourchette. [[casserole; cuisson 6]]",
  "La sauce — Pendant ce temps, mélanger dans le petit bol 1/2 c. à café de sauce soja, 1/2 c. à café d'huile de sésame grillé et 1 cuillère d'eau. [[// delayer]]",
  "Dressage — Égoutter le daikon et le cabillaud, les ranger dans un petit bol, napper de la sauce et parsemer la ciboulette ({{ciboulette}}), une herbe fine au goût doux, ciselée aux ciseaux (pointes vertes seulement). Servir tiède. [[egoutter; ciseler; dresser x3]]"],
 tip:"Un cabillaud cuit à la vapeur douce reste nacré et tendre ; plus de 8 minutes, il devient sec."}),

RC({id:"n-bc-daegu-guk", n:"Daegu-guk : petite soupe de cabillaud & daikon, bouillon de kombu", cat:"Banchan", st:"Banchan", base:"Aucun", d:1, go:"Protéine",
 ing:[["cabillaud",90,"g"],["daikon",30,"g"],["kombu",2,"g"],["eau",200,"ml"],["sauce soja",0.5,"c. à café"],["ciboulette","",HERBS]],
 steps:[
  "Avant de commencer — Ustensiles : une casserole avec son couvercle, une planche et un couteau, un économe, une cuillère, des ciseaux, un bol creux. Le plat en deux mots : « guk » est une soupe claire coréenne. Le cabillaud est un poisson blanc très maigre, à la chair tendre. Le kombu est une algue brune séchée qui donne au bouillon un goût de mer rond (l'umami), puis qu'on retire. Le poisson doit être sans peau ni arête.",
  "La préparation — Éplucher le daikon ({{daikon}}), un gros radis blanc, et le couper en demi-rondelles de 2 mm. Contrôler le cabillaud ({{cabillaud}}) du bout des doigts pour retirer les arêtes qui resteraient, puis le couper en morceaux de 3 cm. [[sortir; eplucher daikon; couper daikon; couper cabillaud]]",
  "Le bouillon — Verser l'eau ({{eau}}) dans la casserole avec le kombu ({{kombu}}) et le daikon. Couvrir et chauffer à feu doux : au frémissement (de toutes petites bulles), compter 4 minutes puis retirer le kombu, qui rendrait le bouillon amer. Poursuivre 2 minutes, couvert, pour attendrir le daikon. [[casserole; cuisson 6]]",
  "Le poisson — Ajouter le cabillaud et la sauce soja (1/2 c. à café), couvrir et laisser frémir 3 minutes sans remuer : le poisson devient blanc et opaque, et se défait en gros flocons. [[cuisson 3]]",
  "Dressage — Verser délicatement dans le bol creux avec le bouillon et parsemer la ciboulette ({{ciboulette}}) ciselée aux ciseaux, pointes vertes seulement. Servir tiède. [[ciseler; dresser x2]]"],
 tip:"Le poisson cuit dans le bouillon sans bouillir : à gros bouillons il se défait et le bouillon se trouble."}),

RC({id:"n-bc-chilmyeonjo-wanja", n:"Chilmyeonjo-wanja : petites boulettes de dinde à la vapeur, sauce douce", cat:"Banchan", st:"Banchan", base:"Aucun", d:1, go:"Protéine",
 ing:[["blanc de dinde",80,"g"],["tofu soyeux",20,"g"],["daikon",30,"g"],["eau",100,"ml"],["sauce soja",0.5,"c. à café"],["sirop d'érable",0.5,"c. à café"],["huile de sésame grillé",0.5,"c. à café"]],
 steps:[
  "Avant de commencer — Ustensiles : une casserole avec son couvercle, une planche réservée à la volaille et un couteau, un économe, un petit bol, une fourchette, une cuillère. Le plat en deux mots : « chilmyeonjo » veut dire dinde et « wanja » boulettes. Le blanc de dinde est une viande blanche très maigre, qui se dessèche vite : on le hache fin et on le lie avec un peu de tofu soyeux (un tofu très tendre, vendu dans son eau) pour qu'il reste moelleux. Les boulettes cuisent dans la vapeur de la casserole fermée, sur un lit de daikon (un gros radis blanc, très doux une fois cuit).",
  "Les boulettes — Retirer gras et nerfs du blanc de dinde ({{blanc de dinde}}), l'émincer en lamelles très fines, puis le hacher au couteau en petits morceaux, comme de la viande hachée. Dans le petit bol, le malaxer du bout des doigts avec le tofu soyeux ({{tofu soyeux}}) égoutté, jusqu'à une pâte souple. Mouiller les mains et former 4 petites boulettes de la taille d'une noix. [[sortir; emincer blanc de dinde; egoutter; former x4]]",
  "Le daikon — Éplucher le daikon ({{daikon}}) et le couper en bâtonnets de 3 mm. [[eplucher daikon; couper daikon]]",
  "La vapeur — Mettre le daikon dans la casserole avec l'eau ({{eau}}), poser les boulettes par-dessus sans qu'elles se touchent, couvrir et chauffer à feu doux 7 minutes sans soulever le couvercle. Contrôle : une boulette coupée en deux est blanche à cœur, sans trace rosée. [[casserole; cuisson 7]]",
  "Dressage — Réunir dans le petit bol 1/2 c. à café de sauce soja, 1/2 c. à café de sirop d'érable et 1 cuillère d'eau. Égoutter le daikon et les boulettes, les ranger dans un petit bol, verser la sauce par-dessus et ajouter 1/2 c. à café d'huile de sésame grillé. Servir tiède. [[egoutter; dresser x3]]"],
 tip:"Le tofu soyeux garde la dinde moelleuse ; la vapeur douce évite qu'elle se dessèche."}),

RC({id:"n-bc-hunje-dubu-jorim", n:"Hunje-dubu-jorim : tofu fumé braisé, carotte tendre", cat:"Banchan", st:"Banchan", base:"Aucun", d:1, go:"Protéine",
 ing:[["tofu fumé",90,"g"],["carotte",30,"g"],["sauce soja",0.5,"c. à café"],["sirop d'érable",0.5,"c. à café"],["huile de sésame grillé",0.5,"c. à café"],["eau",60,"ml"]],
 steps:[
  "Avant de commencer — Ustensiles : une casserole avec son couvercle, une planche et un couteau, un économe, du papier absorbant, un petit bol, une cuillère. Le plat en deux mots : « hunje » veut dire fumé, « dubu » tofu et « jorim » braisé, c'est-à-dire cuit doucement, à couvert, dans un peu de liquide. Le tofu fumé est un bloc de tofu déjà parfumé à la fumée : il est toléré en petite quantité, à ne pas servir plus d'une fois par semaine.",
  "La préparation — Éplucher la carotte ({{carotte}}) et la couper en fines demi-rondelles de 3 mm. Éponger le tofu fumé ({{tofu fumé}}) dans du papier absorbant et le couper en tranches de 1 cm d'épaisseur. [[sortir; eplucher carotte; couper carotte; presser tofu; couper tofu]]",
  "La braise — Dans le petit bol, mélanger 60 ml d'eau, 1/2 c. à café de sauce soja et 1/2 c. à café de sirop d'érable. Verser dans la casserole, y mettre la carotte, couvrir et laisser frémir (l'eau bouge à peine) 4 minutes à feu doux. Ajouter les tranches de tofu, couvrir et poursuivre 4 minutes en les retournant une fois. Repère : la sauce a réduit et nappe le dos de la cuillère. [[delayer; casserole; cuisson 8]]",
  "Dressage — Ranger dans un petit bol, verser le reste de sauce et finir de 1/2 c. à café d'huile de sésame grillé, une huile brune versée à la fin et jamais chauffée. Servir tiède. [[dresser x3]]"],
 tip:"Le tofu fumé a déjà beaucoup de goût : une sauce très légère suffit, et la carotte en adoucit la fumée."})

];

/* composer un repas coréen complet : riz + 1 banchan à protéine + 2 banchan de légumes (utilisé par l'application) */
const KR_RICE = 140;
/* rayon d'un repas coréen d'après la protéine du banchan */
function krCat(p){ const has = k => p.ing.some(i => norm(i.n) === k);
  return has("oeuf") ? "Œufs" : has("poulet") || has("blanc de poulet") ? "Poulet" : has("blanc de dinde") ? "Dinde" : has("cabillaud") ? "Poisson" : has("sardine") ? "Sardines" : "Tofu"; }
function krShort(n){ return String(n).split(":")[0].trim(); }
function composeKorean(p, vs){
  const parts = [p].concat(vs), ing = [{ n: "riz cuit", q: KR_RICE, u: "g" }], steps = [], intros = [];
  parts.forEach(r => {
    r.ing.forEach(i => { const k = norm(i.n), e = ing.find(x => norm(x.n) === k);
      if (e && !isNaN(parseFloat(e.q)) && !isNaN(parseFloat(i.q)) && e.u === i.u) e.q = Math.round((parseFloat(e.q) + parseFloat(i.q)) * 100) / 100; else if (!e) ing.push({ n: i.n, q: i.q, u: i.u }); });
  });
  const intro = parts.map(r => { const s = r.steps[0] || ""; return krShort(r.n) + " : " + s.replace(/^Avant de commencer — Ustensiles : /, ""); }).join(" ");
  steps.push("Avant de commencer — Ustensiles : le riz est celui cuit la veille au Bamboo, réchauffé à la fin. Trois petites casseroles : les cuissons se chevauchent, on lance d'abord le banchan qui cuit le plus longtemps. " + intro);
  parts.forEach(r => r.steps.slice(1).forEach(s => { const m = s.match(/^([^—]+) — (.*)$/); steps.push(m ? krShort(r.n) + " · " + m[1].trim() + " — " + m[2] : s); }));
  steps.push("Le riz — Réchauffer le riz cuit ({{riz cuit}}) 3 minutes avec une cuillère d'eau dans une casserole couverte à feu doux : il est tiède et moelleux. [[casserole; cuisson 3]]");
  steps.push("Le repas coréen — Servir le riz au centre d'une grande assiette creuse, et disposer les trois banchan autour en petits tas, comme sur un plateau coréen. Manger un peu de riz avec chaque banchan. [[dresser x4]]");
  /* les cuissons se chevauchent (trois casseroles) : préparations additionnées, plus la cuisson la plus longue, plus riz et dressage */
  const t = parts.reduce((s, r) => s + ((r.t || 0) - (r.tc || 0)), 0) + Math.max(...parts.map(r => r.tc || 0)) + 5;
  return { id: uid(), name: "Repas coréen · " + parts.map(r => krShort(r.n)).join(", "),
    recipeId: null, cat: krCat(p), st: "Fraîcheur tiède", base: "Riz", t, d: 1, ing: ing.map(i => ({ id: uid(), ...i })), steps,
    tip: "Un repas coréen se mange par petites bouchées : un peu de riz, un peu de chaque banchan. Les banchan se préparent à l'avance et se servent tièdes.", kr: true };
}
