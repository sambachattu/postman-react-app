## 2024-08-16 - Prevent Brittle Tests and Missing A11y
**Learning:** Using React Testing Library queries with empty strings (e.g., `{ name: '' }`) for icon-only buttons hides accessibility issues and makes tests brittle. It indicates a lack of `aria-label` or visual text.
**Action:** Always ensure icon-only buttons have an `aria-label` and `title` attribute. Update tests to explicitly query for these accessible names, enforcing accessibility through test constraints.
