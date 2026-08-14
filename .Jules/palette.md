## 2024-05-18 - Missing ARIA labels on icon-only buttons
**Learning:** Testing tools (React Testing Library) allow querying by empty string `{ name: '' }`, which hides the accessibility issue of missing ARIA labels on icon-only buttons.
**Action:** Always add `aria-label` to icon-only buttons and update tests to explicitly query the correct accessible name.
