## 1. Preferences & Settings Tab Refactor

- [x] 1.1 De-modularize `SettingsTab.svelte` by flattening nested sub-boxes in Appearance, Personal Information, Notifications, and Security, and verify clean divided card structure.
- [x] 1.2 Unify the Theme Switcher and Language Switcher segmented controls with matching 44px heights and active state pills, and verify visual alignment.
- [x] 1.3 Standardize the notification toggle switches with design tokens (`var(--color-brand-primary)` and `var(--color-bg-subtle)`) and smooth transitions, and verify switch responsiveness.
- [x] 1.4 Update input and action button styling in Personal Information and Security sections to use standard 44px tap targets, and verify form field interaction.

## 2. Rewards & Payments Tabs Streamlining

- [x] 2.1 Refactor `RewardsTab.svelte` to remove nested mini-card borders on VIP privileges, replacing them with a sleek clean perks list and verified points ledger.
- [x] 2.2 Refactor `PaymentsTab.svelte` to streamline saved payment cards, fix inline add form input backgrounds, and replace undefined color tokens with `var(--color-brand-primary)`.

## 3. Profile Drawer & Modal Dark Mode & Token Fixes

- [x] 3.1 Refactor `ProfileDrawer.svelte` to replace hardcoded `bg-white` with `bg-[var(--color-bg-surface)]`, update form field backgrounds to `bg-[var(--color-bg-canvas)]`, and streamline bottom sheet list rows for mobile viewports.
- [x] 3.2 Update `AddressesTab.svelte`, `OrdersTab.svelte`, `WishlistTab.svelte`, and `OrderTrackingModal.svelte` to replace `var(--color-brand-blue)` with `var(--color-brand-primary)` and ensure full dark mode compatibility.

## 4. Verification & Polish

- [x] 4.1 Run build check `npm run build` or Svelte check to verify that all components compile without errors.
- [x] 4.2 Verify visual appearance in browser across desktop and mobile screen sizes in both Light and Dark modes.
