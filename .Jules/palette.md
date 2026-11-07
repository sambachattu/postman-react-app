## YYYY-MM-DD - Empty Names in Testing Library Hides Accessibility Issues
**Learning:** Querying elements by an empty name string (e.g., `{ name: '' }`) is a brittle anti-pattern that hides accessibility issues for icon-only buttons.
**Action:** Always ensure elements have valid accessible names (like `aria-label`) and test against them directly.
