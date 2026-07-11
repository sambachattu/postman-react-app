## 2024-11-20 - Adding Accessible Labels to Lucide Icons
**Learning:** Using Lucide icons directly inside buttons without `aria-label` makes them completely inaccessible to screen readers, while missing `title` makes their function unclear to mouse users without a tooltip.
**Action:** Always add both `aria-label` (for a11y) and `title` (for tooltips) attributes to icon-only buttons globally across the app.
