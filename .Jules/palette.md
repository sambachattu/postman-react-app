## 2024-03-24 - Accessibility on Header Forms
**Learning:** Found multiple instances where the form rows (checkbox, key, value inputs, and the remove button) lacked ARIA labels making the experience inaccessible to screen readers since they rely solely on placeholders and visual layouts. The icon-only delete button was entirely unlabeled in the DOM.
**Action:** Always verify custom form builder rows (like in `HeadersSection`) have explicit `aria-label` attributes tying them to their specific row context, and ensure all icon-only buttons include an `aria-label` and `title`.
