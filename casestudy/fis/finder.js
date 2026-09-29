(function(){
const root=document.getElementById('af');if(!root)return;
const ic=p=>`<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">${p}</svg>`;
const I={
 size:ic('<rect x="4" y="3" width="10" height="18" rx="1"/><path d="M14 9h5a1 1 0 0 1 1 1v11H14"/><path d="M8 7h2M8 11h2M8 15h2"/>'),
 loc:ic('<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>'),
 api:ic('<polyline points="8 6 2 12 8 18"/><polyline points="16 6 22 12 16 18"/>'),
 feat:ic('<rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/>'),
 chan:ic('<path d="M3 9l1.5-5h15L21 9"/><path d="M4 9v11h16V9"/><path d="M9 20v-6h6v6"/>'),
 pay:ic('<rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/><line x1="6" y1="15" x2="10" y2="15"/>'),
 board:ic('<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" y1="8" x2="19" y2="14"/><line x1="22" y1="11" x2="16" y2="11"/>')
};
const chk='<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>';
const arr='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>';
const REG=[['US','United States'],['GB','United Kingdom'],['EU','Europe'],['CN','China'],['CA','Canada'],['JP','Japan'],['IN','India']];
const OTHER=['Australia','Brazil','Hong Kong','Mexico','New Zealand','Singapore','South Africa','United Arab Emirates'];
const FEAT={payments:['Card payments','Digital wallets','3DS authentication','Tokenization','Recurring billing','Fraud screening','Alternative payments','Payouts','Reporting'],boarding:['Merchant onboarding','KYC & underwriting','Account management','Pricing & fees']};
const Q=[
 {k:'size',rail:'Size of business',sub:'Scale & volume',icon:I.size,q:'What is the size of your business?',help:'We use this to recommend integrations that match your volume and team capacity.',type:'radio',opts:[['sm','Small to medium','Up to $10M annual volume'],['ml','Medium to large','$10M+ annual volume'],['all','Not sure yet','Show everything']]},
 {k:'regions',rail:'Business location',sub:'Where you trade',icon:I.loc,q:'Where are you doing business?',help:'Select every region where you have a physical or online presence. Not listed? Add it below.',type:'regions'},
 {k:'type',rail:'Type of API',sub:'Payments or boarding',icon:I.api,q:'What are you looking for?',help:'Payment APIs move money. Boarding APIs onboard and manage merchants on your platform.',type:'tiles',opts:[['payments','Payment APIs','Accept, authorize and settle payments',I.pay],['boarding','Boarding APIs','Onboard and manage sub-merchants',I.board]]},
 {k:'features',rail:'Features',sub:'Capabilities you need',icon:I.feat,q:'Which capabilities do you need?',help:'Pick as many as apply — we rank results by how many they cover.',type:'chips'},
 {k:'channel',rail:'Sales channel',sub:'Online, in-store or both',icon:I.chan,q:'How will you accept payments?',help:'This narrows results to APIs built for your checkout surface.',type:'radio',opts:[['online','Online','Web, app & eCommerce'],['instore','In-store','Terminals & POS'],['omni','Both','Unified omnichannel']]}
];
const ALL=['US','GB','EU','CN','CA','JP','IN','OTHER'];
const CAT=[
 {n:'Payments API',c:'Payments',d:'Authorize, settle and refund card and wallet payments through one modern REST API.',t:'payments',s:['sm','ml'],r:ALL,ch:['online','omni'],f:['Card payments','Digital wallets','3DS authentication','Tokenization','Recurring billing','Alternative payments']},
 {n:'Hosted Payment Pages',c:'Checkout',d:'A PCI-compliant, Worldpay-hosted checkout you can brand and embed in hours.',t:'payments',s:['sm'],r:['US','GB','EU','CA','OTHER'],ch:['online'],f:['Card payments','Digital wallets','Alternative payments','3DS authentication']},
 {n:'Checkout SDK',c:'Checkout',d:'Drop-in web, iOS and Android components that tokenize card data on the client.',t:'payments',s:['sm','ml'],r:ALL,ch:['online','omni'],f:['Card payments','Tokenization','Digital wallets']},
 {n:'3DS',c:'Authentication',d:'Strong customer authentication with frictionless flows and challenge fallback.',t:'payments',s:['sm','ml'],r:ALL,ch:['online','omni'],f:['3DS authentication','Fraud screening']},
 {n:'FraudSight',c:'Risk',d:'Machine-learning fraud scoring that plugs into authorization to cut false declines.',t:'payments',s:['ml'],r:['US','GB','EU','CA','OTHER'],ch:['online','instore','omni'],f:['Fraud screening']},
 {n:'Tokens API',c:'Payments',d:'Store payment credentials securely for one-click checkout and subscriptions.',t:'payments',s:['sm','ml'],r:ALL,ch:['online','instore','omni'],f:['Tokenization','Recurring billing']},
 {n:'Apple Pay & Google Pay',c:'Wallets',d:'Accept tokenized wallet payments with the same authorization payload.',t:'payments',s:['sm','ml'],r:['US','GB','EU','CA','JP','OTHER'],ch:['online','instore','omni'],f:['Digital wallets']},
 {n:'Alternative Payment Methods',c:'Payments',d:'Local methods like iDEAL, Alipay, UPI and Konbini through a single integration.',t:'payments',s:['sm','ml'],r:['EU','GB','CN','IN','JP','OTHER'],ch:['online'],f:['Alternative payments']},
 {n:'Account Payouts',c:'Payouts',d:'Push funds to bank accounts and cards in 50+ currencies.',t:'payments',s:['ml'],r:['US','GB','EU','CA','OTHER'],ch:['online','instore','omni'],f:['Payouts']},
 {n:'triPOS Cloud',c:'In-store',d:'Cloud-connected terminal API for semi-integrated, out-of-scope POS payments.',t:'payments',s:['sm','ml'],r:['US','CA'],ch:['instore','omni'],f:['Card payments','Digital wallets','Tokenization']},
 {n:'Payment Queries',c:'Reporting',d:'Search, reconcile and audit transactions and their event history.',t:'payments',s:['sm','ml'],r:ALL,ch:['online','instore','omni'],f:['Reporting']},
 {n:'Merchant Boarding API',c:'Boarding',d:'Create, submit and track merchant applications programmatically.',t:'boarding',s:['sm','ml'],r:['US','GB','EU','CA'],ch:['online','instore','omni'],f:['Merchant onboarding','KYC & underwriting']},
 {n:'Account Management API',c:'Boarding',d:'Update locations, bank details and settings for boarded merchants.',t:'boarding',s:['ml'],r:['US','GB','EU','CA'],ch:['online','instore','omni'],f:['Account management']},
 {n:'Pricing API',c:'Boarding',d:'Retrieve and assign pricing plans and fee schedules to sub-merchants.',t:'boarding',s:['ml'],r:['US','CA'],ch:['online','instore','omni'],f:['Pricing & fees']}
];
const KEY='fisApiFinder';
try{localStorage.removeItem(KEY)}catch(e){}
let st=null;
st=st||{step:0,a:{size:null,regions:[],other:[],type:null,features:[],channel:null},skip:[],done:false};
const save=()=>{};
const A=()=>st.a;
function answered(i){const k=Q[i].k,a=A();if(k==='regions')return a.regions.length+a.other.length>0;if(k==='features')return a.features.length>0;return !!a[k]}
function match(){const a=A();const regs=[...a.regions,...(a.other.length?['OTHER']:[])];
 return CAT.filter(x=>(!a.type||x.t===a.type)&&(!a.size||a.size==='all'||x.s.includes(a.size))&&(!regs.length||regs.some(r=>x.r.includes(r)))&&(!a.channel||x.ch.includes(a.channel)))
 .map(x=>{const hit=x.f.filter(f=>a.features.includes(f));const why=[];if(a.channel)why.push({online:'Online',instore:'In-store',omni:'Omnichannel'}[a.channel]);regs.filter(r=>x.r.includes(r)).slice(0,3).forEach(r=>why.push(r==='OTHER'?'Other regions':r));
  const fit=a.features.length?Math.round(60+40*hit.length/Math.max(1,Math.min(a.features.length,x.f.length))):80;return {...x,hit,why,fit}})
 .filter(x=>!a.features.length||x.hit.length).sort((p,q)=>q.fit-p.fit||q.hit.length-p.hit.length)}
function rail(){return Q.map((q,i)=>{const cur=!st.done&&i===st.step,done=st.done||i<st.step;return `<li><button class="af-step${cur?' cur':''}${done?' done':''}" data-go="${i}" ${done?'':'tabindex="-1"'}><span class="n">${done&&!cur?chk:i+1}</span><span class="t">${q.rail}<small>${done&&st.skip.includes(i)?'Skipped':q.sub}</small></span></button></li>`}).join('')}
function opts(q){const a=A();
 if(q.type==='radio')return `<div class="af-opts radios">${q.opts.map(o=>`<button class="af-opt" data-set="${o[0]}" aria-pressed="${a[q.k]===o[0]}"><span class="mk">${a[q.k]===o[0]?chk:''}</span><span class="l">${o[1]}</span><span class="d">${o[2]}</span></button>`).join('')}</div>`;
 if(q.type==='tiles')return `<div class="af-opts tiles">${q.opts.map(o=>`<button class="af-opt" data-set="${o[0]}" aria-pressed="${a[q.k]===o[0]}"><span class="mk">${a[q.k]===o[0]?chk:''}</span><span class="ic">${o[3]}</span><span class="l">${o[1]}</span><span class="d">${o[2]}</span></button>`).join('')}</div>`;
 if(q.type==='regions')return `<div class="af-opts regions">${REG.map(r=>{const on=a.regions.includes(r[0]);return `<button class="af-opt af-reg" data-reg="${r[0]}" aria-pressed="${on}"><span class="af-flag"><img src="https://flagcdn.com/w160/${r[0].toLowerCase()}.png" alt="" width="56" height="56">${on?`<i class="fchk">${chk}</i>`:''}</span><span class="l">${r[1]}</span></button>`}).join('')}</div>
  <div class="af-other"><label for="af-other">Other countries</label><select id="af-other"><option value="">Select a country…</option>${OTHER.filter(o=>!a.other.includes(o)).map(o=>`<option>${o}</option>`).join('')}</select>${a.other.length?`<div class="af-tags">${a.other.map(o=>`<span class="af-tag">${o}<button data-unother="${o}" aria-label="Remove ${o}"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button></span>`).join('')}</div>`:''}</div>`;
 const list=FEAT[a.type||'payments'];return `<div class="af-opts chips">${list.map(f=>{const on=a.features.includes(f);return `<button class="af-chip" data-feat="${f}" aria-pressed="${on}"><span class="mk">${on?chk:''}</span>${f}</button>`}).join('')}</div>`}
function body(){const i=st.step,q=Q[i];return `<div class="af-body"><div class="af-meta"><span class="n">Step 0${i+1}</span><span class="method-ghost get">${q.rail.toLowerCase()}</span></div><h3 class="af-q">${q.q}</h3><p class="af-help">${q.help}</p>${opts(q)}</div>
 <div class="af-foot"><button class="af-skip" data-act="skip">Skip</button><span class="sp"></span>${i>0?'<button class="btn btn-ghost" data-act="prev">Previous</button>':'<button class="btn btn-ghost" data-act="restart">Start again</button>'}<button class="btn btn-primary" data-act="next" ${answered(i)?'':'disabled'}>${i===Q.length-1?'See my APIs':'Next step'} ${arr}</button></div>`}
function label(i){const a=A(),k=Q[i].k;if(k==='regions'){const v=[...a.regions,...a.other];return v.length?v.join(', '):'Any'}if(k==='features')return a.features.length?a.features.length+' selected':'Any';const o=(Q[i].opts||[]).find(o=>o[0]===a[k]);return o?o[1]:'Any'}
function results(){const m=match();return `<div class="af-res"><div class="af-res-head"><div><span class="eyebrow">Your recommendations</span><h3 style="margin-top:10px"><b>${m.length}</b> API${m.length===1?'':'s'} match your business</h3><p>Ranked by how well each covers your selected capabilities.</p></div><div style="display:flex;gap:10px"><button class="btn btn-ghost btn-sm" data-act="restart">Start over</button><a class="btn btn-primary btn-sm" href="apis.html">Browse all APIs</a></div></div>
 <div class="af-sum">${Q.map((q,i)=>`<button data-go="${i}"><span>${q.rail}:</span> ${label(i)}</button>`).join('')}</div>
 ${m.length?`<div class="af-grid">${m.map((x,j)=>`<article class="af-card${j===0?' top':''}"><div class="row"><span class="cat">${j===0?'Best match · ':''}${x.c}</span><span class="fit">${x.fit}% fit</span></div><h4>${x.n}</h4><p>${x.d}</p><div class="why">${[...x.hit,...x.why].map(w=>`<span>${w}</span>`).join('')}</div><div class="acts"><a class="btn-link" href="reference.html">API reference <span class="arr">→</span></a><a class="btn-link" href="documentation.html">Guide <span class="arr">→</span></a></div></article>`).join('')}</div>`:`<div class="af-empty"><b style="color:var(--fg)">No exact matches.</b><br>Try removing a region or capability — or <a href="#">talk to our team</a>.</div>`}</div>`}
function render(){root.querySelector('.af-steps').innerHTML=rail();root.querySelector('.af-main').innerHTML=st.done?results():body();
 const n=match().length;root.querySelector('.af-count').innerHTML=`<b>${n}</b> matching API${n===1?'':'s'} so far`;save()}
function go(i){st.done=false;st.step=i;render()}
root.addEventListener('click',e=>{const t=e.target.closest('button');if(!t)return;const a=A(),q=Q[st.step];
 if(t.dataset.go!=null){const i=+t.dataset.go;if(st.done||i<st.step)go(i);return}
 if(t.dataset.set){a[q.k]=t.dataset.set;if(q.k==='type')a.features=a.features.filter(f=>FEAT[a.type].includes(f))}
 else if(t.dataset.reg){const r=t.dataset.reg;a.regions=a.regions.includes(r)?a.regions.filter(x=>x!==r):[...a.regions,r]}
 else if(t.dataset.feat){const f=t.dataset.feat;a.features=a.features.includes(f)?a.features.filter(x=>x!==f):[...a.features,f]}
 else if(t.dataset.unother){a.other=a.other.filter(x=>x!==t.dataset.unother)}
 else if(t.dataset.act){const act=t.dataset.act;
  if(act==='restart'){st={step:0,a:{size:null,regions:[],other:[],type:null,features:[],channel:null},skip:[],done:false,started:false}}
  else if(act==='prev')st.step=Math.max(0,st.step-1);
  else{st.skip=st.skip.filter(x=>x!==st.step);if(act==='skip'){st.skip.push(st.step);const k=q.k;a[k]=Array.isArray(a[k])?[]:null;if(k==='regions')a.other=[]}
   if(st.step===Q.length-1)st.done=true;else st.step++}}
 else return;render();if(!st.started)show()});
root.addEventListener('change',e=>{if(e.target.id==='af-other'&&e.target.value){A().other.push(e.target.value);render()}});
const intro=document.getElementById('af-intro');
function show(){intro.hidden=!!st.started;root.hidden=!st.started}
intro.querySelector('.af-start').addEventListener('click',()=>{st.started=true;save();show()});
show();render();
})();
