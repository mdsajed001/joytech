## 1. Remove Device Tab & Update Navigation Component

- [x] 1.1 Refactor `src/lib/components/profile/ProfileNavTabs.svelte` to remove the `devices` tab and update `activeTab` type to `'preferences' | 'rewards' | 'payments'`
- [x] 1.2 Implement shortened mobile tab labels ("Preferences", "Rewards", "Payments") with full descriptive titles for desktop and balanced 3-column layout
- [x] 1.3 Update `src/lib/components/profile/ProfileNavTabs.svelte` styling for mobile full-width edge-to-edge bleed (`rounded-none`, `border-x-0`, `w-full`)

## 2. Page Integration & Layout Structure

- [x] 2.1 Update `src/routes/profile/+page.svelte` to mount the tab bar immediately below `ProfileHeader` without top padding gap on mobile
- [x] 2.2 Remove `MyDevicesTab` import, references, and rendering in `src/routes/profile/+page.svelte` and clean up `src/lib/components/profile/MyDevicesTab.svelte`

## 3. Verification & Build

- [x] 3.1 Run `npm.cmd run build` and `npx.cmd svelte-check` to verify zero compilation errors and full type safety
- [x] 3.2 Verify responsive layout in mobile and desktop viewports, ensuring 0 top gap under blue hero, edge-to-edge full width, and no text collisions
