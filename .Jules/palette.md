## 2024-05-24 - Accessibility Testing Anti-Pattern
**Learning:** Using React Testing Library to query interactive elements by an empty name string (e.g., `{ name: "" }`) is a brittle anti-pattern that hides underlying accessibility issues, such as missing ARIA labels on icon-only buttons.
**Action:** Ensure all interactive elements have valid accessible names (like `aria-label` and `title` for icon-only buttons) and write tests that query against these accessible names directly.
