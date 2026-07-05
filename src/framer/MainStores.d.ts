export interface MainProps {
  /**
   * Variant
   * Friendly names map to internal IDs:
   *   "Desktop" → NJMCQhRGL
   *   "Phone" → WVzv7TQ9E
   *   "Tablet" → Ln01DQKbn
   */
  variant?: 'Desktop' | 'Phone' | 'Tablet' | 'NJMCQhRGL' | 'Ln01DQKbn' | 'WVzv7TQ9E';
  /**
   * Store Name — pass as `IA43KtXX9` not `storeName`.
   */
  IA43KtXX9?: string;
  onIA43KtXX9Change?: (value?: any) => void;
  /**
   * Current Coordinates — pass as `TlS_lBfyT` not `currentCoordinates`.
   */
  TlS_lBfyT?: string;
  onTlS_lBfyTChange?: (value?: any) => void;
  /** Additional properties */
  [key: string]: unknown;
}

import type * as React from 'react';

declare const MainStores: React.ForwardRefExoticComponent<
  MainProps & React.RefAttributes<HTMLDivElement>
>;

export default MainStores;
