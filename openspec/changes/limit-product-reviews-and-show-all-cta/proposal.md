## Why

Currently on the product details page, all reviews matching the active filter are rendered simultaneously in the reviews feed. When a product has several reviews, this takes up extensive vertical scroll space and pushes related products or footer content far down.

Limiting the initial review display to at most 2 reviews and providing a clean, outlined "Show All Reviews" CTA button gives customers an immediate preview of authentic feedback while keeping page height compact and controllable.

## What Changes

- **Initial Review Cap**: Limit the visible reviews feed on `/product/[slug]` to a maximum of 2 reviews by default.
- **Outlined "Show All" CTA Button**: Render a sleek, outlined CTA button below the second review card whenever more than 2 reviews match the active filter/sort criteria.
- **Dynamic Toggle / Expand**: Clicking the outlined CTA reveals the remaining reviews, with the button toggling state (e.g. "Show All Reviews (N)" &rarr; "Show Less").
- **Filter Reset Interaction**: Switching filters resets the expansion state so the new filtered list also starts with at most 2 items.

## Capabilities

### New Capabilities
- `product-reviews-expansion`: Maximum 2 review initial display cap with an outlined CTA button to expand and collapse the full list.

### Modified Capabilities
<!-- None -->

## Impact

- `src/lib/components/product/ProductReviews.svelte`: State for `showAllReviews`, review list slicing (`displayedReviews.slice(0, 2)` vs full list), and outlined CTA button markup and interactions.
