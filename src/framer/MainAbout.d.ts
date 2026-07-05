export interface MainProps {
  /**
   * Variant
   * Friendly names map to internal IDs:
   *   "Desktop" → av8DHYjx2
   *   "Phone" → QL4Hwb0Rs
   *   "Tablet" → fHVDW786J
   */
  variant?: 'Desktop' | 'Phone' | 'Tablet' | 'av8DHYjx2' | 'fHVDW786J' | 'QL4Hwb0Rs';
  /**
   * Scroll Section — pass as `gKQBa5oaU` not `scrollSection`.
   */
  gKQBa5oaU?: string;
  /**
   * Scroll Section 2 — pass as `WEMc8XsDP` not `scrollSection2`.
   */
  WEMc8XsDP?: string;
  /**
   * Scroll Section 3 — pass as `kIAhp8DIL` not `scrollSection3`.
   */
  kIAhp8DIL?: string;
  /**
   * Scroll Section 4 — pass as `BkyuZVRVQ` not `scrollSection4`.
   */
  BkyuZVRVQ?: string;
  /**
   * Scroll Section 5 — pass as `LepQl5ItI` not `scrollSection5`.
   */
  LepQl5ItI?: string;
  /** Additional properties */
  [key: string]: unknown;
}

import type * as React from 'react';

declare const MainAbout: React.ForwardRefExoticComponent<
  MainProps & React.RefAttributes<HTMLDivElement>
>;

export default MainAbout;
