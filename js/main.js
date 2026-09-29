/* ============================================================
   Niyati Trivedi — Portfolio · main.js
   Scroll reveals · parallax · magnetic buttons · counters · nav
   No requestAnimationFrame (this preview freezes rAF + CSS
   transitions); everything is driven by scroll + setTimeout, with
   freeze-detection that drops the .anim gate so content is never
   left hidden.
   ============================================================ */
(function () {
  'use strict';
  const root = document.documentElement;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---- Duplicate marquee for a seamless loop ---- */
  const mq = document.getElementById('marquee');
  if (mq) { mq.innerHTML += mq.innerHTML; }

  /* ---- Elements ---- */
  const progress = document.getElementById('progress');
  const nav = document.getElementById('nav');
  let reveals = Array.from(document.querySelectorAll('.reveal'));
  let counters = Array.from(document.querySelectorAll('[data-count]'));
  const parallaxEls = Array.from(document.querySelectorAll('[data-parallax] img'));
  const sections = ['work', 'experience', 'skills', 'about', 'contact']
    .map(id => document.getElementById(id)).filter(Boolean);
  const navMap = {};
  document.querySelectorAll('.nav-links a').forEach(a => {
    const id = a.getAttribute('href').slice(1); if (id) navMap[id] = a;
  });

  if (reduce) { root.classList.remove('anim'); }

  /* ---- Counters (setTimeout-driven; rAF is frozen here) ---- */
  function setCount(el, val) {
    const out = val + (el.dataset.suffix || '');
    const em = el.querySelector('em');
    if (em) em.textContent = out; else el.textContent = out;
  }
  function animateCount(el) {
    if (el.dataset.done) return; el.dataset.done = '1';
    const target = parseFloat(el.dataset.count);
    const dur = 1300, steps = 34, t0 = Date.now();
    (function tick() {
      const p = Math.min((Date.now() - t0) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(el, Math.round(target * eased));
      if (p < 1) setTimeout(tick, dur / steps);
    })();
  }

  /* ---- Core scroll/update pass ---- */
  function update() {
    const st = root.scrollTop || document.body.scrollTop || window.pageYOffset || 0;
    const vh = window.innerHeight;
    const max = root.scrollHeight - root.clientHeight;

    if (progress) progress.style.width = (max > 0 ? st / max * 100 : 0) + '%';
    if (nav) nav.classList.toggle('scrolled', st > 12);

    for (let i = reveals.length - 1; i >= 0; i--) {
      const el = reveals[i];
      if (el.getBoundingClientRect().top < vh * 0.92) { el.classList.add('in'); reveals.splice(i, 1); }
    }
    for (let i = counters.length - 1; i >= 0; i--) {
      const el = counters[i];
      if (el.getBoundingClientRect().top < vh * 0.85) { animateCount(el); counters.splice(i, 1); }
    }

    parallaxEls.forEach(img => {
      const r = img.getBoundingClientRect();
      if (r.bottom < 0 || r.top > vh) return;
      const off = (r.top + r.height / 2 - vh / 2) / vh;
      img.style.transform = 'translateY(' + (off * -26).toFixed(2) + 'px)';
    });

    let active = null;
    sections.forEach(s => {
      const r = s.getBoundingClientRect();
      if (r.top <= vh * 0.5 && r.bottom >= vh * 0.5) active = s.id;
    });
    Object.entries(navMap).forEach(([id, a]) => { a.style.color = (id === active) ? 'var(--ink)' : ''; });
  }

  /* throttle without rAF */
  let scheduled = false;
  function onScroll() {
    if (scheduled) return; scheduled = true;
    setTimeout(() => { scheduled = false; update(); }, 70);
  }
  document.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);

  // initial passes (covers late font/layout reflow)
  update();
  [120, 400, 900].forEach(ms => setTimeout(update, ms));

  /* ---- Freeze detection ----
     If transitions don't advance (compositor frozen), a revealed
     element stays stuck at opacity 0 even after the .anim rule is
     gone — an already-started transition keeps the frozen value.
     So we also clear `transition` inline, which cancels it and lets
     the visible-by-default base styles take over. In a normal
     browser the sample is mid-transition (opacity > 0) so we leave
     the animation untouched. */
  function unfreeze() {
    root.classList.remove('anim');
    document.querySelectorAll('.reveal').forEach(el => { el.style.transition = 'none'; el.classList.add('in'); });
  }
  function checkFreeze() {
    if (!root.classList.contains('anim')) return;
    const sample = document.querySelector('.reveal.in');
    if (sample && parseFloat(getComputedStyle(sample).opacity) < 0.05) unfreeze();
  }
  setTimeout(checkFreeze, 450);
  setTimeout(checkFreeze, 900);

  // hard failsafe: never leave anything hidden
  setTimeout(() => {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('in'));
    const s = document.querySelector('.reveal');
    if (s && parseFloat(getComputedStyle(s).opacity) < 0.05) unfreeze();
    counters.forEach(animateCount); counters = [];
  }, 2600);

  /* ---- Mobile menu ---- */
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  if (toggle && links) {
    toggle.addEventListener('click', () => links.classList.toggle('open'));
    links.addEventListener('click', (e) => { if (e.target.tagName === 'A') links.classList.remove('open'); });
  }

  /* ---- Magnetic buttons ---- */
  if (!reduce && window.matchMedia('(pointer:fine)').matches) {
    document.querySelectorAll('[data-magnetic]').forEach(btn => {
      const strength = 0.32;
      btn.addEventListener('mousemove', (e) => {
        const r = btn.getBoundingClientRect();
        const x = e.clientX - (r.left + r.width / 2);
        const y = e.clientY - (r.top + r.height / 2);
        btn.style.transform = 'translate(' + (x * strength).toFixed(1) + 'px,' + (y * strength).toFixed(1) + 'px)';
      });
      btn.addEventListener('mouseleave', () => { btn.style.transform = 'translate(0,0)'; });
    });
  }
})();
