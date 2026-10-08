## Why

In desktop view, the Flash Sale spotlight module in `Hero.svelte` currently uses an ad-hoc, custom mini-card layout with single-line truncated titles, no brand labels, and smaller buttons, creating visual disparity with the rest of the store. Unifying these cards with the standard `ProductCard.svelte` component layout ensures consistent branding, badge styling, price formatting, and CTA appearance, while omitting the star rating and reviews keeps the cards focused. Making the inner container vertically scrollable across a 2-column grid enables browsing multiple flash deals within the hero's fixed height.

## What Changes

- Add an optional `showRating: boolean = true` prop to `ProductCard.svelte` so the star rating and review count line can be omitted where a cleaner, more compact presentation is desired.
- In `Hero.svelte` (desktop flash sale module):
  - Replace the custom card markup with standard `<ProductCard>` instances with `showRating={false}`.
  - Make the inner container scrollable (`overflow-y-auto flex-1 min-h-0`) with a 2-column grid (`grid-cols-2`) and smooth scrolling.
  - Limit the displayed flash sale products to a configurable count (e.g., up to 6 deals).
  - Keep the countdown timer header and bottom footer link pinned at top and bottom.

## Capabilities

### New Capabilities
- `hero-flash-sale-cards`: Defines the desktop Hero flash sale module cards using the standardized ProductCard layout without star ratings and with a scrollable 2-column inner container.

### Modified Capabilities

## Impact

- `src/lib/components/ProductCard.svelte`: Adds `showRating?: boolean` prop (default `true`).
- `src/lib/components/Hero.svelte`: Replaces custom markup with `ProductCard` in an `overflow-y-auto` 2-column grid.
