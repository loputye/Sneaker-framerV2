export interface MainProps {
  /**
   * Variant
   * Friendly names map to internal IDs:
   *   "Desktop" → reXWQeIKk
   *   "Phone" → v8O3rGysA
   *   "Tablet" → k1o5gWvEF
   */
  variant?: 'Desktop' | 'Phone' | 'Tablet' | 'reXWQeIKk' | 'k1o5gWvEF' | 'v8O3rGysA';
  /**
   * Scroll Section — pass as `sWdKE55LS` not `scrollSection`.
   */
  sWdKE55LS?: string;
  /**
   * Scroll Section 2 — pass as `zH7tfzMhc` not `scrollSection2`.
   */
  zH7tfzMhc?: string;
  /**
   * Scroll Section 3 — pass as `gyQGgfn6b` not `scrollSection3`.
   */
  gyQGgfn6b?: string;
  /** Additional properties */
  [key: string]: unknown;
}

import type * as React from 'react';

declare const MainReturn: React.ForwardRefExoticComponent<
  MainProps & React.RefAttributes<HTMLDivElement>
>;

export default MainReturn;
