## 1. Direct Buy Now Routing Implementation

- [ ] 1.1 Update `src/lib/components/ProductCard.svelte` to import `goto` from `$app/navigation` and execute `goto('/checkout')` inside `handleBuyNow`, ensuring all card instances across grids and drawers redirect directly to checkout.
- [ ] 1.2 Update PDP `src/routes/product/[slug]/+page.svelte` `handleBuyNow` function to execute `goto('/checkout')` instead of `goto('/cart')`, ensuring both the main PDP CTA and the sticky bottom bar redirect to checkout.

## 2. Verification & Type Check

- [ ] 2.1 Test Buy Now actions across Homepage, Category Rails, Search, PDP, and Sticky Bar in the browser, verifying instant item staging and direct navigation to `/checkout`.
- [ ] 2.2 Run `npm.cmd run check` to confirm zero compilation or TypeScript errors.
