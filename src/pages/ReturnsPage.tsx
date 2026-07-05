// Returns & Exchange policy page — Main-return export plus the shared
// Table Of Contents popup (filtered to "Returns" document entries).
import { useState } from 'react';
import MainReturn from '../framer/MainReturn.js';
import TableOfContentsPopup from '../framer/TableOfContentsPopup.js';
import ResponsiveWrapper from '../framer/utils/ResponsiveWrapper';
import useScrollSectionRefs from '../framer/utils/useScrollSectionRefs';
import PageEffects from './PageEffects';
import './pages.css';

const SECTION_FOR_PROP: Record<string, string> = {
  sWdKE55LS: 'Hero',
  zH7tfzMhc: 'Hero',
  // gyQGgfn6b stays unbound: shared variant-appear trigger inside the
  // sidebar tab template (see ShippingPage).
};

// Anchor ids the published runtime assigns to the document sections at
// hydration (CMS slug + "point"); tabs pair with sections by order.
const TOC_ANCHORS = [
  'return-eligibility-point',
  'exchange-policy-point',
  'non-returnable-items-point',
  'return-process-point',
  'return-window-fees-point',
  'refunds-point',
  'damaged-or-incorrect-orders-point',
  'international-returns-point',
  'store-credit-point',
  'need-help-returns-point',
];

export default function ReturnsPage() {
  // published behavior: header tap toggles Collapsed <-> Expanded
  const [tocOpen, setTocOpen] = useState(false);
  const refs = useScrollSectionRefs(SECTION_FOR_PROP);

  return (
    <>
      <ResponsiveWrapper
        Component={MainReturn}
        variants={{ base: 'Phone', md: 'Tablet', lg: 'Desktop' }}
        {...refs}
        style={{ width: '100%', minHeight: '100vh' }}
      />
      {/* Published page: z-index:10; width:80%; max-width:444px; fixed; bottom:44px; centered */}
      <div className="toc-popup-slot">
        <TableOfContentsPopup variant={tocOpen ? 'Expanded' : 'Collapsed'} Y78ORZeN8={() => setTocOpen((v) => !v)} documentType="Returns" style={{ width: '100%' }} />
      </div>
      <PageEffects tocAnchors={{ ids: TOC_ANCHORS, blockSelector: '.framer-1x0f9gx' }} />
    </>
  );
}
