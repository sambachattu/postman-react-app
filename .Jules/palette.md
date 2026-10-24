## YYYY-MM-DD - [Test Anti-pattern Masking A11y Issues]
**Learning:** Testing elements using `{ name: '' }` is a brittle anti-pattern that hides accessibility issues. Icon-only buttons were passing tests without having any accessible name (like `aria-label`), making them invisible to screen readers.
**Action:** Always ensure icon-only buttons have both an `aria-label` for screen reader accessibility and a `title` attribute for mouse hover tooltips, and assert against these accessible names directly in tests.
