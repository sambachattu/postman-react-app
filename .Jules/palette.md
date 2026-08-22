## 2025-02-27 - Empty Accessible Names in Tests
**Learning:** Found a brittle test pattern querying `screen.getAllByRole('button', { name: '' })` which hid accessibility issues on icon-only buttons (like Trash icons).
**Action:** Always add `aria-label` to icon-only buttons and update tests to query by that explicit accessible name to enforce accessibility via tests.
