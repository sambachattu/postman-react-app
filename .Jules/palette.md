## 2024-05-18 - Avoid Brittle Empty Name Queries in Testing Library
**Learning:** Querying elements by an empty string `name` (e.g., `{ name: '' }`) in React Testing Library is an anti-pattern that obscures accessibility issues, especially missing labels for icon-only buttons.
**Action:** When adding `aria-label` and `title` to icon-only buttons, update existing tests to query by the newly provided accessible name directly, ensuring both accessibility and robust test coverage.
