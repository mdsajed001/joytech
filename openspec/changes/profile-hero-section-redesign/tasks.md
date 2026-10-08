## 1. Styles and Layout Refactoring

- [x] 1.1 Add `.profile-hero-bubble` utility in `src/routes/layout.css` with radial gradient ambient bubbles and verify styles apply properly
- [x] 1.2 Restructure `src/routes/profile/+page.svelte` by removing breadcrumb navigation and moving `<ProfileHeader>` outside the centered content wrapper for full-bleed edge-to-edge layout

## 2. Profile Header Component Redesign

- [x] 2.1 Refactor `src/lib/components/profile/ProfileHeader.svelte` into a full-bleed hero banner with brand primary blue bubble background, glowing avatar outline, and white typography
- [x] 2.2 Style stat metric cards (Orders, Addresses, Wishlist, Joy Points) as frosted glass interactive buttons with active-tab states in `ProfileHeader.svelte`

## 3. Verification & Polish

- [x] 3.1 Run `npm run build` and `npx svelte-check` to confirm zero build errors and type correctness
- [x] 3.2 Verify responsive design, tab navigation interactions, and visual alignment between hero content and lower tabs across mobile and desktop viewports
