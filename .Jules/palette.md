## 2026-09-02 - Avoid empty string name queries in RTL
**Learning:** When using React Testing Library, querying elements by an empty name string (e.g., `{ name: '' }`) is a brittle anti-pattern that hides accessibility issues. If an icon-only button doesn't have an accessible name, the test will pass when querying by `{ name: '' }`, missing the accessibility violation.
**Action:** Ensure elements have valid accessible names (like `aria-label` or `title`) and test against them directly.
