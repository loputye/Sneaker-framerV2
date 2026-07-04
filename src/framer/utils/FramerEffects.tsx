/**
 * FramerEffects — hand-built for this export (replaces the auto-generated stub).
 *
 * The exported runtime executes SOME of the bundle's FX natively (verified
 * empirically against the published site):
 *   ✓ floating-shoe loop + scroll transform (.framer-695nz-container)
 *   ✓ cloud parallax (speeds 105/120) — values match live exactly
 *   ✓ shipping shoe-mockup scroll lerps (.framer-13fxww1 / .framer-92cbqa)
 *   ✓ hero cloud / swatch appear animations
 * ...but drops it on these nodes (plain `motion.div` withFX wrappers emit the
 * `__withFX` React warning and never animate):
 *   ✗ hero "Title & Tag" appear + scroll fade + parallax (.framer-f0rlmn)
 *   ✗ hero shoe shadow appear + 5s scale loop (.framer-qyuvuf)
 *   ✗ legends shoe shadow scroll lerp (.framer-gkb3ke)
 *   ✗ shipping delivery-box scroll lerps (.framer-19bpks7/-1ocq9fk/-1e7k166/-1ryxzvp)
 *   ✗ approach onInView reveals (.framer-yz5b6m / .framer-1oo7nd9)
 *
 * This engine reimplements exactly the dead set, using the runtime's own
 * math extracted from _framer-runtime.js:
 *   scroll-target lerp: top = sectionTop − threshold·viewportH;
 *                       end = max(top + sectionH, 0);
 *                       progress = clamp((scrollY − max(top,0)) / (end − max(top,0)))
 *   parallax:           driftY = −scrollY · (speed/100 − 1)
 * Styles are written with priority "important" so the (inert) runtime cannot
 * clobber them on re-render.
 */
'use client';
import { useEffect } from 'react';

interface FXTarget {
  opacity?: number;
  x?: number;
  y?: number;
  scale?: number;
  rotate?: number;
}

interface ScrollSpec {
  sel: string;
  /** data-framer-name of the driving <section> (scroll target ref) */
  section: string;
  threshold: number;
  from: FXTarget;
  to: FXTarget;
  /** transform prefix applied before FX transforms (Framer transformTemplate) */
  base?: string;
  /** extra rotation baked into the element's own style (e.g. box 3's rotate: 26) */
  baseRotate?: number;
  /** parallax speed (Framer scroll speed effect) applied on top of the lerp */
  parallaxSpeed?: number;
  /** entry appear animation played once on load before scroll takes over */
  appear?: { from: FXTarget; to: FXTarget; delay: number; dur: number; ease: [number, number, number, number] };
  /** overrides applied when the viewport is below the 810px phone breakpoint */
  phone?: { threshold?: number; from?: FXTarget; to?: FXTarget; extraScale?: number };
}

interface InViewSpec {
  sel: string;
  from: FXTarget;
  to: FXTarget;
  dur: number;
  base?: string;
}

interface LoopSpec {
  sel: string;
  base?: string;
  baseline: FXTarget;
  prop: 'scale';
  fromV: number;
  toV: number;
  dur: number; // one direction, ms — mirrors back
}

const SCROLL_SPECS: ScrollSpec[] = [
  {
    // Hero "Title & Tag": fades out over the hero scroll range, drifts down
    // at parallax speed 80, and appears on load with a 1.5s tween.
    sel: '.framer-f0rlmn',
    section: 'Variant 1',
    threshold: 1,
    from: { opacity: 1 },
    to: { opacity: 0 },
    base: 'translate(-50%, -50%)',
    parallaxSpeed: 80,
    appear: { from: { opacity: 0.001, y: 50 }, to: { opacity: 1, y: 0 }, delay: 0.5, dur: 1.5, ease: [0.12, 0.23, 0.5, 1] },
  },
  {
    sel: '.framer-gkb3ke', // Legends shoe shadow
    section: 'Legends Collection',
    threshold: 0.5,
    from: { opacity: 0.5, scale: 0.8 },
    to: { opacity: 1, scale: 1 },
  },
  {
    sel: '.framer-1805o0f', // cargo plane — flies left as the section scrolls
    section: 'Shipping',
    threshold: 1,
    from: { x: 0 },
    to: { x: -260 },
    phone: { threshold: 0.5, to: { x: -410 } },
  },
  {
    sel: '.framer-19bpks7', // Delivery Box 1
    section: 'Shipping',
    threshold: 0.5,
    from: { x: -20 },
    to: { x: 20, y: 40, rotate: 12 },
    base: 'translate(-50%, -50%)',
    phone: { extraScale: 0.6, to: { x: 5, y: 40, rotate: 12 } },
  },
  {
    sel: '.framer-1ocq9fk', // Delivery Box 2
    section: 'Shipping',
    threshold: 0.5,
    from: { x: -60 },
    to: { x: 20, y: 40, rotate: -12 },
    base: 'translate(-50%, -50%)',
    phone: { extraScale: 0.6, to: { x: 0, y: 40, rotate: -12 } },
  },
  {
    sel: '.framer-1e7k166', // Delivery Box 3 (own style carries rotate: 26)
    section: 'Shipping',
    threshold: 0.5,
    from: { x: -80, rotate: 5 },
    to: { x: 10, y: 40, rotate: 8 },
    base: 'translate(-50%, -50%)',
    baseRotate: 26,
    phone: { extraScale: 0.6 },
  },
  {
    sel: '.framer-1ryxzvp', // Delivery Box 4
    section: 'Shipping',
    threshold: 0.5,
    from: { x: -40, rotate: -8 },
    to: { x: 30, y: 30, rotate: -8 },
    base: 'translate(-50%, -50%)',
    phone: { extraScale: 0.6, to: { x: -5, y: 30, rotate: -8 } },
  },
];

const INVIEW_SPECS: InViewSpec[] = [
  { sel: '.framer-yz5b6m', from: { rotate: 5, y: 40 }, to: { rotate: 0, y: 0 }, dur: 800 },
  { sel: '.framer-1oo7nd9', from: { y: 50 }, to: { y: -20 }, dur: 800 },
];

/**
 * Footer "SNEAKS" letters: the published layout template animates each letter
 * from its authored offset into place when the footer scrolls into view. Our
 * extracted footer is static markup, so we replay that variant switch here.
 */
const FOOTER_LETTERS_SELECTOR = '.site-footer svg';
const FOOTER_LETTER_STAGGER = 70; // ms between letters
const FOOTER_LETTER_DUR = 700;

const LOOP_SPECS: LoopSpec[] = [
  // Hero shoe shadow: 5s linear scale pulse (mirrors), baseline pinned
  // because its native appear animation freezes mid-flight.
  { sel: '.framer-qyuvuf', base: 'translateX(-50%)', baseline: { opacity: 1, y: 0 }, prop: 'scale', fromV: 1, toV: 0.7, dur: 5000 },
];

const clamp01 = (v: number) => (v < 0 ? 0 : v > 1 ? 1 : v);
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

function cubicBezier(x1: number, y1: number, x2: number, y2: number) {
  // Standard CSS cubic-bezier solver (Newton + bisection fallback).
  const cx = 3 * x1, bx = 3 * (x2 - x1) - cx, ax = 1 - cx - bx;
  const cy = 3 * y1, by = 3 * (y2 - y1) - cy, ay = 1 - cy - by;
  const sampleX = (t: number) => ((ax * t + bx) * t + cx) * t;
  const sampleY = (t: number) => ((ay * t + by) * t + cy) * t;
  const sampleDX = (t: number) => (3 * ax * t + 2 * bx) * t + cx;
  return (x: number) => {
    if (x <= 0) return 0;
    if (x >= 1) return 1;
    let t = x;
    for (let i = 0; i < 8; i++) {
      const dx = sampleX(t) - x;
      if (Math.abs(dx) < 1e-6) return sampleY(t);
      const d = sampleDX(t);
      if (Math.abs(d) < 1e-6) break;
      t -= dx / d;
    }
    let lo = 0, hi = 1;
    t = x;
    while (lo < hi) {
      const dx = sampleX(t) - x;
      if (Math.abs(dx) < 1e-6) break;
      if (dx > 0) hi = t; else lo = t;
      t = (lo + hi) / 2;
    }
    return sampleY(t);
  };
}

// Framer duration-based spring with bounce 0 — visually an exponential
// settle; this ease-out curve matches the settle envelope closely.
const springEase = (t: number) => 1 - Math.pow(1 - t, 3.2);

function composeTransform(base: string | undefined, t: FXTarget, baseRotate = 0): string {
  const parts: string[] = [];
  if (base) parts.push(base);
  if (t.x || t.y) parts.push(`translate3d(${t.x ?? 0}px, ${t.y ?? 0}px, 0)`);
  const rot = (t.rotate ?? 0) + baseRotate;
  if (rot) parts.push(`rotate(${rot}deg)`);
  if (t.scale !== undefined && t.scale !== 1) parts.push(`scale(${t.scale})`);
  return parts.length ? parts.join(' ') : 'none';
}

function lerpTarget(a: FXTarget, b: FXTarget, t: number): FXTarget {
  return {
    opacity: lerp(a.opacity ?? 1, b.opacity ?? 1, t),
    x: lerp(a.x ?? 0, b.x ?? 0, t),
    y: lerp(a.y ?? 0, b.y ?? 0, t),
    scale: lerp(a.scale ?? 1, b.scale ?? 1, t),
    rotate: lerp(a.rotate ?? 0, b.rotate ?? 0, t),
  };
}

export default function FramerEffects() {
  useEffect(() => {
    let raf = 0;
    let disposed = false;
    const t0 = performance.now();

    type Bound =
      | { kind: 'scroll'; spec: ScrollSpec; el: HTMLElement; section: HTMLElement; ease?: (x: number) => number }
      | { kind: 'loop'; spec: LoopSpec; el: HTMLElement }
      | { kind: 'inview'; spec: InViewSpec; el: HTMLElement; startedAt: number | null; done: boolean }
      | { kind: 'letter'; el: HTMLElement; fromY: number; delay: number; startedAt: number | null; done: boolean };

    const bound: Bound[] = [];
    const observers: IntersectionObserver[] = [];
    let lettersBound = false;

    const bind = () => {
      for (const spec of SCROLL_SPECS) {
        const el = document.querySelector<HTMLElement>(spec.sel);
        const section = document.querySelector<HTMLElement>(`section[data-framer-name="${spec.section}"]`);
        if (el && section && !bound.some((b) => 'el' in b && b.el === el)) {
          bound.push({ kind: 'scroll', spec, el, section, ease: spec.appear ? cubicBezier(...spec.appear.ease) : undefined });
        }
      }
      for (const spec of LOOP_SPECS) {
        const el = document.querySelector<HTMLElement>(spec.sel);
        if (el && !bound.some((b) => 'el' in b && b.el === el)) bound.push({ kind: 'loop', spec, el });
      }
      for (const spec of INVIEW_SPECS) {
        const el = document.querySelector<HTMLElement>(spec.sel);
        if (el && !bound.some((b) => 'el' in b && b.el === el)) {
          const entry: Bound = { kind: 'inview', spec, el, startedAt: null, done: false };
          bound.push(entry);
          const io = new IntersectionObserver(
            (entries) => {
              for (const e of entries) {
                if (e.isIntersecting && entry.startedAt === null) {
                  entry.startedAt = performance.now();
                  io.disconnect();
                }
              }
            },
            { threshold: 0 },
          );
          io.observe(el);
          observers.push(io);
        }
      }
      if (!lettersBound) {
        // Bind letters in every breakpoint copy of the footer (desktop /
        // tablet / phone ship as separate .ssr-variant copies); only the
        // visible copy's IntersectionObserver ever fires.
        const footers = [...document.querySelectorAll<HTMLElement>('.site-footer footer')]
          .map((footer) => ({
            footer,
            letters: [...footer.querySelectorAll<HTMLElement>(FOOTER_LETTERS_SELECTOR)].filter((s) => s.querySelector('.framer-fit-text')),
          }))
          .filter((f) => f.letters.length);
        if (footers.length) {
          lettersBound = true;
          for (const { footer, letters } of footers) {
            const entries: Extract<Bound, { kind: 'letter' }>[] = letters.map((el, i) => {
              // Hidden copies compute transform as "none"; read the inline
              // SSR appear offset first, computed matrix as fallback.
              const inline = /translateY\((-?[\d.]+)px\)/.exec(el.style.transform);
              const mat = /matrix\([^)]*,\s*(-?[\d.]+)\)/.exec(getComputedStyle(el).transform);
              const fromY = Number(inline?.[1] ?? mat?.[1]) || 0;
              const entry = { kind: 'letter' as const, el, fromY, delay: i * FOOTER_LETTER_STAGGER, startedAt: null, done: false };
              bound.push(entry);
              return entry;
            });
            const io = new IntersectionObserver(
              (obs) => {
                for (const e of obs) {
                  if (e.isIntersecting) {
                    const t = performance.now();
                    entries.forEach((en) => { if (en.startedAt === null) en.startedAt = t; });
                  } else {
                    // Live replays the letter appear on every re-entry;
                    // reset to the authored offsets while offscreen.
                    if (document.documentElement.dataset.fxFreeze === '1') continue;
                    entries.forEach((en) => {
                      en.startedAt = null;
                      en.done = false;
                      en.el.style.setProperty('transform', `translateY(${en.fromY}px)`, 'important');
                    });
                  }
                }
              },
              { threshold: 0.1 },
            );
            io.observe(footer);
            observers.push(io);
          }
        }
      }
    };

    const set = (el: HTMLElement, prop: string, val: string) => {
      el.style.setProperty(prop, val, 'important');
    };

    const docEl = document.documentElement;

    const frame = (now: number) => {
      if (disposed) return;
      const scrollY = window.scrollY;
      const vh = window.innerHeight;

      for (const b of bound) {
        if (b.kind === 'scroll') {
          const { spec, el, section } = b;
          // runtime formula: calcOffsetTop − threshold·containerLength
          let offsetTop = 0;
          let n: HTMLElement | null = section;
          while (n && n !== docEl && n !== document.body) {
            offsetTop += n.offsetTop;
            n = n.offsetParent as HTMLElement | null;
          }
          const isPhone = window.innerWidth < 810;
          const ph = isPhone ? spec.phone : undefined;
          const top = offsetTop - (ph?.threshold ?? spec.threshold) * vh;
          const start = Math.max(top, 0);
          const end = Math.max(top + section.clientHeight, 0);
          const p = end > start ? clamp01((scrollY - start) / (end - start)) : 0;
          let state = lerpTarget(ph?.from ?? spec.from, ph?.to ?? spec.to, p);
          if (ph?.extraScale !== undefined) state.scale = (state.scale ?? 1) * ph.extraScale;

          if (spec.appear && b.ease) {
            const t = clamp01((now - t0) / 1000 / spec.appear.dur - spec.appear.delay / spec.appear.dur);
            const at = b.ease(t);
            const a = lerpTarget(spec.appear.from, spec.appear.to, at);
            state = {
              opacity: Math.min(a.opacity ?? 1, state.opacity ?? 1),
              x: (state.x ?? 0) + (a.x ?? 0),
              y: (state.y ?? 0) + (a.y ?? 0),
              scale: (state.scale ?? 1) * (a.scale ?? 1),
              rotate: (state.rotate ?? 0) + (a.rotate ?? 0),
            };
          }
          if (spec.parallaxSpeed !== undefined && spec.parallaxSpeed !== 100) {
            state.y = (state.y ?? 0) + -scrollY * (spec.parallaxSpeed / 100 - 1);
          }
          set(el, 'opacity', String(state.opacity ?? 1));
          set(el, 'transform', composeTransform(spec.base, state, spec.baseRotate));
          set(el, 'will-change', 'transform');
        } else if (b.kind === 'loop') {
          const { spec, el } = b;
          const frozen = document.documentElement.dataset.fxFreeze === '1';
          const cycle = frozen ? 0 : ((now - t0) % (spec.dur * 2)) / spec.dur; // 0..2
          const t = cycle <= 1 ? cycle : 2 - cycle; // mirror
          const v = lerp(spec.fromV, spec.toV, t);
          const state: FXTarget = { ...spec.baseline, scale: v };
          set(el, 'opacity', String(state.opacity ?? 1));
          set(el, 'transform', composeTransform(spec.base, state));
        } else {
          if (b.kind === 'letter') {
            if (docEl.dataset.fxFreeze === '1') {
              // deterministic-capture mode: pin at rest
              b.el.style.setProperty('transform', 'translateY(0px)', 'important');
              b.done = true;
              continue;
            }
            if (b.done) continue;
            if (b.startedAt === null) continue; // rest at authored offset until footer in view
            const t = clamp01((now - b.startedAt - b.delay) / FOOTER_LETTER_DUR);
            const y = lerp(b.fromY, 0, springEase(t));
            b.el.style.setProperty('transform', `translateY(${y}px)`, 'important');
            if (t >= 1) b.done = true;
            continue;
          }
          const { spec, el } = b;
          if (b.done) continue;
          const t = b.startedAt === null ? 0 : clamp01((now - b.startedAt) / spec.dur);
          const state = lerpTarget(spec.from, spec.to, springEase(t));
          set(el, 'opacity', String(state.opacity ?? 1));
          set(el, 'transform', composeTransform(spec.base, state));
          if (t >= 1) b.done = true;
        }
      }

      if ((bound.length < SCROLL_SPECS.length + LOOP_SPECS.length + INVIEW_SPECS.length || !lettersBound) && now - t0 < 8000) {
        bind();
      }
      raf = requestAnimationFrame(frame);
    };

    bind();
    raf = requestAnimationFrame(frame);
    return () => {
      disposed = true;
      cancelAnimationFrame(raf);
      observers.forEach((o) => o.disconnect());
    };
  }, []);

  return null;
}
