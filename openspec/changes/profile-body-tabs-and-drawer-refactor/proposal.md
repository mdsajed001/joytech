## Why

The customer profile page body currently suffers from excessive visual clutter, multi-layer nested borders ("box-in-a-box" syndrome), mismatched toggle control heights, and inconsistent design tokens. Additionally, the mobile drawer / bottom sheet has hardcoded light mode backgrounds (`bg-white`) causing contrast breakage in dark mode and rendered heavily-bordered cards inside a sliding modal. This change refactors the profile body tabs (Preferences, Rewards, Payments) and the Profile Drawer to establish a clean, modern, flat card hierarchy with unified toggle heights and full dark mode support.

## What Changes

- **De-modularize Tab Layouts**: Eliminate nested inner border boxes in Settings, Payments, Rewards, and Addresses. Replace 4-layer box hierarchies with sleek grouped sections, clean whitespace, and subtle row dividers (`divide-y divide-[var(--color-border-subtle)]`).
- **Standardize Toggles & Controls**: Align Theme Switcher and Language Switcher into uniform height segmented controls (`h-11` standard). Refactor notification toggle switches with design tokens (`var(--color-brand-primary)` and `var(--color-bg-subtle)`) and fluid animations.
- **Fix Profile Drawer & Bottom Sheet Dark Mode**: Replace hardcoded `bg-white` in `ProfileDrawer.svelte` with `bg-[var(--color-bg-surface)]` and form fields with `bg-[var(--color-bg-canvas)]`. Streamline list item rows inside the mobile bottom sheet to eliminate claustrophobic nested boxes.
- **Design Token & CTA Unification**: Standardize all brand color references from legacy `var(--color-brand-blue)` to `var(--color-brand-primary)`. Enforce consistent 44px interactive tap target heights on all primary action buttons.

## Capabilities

### New Capabilities
- `profile-body-and-drawer-ui`: Clean grouped hierarchy, unified control heights, seamless dark mode support, and token alignment for profile tabs and auxiliary slide-over drawers.

### Modified Capabilities

## Impact

- `src/lib/components/profile/SettingsTab.svelte`: Streamlined preference rows, unified segmented toggle buttons, tokenized notification switches.
- `src/lib/components/profile/PaymentsTab.svelte`: Clean payment card list, refined add form with unified token styling.
- `src/lib/components/profile/RewardsTab.svelte`: Unified VIP privileges list and ledger history without nested sub-boxes.
- `src/lib/components/profile/AddressesTab.svelte`: Clean address cards with streamlined labels and tokenized buttons.
- `src/lib/components/profile/ProfileDrawer.svelte`: Dark mode compliant background, refined mobile bottom sheet padding and row styling.
- `src/lib/components/profile/OrderTrackingModal.svelte`: Dark mode support and token unification.
