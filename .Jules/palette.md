## 2023-10-24 - Accessibility Testing Anti-Patterns
**Learning:** Using React Testing Library to query icon-only buttons by an empty string (e.g., `{ name: '' }`) is a brittle anti-pattern that hides accessibility issues. Icon-only buttons must have an accessible name (like `aria-label`) for screen readers.
**Action:** Always add an `aria-label` (and often a `title` for mouse tooltips) to icon-only buttons and update tests to query by that explicit name, ensuring both visual and structural accessibility.
