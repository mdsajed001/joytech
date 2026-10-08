## 1. State & Review Slicing

- [x] 1.1 Add `isExpanded` reactive state and `visibleReviews` derived slice capped at 2 in `src/lib/components/product/ProductReviews.svelte`, resetting `isExpanded` to false whenever `activeFilter` or `activeSort` changes.

## 2. Outlined CTA Integration

- [x] 2.1 Render the outlined "Show All Reviews" / "Show Less" CTA button directly beneath the reviews feed in `src/lib/components/product/ProductReviews.svelte` when `displayedReviews.length > 2`.
- [x] 2.2 Verify the button toggles between revealing all reviews and collapsing back to 2, with bilingual labels and boxy border radius matching the design system.

## 3. Verification & Validation

- [x] 3.1 Run `npm run check` to ensure zero type errors and verify build correctness.
