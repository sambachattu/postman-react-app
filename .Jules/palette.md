## YYYY-MM-DD - Tests masking accessibility issues
**Learning:** Using React Testing Library to query for elements with empty names (e.g., `{ name: '' }`) is a brittle anti-pattern that hides accessibility issues, such as missing ARIA labels on icon-only buttons.
**Action:** Always ensure elements have valid accessible names and update tests to query those elements directly.
