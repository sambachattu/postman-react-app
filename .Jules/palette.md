## YYYY-MM-DD - Icon-Only Button Accessibility Anti-Pattern
**Learning:** Testing icon-only buttons using empty strings `{ name: '' }` hides missing accessible names (aria-labels). Screen readers require these names to describe actions accurately, and relying on visual cues or empty strings is an anti-pattern.
**Action:** When adding icon-only buttons, always include `aria-label` and `title` attributes. Update testing practices to query by the correct accessible name instead of empty strings.
