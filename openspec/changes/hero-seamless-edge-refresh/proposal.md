## Why

The current desktop Hero split layout has outer gutter padding, rounded container corners, and an inter-column gap that prevents it from achieving a modern, edge-to-edge flush appearance. Additionally, the Flash Sale deal cards feel overly cramped and squashed vertically ("small card problem") due to restrictive thumbnail heights and unnecessary footer metadata ("Stock Dhaka").

Removing the outer and inter-column gaps and corner radiuses allows the Hero section to sit completely flush and edge-to-edge. Removing the "Stock Dhaka" badge frees up vertical room to expand the 2x2 product cards, giving thumbnails, titles, prices, and CTAs generous vertical breathing room.

## What Changes

- **Zero Gaps & Seamless Edge-to-Edge**:
  - Remove outer padding (`px-3 sm:px-4 lg:px-6 py-3.5` → `p-0`) from the desktop Hero section.
  - Remove the horizontal gap between the banner slider and the Flash Sale spotlight (`gap-4` → `gap-0`), creating a sleek seamless divider.
- **Square Flush Edges (No Corner Radius)**:
  - Remove corner radiuses (`rounded-[var(--radius-xl)]` → `rounded-none`) from both the promotional banner slider and the Flash Sale card.
- **Enlarge Flash Sale Deal Cards**:
  - Increase thumbnail heights (from cramped `h-16` to spacious `h-24 sm:h-28` or proportional framing) so product images are prominent and clear.
  - Expand card padding and vertical layout so titles, badges, prices, and Add buttons breathe naturally without squishing or overlapping.
- **Remove "Stock Dhaka" Status Indicator**:
  - Eliminate the "Stock Dhaka" label from the Flash Sale footer to reclaim vertical space top and bottom for the 4 deal cards.
  - Re-center or cleanly align the "Explore All Flash Deals" CTA link.

## Capabilities

### New Capabilities
- `hero-seamless-edge-refresh`: Full edge-to-edge seamless Hero layout with zero gaps, square corners, expanded Flash Sale deal cards, and streamlined footer.

### Modified Capabilities
<!-- None -->

## Impact

- **Affected Components**: `src/lib/components/Hero.svelte`, `src/lib/components/PromoBannerSlider.svelte`.
- **APIs/State**: No state or data store changes.
- **Visual Impact**: Seamless edge-to-edge desktop Hero with full-bleed imagery and spacious, premium Flash Sale cards.
