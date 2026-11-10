## 2023-11-20 - Brittle Test Queries
**Learning:** Using React Testing Library to query by { name: '' } is a brittle anti-pattern that hides accessibility issues.
**Action:** Update tests when adding aria-labels to ensure elements are queried by valid accessible names.
