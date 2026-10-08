## Why

The current product card layout separates the brand and the star rating into different visual blocks, wasting vertical space. Moving the rating to the top right opposite the brand will make the card more compact and visually balanced. Additionally, the "Buy Now" CTA button is too small on mobile screens (phone view), making it hard to tap.

## What Changes

- Wrap the Brand and Rating elements in a `flex justify-between` container at the top of the card body.
- Remove the separate rating block positioned below the product title.
- Increase the height and width (padding/sizing) of the CTA "Buy Now" button specifically for mobile screens (`sm:` and smaller breakpoints) to improve tap targets.

## Capabilities

### New Capabilities
None

### Modified Capabilities
None. The `.openspec.yaml` has been configured with `skip_specs: true` as this is purely a UI styling/layout change.

## Impact

- `src/lib/components/ProductCard.svelte`: The component's markup will be refactored to adjust the layout and Tailwind classes for the elements mentioned. No external APIs or behavior are affected.
