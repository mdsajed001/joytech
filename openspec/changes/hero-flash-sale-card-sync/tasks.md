## 1. ProductCard Component Enhancement

- [x] 1.1 In `src/lib/components/ProductCard.svelte`, add optional `showRating?: boolean = true` prop and conditionally render the star rating and review count row with `{#if showRating}`

## 2. Hero Flash Sale Module Update

- [x] 2.1 In `src/lib/components/Hero.svelte`, import `ProductCard` from `./ProductCard.svelte` and update `topFlashDeals` to slice up to 6 products
- [x] 2.2 In `src/lib/components/Hero.svelte`, replace the ad-hoc card markup with standard `<ProductCard {product} showRating={false} onAddToCart={handleAddToCart} />` inside a scrollable 2-column container (`overflow-y-auto flex-1 min-h-0 grid grid-cols-2 gap-2.5 xl:gap-3`)

## 3. Verification

- [x] 3.1 Run `npm run check` and `npm run build` to verify zero TypeScript, Svelte, or build errors
- [x] 3.2 Verify visually in desktop view that flash sale cards render with the exact standard ProductCard layout without star ratings and scroll smoothly within the hero module
