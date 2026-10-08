## Why

The current 404 error page has a broken visual hierarchy where the "404" text is obscured behind overlapping opaque floating cards, rendering it illegible. Furthermore, the makeshift collage of separate UI cards (phone sticker and unplugged icon) looks disjointed and broken rather than a cohesive illustration. 

This change replaces the broken collage with a clean, free, open-source vector illustration from the internet (unDraw "Page Not Found") and ensures the "404" status code is prominent, unobstructed, and styled in Joytech's brand colors with full dark-mode support.

## What Changes

- **Remove Broken Card Overlays**: Completely remove the overlapping floating cards (`floating-phone-wrap` and `floating-cable-wrap`) that mask the "404" digits.
- **Integrate Free Vector Illustration**: Embed a high-quality, open-source SVG illustration from the internet (unDraw's "Page Not Found" featuring bold, integrated 404 geometry and an explorer character) styled in Joytech's electric blue and warm accent colors.
- **Ensure 404 Prominence and Legibility**: Ensure the "404" is immediately legible at first glance without clipping or awkward layering.
- **Preserve Established Bilingual Humor & Recovery**: Maintain the approved English (65W GaN charger) and Bangla (Delivery rider location) jokes, along with quick recovery CTAs (Back to Home, Search Bar trigger, and popular search chips).
- **Responsive & Dark-Mode Tested**: Ensure the illustration scales smoothly on mobile viewports and respects both light and dark themes.

## Capabilities

### New Capabilities
- `error-page-404`: Provides a dedicated, responsive, and visually clear 404 error page with an unobscured, prominent 404 status, cohesive free vector artwork, bilingual contextual jokes, and seamless navigation recovery.

### Modified Capabilities
<!-- None -->

## Impact

- **Affected Code**: `src/lib/components/NotFoundView.svelte`, `src/routes/404/+page.svelte`, `src/routes/+error.svelte`.
- **Dependencies**: No external dependencies added; pure SVG asset and existing Tailwind CSS tokens.
- **APIs / Systems**: None affected.
