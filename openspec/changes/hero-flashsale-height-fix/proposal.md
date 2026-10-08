## Why

In desktop view, the Hero section displays a 65%/35% split between the promotional banner slider and the Flash Sale spotlight module. However, the internal content of the Flash Sale card (header, 2x2 product grid with aspect-ratio images, prices, CTAs, and footer link) exceeds the container's height. Because the right module lacks strict height containment (`overflow-hidden` and `min-h-0`) and its inner card elements are too tall, the card spills downwards past the container boundary and overlaps the Category chip rail below it. 

This change fixes the broken layout by enforcing strict height parity between the banner slider and the Flash Sale section, constraining internal sizing so that all 4 flash deals fit within the banner bounds with zero overflow or overlap.

## What Changes

- **Desktop Hero Height Parity**: Guarantee that the Flash Sale card matches the exact height of the promotional banner slider and never extends beyond it.
- **Strict Layout Containment**: Add `overflow-hidden` and `min-h-0` to the desktop right column container to eliminate any possible downward spillover.
- **Compact Deal Card Sizing**: Optimize the 2x2 grid item dimensions (compact image thumbnail aspect/max-height, concise spacing, and refined typography) so that all 4 deal cards, the countdown header, and the footer action fit comfortably inside the container across desktop screen sizes (from 1024px to 1920px+).
- **Clean Boundary Isolation**: Ensure the Hero section's bottom border cleanly demarcates the Hero from the Category chips rail without any visual clipping or overlaps.

## Capabilities

### New Capabilities
- `hero-flashsale-height-sync`: Strict height synchronization and overflow containment between the promotional banner slider and the desktop Flash Sale spotlight module in `Hero.svelte`.

### Modified Capabilities
<!-- None -->

## Impact

- **Affected Components**: `src/lib/components/Hero.svelte` (desktop split layout styling and deal card metrics).
- **APIs/State**: No changes to props, data, or state stores (`cartState`, `phoneDrawerState`).
- **Visual Impact**: Flash Sale module stays flush with the banner bottom edge; Categories rail is fully unobstructed.
