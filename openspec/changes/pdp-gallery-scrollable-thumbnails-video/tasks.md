## 1. Product Data Model & Catalog Enhancement

- [x] 1.1 Extend `Product` interface in `src/lib/types.ts` with optional `video` property (`{ url: string; poster?: string; title?: string }`) and verify type correctness via `npm run check`.
- [x] 1.2 Enrich `src/lib/data/catalog.ts` with authentic, category-accurate multi-angle product photos and showcase demonstration video URLs for phone cases, chargers, and screen protectors, removing mismatched stock assets (such as the laptop photo).

## 2. Zero-Gap Media Layout & 12px Thumbnail Rail

- [x] 2.1 Update `src/lib/components/product/ProductGallery.svelte` outer layout to `gap-0`, removing the vertical separation between the main hero preview container and the thumbnail strip.
- [x] 2.2 Style the thumbnail track with exact 12px gaps (`gap-3`) between tiles, retaining crisp active selection borders and rounded geometry.

## 3. Horizontally Scrollable Rail & Auto-Center Synchronization

- [x] 3.1 Implement horizontal scrolling mechanics on the thumbnail rail with CSS scroll snap, touch momentum on mobile, and edge gradient fade masks.
- [x] 3.2 Add desktop navigation chevrons (`<` and `>`) to scroll the thumbnail rail by multiple items smoothly when media options exceed the visible track width.
- [x] 3.3 Implement reactive auto-centering so that swiping or clicking between media on the main hero stage automatically scrolls the active thumbnail into center view via `scrollIntoView`.

## 4. Product Video Integration & Gallery Streamlining

- [x] 4.1 Render a dedicated `[▶ VIDEO]` badge on video thumbnail tiles with a translucent dark glass pill and play icon.
- [x] 4.2 Implement inline HTML5 video playback on the main hero stage with play/pause and mute/unmute controls, auto-pausing video whenever navigating to an image slide.
- [x] 4.3 Eliminate redundant pagination dots on desktop when interactive thumbnail tiles are displayed, and balance navigation arrows on hover.

## 5. Verification & Testing

- [x] 5.1 Execute `npm run check` and ensure 0 Svelte/TypeScript compiler errors across types, catalog, and PDP gallery components.
- [x] 5.2 Validate desktop and mobile viewports to verify zero vertical gap with hero card, exact 12px thumbnail spacing, horizontal rail scrolling, auto-center sync, and video playback.
