## 1. Type & Catalog Upgrades

- [x] 1.1 Update `ProductReview` in `src/lib/types.ts` to include optional `purchasedVariant` and `helpfulCount` fields
- [x] 1.2 Enrich default product reviews in `src/lib/data/catalog.ts` with realistic variant attribution and helpful vote baselines

## 2. Component Redesign & Scoreboard

- [x] 2.1 Rebuild `src/lib/components/product/ProductReviews.svelte` with:
  - Solid gold filled stars (`fill-amber-400 text-amber-400`)
  - Rating distribution breakdown bar chart (5★ to 1★) with percentage fills
  - "Write a Review" brand boxy CTA button
  - Filter chips (`All`, `5 Stars`, `4 Stars`, `Verified Only`) and sort selector
  - Modern review cards with avatar, verified badge, purchased variant, and interactive `👍 Helpful (N)` reaction button
- [x] 2.2 Implement the "Write a Review" modal dialog in `ProductReviews.svelte` with interactive star selector, text inputs, form validation, and toast submission confirmation

## 3. Verification & Polish

- [x] 3.1 Run `npm run check` to verify zero type, syntax, or Svelte compiler errors across the codebase
- [x] 3.2 Verify on desktop and mobile viewports that stars are filled gold, distribution bars display correctly, filtering and sorting work smoothly, helpful buttons increment, and submitting a review adds the review to the list with toast feedback
