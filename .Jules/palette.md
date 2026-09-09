## YYYY-MM-DD - Empty Name Queries Anti-Pattern
**Learning:** Using `{ name: '' }` in RTL queries hides accessibility issues by relying on the absence of an accessible name.
**Action:** Always add valid accessible names (like `aria-label`) to icon-only buttons and test against them directly.
