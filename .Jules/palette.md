## 2026-11-01 - Empty Name Test Anti-Pattern
**Learning:** The app's tests currently rely on querying empty names for icon-only buttons (e.g., `{ name: '' }`), which hides underlying accessibility issues and makes tests brittle.
**Action:** Always add `aria-label` to icon-only buttons and update the corresponding React Testing Library queries to match the new accessible name.
