## 2025-01-08 - Empty String Query Anti-Pattern
**Learning:** When using React Testing Library, querying elements by an empty name string (e.g., `{ name: '' }`) is a brittle anti-pattern that hides accessibility issues, as seen in `HeadersSection.test.jsx` where a trash icon lacked an accessible name.
**Action:** Ensure elements have valid accessible names (like `aria-label`) and test against them directly. When adding or modifying `aria-label` attributes on UI elements, ensure corresponding tests are updated to match the new accessible name.
