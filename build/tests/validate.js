const fs=require('fs');
const norm=s=>String(s||"").toLowerCase().replace(/œ/g,"oe").replace(/æ/g,"ae").replace(/[’`]/g,"'").normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/\s+/g," ").trim();
global.norm=norm; global.HERBS="quelques brins";
const load=f=>fs.readFileSync(require('path').join(__dirname,'..',f),'utf8');
let code=load('cat_db.js')+load('cat_rec_b.js')+load('cat_rec_1.js')+load('cat_rec_2.js')+load('cat_rec_v6.js')+load('cat_ov_lib.js')+load('cat_ov_v4a.js')+load('cat_ov_v4b.js')+load('cat_ov_v4c.js')+load('cat_gen.js')+`
function lookup(name){const n=norm(name);return ING_DB.find(e=>n.includes(e.k))||null;}
function unitKind(u){const x=norm(u);if(!x)return "p";if(x==="g"||x==="ml")return "g";if(/(cafe|c\\.? ?a ?c)/.test(x))return "c";if(/(soupe|c\\.? ?a ?s)/.test(x))return "s";if(/(pincee|brins|quelques)/.test(x))return "z";return "p";}
function ingKcal(i){const q=parseFloat(String(i.q).replace(',','.'));if(!q)return 0;const e=lookup(i.n);if(!e)return 0;switch(unitKind(i.u)){case 'g':return e.g!=null?e.g*q/100:0;case 'c':return e.c!=null?e.c*q:0;case 's':return e.c!=null?e.c*3*q:(e.g!=null?e.g*q*15/100:0);case 'p':return e.p!=null?e.p*q:0;}return 0;}
const out=[];
const L3=/\\b(ail|oignons?|echalotes?|poivre|piment|vinaigre|citron|moutarde|pois chiches?|lentilles?|haricots? (blancs?|rouges?|secs?)|falafels?|fritur\\w*|concombre|salade|radis|crudit\\w*|tomate)\\b/;
NEW_RECIPES.forEach(r=>{
  const b=r.st==='Petit-déjeuner', P=[];
  let fec=0,sol=0,iso=0,veg=0,oil=0,egg=0,kc=0,sard=0;
  r.ing.forEach(i=>{const e=lookup(i.n),q=parseFloat(String(i.q).replace(',','.'))||0;kc+=ingKcal(i);
    if(!e){if(!/^(sel|eau)/.test(norm(i.n)))P.push('inconnu:'+i.n);return;}
    if(L3.test(norm(i.n)))P.push('niv3:'+i.n);
    if(e.n==='r'||e.n==='p2'||e.n==='p3')P.push('nonlisté:'+i.n);
    if(e.a==='Féculents')fec+=q;
    else if(e.k==='tofu ferme'||e.k==='tofu'||e.k==='blanc de poulet'||e.k==='poulet'){sol+=q;}
    else if(e.a==='Œufs'){egg+=q;}
    else if(e.k==='sardine'){sol+=q;sard+=q;}
    else if(e.k.indexOf('isolat')===0)iso+=q;
    else if(e.a==='Légumes')veg+=q;
    if(e.k.indexOf('huile')===0)oil+=q;
    if(e.k==='avocat'&&q>30)P.push('avocat>30');
    if(e.k==='haricots verts'&&q>75)P.push('haricots>75');
    if(e.k==='courgette'&&q>60)P.push('courgette>60');
  });
  const solT=sol+egg*50;
  if(b){ if(fec<25||fec>100)P.push('fec b '+fec); if(kc>270)P.push('kcal b '+Math.round(kc)); }
  else { if(fec<120||fec>150)P.push('fec '+fec); if(solT<80||solT>100)P.push('sol '+solT); if(iso<20||iso>25)P.push('iso '+iso); if(veg<150||veg>200)P.push('veg '+veg); }
  if(!b&&oil!==1)P.push('huile '+oil);
  if(!r.steps.length)P.push('nosteps');
  if(b){ let tot=0,cook=0; r.steps.forEach(s=>{ if(/^Avant de commencer/i.test(s))return; const m=s.match(/\\[(cuisson\\s+)?(\\d+(?:[.,]\\d+)?)\\s*min\\]\\s*$/i); if(!m){P.push('durée manquante:'+s.slice(0,25));return;} const v=parseFloat(m[2].replace(',','.')); tot+=v; if(m[1])cook+=v; });
    if(tot>15)P.push('durée '+tot+' min > 15'); if(tot!==+r.t)P.push('t='+r.t+' ≠ somme des étapes '+tot); if(cook!==+r.tc)P.push('tc='+r.tc+' ≠ cuissons '+cook); }
  r.steps.forEach(s=>{(s.match(/\\{\\{([^}]+)\\}\\}/g)||[]).forEach(t=>{const k=norm(t.slice(2,-2));if(!r.ing.some(i=>norm(i.n).includes(k)||k.includes(norm(i.n))))P.push('token?'+k);});
    if(/\\b(dor[eé]|rissol|friture|frire|croustill|four\\b|rôti|saisir|griller|vinaigre|citron|ail\\b|oignon|cru\\b)/i.test(s.replace(/huile[^.]*crue?/gi,'').replace(/ crue? /g,' ')))P.push('mot?:'+(s.match(/\\b(dor[eé]|rissol|friture|frire|croustill|four\\b|rôti|saisir|griller|vinaigre|citron|ail\\b|oignon)/i)||[])[0]);});
  out.push((P.length?'✗':'✓')+' '+r.id+' kcal='+Math.round(kc)+' fec='+fec+' sol='+solT+' iso='+iso+' veg='+veg+(P.length?'  '+P.join(' | '):''));
});
console.log(out.join('\\n'));console.log(NEW_RECIPES.length+' recettes, '+out.filter(x=>x[0]==='✗').length+' en erreur');
`;
eval(code);
