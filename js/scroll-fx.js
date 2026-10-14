/* Scroll interactions: word-by-word headline scrub, card clip + zoom, route drift */
(()=>{
if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;
const clamp=(v,a=0,b=1)=>Math.max(a,Math.min(b,v));
function split(el){
  const walk=n=>{[...n.childNodes].forEach(c=>{
    if(c.nodeType===3){const f=document.createDocumentFragment();c.textContent.split(/(\s+)/).forEach(p=>{if(!p)return;if(/^\s+$/.test(p))f.append(p);else{const s=document.createElement('span');s.className='sw-word';s.textContent=p;f.append(s)}});c.replaceWith(f)}
    else if(c.nodeType===1&&!c.classList.contains('sw-word'))walk(c)})};
  walk(el);return[...el.querySelectorAll('.sw-word')];
}
const heads=[...document.querySelectorAll('#work h2,#experience h2,#skills h2,#about h2,#contact h2')].map(el=>({el,w:split(el)}));
const cards=[...document.querySelectorAll('.case')].map(el=>({el,m:el.querySelector('.case-media'),img:el.querySelector('.case-media img')}));
const route=document.querySelector('.route-list');
let ticking=false;
function update(){
  ticking=false;const vh=innerHeight;
  heads.forEach(({el,w})=>{const r=el.getBoundingClientRect(),p=clamp((vh*.88-r.top)/(vh*.42));const n=Math.round(p*w.length);w.forEach((s,i)=>s.classList.toggle('lit',i<n))});
  cards.forEach(({el,m,img})=>{const r=el.getBoundingClientRect();if(r.bottom<0||r.top>vh)return;const p=clamp((vh-r.top)/(vh*.7));
    if(m)m.style.setProperty('--clip',((1-p)*7).toFixed(2)+'%');if(img)img.style.transform=`scale(${(1.14-.14*p).toFixed(3)})`});
  if(route){const r=route.getBoundingClientRect();if(r.bottom>0&&r.top<vh){const p=(r.top+r.height/2)/vh-.5;route.style.transform=`translateX(${(p*60).toFixed(1)}px)`}}
}
const req=()=>{if(!ticking){ticking=true;requestAnimationFrame(update)}};
addEventListener('scroll',req,{passive:true});addEventListener('resize',req);update();
})();
