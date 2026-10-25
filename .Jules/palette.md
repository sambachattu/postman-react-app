## YYYY-MM-DD - Brittle empty name queries in tests
**Learning:** Querying elements by an empty name string (e.g., `{ name: '' }`) in React Testing Library is a brittle anti-pattern that hides accessibility issues.
**Action:** Ensure elements have valid accessible names (like `aria-label`) and test against them directly.
