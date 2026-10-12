## 2026-10-12 - Fixing Anti-Pattern in Accessibility Tests
**Learning:** Querying elements by an empty name string (`{ name: '' }`) in React Testing Library hides underlying accessibility issues, like missing `aria-label`s on icon-only buttons.
**Action:** Always verify icon-only buttons have accessible names (e.g. `aria-label`) and update tests to query against those specific names directly.
