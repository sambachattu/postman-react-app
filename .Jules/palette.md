## 2024-07-24 - Screen Reader Compatibility with Test Selectors
**Learning:** When adding aria-labels to elements that previously lacked them, tests relying on empty name queries (e.g., `{ name: '' }`) will break. Accessibility improvements must be paired with test selector updates to maintain the test suite.
**Action:** Always run test suite and grep for elements like `getAllByRole('button')` when modifying icon buttons to ensure selectors match the new accessible name.
