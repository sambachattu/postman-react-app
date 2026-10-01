## YYYY-MM-DD - Missing ARIA Labels on Icon-Only Buttons
**Learning:** Discovered that icon-only buttons were missing `aria-label` and `title` attributes, which led to testing anti-patterns where elements were queried by an empty string `{ name: '' }`. This hides underlying accessibility issues.
**Action:** Always add both `aria-label` (for screen readers) and `title` (for hover tooltips) to icon-only buttons, and query them explicitly by name in tests.
