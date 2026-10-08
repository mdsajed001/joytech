## Why

On mobile viewports, the bottom Order Summary bar expands abruptly before the user has scrolled past the "You Might Also Like" recommendation rail, and when it expands, it snaps open instantly instead of gliding smoothly. Introducing a dedicated clearance gap below the recommendations, calibrating the scroll observer, and implementing a fluid CSS Grid drawer animation ensures users can freely browse cross-sells before the summary gracefully unrolls.

## What Changes

- **Calibrated Scroll Clearance Gap**: Add a dedicated buffer gap (`h-28 lg:hidden`) below `<CrossSellRail />` in `src/routes/cart/+page.svelte` so the scroll sentinel only enters its trigger zone after the user has completely scrolled past the recommendations and the gap.
- **Tuned IntersectionObserver**: Calibrate the observer's `rootMargin` so the sheet expands only after passing the clearance gap and smoothly collapses when scrolling back up into items.
- **Smooth CSS Grid Drawer Animation**: Replace the abrupt DOM node swap in `src/lib/components/cart/OrderSummary.svelte` with a smooth CSS Grid height transition (`grid-template-rows: 0fr` ➔ `grid-template-rows: 1fr`, `transition-all 0.45s cubic-bezier(0.16, 1, 0.3, 1)`), eliminating all snapping.
- **Fluid Header Morph & Single CTA**: Seamlessly cross-fade the collapsed header's `Checkout Now >` button into the expanded `Collapse ∨` button, keeping exactly one Checkout CTA visible and interactive at all times.

## Capabilities

### New Capabilities
- `smooth-order-summary-expansion`: Defines the calibrated scroll clearance trigger and CSS Grid fluid drawer animation for the mobile Order Summary sheet.

### Modified Capabilities
<!-- None -->

## Impact

- **Affected Components**: `src/routes/cart/+page.svelte`, `src/lib/components/cart/OrderSummary.svelte`.
- **APIs/State**: Uses existing `isMobileSummaryExpanded` state and Svelte runes with `IntersectionObserver`.
- **Dependencies**: No new packages required; uses native CSS Grid transitions and existing Hugeicons.
