## 2025-02-28 - Testing Library Empty Name Queries Mask Accessibility Issues
**Learning:** Using `{ name: '' }` in React Testing Library queries is a brittle anti-pattern that hides accessibility issues. Icon-only buttons lacking accessible names will pass these tests, obscuring the missing `aria-label`.
**Action:** Always ensure elements have valid accessible names (like `aria-label`) and test against them directly. Avoid relying on empty names for queries.
