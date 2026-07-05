// Magazine index page — Main-Magazine export. The article search text is a
// page variable (iTzLusSg5) with a reset callback, mirroring the published
// page's search behavior over the Magazine collection.
import { useCallback, useEffect, useState } from 'react';
import MainMagazine from '../framer/MainMagazine.js';
import ResponsiveWrapper from '../framer/utils/ResponsiveWrapper';
import PageEffects from './PageEffects';

// The published page emits a different responsive `sizes` per grid slot in
// the All-publishes list (Framer derives it from each item's grid area);
// the exporter flattened them to one value, so Chrome fetches different
// srcset candidates than the live site and the covers resample differently.
// Exact strings measured on sneako.framer.website, repeating [A,B,B,C,A].
const CARD_SIZES = [
  '(min-width: 1200px) 266px, (min-width: 810px) and (max-width: 1199.98px) 266px, (max-width: 809.98px) calc(min(100vw - 40px, 500px) - 56px)',
  '(min-width: 1200px) max(max(min(100vw - 40px, 1200px) - 128px, 1px), 266px), (min-width: 810px) and (max-width: 1199.98px) max(max(min(100vw - 40px, 1200px) - 88px, 1px), 266px), (max-width: 809.98px) calc(min(100vw - 40px, 500px) - 56px)',
  '(min-width: 1200px) max(max(100vw - 40px, 1px), 266px), (min-width: 810px) and (max-width: 1199.98px) max(max(100vw - 40px, 1px), 266px), (max-width: 809.98px) max(max(100vw - 40px, 1px), calc(min(100vw - 40px, 500px) - 56px))',
];
const SLOT_PATTERN = [0, 1, 1, 2, 0];

export default function MagazinePage() {
  const [title, setTitle] = useState<string | undefined>(undefined);
  const reset = useCallback(() => setTitle(undefined), []);

  useEffect(() => {
    const apply = () => {
      const imgs = document.querySelectorAll<HTMLImageElement>('section[data-framer-name="All publishes"] img');
      imgs.forEach((img, i) => {
        const sizes = CARD_SIZES[SLOT_PATTERN[i % SLOT_PATTERN.length]];
        if (img.getAttribute('sizes') !== sizes) img.setAttribute('sizes', sizes);
      });
      return imgs.length > 0;
    };
    if (apply()) return;
    // the grid mounts after the CMS chunks resolve; keep a MutationObserver
    // until the first application succeeds
    const mo = new MutationObserver(() => {
      if (apply()) mo.disconnect();
    });
    mo.observe(document.body, { childList: true, subtree: true });
    return () => mo.disconnect();
  }, []);

  return (
    <>
      <ResponsiveWrapper
        Component={MainMagazine}
        variants={{ base: 'Phone', md: 'Tablet', lg: 'Desktop' }}
        iTzLusSg5={title}
        oniTzLusSg5Change={setTitle}
        lzQVoXmXH={reset}
        style={{ width: '100%', minHeight: '100vh' }}
      />
      <PageEffects />
    </>
  );
}
