#!/usr/bin/env python3
"""Build docs/comparisons artifacts: side-by-side live|clone images and a
per-section diff metrics table (max-channel delta > 32 = differing pixel)."""
import os, glob, sys
from PIL import Image, ImageChops, ImageDraw

SHOTS = '/home/shots'
OUT = '/home/Sneaker-framer/docs/comparisons'
WIDTHS = [
    ('desktop-1440', f'{SHOTS}/live', f'{SHOTS}/clone'),
    ('tablet-1000', f'{SHOTS}/tablet', f'{SHOTS}/tablet'),
    ('phone-390', f'{SHOTS}/phone', f'{SHOTS}/phone'),
]

def score(a, b, tol=32):
    w, h = min(a.width, b.width), min(a.height, b.height)
    a = a.crop((0, 0, w, h)); b = b.crop((0, 0, w, h))
    d = ImageChops.difference(a, b)
    r, g, bl = d.split()
    m = ImageChops.lighter(ImageChops.lighter(r, g), bl)
    return 100.0 * sum(m.histogram()[tol:]) / (w * h)

rows = {}
for label, ldir, cdir in WIDTHS:
    os.makedirs(f'{OUT}/{label}', exist_ok=True)
    for lp in sorted(glob.glob(f'{ldir}/live-s*.png')):
        base = os.path.basename(lp).replace('live-', '')
        cp = f'{cdir}/clone-{base}'
        if not os.path.exists(cp):
            continue
        a = Image.open(lp).convert('RGB'); b = Image.open(cp).convert('RGB')
        s = score(a, b)
        sec = base.replace('.png', '')
        rows.setdefault(sec, {})[label] = s
        gap = 12
        c = Image.new('RGB', (a.width + b.width + gap, max(a.height, b.height) + 28), (24, 24, 24))
        dr = ImageDraw.Draw(c)
        dr.text((6, 7), f'LIVE  sneako.framer.website - {sec}', fill=(255, 255, 255))
        dr.text((a.width + gap + 6, 7), f'CLONE localhost - diff {s:.2f}%', fill=(255, 255, 255))
        c.paste(a, (0, 28)); c.paste(b, (a.width + gap, 28))
        c.save(f'{OUT}/{label}/{base[:-4]}.jpg', quality=90, optimize=True)

with open(f'{OUT}/METRICS.md', 'w') as f:
    f.write('# Live vs Clone - per-section pixel diff\n\n')
    f.write('Differing pixel = any RGB channel delta > 32. Captures use the same\n')
    f.write('freeze stylesheet on both pages (time-based loops pinned at rest,\n')
    f.write('Framer badge hidden) so frames are deterministic.\n\n')
    f.write('| Section | Desktop 1440 | Tablet 1000 | Phone 390 |\n|---|---|---|---|\n')
    for sec in sorted(rows):
        r = rows[sec]
        cells = [f"{r.get(k, float('nan')):.2f}%" if k in r else '-' for k in ('desktop-1440', 'tablet-1000', 'phone-390')]
        f.write(f'| {sec} | {cells[0]} | {cells[1]} | {cells[2]} |\n')
print('done')
for sec in sorted(rows):
    print(sec, {k: round(v, 2) for k, v in rows[sec].items()})
