/* Cinderway Interactive — page enhancements.

   Scene parallax: drives --parallax-y on <body> so css/cinderway.css
   can translate the bottom-right pixel-art scene as the user scrolls.
   Rate is -0.18: image drifts UP as the page scrolls DOWN, for a
   subtle depth cue. Respects prefers-reduced-motion (no-op when on). */
(function () {
  'use strict';

  if (typeof window === 'undefined' || typeof document === 'undefined') return;

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

  // Run once on load so any initial scroll offset (e.g. anchor link)
  // gets the correct parallax applied.
  update();
})();
