## 2024-07-18 - Icon-Only Button Accessibility Pattern
**Learning:** Icon-only buttons (like Trash, Copy, Download) in this app often lack accessible names, making them difficult for screen reader users to understand. Relying on visual context alone is insufficient.
**Action:** When implementing or modifying icon-only buttons, always ensure both an `aria-label` (for screen readers) and a `title` (for mouse hover) are provided to ensure a universally accessible and understandable experience.
