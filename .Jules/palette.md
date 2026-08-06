## 2024-08-06 - Missing ARIA labels on Icon-Only Buttons
**Learning:** Found an accessibility issue pattern specific to this app's components where multiple icon-only buttons (like delete, copy, download) were missing aria-labels and titles, making them inaccessible to screen readers and lacking tooltips for mouse users.
**Action:** Added `aria-label` and `title` attributes to icon-only buttons across `HeadersSection.jsx`, `Sidebar.jsx`, and `ResponseViewer.jsx` to ensure screen reader accessibility and hover context.
