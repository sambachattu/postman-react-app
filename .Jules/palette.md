## 2024-08-02 - Icon Button Tests Hiding Accessibility Issues
**Learning:** Tests selecting icon buttons by an empty accessible name (`{ name: '' }`) unintentionally mask the lack of proper `aria-label`s on those buttons.
**Action:** When adding `aria-label`s to icon-only buttons, check if existing tests fail. If they do, update the tests to select by the new accessible name rather than an empty string or ignoring the name entirely.
