## 2026-09-05 - Querying empty accessible names is an anti-pattern
**Learning:** When using React Testing Library, querying elements by an empty name string (e.g., `{ name: '' }`) is a brittle anti-pattern that hides accessibility issues.
**Action:** Ensure elements have valid accessible names (like `aria-label`) and update corresponding tests (e.g., using `@testing-library/react` queries like `screen.getAllByRole('button', { name: '...' })`) to match the new accessible name.
