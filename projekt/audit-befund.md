# Website-Audit hajzeraj.eu – Befund (Stand: 31. Oktober 2026)

Geprüft: alle 6 Seiten (Start, Referenzen, Über uns, Kontakt, Impressum, Datenschutzerklärung), Desktop 1440 px und iPhone-Ansicht, HTTP-Header, geladene Drittanbieter, Cookies.

## Gesamturteil
Die Inhalte sind stark (seit 1988, 2 Generationen, 40 Referenzen mit Namen wie Marriott, Boss, Sony PlayStation, Japan Tower der EZB, DB Schenker, DEKA, Savills, Schott, Cargolux), aber die Seite verkauft sie nicht. Optik und Technik entsprechen etwa dem Stand 2012; rechtlich besteht Handlungsbedarf (Abmahnrisiko).

Ampel: Optik ROT · Inhalt/Struktur GELB · Technik/SEO ROT · Recht ROT · Barrierefreiheit GELB

## 1. Optik & Markenauftritt
- Gestaltung wirkt veraltet: graue Textkästen, Blocksatz mit großen Wortlücken, schwarze Titelbalken, knallgelber „Einreichen“-Button, blauer Wix-Aktionsbutton auf Mobil.
- Startseite hat keinen eigenen Inhalt: nur ein Slider mit Herstellerfotos (Teppichfliesen-Kollektionen), Bildunterschriften sind Dateinamen („001UR101 BarkMoss UR102 Bark UR103 Moss“).
- Logo wird nicht als Logo, sondern als Text nachgebaut.
- Keine Markenfarbe, keine Bildsprache; Referenzfotos sind überwiegend Baustellen-Handyfotos (Werkzeug, Kartons, Mischlicht).
- Stärke: professionelle, einheitliche Team-Porträts (Olgay Özkan Fotografie).

## 2. Inhalt & Struktur
- Es gibt keine Leistungsseite – was Enver konkret anbietet, steht nirgends (nur indirekt über Team-Rollen: Fußböden, Trockenbau).
- Referenzen: 40 Projekte, aber nur als Bildergalerie mit „Show More“; keine Einordnung (Gewerbe/Privat, Branche), keine Hervorhebung der großen Namen.
- Tippfehler: „Raumaustattung“ (Impressum), „Marriot“, „Dachterasse“, „in besten Fall“, „Dinge und Gegenständen“, „geannten“.
- Kein klarer Handlungsaufruf (Call-to-Action), keine Anfahrt/Karte, keine Öffnungs-/Erreichbarkeitszeiten.
- Facebook-Link im alten Format; keine weiteren Kanäle (z. B. Instagram, Google-Unternehmensprofil).

## 3. Technik & SEO
- Plattform: Wix (klassischer Editor). Mobile Ansicht existiert, ist aber nicht responsiv gestaltet.
- Server liefert `content-language: zh-CN` (Chinesisch) aus – Fehlkonfiguration (HTML ist korrekt `lang="de"`).
- Keine Seite hat eine H1-Überschrift; Überschriftenstruktur besteht aus wiederholtem „RAUMAUSSTATTUNG / Enver Hajzeraj“.
- Alle Unterseiten teilen dieselbe Meta-Beschreibung; Meta-Keywords = „Home“; Seitentitel enthalten „Innenstadt“ (Betrieb liegt im Gallus).
- Alt-Texte teils Dateinamen („IMG_4005“, „IMG_0852“).
- Keine strukturierten Daten (LocalBusiness) → schwächer in lokaler Google-Suche/Maps.
- Drittanbieter bei jedem Aufruf: Wix (static.parastorage.com, static.wixstatic.com, frog.wix.com, panorama.wixapps.net), Sentry (browser.sentry-cdn.com).

## 4. Recht (wichtigster Punkt)
- **Datenschutzerklärung veraltet (vor DSGVO):** kein Bezug auf DSGVO, keine Rechtsgrundlagen (Art. 6), kein Verantwortlicher im DSGVO-Sinn, unvollständige Betroffenenrechte, kein Beschwerderecht, kein Stand. Beschreibt Google Analytics (wird gar nicht geladen), verschweigt aber das tatsächlich Eingesetzte (Wix-Hosting inkl. USA-Bezug, Wix-Statistik, Sentry, Cookies `XSRF-TOKEN`, `server-session-bind`, `ssr-caching`). → Typischer Abmahngrund.
- **Kontaktformular:** Pflicht-Checkbox „Ich erkläre mich mit den AGB einverstanden“ – falsch; nötig ist ein Datenschutzhinweis zur Verarbeitung der Anfrage.
- **Impressum:** Rechtsgrundlage heute § 5 DDG (nicht mehr TMG). „Aufsichtsbehörde: Frankfurt am Main“ ist keine Behörde. Für Handwerksbetriebe fehlen: zuständige Handwerkskammer, Eintrag Handwerksrolle/-verzeichnis, Berufsbezeichnung + Staat der Verleihung, Verweis auf berufsrechtliche Regelungen (HwO). Hinweis zur Verbraucherstreitbeilegung (§ 36 VSBG) prüfen. Langer Muster-Disclaimer ohne rechtlichen Mehrwert.
- **Bildrechte:** Startseiten-Slider nutzt Hersteller-Marketingfotos – Nutzungsrecht prüfen.
- **Kein Cookie-/Consent-Banner,** obwohl Drittanbieter geladen werden (TDDDG § 25 prüfen).

## 5. Barrierefreiheit
- Graue Navigation auf Weiß mit zu geringem Kontrast; Blocksatz erschwert das Lesen; Alt-Texte fehlen/unbrauchbar.
- Das Barrierefreiheitsstärkungsgesetz (seit 28.06.2025) betrifft eine reine Informationsseite eines Kleinstbetriebs voraussichtlich nicht verpflichtend – barrierearme Umsetzung ist trotzdem Standard und gut für SEO. (Rechtlich prüfen lassen.)

## 6. Was der Prototyp löst
- Neues Erscheinungsbild „Quiet Luxury“ mit Original-Logo als Vektor, Markenfarbe Moosgrün (Platzhalter, bis Visitenkarten-Farbe vorliegt), hochwertige Typografie.
- Klare Struktur: Start · Leistungen · Referenzen · Über uns · Kontakt; große Namen prominent; Referenzen gefiltert nach Gewerbe/Privat/Öffentlich.
- Statische Website ohne Baukasten: keine Cookies, kein Tracking, selbst gehostete Schriften → kein Cookie-Banner nötig, sehr schnell, sicher.
- SEO-Basis: je Seite eigener Titel/Beschreibung, H1, strukturierte Daten, sprechende Alt-Texte.
- Rechtstexte neu nach DSGVO/DDG/TDDDG als Entwurf (vor Livegang prüfen lassen), Kontaktformular mit korrektem Datenschutzhinweis, Karte erst nach Klick (2-Klick-Lösung).

## 7. Maßnahmenplan (priorisiert)
**Sofort (auch auf der alten Seite möglich, < 1 Tag):**
1. Datenschutzerklärung über einen Generator (z. B. eRecht24, Dr. Schwenke) passend zu Wix neu erstellen.
2. AGB-Checkbox im Formular durch Datenschutz-Hinweis ersetzen.
3. Impressum korrigieren (DDG, Handwerkskammer, Handwerksrolle, Berufsbezeichnung, Tippfehler).
4. Herstellerfotos im Slider entfernen oder Nutzungsrecht klären.

**Relaunch (2–4 Wochen):**
5. Inhalte freigeben (Leistungen, Kundennamen, Kategorien), Markenfarbe festlegen.
6. Professionelles Projekt-Shooting (8–12 Referenzen) – größter Hebel für den Premium-Eindruck.
7. Hosting & Domain umziehen (statischer Hoster in der EU, z. B. Netlify/Cloudflare/Hetzner – AV-Vertrag abschließen), Formular-Versanddienst wählen.
8. Google-Unternehmensprofil pflegen und mit der Website verknüpfen.

**Laufend:**
9. Neue Projekte regelmäßig ergänzen; Rechtstexte jährlich prüfen.
