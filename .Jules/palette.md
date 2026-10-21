## YYYY-MM-DD - Empty accessible names anti-pattern
**Learning:** Testing icon-only buttons with empty names (e.g., `screen.getAllByRole('button', { name: '' })`) is an anti-pattern that masks accessibility issues. We must ensure icon-only buttons have valid `aria-label`s and test against those labels.
**Action:** Always add `aria-label` to icon-only buttons and query them using their accessible name in tests.
