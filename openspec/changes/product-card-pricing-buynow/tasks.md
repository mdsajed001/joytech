## 1. ProductCard & Hero Deal Card Enhancements

- [x] 1.1 Remove the duplicate `Save ৳... (%)` line in `src/lib/components/ProductCard.svelte`, preserving the single discount indicator on the top image badge.
- [x] 1.2 Update `ProductCard.svelte` to stack the strikethrough original price directly on top of the real price, and display only the active price when no discount exists.
- [x] 1.3 Replace the shopping bag icon button in `ProductCard.svelte` with a responsive "Buy Now" CTA ("Buy Now" on screens ≥ 640px, "Buy" on screens < 640px, with a mini icon).
- [x] 1.4 Update the mini flash deal cards in `src/lib/components/Hero.svelte` to use the same stacked price structure and "Buy Now" CTA.

## 2. Validation & Verification

- [x] 2.1 Run `npm run check` and verify zero Svelte/TypeScript errors.
- [x] 2.2 Run `npm run build` to verify production bundle builds cleanly.
- [x] 2.3 Verify visually in the browser across desktop and mobile viewports that product cards display stacked pricing and "Buy Now" buttons without layout shifts or text wrapping.
