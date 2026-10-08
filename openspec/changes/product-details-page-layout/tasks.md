## 1. Routing & Layout Setup

- [x] 1.1 Update `src/routes/+layout.svelte` to conditionally suppress `BottomNav.svelte` on `/product/[slug]` routes, and verify by checking that root navigation is omitted on product pages.
- [x] 1.2 Update `SupportWidget.svelte` with elevated mobile bottom offset on `/product/[slug]` routes, and verify it does not collide with sticky bottom purchase controls.
- [x] 1.3 Create `src/routes/product/[slug]/+page.svelte` with catalog lookup from `$lib/data/catalog.ts` and graceful 404 fallback for missing slugs.

## 2. Product Detail Sub-Components

- [x] 2.1 Implement `ProductGallery.svelte` with multi-angle thumbnails, hero zoom preview, and stock/discount badges.
- [x] 2.2 Implement `ProductVariantSelector.svelte` with interactive phone model pills, color swatches, and mandatory selection validation with error pulse.
- [x] 2.3 Implement `ProductTrustCard.svelte` with Dhaka (24–48h) and Outside Dhaka delivery info, COD badge, and official warranty guarantee terms.
- [x] 2.4 Implement `ProductAccordion.svelte` with collapsible panels for Overview, Technical Specifications, and Package Contents.
- [x] 2.5 Implement `ProductReviews.svelte` with aggregate star breakdown and verified customer review cards.
- [x] 2.6 Implement `ProductStickyBar.svelte` featuring price, quantity stepper, "Add to Cart" (with cart icon), and animated "Buy Now" (with icon).

## 3. Product Page Assembly & Cart Flow

- [x] 3.1 Assemble `src/routes/product/[slug]/+page.svelte` integrating all sub-components into a desktop 2-column split and mobile-first stacked hierarchy.
- [x] 3.2 Wire purchase actions to `cartState.addItem` and trigger confirmation toasts for "Add to Cart" and instant navigation for "Buy Now".
- [x] 3.3 Add "You May Also Like" complementary accessories rail filtering matching items by compatible phone models.

## 4. Product Card Linkage & Verification

- [x] 4.1 Update `ProductCard.svelte` to wrap the thumbnail and title with links to `/product/[slug]` while preserving direct "Buy Now" button functionality.
- [x] 4.2 Run `cmd /c npm run check` to verify 0 type or syntax errors across all components.
- [x] 4.3 Deploy to Vercel production and verify the complete mobile-first product page experience across desktop and phone views.
