## 2026-09-25 - Add ARIA Labels to Icon-Only Buttons
**Learning:** Icon-only buttons using libraries like lucide-react (e.g., `Trash2`) lack accessible names by default, making them invisible or confusing to screen reader users. Additionally, users navigating visually with a mouse benefit from tooltips.
**Action:** When adding or modifying icon-only buttons, always include both an `aria-label` for screen reader accessibility and a `title` attribute for mouse hover tooltips.
