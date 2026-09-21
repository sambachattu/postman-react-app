## YYYY-MM-DD - Missing accessible names on icon-only buttons
**Learning:** Icon-only buttons (like Lucide icons) lack accessible names, making them invisible to screen readers and difficult to target in tests using React Testing Library without resorting to brittle empty string queries (`{ name: '' }`).
**Action:** Always add `aria-label` to icon-only buttons to ensure they have an accessible name, and include a `title` attribute for mouse users.
