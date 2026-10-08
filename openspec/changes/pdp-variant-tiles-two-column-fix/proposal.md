## Why

In desktop / PC view, the product purchase box is located inside a 5-column sidebar (`lg:col-span-5`), which provides only ~420px to 480px of available horizontal width. The variant cards grid previously specified `lg:grid-cols-4`, squeezing 4 option tiles into a single row (~105px per tile) and severely truncating titles (e.g. "Red • 64W Ultra" became "Rec" and "Blue • 64W Ultra" became "Blue • 6"). Restricting the grid to 2 columns (`grid-cols-2`) splits options into 2 clean rows of 2, granting each tile ~210px of width so titles and badges render with full legibility and zero truncation.

## What Changes

- **Consistent 2-Column Grid Across All Breakpoints**: Update the variant cards grid container in `src/lib/components/product/ProductVariantSelector.svelte` from `grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4` to `grid-cols-2`, guaranteeing options always display in 2 balanced columns (2 rows for 4 options) regardless of whether viewed on mobile or within the desktop sidebar.
- **Title Legibility & Breathing Room**: Provide generous horizontal space per tile so variant names, prices, and checkmark badges fit without clipping or awkward overlap.

## Capabilities

### New Capabilities
- `pdp-variant-tiles-two-column-layout`: Enforces a 2-column layout for variant option tiles to prevent squashing and title truncation in constrained sidebar containers.

### Modified Capabilities
<!-- None -->

## Impact

- **Affected Code**: `src/lib/components/product/ProductVariantSelector.svelte`.
- **Dependencies & APIs**: Pure Tailwind CSS class adjustment; zero backend or schema impact.
