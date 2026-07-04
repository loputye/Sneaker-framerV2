# Live vs Clone - per-section pixel diff

Differing pixel = any RGB channel delta > 32. Captures use the same
freeze stylesheet on both pages (time-based loops pinned at rest,
Framer badge hidden) so frames are deterministic.

| Section | Desktop 1440 | Tablet 1000 | Phone 390 |
|---|---|---|---|
| s01-hero | 0.00% | 0.00% | 0.00% |
| s02-legends-collection | 0.00% | 0.00% | 0.00% |
| s03-shipping | 0.05% | 0.07% | 0.25% |
| s04-brands | 0.00% | 0.00% | 0.00% |
| s05-best-sellers | 0.02% | 0.02% | 0.06% |
| s06-categories | 0.03% | 0.04% | 0.09% |
| s07-the-approach | 0.00% | 0.00% | 0.00% |
| s08-faq-s | 0.00% | 0.00% | 0.00% |
| s09-footer | 0.00% | 0.00% | 0.00% |
