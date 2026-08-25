## 2024-08-25 - ARIA Labels for Icon-Only Buttons
**Learning:** Found multiple instances of icon-only buttons (using `lucide-react`) missing accessible names, which would make screen reader navigation difficult. When ARIA labels are added, corresponding `getByRole` queries in tests must be updated as querying by empty name `name: ''` becomes invalid.
**Action:** Always ensure icon-only buttons have both an `aria-label` for screen reader accessibility and a `title` attribute for mouse hover tooltips, and remember to check associated test files to update `getByRole` queries accordingly.
