// Shared wiring for Framer ScrollSectionRef props.
//
// The exported Main components take one ref prop per scroll-driven effect.
// On the published page those refs point at the page's <section> elements;
// we recreate that wiring by resolving each section by data-framer-name
// after mount (sections can mount late through Suspense, so retry briefly).
// Same mechanism the Home page has used since the first integration.
import { useEffect, useRef, type MutableRefObject } from 'react';

type SectionRef = MutableRefObject<HTMLElement | null>;

export default function useScrollSectionRefs(
  sectionForProp: Record<string, string>,
): Record<string, SectionRef> {
  const refsBox = useRef<Record<string, SectionRef> | null>(null);
  if (refsBox.current === null) {
    const refs: Record<string, SectionRef> = {};
    for (const prop of Object.keys(sectionForProp)) {
      refs[prop] = { current: null };
    }
    refsBox.current = refs;
  }
  const refs = refsBox.current;

  useEffect(() => {
    const wire = () => {
      let wired = 0;
      for (const [prop, sectionName] of Object.entries(sectionForProp)) {
        const el = document.querySelector<HTMLElement>(
          `section[data-framer-name="${sectionName}"]`,
        );
        if (el) {
          refs[prop].current = el;
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
    if (wire() < Object.keys(sectionForProp).length) {
      const t = setInterval(() => {
        if (wire() >= Object.keys(sectionForProp).length) clearInterval(t);
      }, 250);
      const stop = setTimeout(() => clearInterval(t), 5000);
      return () => {
        clearInterval(t);
        clearTimeout(stop);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return refs;
}
