
## 2026-11-05 - Icon-Only Buttons Accessibility
**Learning:** Icon-only buttons (like Trash2) without aria-labels hide accessibility issues and lead to brittle tests (e.g., querying by empty name strings).
**Action:** Always add 'aria-label' for screen readers and 'title' for tooltips on icon-only buttons, and update associated tests to query by the new accessible name.
