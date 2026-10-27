
## YYYY-MM-DD - Empty accessible names in tests
**Learning:** When using React Testing Library, querying elements by an empty name string (e.g., `{ name: '' }`) is a brittle anti-pattern that hides accessibility issues. Icon-only buttons should have a valid accessible name.
**Action:** Ensure elements have valid accessible names (like `aria-label`) and test against them directly.
