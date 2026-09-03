## 2024-05-14 - Empty Name Queries Mask A11y Issues
**Learning:** Using screen.getAllByRole('button', { name: '' }) in tests is an anti-pattern that hides the fact that interactive elements lack accessible names. This allows inaccessible UI components to pass tests.
**Action:** Always ensure interactive elements have valid accessible names (like aria-label for icon-only buttons) and test against those direct names instead of empty strings.
