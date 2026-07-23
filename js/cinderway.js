/* Cinderway Interactive — page enhancements.

   Page enhancements, kept in one file so every page only loads
   one script:

   1. Hamburger nav toggle (mobile). Wired via [data-nav-toggle]
      and [data-site-nav]; opens/closes a dropdown panel, closes
      when a link inside it is clicked, and closes on Escape.

   2. Scene parallax. Drives --parallax-y on <body> so the
      bottom-right pixel-art scene in cinderway.css can drift via
      transform as the user scrolls. Rate is -0.18 — image goes
      up subtly as the page goes down. Bails on
      prefers-reduced-motion.

   3. TestFlight beta capacity counter.

   4. Expandable screenshot gallery and accessible lightbox. */
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

  // ---------- TestFlight beta capacity ----------
  function initTestFlightCount() {
    var counter = document.querySelector('[data-testflight-count]');
    if (!counter || !window.fetch) return;

    fetch('https://koradavnttxpjxbibrbk.supabase.co/functions/v1/testflight-count')
      .then(function (response) {
        if (!response.ok) throw new Error('TestFlight count unavailable');
        return response.json();
      })
      .then(function (data) {
        if (typeof data.testers !== 'number' || typeof data.capacity !== 'number') {
          throw new Error('Unexpected TestFlight count response');
        }

        var spotsOpen = Math.max(data.capacity - data.testers, 0);
        var testerLabel = data.testers === 1 ? 'tester enrolled' : 'testers enrolled';
        var spotLabel = spotsOpen === 1 ? 'spot open' : 'spots open';

        counter.setAttribute('role', 'status');
        counter.setAttribute('aria-live', 'polite');
        counter.textContent = data.testers.toLocaleString() + ' ' + testerLabel + ' · ' +
          spotsOpen.toLocaleString() + ' ' + spotLabel;
      })
      .catch(function () {
        counter.textContent = 'iOS beta spots available';
      });
  }

  // ---------- Screenshot gallery ----------
  function initScreenshotGallery() {
    var gallery = document.querySelector('#screenshot-gallery');
    var toggle = document.querySelector('[data-gallery-toggle]');
    if (!gallery) return;

    var extras = Array.prototype.slice.call(gallery.querySelectorAll('.screenshot-tile.is-extra'));
    if (toggle && extras.length) {
      toggle.hidden = false;
      toggle.addEventListener('click', function () {
        var expanded = toggle.getAttribute('aria-expanded') === 'true';
        extras.forEach(function (item) { item.hidden = expanded; });
        toggle.setAttribute('aria-expanded', String(!expanded));
        toggle.textContent = expanded
          ? 'Show ' + extras.length + ' more screenshots'
          : 'Show fewer screenshots';
      });
    }

    if (typeof window.HTMLDialogElement === 'undefined') return;

    var dialog = document.createElement('dialog');
    dialog.className = 'screenshot-lightbox';
    dialog.setAttribute('aria-label', 'Screenshot preview');
    dialog.innerHTML =
      '<div class="screenshot-lightbox-inner">' +
        '<button class="screenshot-lightbox-close" type="button" aria-label="Close screenshot preview">&times;</button>' +
        '<img alt="">' +
        '<p></p>' +
      '</div>';
    document.body.appendChild(dialog);

    var preview = dialog.querySelector('img');
    var caption = dialog.querySelector('p');
    var close = dialog.querySelector('button');

    gallery.addEventListener('click', function (event) {
      var link = event.target.closest && event.target.closest('.screenshot-tile');
      if (!link) return;

      var thumbnail = link.querySelector('img');
      if (!thumbnail) return;

      event.preventDefault();
      preview.src = link.href;
      preview.alt = thumbnail.alt;
      caption.textContent = thumbnail.alt;
      dialog.showModal();
    });

    close.addEventListener('click', function () { dialog.close(); });
    dialog.addEventListener('click', function (event) {
      if (event.target === dialog) dialog.close();
    });
    dialog.addEventListener('close', function () {
      preview.removeAttribute('src');
    });
  }

  initNav();
  initParallax();
  initTestFlightCount();
  initScreenshotGallery();
})();
