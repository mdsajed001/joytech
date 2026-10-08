## 1. Create Pixel-Art Icon Components

- [x] 1.1 Create `src/lib/components/PixelThunderIcon.svelte` with 16x16 grid, `shape-rendering="crispEdges"`, stepped multi-frame electric bolt animation, and verify crisp pixel display
- [x] 1.2 Create `src/lib/components/PixelFireIcon.svelte` with 16x16 grid, `shape-rendering="crispEdges"`, multi-layer flame tongues, rising stepped embers, and verify stepped flame animation

## 2. Integrate PixelThunderIcon into Flash Sale Areas

- [x] 2.1 Update `src/lib/components/Hero.svelte` to import and render `PixelThunderIcon` in place of the outlined `BoltIcon` in the flash sale deal card, and verify visual appearance
- [x] 2.2 Update `src/lib/components/FlashSaleSection.svelte` to import and render `PixelThunderIcon` in place of `BoltIcon` in the section header, and verify visual appearance

## 3. Integrate PixelFireIcon into Customer Favorites

- [x] 3.1 Update `src/lib/components/ProductSection.svelte` to support a `kickerComponent` prop alongside `kickerIcon`, and verify backwards compatibility
- [x] 3.2 Update `src/routes/+page.svelte` to import `PixelFireIcon` and pass it as `kickerComponent` to the Customer Favorites `ProductSection`, and verify flame animation renders properly

## 4. Verification & Polish

- [x] 4.1 Run `npm run check` to verify zero type, syntax, or Svelte compiler errors across all modified components
- [x] 4.2 Inspect both icons in the running browser dev server in both light and dark themes to ensure crisp pixel edges and smooth stepped looping
