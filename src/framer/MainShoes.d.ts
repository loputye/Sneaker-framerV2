export interface MainshoesProps {
  /**
   * Variant
   * Friendly names map to internal IDs:
   *   "Desktop" → vMv0rMZry
   *   "Phone" → VYM8jfVmJ
   *   "Tablet" → fwRyz6pBb
   */
  variant?: 'Desktop' | 'Phone' | 'Tablet' | 'vMv0rMZry' | 'fwRyz6pBb' | 'VYM8jfVmJ';
  /**
   * Reset Filters — pass as `J2ObfK78U` not `resetFilters`.
   */
  J2ObfK78U?: () => void;
  /**
   * Categories — pass as `uHKJQq5TZ` not `categories`.
   */
  uHKJQq5TZ?: unknown;
  onuHKJQq5TZChange?: (value?: any) => void;
  /**
   * Best Seller — pass as `YS4w4ld0g` not `bestSeller`.
   */
  YS4w4ld0g?: boolean;
  onYS4w4ld0gChange?: (value?: any) => void;
  /**
   * Product Title — pass as `XyXJmcDiZ` not `productTitle`.
   */
  XyXJmcDiZ?: string;
  onXyXJmcDiZChange?: (value?: any) => void;
  /**
   * Gender — pass as `r5V6HHb8k` not `gender`.
   */
  r5V6HHb8k?: unknown;
  onr5V6HHb8kChange?: (value?: any) => void;
  /** Additional properties */
  [key: string]: unknown;
}

import type * as React from 'react';

declare const MainShoes: React.ForwardRefExoticComponent<
  MainshoesProps & React.RefAttributes<HTMLDivElement>
>;

export default MainShoes;
