// About page — exported Main package for /about.
// Five ScrollSectionRef props drive the hero illustration parallax
// (shoe/hand/silhouettes rise & rotate) and the Our Mission figure lerp;
// on the published page they point at the containing sections.
import MainAbout from '../framer/MainAbout.js';
import ResponsiveWrapper from '../framer/utils/ResponsiveWrapper';
import useScrollSectionRefs from '../framer/utils/useScrollSectionRefs';
import PageEffects, { type AppearSpec, type ScrollFXSpec } from './PageEffects';

const SECTION_FOR_PROP: Record<string, string> = {
  gKQBa5oaU: 'Hero', // sky-blue shoe (y:-60, rotate:3)
  WEMc8XsDP: 'Hero', // reaching hand (y:50)
  kIAhp8DIL: 'Hero', // silhouette figure
  BkyuZVRVQ: 'Hero', // silhouette figure
  LepQl5ItI: 'Our Mission', // mission figure lerp
};

// Hero appear reveals the exported runtime drops (specs lifted from the
// bundle: animation1/animation3 initial states + transition2 spring 1.5s).
const APPEAR: AppearSpec[] = [
  {
    selector: '.framer-pdce9n', // Illustration
    from: { opacity: 0.001, y: 40 },
    to: { opacity: 1, y: 0 },
    durationMs: 1500,
  },
  {
    selector: '.framer-1lnfjls', // Description (transformTemplate translateY(-50%))
    from: { opacity: 0.001, y: 50 },
    to: { opacity: 1, y: 0 },
    base: 'translateY(-50%)',
    durationMs: 1500,
  },
  {
    selector: '.framer-1kmjoa3', // Logo
    from: { opacity: 0.001, y: 50 },
    to: { opacity: 1, y: 0 },
    durationMs: 1500,
  },
];

// The phone variant bakes the "Our Mission" block at its scroll-from state
// (scale 1.2) and the runtime never drives it; the published page lerps it
// to 1 with the standard scroll-target formula (threshold 0.5, linear over
// the section height — calibrated by sweeping the live page at 390px).
const SCROLL_FX: ScrollFXSpec[] = [
  {
    selector: '.framer-1m6s5am',
    section: 'Our Mission',
    threshold: 0.5,
    fromScale: 1.2,
    toScale: 1,
    media: '(max-width: 809.98px)',
  },
];

export default function AboutPage() {
  const refs = useScrollSectionRefs(SECTION_FOR_PROP);

  return (
    <>
      <ResponsiveWrapper
        Component={MainAbout}
        variants={{ base: 'Phone', md: 'Tablet', lg: 'Desktop' }}
        {...refs}
        style={{ width: '100%', minHeight: '100vh' }}
      />
      <PageEffects appear={APPEAR} scrollFX={SCROLL_FX} />
    </>
  );
}
