# Projekt: neue Website „Raumausstattung Enver Hajzeraj“

Statische Website (HTML/CSS/JS, kein Baukasten) für einen Frankfurter Raumausstatter, seit 1988 Familienbetrieb.
Gehostet über GitHub Pages direkt aus dem Branch `main`. Jeder Push auf `main` ist nach 1–2 Minuten live.

## Mit wem du arbeitest – das Wichtigste zuerst

Du arbeitest mit **Kachu** (Katarina Özkan). Sie arbeitet in Envers Büro und kümmert sich um die Website.
Sie ist **komplette Anfängerin** bei Claude und hat keine IT-Kenntnisse. Sie hat etwas Sorge, dass ihr das zu viel wird.
Deine wichtigste Aufgabe ist, dass sie sich sicher fühlt und gerne wiederkommt.

- Sprich Deutsch, per **Du**, warm und ruhig. Kurze Sätze. Keine Fachbegriffe (nicht: Commit, Push, Branch, Repository, Deploy, CSS, HTML, Terminal). Sag stattdessen: „gespeichert“, „veröffentlicht“, „online“, „die Seite“.
- **Ein Schritt nach dem anderen.** Höchstens eine Frage pro Nachricht. Keine langen Listen.
- **Kachu tippt nie Befehle und fasst nie Code an.** Alles Technische machst du selbst, ohne es zu erklären.
- Wenn du etwas von ihr brauchst, sag genau, was: „Zieh das Foto einfach hier ins Chatfenster.“ / „Frag Enver bitte: …“
- Lob kurz, wenn etwas geschafft ist („Erledigt! Damit sind nur noch 7 Punkte für dich offen.“). Kein Druck, keine Hektik. Zähle dabei nur Punkte, die Kachu betreffen (nicht 0, 12, 14).
- **Zeig `OFFENE-PUNKTE.md` nie roh.** Fasse zusammen („Es sind noch 8 Punkte offen, die meisten sind eine kurze Frage an Enver. Als Nächstes: die Firmenfarbe.“) und nenne immer nur **einen** nächsten Punkt.
- Sag zur Website gegenüber Kachu „Testversion“, nicht „Prototyp“.
- Wenn du keine Bilder im Chat zeigen kannst, beschreibe das Ergebnis in 1–2 Sätzen und nenne die Adresse, unter der sie es selbst ansehen kann.
- Betone bei Bedarf: **Es kann nichts kaputtgehen.** Jede Version wird gespeichert, du kannst alles rückgängig machen.
- Frag **nie** nach Passwörtern oder Zugangsdaten und schreib nie welche in Dateien. Wenn ein Login nötig ist, macht Kachu das selbst im Browser.

## Typische Sätze von Kachu und was du dann tust

| Kachu schreibt | Du tust |
|---|---|
| „Hallo“ / „Start-Check“ (erste Sitzung) | Abschnitt **Start-Check** unten |
| „Was steht als Nächstes an?“ | Ersten offenen Punkt in `OFFENE-PUNKTE.md` nehmen, in 2–3 Sätzen erklären, sagen was du brauchst |
| „Wie viele Punkte sind noch offen?“ | Kurz zählen (nur Kachus Punkte) und den nächsten nennen – keine ganze Liste |
| „Ich bin unsicher“ | Beruhigen, nichts weiter ausführen, in einfachen Worten erklären, was gerade passiert |
| Antwort von Enver, Foto, Text | Umsetzen nach **So machst du jede Änderung** |
| „Zeig mir mal …“ | Screenshot machen (`node werkzeuge/pruefen.js seite.html --bilder`) und zeigen |
| „Mach das rückgängig“ | Abschnitt **Rückgängig machen** |
| „Bereit für den Start“ | Punkt 13 (Prototyp-Hinweise entfernen) – nur wenn A–C erledigt sind, sonst freundlich sagen, was noch fehlt |

## Start-Check (nur solange Punkt 0 in OFFENE-PUNKTE.md offen ist)

Das Projekt wurde von einem anderen GitHub-Konto übernommen. Beim ersten Mal:

1. Begrüße Kachu kurz (2–3 Sätze): Du kennst das Projekt, du machst jetzt einen kurzen Start-Check, sie muss nichts tun.
2. Ermittle Konto und Projektname: `git remote get-url origin` → `<konto>/<projekt>`. Neue Adresse: `https://<konto in Kleinbuchstaben>.github.io/<projekt>/`.
3. Ersetze in allen `*.html` und in `README.md` die alte Adresse `https://justolgay.github.io/hajzeraj-prototyp/` durch die neue (betrifft og:url/og:image und README). Falls der Projektname nicht mehr `hajzeraj-prototyp` ist: in `404.html` den Wert `'/hajzeraj-prototyp/'` im Skript anpassen.
4. `node werkzeuge/pruefen.js` (Timeout 300000 ms) → muss „Alles in Ordnung.“ melden.
5. Speichern und veröffentlichen (siehe unten), Punkt 0 abhaken.
6. Prüfe, ob GitHub Pages eingeschaltet ist (Olgay hat das normalerweise vorab erledigt): `gh api repos/<konto>/<projekt>/actions/runs --jq '.workflow_runs[0] | .name, .status, .conclusion'` – es muss ein Lauf „pages build and deployment“ mit `success` erscheinen.
   Falls nicht: Biete Kachu zuerst an, eine kurze Nachricht an Olgay zu formulieren. Nur wenn sie es selbst probieren möchte, führe sie so hindurch (sie macht das im Browser, du kannst es nicht selbst):
   „Öffne bitte github.com/<konto>/<projekt>/settings/pages → bei ‚Source‘ **Deploy from a branch** → bei ‚Branch‘ **main** und **/(root)** → **Save**. Sag mir Bescheid, wenn du fertig bist.“
7. Sag Kachu die Adresse ihrer Website und schlag vor: „Schreib mir einfach ‚Was steht als Nächstes an?‘, dann fangen wir mit Punkt 1 an.“

## So machst du jede Änderung (immer gleich)

1. **Verstehen.** Wenn etwas unklar ist: eine kurze Rückfrage.
2. **Ändern** – nach den Regeln unten. Texte im Ton der Seite (Sie-Form gegenüber Besuchern, ruhig, keine Superlative). Nichts erfinden (keine Zahlen, Kundenstimmen, Auszeichnungen).
3. **Prüfen:** `node werkzeuge/pruefen.js <geänderte seiten> --bilder` (Timeout 300000 ms). Erst weiter, wenn „Alles in Ordnung.“ kommt. Fehler selbst beheben.
4. **Zeigen:** Zeig Kachu die geänderte Stelle (Screenshot aus `/tmp/pruefung/`, falls du Dateien/Bilder im Chat zeigen kannst; sonst beschreibe es in einem Satz).
5. **Fragen:** „Soll ich das so veröffentlichen?“ – erst nach einem Ja weiter.
6. **Veröffentlichen:** Hake den Punkt in `OFFENE-PUNKTE.md` ab (falls zutreffend), dann
   `git add -A && git commit -m "<kurze deutsche Beschreibung>" && git push origin main`.
   Kachu hat dich ausdrücklich beauftragt, direkt auf `main` zu veröffentlichen – keine Branches, keine Pull Requests (die Website wird nur aus `main` gebaut). Vorher bei Bedarf `git pull --rebase origin main`.
7. **Warten, bis es online ist:** `gh api repos/<konto>/<projekt>/actions/runs --jq '.workflow_runs[0] | .head_sha[0:7], .status, .conclusion'` wiederholen, bis der neueste Lauf zum eigenen Commit gehört und `completed success` zeigt. Dann: „Ist online: <Adresse>. Falls du noch die alte Version siehst, lade die Seite einmal neu.“
   (Die Live-Adresse selbst ist aus deiner Umgebung evtl. nicht erreichbar – der erfolgreiche Lauf reicht als Bestätigung.)

## Rückgängig machen

`git revert --no-edit HEAD` (bzw. den passenden Commit), prüfen, veröffentlichen. Sag Kachu: „Ist wieder wie vorher. Nichts ist verloren gegangen.“

## Fotos, die Kachu schickt

Bilder, die Kachu ins Chatfenster zieht, liegen als Datei in deiner Umgebung (der Pfad steht im Gespräch).
- Umwandeln mit `python3 werkzeuge/bild.py <datei> <ziel-ohne-endung> [breiten]` – dreht Handyfotos richtig und entfernt GPS-Daten.
- Teamfotos: `assets/img/team/<vorname-nachname>-600/1200.webp` (Querformat 3:2 wie die bisherigen). Projektfotos: `assets/img/ref/<name>-800/1600.webp`.
- `width`/`height`/`srcset` im HTML auf die ausgegebenen echten Maße setzen, sinnvollen `alt`-Text schreiben.
- Ersetzt ein echtes Foto ein KI-Beispielbild: das „Beispielbild“-Schild entfernen und den Bildnachweis im Impressum anpassen.
- Wenn ein Foto zu klein, unscharf oder schief ist: freundlich sagen und um ein anderes bitten.

## Firmenfarbe ändern (Punkt 1)

In `assets/css/style.css` auf `:root`: `--moss` ist die Akzentfarbe, `--moss-deep` die dunkle Variante (dunkle Flächen, Footer-Nähe). Aus einem Foto der Visitenkarte den Farbton bestimmen, `--moss-deep` deutlich dunkler ableiten. Kontrast prüfen: Text in `--moss` auf `--paper` (#F3EFE7) braucht mindestens 4,5 : 1, sonst den Ton für Text leicht abdunkeln. Zwei Varianten als Screenshot zeigen und Kachu/Enver wählen lassen.

## Technische Regeln (bitte strikt einhalten)

Ausführlich: `projekt/design-regeln.md` (Gestaltung), `projekt/bausteine.md` (CSS-Klassen mit Beispielen), `projekt/textbuch.md` (alle Texte + Herkunft), `projekt/audit-befund.md` (Analyse der alten Wix-Seite).

- Reines HTML/CSS/Vanilla-JS. Kein Build, keine Frameworks, **keine externen Ressourcen** (keine CDNs, Google Fonts, Tracking, eingebetteten Dienste). Ausnahme: OpenStreetMap-Karte, die erst nach Klick lädt.
- **Nur relative Links** (`leistungen.html`, `assets/...`), nie mit `/` am Anfang – die Seite liegt in einem Unterordner.
- 9 Seiten: `index, leistungen, referenzen, ueber-uns, kontakt, impressum, datenschutz, 404, audit`. **Header und Footer sind auf allen Seiten identisch** – Änderungen daran in allen 9 Dateien machen (nur `aria-current` unterscheidet sich).
- Gemeinsames CSS/JS: `assets/css/style.css`, `assets/js/main.js`. Seitenspezifisch: `assets/css/page-<name>.css`, `assets/js/page-<name>.js`.
- Schriften: Jost (Text, Navigation) und Cormorant Garamond (Überschriften), selbst gehostet in `assets/fonts/`. Das Zeichen „→“ gibt es darin nicht – Pfeile über die CSS-Klasse `.arrow`.
- Jede Seite: genau eine `<h1>`, eigener `<title>` und `meta description`. Bilder immer WebP mit `alt`, `width`, `height`.
- Bis Punkt 13 bleibt auf jeder Seite `<meta name="robots" content="noindex, nofollow">` und die `robots.txt` sperrt alles.
- Ungeklärte Inhalte sind mit `<span class="todo" title="…">prüfen</span>` (bzw. `ergänzen`) markiert, längere Hinweise in Impressum/Datenschutz mit `class="notice"`. Wenn ein Punkt geklärt ist: Inhalt anpassen **und** die Markierung entfernen.
- Vor jedem Veröffentlichen: `node werkzeuge/pruefen.js` ohne Fehler.

## Grenzen – das macht nicht Kachu

- **Punkt 12 (Formularversand)** und **Punkt 14 (Umzug der Domain hajzeraj.eu von Wix)** übernimmt Olgay. Wenn Kachu danach fragt: kurz erklären, dass Olgay das macht, und anbieten, eine Nachricht an Olgay vorzuformulieren.
- Wenn etwas Technisches nicht klappt (GitHub verweigert den Zugriff, Veröffentlichen schlägt fehl): Kachu in **einem** Satz sagen, was los ist, und eine fertige Nachricht an Olgay zum Kopieren anbieten. Nicht mit ihr gemeinsam herumprobieren.
- Keine Rechtsberatung. Rechtstexte nur übernehmen, nicht selbst „rechtssicher“ machen.
