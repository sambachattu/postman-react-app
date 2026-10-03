## YYYY-MM-DD - [Testing Empty Name Strings]
**Learning:** Querying elements by an empty name string (e.g., `{ name: '' }`) is a brittle anti-pattern in this app's test files that hides missing accessible names for icon-only buttons.
**Action:** Ensure icon-only elements have valid accessible names (like `aria-label`) and test against them directly.
