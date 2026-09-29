/* Shared portfolio nav bar — injected on case-study pages */
(function () {
  var s = document.currentScript;
  var HOME = (s && s.getAttribute('data-home')) || '../../index.html';
  var RESUME = (s && s.getAttribute('data-resume')) || '../../uploads/Niyati-Trivedi-Resume.pdf';
  var LINKS = [['work','Work'],['experience','Experience'],['skills','Skills'],['about','About'],['contact','Contact']];

  var CS = s && s.getAttribute('data-cs');
  if (CS && document.body) document.body.setAttribute('data-cs', CS);
  var frame = document.createElement('link');
  frame.rel = 'stylesheet';
  frame.href = new URL('portfolio-frame.css', s.src).href;
  document.head.appendChild(frame);
  var css = document.createElement('style');
  css.textContent = [
    "@import url('https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600&display=swap');",
    ":root{--pfbar-h:62px}",
    "body{padding-top:var(--pfbar-h)!important}",
    "body>nav:not(.pfbar-links),#root>nav:not(.pfbar-links){top:var(--pfbar-h)!important}",
    ".pfbar,.pfbar *{position:static;box-sizing:border-box;margin:0;float:none}",
    ".pfbar{position:fixed!important;top:0;left:0;right:0;z-index:500;height:var(--pfbar-h);display:flex;align-items:center;background:color-mix(in oklab,#fcfcfa 88%,transparent);backdrop-filter:saturate(1.4) blur(14px);-webkit-backdrop-filter:saturate(1.4) blur(14px);border-bottom:1px solid rgba(20,24,22,.09);font-family:'General Sans','Inter Tight',system-ui,sans-serif}",
    ".pfbar-inner{width:100%;max-width:1280px;margin:0 auto;padding:0 clamp(20px,4vw,48px);display:flex;align-items:center;justify-content:space-between;gap:24px}",
    ".pfbar-brand{display:inline-flex;align-items:center;gap:11px;text-decoration:none;color:#141816;flex:none}",
    ".pfbar-brand svg{height:28px;width:auto;display:block;color:#57d400;transition:transform .4s cubic-bezier(.22,1.3,.36,1)}",
    ".pfbar-brand:hover svg{transform:translateX(-3px) rotate(-6deg)}",
    ".pfbar-brand b{font-weight:500;font-size:.98rem;letter-spacing:-.01em;white-space:nowrap}",
    ".pfbar-brand b span{color:#6b716d;font-weight:500}",
    ".pfbar-links{position:static!important;top:auto!important;left:auto!important;right:auto!important;background:none!important;border:0!important;padding:0!important;height:auto!important;width:auto!important;z-index:auto!important;box-shadow:none!important;backdrop-filter:none!important;display:flex!important;align-items:center;justify-content:flex-end;gap:4px}",
    ".pfbar-links a{font-size:.9rem;font-weight:500;color:#5c625e;text-decoration:none;padding:8px 13px;border-radius:999px;transition:color .2s,background .2s}",
    ".pfbar-links a:hover{color:#141816;background:#f1f2ee}",
    ".pfbar-cta{display:inline-flex;align-items:center;gap:8px;font-size:.88rem;font-weight:500;color:#141816;text-decoration:none;padding:9px 16px;border-radius:999px;border:1px solid rgba(20,24,22,.16);transition:background .2s,border-color .2s}",
    ".pfbar-cta svg{width:15px;height:15px}",
    ".pfbar-cta:hover{background:#141816;color:#fcfcfa;border-color:#141816}",
    "@media(max-width:900px){.pfbar-links{display:none}}",
    "@media(max-width:560px){.pfbar-brand b span{display:none}}"
  ].join('');
  document.head.appendChild(css);

  var el = document.createElement('header');
  el.className = 'pfbar';
  el.innerHTML = '<div class="pfbar-inner">' +
    '<a class="pfbar-brand" href="' + HOME + '" aria-label="Niyati Trivedi — back to portfolio home">' +
      '<svg viewBox="0 0 48 76" fill="currentColor" aria-hidden="true"><circle cx="36" cy="13" r="12"/><circle cx="36" cy="38" r="12"/><circle cx="12" cy="38" r="12"/><circle cx="12" cy="63" r="12"/></svg>' +
      '<b>Niyati Trivedi</b>' +
    '</a>' +
    '<div class="pfbar-links">' +
      LINKS.map(function (l) { return '<a href="' + HOME + '#' + l[0] + '">' + l[1] + '</a>'; }).join('') +
    '</div>' +
    '<a class="pfbar-cta" href="' + RESUME + '" download>Résumé' +
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14"/></svg>' +
    '</a>' +
  '</div>';
  (document.body || document.documentElement).appendChild(el);

  var BASE = HOME.replace(/[^\/]*$/, '');
  var sc = document.createElement('style');
  sc.textContent = ".pfnote{padding:clamp(48px,7vw,88px) clamp(20px,4vw,48px);background:#fcfcfa;border-top:1px solid rgba(20,24,22,.09);font-family:'General Sans','Inter Tight',system-ui,sans-serif;color:#141816}" +
    ".pfnote-in{max-width:720px;margin:0 auto;display:grid;grid-template-columns:72px 1fr;gap:22px;align-items:start}" +
    ".pfnote img{width:72px;height:72px;border-radius:50%;object-fit:cover;object-position:50% 22%;display:block}" +
    ".pfnote-k{font-size:.8rem;color:#5c625e;margin:0 0 6px}" +
    ".pfnote p.pfnote-t{font-size:1.12rem;line-height:1.55;margin:0;text-wrap:pretty;color:#141816;max-width:none}" +
    ".pfnote-a{display:flex;flex-wrap:wrap;gap:10px;margin-top:18px}" +
    ".pfnote-a a{display:inline-flex;align-items:center;height:44px;padding:0 18px;border-radius:999px;font-size:.92rem;font-weight:500;text-decoration:none;color:#141816;border:1px solid rgba(20,24,22,.18)}" +
    ".pfnote-a a:first-child{background:#141816;color:#fcfcfa;border-color:#141816}" +
    ".pfnote-a a:hover{border-color:#141816}" +
    "@media(max-width:520px){.pfnote-in{grid-template-columns:1fr}}";
  document.head.appendChild(sc);
  var NOTE = (s && s.getAttribute('data-note')) || "Thanks for reading this far. Case studies smooth things out \u2014 the real version had more dead ends. I'm happy to talk through any of them.";
  var note = document.createElement('aside');
  note.className = 'pfnote';
  note.setAttribute('aria-label', 'A note from Niyati');
  note.innerHTML = '<div class="pfnote-in"><img src="' + BASE + 'uploads/hero-portrait.png" alt="Niyati Trivedi" />' +
    '<div><p class="pfnote-k">A note from Niyati \u00b7 written September 2026</p><p class="pfnote-t">' + NOTE + '</p>' +
    '<div class="pfnote-a"><a href="mailto:niyatitrivedi2289@gmail.com">Email me</a><a href="https://calendly.com/niyatitrivedi2289/catchup-with-niyati" target="_blank" rel="noopener">Book a call</a><a href="' + HOME + '#work">More work</a></div></div></div>';
  var foot = document.createElement('footer');
  foot.className = 'pffoot';
  foot.innerHTML = '<div class="pffoot-in"><a class="pffoot-brand" href="' + HOME + '"><svg viewBox="0 0 48 76" fill="currentColor" aria-hidden="true"><circle cx="36" cy="13" r="12"/><circle cx="36" cy="38" r="12"/><circle cx="12" cy="38" r="12"/><circle cx="12" cy="63" r="12"/></svg>Niyati Trivedi</a>' +
    '<p>Designed and built by me in London \u00b7 Set in General Sans &amp; Switzer \u00b7 Last updated September 2026</p>' +
    '<a class="pffoot-up" href="#top">Back to top<span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" width="16" height="16"><path d="M12 19V5m0 0-6 6m6-6 6 6"/></svg></span></a></div>';
  function place() {
    var nx = document.querySelector('.nextcase, .hx-next');
    if (nx) nx.parentNode.insertBefore(note, nx); else document.body.appendChild(note);
    document.body.appendChild(foot);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', place); else place();
})();
