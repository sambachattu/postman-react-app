## YYYY-MM-DD - Brittle Queries with React Testing Library
**Learning:** Querying elements by an empty name string (e.g., `{ name: '' }`) is a brittle anti-pattern that hides accessibility issues. Icon-only buttons should have valid accessible names (like `aria-label`).
**Action:** Ensure elements have valid accessible names and test against them directly.
