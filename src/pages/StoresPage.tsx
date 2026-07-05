// Stores page — Main-stores export plus the Sticky Foot Note bar.
// storeName search text is a page variable shared with the store-list search
// input; currentCoordinates is written by the "Near Me" geolocation flow.
import { useEffect, useState } from 'react';
import MainStores from '../framer/MainStores.js';
import StickyFootNote from '../framer/StickyFootNote.js';
import ResponsiveWrapper from '../framer/utils/ResponsiveWrapper';
import PageEffects from './PageEffects';
import './pages.css';

export default function StoresPage() {
  const [storeName, setStoreName] = useState<string | undefined>(undefined);
  const [coordinates, setCoordinates] = useState<string | undefined>(undefined);
  // the published page passes a shorter note copy on the phone breakpoint
  const [isPhone, setIsPhone] = useState(() => window.matchMedia('(max-width: 809.98px)').matches);
  useEffect(() => {
    const mql = window.matchMedia('(max-width: 809.98px)');
    const on = () => setIsPhone(mql.matches);
    mql.addEventListener('change', on);
    return () => mql.removeEventListener('change', on);
  }, []);

  return (
    <>
      <ResponsiveWrapper
        Component={MainStores}
        variants={{ base: 'Phone', md: 'Tablet', lg: 'Desktop' }}
        IA43KtXX9={storeName}
        onIA43KtXX9Change={setStoreName}
        TlS_lBfyT={coordinates}
        onTlS_lBfyTChange={setCoordinates}
        style={{ width: '100%', minHeight: '100vh' }}
      />
      {/* Published page: z-index:10; position:fixed; bottom:0; full width */}
      <div className="sticky-foot-note-slot">
        <StickyFootNote B85HEv4Ke={isPhone ? '10% discount when buying from store.' : undefined} style={{ width: '100%' }} />
      </div>
      <PageEffects />
    </>
  );
}
