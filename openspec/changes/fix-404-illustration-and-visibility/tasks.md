## 1. Asset & Vector Illustration Integration

- [x] 1.1 Create `src/lib/components/NotFoundIllustration.svelte` and verify the component compiles cleanly
- [x] 1.2 Ensure the illustration SVG is responsive with fluid scaling and free of raster base64 bloat
- [x] 1.3 Update `NotFoundIllustration.svelte` to use the user-provided vector from `static/Oops! 404 Error with a broken robot-rafiki.svg`
- [x] 1.4 Verify the user-provided vector displays cleanly on `/404` in both light and dark modes

## 2. NotFoundView Refactoring & Layout Fix

- [x] 2.1 Remove the overlapping floating cards (`floating-phone-wrap`, `floating-cable-wrap`) and watermark 404 from `src/lib/components/NotFoundView.svelte`
- [x] 2.2 Embed `NotFoundIllustration` within a dedicated hero container ensuring the 404 artwork and status are 100% visible and unobscured
- [x] 2.3 Retain the bilingual joke card (GaN charger for English, Delivery rider location for Bangla) and interactive recovery CTAs (Back to Home, Search takeover, and popular search chips)

## 3. Verification & Visual Polish

- [x] 3.1 Test the `/404` test route on both desktop and mobile viewport sizes to verify the 404 artwork scales cleanly with zero horizontal scroll
- [x] 3.2 Test theme switching (light and dark mode) to verify high contrast and readability
- [x] 3.3 Run `npm run check` to verify zero TypeScript or Svelte template errors
