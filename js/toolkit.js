/* Toolkit sticker pile */
(()=>{const el=document.getElementById('tkPile');if(!el)return;
const T=[['Figma Make','figma','Make'],['Claude','claude'],['Gemini','googlegemini'],['Framer','framer'],['Miro','miro'],['ChatGPT','openai']];
const src=s=>s==='openai'?'https://cdn.jsdelivr.net/npm/simple-icons@13.0.0/icons/openai.svg':'https://cdn.simpleicons.org/'+s;
const P=[[.2,.46,7],[.36,.04,-5],[.52,.4,6],[.74,.06,9],[.9,.5,-6],[.06,.9,5],[.62,.92,-7]];
const S=()=>el.querySelector('.tk-s')?.offsetWidth||76;
T.forEach(([n,s,b],i)=>{const e=document.createElement('div');e.className='tk-s';e.dataset.cursor='Drag';const [x,y,r]=P[i];e.dataset.x=x;e.dataset.y=y;e.dataset.r=r;e.style.transform='rotate('+r+'deg)';e.innerHTML='<img src="'+src(s)+'" alt="'+n+'" draggable="false">'+(b?'<em>'+b+'</em>':'')+'<i>'+n+'</i>';el.append(e);
 e.addEventListener('pointerenter',()=>{if(!e.classList.contains('drag'))e.style.transform='rotate(0deg) scale(1.08)'});
 e.addEventListener('pointerleave',()=>{if(!e.classList.contains('drag'))e.style.transform='rotate('+e.dataset.r+'deg)'});
 e.addEventListener('pointerdown',ev=>{ev.preventDefault();e.setPointerCapture(ev.pointerId);e.classList.add('drag');el.append(e);
  const R=el.getBoundingClientRect(),sz=S(),ox=ev.clientX-e.offsetLeft,oy=ev.clientY-e.offsetTop;let lx=ev.clientX;
  const mv=m=>{const x=Math.max(0,Math.min(R.width-sz,m.clientX-ox)),y=Math.max(0,Math.min(R.height-sz,m.clientY-oy));e.dataset.x=x/(R.width-sz||1);e.dataset.y=y/(R.height-sz||1);place(e);const v=Math.max(-18,Math.min(18,(m.clientX-lx)*1.5));lx=m.clientX;e.style.transform='rotate('+v+'deg) scale(1.12)'};
  const up=()=>{e.classList.remove('drag');const r=Math.round(Math.random()*16-8);e.dataset.r=r;e.style.transform='rotate('+r+'deg)';e.removeEventListener('pointermove',mv);e.removeEventListener('pointerup',up);e.removeEventListener('pointercancel',up)};
  e.addEventListener('pointermove',mv);e.addEventListener('pointerup',up);e.addEventListener('pointercancel',up)})});
function place(e){const sz=S(),w=el.clientWidth-sz,h=el.clientHeight-sz;e.style.left=(+e.dataset.x*w)+'px';e.style.top=(+e.dataset.y*h)+'px'}
const all=()=>el.querySelectorAll('.tk-s').forEach(place);all();addEventListener('resize',all);
})();
