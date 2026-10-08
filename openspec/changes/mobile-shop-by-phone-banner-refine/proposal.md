## Why

The previous iteration of the mobile drawer "Shop by Phone" section used an inset card with rounded outer corners and scaled the entire container and button during the breathing animation. This caused excessive inset padding, inconsistent corner radii compared to other CTAs across Joytech, and an overly aggressive movement. This change refines the banner to be full-width/flush without outer rounded corners, isolates the breathing animation strictly to the background bubbles, and aligns the inner button's corner radius with the standard Joytech CTA design token (`--radius-sm`).

## What Changes

- **No Outer Corner Radius & Full-Bleed Edge Alignment**:
  - Remove outer border-radius from the blue banner container (`rounded-none`).
  - Extend the container full-width (`-mx-5 px-5 py-3`) across the drawer width without outer side margins, creating a seamless horizontal section band.
- **Background-Only Breathing Effect via Bubbles**:
  - Remove all scaling and breathing keyframes from the outer container div and inner button.
  - Keep the container and button completely static and stable.
  - Confine the breathing and floating animations strictly to the translucent background bubbles.
- **Consistent CTA Corner Radius**:
  - Update the inner white CTA card's border radius to `rounded-[var(--radius-sm)]` (8px), matching all primary action buttons across the storefront.

## Capabilities

### New Capabilities
- `mobile-shop-by-phone-banner-refine`: Refines the mobile drawer Shop by Phone banner to be flush/straight-edged, with background-only bubble breathing and consistent CTA corner radius.

### Modified Capabilities
<!-- None -->

## Impact

- **Affected Files**:
  - `src/lib/components/MobileDrawer.svelte`: Update container layout, button corner radius, and CSS animations.
- **Dependencies**: None.
