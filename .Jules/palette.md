## 2024-05-18 - Icon-only Button Accessibility
**Learning:** Missing accessible names on icon-only buttons (like Trash2) was causing tests to query by an empty name (`{ name: '' }`), hiding the accessibility issue.
**Action:** Always add `aria-label` and `title` to icon-only buttons and update tests to query by the correct accessible name instead of empty string.
