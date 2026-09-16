## YYYY-MM-DD - React Testing Library Query Anti-Pattern
**Learning:** Querying elements by an empty name string (e.g., `{ name: '' }`) is a brittle anti-pattern in React Testing Library that hides underlying accessibility issues, particularly missing accessible names on icon-only buttons.
**Action:** Always ensure interactive elements have valid accessible names (like `aria-label` or inner text) and test against those specific names directly.
