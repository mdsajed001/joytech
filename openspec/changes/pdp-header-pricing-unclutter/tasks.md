## 1. Product Header & Pricing Restructure

- [x] 1.1 Refactor the top metadata row in `src/routes/product/[slug]/+page.svelte` to display Brand, inline text status (`• New Arrival` / `• Best Seller`), and inventory availability indicator (`● In Stock (N)` / `● Out of Stock`) side-by-side without badge containers. Verify markup and responsive alignment.
- [x] 1.2 Refactor the pricing section in `src/routes/product/[slug]/+page.svelte` to consolidate current price, strikethrough price, and inline discount/savings text along a single horizontal baseline. Verify layout on both mobile and desktop.
- [x] 1.3 Verify that the clickable review count hyperlink continues to trigger smooth scrolling to the product reviews section.

## 2. Validation

- [x] 2.1 Run `npm run check` to verify zero TypeScript or Svelte compiler errors across the workspace.
