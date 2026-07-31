## 2026-07-31 - Adding ARIA labels to icon-only buttons
**Learning:** Icon-only buttons (like Lucide React icons) often lack accessible names. This application uses icon-only buttons for removing headers, deleting requests, and copying/downloading responses.
**Action:** Always verify icon-only buttons have an `aria-label` for screen readers and a `title` for hover tooltips. When adding them, remember to update any tests (like `screen.getByRole`) that previously matched an empty name string.
