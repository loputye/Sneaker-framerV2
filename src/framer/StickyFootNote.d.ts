export interface StickyfootnoteProps {
  /**
   * Variant
   * Friendly names map to internal IDs:
   *   "Base" → gndt8Odsu
   *   "Hidden" → XRBWMRqaj
   */
  variant?: 'Base' | 'Hidden' | 'gndt8Odsu' | 'XRBWMRqaj';
  /**
   * Note — pass as `B85HEv4Ke` not `note`.
   * @default "Get a 10% discount when buying from the store."
   */
  B85HEv4Ke?: string;
  onB85HEv4KeChange?: (value?: any) => void;
  /** Additional properties */
  [key: string]: unknown;
}

import type * as React from 'react';

declare const StickyFootNote: React.ForwardRefExoticComponent<
  StickyfootnoteProps & React.RefAttributes<HTMLDivElement>
>;

export default StickyFootNote;
