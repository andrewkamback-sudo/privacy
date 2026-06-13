/* Cinderway Interactive — page enhancements.

   Two responsibilities, kept in one file so every page only loads
   one script:

   1. Hamburger nav toggle (mobile). Wired via [data-nav-toggle]
      and [data-site-nav]; opens/closes a dropdown panel, closes
      when a link inside it is clicked, and closes on Escape.

   2. Scene parallax. Drives --parallax-y on <body> so the
      bottom-right pixel-art scene in cinderway.css can drift via
      transform as the user scrolls. Rate is -0.18 — image goes
      up subtly as the page goes down. Bails on
      prefers-reduced-motion. */
(function () {
  'use strict';

  if (typeof window === 'undefined' || typeof document === 'undefined') return;

  // ---------- Nav toggle ----------
  function initNav() {
    var toggle = document.querySelector('[data-nav-toggle]');
    var nav = document.querySelector('[data-site-nav]');
    if (!toggle || !nav) return;

    function setOpen(open) {
      toggle.setAttribute('aria-expanded', String(open));
      nav.classList.toggle('is-open', open);
      document.body.classList.toggle('nav-open', open);
    }

    toggle.addEventListener('click', function () {
      var open = toggle.getAttribute('aria-expanded') === 'true';
      setOpen(!open);
    });

    nav.addEventListener('click', function (event) {
      if (event.target.closest && event.target.closest('a')) {
        setOpen(false);
      }
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') setOpen(false);
    });
  }

  // ---------- Scene parallax ----------
  function initParallax() {
    var mq = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq && mq.matches) return;

    var body = document.body;
    var ticking = false;

    function update() {
      var y = window.scrollY * -0.18;
      body.style.setProperty('--parallax-y', y + 'px');
      ticking = false;
    }

    window.addEventListener('scroll', function () {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    }, { passive: true });

    update();
  }

  initNav();
  initParallax();
})();
