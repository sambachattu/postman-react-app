## YYYY-MM-DD - Testing Anti-pattern Hiding A11y Issues
**Learning:** React Testing Library queries using `{ name: '' }` were masking missing accessible names on icon-only buttons (like Trash icons) in this app's test suite.
**Action:** Always add `aria-label` and `title` to icon-only buttons, and update tests to query by the exact accessible name rather than relying on empty strings.
