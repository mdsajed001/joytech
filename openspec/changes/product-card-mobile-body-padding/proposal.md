## Why

In phone view (screens < 640px), product cards are rendered in a compact 2-column grid where total card width is only 160px to 180px. The current card body padding of `p-3` (12px on all 4 sides) eats up 24px of horizontal space and 24px of vertical space, crowding product titles, star ratings, and the price/Buy button row. Decreasing the padding evenly to a tighter `p-2` (8px) on mobile gives more room for text and controls while maintaining visual harmony with the product image.

## What Changes

- **Even Mobile Padding**: Update the card body container in `ProductCard.svelte` from `p-3` to `p-2 sm:p-3`, providing a uniform, compact 8px padding on all 4 sides (top, right, bottom, left) in phone view.
- **Desktop Preservation**: Retain `sm:p-3` (12px padding) for tablet and desktop viewports where cards have ample screen real estate.
- **Visual Balance**: Ensure brand label, 2-line title clamp, star rating, and price/Buy CTA row breathe naturally within the revised padding dimensions.

## Capabilities

### New Capabilities
- `product-card-density`: Responsive density and padding scaling for product card bodies between mobile and desktop viewports.

### Modified Capabilities
<!-- None -->

## Impact

- `src/lib/components/ProductCard.svelte`: Update card body padding classes.
- Affects all sections consuming `ProductCard` (Flash Sale, Product Grid, Hero slider, and Cart Cross-Sell rail) consistently on mobile.
