## 2024-05-24 - Accessibility for Icon-only Buttons
**Learning:** When testing icon-only buttons with `@testing-library/react`, queries like `screen.getAllByRole('button', { name: '' })` work when there's no accessible name. Adding `aria-label`s breaks these tests.
**Action:** Always update corresponding tests that assert on accessible names (e.g., `screen.getAllByRole('button', { name: 'New Accessible Name' })`) when adding `aria-label` attributes to UI elements.
