# Sneaker-framer — Sneako clone

Pixel-faithful reproduction of [sneako.framer.website](https://sneako.framer.website/) built
from the Framer "Design to AI" export (`Main` component) in a Vite + React + TypeScript app.

Measured fidelity (per-section pixel diff vs the live site, any RGB channel delta > 32
counts as differing): **18 of 27 section×breakpoint pairs at 0.00%**, worst pair 0.25%.

| Breakpoint | Sections at 0.00% | Worst section |
| --- | --- | --- |
| Desktop 1440 | 6/9 | shipping 0.05% |
| Tablet 1000 | 6/9 | shipping 0.07% |
| Phone 390 | 6/9 | shipping 0.25% |

Full table + side-by-side screenshots: `docs/comparisons/`.

## Run

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build
```

## Architecture

| Piece | Path | Notes |
| --- | --- | --- |
| Framer export bundle | `src/framer/Main.js` + `_framer-runtime.js` | vendor code; only edit: CMS stub imports `cms-data.js` |
| CMS data | `src/framer/cms-data.js` | real "Shoes" collection items (one per query alias, offsets 0–3) |
| Design tokens & fonts | `src/tokens.css` | imported once at app root |
| Effects engine | `src/framer/utils/FramerEffects.tsx` | reimplements the FX the exported runtime drops (see below) |
| Responsive variant switch | `src/framer/utils/ResponsiveWrapper.tsx` | Phone < 810 ≤ Tablet < 1200 ≤ Desktop |
| Navbar / Footer | `src/Navbar.tsx`, `src/Footer.tsx` | live page keeps these in a layout template outside `Main`; rebuilt from extracted markup + CSS (footer ships all 3 breakpoint copies behind `.ssr-variant` media gates) |
| Scroll-section refs | `src/App.tsx` | wires the 11 `ScrollSectionRef` props to the rendered sections |
| Breakpoint restorations | `src/live-breakpoints.css` | media rules the exporter drops for nested smart components, regenerated from the published page by `scripts/extract-breakpoints.mjs` (doubled-specificity scope so they outrank the runtime-injected base rules) |
| CSS restorations | `src/index.css` | `100vh/120vh/20vh` section heights + figure reset + Brands padding fix + phone hero card/cloud + tablet title height (exporter flattened these) |

## Known export quirks handled here

- **StrictMode off** (`src/main.tsx`) — the bundled motion runtime throws on dev double-mount.
- **Fast Refresh excluded** for the Framer bundles (`vite.config.ts`) — react-refresh
  overflows the stack fingerprinting them.
- **Dead FX reimplemented** in `FramerEffects.tsx` with formulas lifted from the runtime
  source (`scroll-target lerp`, `parallax drift = −scrollY·(speed/100−1)`): hero title
  appear/fade/parallax, hero + legends shoe shadows, 4 delivery-box scroll lerps (with
  phone-specific end values + 0.6 scale measured off the live runtime), the cargo-plane
  scroll fly-by, 2 in-view reveals, footer letter drop-in (replays on re-entry, bound in
  every footer breakpoint copy). Everything else (clouds, floating shoe, product
  mockups, coffee shoe) runs natively in the exported runtime and is intentionally
  left alone.
- **Expected console noise:** the `__withFX` unknown-prop warning (diagnostic for the
  dead-FX nodes above) and a "mix Motion versions" warning — both benign here.

## Comparison artifacts

`docs/comparisons/` contains side-by-side live-vs-clone screenshots per section
(desktop/tablet/phone) with pixel-diff percentages, produced by `scripts/capture.mjs`.

```bash
node scripts/capture.mjs "https://sneako.framer.website/" out/live 1440
node scripts/capture.mjs "http://localhost:5173/" out/clone 1440
```
