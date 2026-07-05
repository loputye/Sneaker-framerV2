// PageEffects — WAAPI reimplementation of the `__framer__*` animations the
// exported runtime drops (workaround #4). Shared by the six subpages.
//
//   LOOPS  — load-more spinners (Shoes .framer-ivc6i8, Stores .framer-ptbnlq)
//   APPEAR — per-page mount reveals passed in via props (About hero)
//   FOOTER — the layout template's "SNEAKS" letters carry scroll-linked
//            transforms: each lerps from its baked ±50px offset to rest
//            while its authored rect crosses the viewport bottom edge
//            (calibrated against the published site).
//   SCROLLFX — scroll-target lerps the exported runtime drops on some
//            breakpoint variants (e.g. the About "Our Mission" phone zoom).
'use client';
import { useEffect } from 'react';

interface FXTarget {
  opacity?: number;
  x?: number;
  y?: number;
}

export interface AppearSpec {
  selector: string;
  from: FXTarget;
  to: FXTarget;
  /** transform prefix applied before the animated translate (transformTemplate) */
  base?: string;
  durationMs: number;
}

interface LoopSpec {
  selector: string;
  keyframes: Keyframe[];
  duration: number;
  easing?: string;
}

const LOOP_SPECS: LoopSpec[] = [
  {
    selector: '.framer-ivc6i8, .framer-ptbnlq',
    keyframes: [{ transform: 'rotate(0deg)' }, { transform: 'rotate(360deg)' }],
    duration: 650,
    easing: 'cubic-bezier(0, 0, 1, 1)',
  },
];

// Framer duration-based spring with bounce 0 — an exponential settle.
// Same envelope the home engine uses, sampled into a CSS linear() easing.
const springEase = (t: number) => 1 - Math.pow(1 - t, 3.2);
const SPRING_LINEAR = `linear(${Array.from({ length: 25 }, (_, i) => springEase(i / 24).toFixed(4)).join(',')})`;

function composeTransform(base: string | undefined, t: FXTarget): string {
  const parts: string[] = [];
  if (base) parts.push(base);
  parts.push(`translate3d(${t.x ?? 0}px, ${t.y ?? 0}px, 0)`);
  return parts.join(' ');
}

export interface TocAnchorsSpec {
  /** ordered anchor ids matching the CMS section order */
  ids: string[];
  /** page-specific class of the per-section content wrappers */
  blockSelector: string;
}

export interface ScrollFXSpec {
  selector: string;
  /** data-framer-name of the driving <section> */
  section: string;
  /** runtime scroll-target threshold (fraction of viewport height) */
  threshold: number;
  fromScale: number;
  toScale: number;
  /** only active while this media query matches (defaults to always) */
  media?: string;
}

export default function PageEffects({
  appear = [],
  tocAnchors,
  scrollFX = [],
}: {
  appear?: AppearSpec[];
  /**
   * Policy pages' document sections. The published runtime assigns anchor
   * ids at hydration (ResolveLinks over the CMS slugs) and highlights the
   * sidebar tab whose section is currently scrolled; the exported
   * ResolveLinks resolves null without the site's page registry, so we
   * re-create ids, hrefs, smooth scrolling and active tracking here.
   */
  tocAnchors?: TocAnchorsSpec;
  /** scroll-linked transforms the runtime drops on some variants */
  scrollFX?: ScrollFXSpec[];
}) {
  useEffect(() => {
    const cleanups: Array<() => void> = [];
    const anims: Animation[] = [];

    // ---- scroll-target lerps (runtime formula, calibrated on live) ----
    if (scrollFX.length) {
      const bindFX = () => {
        const bound = scrollFX
          .map((spec) => ({
            spec,
            el: document.querySelector<HTMLElement>(spec.selector),
            section: document.querySelector<HTMLElement>(`section[data-framer-name="${spec.section}"]`),
            mql: spec.media ? window.matchMedia(spec.media) : null,
          }))
          .filter((b) => b.el && b.section);
        if (bound.length !== scrollFX.length) return false;
        let raf = 0;
        const frame = () => {
          raf = 0;
          const vh = window.innerHeight;
          const sy = window.scrollY;
          for (const b of bound) {
            if (b.mql && !b.mql.matches) continue;
            const { spec } = b;
            const secRect = b.section!.getBoundingClientRect();
            const top = secRect.top + sy - spec.threshold * vh;
            const start = Math.max(top, 0);
            const end = Math.max(top + secRect.height, 0);
            const p = end > start ? Math.min(1, Math.max(0, (sy - start) / (end - start))) : 1;
            const s = spec.fromScale + (spec.toScale - spec.fromScale) * p;
            b.el!.style.setProperty('transform', `scale(${s.toFixed(5)})`, 'important');
          }
        };
        const onScroll = () => {
          if (!raf) raf = requestAnimationFrame(frame);
        };
        frame();
        addEventListener('scroll', onScroll, { passive: true });
        addEventListener('resize', onScroll);
        cleanups.push(() => {
          removeEventListener('scroll', onScroll);
          removeEventListener('resize', onScroll);
          if (raf) cancelAnimationFrame(raf);
        });
        return true;
      };
      if (!bindFX()) {
        const t = setInterval(() => {
          if (bindFX()) clearInterval(t);
        }, 250);
        const stop = setTimeout(() => clearInterval(t), 8000);
        cleanups.push(() => {
          clearInterval(t);
          clearTimeout(stop);
        });
      }
    }

    // ---- policy-page table of contents: ids, links, active tracking ----
    if (tocAnchors && tocAnchors.ids.length) {
      const ids = tocAnchors.ids;
      const ACTIVE_CLS = 'framer-v-mvn0tj';
      const BASE_CLS = 'framer-v-lvzxr7';
      const BLUE = 'var(--token-32488aad-6873-4288-96b6-2211f3f7af61, rgb(0, 123, 255))';
      const bindToc = () => {
        const blocks = [...document.querySelectorAll<HTMLElement>(tocAnchors.blockSelector)];
        // one sidebar copy per visible breakpoint variant
        const tabs = [...document.querySelectorAll<HTMLAnchorElement>('a.framer-lvzxr7')].filter(
          (a) => a.offsetParent !== null,
        );
        if (!blocks.length || !tabs.length) return false;
        blocks.forEach((el, i) => {
          if (ids[i]) el.id = ids[i];
        });
        const path = window.location.pathname;
        tabs.forEach((a, i) => {
          if (!ids[i]) return;
          a.setAttribute('href', `${path}#${ids[i]}`);
          const onClick = (ev: MouseEvent) => {
            ev.preventDefault();
            const target = document.getElementById(ids[i]);
            if (target) {
              target.scrollIntoView({ behavior: 'smooth', block: 'start' });
              history.replaceState(null, '', `#${ids[i]}`);
            }
          };
          a.addEventListener('click', onClick);
          cleanups.push(() => a.removeEventListener('click', onClick));
        });

        let current = -1;
        const setActive = (idx: number) => {
          if (idx === current) return;
          current = idx;
          tabs.forEach((a, i) => {
            const active = i === idx;
            a.classList.toggle(ACTIVE_CLS, active);
            a.classList.toggle(BASE_CLS, !active);
            a.setAttribute('data-framer-name', active ? 'Active' : 'Base');
            const labelWrap = a.querySelector<HTMLElement>('[data-framer-component-type="RichTextContainer"]');
            if (labelWrap) {
              labelWrap.style.setProperty('--extracted-r6o4lv', active ? BLUE : '');
              if (!active) labelWrap.style.removeProperty('--extracted-r6o4lv');
            }
          });
        };
        let raf = 0;
        const onScroll = () => {
          if (raf) return;
          raf = requestAnimationFrame(() => {
            raf = 0;
            // Live behavior (calibrated against the published page): a
            // section is current while the line ~100px below the viewport
            // top sits inside that section's block bounds; between blocks
            // (and before the first / past the last) no tab is active.
            const probe = scrollY + 100;
            let idx = -1;
            blocks.forEach((b, i) => {
              const r = b.getBoundingClientRect();
              if (probe >= r.top + scrollY && probe <= r.bottom + scrollY) idx = i;
            });
            setActive(idx);
          });
        };
        addEventListener('scroll', onScroll, { passive: true });
        cleanups.push(() => removeEventListener('scroll', onScroll));
        onScroll();
        return true;
      };
      if (!bindToc()) {
        const t = setInterval(() => {
          if (bindToc()) clearInterval(t);
        }, 250);
        const stop = setTimeout(() => clearInterval(t), 8000);
        cleanups.push(() => {
          clearInterval(t);
          clearTimeout(stop);
        });
      }
    }

    // ---- appear reveals (run once on mount) ----
    for (const spec of appear) {
      document.querySelectorAll<HTMLElement>(spec.selector).forEach((el) => {
        const anim = el.animate(
          [
            { opacity: spec.from.opacity ?? 1, transform: composeTransform(spec.base, spec.from) },
            { opacity: spec.to.opacity ?? 1, transform: composeTransform(spec.base, spec.to) },
          ],
          { duration: spec.durationMs, easing: SPRING_LINEAR, fill: 'forwards' },
        );
        anims.push(anim);
      });
    }

    // ---- infinite loops (spinners appear with pagination/Suspense) ----
    const bound = new WeakSet<Element>();
    const bindLoops = () => {
      for (const spec of LOOP_SPECS) {
        document.querySelectorAll<HTMLElement>(spec.selector).forEach((el) => {
          if (bound.has(el)) return;
          bound.add(el);
          anims.push(
            el.animate(spec.keyframes, {
              duration: spec.duration,
              easing: spec.easing,
              iterations: Infinity,
            }),
          );
        });
      }
    };
    bindLoops();
    const mo = new MutationObserver(bindLoops);
    mo.observe(document.body, { childList: true, subtree: true });
    cleanups.push(() => mo.disconnect());

   // ---- footer letters ----
    const bindLetters = () => {
      // The published site drives each letter with a scroll-linked lerp
      // (measured by sweeping the live page): translateY goes linearly from
      // the authored offset to 0 while scrollY moves from "offset letter
      // enters the viewport" to "offset letter bottom passes the viewport bottom".
      // The layout template ships one footer copy per breakpoint; bind them
      // all and skip whichever is hidden per frame.
      const letters = [...document.querySelectorAll<HTMLElement>('.site-footer footer svg[data-framer-component-type="RichTextContainer"]')].filter(
        (s) => s.querySelector('.framer-fit-text'),
      );
      if (!letters.length) return false;
      const entries = letters
        .map((el) => {
          const m = /translateY\((-?\d+(?:\.\d+)?)px\)/.exec(el.style.transform || '');
          const fromY = m ? Number(m[1]) : 0;
          return { el, fromY, curY: fromY };
        })
        .filter((e) => e.fromY !== 0);
      let raf = 0;
      const frame = () => {
        raf = 0;
        const vh = window.innerHeight;
        const sy = window.scrollY;
        for (const en of entries) {
          const rect = en.el.getBoundingClientRect();
          if (!rect.width) continue; // hidden breakpoint copy
          const natTop = rect.top + sy - en.curY;
          // window: the authored (offset) letter rect crossing the viewport
          // bottom edge — start/end both shifted by fromY, width = height
          const start = natTop + en.fromY - vh;
          const p = rect.height > 0 ? Math.min(1, Math.max(0, (sy - start) / rect.height)) : 1;
          const y = en.fromY * (1 - p);
          en.el.style.setProperty('transform', `translateY(${y}px)`, 'important');
          en.curY = y;
        }
      };
      const onScroll = () => {
        if (!raf) raf = requestAnimationFrame(frame);
      };
      frame();
      addEventListener('scroll', onScroll, { passive: true });
      addEventListener('resize', onScroll);
      cleanups.push(() => {
        removeEventListener('scroll', onScroll);
        removeEventListener('resize', onScroll);
        if (raf) cancelAnimationFrame(raf);
      });
      return true;
    };
    if (!bindLetters()) {
      const t = setInterval(() => {
        if (bindLetters()) clearInterval(t);
      }, 250);
      const stop = setTimeout(() => clearInterval(t), 8000);
      cleanups.push(() => {
        clearInterval(t);
        clearTimeout(stop);
      });
    }

    return () => {
      cleanups.forEach((fn) => fn());
      anims.forEach((a) => a.cancel());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
}
