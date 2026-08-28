## 2024-10-24 - React Testing Library Empty Name Query Anti-Pattern
**Learning:** Using an empty name string query (e.g., `{ name: '' }`) in React Testing Library is a brittle anti-pattern that hides accessibility issues for icon-only buttons. It passes the test when no accessible name is present but fails when a valid `aria-label` or `title` is added.
**Action:** Always ensure elements have valid accessible names (like `aria-label`) and update tests to query against those direct, meaningful names (e.g., `{ name: 'Remove header' }`).
