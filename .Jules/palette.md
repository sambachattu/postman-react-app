## YYYY-MM-DD - [Testing Anti-Pattern: Querying by empty name]
**Learning:** Querying elements by an empty name string (e.g., `{ name: '' }`) is a brittle anti-pattern in React Testing Library that hides accessibility issues. Tests should rely on valid accessible names.
**Action:** Ensure icon-only buttons have valid accessible names (like `aria-label`) and test against them directly.
