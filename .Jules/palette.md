## 2026-07-25 - Adding Accessible Names to Icon-Only Buttons
**Learning:** The application had several icon-only buttons (Trash, Copy, Download) that lacked proper `aria-label` attributes, making them inaccessible to screen readers, and some were missing `title` attributes for mouse hover tooltips.
**Action:** Ensure all icon-only buttons include both an `aria-label` for screen readers and a `title` for sighted users on mouse hover, and update associated React Testing Library tests to query by the new accessible names.
