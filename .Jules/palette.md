## 2024-05-15 - ARIA labels for icon-only buttons
**Learning:** Found a pattern where multiple components (`HeadersSection`, `Sidebar`, `ResponseViewer`) used icon-only buttons (`Trash2`, `Copy`, `Download`) without any accessible name or hover text. This makes them unusable for screen reader users and confusing for mouse users.
**Action:** Always add both `aria-label` (for screen readers) and `title` (for mouse hover tooltips) to any button that only contains an icon.
