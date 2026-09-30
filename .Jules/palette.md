## 2026-09-30 - Testing Library Anti-Pattern
**Learning:** Found existing tests querying for empty name strings (e.g., `screen.getAllByRole('button', { name: '' })`) which masks accessibility issues on icon-only buttons.
**Action:** Always provide `aria-label`s for icon-only buttons and update tests to query by these meaningful accessible names instead of empty strings.
