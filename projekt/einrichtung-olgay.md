# Einrichtung vor der Übergabe (für Olgay)

Einmalig, ca. 20–30 Minuten. Danach kann Kachu allein loslegen.

## 1 · GitHub-Firmenkonto anlegen
- Auf **github.com/signup** ein Konto für die Firma anlegen, am besten mit **info@hajzeraj.eu** (ein Postfach, auf das Kachu Zugriff hat).
- Benutzername z. B. **`raumausstattung-hajzeraj`**. Er wird Teil der Website-Adresse: `https://raumausstattung-hajzeraj.github.io/hajzeraj-prototyp/`.
- Kostenloser Plan reicht.
- **Zwei-Faktor-Anmeldung (2FA):** GitHub verlangt sie. Am besten direkt mit **Kachus Handy** einrichten (App „GitHub Mobile“ oder eine Authenticator-App). Die **Wiederherstellungscodes** ausdrucken und in Envers Unterlagen legen.

## 2 · Projekt an das Firmenkonto übertragen
1. Mit dem Konto **justOlgay** öffnen: `github.com/justOlgay/hajzeraj-prototyp/settings`
2. Ganz unten „Danger Zone“ → **Transfer ownership** → neuer Besitzer: `raumausstattung-hajzeraj` → bestätigen.
3. Das Firmenkonto bekommt eine E-Mail und muss die Übertragung **annehmen**.
4. Im Firmenkonto prüfen: `…/hajzeraj-prototyp/settings/pages` → Source „Deploy from a branch“, Branch **main** / **(root)**. Falls leer: so einstellen und **Save**.
   (Die alte Adresse unter justolgay.github.io funktioniert danach nicht mehr – Envers Link ändert sich. Claude passt beim Start-Check alles Nötige an.)

## 3 · Vorab testen
- Einmal selbst mit dem Firmenkonto anmelden und prüfen, dass GitHub Pages läuft (Schritt 2.4). Dann muss Kachu beim Start-Check nichts in GitHub anklicken.
- In `ANLEITUNG-KACHU.pdf` von Hand eintragen: Termin für die Einrichtung und wie Kachu dich erreicht.

## 4 · Claude bei Kachu
- Kachus Claude-Konto braucht einen Plan mit **Claude Code** (hat sie bereits).
- Beim ersten Mal **zusammen** Teil 1 der Anleitung machen (`ANLEITUNG-KACHU.pdf`). Schritt 2 übernimmst du: **claude.ai/connect-github** (in Kachus Claude-Konto) → mit dem Firmenkonto anmelden → die **Claude GitHub App** installieren und nur das Projekt `hajzeraj-prototyp` freigeben. Danach startet Kachu selbst eine neue Sitzung mit diesem Projekt und schreibt: „Hallo, ich bin Kachu. Bitte mach den Start-Check.“

## 5 · Passwörter
- Zugangsdaten **direkt an Kachu** geben (Zettel oder Passwort-Manager) – **nicht** in einen Claude-Chat schreiben. Claude braucht sie nie.

## 6 · Später (bleibt bei dir)
- Punkt 12 der offenen Punkte: Versanddienst für das Kontaktformular.
- Punkt 14: Umzug der Domain hajzeraj.eu von Wix auf GitHub Pages (Custom Domain + DNS beim Domain-Anbieter).
