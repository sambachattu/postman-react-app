## 2026-06-20 - Adding ARIA labels to forms and icon buttons
**Learning:** The app's interface lacked accessible labels (aria-label) on icon-only buttons (like delete and remove headers) and various inputs (selects, textareas, checkboxes). Sighted users infer functionality from context and icons, but screen readers require explicit ARIA attributes.
**Action:** Always add 'aria-label' and/or 'title' to icon-only interactive elements and form inputs to ensure proper screen reader support and keyboard-accessible tooltips.
