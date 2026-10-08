## Why

Product cards currently duplicate discount information in two places: an overlay badge on the image and a `Save ৳... (%)` line at the bottom, which consumes unnecessary vertical space and creates visual clutter. Additionally, side-by-side pricing often collides with action buttons, and the generic cart icon button lacks immediate purchasing intent.

Consolidating savings into a single top-placed badge, stacking the strikethrough original price cleanly on top of the real price, and upgrading the action button to an explicit "Buy Now" CTA (with responsive "Buy Now" on PC and "Buy" on phone) streamlines the card layout and enhances conversion.

## What Changes

- **Single Savings Indicator**:
  - Remove the bottom `Save ৳... (%)` line from [`ProductCard.svelte`](file:///c:/Users/Sajed/Documents/joytech/src/lib/components/ProductCard.svelte).
  - Retain the top `-XX%` badge on the thumbnail image as the single source of truth for discount/savings.
- **Vertical Price Stacking**:
  - When discounted, place the strikethrough original price (e.g. `৳2,850`) stacked directly on top of the active price (e.g. `৳2,450`).
  - When regular price (no discount), display only the active price.
- **"Buy Now" Call-To-Action Button**:
  - Replace the generic shopping bag button in [`ProductCard.svelte`](file:///c:/Users/Sajed/Documents/joytech/src/lib/components/ProductCard.svelte) and the "Add" button in [`Hero.svelte`](file:///c:/Users/Sajed/Documents/joytech/src/lib/components/Hero.svelte) with a prominent "Buy Now" button.
  - PC / Desktop (≥ 640px): Displays `Buy Now` with a mini icon.
  - Mobile (< 640px): Displays `Buy` with a mini icon.
  - Clicking triggers `cartState.addItem(product)` with an instant confirmation toast alert.

## Capabilities

### New Capabilities
- `product-card-pricing-buynow`: Streamlined single-badge discount presentation, vertical price stacking, and responsive "Buy Now" action buttons across product cards.

### Modified Capabilities
<!-- None -->

## Impact

- **Affected Components**: `src/lib/components/ProductCard.svelte`, `src/lib/components/Hero.svelte`.
- **State/APIs**: Integrates directly with `cartState.addItem(product)` without breaking existing props.
- **Visual Impact**: Cleaner, taller-feeling card content with zero redundant text, crisp vertical price alignment, and high-conversion "Buy Now" CTAs.
