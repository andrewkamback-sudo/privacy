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

  // ---------- Waitlist signup (Buttondown embed) ----------
  // Progressive enhancement: the <form data-signup-form> already works with
  // JS off (native POST opens Buttondown's confirmation page in a new tab).
  // With JS we intercept, POST in the background, and show an inline message
  // so the visitor never leaves the landing page.
  function initSignup() {
    var form = document.querySelector('[data-signup-form]');
    if (!form || !window.fetch) return;

    var status = form.querySelector('[data-signup-status]');
    var input = form.querySelector('input[type="email"]');
    var button = form.querySelector('button[type="submit"]');

    function setStatus(msg, state) {
      if (!status) return;
      status.textContent = msg;
      status.hidden = !msg;
      status.classList.remove('is-success', 'is-error');
      if (state) status.classList.add(state);
    }

    form.addEventListener('submit', function (event) {
      // If the placeholder username was never swapped in, fall back to the
      // native submit rather than silently POSTing to a dead endpoint.
      if (form.action.indexOf('YOUR_BUTTONDOWN_USERNAME') !== -1) return;
      event.preventDefault();

      if (input && !input.checkValidity()) {
        input.reportValidity();
        return;
      }

      if (button) button.disabled = true;
      setStatus('Signing you up…', null);

      // no-cors: Buttondown's embed endpoint doesn't return CORS headers, so
      // the response is opaque. The subscribe still lands; we optimistically
      // confirm and only surface an error on an outright network failure.
      fetch(form.action, {
        method: 'POST',
        mode: 'no-cors',
        body: new URLSearchParams({ email: input ? input.value : '', embed: '1' })
      }).then(function () {
        form.reset();
        setStatus("You're on the list — check your inbox to confirm.", 'is-success');
      }).catch(function () {
        setStatus('Something went wrong. Please try again in a moment.', 'is-error');
      }).finally(function () {
        if (button) button.disabled = false;
      });
    });
  }

  initNav();
  initParallax();
  initSignup();
})();
