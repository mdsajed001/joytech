## Why

In the PC view, the profile tab content (Settings and Payments) is left-aligned within a wide 1280px container while having a constrained maximum width of 768px. This creates a visually unbalanced layout where the left side is populated and the right side is entirely empty, looking unpolished.

## What Changes

- Center the content column for both the Settings and Payments tabs on larger screens.
- This will be achieved by adding horizontal auto-margins to the constrained width containers.

## Capabilities

### New Capabilities
None

### Modified Capabilities
None. This is a pure UI layout fix that does not alter any spec-level behaviors. 

## Impact

- **Affected Code:** `src/lib/components/profile/SettingsTab.svelte`, `src/lib/components/profile/PaymentsTab.svelte`
- **Dependencies:** None
- **Systems:** None
