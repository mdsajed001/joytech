## 1. Product Header & Pricing Alignment

- [x] 1.1 In `src/routes/product/[slug]/+page.svelte`, remove the stock indicator and move the star rating, numerical score, and clickable review count hyperlink to the right side of the top metadata row opposite the brand/status. Verify markup and responsive alignment.
- [x] 1.2 In `src/routes/product/[slug]/+page.svelte`, restructure the pricing container so the crossed-out original price renders directly above the active current price on the left, and the savings text (`-X% (Save ৳Y)`) aligns to the right side. Verify layout on both mobile and desktop.
- [x] 1.3 Verify that clicking the review hyperlink smoothly scrolls to the `#reviews` section, and test display across viewports.

## 2. Validation

- [x] 2.1 Run `npm run check` to confirm zero TypeScript or Svelte compiler errors across the workspace.
