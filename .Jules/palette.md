## 2024-08-23 - Add accessible names to icon-only buttons
**Learning:** When using React Testing Library, querying elements by an empty name string (e.g., `{ name: '' }`) is a brittle anti-pattern that hides accessibility issues.
**Action:** Ensure icon-only buttons have valid accessible names (like `aria-label`) and test against them directly. Always include both `aria-label` and `title` on icon-only buttons.
