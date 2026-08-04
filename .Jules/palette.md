## 2024-05-18 - ARIA labels for Icon-Only Buttons Improve Test Resiliency
**Learning:** Adding `aria-label` to icon-only buttons not only improves accessibility for screen readers but also dramatically improves testing by allowing test queries (`getAllByRole`) to use an explicit accessible name rather than relying on brittle index-based or empty-name selectors.
**Action:** Always include an `aria-label` on icon-only buttons across all components to ensure robust testing and proper accessibility.
