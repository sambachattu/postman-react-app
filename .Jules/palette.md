## 2024-09-04 - Hidden Accessibility Issues with RTL Empty Name Queries
**Learning:** Using `{ name: '' }` in React Testing Library queries is a brittle anti-pattern that successfully finds icon-only buttons lacking accessible names, thereby hiding critical accessibility issues from test suites.
**Action:** Ensure elements have valid accessible names (like `aria-label`) and test against them directly. Update tests to use specific names and add missing ARIA labels to UI elements.
