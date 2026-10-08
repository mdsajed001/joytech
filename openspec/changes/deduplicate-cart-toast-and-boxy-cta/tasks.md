## 1. Eliminate Duplicate Toast Dispatches

- [x] 1.1 Remove redundant manual `cartState.showToast(...)` calls in `src/routes/product/[slug]/+page.svelte` (`handleAddToCart` and related product click handlers) so only 1 rich toast fires per add-to-cart action

## 2. Boxy Action CTA Styling

- [x] 2.1 Update the action button markup in `src/lib/components/toast/ToastItem.svelte` from `rounded-full` to boxy `rounded-[var(--radius-sm)]` (8px radius) with crisp border and tactile press feedback

## 3. Verification

- [x] 3.1 Run `npm run check` to verify zero type or syntax errors
- [x] 3.2 Verify on the product details page that a single click on "Add to Cart" triggers exactly one rich toast with the boxy "View Cart" CTA
