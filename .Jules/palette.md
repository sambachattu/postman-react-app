## 2024-05-15 - ARIA Labels and Tooltips for Icon-Only Buttons
**Learning:** Found several icon-only buttons (Trash2 icon) in Sidebar and HeadersSection that lacked accessible names and hover context, making them difficult for screen reader and mouse users to understand.
**Action:** Added `aria-label` for screen readers and `title` for hover tooltips. Also updated corresponding tests that were relying on empty `name: ''` strings to query by the new explicit accessible name.
