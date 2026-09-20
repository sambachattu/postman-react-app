## 2023-10-25 - ARIA Labels on Icon-only Buttons
**Learning:** Found an accessibility issue pattern in the tests. The `screen.getAllByRole("button", { name: "" })` query in `src/components/HeadersSection.test.jsx` highlights that icon-only buttons (like Trash icons) lack `aria-label`s, rendering them invisible to screen readers.
**Action:** When adding or modifying `aria-label` attributes on icon-only UI elements, ensure corresponding tests are updated to match the new accessible name.
