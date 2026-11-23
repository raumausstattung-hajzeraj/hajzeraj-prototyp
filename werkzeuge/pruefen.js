// Prüft die Website vor dem Veröffentlichen.
// Aufruf (aus dem Projektordner):  node werkzeuge/pruefen.js [seite.html ...] [--bilder]
//   ohne Seitenangabe: alle Seiten · --bilder: zusätzlich Screenshots nach /tmp/pruefung/
// Startet einen eigenen kleinen Webserver, öffnet jede Seite auf PC (1440×900) und Handy (iPhone 13),
// scrollt wie ein Besucher und meldet Fehler. Endet mit Exit-Code 1, wenn etwas nicht stimmt.
const { chromium, devices } = require('playwright');
const http = require('http');
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const OUT = '/tmp/pruefung';
const args = process.argv.slice(2);
const mitBildern = args.includes('--bilder');
const alleSeiten = fs.readdirSync(ROOT).filter(f => f.endsWith('.html')).sort();
const seiten = args.filter(a => a.endsWith('.html'));
const zuPruefen = seiten.length ? seiten : alleSeiten;

const TYPES = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.svg': 'image/svg+xml',
  '.webp': 'image/webp', '.jpg': 'image/jpeg', '.png': 'image/png', '.woff2': 'font/woff2', '.txt': 'text/plain' };

function server() {
  return new Promise(res => {
    const s = http.createServer((req, rsp) => {
      const p = path.join(ROOT, decodeURIComponent(req.url.split('?')[0]));
      if (!p.startsWith(ROOT) || !fs.existsSync(p) || fs.statSync(p).isDirectory()) { rsp.writeHead(404); return rsp.end(); }
      rsp.writeHead(200, { 'Content-Type': TYPES[path.extname(p)] || 'application/octet-stream' });
      fs.createReadStream(p).pipe(rsp);
    });
    s.listen(0, () => res(s));
  });
}

// Statische Prüfung: Links, Bilder, Überschriften, Regeln aus CLAUDE.md
function statisch() {
  const fehler = [];
  const ids = {};
  for (const f of alleSeiten) ids[f] = new Set([...fs.readFileSync(path.join(ROOT, f), 'utf8').matchAll(/\sid="([^"]+)"/g)].map(m => m[1]));
  for (const f of zuPruefen) {
    const html = fs.readFileSync(path.join(ROOT, f), 'utf8').replace(/<script\b[\s\S]*?<\/script>/g, '');
    const h1 = (html.match(/<h1[\s>]/g) || []).length;
    if (h1 !== 1) fehler.push(`${f}: ${h1} Hauptüberschriften (<h1>) statt genau 1`);
    if (!/<meta name="robots" content="noindex, nofollow">/.test(html) && !/BEREIT_FUER_GOOGLE/.test(html)) fehler.push(`${f}: robots-noindex fehlt`);
    if (html.includes('→')) fehler.push(`${f}: Zeichen „→“ verwendet (nicht in der Schrift) – CSS-Klasse .arrow nutzen`);
    for (const m of html.matchAll(/<img\b[^>]*>/g)) {
      const tag = m[0];
      if (!/\salt=/.test(tag)) fehler.push(`${f}: Bild ohne alt-Text: ${tag.slice(0, 90)}`);
      if (!/\swidth=/.test(tag) || !/\sheight=/.test(tag)) fehler.push(`${f}: Bild ohne width/height: ${tag.slice(0, 90)}`);
    }
    const ziele = [...html.matchAll(/\s(?:href|src)="([^"]+)"/g)].map(m => m[1])
      .concat([...html.matchAll(/\ssrcset="([^"]+)"/g)].flatMap(m => m[1].split(',').map(s => s.trim().split(/\s+/)[0])));
    for (const z of ziele) {
      if (/^(https?:|mailto:|tel:|data:|javascript:)/.test(z)) continue;
      if (z.startsWith('/')) { fehler.push(`${f}: Link beginnt mit „/“ (muss relativ sein): ${z}`); continue; }
      const [datei, anker] = z.split('#');
      const ziel = datei || f;
      if (datei && !fs.existsSync(path.join(ROOT, datei))) { fehler.push(`${f}: Datei fehlt: ${z}`); continue; }
      if (anker && ziel.endsWith('.html') && ids[ziel] && !ids[ziel].has(anker)) fehler.push(`${f}: Sprungziel fehlt: ${z}`);
    }
  }
  return fehler;
}

(async () => {
  const fehler = statisch();
  const s = await server();
  const base = `http://localhost:${s.address().port}/`;
  if (mitBildern) fs.mkdirSync(OUT, { recursive: true });
  const b = await chromium.launch();
  await Promise.all([['PC', { viewport: { width: 1440, height: 900 } }], ['Handy', { ...devices['iPhone 13'] }]].map(async ([geraet, opts]) => {
    const ctx = await b.newContext(opts);
    for (const f of zuPruefen) {
      const p = await ctx.newPage();
      const fremd = new Set(), konsole = [];
      p.on('request', r => { const u = new URL(r.url()); if (u.hostname !== 'localhost') fremd.add(u.host); });
      p.on('console', m => { if (m.type() === 'error') konsole.push(m.text().slice(0, 120)); });
      p.on('pageerror', e => konsole.push(e.message.slice(0, 120)));
      await p.goto(base + f, { waitUntil: 'load' });
      const H = await p.evaluate(() => document.documentElement.scrollHeight);
      for (let y = 0; y < H; y += 400) { await p.evaluate(v => scrollTo(0, v), y); await p.waitForTimeout(60); }
      await p.waitForTimeout(900);
      const r = await p.evaluate(() => ({
        versteckt: [...document.querySelectorAll('.reveal,.img-reveal')].filter(e => !e.classList.contains('is-visible')).length,
        kaputt: [...document.querySelectorAll('img[src]')].filter(i => !(i.complete && i.naturalWidth > 0)).map(i => i.getAttribute('src')),
        quer: document.documentElement.scrollWidth > innerWidth + 1,
      }));
      const ort = `${f} (${geraet})`;
      if (f !== '404.html' && konsole.length) fehler.push(`${ort}: Fehlermeldungen im Browser: ${konsole.join(' | ')}`);
      if (fremd.size) fehler.push(`${ort}: lädt fremde Server: ${[...fremd].join(', ')}`);
      if (r.versteckt) fehler.push(`${ort}: ${r.versteckt} Elemente werden beim Scrollen nicht sichtbar`);
      if (r.kaputt.length) fehler.push(`${ort}: Bilder laden nicht: ${r.kaputt.join(', ')}`);
      if (r.quer) fehler.push(`${ort}: Seite ist breiter als der Bildschirm (seitliches Scrollen)`);
      if (mitBildern) {
        const vh = opts.viewport ? opts.viewport.height : 664;
        const n = Math.min(Math.ceil(H / vh), 20);
        for (let i = 0; i < n; i++) {
          await p.evaluate(v => scrollTo(0, v), i * vh); await p.waitForTimeout(350);
          await p.screenshot({ path: `${OUT}/${f.replace('.html', '')}-${geraet}-${String(i + 1).padStart(2, '0')}.png` });
        }
      }
      await p.close();
    }
    await ctx.close();
  }));
  await b.close(); s.close();
  console.log(`Geprüft: ${zuPruefen.length} Seite(n) auf PC und Handy.`);
  if (mitBildern) console.log(`Screenshots: ${OUT}/`);
  if (fehler.length) { console.log(`\n${fehler.length} Problem(e):`); fehler.forEach(x => console.log(' - ' + x)); process.exit(1); }
  console.log('Alles in Ordnung.');
})();
