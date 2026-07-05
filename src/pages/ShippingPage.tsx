// Shipping policy page — Main-shipping export plus the shared
// Table Of Contents popup pinned above the fold. Eight ScrollSectionRef
// props drive the hero parcel/plane parallax and content reveals.
import { useState } from 'react';
import MainShipping from '../framer/MainShipping.js';
import TableOfContentsPopup from '../framer/TableOfContentsPopup.js';
import ResponsiveWrapper from '../framer/utils/ResponsiveWrapper';
import useScrollSectionRefs from '../framer/utils/useScrollSectionRefs';
import PageEffects from './PageEffects';
import './pages.css';

const SECTION_FOR_PROP: Record<string, string> = {
  jnVwx1Al4: 'Hero',
  a5ugPOreM: 'Hero',
  FzNCaJVDs: 'Hero',
  zq3XOjnWq: 'Hero',
  gynpJXZmu: 'Hero',
  Lo2BbfhWO: 'Hero',
  DhAAQKq0D: 'Hero',
  // nP1kE_IfG stays unbound: it is the shared variant-appear trigger inside
  // the CMS-driven sidebar tab template. Binding it to an always-visible
  // section flips every tab to its Active variant and strands them in the
  // (dead) appear transition — the published page leaves it unbound.
};

// Anchor ids the published runtime assigns to the document sections at
// hydration (CMS slug + "shipping-point"); tabs pair with sections by order.
const TOC_ANCHORS = [
  'shipping-delivery-shipping-point',
  'shipping-processing-time-shipping-point',
  'shipping-times-shipping-point',
  'shipping-costs-shipping-point',
  'order-tracking-shipping-point',
  'international-shipping-shipping-point',
  'packaging-shipping-point',
  'lost-or-delayed-packages-shipping-point',
  'signature-delivery-shipping-point',
  'returns-exchanges-shipping-point',
];

export default function ShippingPage() {
  // published behavior: header tap toggles Collapsed <-> Expanded
  const [tocOpen, setTocOpen] = useState(false);
  const refs = useScrollSectionRefs(SECTION_FOR_PROP);

  return (
    <>
      <ResponsiveWrapper
        Component={MainShipping}
        variants={{ base: 'Phone', md: 'Tablet', lg: 'Desktop' }}
        {...refs}
        style={{ width: '100%', minHeight: '100vh' }}
      />
      {/* Published page: z-index:10; width:80%; max-width:444px; fixed; bottom:44px; centered */}
      <div className="toc-popup-slot">
        <TableOfContentsPopup variant={tocOpen ? 'Expanded' : 'Collapsed'} Y78ORZeN8={() => setTocOpen((v) => !v)} documentType="Shipping" style={{ width: '100%' }} />
      </div>
      <PageEffects tocAnchors={{ ids: TOC_ANCHORS, blockSelector: '.framer-wvi2mm' }} />
    </>
  );
}
