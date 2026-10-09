## YYYY-MM-DD - [Icon Button Accessibility & Testing]
**Learning:** Found a pattern where icon-only buttons lacked accessible names, leading to brittle tests querying by empty string (`{ name: '' }`) which hides accessibility issues.
**Action:** Always ensure icon-only buttons have `aria-label` and `title` attributes, and ensure tests assert against these valid accessible names instead of empty strings.
