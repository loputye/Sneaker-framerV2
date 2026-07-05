export interface MainProps {
  /**
   * Variant
   * Friendly names map to internal IDs:
   *   "Desktop" → WwiHakYfG
   *   "Phone" → G4DLB8S6g
   *   "Tablet" → jWZKHdvR1
   */
  variant?: 'Desktop' | 'Phone' | 'Tablet' | 'WwiHakYfG' | 'jWZKHdvR1' | 'G4DLB8S6g';
  /**
   * Reset Filters — pass as `lzQVoXmXH` not `resetFilters`.
   */
  lzQVoXmXH?: () => void;
  /**
   * Title — pass as `iTzLusSg5` not `title`.
   */
  iTzLusSg5?: string;
  oniTzLusSg5Change?: (value?: any) => void;
  /** Additional properties */
  [key: string]: unknown;
}

import type * as React from 'react';

declare const MainMagazine: React.ForwardRefExoticComponent<
  MainProps & React.RefAttributes<HTMLDivElement>
>;

export default MainMagazine;
