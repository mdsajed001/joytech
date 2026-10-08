## 1. Route-Scoped Mobile Cart Button in Header

- [x] 1.1 Import `page` from `$app/stores` in `src/lib/components/Header.svelte` and compute `isProductPage`
- [x] 1.2 Wrap the mobile cart button in `{#if isProductPage}` so it only renders on `/product/*` routes on mobile viewports

## 2. Route Behavior & Micro-Interaction Verification

- [x] 2.1 Verify with `npm run check` for syntax and type safety
- [x] 2.2 Verify mobile header on homepage (`/`): confirm the top cart icon is suppressed, leaving only the hamburger menu
- [x] 2.3 Verify mobile header on product details page (`/product/*`): confirm the top cart icon is visible and animated nod + badge pop triggers when clicking "Add to Cart"
