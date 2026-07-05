#!/usr/bin/env python3
"""Build docs/comparisons artifacts for the six subpages: side-by-side
live|clone images per section plus a per-page diff metrics table.
Differing pixel = any RGB channel delta > 32 (antialiasing tolerance)."""
import os, glob, sys
from PIL import Image, ImageChops, ImageDraw

SHOTS = '/home/shots/pages'
OUT = '/home/Sneaker-framerV2/docs/comparisons'
PAGES = ['about', 'shoes', 'stores', 'shipping', 'magazine', 'returns']
WIDTHS = ['desktop-1440', 'phone-390']


def score(a, b, tol=32):
    w, h = min(a.width, b.width), min(a.height, b.height)
    a = a.crop((0, 0, w, h)); b = b.crop((0, 0, w, h))
    d = ImageChops.difference(a, b)
    r, g, bl = d.split()
    m = ImageChops.lighter(ImageChops.lighter(r, g), bl)
    return 100.0 * sum(m.histogram()[tol:]) / (w * h)


rows = {}
for page in PAGES:
    for label in WIDTHS:
        src = f'{SHOTS}/{page}/{label}'
        dst = f'{OUT}/{page}/{label}'
        if not os.path.isdir(src):
            continue
        os.makedirs(dst, exist_ok=True)
        for lp in sorted(glob.glob(f'{src}/live-s*.png')):
            base = os.path.basename(lp).replace('live-', '')
            cp = f'{src}/clone-{base}'
            if not os.path.exists(cp):
                continue
            a = Image.open(lp).convert('RGB'); b = Image.open(cp).convert('RGB')
            s = score(a, b)
            sec = base.replace('.png', '')
            rows.setdefault(page, {}).setdefault(sec, {})[label] = s
            gap = 12
            c = Image.new('RGB', (a.width + b.width + gap, max(a.height, b.height) + 28), (24, 24, 24))
            dr = ImageDraw.Draw(c)
            dr.text((6, 7), f'LIVE  sneako.framer.website/{page} - {sec}', fill=(255, 255, 255))
            dr.text((a.width + gap + 6, 7), f'CLONE localhost/{page} - diff {s:.2f}%', fill=(255, 255, 255))
            c.paste(a, (0, 28)); c.paste(b, (a.width + gap, 28))
            c.save(f'{dst}/{base[:-4]}.jpg', quality=88, optimize=True)

with open(f'{OUT}/PAGES-METRICS.md', 'w') as f:
    f.write('# Subpages: live vs clone per-section pixel diff\n\n')
    f.write('Differing pixel = any RGB channel delta > 32. Captures freeze\n')
    f.write('time-based animations and hide the Framer badge on both sides.\n\n')
    for page in PAGES:
        if page not in rows:
            continue
        f.write(f'## /{page}\n\n| Section | Desktop 1440 | Phone 390 |\n|---|---|---|\n')
        for sec in sorted(rows[page]):
            r = rows[page][sec]
            d = f"{r.get('desktop-1440', float('nan')):.2f}%" if 'desktop-1440' in r else '—'
            p = f"{r.get('phone-390', float('nan')):.2f}%" if 'phone-390' in r else '—'
            f.write(f'| {sec} | {d} | {p} |\n')
        f.write('\n')
print('done')
