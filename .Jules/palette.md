## 2024-05-18 - Icon-Only Buttons Missing Accessibility Context
**Learning:** Found multiple instances where icon-only buttons (`Trash2`, etc.) in `Sidebar.jsx`, `HeadersSection.jsx` and potentially `ResponseViewer.jsx` lack `aria-label`s and `title`s, which is problematic for screen reader accessibility and standard user UX (tooltips).
**Action:** Adding `aria-label` and `title` to these buttons improves the overall a11y.
