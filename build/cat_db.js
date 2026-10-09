/* ============ BASE INGRÉDIENTS : rayon + kcal indicatives + niveau du protocole ============
   g = kcal / 100 g (ou 100 ml, PRODUIT CUIT sauf mention), p = kcal par pièce/tranche, c = kcal par c. à café
   n = niveau : 1 base sûre · 2 sous conditions · 3 exclu · "t" toléré en petite quantité · "r" non listé (à réintroduire) · "p2"/"p3" paliers de réintroduction
   s = mois de pleine saison · w = avertissement (seuil) */
const FOD = "FODMAP : petite portion, bien cuit";
/* ============ PROTÉINES RÉELLES (g de protéines pour 100 g ou 100 ml, MÊME ÉTAT que la colonne g : cuit, sauf produits secs)
   Sources : table Ciqual (Anses) via informationsnutritionnelles.fr (tofu 11,5 g), Open Food Facts / fiches fabricants
   (soja texturé sec 51 g, jambon végétal La Vie 19 g : étiquette britannique, 110 kcal), USDA FoodData Central et Ciqual pour le reste.
   Valeurs arrondies, à 0,5 g près ; "est." = estimation d'après un aliment voisin.
   pr = g / 100 g · pp = g de protéines par pièce (œuf 50 g, tranche de pain de sarrasin 30 g, feuille de nori 3 g, banane 100 g)
   pc = g de protéines par cuillère à café (sinon pr x 5 / 100) ============ */
const PROT_DB = {
  "blanc de poulet":{pr:27},"poulet":{pr:25},"cuisse de poulet":{pr:24},"oeuf":{pr:12.5,pp:6.3},
  "tofu fermente":{pr:10},"tofu ferme":{pr:12},"tofu":{pr:11.5},"tofu fume":{pr:16},"tofu soyeux":{pr:5},
  "proteine de pois texturee":{pr:55},"proteine de soja texturee":{pr:51},"pst":{pr:50},"proteines vegetales":{pr:50},
  "cabillaud":{pr:19},"blanc de dinde":{pr:25},"jambon vegetal":{pr:19},"okara d'amande":{pr:6},"okara":{pr:4.5},"sardine":{pr:24},"avocat":{pr:2},
  "riz cru":{pr:7},"riz":{pr:2.7},"quinoa":{pr:4.4},"millet":{pr:3.5},"pommes de terre":{pr:2},"pomme de terre":{pr:2},
  "farine de sarrasin":{pr:12},"pain de sarrasin":{pr:7,pp:2.1},"flocons de sarrasin":{pr:12},"farine de riz":{pr:6},"fecule de mais":{pr:0.3},
  "flocons d'avoine":{pr:13},"avoine":{pr:13},"pates":{pr:5.5},"lasagne":{pr:12},
  "carotte":{pr:0.8},"courgette":{pr:1.1},"potimarron":{pr:1.1},"butternut":{pr:1},"patisson":{pr:1},"epinards":{pr:3},"haricots verts":{pr:1.9},
  "aubergine":{pr:0.8},"pak choi":{pr:1.5},"blettes":{pr:1.9},"daikon":{pr:0.7},"courge spaghetti":{pr:0.6},"brocoli":{pr:2.4},"panais":{pr:1.3},
  "navet":{pr:0.7},"celeri-rave":{pr:1.5},"celeri":{pr:0.8},"patate douce":{pr:1.6},"betterave":{pr:1.7},"fenouil":{pr:1},"chou-fleur":{pr:1.8},
  "poireau":{pr:0.8},"poivron":{pr:1},"petits pois":{pr:5},
  "banane":{pr:1.1,pp:1.1},"myrtilles":{pr:0.7},"peche":{pr:0.9},"nectarine":{pr:1.1},"graines de chia":{pr:17},
  "basilic":{pr:0},"menthe":{pr:0},"aneth":{pr:0},"cerfeuil":{pr:0},"estragon":{pr:0},"coriandre":{pr:0},"sauge":{pr:0},
  "persil":{pr:0},"ciboulette":{pr:0},"thym":{pr:0},"romarin":{pr:0},
  "miso blanc":{pr:10,pc:1},"sauce soja":{pr:7,pc:0.4},"nori":{pr:40,pp:1.2},"kombu":{pr:1.7},"wakame":{pr:3},"graines de sesame":{pr:18,pc:0.5},
  "soba":{pr:5},"vermicelles de patate douce":{pr:0.2},
  "skyr":{pr:11},"lait de riz":{pr:0.3},"lait d'avoine":{pr:1},"creme de soja":{pr:2.8,pc:0.15},"yaourt de soja":{pr:4},"skyr de soja":{pr:6},
  "lait de soja":{pr:3.3},"lait d'amande":{pr:0.5},
  "huile de sesame":{pr:0,pc:0},"huile d'olive":{pr:0,pc:0},"huile":{pr:0,pc:0},"sirop d'erable":{pr:0,pc:0},"bouillon":{pr:0.3},
  "puree d'amande":{pr:21,pc:1},"graines de courge":{pr:30},"vanille":{pr:0,pc:0},"sel":{pr:0,pc:0},"eau":{pr:0}
};
const ING_DB = [
  /* protéines */
  ["blanc de poulet","Volaille",{g:110,n:1}],["poulet","Volaille",{g:115,n:1}],["cuisse de poulet","Volaille",{g:150,n:"t",w:"haut de cuisse désossé, sans peau ni gras"}],
  ["oeuf","Œufs",{p:75,g:145,n:1}],
  ["tofu fermente","Tofu & protéines végétales",{g:130,n:"r"}],["tofu ferme","Tofu & protéines végétales",{g:125,n:1}],["tofu","Tofu & protéines végétales",{g:120,n:1}],
  ["tofu fume","Tofu & protéines végétales",{g:150,n:"t",w:"fumé : en petite quantité, pas plus d'une fois par semaine"}],
  /* protéines texturées : poids SEC, réhydratées environ 3 fois leur poids ; quelques plats seulement */
  ["proteine de pois texturee","Tofu & protéines végétales",{g:348,n:1,w:"30 g secs par repas, réhydratés 10 minutes"}],
  ["proteine de soja texturee","Tofu & protéines végétales",{g:340,n:"t",w:"30 g secs par repas, en petite quantité"}],
  ["pst","Tofu & protéines végétales",{g:330,n:"r"}],["proteines vegetales","Tofu & protéines végétales",{g:330,n:"r"}],
  ["cabillaud","Poisson",{g:85,n:1,w:"poisson blanc maigre, sans peau ni arête, cuit à la vapeur douce"}],["blanc de dinde","Volaille",{g:110,n:1,w:"blanc sans peau, cuit à cœur, sans trace rosée"}],
  ["jambon vegetal","Tofu & protéines végétales",{g:110,n:"t",w:"jambon végétal La Vie (protéines de pois et de soja réhydratées) : 2 fines tranches au plus par repas (25 g), déjà salé, sans sel en plus ; relire l'étiquette (aucun ail ni oignon)"}],
  ["okara d'amande","Tofu & protéines végétales",{g:110,n:1}],["okara","Tofu & protéines végétales",{g:90,n:1}],
  ["sardine","Poisson",{g:190,n:2,w:"occasionnelle, de préférence le midi, hors phase sensible (histamine)"}],
  ["avocat","Fruits",{g:160,n:2,w:"1/8 d'avocat maximum par repas (20 à 30 g)"}],
  /* féculents (cuits) */
  ["riz cru","Féculents",{g:350,n:1}],["riz","Féculents",{g:130,n:1}],["quinoa","Féculents",{g:120,n:1}],["millet","Féculents",{g:120,n:1}],
  ["pommes de terre","Féculents",{g:82,n:1}],["pomme de terre","Féculents",{g:82,n:1}],
  ["farine de sarrasin","Féculents",{g:340,n:1}],["pain de sarrasin","Féculents",{p:70,g:230,n:1}],["flocons de sarrasin","Féculents",{g:340,n:1}],
  ["farine de riz","Féculents",{g:355,n:1,w:"sans gluten"}],["fecule de mais","Féculents",{g:355,n:1,w:"sans gluten"}],["flocons d'avoine","Féculents",{g:370,n:1}],["avoine","Féculents",{g:370,n:1}],
  ["pates","Féculents",{g:150,n:"r"}],["lasagne","Féculents",{g:350,n:"r"}],
  /* légumes : tous cuits, pelés, épépinés */
  ["carotte","Légumes",{g:35,n:1,s:[1,2,3,4,5,6,7,8,9,10,11,12]}],
  ["courgette","Légumes",{g:17,n:1,s:[6,7,8,9,10],w:"60 g maximum épluchée (seuil low-FODMAP)"}],
  ["potimarron","Légumes",{g:35,n:1,s:[9,10,11,12,1]}],["butternut","Légumes",{g:40,n:1,s:[9,10,11,12,1]}],
  ["patisson","Légumes",{g:18,n:1,s:[8,9,10,11]}],
  ["epinards","Légumes",{g:23,n:1,s:[3,4,5,6,9,10,11]}],
  ["haricots verts","Légumes",{g:30,n:1,s:[6,7,8,9,10],w:"75 g maximum cuits (seuil low-FODMAP)"}],
  ["aubergine","Légumes",{g:25,n:1,s:[7,8,9,10],w:"toujours pelée et très bien cuite"}],
  ["pak choi","Légumes",{g:13,n:1,s:[5,6,7,8,9,10,11],w:"75 g maximum, bien cuit"}],["blettes","Légumes",{g:20,n:1,s:[5,6,7,8,9,10,11],w:"côtes épluchées, 75 g maximum"}],
  ["daikon","Légumes",{g:18,n:1,s:[10,11,12,1,2],w:"toujours cuit : cru il est piquant"}],["courge spaghetti","Légumes",{g:31,n:1,s:[9,10,11,12,1],w:"75 g maximum bien cuite"}],
  ["brocoli","Légumes",{g:35,n:1,s:[9,10,11,12,1,2,3],w:"têtes seulement, bien cuites"}],
  ["panais","Légumes",{g:75,n:1,s:[10,11,12,1,2,3]}],["navet","Légumes",{g:28,n:1,s:[10,11,12,1,2,3]}],
  ["celeri-rave","Légumes",{g:40,n:1,s:[10,11,12,1,2,3],w:FOD}],["celeri","Légumes",{g:20,n:1,s:[10,11,12,1,2,3],w:FOD}],
  ["patate douce","Légumes",{g:86,n:1,s:[10,11,12,1,2,3],w:FOD}],
  ["betterave","Légumes",{g:45,n:1,s:[9,10,11,12,1,2,3],w:FOD}],
  ["fenouil","Légumes",{g:30,n:1,s:[5,6,10,11,12,1,2,3],w:FOD}],
  ["chou-fleur","Légumes",{g:25,n:1,s:[9,10,11,12,1,2,3,4],w:FOD}],
  ["poireau","Légumes",{g:30,n:1,s:[9,10,11,12,1,2,3,4],w:"vert seulement, " + FOD}],
  ["poivron","Légumes",{g:30,n:1,s:[7,8,9,10],w:"pelé et épépiné, très bien cuit"}],
  ["petits pois","Légumes",{g:80,n:1,s:[5,6,7],w:FOD}],
  /* fruits : paliers de réintroduction */
  ["banane","Fruits",{p:90,g:90,n:"t",w:"fruit doux : banane bien mûre, 60 g environ par repas"}],["myrtilles","Fruits",{g:57,n:"t",w:"fruit doux : cuites doucement, 60 g environ"}],["peche","Fruits",{g:40,n:"p2"}],["nectarine","Fruits",{g:44,n:"p2"}],
  ["graines de chia","Épicerie",{g:480,n:"p3"}],
  /* herbes, laits, huiles */
  ["basilic","Herbes & aromates",{g:0,n:"t"}],["menthe","Herbes & aromates",{g:0,n:"t"}],["aneth","Herbes & aromates",{g:0,n:"t"}],["cerfeuil","Herbes & aromates",{g:0,n:"t"}],
  ["estragon","Herbes & aromates",{g:0,n:"t"}],["coriandre","Herbes & aromates",{g:0,n:"t"}],["sauge","Herbes & aromates",{g:0,n:"t"}],
  /* produits japonais et coréens doux (sans piment, sans ail, sans oignon) */
  ["miso blanc","Épicerie",{c:20,n:"t",w:"fermenté : petite quantité (1 c. à café), à éviter en phase de sensibilité aiguë"}],
  ["sauce soja","Épicerie",{c:3,n:"t",w:"fermentée et salée : 1 c. à café, à éviter en phase de sensibilité aiguë"}],
  ["nori","Épicerie",{p:2,n:"t"}],["kombu","Épicerie",{g:5,n:"t",w:"algue : infusée à feu doux dans le bouillon puis retirée, petite quantité"}],["wakame","Épicerie",{g:45,n:"t"}],["graines de sesame","Épicerie",{c:17,n:"t"}],
  ["soba","Féculents",{g:100,n:1,w:"100 % sarrasin uniquement"}],["vermicelles de patate douce","Féculents",{g:110,n:"t"}],
  ["tofu soyeux","Tofu & protéines végétales",{g:55,n:1}],
  ["persil","Herbes & aromates",{g:0,n:"t"}],["ciboulette","Herbes & aromates",{g:0,n:"t",w:"pointes vertes uniquement"}],["thym","Herbes & aromates",{g:0,n:"t"}],["romarin","Herbes & aromates",{g:0,n:"t"}],
  ["skyr","Produits laitiers & végétaux",{g:60,n:"r"}],["lait de riz","Produits laitiers & végétaux",{g:50,n:"t"}],["lait d'avoine","Produits laitiers & végétaux",{g:45,n:"t"}],
  ["creme de soja","Produits laitiers & végétaux",{g:150,c:7,n:"t"}],["yaourt de soja","Produits laitiers & végétaux",{g:45,n:"t"}],["skyr de soja","Produits laitiers & végétaux",{g:65,n:"t"}],["lait de soja","Produits laitiers & végétaux",{g:40,n:"t"}],["lait d'amande","Produits laitiers & végétaux",{g:25,n:"t",w:"boisson d'amande nature, sans sucre : petite portion (une tasse au plus)"}],
  ["huile de sesame","Épicerie",{c:40,n:1}],["huile d'olive","Épicerie",{c:40,n:1}],["huile","Épicerie",{c:40,n:1}],
  ["sirop d'erable","Épicerie",{c:17,n:"t"}],["bouillon","Divers",{g:5,n:1}],
  ["puree d'amande","Épicerie",{c:28,n:"r"}],["graines de courge","Épicerie",{g:560,n:"r"}],
  ["vanille","Épicerie",{c:0,n:"t"}],["sel","Épicerie",{c:0,n:"t"}],["eau","Divers",{g:0,n:1}]
].map(([k,a,v]) => ({ k: norm(k), a, ...v, ...(PROT_DB[k] || {}) })).sort((x,y) => y.k.length - x.k.length);

const AISLE_ORDER = ["Légumes","Herbes & aromates","Fruits","Volaille","Poisson","Œufs","Tofu & protéines végétales","Produits laitiers & végétaux","Féculents","Épicerie","Divers"];
