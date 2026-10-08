## 1. CrossSellRail Component Redesign

- [x] 1.1 Update `src/lib/components/cart/CrossSellRail.svelte` header to bilingual "You Might Also Like" / "আপনার পছন্দ হতে পারে" with curated discovery subtitle and verify text changes
- [x] 1.2 Replace custom mini-cards with standard `<ProductCard {product} onAddToCart={handleQuickAdd} />` and verify discount badges, ratings, and animated Buy Now CTAs render
- [x] 1.3 Implement mobile full-bleed horizontal scrolling (`-mx-4 px-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0`, `overflow-x-auto`, `snap-x`, hidden scrollbars) and verify cards scroll edge-to-edge without boundary clipping
- [x] 1.4 Implement desktop flex-wrap layout (`lg:overflow-visible lg:flex-wrap lg:gap-4`) with 3-column card sizing within the left column and verify absence of horizontal scrollbars on desktop

## 2. Recommendation Slicing & Verification

- [x] 2.1 Configure catalog recommendation filtering to 6 products excluding items in the cart and verify quick-add increments cart count and displays toast
- [x] 2.2 Run `npm run check` and verify zero TypeScript or SvelteKit compilation errors across all screen sizes
