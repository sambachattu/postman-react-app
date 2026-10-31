## YYYY-MM-DD - Empty Name Queries in React Testing Library
**Learning:** Using an empty string for the accessible name (e.g., `screen.getAllByRole('button', { name: '' })`) is a brittle anti-pattern that hides true accessibility issues like missing ARIA labels on icon-only buttons.
**Action:** When adding `aria-label` attributes on UI elements, always update the corresponding tests to query by the newly provided accessible name.
