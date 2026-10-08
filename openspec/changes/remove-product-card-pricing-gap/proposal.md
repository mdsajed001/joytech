## Why

The user noticed that the CTA button does not appear to take up exactly 50% of the space on phone views. This is because the CSS grid layout introduced in the previous change includes a gap (`gap-1.5 sm:gap-2`) between the two grid columns (the pricing section and the CTA). This gap creates empty space in the middle, subtracting from the 50% visual width of each item. Removing this gap will ensure both sections sit flush and visually occupy exactly half the card's width.

## What Changes

- Remove the `gap-1.5` and `sm:gap-2` utility classes from the `grid grid-cols-2` container in the bottom row of `ProductCard.svelte`.

## Capabilities

### New Capabilities
None

### Modified Capabilities
None. The `.openspec.yaml` has been configured with `skip_specs: true` as this is purely a UI layout styling change.

## Impact

- `src/lib/components/ProductCard.svelte`: Tailwind classes in the bottom grid container will be updated.
