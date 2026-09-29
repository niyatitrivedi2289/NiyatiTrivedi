/* Shared theme controller — used by landing.html, apis.html,
   reference.html and documentation.html.
   Persists choice across pages via localStorage. */
(function () {
  const STORAGE_KEY = 'fisDevTheme';

  function currentTheme() {
    return document.documentElement.getAttribute('data-theme') || 'dark';
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    try { localStorage.setItem(STORAGE_KEY, theme); } catch (_) {}
    // Sync any sibling controls (Tweaks panel buttons, nav toggle icons)
    document.querySelectorAll('[data-tweak-key="theme"]').forEach(function (b) {
      b.classList.toggle('active', b.dataset.tweakVal === theme);
    });
    document.querySelectorAll('.theme-toggle').forEach(function (b) {
      b.setAttribute('aria-pressed', theme === 'light' ? 'true' : 'false');
    });
    window.dispatchEvent(new CustomEvent('fis-theme-change', { detail: { theme: theme } }));
  }

  function toggleTheme() {
    applyTheme(currentTheme() === 'light' ? 'dark' : 'light');
  }

  // Expose for other scripts (e.g. landing.html's Tweaks panel)
  window.fisTheme = {
    get: currentTheme,
    set: applyTheme,
    toggle: toggleTheme,
  };

  function init() {
    // The early <script> in <head> already set data-theme from localStorage
    // (or defaulted to dark). Reflect that state in the buttons.
    applyTheme(currentTheme());

    document.querySelectorAll('.theme-toggle').forEach(function (btn) {
      btn.addEventListener('click', toggleTheme);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Sync across tabs
  window.addEventListener('storage', function (e) {
    if (e.key === STORAGE_KEY && e.newValue) applyTheme(e.newValue);
  });
})();
