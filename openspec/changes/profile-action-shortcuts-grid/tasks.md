## 1. Mock Data and Modal Infrastructure

- [x] 1.1 Add mock data for promo coupons, customer reviews, and return requests in `src/lib/data/mockProfile.ts` and verify exports
- [x] 1.2 Create `src/lib/components/profile/ProfileAuxModal.svelte` supporting interactive dialogs for Reviews, Returns, Promos, and Request

## 2. Profile Header Shortcuts Grid Redesign

- [x] 2.1 Refactor `src/lib/components/profile/ProfileHeader.svelte` to render the 8-item circular icon shortcut grid (Orders, History, Wishlist, Reviews, Addresses, Returns, Promos, Request) with count badges and high-contrast labels
- [x] 2.2 Wire tab routing and auxiliary modal open/close state in `src/routes/profile/+page.svelte`

## 3. Verification & Polish

- [x] 3.1 Run `npm.cmd run build` and `npx.cmd svelte-check` to confirm zero compilation errors and complete type safety
- [x] 3.2 Verify responsive 4-column x 2-row layout, touch targets, and modal flows on both desktop and mobile viewports
