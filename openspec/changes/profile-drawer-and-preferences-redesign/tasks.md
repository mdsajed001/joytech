## 1. Unified Responsive Slide-Over Drawer

- [x] 1.1 Create `src/lib/components/profile/ProfileDrawer.svelte` supporting Bottom Sheet on mobile and Side Drawer on PC for all 8 shopping shortcuts
- [x] 1.2 Update `src/lib/components/profile/ProfileHeader.svelte` shortcut click triggers to open the slide-over drawer independently of the bottom tab section

## 2. Redesign Bottom Tabs & Account Preferences

- [x] 2.1 Refactor `src/lib/components/profile/ProfileNavTabs.svelte` to remove duplicated titles and display the 4 dedicated account tabs: Preferences, Rewards, My Devices, Payments
- [x] 2.2 Enhance `src/lib/components/profile/SettingsTab.svelte` with theme toggles (Light/Dark/System), language switchers (English/বাংলা), and security controls
- [x] 2.3 Create `src/lib/components/profile/RewardsTab.svelte`, `MyDevicesTab.svelte`, and `PaymentsTab.svelte` components

## 3. Integration & Verification

- [x] 3.1 Update `src/routes/profile/+page.svelte` to wire drawer state and connect the redesigned 4-tab account management system
- [x] 3.2 Run `npm.cmd run build` and `npx.cmd svelte-check` to confirm zero compilation errors and complete type safety
- [x] 3.3 Verify slide-over drawer behavior on mobile and PC, tab navigation, and preference toggle responsiveness
