## YYYY-MM-DD - Add aria-labels to icon-only buttons
**Learning:** Using React Testing Library with `{ name: '' }` to query icon-only buttons is a brittle anti-pattern that hides accessibility issues. Adding `aria-label` and `title` to these elements makes them accessible and provides a reliable way to query them in tests.
**Action:** Always include both an 'aria-label' for screen reader accessibility and a 'title' attribute for mouse hover tooltips on icon-only buttons, and update test queries to target the accessible name directly.
