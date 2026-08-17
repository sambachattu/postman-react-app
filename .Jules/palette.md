
## 2026-08-17 - Avoiding brittle empty-string queries in testing
**Learning:** Using React Testing Library to query elements by an empty name string (e.g. `{ name: '' }`) is a brittle anti-pattern that hides accessibility issues. Tests should test against valid accessible names.
**Action:** Add `aria-label` attributes to icon-only buttons and update tests to query by those explicit labels instead.
