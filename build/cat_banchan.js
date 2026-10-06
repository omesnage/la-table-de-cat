/* ============ BANCHAN : petits plats coréens servis avec du riz ============
   Un banchan est un petit accompagnement. Ici ils sont traités à part (rubrique « Banchan » du Carnet) :
   5 banchan à protéine (tofu ou œuf, 80 à 100 g de protéine) et 10 banchan de légumes (60 à 90 g de légumes cuits).
   Un REPAS CORÉEN complet = riz cuit 140 g + 1 banchan à protéine + 2 banchan de légumes (voir composeKorean).
   Version douce du protocole : ni ail, ni piment, ni oignon, ni vinaigre, ni graines crues ; sauce soja et miso en toute petite quantité
   (les banchan avec sauce soja disparaissent en phase de sensibilité aiguë) ; légumes toujours cuits, tièdes ; huile de sésame grillé ajoutée à la fin.
   Dans les étapes, les assaisonnements sont écrits en toutes lettres (pas de {{ }}) : deux banchan réunis dans un même repas ne partagent aucune quantité.
   go = "Protéine" ou "Légume" ; cat et st = "Banchan". */
const KR_STEP_MAX = 15;   /* minutes par banchan, étapes comprises */
const BANCHAN = [
/* ---------- à protéine ---------- */
RC({id:"n-bc-dubu-jorim", n:"Dubu-jorim doux : tofu braisé à la sauce soja sucrée", cat:"Banchan", st:"Banchan", base:"Aucun", d:1, go:"Protéine",
 ing:[["tofu ferme",90,"g"],["sauce soja",0.5,"c. à café"],["sirop d'érable",0.5,"c. à café"],["huile de sésame grillé",0.5,"c. à café"],["ciboulette",1,"quelques brins"]],
 steps:[
  "Avant de commencer — Ustensiles : une petite casserole avec son couvercle, une planche et un couteau, du papier absorbant pour éponger le tofu, une cuillère.",
  "Le tofu — Éponger le bloc de tofu ferme ({{tofu ferme}}) dans du papier absorbant, puis le couper en tranches de 1 cm d'épaisseur. [[sortir; presser tofu ferme; couper tofu ferme]]",
  "La braise — Dans la casserole, mélanger 60 ml d'eau, 1/2 c. à café de sauce soja, 1/2 c. à café de sirop d'érable. Y ranger les tranches de tofu, couvrir et laisser frémir à feu très doux 6 minutes, en arrosant une fois : le tofu boit la sauce et devient brun clair, sans jamais colorer à la poêle. [[delayer; casserole; cuisson 6]]",
  "Dressage — Disposer les tranches dans un petit bol, verser le reste de sauce, 1/2 c. à café d'huile de sésame grillé et la ciboulette ({{ciboulette}}) ciselée, pointes vertes seulement. [[ciseler; dresser x3]]"],
 tip:"Une cuisson très douce et couverte suffit : la sauce réduit d'elle-même et le tofu garde un cœur tendre."}),

RC({id:"n-bc-dubu-muchim", n:"Dubu-muchim : tofu écrasé à l'huile de sésame & carotte tendre", cat:"Banchan", st:"Banchan", base:"Aucun", d:1, go:"Protéine",
 ing:[["tofu ferme",90,"g"],["carotte",30,"g"],["huile de sésame grillé",0.5,"c. à café"],["sel",1,"pincée"],["ciboulette",1,"quelques brins"]],
 steps:[
  "Avant de commencer — Ustensiles : une petite casserole avec son couvercle, une râpe, un bol, une fourchette.",
  "La carotte — Éplucher la carotte ({{carotte}}), la râper finement, puis la cuire 3 minutes dans la casserole couverte avec 2 cuillères d'eau, à feu doux : elle est tendre et ne craque plus. [[eplucher carotte; raper carotte; casserole; cuisson 3]]",
  "Le tofu — Dans le bol, écraser le tofu ferme ({{tofu ferme}}) grossièrement à la fourchette, mêler la carotte tiède, 1/2 c. à café d'huile de sésame grillé et une pincée de sel. [[sortir; ecraser tofu ferme; delayer]]",
  "Dressage — Servir tiède, parsemé de la ciboulette ({{ciboulette}}) ciselée, pointes vertes seulement. [[ciseler; dresser x2]]"],
 tip:"Le tofu écrasé à la fourchette garde du relief : le passer au mixeur lui ôterait tout son charme."}),

RC({id:"n-bc-sundubu-doux", n:"Sundubu doux : tofu soyeux fondant au bouillon de kombu", cat:"Banchan", st:"Banchan", base:"Aucun", d:1, go:"Protéine",
 ing:[["tofu soyeux",100,"g"],["bouillon",150,"ml"],["kombu",3,"g"],["sauce soja",0.5,"c. à café"],["huile de sésame grillé",0.5,"c. à café"]],
 steps:[
  "Avant de commencer — Ustensiles : une petite casserole, une cuillère, un petit bol creux. Le kombu infuse puis se retire : il ne reste jamais dans la soupe.",
  "Le bouillon — Chauffer le bouillon ({{bouillon}}) avec le kombu ({{kombu}}) à feu très doux 5 minutes, sans bouillir, puis retirer le kombu. [[sortir; casserole; cuisson 5]]",
  "Le tofu — Ajouter le tofu soyeux ({{tofu soyeux}}) en gros morceaux à la cuillère et 1/2 c. à café de sauce soja, laisser tiédir 2 minutes sans remuer : le tofu se réchauffe sans se défaire. [[// verser; cuisson 2]]",
  "Dressage — Verser dans le bol creux avec le bouillon et finir de 1/2 c. à café d'huile de sésame grillé. [[dresser x2]]"],
 tip:"Un bouillon qui ne bout jamais reste limpide et doux ; le kombu lui donne sa profondeur sans aucun piment."}),

RC({id:"n-bc-gyeran-jjim", n:"Gyeran-jjim : œuf soufflé à la coréenne au bouillon", cat:"Banchan", st:"Banchan", base:"Aucun", d:1, go:"Protéine",
 ing:[["oeuf",2,"pièce"],["bouillon",100,"ml"],["huile de sésame grillé",0.5,"c. à café"],["ciboulette",1,"quelques brins"],["sel",1,"pincée"]],
 steps:[
  "Avant de commencer — Ustensiles : une petite casserole épaisse avec son couvercle, un bol, une fourchette, une cuillère. Un seul œuf préparé de cette façon par plat.",
  "Le mélange — Casser les œufs ({{oeuf}}) dans le bol et les battre à la fourchette avec le bouillon ({{bouillon}}) et le sel jusqu'à un mélange homogène, sans mousse. [[sortir; ecaler x2; battre]]",
  "La cuisson — Verser dans la casserole, couvrir et cuire à feu très doux 8 minutes, en remuant doucement une fois après 3 minutes avec la cuillère : l'œuf gonfle, devient soufflé et tremblotant, jaune pâle. [[casserole; cuisson 8]]",
  "Dressage — Servir dans la casserole ou dans un bol, un filet d'huile de sésame grillé ({{huile de sésame grillé}}) et la ciboulette ({{ciboulette}}) ciselée, pointes vertes seulement. [[ciseler; dresser x2]]"],
 tip:"Le secret du gonflé : un feu minuscule et un couvercle. Plus le feu est fort, plus l'œuf se rétracte."}),

RC({id:"n-bc-gyeran-mari", n:"Gyeran-mari : omelette roulée coréenne à la carotte", cat:"Banchan", st:"Banchan", base:"Aucun", d:1, go:"Protéine",
 ing:[["oeuf",2,"pièce"],["carotte",25,"g"],["huile de sésame grillé",0.5,"c. à café"],["sel",1,"pincée"]],
 steps:[
  "Avant de commencer — Ustensiles : une petite poêle antiadhésive, une spatule fine, une râpe, un bol, une planche et un couteau. Une seule préparation d'œuf par plat.",
  "La carotte — Éplucher la carotte ({{carotte}}) et la râper très finement. [[eplucher carotte; raper carotte]]",
  "Les œufs — Battre les œufs ({{oeuf}}) avec le sel et la carotte dans le bol. [[sortir; ecaler x2; battre]]",
  "L'omelette — Chauffer la poêle à feu très doux, sans matière grasse. Verser un tiers du mélange, laisser prendre sans colorer 1 minute, rouler sur elle-même avec la spatule, pousser sur le côté, puis recommencer deux fois en roulant autour du premier rouleau. [[casserole; cuisson 3]]",
  "Dressage — Laisser tiédir 1 minute, trancher le rouleau en tranches de 2 cm, ajouter 1/2 c. à café d'huile de sésame grillé et dresser en rond. [[trancher; dresser x3]]"],
 tip:"Une poêle très douce et peu de mélange à la fois donnent un rouleau jaune pâle, tendre, sans aucune coloration."}),

/* ---------- de légumes ---------- */
RC({id:"n-bc-sigeumchi-namul", n:"Sigeumchi-namul : épinards tendres à l'huile de sésame", cat:"Banchan", st:"Banchan", base:"Aucun", d:1, go:"Légume",
 ing:[["epinards",90,"g"],["huile de sésame grillé",0.5,"c. à café"],["sel",1,"pincée"]],
 steps:[
  "Avant de commencer — Ustensiles : une casserole, une passoire, un bol, un couteau.",
  "Les épinards — Laver les épinards ({{epinards}}) en plusieurs eaux, puis les cuire dans la casserole couverte avec une cuillère d'eau à feu doux 3 minutes, jusqu'à ce qu'ils soient bien tombés et tendres. [[sortir; laver epinards; casserole; cuisson 3]]",
  "L'essorage — Les égoutter dans la passoire, presser doucement pour retirer l'eau, puis les couper en morceaux de 4 cm. [[egoutter; presser epinards; couper epinards]]",
  "Dressage — Mélanger avec 1/2 c. à café d'huile de sésame grillé et une pincée de sel, servir tiède en petit tas bien rond. [[dresser x2]]"],
 tip:"Bien presser les épinards est le geste clé : un banchan sec et dense, jamais baignant d'eau."}),

RC({id:"n-bc-haricots-verts-namul", n:"Haricots verts : tendres, huile de sésame grillé", cat:"Banchan", st:"Banchan", base:"Aucun", d:1, go:"Légume",
 ing:[["haricots verts",70,"g"],["huile de sésame grillé",0.5,"c. à café"],["sauce soja",0.5,"c. à café"]],
 steps:[
  "Avant de commencer — Ustensiles : une casserole avec son couvercle, une passoire, un bol, un couteau. Les haricots verts sont limités à 75 g cuits par repas (seuil FODMAP).",
  "Les haricots — Équeuter et laver les haricots verts ({{haricots verts}}), les couper en deux, puis les cuire dans la casserole couverte avec 3 cuillères d'eau à feu doux 8 minutes, jusqu'à ce qu'ils soient très tendres. [[sortir; laver haricots verts; couper haricots verts; casserole; cuisson 8]]",
  "Dressage — Les égoutter, les mélanger avec 1/2 c. à café d'huile de sésame grillé et 1/2 c. à café de sauce soja, servir tièdes. [[egoutter; dresser x2]]"],
 tip:"Cuits très tendres, les haricots verts se digèrent mieux : ils doivent s'écraser sous la langue."}),

RC({id:"n-bc-hobak-namul", n:"Hobak-namul : courgette épluchée étuvée", cat:"Banchan", st:"Banchan", base:"Aucun", d:1, go:"Légume",
 ing:[["courgette",60,"g"],["huile de sésame grillé",0.5,"c. à café"],["sel",1,"pincée"]],
 steps:[
  "Avant de commencer — Ustensiles : une casserole avec son couvercle, un économe, une planche et un couteau. La courgette est limitée à 60 g épluchée par repas (seuil FODMAP).",
  "La courgette — Éplucher la courgette ({{courgette}}), la couper en demi-lunes de 5 mm, puis l'étuver dans la casserole couverte avec 2 cuillères d'eau à feu doux 5 minutes, jusqu'à ce qu'elle devienne translucide et tendre. [[sortir; eplucher courgette; couper courgette; casserole; cuisson 5]]",
  "Dressage — Égoutter, ajouter 1/2 c. à café d'huile de sésame grillé et une pincée de sel, servir tiède. [[egoutter; dresser x2]]"],
 tip:"Épluchée et étuvée à l'eau, la courgette est très douce ; l'huile de sésame fait tout le parfum."}),

RC({id:"n-bc-gaji-namul", n:"Gaji-namul : aubergine pelée vapeur à la sauce soja douce", cat:"Banchan", st:"Banchan", base:"Aucun", d:1, go:"Légume",
 ing:[["aubergine",90,"g"],["huile de sésame grillé",0.5,"c. à café"],["sauce soja",0.5,"c. à café"]],
 steps:[
  "Avant de commencer — Ustensiles : une casserole avec son couvercle, un économe, une planche et un couteau, un bol.",
  "L'aubergine — Éplucher entièrement l'aubergine ({{aubergine}}), la couper en bâtonnets de 1 cm, puis l'étuver dans la casserole couverte avec 3 cuillères d'eau à feu doux 8 minutes, jusqu'à ce qu'elle soit fondante, presque en purée. [[sortir; eplucher aubergine; couper aubergine; casserole; cuisson 8]]",
  "Dressage — Égoutter, mélanger doucement avec 1/2 c. à café d'huile de sésame grillé et 1/2 c. à café de sauce soja, servir tiède. [[egoutter; dresser x2]]"],
 tip:"Toujours bien pelée et très cuite : l'aubergine doit se défaire à la fourchette."}),

RC({id:"n-bc-dangeun-namul", n:"Dangeun-namul : carottes en julienne fondantes", cat:"Banchan", st:"Banchan", base:"Aucun", d:1, go:"Légume",
 ing:[["carotte",90,"g"],["huile de sésame grillé",0.5,"c. à café"],["sel",1,"pincée"]],
 steps:[
  "Avant de commencer — Ustensiles : une casserole avec son couvercle, un économe, une planche et un couteau.",
  "Les carottes — Éplucher la carotte ({{carotte}}), la couper en fins bâtonnets de 3 mm, puis l'étuver dans la casserole couverte avec 3 cuillères d'eau à feu doux 7 minutes, jusqu'à ce qu'ils soient fondants. [[sortir; eplucher carotte; couper carotte; casserole; cuisson 7]]",
  "Dressage — Égoutter, ajouter 1/2 c. à café d'huile de sésame grillé et une pincée de sel, servir tièdes en petit fagot. [[egoutter; dresser x2]]"],
 tip:"Plus les bâtonnets sont fins, plus ils cuisent vite et plus ils sont tendres."}),

RC({id:"n-bc-daikon-namul", n:"Mu-namul : daikon étuvé translucide", cat:"Banchan", st:"Banchan", base:"Aucun", d:1, go:"Légume",
 ing:[["daikon",90,"g"],["huile de sésame grillé",0.5,"c. à café"],["sel",1,"pincée"]],
 steps:[
  "Avant de commencer — Ustensiles : une casserole avec son couvercle, un économe, une planche et un couteau. Le daikon est toujours étuvé : c'est la cuisson qui le rend doux.",
  "Le daikon — Éplucher le daikon ({{daikon}}), le couper en fins bâtonnets de 3 mm, puis l'étuver dans la casserole couverte avec 3 cuillères d'eau à feu doux 8 minutes, jusqu'à ce qu'il devienne translucide et sucré. [[sortir; eplucher daikon; couper daikon; casserole; cuisson 8]]",
  "Dressage — Égoutter, ajouter 1/2 c. à café d'huile de sésame grillé et une pincée de sel, servir tiède. [[egoutter; dresser x2]]"],
 tip:"Étuvé, le daikon perd tout son piquant et devient doux comme un navet."}),

RC({id:"n-bc-pak-choi-namul", n:"Pak choi : étuvé à l'huile de sésame", cat:"Banchan", st:"Banchan", base:"Aucun", d:1, go:"Légume",
 ing:[["pak choi",75,"g"],["huile de sésame grillé",0.5,"c. à café"],["sel",1,"pincée"]],
 steps:[
  "Avant de commencer — Ustensiles : une casserole avec son couvercle, une planche et un couteau. Le pak choi est limité à 75 g cuits par repas (seuil FODMAP).",
  "Le pak choi — Laver le pak choi ({{pak choi}}), le couper en lanières de 2 cm, puis l'étuver dans la casserole couverte avec 2 cuillères d'eau à feu doux 4 minutes, jusqu'à ce que les côtes soient tendres. [[sortir; laver pak choi; couper pak choi; casserole; cuisson 4]]",
  "Dressage — Égoutter, ajouter 1/2 c. à café d'huile de sésame grillé et une pincée de sel, servir tiède. [[egoutter; dresser x2]]"],
 tip:"Couper les côtes en lanières fines évite les parties dures au centre."}),

RC({id:"n-bc-brocoli-muchim", n:"Brocoli-muchim : têtes de brocoli fondantes au sésame", cat:"Banchan", st:"Banchan", base:"Aucun", d:1, go:"Légume",
 ing:[["brocoli",90,"g"],["huile de sésame grillé",0.5,"c. à café"],["sel",1,"pincée"]],
 steps:[
  "Avant de commencer — Ustensiles : une casserole avec son couvercle, une planche et un couteau. Seulement les têtes du brocoli, jamais les tiges.",
  "Le brocoli — Détacher les têtes du brocoli ({{brocoli}}), les couper en petits bouquets de 2 cm, puis les étuver dans la casserole couverte avec 3 cuillères d'eau à feu doux 8 minutes, jusqu'à ce qu'ils soient très tendres. [[sortir; laver brocoli; couper brocoli; casserole; cuisson 8]]",
  "Dressage — Égoutter, écraser légèrement quelques bouquets à la fourchette, ajouter 1/2 c. à café d'huile de sésame grillé et une pincée de sel, servir tiède. [[egoutter; ecraser brocoli; dresser x2]]"],
 tip:"Un brocoli bien cuit, presque tendre à l'excès, est indispensable avec un intestin sensible."}),

RC({id:"n-bc-potimarron-jorim", n:"Danhobak-jorim : potimarron braisé au sirop d'érable", cat:"Banchan", st:"Banchan", base:"Aucun", d:1, go:"Légume",
 ing:[["potimarron",90,"g"],["sirop d'érable",0.5,"c. à café"],["sauce soja",0.5,"c. à café"],["huile de sésame grillé",0.5,"c. à café"]],
 steps:[
  "Avant de commencer — Ustensiles : une casserole avec son couvercle, un économe, une planche et un couteau.",
  "Le potimarron — Éplucher le potimarron ({{potimarron}}), retirer les graines et le couper en cubes de 2 cm. [[sortir; eplucher potimarron; couper potimarron]]",
  "La braise — Mettre les cubes dans la casserole avec 80 ml d'eau, 1/2 c. à café de sauce soja et 1/2 c. à café de sirop d'érable, couvrir et laisser frémir à feu doux 10 minutes, jusqu'à ce que le potimarron soit fondant et que la sauce ait presque disparu. [[casserole; cuisson 10]]",
  "Dressage — Verser dans un petit bol et finir de 1/2 c. à café d'huile de sésame grillé. [[dresser x2]]"],
 tip:"Le potimarron est naturellement sucré : le sirop n'est là que pour le brillant."}),

RC({id:"n-bc-navet-jorim", n:"Navet-jorim : navet braisé tendre à la sauce douce", cat:"Banchan", st:"Banchan", base:"Aucun", d:1, go:"Légume",
 ing:[["navet",90,"g"],["sauce soja",0.5,"c. à café"],["huile de sésame grillé",0.5,"c. à café"]],
 steps:[
  "Avant de commencer — Ustensiles : une casserole avec son couvercle, un économe, une planche et un couteau.",
  "Le navet — Éplucher le navet ({{navet}}) et le couper en cubes de 1,5 cm. [[sortir; eplucher navet; couper navet]]",
  "La braise — Mettre les cubes dans la casserole avec 80 ml d'eau et 1/2 c. à café de sauce soja, couvrir et laisser frémir à feu doux 10 minutes, jusqu'à ce qu'ils soient translucides et fondants. [[casserole; cuisson 10]]",
  "Dressage — Verser dans un petit bol et finir de 1/2 c. à café d'huile de sésame grillé. [[dresser x2]]"],
 tip:"Le navet cuit longtemps à l'eau perd toute son amertume et devient sucré."})
];

/* composer un repas coréen complet : riz + 1 banchan à protéine + 2 banchan de légumes (utilisé par l'application) */
const KR_RICE = 140;
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
    recipeId: null, cat: p.ing.some(i => norm(i.n) === "oeuf") ? "Œufs" : "Tofu", st: "Fraîcheur tiède", base: "Riz", t, d: 1, ing: ing.map(i => ({ id: uid(), ...i })), steps,
    tip: "Un repas coréen se mange par petites bouchées : un peu de riz, un peu de chaque banchan. Les banchan se préparent à l'avance et se servent tièdes.", kr: true };
}
