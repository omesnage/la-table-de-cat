/* ====== Étapes détaillées (v3.2) : temps de cuisson minute par minute, ustensiles, repères, dressage ====== */
const BAM = "le rice cooker Yum Asia Bamboo (cuve et panier vapeur inox)";
const OV = {};
const intro = extra => "Avant de commencer — Ustensiles : " + BAM + ", une feuille de papier sulfurisé percée de quelques trous, " + extra + ". Verser 300 ml d'eau dans la cuve avant de lancer chaque cuisson vapeur.";
OV["p-oeufs-mollets-epinards"] = [
 intro("un économe, une planche et un couteau, une passoire, un presse-purée (ou une fourchette), un bol d'eau froide, une assiette creuse tiède"),
 "Mise en place — Sortir les œufs ({{œufs}}) du frigo 10 minutes avant la cuisson pour que la coquille ne se fende pas. Éplucher les pommes de terre ({{pommes de terre}}) et les couper en cubes de 3 cm, éplucher la carotte ({{carotte}}) et la couper en rondelles de 8 mm, puis laver les épinards ({{épinards}}) et retirer les grosses tiges. [8 min]",
 "La vapeur, minute par minute — Poser le papier sulfurisé percé dans le panier, y disposer pommes de terre et carotte, et lancer le mode STEAM : c'est la minute 0. À la minute 14, poser les œufs directement sur l'inox, à côté des légumes. À la minute 19, ajouter les épinards sur le papier. À la minute 22, tout est prêt : les cubes s'écrasent à la fourchette, les épinards sont affaissés, les œufs ont cuit 8 minutes. Ne pas soulever le couvercle avant la minute 14. [cuisson 22 min]",
 "Les œufs mollets — Sortir les œufs avec une cuillère, les plonger 2 minutes dans le bol d'eau froide pour stopper la cuisson, puis les écaler délicatement sous un filet d'eau en tapotant la coquille : le blanc est pris, le jaune encore coulant. [2 min]",
 "La purée — Presser les épinards dans la passoire pour ôter l'eau. Écraser les pommes de terre au presse-purée avec le lait de riz tiède ({{lait de riz}}), l'isolat de pois ({{isolat de protéine de pois}}) délayé dans une cuillère d'eau et une pincée de sel, jusqu'à obtenir une purée lisse, brillante, qui nappe la cuillère. [3 min]",
 "Dressage — Dans l'assiette creuse tiède, déposer la purée en nid avec le dos d'une cuillère. Disposer les épinards d'un côté et les rondelles de carotte en éventail de l'autre. Couper chaque œuf en deux et le poser au centre du nid, jaune vers le haut. Terminer d'un filet d'huile d'olive crue ({{huile d'olive}}) et de pointes vertes de ciboulette ciselées ({{ciboulette}}). [3 min]"];
OV["p-poulet-effiloche-potimarron"] = [
 intro("une planche et un couteau, un économe, un presse-purée, deux fourchettes, un petit bol et un fouet, une assiette creuse tiède"),
 "Mise en place — Sortir le blanc de poulet ({{blanc de poulet}}) du frigo 15 minutes avant et ôter la peau. Éplucher les pommes de terre ({{pommes de terre}}) et le potimarron ({{potimarron}}) et les couper en cubes de 3 cm. Éplucher la carotte ({{carotte}}) et la tailler en bâtonnets de 1 cm. [10 min]",
 "Le montage de la cuve — Verser 250 ml d'eau tiède dans la cuve. Dans le panier, poser le papier sulfurisé percé avec pommes de terre, potimarron et carotte. Poser le poulet à côté, directement sur l'inox, sans papier, avec une branche de thym ({{thym}}). Refermer. [3 min]",
 "La cuisson lente — Lancer le mode SLOW COOK pour 45 minutes, sans ouvrir le couvercle. À la fin, le poulet se défait en fibres humides sous la fourchette et les cubes de légumes sont traversés sans résistance par la pointe d'un couteau. Laisser reposer 5 minutes avant d'ouvrir. [cuisson 45 min]",
 "L'effilochage — Déposer le poulet sur la planche et le tirer à deux fourchettes en fines fibres, en écartant les parties dures. Garder un peu de jus de la cuve. [3 min]",
 "La purée — Écraser pommes de terre et potimarron au presse-purée avec une cuillère de jus tiède de la cuve et une pincée de sel : une purée orangée, lisse, qui se tient en nid. [3 min]",
 "La crème de pois — Délayer l'isolat ({{isolat de protéine de pois}}) dans le bouillon tiède ({{bouillon}}) en fouettant jusqu'à une crème sans grumeaux. Ne pas la chauffer. [2 min]",
 "Dressage — Assiette creuse tiède : la purée en nid au centre, le poulet effiloché en dôme par-dessus, les bâtonnets de carotte plantés sur le côté. Napper de crème de pois en filet, finir d'huile d'olive crue ({{huile d'olive}}) et de persil ciselé ({{persil}}). [3 min]"];
OV["p-poulet-poche-riz"] = [
 intro("une casserole avec couvercle, une planche et un couteau, un économe, une passoire, une louche, un petit bol et un fouet"),
 "Mise en place — Éplucher la carotte ({{carotte}}) et la couper en rondelles de 8 mm. Ôter la peau du blanc de poulet ({{blanc de poulet}}). Laver les épinards ({{épinards}}) et retirer les grosses tiges. [6 min]",
 "Le bouillon — Dans la casserole, porter à frémissement le bouillon ({{bouillon}}) avec les rondelles de carotte, une branche de thym ({{thym}}) et une pincée de sel. Laisser frémir à feu doux : la carotte est prête quand elle s'écrase entre deux doigts. [cuisson 12 min]",
 "Pocher le poulet — Plonger le blanc dans le bouillon frémissant, couvrir, couper le feu et laisser pocher dans la chaleur résiduelle pendant 20 minutes. La chair est alors blanche et juteuse à cœur, sans trace rose. [cuisson 20 min]",
 "La vapeur — Pendant le pochage, lancer le mode STEAM du Bamboo : réchauffer le riz basmati ({{riz cuit}}) avec une cuillère de bouillon dans un bol, 3 minutes, puis laisser tomber les épinards 3 minutes sur le papier sulfurisé percé et les presser doucement. [cuisson 6 min]",
 "La crème de pois — Prélever 4 cuillères de bouillon tiède, y délayer l'isolat ({{isolat de protéine de pois}}) en fouettant jusqu'à une crème lisse. [2 min]",
 "Dressage — Dans l'assiette creuse tiède, tasser le riz en dôme avec une cuillère, trancher le poulet en biais en lamelles de 5 mm et les disposer en éventail contre le riz. Ajouter les épinards d'un côté, les carottes de l'autre, napper de crème de pois, finir d'huile d'olive crue ({{huile d'olive}}) et de persil ciselé ({{persil}}). [3 min]"];
OV["p-poulet-quinoa-courgette"] = [
 intro("un économe, une planche et un couteau, un petit bol et un fouet, une assiette creuse tiède"),
 "Mise en place — Éplucher la courgette ({{courgette épluchée}}) à 100 % (aucune peau verte), retirer le cœur graineux et la couper en dés de 1 cm, sans dépasser la quantité indiquée. Éplucher la carotte ({{carotte}}) et la couper en rondelles de 8 mm. Ôter la peau du poulet ({{blanc de poulet}}). [8 min]",
 "La vapeur, minute par minute — Lancer le mode STEAM. Minute 0 : poser le poulet directement sur l'inox. Minute 4 : ajouter dans le panier, sur le papier sulfurisé percé, les rondelles de carotte. Minute 12 : ajouter les dés de courgette. Minute 24 : arrêter. Le poulet est blanc à cœur, la carotte s'écrase entre deux doigts, la courgette est translucide. [cuisson 24 min]",
 "Le quinoa — Réchauffer le quinoa cuit ({{quinoa cuit}}) 3 minutes dans la vapeur, dans un bol avec une cuillère d'eau, puis l'aérer à la fourchette. [cuisson 3 min]",
 "La crème de pois — Délayer l'isolat ({{isolat de protéine de pois}}) dans 3 cuillères d'eau tiède, saler d'une pincée, ajouter la ciboulette ciselée ({{ciboulette}}, pointes vertes seulement), puis l'huile de sésame grillé ({{huile de sésame grillé}}) en filet. [2 min]",
 "Dressage — Quinoa en couronne dans l'assiette creuse tiède. Au centre, le poulet tranché en biais, autour les légumes en éventail, et un zigzag de crème de pois sur l'ensemble. [3 min]"];
OV["p-poulet-riz-pakchoi"] = [
 intro("une planche et un couteau, un économe, un petit bol et un fouet, un bol pour le riz, une assiette creuse tiède"),
 "Mise en place — Peser exactement 75 g de haricots verts ({{haricots verts}}), les équeuter et les couper en tronçons de 3 cm. Séparer les feuilles du pak choï ({{pak choï}}), tailler les tiges en tronçons de 2 cm. Éplucher la carotte ({{carotte}}) et la couper en bâtonnets. Ôter la peau du poulet ({{blanc de poulet}}). [8 min]",
 "La vapeur, minute par minute — Mode STEAM. Minute 0 : le poulet directement sur l'inox et les haricots verts sur le papier percé. Minute 2 : ajouter la carotte et les tiges de pak choï. Minute 24 : ajouter les feuilles de pak choï. Minute 26 : arrêter. Les haricots doivent être mous, jamais croquants, et le poulet blanc à cœur. [cuisson 26 min]",
 "Le riz — Pendant les 5 dernières minutes, poser le riz basmati cuit ({{riz cuit}}) dans un bol avec une cuillère d'eau à côté du poulet pour le réchauffer. [cuisson 5 min]",
 "La crème de pois — Délayer l'isolat ({{isolat de protéine de pois}}) dans 3 cuillères d'eau tiède, y ajouter le persil haché ({{persil}}) et une pincée de sel. [2 min]",
 "Dressage — Riz en dôme dans l'assiette creuse tiède, poulet tranché en biais contre le riz, haricots et carottes en éventail, pak choï en bouquet. Napper de crème de pois puis d'un filet d'huile d'olive crue ({{huile d'olive}}). [3 min]"];
OV["p-poulet-puree-panais"] = [
 intro("une planche et un couteau, un économe, un presse-purée, deux fourchettes, un petit bol et un fouet"),
 "Mise en place — Éplucher les pommes de terre ({{pommes de terre}}) et le panais ({{panais}}), ôter le cœur ligneux du panais, tailler en cubes de 2 cm. Éplucher la carotte ({{carotte}}) et la couper en tronçons de 3 cm. Ôter la peau du poulet ({{blanc de poulet}}). [8 min]",
 "La cuisson lente — Verser 250 ml d'eau tiède dans la cuve, mettre légumes et branche de thym ({{thym}}) sur le papier sulfurisé percé dans le panier, le poulet directement sur l'inox. Lancer SLOW COOK pour 45 minutes sans ouvrir le couvercle. Le poulet est prêt quand ses fibres se séparent sans résistance. [cuisson 45 min]",
 "Effilocher — Laisser reposer 5 minutes, puis tirer le poulet à deux fourchettes en fines fibres humides. [3 min]",
 "La purée — Écraser pommes de terre et panais avec une cuillère de jus de la cuve et une pincée de sel : purée blonde, lisse, légèrement sucrée. [3 min]",
 "La crème de pois — Délayer l'isolat ({{isolat de protéine de pois}}) dans le bouillon tiède ({{bouillon}}). [2 min]",
 "Dressage — Purée en nid au centre de l'assiette creuse tiède, poulet effiloché en dôme par-dessus, carottes tout autour, crème de pois en filet, huile d'olive crue ({{huile d'olive}}). [3 min]"];
OV["p-poulet-riz-aubergine"] = [
 intro("un économe, du papier absorbant, une planche et un couteau, deux fourchettes, un petit bol et un fouet"),
 "L'aubergine — Éplucher entièrement l'aubergine ({{aubergine épluchée}}), la couper en dés de 2 cm, saupoudrer d'une pincée de sel et laisser dégorger 10 minutes sur du papier absorbant, puis l'éponger. Éplucher la carotte ({{carotte}}) en rondelles de 8 mm. Ôter la peau du poulet ({{blanc de poulet}}). [12 min]",
 "La vapeur, minute par minute — Mode STEAM. Minute 0 : poulet directement sur l'inox. Minute 4 : carotte et dés d'aubergine sur le papier sulfurisé percé. Minute 24 : arrêter. L'aubergine doit s'écraser comme une crème, sans aucune résistance. [cuisson 24 min]",
 "Effilocher et écraser — Tirer le poulet cuit à deux fourchettes en fines fibres, écraser l'aubergine à la fourchette avec une pincée de sel. [3 min]",
 "Le riz — Réchauffer le riz basmati ({{riz cuit}}) 3 minutes dans la vapeur, dans un bol avec une cuillère d'eau. [cuisson 3 min]",
 "La crème de pois — Délayer l'isolat ({{isolat de protéine de pois}}) dans 3 cuillères d'eau tiède, ajouter la ciboulette {{ciboulette}} (pointes vertes seulement). [2 min]",
 "Dressage — Riz au fond d'un bol large tiède, aubergine écrasée et poulet en deux quartiers face à face, carottes à côté. Crème de pois en zigzag puis huile de sésame grillé ({{huile de sésame grillé}}) en filet. [3 min]"];
OV["p-veloute-butternut-poulet"] = [
 intro("un économe, une planche et un couteau, un mixeur plongeant, un petit bol, une assiette creuse tiède"),
 "Mise en place — Éplucher la butternut ({{butternut}}), retirer les graines et la tailler en cubes de 3 cm. Éplucher la carotte ({{carotte}}) en rondelles. Ôter la peau du poulet ({{blanc de poulet}}). [8 min]",
 "La vapeur, minute par minute — Mode STEAM. Minute 0 : poulet directement sur l'inox avec une branche de thym ({{thym}}). Minute 2 : butternut et carotte sur le papier percé. Minute 24 : arrêter. La butternut doit s'écraser à la fourchette. [cuisson 24 min]",
 "Le velouté — Mixer butternut et carotte avec le bouillon tiède ({{bouillon}}) et l'isolat de pois ({{isolat de protéine de pois}}) jusqu'à un velouté épais, lisse et brillant. Saler d'une pincée. [4 min]",
 "Le quinoa — Réchauffer le quinoa cuit ({{quinoa cuit}}) 3 minutes dans la vapeur, avec une cuillère d'eau. [cuisson 3 min]",
 "Dressage — Velouté dans l'assiette creuse tiède, quinoa en quenelle au centre, poulet tranché en éventail sur le quinoa. Filet d'huile d'olive crue ({{huile d'olive}}) et feuilles de thym. [3 min]"];
OV["p-papillote-poulet"] = [
 intro("une feuille de papier sulfurisé de 35 cm, une ficelle de cuisine, une planche et un couteau, un économe, un petit bol et un fouet"),
 "Mise en place — Éplucher les pommes de terre ({{pommes de terre}}) en cubes de 3 cm, la carotte ({{carotte}}) en bâtonnets de 1 cm, la courgette ({{courgette épluchée}}) à 100 % en dés de 1 cm. Ôter la peau du poulet ({{blanc de poulet}}). [9 min]",
 "La papillote — Sur la feuille de papier sulfurisé, déposer carotte, courgette, poulet et le thym ({{thym}}). Saler très légèrement, refermer la papillote en plissant les bords et l'attacher de ficelle pour qu'elle soit hermétique. [4 min]",
 "La vapeur — Mode STEAM. Minute 0 : la papillote et les pommes de terre dans le panier. Minute 26 : arrêter. Ouvrir la papillote au-dessus d'un bol pour récupérer le jus. [cuisson 26 min]",
 "La crème de pois — Délayer l'isolat ({{isolat de protéine de pois}}) dans 4 cuillères du jus de la papillote, tiède, avec le persil haché ({{persil}}). [2 min]",
 "Dressage — Verser le contenu de la papillote dans l'assiette creuse tiède, pommes de terre à côté, crème de pois en filet, huile d'olive crue ({{huile d'olive}}). [3 min]"];
OV["p-parmentier-poulet"] = [
 intro("une planche et un couteau, un économe, un presse-purée, deux fourchettes, un cercle ou un ramequin pour mouler, un petit bol"),
 "Mise en place — Éplucher les pommes de terre ({{pommes de terre}}) et la carotte ({{carotte}}) en cubes de 2 cm ; détailler uniquement les têtes du brocoli ({{brocoli}}) en petits bouquets, sans la tige. Ôter la peau du poulet ({{blanc de poulet}}). [8 min]",
 "La cuisson lente — SLOW COOK 45 minutes : poulet directement sur l'inox, légumes sur le papier percé dans le panier (le brocoli en dernier, sur le dessus). Ne pas ouvrir le couvercle. [cuisson 45 min]",
 "Le hachis — Effilocher le poulet, l'écraser grossièrement à la fourchette avec les carottes et le bouillon tiède ({{bouillon}}) pour obtenir un hachis moelleux. [3 min]",
 "La purée — Écraser les pommes de terre avec l'isolat ({{isolat de protéine de pois}}) délayé dans une cuillère d'eau chaude et une pincée de sel : purée lisse et riche. [3 min]",
 "Dressage — Dans le cercle posé sur l'assiette tiède, tasser le hachis, recouvrir de purée lissée à la spatule, retirer le cercle, entourer des bouquets de brocoli. Pas de gratin : le plat se sert tiède. Thym ({{thym}}) et filet d'huile d'olive crue ({{huile d'olive}}). [4 min]"];
OV["p-bol-avocat"] = [
 intro("une planche et un couteau, un économe, une fourchette, un petit bol et un fouet, un bol large tiède"),
 "Mise en place — Éplucher la carotte ({{carotte}}) en rondelles de 8 mm, détailler les têtes de brocoli ({{brocoli}}) en petits bouquets, ôter la peau du poulet ({{blanc de poulet}}). [8 min]",
 "La vapeur, minute par minute — Mode STEAM. Minute 0 : poulet directement sur l'inox et carotte sur le papier percé. Minute 12 : brocoli. Minute 24 : arrêter. Le brocoli doit être très tendre, jamais croquant. [cuisson 24 min]",
 "Le riz — Réchauffer le riz basmati ({{riz cuit}}) 3 minutes dans la vapeur, dans un bol avec une cuillère d'eau. [cuisson 3 min]",
 "L'avocat — Peser 25 g d'avocat ({{avocat}}) bien mûr, soit un huitième, et l'écraser à la fourchette : c'est la limite du protocole, jamais davantage. [1 min]",
 "La crème de pois — Délayer l'isolat ({{isolat de protéine de pois}}) dans 3 cuillères d'eau tiède avec la ciboulette ciselée ({{ciboulette}}). [2 min]",
 "Dressage — Riz au fond du bol, poulet tranché en biais, carottes et brocoli en quartiers, avocat écrasé en quenelle au centre. Crème de pois en zigzag puis filet d'huile de sésame grillé ({{huile de sésame grillé}}). [3 min]"];
OV["p-risotto-riz-poulet"] = [
 intro("une casserole avec couvercle, une cuillère en bois, une planche et un couteau, un économe, deux fourchettes, un petit bol"),
 "Mise en place — Éplucher la carotte ({{carotte}}) et la couper en petits dés de 5 mm. Laver les épinards ({{épinards}}). Ôter la peau du poulet ({{blanc de poulet}}). [6 min]",
 "Le poulet — Porter le bouillon ({{bouillon}}) à frémissement avec le thym ({{thym}}), y plonger le poulet, couvrir, couper le feu et laisser pocher 15 minutes. Le retirer puis l'effilocher à deux fourchettes. [cuisson 15 min]",
 "Les légumes — Remettre le bouillon à frémissement, y cuire les dés de carotte 8 minutes jusqu'à ce qu'ils soient fondants, puis ajouter les épinards 2 minutes. [cuisson 10 min]",
 "Le risotto — Ajouter le riz cuit ({{riz cuit}}) et le laisser s'imprégner à feu doux 5 minutes en remuant : il devient crémeux. [cuisson 5 min]",
 "La liaison — Hors du feu, incorporer l'isolat ({{isolat de protéine de pois}}) délayé dans une cuillère de bouillon : le riz devient nappant et soyeux. [2 min]",
 "Dressage — Risotto dans l'assiette creuse tiède, étalé d'un tour de poignet, poulet effiloché en petit tas au centre, filet d'huile d'olive crue ({{huile d'olive}}) et feuilles de thym. [2 min]"];
OV["p-chawanmushi-riz"] = [
 intro("deux ramequins, une passoire fine, un fouet ou une fourchette, un petit bol, une planche et un couteau"),
 "Mise en place — Éplucher la carotte ({{carotte}}) et la courgette ({{courgette épluchée}}) entièrement, les couper en dés de 5 mm. Les cuire 8 minutes dans le panier vapeur (mode STEAM) sur le papier percé, jusqu'à ce qu'ils s'écrasent. [cuisson 8 min]",
 "L'appareil — Délayer l'isolat ({{isolat de protéine de pois}}) dans le bouillon tiède ({{bouillon}}), battre les œufs ({{œufs}}) à la fourchette sans faire de mousse, mélanger, saler d'une pincée et filtrer à la passoire fine pour un flan parfaitement lisse. [4 min]",
 "Le flan — Répartir les légumes dans les deux ramequins, verser l'appareil par-dessus à la louche, couvrir de papier sulfurisé et cuire en mode STEAM, couvercle légèrement entrouvert pour baisser la vapeur : le flan est prêt quand il tremble comme une panna cotta au centre. [cuisson 15 min]",
 "Le riz — Pendant les 3 dernières minutes, poser le riz ({{riz cuit}}) dans un bol à côté pour le réchauffer. [cuisson 3 min]",
 "Dressage — Riz dans un bol tiède, flan à côté dans son ramequin, ciboulette (pointes vertes) et huile de sésame grillé ({{huile de sésame grillé}}) en filet sur le flan. [2 min]"];
OV["p-oeufs-poches-veloute"] = [
 intro("une casserole, une écumoire ou une cuillère trouée, un mixeur plongeant, un économe, une planche et un couteau, du papier absorbant"),
 "Mise en place — Éplucher le potimarron ({{potimarron}}), la carotte ({{carotte}}) et les pommes de terre ({{pommes de terre}}) et les couper en cubes de 3 cm. [8 min]",
 "La vapeur — Mode STEAM, légumes sur le papier percé avec une branche de thym ({{thym}}) : 20 minutes, jusqu'à ce que la pointe d'un couteau traverse les cubes sans résistance. Garder les pommes de terre pour l'assiette. [cuisson 20 min]",
 "Le velouté — Mixer potimarron et carotte avec le bouillon tiède ({{bouillon}}) et l'isolat de pois ({{isolat de protéine de pois}}) : un velouté épais, orangé, qui nappe la cuillère. Ajuster d'une pincée de sel. [4 min]",
 "Les œufs pochés — Faire frémir de l'eau salée, créer un léger tourbillon à la cuillère, faire glisser un œuf ({{œufs}}) cassé dans une tasse, pocher 3 minutes sans bouillir ; répéter. Égoutter sur du papier absorbant. Le blanc est pris, le jaune coule. [cuisson 4 min]",
 "Dressage — Velouté dans l'assiette creuse tiède, pommes de terre à côté, œufs pochés au centre. Filet d'huile d'olive crue ({{huile d'olive}}) et feuilles de thym. [3 min]"];
OV["p-omelette-vapeur"] = [
 intro("une râpe fine, un fouet, un ramequin ou un petit bol de 15 cm, une planche et un couteau, un économe"),
 "Mise en place — Éplucher entièrement la courgette ({{courgette épluchée}}) et la râper finement. Éplucher la carotte ({{carotte}}) et les pommes de terre ({{pommes de terre}}) et les couper en cubes de 3 cm. [9 min]",
 "La vapeur des légumes — Mode STEAM : carotte et pommes de terre sur le papier percé, 20 minutes, jusqu'à ce qu'ils s'écrasent. [cuisson 20 min]",
 "L'appareil — Délayer l'isolat ({{isolat de protéine de pois}}) dans l'eau tiède ({{eau tiède}}), battre avec les œufs ({{œufs}}) à la fourchette, ajouter la courgette râpée et une pincée de sel. [3 min]",
 "L'omelette — Verser dans le ramequin recouvert de papier sulfurisé et le poser dans le panier avec les légumes pour les 14 dernières minutes, en mode STEAM, couvercle légèrement entrouvert. L'omelette est cuite quand elle est gonflée et ferme au toucher. [cuisson 14 min]",
 "Dressage — Démouler l'omelette tiède, la trancher en deux, disposer pommes de terre et carottes à côté, filet d'huile d'olive crue ({{huile d'olive}}) et ciboulette (pointes vertes). [2 min]"];
OV["p-oeufs-cocotte"] = [
 intro("deux ramequins, une planche et un couteau, un économe, un petit bol et un fouet, du papier sulfurisé"),
 "La crème — Délayer l'isolat ({{isolat de protéine de pois}}) dans le bouillon tiède ({{bouillon}}) pour obtenir une crème fluide. [2 min]",
 "Les épinards — Faire tomber les épinards ({{épinards}}) 3 minutes à la vapeur, les presser et les répartir au fond des deux ramequins. Napper de crème de pois. [cuisson 3 min]",
 "Les œufs — Casser un œuf ({{œufs}}) par ramequin sur les épinards, saler d'une pincée, couvrir de papier sulfurisé. [2 min]",
 "La cuisson, minute par minute — Éplucher la carotte ({{carotte}}) en rondelles de 8 mm. Mode STEAM : minute 0, les rondelles de carotte dans le panier ; minute 3, ajouter les ramequins. Les œufs sont prêts à la minute 12 (9 minutes de cuisson) : blanc pris, jaune encore coulant ; la cuisson continue un peu hors de la vapeur. [cuisson 12 min]",
 "Le quinoa — Réchauffer le quinoa cuit ({{quinoa cuit}}) 3 minutes dans la vapeur à la fin. [cuisson 3 min]",
 "Dressage — Poser les ramequins sur une assiette tiède, quinoa et carottes à côté, filet d'huile d'olive crue ({{huile d'olive}}) et persil ciselé ({{persil}}). [2 min]"];
OV["p-okayu-soir"] = [
 intro("la cuve du Bamboo (SLOW COOK) ou une casserole, une cuillère en bois, une planche et un couteau, un bol de service"),
 "Mise en place — Éplucher la carotte ({{carotte}}) et la couper en petits dés de 5 mm. Émincer très finement le poulet ({{blanc de poulet}}). Laver les épinards ({{épinards}}). [6 min]",
 "Le bouillon — Porter le bouillon ({{bouillon}}) à frémissement avec les dés de carotte, 8 minutes, jusqu'à ce qu'ils soient fondants. [cuisson 8 min]",
 "Le poulet — Ajouter le poulet émincé et pocher à feu très doux 6 minutes : il blanchit à cœur. [cuisson 6 min]",
 "Le riz — Ajouter le riz cuit ({{riz cuit}}), laisser mijoter 12 minutes en remuant de temps en temps jusqu'à ce que les grains éclatent et que le bouillon épaississe comme un porridge ; ajouter les épinards les 2 dernières minutes. [cuisson 12 min]",
 "La liaison — Hors du feu, délayer l'isolat ({{isolat de protéine de pois}}) dans une louche de bouillon et l'incorporer en remuant. [2 min]",
 "L'œuf — Faire frémir l'œuf ({{œuf}}) 6 minutes dans une petite casserole, l'écaler. [cuisson 6 min]",
 "Dressage — Okayu dans le bol tiède, œuf coupé en deux au centre, huile de sésame grillé ({{huile de sésame grillé}}) en filet, ciboulette {{ciboulette}} (pointes vertes seulement). [2 min]"];
OV["p-salade-tiede-oeufs"] = [
 intro("une planche et un couteau, un économe, un petit bol, une assiette creuse"),
 "Mise en place — Peser 75 g de haricots verts ({{haricots verts}}), les équeuter. Éplucher les pommes de terre ({{pommes de terre}}) en cubes de 3 cm et la carotte ({{carotte}}) en rondelles de 8 mm. [9 min]",
 "La vapeur, minute par minute — Mode STEAM. Minute 0 : pommes de terre, carotte et haricots verts sur le papier percé. Minute 13 : poser les œufs ({{œufs}}) sur l'inox, ils cuisent 12 minutes. Minute 25 : arrêter. Les haricots doivent être mous. [cuisson 25 min]",
 "Tiédir — Laisser tiédir 10 minutes : la salade se sert tiède, jamais froide. Passer les œufs sous l'eau froide, les écaler et les couper en quartiers. [10 min]",
 "La crème de pois — Délayer l'isolat ({{isolat de protéine de pois}}) dans l'eau tiède ({{eau tiède}}), ajouter le persil haché ({{persil}}) et une pincée de sel. [2 min]",
 "Dressage — Pommes de terre en couronne dans l'assiette creuse, haricots et carottes en éventail, quartiers d'œufs au centre. Crème de pois en filet puis huile d'olive crue ({{huile d'olive}}). [3 min]"];
OV["p-gnocchis-sarrasin"] = [
 intro("une casserole, une écumoire, un presse-purée, un mixeur plongeant, une planche et un couteau, une fourchette"),
 "La pâte — Éplucher les pommes de terre ({{pommes de terre}}) et les cuire 22 minutes à la vapeur (mode STEAM), les écraser finement, ajouter la farine de sarrasin ({{farine de sarrasin}}), l'œuf ({{œuf}}) et une pincée de sel. Pétrir rapidement : la pâte doit rester légèrement collante. [cuisson 22 min]",
 "Façonner — Rouler la pâte en boudins de 1,5 cm, couper des tronçons de 2 cm, les marquer d'un coup de fourchette. [6 min]",
 "La crème de potimarron — Cuire le potimarron ({{potimarron}}) 18 minutes à la vapeur, le mixer avec le bouillon tiède ({{bouillon}}) et l'isolat ({{isolat de protéine de pois}}) en crème épaisse. [cuisson 18 min]",
 "Le poulet — Cuire le blanc de poulet ({{blanc de poulet}}) 22 minutes à la vapeur, l'effilocher, ajouter les épinards ({{épinards}}) 3 minutes pour les faire fondre. [cuisson 22 min]",
 "Pocher les gnocchis — Les plonger dans une grande casserole d'eau frémissante salée ; ils sont cuits 4 minutes après leur remontée à la surface. Les égoutter délicatement à l'écumoire. [cuisson 4 min]",
 "Dressage — Crème de potimarron dans l'assiette creuse tiède, gnocchis dessus, poulet et épinards au centre, filet d'huile d'olive crue ({{huile d'olive}}) et thym ({{thym}}). [3 min]"];
