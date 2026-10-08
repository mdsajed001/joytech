# Proposal: Universal Direct Checkout Routing for All "Buy Now" CTAs

## Why

Currently, clicking "Buy Now" on product cards across the home screen, category grids, search results, and offer rails adds the item to the cart but leaves the customer on the current page without navigating to checkout. Furthermore, clicking "Buy Now" on product detail pages currently redirects users to `/cart` rather than `/checkout`.

For an e-commerce platform targeting rapid impulse purchases and high conversion, every "Buy Now" call-to-action—regardless of where it is rendered—must provide an instant 1-click checkout flow by adding/staging the item and navigating directly to the dedicated `/checkout` page.

## What Changes

- **Product Card Buy Now Routing**:
  - Update `ProductCard.svelte` so that clicking the "Buy Now" CTA adds the product to cart state and immediately navigates to `/checkout` using `goto('/checkout')`.
- **Product Details Page (PDP) Buy Now Routing**:
  - Update `src/routes/product/[slug]/+page.svelte` so that clicking the main "Buy Now with 1-Click" CTA or the sticky bottom bar's "Buy Now" CTA redirects directly to `/checkout` (`goto('/checkout')`) instead of `/cart`.
- **Global Consistency Across All Rails & Drawers**:
  - Ensure all product grid containers (Flash Sale, Category Rails, Offers, Search Drawer, Shop-by-Phone Drawer) inherit this direct-to-checkout behavior via `ProductCard.svelte`.

## Capabilities

### New Capabilities
- `direct-buy-now-checkout`: Direct-to-checkout navigation routing for all "Buy Now" CTAs across the entire application.

### Modified Capabilities
*(None; establishes the direct Buy Now checkout capability in the OpenSpec registry)*

## Impact

- **UI Components & Pages**:
  - `src/lib/components/ProductCard.svelte`
  - `src/routes/product/[slug]/+page.svelte`
- **Dependencies**: Uses SvelteKit `$app/navigation` (`goto`).
- **User Experience**: Streamlined 1-click checkout conversion funnel with zero intermediate page redirects.
