## YYYY-MM-DD - Brittle a11y queries
**Learning:** Querying by empty string ({ name: '' }) is a brittle anti-pattern that hides accessibility issues. Tests should assert valid accessible names like aria-labels.
**Action:** Assign proper accessible names (e.g. aria-label) to elements and use those in queries directly.
