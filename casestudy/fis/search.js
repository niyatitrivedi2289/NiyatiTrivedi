/* =========================================================
   Shared search behavior — used on every product page.
   Builds the overlay on demand, wires filter toggling, and
   hands the query off to search-results.html on submit.
   ========================================================= */
(function () {
  const STORAGE_KEY = 'fisDevSearch';

  // ---------- Filter schema ----------
  const FILTER_GROUPS = [
    {
      id: 'size', label: 'Business Size', type: 'radio',
      options: [
        { id: 'all',    label: 'All' },
        { id: 'sm',     label: 'Small–Medium' },
        { id: 'large',  label: 'Large' },
      ],
    },
    {
      id: 'region', label: 'Business Location', type: 'radio',
      options: [
        { id: 'uk',     label: 'UK Domestic' },
        { id: 'us',     label: 'US Domestic' },
        { id: 'global', label: 'Global' },
      ],
    },
    {
      id: 'payment', label: 'Payment Method', type: 'checkbox', twoCol: true,
      options: [
        { id: 'mc',     label: 'Mastercard' },
        { id: 'apay',   label: 'Apple Pay' },
        { id: 'visa',   label: 'Visa' },
        { id: 'gpay',   label: 'Google Pay' },
        { id: 'amex',   label: 'Amex' },
        { id: 'pp',     label: 'PayPal' },
        { id: 'diners', label: 'Diners' },
        { id: 'spay',   label: 'Samsung Pay' },
      ],
    },
    {
      id: 'features', label: 'Features', type: 'checkbox', twoCol: true,
      options: [
        { id: 'pbe',    label: 'Pay by Email' },
        { id: 'rec',    label: 'Recurring Payments' },
        { id: 'pbp',    label: 'Pay by Phone' },
        { id: 'notif',  label: 'Additional Notifications' },
        { id: 'tok',    label: 'Tokenisation' },
        { id: 'risk',   label: 'Risk' },
        { id: '3ds',    label: '3-D Secure' },
      ],
    },
  ];

  // ---------- State ----------
  function loadState() {
    let s = { q: '', filters: {} };
    try {
      const raw = sessionStorage.getItem(STORAGE_KEY);
      if (raw) s = Object.assign(s, JSON.parse(raw));
    } catch (_) {}
    if (!s.filters || typeof s.filters !== 'object') s.filters = {};
    return s;
  }
  function saveState(s) {
    try { sessionStorage.setItem(STORAGE_KEY, JSON.stringify(s)); } catch (_) {}
  }
  function lookupOptionLabel(groupId, optionId) {
    const g = FILTER_GROUPS.find(g => g.id === groupId);
    if (!g) return optionId;
    const o = g.options.find(o => o.id === optionId);
    return o ? o.label : optionId;
  }

  // ---------- Overlay HTML ----------
  function buildOverlay() {
    const overlay = document.createElement('div');
    overlay.className = 'search-overlay';
    overlay.setAttribute('role', 'search');
    overlay.innerHTML = `
      <div class="search-bar">
        <div class="brand-stub">
          <span class="brand-worldpay">Worldpay</span>
          <span class="brand-from" style="margin-left: 8px;">
            <span class="brand-from-label">from</span>
            <span class="brand-fis-text">FIS</span>
          </span>
        </div>
        <div class="search-input-wrap">
          <input type="text" class="search-input" placeholder="Type your keywords here…" aria-label="Search developer hub" autocomplete="off" />
          <button type="button" class="clear-input" aria-label="Clear search">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>
        <div class="search-controls">
          <button type="button" class="search-filters-toggle" aria-expanded="false">
            <span class="label">Filters</span>
            <span class="count-badge" hidden>0</span>
            <svg class="caret" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
          </button>
          <button type="button" class="search-close" aria-label="Close search">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
          <button type="button" class="search-submit" aria-label="Search">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          </button>
        </div>
      </div>
      <div class="search-filters">
        <div class="search-filters-meta">
          <div class="active-chips" aria-live="polite"></div>
          <button type="button" class="search-reset">Reset Filters</button>
        </div>
        ${FILTER_GROUPS.map(g => `
          <div class="filter-group" data-group="${g.id}">
            <h4>${g.label}</h4>
            <div class="filter-options ${g.twoCol ? 'two-col' : ''}">
              ${g.options.map(o => `
                <label>
                  <input type="${g.type}" name="${g.id}" value="${o.id}" />
                  ${g.type === 'radio'
                    ? '<span class="radio"></span>'
                    : '<span class="box"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>'
                  }
                  <span class="lbl">${o.label}</span>
                </label>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    `;
    return overlay;
  }

  // ---------- Controller ----------
  function mount(opts) {
    opts = opts || {};
    const pinned = !!opts.pinned;

    const overlay = buildOverlay();
    if (pinned) {
      overlay.setAttribute('data-pinned', 'true');
      overlay.classList.add('open'); // filters stay collapsed by default
    }

    let backdrop;
    if (!pinned) {
      backdrop = document.createElement('div');
      backdrop.className = 'search-backdrop';
      document.body.appendChild(backdrop);
    }
    if (pinned) {
      // Pinned mode (search-results.html): insert directly after <header.nav>
      // so position:sticky resolves against the document, not the footer.
      const nav = document.querySelector('header.nav');
      if (nav && nav.parentNode) nav.parentNode.insertBefore(overlay, nav.nextSibling);
      else document.body.insertBefore(overlay, document.body.firstChild);
    } else {
      document.body.appendChild(overlay);
    }

    const input        = overlay.querySelector('.search-input');
    const inputWrap    = overlay.querySelector('.search-input-wrap');
    const clearBtn     = overlay.querySelector('.clear-input');
    const filtersBtn   = overlay.querySelector('.search-filters-toggle');
    const closeBtn     = overlay.querySelector('.search-close');
    const submitBtn    = overlay.querySelector('.search-submit');
    const resetBtn     = overlay.querySelector('.search-reset');
    const chipsRow     = overlay.querySelector('.active-chips');
    const countBadge   = filtersBtn.querySelector('.count-badge');

    // ----- State -----
    const state = loadState();
    input.value = state.q || '';
    if (state.q) inputWrap.classList.add('has-value');

    function isChecked(group, value) {
      const f = state.filters[group];
      if (!f) return false;
      return Array.isArray(f) ? f.includes(value) : f === value;
    }
    function renderChecks() {
      overlay.querySelectorAll('.filter-options input').forEach(i => {
        i.checked = isChecked(i.name, i.value);
      });
    }
    function activeFilterEntries() {
      const out = [];
      Object.keys(state.filters || {}).forEach(group => {
        const v = state.filters[group];
        if (!v) return;
        if (Array.isArray(v)) v.forEach(opt => out.push([group, opt]));
        else out.push([group, v]);
      });
      return out;
    }
    function renderChips() {
      const entries = activeFilterEntries();
      chipsRow.innerHTML = entries.map(([g, o]) => `
        <span class="filter-chip" data-group="${g}" data-opt="${o}">
          ${lookupOptionLabel(g, o)}
          <button type="button" aria-label="Remove filter">×</button>
        </span>
      `).join('');
      countBadge.textContent = entries.length;
      countBadge.hidden = entries.length === 0;
    }

    renderChecks();
    renderChips();

    // ----- Open / close (non-pinned) -----
    function open() {
      if (pinned) return;
      overlay.classList.add('open');
      backdrop.classList.add('visible');
      document.body.style.overflow = 'hidden';
      setTimeout(() => input.focus(), 60);
    }
    function close() {
      if (pinned) return;
      overlay.classList.remove('open', 'filters-open');
      filtersBtn.setAttribute('aria-expanded', 'false');
      backdrop.classList.remove('visible');
      document.body.style.overflow = '';
    }

    // ----- Wire events -----
    input.addEventListener('input', () => {
      state.q = input.value;
      inputWrap.classList.toggle('has-value', !!input.value);
      saveState(state);
    });
    clearBtn.addEventListener('click', () => {
      input.value = '';
      state.q = '';
      inputWrap.classList.remove('has-value');
      saveState(state);
      input.focus();
    });

    filtersBtn.addEventListener('click', () => {
      const open = overlay.classList.toggle('filters-open');
      filtersBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    closeBtn.addEventListener('click', () => {
      if (pinned) {
        // On the results page, close button just navigates to landing
        window.location.href = 'landing.html';
      } else {
        close();
      }
    });

    if (!pinned) {
      backdrop.addEventListener('click', close);
      document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && overlay.classList.contains('open')) close();
        if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
          e.preventDefault();
          open();
        }
      });
    }

    overlay.querySelectorAll('.filter-options input').forEach(inp => {
      inp.addEventListener('change', e => {
        const { name, value, type, checked } = e.target;
        if (type === 'radio') {
          state.filters[name] = checked ? value : null;
        } else {
          const list = Array.isArray(state.filters[name]) ? state.filters[name].slice() : [];
          const idx = list.indexOf(value);
          if (checked && idx < 0) list.push(value);
          if (!checked && idx >= 0) list.splice(idx, 1);
          state.filters[name] = list;
        }
        saveState(state);
        renderChips();
      });
    });

    chipsRow.addEventListener('click', e => {
      const chip = e.target.closest('.filter-chip');
      if (!chip) return;
      const g = chip.dataset.group, o = chip.dataset.opt;
      const f = state.filters[g];
      if (Array.isArray(f)) state.filters[g] = f.filter(x => x !== o);
      else if (f === o) state.filters[g] = null;
      saveState(state);
      renderChecks();
      renderChips();
      if (pinned && window.fisSearchRender) window.fisSearchRender();
    });

    resetBtn.addEventListener('click', () => {
      state.filters = {};
      saveState(state);
      renderChecks();
      renderChips();
      if (pinned && window.fisSearchRender) window.fisSearchRender();
    });

    function submit() {
      saveState(state);
      const url = new URL('search-results.html', window.location.href);
      if (state.q) url.searchParams.set('q', state.q);
      window.location.href = url.toString();
    }

    submitBtn.addEventListener('click', submit);
    input.addEventListener('keydown', e => {
      if (e.key === 'Enter') { e.preventDefault(); submit(); }
    });

    // Listen to chip changes from external (pinned) re-renders
    overlay.addEventListener('fis-filters-change', () => {
      renderChecks();
      renderChips();
    });

    // Public handles
    return {
      open, close, overlay, state,
      refresh: () => { renderChecks(); renderChips(); },
    };
  }

  // ---------- Auto-init ----------
  function init() {
    // Pinned mode? (search-results.html sets this attribute)
    const pinned = document.documentElement.hasAttribute('data-search-pinned');
    const ctrl = mount({ pinned });

    if (!pinned) {
      // Wire any search trigger on the page (nav search button)
      document.querySelectorAll('[data-search-trigger]').forEach(btn => {
        btn.addEventListener('click', e => {
          e.preventDefault();
          ctrl.open();
        });
      });
      // Also: the search icon in the nav (aria-label="Search") doesn't have
      // a data attr in the existing HTML — bind by aria-label match.
      document.querySelectorAll('.nav .icon-btn[aria-label="Search"]').forEach(btn => {
        btn.addEventListener('click', e => {
          e.preventDefault();
          ctrl.open();
        });
      });
    }

    window.fisSearch = ctrl;
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
