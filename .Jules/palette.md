## 2024-03-24 - Missing ARIA Labels on Icon-Only Buttons
**Learning:** Found a recurring pattern where icon-only buttons (`Trash2`, `Copy`, `Download`) across multiple components (`HeadersSection`, `Sidebar`, `ResponseViewer`) lacked `aria-label` attributes for screen readers and `title` attributes for tooltips, making them inaccessible.
**Action:** When adding or reviewing icon-only buttons, ensure both an `aria-label` and `title` attribute are included for accessibility and usability.
