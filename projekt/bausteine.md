# Komponenten-Referenz (Designsystem)

**Seitenaufbau:** Kopf wie `index.html` (preload der 2 Fonts, `style.css`, optional `page-<name>.css` *danach*), Header = `Header in index.html` 1:1 (nur `aria-current="page"` am passenden `.nav__link` UND `.mobile-menu__link` setzen), `<main id="main">`, Footer = `Footer in index.html` 1:1, am Ende `<script src="assets/js/main.js" defer>`. Im `<head>` zusätzlich `<script>document.documentElement.classList.add('js');</script>`.
**Seitenspezifisches CSS:** nur in `assets/css/page-<name>.css` (z. B. `page-leistungen.css`), eingebunden nach `style.css`. style.css nicht anfassen. Tokens nur über Variablen (`--paper --paper-2 --paper-3 --ink --ink-soft --moss --moss-deep --ochre --ochre-light --line`).
Menü-Breakpoint ist 1040px (nicht 960). Alle Links relativ.

## Sektionen & Grid
```html
<section class="section [section--alt|section--dark|section--ink|section--sm]" aria-labelledby="x">
  <div class="container">
    <div class="grid section-head">
      <div class="col-7 reveal"><p class="eyebrow">02 — Leistungen</p><h2 class="h2" id="x">Zeile eins<br>Zeile <em>zwei.</em></h2></div>
      <div class="col-4 start-9 self-end reveal"><p class="lead">…</p></div>
    </div>
  </div>
</section>
```
`.grid` = 12 Spalten; `.col-2…10,12` und `.start-1…10` greifen erst ab 900px (darunter alles volle Breite). Spalten-Kinder brauchen die Klassen direkt unter `.grid`. `.pb-0`, `.mt-s/.mt-m/.mt-l` Utilities. Dunkle Sektionen färben Eyebrow/Buttons/Links automatisch um.

## Typo
`.display` (nur Start-Hero), `.h1` (Seitenkopf), `.h2`, `.h3`; `<em>` = kursiv (sparsam). `.lead` (großer Absatz), `.text` (Fließtext-Wrapper), `.small`. In `.section` sind `<p>` automatisch ink-soft/62ch.
Zeilenweise Headline: `<h1 class="h1 lines"><span class="line"><span>Zeile</span></span>…</h1>` (wird per Scroll-Reveal eingeblendet).

## Buttons & Links
```html
<a class="btn btn--primary" href="kontakt.html">Gespräch anfragen <span class="arrow" aria-hidden="true"></span></a>
<a class="btn btn--text" href="referenzen.html">Referenzen ansehen <span class="arrow" aria-hidden="true"></span></a>
<a class="link" href="ueber-uns.html">Mehr über uns <span class="arrow" aria-hidden="true"></span></a>  <!-- Link mit Haarlinie -->
<a class="text-link" href="…">Inline-Link</a>
<div class="actions">…Buttons…</div>   <!-- Flex-Gruppe -->
```
Pfeil ist reines CSS (`.arrow`), kein „→“-Zeichen verwenden (Schrift enthält es nicht).

## Seitenkopf Unterseiten
```html
<section class="page-hero">
  <div class="container">
    <p class="eyebrow">Leistungen</p>
    <h1 class="h1 page-hero__title lines"><span class="line"><span>Räume gestalten.</span></span><span class="line"><span>Von A bis Z.</span></span></h1>
    <p class="lead page-hero__intro reveal">Intro…</p>
  </div>
</section>
```
Folgt direkt eine `.section`, entfällt deren Top-Padding automatisch.

## Abschluss-CTA (dunkel)
```html
<section class="cta" aria-labelledby="cta-title"><div class="container"><div class="grid">
  <div class="col-7 reveal"><p class="eyebrow">05 — Kontakt</p><h2 class="h2" id="cta-title">Zeile<br>Zeile <em>x.</em></h2></div>
  <div class="col-4 start-9 self-end cta__body reveal"><p>Text</p><div class="actions"><a class="btn btn--primary" href="kontakt.html">Gespräch anfragen <span class="arrow" aria-hidden="true"></span></a></div></div>
</div></div></section>
```

## Bilder
```html
<div class="media ar-4-5 img-reveal">           <!-- ar-1-1|4-5|3-4|3-2|4-3|16-10|16-9 -->
  <img src="assets/img/mood/parkett-1200.webp" srcset="assets/img/mood/parkett-1200.webp 1200w, assets/img/mood/parkett-2400.webp 2400w"
       sizes="(min-width:900px) 40vw, 100vw" width="1200" height="1491" alt="…" loading="lazy" decoding="async">
  <span class="img-tag">Beispielbild</span>      <!-- Pflicht bei KI-/Stimmungsbildern -->
</div>
```
- Referenzfotos: `.media.media--graded` (Grading + warmer Overlay), kein `img-tag`. Achtung: Dateinamen enden immer auf `-800`/`-1600`, die echten Breiten weichen teils ab (kronberg-palais 800/1350, historische-fachwerkhauser 800/1280, siesmayerstrae 800/1200, schott nur 768) → `w`-Deskriptoren mit echten Breiten angeben (PIL prüfen).
- Porträt: `.media.portrait` (entsättigt, Farbe bei Hover/Fokus). Team 600/1200 Breite, 3:2 (`ar-3-2`), Senior quadratisch.
- Full-bleed-Band: `<div class="band img-reveal"><img …><span class="img-tag">…</span></div>`.
- Reveal: `.reveal` (Fade+Up), `.img-reveal` (Clip+Scale), Verzögerung `style="--delay:.1s"` oder Container `data-stagger="0.1"`.

## Karten / Kennzahlen / Laufband
- `.cards` > `a.card` (`.card__media.media`, `.card__body` mit `.card__num .card__title .card__text .card__more`). 4 Spalten ab 1100px, versetzt.
- `.stats` > `.stat` (`.stat__value` | `.stat__value--text`, `.stat__label`).
- `.marquee` > `.marquee__track` > 2× `ul.marquee__group` (zweite `aria-hidden="true"`) > `li.marquee__item`; `.marquee--reverse`, `style="--speed:80s"`.
- Leistungs-Anker, auf die die Startseite verlinkt: `leistungen.html#planung`, `#bodenbelaege`, `#trockenbau`, `#raumgestaltung`.

## Prüfhinweise
`<span class="todo" title="Details zum Prüfpunkt">prüfen</span>` bzw. `ergänzen`. Schalter + Audit-Link kommen aus dem Footer-Partial (`html.hide-todos`).

## Formulare
```html
<form class="form" novalidate>
  <div class="field [field--error]">
    <label class="field__label" for="name">Name <span class="req" aria-hidden="true">*</span></label>
    <input class="field__input" id="name" name="name" type="text" placeholder="Vor- und Nachname" required aria-describedby="name-err">
    <p class="field__error" id="name-err" role="alert">Bitte füllen Sie dieses Feld aus.</p>
  </div>
  <div class="field"><label class="field__label" for="msg">Ihre Nachricht</label><textarea class="field__input" id="msg" name="message"></textarea></div>
  <label class="check"><input type="checkbox" required> <span>Ich habe die <a class="text-link" href="datenschutz.html">Datenschutzerklärung</a> gelesen …</span></label>
  <button class="btn btn--primary" type="submit">Nachricht senden</button>
  <p class="form__note">Pflichtfelder sind mit * markiert.</p>
  <p class="form__status" role="status">Erfolg</p> <!-- oder form__status--error -->
</form>
```
Fehlerzustand: `.field--error` auf `.field` oder `aria-invalid="true"` am Input.

## Sonstiges
`.sr-only`, `.skip-link` (im Header-Partial), `.rule`, `.border-top`, `.text-center`, `.nowrap`. Reduced-motion wird zentral behandelt. JS-Hooks: `data-header`, `data-menu-toggle`, `data-mobile-menu`, `data-hero`, `data-todo-toggle`, `data-year`.
