## YYYY-MM-DD - Missing accessible names on icon-only buttons
**Learning:** Using React Testing Library to query elements by an empty name string (`{ name: '' }`) is a brittle anti-pattern that hides accessibility issues. Icon-only buttons often lack proper labels, making them inaccessible to screen readers.
**Action:** Always include both an `aria-label` for screen reader accessibility and a `title` attribute for mouse hover tooltips on icon-only buttons (e.g., Lucide icons).
