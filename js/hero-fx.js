/* Hero dot field + custom cursor + hover previews */
(()=>{
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches,fine=matchMedia('(pointer:fine)').matches;
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
const sec=document.getElementById('hero');
if(sec){
  const cv=document.createElement('canvas');cv.className='hero-dots';sec.prepend(cv);
  const ctx=cv.getContext('2d'),pf=sec.querySelector('.portrait-frame');
  let W=0,H=0,dots=[],m={x:-999,y:-999},rip=[],last=0,idle=0,vis=true;
  const size=()=>{const r=sec.getBoundingClientRect(),d=devicePixelRatio||1;W=r.width;H=r.height;cv.width=W*d;cv.height=H*d;cv.style.width=W+'px';cv.style.height=H+'px';ctx.setTransform(d,0,0,d,0,0);dots=[];for(let y=12;y<H;y+=24)for(let x=12;x<W;x+=24)dots.push(x,y);if(reduce)draw()};
  const pos=e=>{const r=sec.getBoundingClientRect();return{x:e.clientX-r.left,y:e.clientY-r.top}};
  sec.addEventListener('pointermove',e=>{m=pos(e);idle=0;if(pf&&fine&&!reduce){const r=pf.getBoundingClientRect(),dx=(e.clientX-r.left-r.width/2)/innerWidth,dy=(e.clientY-r.top-r.height/2)/innerHeight;pf.style.transform=`rotateY(${dx*14}deg) rotateX(${-dy*12}deg)`}});
  sec.addEventListener('pointerleave',()=>{m={x:-999,y:-999};if(pf)pf.style.transform=''});
  sec.addEventListener('pointerdown',e=>{if(!e.target.closest('a,button'))rip.push({...pos(e),t:0})});
  new IntersectionObserver(es=>vis=es[0].isIntersecting).observe(sec);
  function draw(){
    ctx.clearRect(0,0,W,H);ctx.fillStyle='rgba(17,17,17,.12)';ctx.beginPath();const hot=[];
    for(let i=0;i<dots.length;i+=2){const x=dots[i],y=dots[i+1],dx=x-m.x,dy=y-m.y,d=Math.hypot(dx,dy),f=Math.max(0,1-d/160);let rf=0;
      for(const r of rip){const dd=Math.abs(Math.hypot(x-r.x,y-r.y)-r.t*.42);rf+=Math.max(0,1-dd/30)*(1-r.t/2600)}
      const k=Math.min(1,f*f+rf*.9);if(k<.04){ctx.moveTo(x+1.2,y);ctx.arc(x,y,1.2,0,7)}else{const p=f*f*16;hot.push(x+(d?dx/d*p:0),y+(d?dy/d*p:0),k)}}
    ctx.fill();for(let i=0;i<hot.length;i+=3){const k=hot[i+2];ctx.fillStyle=`rgba(87,212,0,${.35+k*.65})`;ctx.beginPath();ctx.arc(hot[i],hot[i+1],1.2+k*3.4,0,7);ctx.fill()}
  }
  function frame(now){const dt=Math.min(50,now-(last||now));last=now;requestAnimationFrame(frame);if(!vis)return;
    rip.forEach(r=>r.t+=dt);rip=rip.filter(r=>r.t<2600);draw()}
  addEventListener('resize',size);size();
  if(!reduce)requestAnimationFrame(frame);
}
if(!fine||reduce)return;
document.body.classList.add('cc-on');
const ring=document.createElement('div'),dot=document.createElement('div'),prev=document.createElement('div');
ring.className='cring';ring.innerHTML='<i><span></span></i>';dot.className='cdot';prev.className='cprev';prev.innerHTML='<img alt="">';
document.body.append(prev,ring,dot);
const lab=ring.querySelector('span'),pimg=prev.querySelector('img');
[['.case','View'],['.hero-portrait','Hi!'],['.nav-cta-resume','Download'],['a[href^="mailto:"]','Say hi'],['a[href*="calendly"]','Book']].forEach(([s,t])=>document.querySelectorAll(s).forEach(e=>{if(!e.dataset.cursor)e.dataset.cursor=t}));
let mx=0,my=0,rx=0,ry=0,px=0,py=0,lx=0;
addEventListener('pointermove',e=>{mx=e.clientX;my=e.clientY;dot.style.transform=`translate(${mx}px,${my}px)`;if(!document.body.classList.contains('moved')){rx=px=lx=mx;ry=py=my;document.body.classList.add('moved')}});
addEventListener('pointerdown',()=>ring.classList.add('down'));addEventListener('pointerup',()=>ring.classList.remove('down'));
document.addEventListener('mouseleave',()=>ring.classList.add('hide'));
document.addEventListener('pointerover',e=>{const t=e.target,pv=t.closest('[data-prev]'),lb=t.closest('[data-cursor]');ring.className='cring';
  document.body.classList.toggle('cc-dark',!!t.closest('[data-theme="dark"]'));
  if(pv){pimg.src=pv.dataset.prev;prev.classList.add('show');ring.classList.add('hide');return}prev.classList.remove('show');
  if(lb){lab.textContent=lb.dataset.cursor;ring.classList.add('lbl')}else if(t.closest('a,button,input,label,[role="button"]'))ring.classList.add('link')});
(function loop(){rx+=(mx-rx)*.2;ry+=(my-ry)*.2;px+=(mx-px)*.12;py+=(my-py)*.12;const v=clamp((mx-lx)*.6,-12,12);lx+=(mx-lx)*.2;
  ring.style.transform=`translate(${rx}px,${ry}px)`;prev.style.left=px+'px';prev.style.top=py+'px';prev.style.setProperty('--tilt',v+'deg');requestAnimationFrame(loop)})();
})();

/* rotating handwritten facts under the portrait */
(()=>{const host=document.querySelector('#hero .hero-portrait');if(!host)return;
const box=document.createElement('p');box.className='hero-facts';box.setAttribute('aria-live','polite');host.append(box);
const F=[
 {h:'I started designing when I was 17.'},
 {h:'I hail from Ahmedabad, India.'},
 {h:'I\'m a mum of two young boys.'},
 {love:['madly','deeply','passionately']}];
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;let i=0;
const wait=ms=>new Promise(r=>setTimeout(r,ms));
async function write(html){box.classList.remove('in');await wait(reduce?0:350);box.innerHTML=html;void box.offsetWidth;box.classList.add('in')}
async function run(){for(;;){const f=F[i++%F.length];
 if(f.h){await write(f.h);await wait(3600);continue}
 await write('I\'m <span class="hf-slot"></span> in love with design.');const slot=box.querySelector('.hf-slot');
 for(let k=0;k<f.love.length;k++){const w=document.createElement('span');w.className='hf-w';w.textContent=f.love[k];slot.append(w,' ');
   await wait(reduce?0:40);w.classList.add('on');await wait(1300);
   if(k<f.love.length-1){w.classList.add('struck');await wait(650)}}
 await wait(3200)}}
run()})();
