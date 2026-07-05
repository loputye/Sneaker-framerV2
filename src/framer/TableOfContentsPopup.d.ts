export interface TableofcontentspopupProps {
  /**
   * Variant
   * Friendly names map to internal IDs:
   *   "Collapsed" → dQd8OGUDa
   *   "Expanded" → Tp6qSkdDM
   */
  variant?: 'Collapsed' | 'Expanded' | 'Tp6qSkdDM' | 'dQd8OGUDa';
  /**
   * Click — pass as `Y78ORZeN8` not `click`.
   */
  Y78ORZeN8?: () => void;
  onH2xgQlxn8Change?: (value?: any) => void;
  /** Additional properties */
  [key: string]: unknown;
}

import type * as React from 'react';

declare const TableOfContentsPopup: React.ForwardRefExoticComponent<
  TableofcontentspopupProps & React.RefAttributes<HTMLDivElement>
>;

export default TableOfContentsPopup;
