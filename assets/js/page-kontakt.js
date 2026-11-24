/* Kontaktseite – Formularvalidierung und 2-Klick-Karte (Vanilla JS) */
(function () {
  'use strict';

  var $ = function (sel, ctx) { return (ctx || document).querySelector(sel); };

  /* ---------- Formular ---------- */
  function initForm() {
    var form = $('#contact-form');
    var done = $('#form-done');
    if (!form || !done) return;

    var MSG = {
      required: 'Bitte füllen Sie dieses Feld aus.',
      email: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.',
      privacy: 'Bitte bestätigen Sie die Hinweise zum Datenschutz.'
    };
    var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    var fields = ['name', 'email', 'message', 'privacy'].map(function (id) { return document.getElementById(id); });

    function check(el) {
      if (el.type === 'checkbox') return el.checked ? '' : MSG.privacy;
      var v = el.value.trim();
      if (!v) return MSG.required;
      if (el.type === 'email' && !EMAIL_RE.test(v)) return MSG.email;
      return '';
    }
    function setState(el, message) {
      var wrap = el.closest('.field');
      var err = document.getElementById(el.id + '-err');
      if (message) {
        err.textContent = message;
        wrap.classList.add('field--error');
        el.setAttribute('aria-invalid', 'true');
        el.setAttribute('aria-describedby', err.id);
      } else {
        err.textContent = '';
        wrap.classList.remove('field--error');
        el.removeAttribute('aria-invalid');
        el.removeAttribute('aria-describedby');
      }
    }

    fields.forEach(function (el) {
      var evt = el.type === 'checkbox' ? 'change' : 'input';
      el.addEventListener(evt, function () {
        if (el.getAttribute('aria-invalid') === 'true') setState(el, check(el));
      });
      el.addEventListener('blur', function () {
        if (el.type !== 'checkbox' && el.value.trim() !== '') setState(el, check(el));
      });
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var firstInvalid = null;
      fields.forEach(function (el) {
        var m = check(el);
        setState(el, m);
        if (m && !firstInvalid) firstInvalid = el;
      });
      if (firstInvalid) { firstInvalid.focus(); return; }

      // Prototyp: kein Versand. Formular durch Erfolgsmeldung ersetzen.
      done.innerHTML =
        '<p class="form-done__title">Vielen Dank.</p>' +
        '<p>Ihre Nachricht ist bei uns angekommen. Wir melden uns zeitnah bei Ihnen.</p>' +
        '<p class="form__note">Prototyp: Die Nachricht wurde nicht versendet.</p>';
      done.classList.add('is-shown');
      form.hidden = true;
      done.focus({ preventScroll: true });
      var top = done.getBoundingClientRect().top;
      if (top < 80 || top > window.innerHeight * 0.6) {
        done.scrollIntoView({ block: 'start' });
      }
    });
  }

  /* ---------- Karte (2-Klick) ---------- */
  function initMap() {
    var map = $('[data-map]');
    var btn = $('[data-map-load]');
    var ph = $('[data-map-ph]');
    if (!map || !btn || !ph) return;
    var SRC = 'https://www.openstreetmap.org/export/embed.html?bbox=8.6433%2C50.1043%2C8.6583%2C50.1113&layer=mapnik&marker=50.10783%2C8.65076';

    btn.addEventListener('click', function () {
      if (map.querySelector('iframe')) return;
      var frame = document.createElement('iframe');
      frame.className = 'map__frame';
      frame.src = SRC;
      frame.title = 'Karte: Kölner Str. 12, 60327 Frankfurt am Main (OpenStreetMap)';
      frame.setAttribute('loading', 'lazy');
      frame.setAttribute('referrerpolicy', 'no-referrer');
      map.appendChild(frame);
      map.classList.add('is-loaded');
      ph.hidden = true;
      frame.focus({ preventScroll: true });
    });
  }

  function run(fn) { try { fn(); } catch (e) { if (window.console) console.error(e); } }
  function init() { run(initForm); run(initMap); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
