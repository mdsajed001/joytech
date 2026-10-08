## Why

In the Flash Sale section header, aligning the left and right columns with `items-end` causes the bottom of the discount badge to align with the bottom of the taller countdown digit boxes. This pushes the top "Ends in:" label upwards, creating an awkward vertical offset with the "⚡ Flash Sale" title.

Top-aligning the left and right header columns (`items-start`) creates a clean 2-row horizontal alignment pair across the section header: Row 1 aligns "⚡ Flash Sale" with "Ends in:", and Row 2 aligns "Up to 40% OFF" with the countdown digit boxes.

## What Changes

- Update `src/lib/components/FlashSaleSection.svelte` header container flex alignment from `items-end` to `items-start`.
- Ensure top-row visual alignment between the "⚡ Flash Sale" title and the "Ends in:" label across mobile and desktop viewports.

## Capabilities

### New Capabilities
- `flash-sale-header-vertical-align`: Establishes top-row alignment (`items-start`) for the Flash Sale section header elements.

### Modified Capabilities
<!-- None -->

## Impact

- **Affected Components**: `src/lib/components/FlashSaleSection.svelte`.
- **Visual Impact**: Symmetrical, balanced horizontal alignment across the two header rows.
