# Design-Brief – Prototyp Raumausstattung Enver Hajzeraj

Ziel: Eine Website, die aussieht, als hätte sie ein Vermögen gekostet. Leitidee **„Quiet Luxury“**: ruhig, großzügig, präzise – wie das Lookbook eines Interior-Studios, nicht wie ein Handwerker-Flyer. Referenz-Gefühl: Aesop, Vipp, Bulthaup, Studio-Portfolios auf Awwwards. Weniger ist mehr; jedes Element muss sitzen.

Texte: ausschließlich aus `projekt/textbuch.md` übernehmen (nicht umschreiben, nichts erfinden). Für den Hero die Favoriten-Variante A nehmen.

## Technik (verbindlich)
- Reines statisches HTML/CSS/Vanilla-JS. Keine Frameworks, kein Build, **keine externen Requests** (keine CDNs, keine Google Fonts, kein Tracking). Alles liegt im Projektordner.
- Wird auf GitHub Pages unter einem Unterpfad gehostet (`/hajzeraj-prototyp/`) → **ausschließlich relative Links** (`leistungen.html`, `assets/...`), niemals mit führendem `/`.
- Seiten: `index.html`, `leistungen.html`, `referenzen.html`, `ueber-uns.html`, `kontakt.html`, `impressum.html`, `datenschutz.html`, `404.html`, `audit.html`.
- Gemeinsame Dateien: `assets/css/style.css` (Designsystem, Header, Footer, Komponenten), `assets/js/main.js`. Seitenspezifisches CSS in eigenen Dateien `assets/css/page-<name>.css`, damit parallel arbeitende Entwickler sich nicht in die Quere kommen.
- Jede Seite: `<html lang="de">`, eigener `<title>` + meta description aus copy.md, **`<meta name="robots" content="noindex, nofollow">`** (Prototyp!), OG-Tags, genau eine H1, Landmarks (`header`, `nav`, `main`, `footer`), Skip-Link, `aria-current="page"` in der Navigation.
- Barrierearm: WCAG-AA-Kontraste, sichtbare `:focus-visible`-Stile, Tastaturbedienung (auch Mobile-Menü, Filter, Lightbox), `prefers-reduced-motion` respektieren (alle Animationen aus).
- Performance: Bilder immer mit `width`/`height`, `loading="lazy"` (außer Hero), `decoding="async"`, `srcset`/`sizes`. Die 2 wichtigsten Schriftschnitte per `<link rel="preload">`.

## Assets (liegen bereit, nicht neu erzeugen)
- **Logo:** `assets/logo/logo.svg` – Vektor, `fill="currentColor"`, viewBox 3000×830. Inline ins HTML einbetten (SVG-Inhalt kopieren), damit es per CSS `color` eingefärbt werden kann. Das Logo darf nicht verändert/verzerrt werden. Im Header ca. 150–190 px breit (mobil ~130 px), im Footer größer.
- **Schriften** (`assets/fonts/`, woff2, je `latin` + `latin-ext`):
  - Jost 300/400/500 normal → UI, Fließtext, Navigation, Eyebrows (passt zur geometrischen Logo-Schrift).
  - Cormorant Garamond 300/400/500 normal + italic → Display-Headlines (H1/H2), große Zahlen („1988“), Zitate.
  - `@font-face` selbst schreiben, `font-display: swap`, `unicode-range` für latin / latin-ext.
- **Stimmungsbilder (KI-generiert, Beispiele):** `assets/img/mood/{hero,buero,parkett,trockenbau,textil,planung}-{1200,2400}.webp`.
  - hero: Gründerzeit-Raum, Fischgrätparkett, olivgrüner Sessel rechts, viel Freiraum links (16:9)
  - buero: hochwertige Bürofläche mit Teppichfliesen, Glaswänden, Skyline (16:9)
  - parkett: Fischgrät-Eiche im Streiflicht (4:5)
  - trockenbau: Spachtelwand mit Schattenfuge und Lichtlinie (4:5)
  - textil: gefaltete Stoffmuster in Oliv, Ocker, Leinen (4:5)
  - planung: Flatlay mit Material- und Stoffmustern und Grundriss-Skizze (4:5)
  - Jedes KI-Bild bekommt eine winzige, dezente Kennzeichnung (z. B. unten rechts „Beispielbild“, 10–11 px, halbtransparent).
- **Team-Porträts:** `assets/img/team/<slug>-{600,1200}.webp`, Format 3:2 (Senior quadratisch). Slugs: enver-hajzeraj, senior-hajzeraj, katarina-ozkan, bedri-begu, sami-hisenaj, ekrem-sinani, sigmund-ajzeraj, shkelzen-elezaj. Zusätzlich `ueberuns-hero` (Senior + Enver zusammen – ideal für „Zwei Generationen“). Monteure tragen rote Poloshirts → Porträts dezent entsättigt darstellen (`filter: saturate(.4)`), bei Hover/Fokus volle Farbe, weiche Transition.
- **Referenzfotos (echte Projekte, Handyqualität):** `assets/img/ref/<slug>-{800,1600}.webp`. Nur diese gut nutzbaren verwenden, klein bis mittelgroß, nie als Vollbild-Hero, einheitlich leicht graduiert (`filter: saturate(.85) contrast(1.03)` + warmer Overlay sehr dezent):
  `siesmayerstrae, raumgestaltung-privatkunde, silverton, schott, omiquest-coresis-realestate, schumm-rosch, colt-telekom, kronberg-palais, corestate-capital-kronberg-palais, marriot-hotel, img-0852, historische-fachwerkhauser, kreative-badlosung, mertens-showroom, sony-playstation, boss-store, 43einhalb-store, img-4005`.
  Alle anderen Projekte ohne Bild (rein typografisch).

## Designsystem
**Farben (CSS Custom Properties auf `:root`):**
- `--paper: #F3EFE7` (Leinen, Grundfläche) · `--paper-2: #EAE4D8` (Flächen-Wechsel) · `--paper-3: #E1D9C9`
- `--ink: #1C1C19` (Text) · `--ink-soft: #55534B` (Sekundärtext, muss AA auf paper erfüllen)
- `--moss: #6E6A3F` (Envers Grün – Akzent; vorläufiger Wert, wird später durch die Visitenkarten-Farbe ersetzt → nur über die Variable verwenden!) · `--moss-deep: #4A4729` (dunkle Sektionen, z. B. Abschluss-CTA/Footer) · `--ochre: #B08D57` (feine Details, Linien, Hover)
- `--line: rgba(28,28,25,.14)` (Haarlinien)
- Dunkle Sektionen: Hintergrund `--moss-deep` oder `--ink`, Text `--paper`.

**Typografie (fluid mit clamp):**
- Display H1: Cormorant Garamond 300, ca. `clamp(3rem, 7vw, 7.5rem)`, line-height 0.95–1.0, letter-spacing −0.01em; einzelne Wörter dürfen kursiv sein (z. B. „altern.“ in italic) – sparsam.
- H2: Cormorant 300/400, `clamp(2.2rem, 4.2vw, 4.25rem)`, line-height 1.05. Zweizeiler aus copy.md mit `<br>` umsetzen.
- Eyebrow: Jost 500, 0.72–0.78rem, uppercase, letter-spacing 0.22em, Farbe `--moss`, mit kurzer Linie davor (z. B. 32 px Haarlinie). Format „01 — Haltung“.
- Fließtext: Jost 400, 1.0625–1.125rem, line-height 1.7, max ~62ch, `--ink-soft`. Lead-Absätze größer (1.25–1.375rem, Jost 300).
- Navigation/Buttons: Jost 400/500, uppercase, letter-spacing 0.16em, 0.78rem.
- Zahlen/Kennzahlen: Cormorant 300, sehr groß.

**Layout:**
- Container max 1440 px, Seitenränder `clamp(20px, 5vw, 72px)`. 12-Spalten-Grid (CSS Grid). Bewusst asymmetrische Kompositionen (Text 5 Spalten, Bild 6 Spalten versetzt etc.).
- Viel Luft: Sektionsabstand `clamp(96px, 13vw, 200px)`.
- Haarlinien (1px `--line`) als ordnendes Element. Keine Schatten, keine runden Ecken (max. 2px), keine Verläufe außer subtilen Bild-Overlays.
- Buttons: (a) primär – Fläche `--ink`, Text `--paper`, eckig, Padding großzügig, Hover: Fläche `--moss`; (b) sekundär – nur Text + Haarlinie darunter, Hover: Linie wächst/Farbe `--moss`. Pfeil „→“ der sich bei Hover leicht verschiebt.

**Header:** fix, anfangs transparent über dem Hero, nach ~40px Scroll: `--paper` mit 92% Deckkraft + `backdrop-filter: blur(12px)` + Haarlinie unten; beim Runterscrollen ausblenden, beim Hochscrollen wieder einblenden. Links Logo, rechts Navigation (Start · Leistungen · Referenzen · Über uns · Kontakt) + CTA „Gespräch anfragen“. Mobil (<960px): Burger (2 Linien) → Vollbild-Overlay in `--paper` mit großen Cormorant-Links, Kontaktdaten unten, Fokus-Falle, ESC schließt, Body-Scroll-Lock.

**Footer:** dunkel (`--ink`), großes Logo in `--paper`, 3–4 Spalten: Adresse · Kontakt (Tel/Mobil/Fax/Mail, klickbar) · Navigation · Rechtliches (Impressum, Datenschutz). Unten: „© 2026 Raumausstattung Enver Hajzeraj“ + „Seit 1988 in Frankfurt am Main“.

**Bewegung (dezent, hochwertig):**
- Reveal beim Scrollen via IntersectionObserver: `opacity 0→1`, `translateY(24px→0)`, 1.0s `cubic-bezier(.2,.7,.1,1)`, gestaffelt (`--delay`).
- Bilder: Reveal per `clip-path: inset(100% 0 0 0) → inset(0)` + leichtes Scale 1.08→1.
- Hero: Bild skaliert beim Laden langsam 1.06→1 (2.4s). Headline zeilenweise eingeblendet.
- Kundennamen: endloses horizontales Laufband in Cormorant (groß, `--ink` 40% Deckkraft, Trennzeichen „·“ in `--ochre`), pausiert bei Hover, bei reduced-motion statisch umbrechend.
- Keine Parallax-Orgien, kein Custom-Cursor.

**Prüfhinweise im Prototyp:** Alle `[BITTE PRÜFEN]`/`[BITTE ERGÄNZEN]` aus copy.md NICHT als Rohtext ausgeben, sondern als kleines Badge: `<span class="todo" title="…Details…">prüfen</span>` bzw. `ergänzen` (Jost 500, 0.65rem, uppercase, Hintergrund `--ochre` 20%, Text `--moss-deep`). Unten links ein fixer kleiner Schalter „Prototyp · Prüfhinweise ein/aus“ (toggelt `html.hide-todos`, Zustand in localStorage mit try/catch; Default: sichtbar). Daneben Link „Website-Audit“ → `audit.html`.

**Favicon:** `assets/favicon.svg` – Monogramm „H“ in Jost-artiger dünner Linie auf `--paper` oder einfach das „seit 1988“-freie Wortmarken-Fragment; schlicht.

## Qualitätsmaßstab
- Desktop 1440 px und Mobil 390 px müssen gleichermaßen „teuer“ aussehen. Kein horizontales Scrollen auf Mobil.
- Konsistenz vor Kreativität: Abstände, Eyebrows, Buttons überall identisch – nur Klassen aus dem Designsystem verwenden.
- Keine Platzhalter-Lorem-Texte, keine erfundenen Inhalte.
