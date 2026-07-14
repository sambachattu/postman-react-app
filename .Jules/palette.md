
## 2023-10-27 - Icon-Only Button Accessibility Pattern
**Learning:** Found multiple instances where icon-only buttons (Trash, Copy, Download) and checkboxes lacked accessible names. Even when `title` attributes were present, some lacked `aria-label` which is critical for screen reader compatibility.
**Action:** Consistently applying a pattern of `aria-label="[Action] [Context]"` (e.g., "Delete request") and matching `title="[Action] [Context]"` to all icon-only interactive elements to ensure both screen reader support and mouse hover tooltips are provided.
