// Home page — the original Main export plus its scroll-ref wiring and the
// hand-built FramerEffects engine (moved verbatim from the old single-page
// App.tsx; behavior is unchanged).
// Workaround #16.2 — the bundle's gesture/scroll/loop/appear runtime reads
// window/document at module scope. This Vite SPA never server-renders, so a
// direct import is the framework-equivalent of a client-only import.
import Main from '../framer/Main.js';
import ResponsiveWrapper from '../framer/utils/ResponsiveWrapper';
import FramerEffects from '../framer/utils/FramerEffects';
import useScrollSectionRefs from '../framer/utils/useScrollSectionRefs';

/**
 * The Main component exposes 11 "Scroll Section" ref props that drive its
 * scroll-linked transform effects (hero title fade, floating shoe, delivery
 * boxes, plane, shoe mockups...). On the published Framer page these refs
 * point at the page's section elements; we recreate that wiring here by
 * resolving each section by its data-framer-name after mount.
 */
// NOTE: the exported Hero smart component names its root section "Variant 1"
// (the published page names it "Hero").
const SECTION_FOR_PROP: Record<string, string> = {
  aeBO7EprP: 'Variant 1', // hero title & tag fade-out driver
  SNS4SkUw5: 'Variant 1', // floating shoe rotate/rise driver
  PLM6pDD3g: 'Legends Collection', // coffee shoe figure lerp
  Buo45cCnJ: 'Legends Collection', // shoe shadow scale
  nlIjoLLjJ: 'Shipping', // plane x-drift
  EaZ7wU_hC: 'Shipping', // delivery box 1
  qNW2O0zZ9: 'Shipping', // delivery box 2
  tcWX04z34: 'Shipping', // delivery box 3
  rAPQODkAI: 'Shipping', // delivery box 4
  ZGavk5Rac: 'Shipping', // shoe mockup 1
  IZtY6aT9u: 'Shipping', // shoe mockup 2
};

export default function HomePage() {
  const refs = useScrollSectionRefs(SECTION_FOR_PROP);

  return (
    <>
      <ResponsiveWrapper
        Component={Main}
        variants={{ base: 'Phone', md: 'Tablet', lg: 'Desktop' }}
        {...refs}
        style={{ width: '100%', minHeight: '100vh' }}
      />
      {!new URLSearchParams(window.location.search).has('nofx') && <FramerEffects />}
    </>
  );
}
