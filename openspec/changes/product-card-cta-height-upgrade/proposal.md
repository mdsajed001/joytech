## Why

The current "Buy Now" CTA button on product cards was reduced to `py-1.5` (~26px height), making it appear undersized, visually secondary, and less satisfying to tap. Because the primary purchase CTA is the most vital conversion element on the card, its height should be restored to a prominent `min-h-[32px]` (matching the previous `size="sm"` button specification in the design system), giving it strong visual weight and tactile presence.

## What Changes

- Increase the height of the "Buy Now" / "Buy" CTA button in `src/lib/components/ProductCard.svelte` to `min-h-[32px]` (or `h-8`), with comfortable horizontal padding (`px-3.5 sm:px-4`).
- Tune typography to `text-[12px] font-extrabold` and icon to `size={14}` for stronger visual punch and legibility.
- Maintain responsive copy: `Buy Now` on screens ≥ 640px and `Buy` on screens < 640px.
- Maintain out-of-stock states (`Sold Out` / `Sold` with disabled styles).
- Ensure tight visual harmony with the stacked price block in the card footer.

## Capabilities

### New Capabilities
- `product-card-cta-height-upgrade`: Establishes the elevated `min-h-[32px]` button height, enhanced padding, and typography standards for product card purchase CTAs.

### Modified Capabilities
<!-- None -->

## Impact

- **Affected Components**: `src/lib/components/ProductCard.svelte`.
- **APIs/State**: No backend or state changes; preserves existing `onAddToCart` and `cartState.addItem` actions.
- **Visual Impact**: Stronger button affordance, superior touch target ergonomics, and balanced footer alignment with stacked prices.
