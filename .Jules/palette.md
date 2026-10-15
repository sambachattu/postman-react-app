## YYYY-MM-DD - Fix Brittle Test Queries for Empty Names
**Learning:** Testing library queries relying on an empty name string (e.g. `{ name: '' }`) is a brittle anti-pattern that hides accessibility issues like missing ARIA labels on icon-only buttons.
**Action:** Ensure icon-only buttons have accessible names (like `aria-label`) and test against them directly.
