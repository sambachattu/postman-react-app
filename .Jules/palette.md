## YYYY-MM-DD - Empty Button Name Tests Hiding A11y Issues
**Learning:** Testing library tests that use `{ name: '' }` to find icon-only buttons implicitly hide accessibility issues by testing against an inaccessible state.
**Action:** Always update tests to expect a valid `aria-label` when modifying icon-only buttons, as it enforces better a11y practices in the codebase.
