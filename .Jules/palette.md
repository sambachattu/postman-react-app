## 2026-11-04 - Icon-Only Buttons Accessibility
**Learning:** Using an empty string query like `{ name: '' }` for React Testing Library is a brittle anti-pattern that hides accessibility issues.
**Action:** Always add `aria-label` and `title` to icon-only buttons, and query them by their accessible name in tests.
