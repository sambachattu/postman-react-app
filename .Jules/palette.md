## 2024-08-20 - Add ARIA Labels to Icon-Only Buttons
**Learning:** The React Testing Library pattern of querying elements by an empty name string (e.g., `{ name: '' }`) is a brittle anti-pattern that hides accessibility issues. We discovered tests explicitly doing this for icon-only buttons.
**Action:** When adding or modifying icon-only buttons (like Lucide icons), always include both an 'aria-label' for screen reader accessibility and a 'title' attribute for mouse hover tooltips. Corresponding tests should be updated to match the new accessible name.
