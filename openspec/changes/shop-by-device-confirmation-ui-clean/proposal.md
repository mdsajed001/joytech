## Why

In the "Shop by Device" drawer/modal configurator (`AutoWizardConfigurator.svelte`), Step 4 (the confirmation view after picking Device Type, Brand, and Model) had two visual inconsistencies that broke design system alignment:
1. An unnecessary outer card container (`border border-[var(--color-border-default)] bg-[var(--color-bg-surface)] rounded-[var(--radius-xl)]`) enclosed Step 4, causing an awkward "card-within-a-card" double border look unlike Steps 1, 2, and 3 which sit flush within the drawer container.
2. The primary CTA button ("Browse All Verified Accessories") used `rounded-full` (capsule pill), contrasting with Joy Telecom's signature boxy button design language (`rounded-[var(--radius-sm)]` / `rounded-[var(--radius-md)]`) used across `Button.svelte`, `ProductCard.svelte`, and checkout actions.

Cleaning up these inconsistencies unifies Step 4 with the rest of the wizard and with the storewide boxy design system.

## What Changes

- **Remove Redundant Outer Card Wrapper in Step 4**: Strip the outer `border`, `bg-[var(--color-bg-surface)]`, and `shadow-sm` wrapper enclosing Step 4 in `AutoWizardConfigurator.svelte`. Allow Step 4 content to sit naturally flush in the drawer's scrollable container, mirroring the clean, unboxed presentation of Steps 1, 2, and 3.
- **Align Primary CTA Button Corner Radius**: Update the "Browse All Verified Accessories" CTA button from `rounded-full` to Joy Telecom's boxy corner standard `rounded-[var(--radius-sm)]`, preserving the ambient dual-bubble gradient animation (`cta-search-animated`) and typography.
- **Clean Layout & Spacing**: Adjust vertical rhythm, padding, and category shortcut card alignments so the guarantee badge, device title, quick filter shortcuts, and primary CTA look balanced and polished without the confining outer border.

## Capabilities

### New Capabilities
- `shop-by-device-confirmation-clean`: Defines visual presentation requirements for the Step 4 confirmation view in the Shop by Device configurator, specifying flush container alignment (no redundant outer border) and boxy CTA button corner radius.

### Modified Capabilities
*(None. Main specs directory currently has no committed baseline specs for this component.)*

## Impact

- **Affected Files**: `src/lib/components/AutoWizardConfigurator.svelte`.
- **APIs / Dependencies**: None. Purely frontend presentation and UI/UX consistency refinement.
- **Breaking Changes**: None. All state, events, and navigation actions remain intact.
