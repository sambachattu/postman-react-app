## 2024-10-26 - Icon-only buttons accessibility pattern
**Learning:** Testing library queries relying on empty names (`{ name: '' }`) indicate brittle tests and missing accessible names for icon-only buttons.
**Action:** Always add `aria-label` and `title` to icon-only buttons and update tests to query by the accessible name, ensuring both screen reader and mouse user accessibility.
