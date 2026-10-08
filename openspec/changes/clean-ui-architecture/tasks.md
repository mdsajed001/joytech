## 1. Extract Category Showcase Section

- [x] 1.1 Create `src/lib/components/CategorySection.svelte` containing the category grid, header, and icon mappings from `CATEGORIES` data. Verify: component renders the 6 categories with correct HugeIcons and badge counts.
- [x] 1.2 Replace the inline `#categories` section in `src/routes/+page.svelte` with `<CategorySection />`. Verify: categories section renders identically and anchor link `#categories` functions properly.

## 2. Create Reusable Product Showcase Section

- [x] 2.1 Create `src/lib/components/ProductSection.svelte` accepting `id`, `title`, `kicker`, `kickerIcon`, `kickerColor`, `products`, `onAddToCart`, and optional `subtitle` or `viewAllLink`. Verify: component renders a section header and responsive 4-column product grid with `ProductCard` instances.
- [x] 2.2 Replace the inline `#best-sellers` section in `src/routes/+page.svelte` with `<ProductSection>` configured for Best Sellers. Verify: best-seller cards render in correct order with flame icon kicker.
- [x] 2.3 Replace the inline `#new-arrivals` section in `src/routes/+page.svelte` with `<ProductSection>` configured for New Arrivals. Verify: new arrivals cards render in correct order with sparkles icon kicker.

## 3. Extract Brand Authenticity Banner

- [x] 3.1 Create `src/lib/components/AuthenticityBanner.svelte` with brand guarantee copy and compatibility CTA button. Verify: component renders gradient styling and triggers click callback.
- [x] 3.2 Replace the inline promotional brand banner in `src/routes/+page.svelte` with `<AuthenticityBanner onCheckCompatibility={...} />`. Verify: CTA button smoothly scrolls to `#shop-by-phone`.

## 4. Page Cleanliness & Integration Verification

- [x] 4.1 Refactor `src/routes/+page.svelte` to remove all unused icon imports and prune duplicate logic, reducing the file to an elegant, declarative composition under 50 lines. Verify: `+page.svelte` contains only component tags and setup logic.
- [x] 4.2 Run `npm run check` (`svelte-check`) and `npm run build` (`vite build`). Verify: 0 errors, 0 warnings, and clean production build.
- [x] 4.3 Verify full desktop and mobile views in the browser to confirm zero visual regressions, all anchor links work, and "Add to Cart" functions seamlessly with client-side reactive state.
