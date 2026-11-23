"""Wandelt ein Foto (JPG, PNG, HEIC*, WEBP) in WebP-Dateien für die Website um.

Aufruf (aus dem Projektordner):
  python3 werkzeuge/bild.py <eingabe> <ziel-ohne-endung> [breite ...]
Beispiel:
  python3 werkzeuge/bild.py /pfad/foto.jpg assets/img/team/bedri-begu 600 1200
  -> assets/img/team/bedri-begu-600.webp und -1200.webp

Dreht das Bild richtig herum (Handy-Fotos), entfernt Metadaten (z. B. GPS-Position)
und gibt die echten Pixelmaße für width/height/srcset im HTML aus.
Standard-Breiten: 800 1600. (*HEIC nur, wenn pillow-heif installiert ist.)
"""
import sys
from pathlib import Path
from PIL import Image, ImageOps

if len(sys.argv) < 3:
    sys.exit(__doc__)
src, ziel = Path(sys.argv[1]), sys.argv[2]
breiten = [int(b) for b in sys.argv[3:]] or [800, 1600]
try:
    import pillow_heif  # optional
    pillow_heif.register_heif_opener()
except ImportError:
    pass

bild = ImageOps.exif_transpose(Image.open(src)).convert("RGB")
Path(ziel).parent.mkdir(parents=True, exist_ok=True)
print(f"Original: {bild.width}×{bild.height}")
for b in breiten:
    kopie = bild.copy()
    if kopie.width > b:
        kopie = kopie.resize((b, round(kopie.height * b / kopie.width)), Image.LANCZOS)
    out = f"{ziel}-{b}.webp"
    kopie.save(out, "WEBP", quality=80, method=6)  # ohne EXIF → keine GPS-Daten
    print(f"{out}  {kopie.width}×{kopie.height}  ({Path(out).stat().st_size // 1024} KB)  srcset: {out} {kopie.width}w")
