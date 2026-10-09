/* ============ BASE INGRÉDIENTS : rayon + kcal indicatives + niveau du protocole ============
   g = kcal / 100 g (ou 100 ml, PRODUIT CUIT sauf mention), p = kcal par pièce/tranche, c = kcal par c. à café
   n = niveau : 1 base sûre · 2 sous conditions · 3 exclu · "t" toléré en petite quantité · "r" non listé (à réintroduire) · "p2"/"p3" paliers de réintroduction
   s = mois de pleine saison · w = avertissement (seuil) */
const FOD = "FODMAP : petite portion, bien cuit";
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
].map(([k,a,v]) => ({ k: norm(k), a, ...v })).sort((x,y) => y.k.length - x.k.length);

const AISLE_ORDER = ["Légumes","Herbes & aromates","Fruits","Volaille","Poisson","Œufs","Tofu & protéines végétales","Produits laitiers & végétaux","Féculents","Épicerie","Divers"];
