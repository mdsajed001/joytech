## Why

On mobile devices, screen real estate in the sticky bottom bar on the product details page is extremely limited. The quantity stepper currently takes up valuable width, cramping the primary Call to Action (CTA) buttons ("Add to Cart" and "Buy Now"). Hiding the quantity selector completely on mobile views (leaving it visible on desktop/tablet) creates a cleaner layout and makes the core purchase buttons larger and easier to tap.

This accepts the tradeoff that mobile users will add 1 item by default and can modify quantities from the cart page if necessary.

## What Changes

- Modify `ProductStickyBar.svelte` to change the Tailwind display classes on the Quantity Stepper wrapper from `hidden min-[400px]:flex` to `hidden sm:flex`.
- This will hide the quantity selector on all viewports below the `sm` breakpoint (640px).

## Capabilities

### New Capabilities
None

### Modified Capabilities
None. (This is a purely responsive UI adjustment; `skip_specs: true` is configured).

## Impact

- `src/lib/components/product/ProductStickyBar.svelte`: Mobile display styling for the quantity selector.
