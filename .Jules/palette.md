## 2023-10-27 - Brittle empty name queries in tests
**Learning:** Querying empty names (`{ name: '' }`) in testing library is a brittle anti-pattern that obscures underlying accessibility issues, especially on icon-only buttons.
**Action:** Always add valid accessible names (like `aria-label`) to icon-only buttons and test against them directly.
