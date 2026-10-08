## Why

The user wants to divide the space in the bottom row of the product card more evenly. Currently, the pricing section and the "Buy Now" CTA button are just flex items that take up whatever space they need. By giving them 50% width each, the layout will look more structured and balanced, especially on mobile.

## What Changes

- Modify the `ProductCard`'s bottom row (which contains the pricing column and the CTA button) to use a 50/50 width layout.
- The CTA button will be set to take up 50% of the width (`w-1/2`).
- The price section will be set to take up 50% of the width (`w-1/2`).

## Capabilities

### New Capabilities
None

### Modified Capabilities
None. The `.openspec.yaml` has been configured with `skip_specs: true` as this is purely a UI layout styling change.

## Impact

- `src/lib/components/ProductCard.svelte`: Tailwind classes in the bottom flex container and its children will be updated.
