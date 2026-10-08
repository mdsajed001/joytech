## Why

The Product Details Page (PDP) media gallery currently suffers from critical UX/UI limitations:
1. It is locked into a static 4-box thumbnail display that breaks when products have 5 or more images.
2. It lacks product video support, missing out on rich demonstration and unboxing media that drives buyer conversion.
3. An awkward vertical gap separates the main hero preview from the thumbnail strip, causing visual fragmentation.
4. Thumbnail synchronization is missing when swiping through main photos, and the catalog contains incoherent placeholder photos (such as a laptop image appearing on a phone case page).

Eliminating the gap between the main preview and the thumbnail rail, setting precise 12px thumbnail spacing, adding horizontal scroll mechanics, and integrating video demonstration will transform the PDP media experience into a modern, tactile, e-commerce showcase.

## What Changes

- **Zero Gap Between Hero & Thumbnails**: Remove the vertical gap between the main preview card and the thumbnail rail (`gap-0`), bonding them into a unified, cohesive media stage.
- **12px Thumbnail Spacing**: Standardize the gap between small thumbnail boxes to exactly 12px (`gap-3`), preserving the clean active selector border and rounded geometry.
- **Horizontally Scrollable Thumbnail Rail**: Upgrade the thumbnail strip to smoothly scroll horizontally on touch devices (with scroll snap and edge gradient masks) and provide desktop chevron buttons (`<` and `>`) for seamless navigation across 5–10+ media assets.
- **Automatic Active Sync**: Automatically scroll the corresponding thumbnail into view and center it when the user swipes or navigates through media on the main hero stage.
- **Product Video Integration**: Support product video assets (`video: { url, poster?, title? }`), render a dedicated `[▶ VIDEO]` badge on the video thumbnail, and support inline video playback on the main stage with play/pause and mute controls.
- **Stage Polish & Catalog Coherence**: Clean up redundant pagination dots when thumbnails are present, balance navigation arrows, refine mobile tap thresholds, and supply realistic, category-accurate multi-angle product assets.

## Capabilities

### New Capabilities
- `pdp-media-gallery`: Covers interactive PDP media presentation including high-resolution photo display, desktop hover-zoom, inline product video playback, horizontally scrollable thumbnail rail with auto-centering, and variant image synchronization.

### Modified Capabilities
*(None - first formal spec for PDP media gallery)*

## Impact

- `src/lib/types.ts`: Adds optional `video` definition to the `Product` interface.
- `src/lib/data/catalog.ts`: Updates catalog products with coherent multi-angle gallery photos and sample product demonstration videos.
- `src/lib/components/product/ProductGallery.svelte`: Redesigned layout with flush 0px hero-to-thumbnail gap, 12px thumbnail gaps, horizontal scroll rail with desktop controls, auto-center active sync, and inline video playback.
- `src/routes/product/[slug]/+page.svelte`: Consumes updated gallery component with no breaking interface changes.
