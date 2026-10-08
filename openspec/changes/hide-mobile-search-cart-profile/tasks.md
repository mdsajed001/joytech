## 1. Header Visibility Implementation

- [x] 1.1 Update `src/lib/components/Header.svelte` props and state to derive `hideMobileSearch` when on `/cart` or `/profile`, and wrap the mobile search row `<div class="md:hidden px-4 pb-3">` in an `{#if !shouldHideMobileSearch}` block. Verify visually or via markup check that the search bar is omitted when navigating to `/cart` and `/profile`.
- [x] 1.2 Verify that the mobile search row remains present on discovery routes (e.g. `/`, `/product/[slug]`) on mobile viewport (< md).
- [x] 1.3 Verify that the desktop search bar in the main header bar continues to display on `md:` breakpoints and up on all routes including `/cart` and `/profile`.

## 2. Validation & Polish

- [x] 2.1 Run `npm run check` and verify zero TypeScript or Svelte compiler errors across the workspace.
