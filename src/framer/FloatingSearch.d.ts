export interface FloatingsearchProps {
  /**
   * Variant
   * Friendly names map to internal IDs:
   *   "Base" → PM02DOoWx
   *   "Expanded" → LKacVAUVI
   */
  variant?: 'Base' | 'Expanded' | 'PM02DOoWx' | 'LKacVAUVI';
  /**
   * Product Title — pass as `NnDXoDUnx` not `productTitle`.
   */
  NnDXoDUnx?: string;
  onNnDXoDUnxChange?: (value?: any) => void;
  /**
   * Click — pass as `USIwCqC9j` not `click`.
   */
  USIwCqC9j?: () => void;
  /**
   * Categories — pass as `PPUs8twVg` not `categories`.
   */
  PPUs8twVg?: unknown;
  onPPUs8twVgChange?: (value?: any) => void;
  /**
   * On Reset — pass as `OpuIHcazg` not `onReset`.
   */
  OpuIHcazg?: () => void;
  /**
   * Best Seller — pass as `udm9VeqFi` not `bestSeller`.
   */
  udm9VeqFi?: boolean;
  onudm9VeqFiChange?: (value?: any) => void;
  /**
   * Gender — pass as `cMjQL3FyO` not `gender`.
   */
  cMjQL3FyO?: unknown;
  oncMjQL3FyOChange?: (value?: any) => void;
  /** Additional properties */
  [key: string]: unknown;
}

import type * as React from 'react';

declare const FloatingSearch: React.ForwardRefExoticComponent<
  FloatingsearchProps & React.RefAttributes<HTMLDivElement>
>;

export default FloatingSearch;
