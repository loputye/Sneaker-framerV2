import { useEffect, useRef, type MutableRefObject } from 'react';
// Workaround #16.2 — the bundle's gesture/scroll/loop/appear runtime reads
// window/document at module scope. This Vite SPA never server-renders, so a
// direct import is the framework-equivalent of a client-only import.
import Main from './framer/Main.js';
import ResponsiveWrapper from './framer/utils/ResponsiveWrapper';
import FramerEffects from './framer/utils/FramerEffects';
import Navbar from './Navbar';
import Footer from './Footer';

type SectionRef = MutableRefObject<HTMLElement | null>;

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

export default function App() {
  const refs: Record<string, SectionRef> = {
    aeBO7EprP: useRef(null),
    SNS4SkUw5: useRef(null),
    PLM6pDD3g: useRef(null),
    Buo45cCnJ: useRef(null),
    nlIjoLLjJ: useRef(null),
    EaZ7wU_hC: useRef(null),
    qNW2O0zZ9: useRef(null),
    tcWX04z34: useRef(null),
    rAPQODkAI: useRef(null),
    ZGavk5Rac: useRef(null),
    IZtY6aT9u: useRef(null),
  };
  const refsBox = useRef(refs);
  refsBox.current = refs;

  useEffect(() => {
    const wire = () => {
      let wired = 0;
      for (const [prop, sectionName] of Object.entries(SECTION_FOR_PROP)) {
        const el = document.querySelector<HTMLElement>(
          `section[data-framer-name="${sectionName}"]`,
        );
        if (el) {
          refsBox.current[prop].current = el;
          wired++;
        }
      }
      if (wired > 0) {
        // The runtime registered its scroll handlers before the refs were
        // assigned; nudge them so effects compute at the current position.
        window.dispatchEvent(new Event('scroll'));
        window.dispatchEvent(new Event('resize'));
      }
      return wired;
    };
    if (wire() < Object.keys(SECTION_FOR_PROP).length) {
      // Sections may mount asynchronously (Suspense) — retry briefly.
      const t = setInterval(() => {
        if (wire() >= Object.keys(SECTION_FOR_PROP).length) clearInterval(t);
      }, 250);
      setTimeout(() => clearInterval(t), 5000);
      return () => clearInterval(t);
    }
  }, []);

  return (
    <>
      <Navbar />
      <ResponsiveWrapper
        Component={Main}
        variants={{ base: 'Phone', md: 'Tablet', lg: 'Desktop' }}
        aeBO7EprP={refs.aeBO7EprP}
        SNS4SkUw5={refs.SNS4SkUw5}
        PLM6pDD3g={refs.PLM6pDD3g}
        Buo45cCnJ={refs.Buo45cCnJ}
        nlIjoLLjJ={refs.nlIjoLLjJ}
        EaZ7wU_hC={refs.EaZ7wU_hC}
        qNW2O0zZ9={refs.qNW2O0zZ9}
        tcWX04z34={refs.tcWX04z34}
        rAPQODkAI={refs.rAPQODkAI}
        ZGavk5Rac={refs.ZGavk5Rac}
        IZtY6aT9u={refs.IZtY6aT9u}
        style={{ width: '100%', minHeight: '100vh' }}
      />
      <Footer />
      {!new URLSearchParams(window.location.search).has('nofx') && <FramerEffects />}
    </>
  );
}
