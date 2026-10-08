# Design: Direct-to-Checkout Buy Now Navigation

## Context

See `proposal.md` for problem background. Currently, clicking "Buy Now" on product cards adds items to `cartState` without redirecting, while PDP Buy Now redirects to `/cart`. We want all "Buy Now" CTAs across the site to route directly to `/checkout`.

## Goals / Non-Goals

**Goals:**
- Ensure every "Buy Now" CTA adds/stages the product in `cartState` and immediately navigates to `/checkout`.
- Maintain support for product variants, phone model compatibility, and custom quantities selected on PDPs.
- Ensure drawers (like `ShopByPhoneDrawer.svelte`) close gracefully or handle route navigation without state leaks.

**Non-Goals:**
- Removing the `/cart` page (customers can still access `/cart` via the header cart icon or dedicated cart links).
- Removing the "Add to Cart" secondary CTA (which continues to add items in the background with toast feedback).

## Decisions

### 1. Centralized Navigation in `ProductCard.svelte`
- **Choice**: Import `goto` from `$app/navigation` in `ProductCard.svelte` and invoke `goto('/checkout')` inside `handleBuyNow`.
- **Rationale**: Since `ProductCard.svelte` is reused across all grid layouts (Homepage, Category Rails, Search Drawer, Offers Page, Shop by Phone), embedding `goto('/checkout')` inside `handleBuyNow` guarantees 100% site-wide consistency without modifying dozens of parent component callbacks.

### 2. PDP Direct Routing (`src/routes/product/[slug]/+page.svelte`)
- **Choice**: Update `handleBuyNow()` in `+page.svelte` from `goto('/cart')` to `goto('/checkout')`.
- **Rationale**: Seamlessly routes both the main PDP "Buy Now with 1-Click" button and the `ProductStickyBar` "Buy Now" button directly to checkout with full variant and model state preservation.

## Risks / Trade-offs

- **[Risk]** Drawer components remaining open during route change.
  → **Mitigation**: SvelteKit `goto` navigation automatically unmounts or resets drawer overlays upon route transition.
