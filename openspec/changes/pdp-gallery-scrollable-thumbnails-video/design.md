## Context

The Product Details Page (PDP) media gallery in `src/lib/components/product/ProductGallery.svelte` currently uses a simple vertical flex column (`gap-3`) with a hero preview and a basic 4-item thumbnail strip (`gap-2.5`). The data model in `src/lib/types.ts` supports only image strings (`image` and `galleryImages: string[]`), with no structure for product demonstration video or auto-centering thumbnail rails.

## Goals / Non-Goals

**Goals:**
- Connect the main hero image card and the thumbnail rail with **zero vertical gap (`gap-0`)** for a flush, cohesive presentation.
- Set the gap between thumbnail boxes to **exactly 12px (`gap-3`)**.
- Provide a horizontally scrollable thumbnail rail supporting 5–10+ media assets with smooth touch snap on mobile and left/right navigation arrows on desktop.
- Auto-center the active thumbnail when the main slider index changes via swipe or arrow clicks.
- Support product demonstration video with a dedicated `[▶ VIDEO]` thumbnail badge and main-stage inline HTML5 video playback.
- Replace dummy catalog Unsplash photos (such as laptops on phone cases) with coherent multi-angle phone case, charger, and glass assets.

**Non-Goals:**
- Implementing complex adaptive bitrate streaming servers; standard responsive MP4/WebM videos with poster images are used.
- Changing variant selection or model compatibility logic in `ProductVariantSelector.svelte`.

## Decisions

### 1. Unified Media Item Representation
Rather than treating images and videos as disconnected arrays, `ProductGallery.svelte` will derive a unified list of media items:
```ts
interface MediaItem {
  id: string;
  type: 'image' | 'video';
  url: string;
  poster?: string;
  title?: string;
}
```
*Rationale*: Unifies `activeIndex`, main slider track, lightbox modal, and thumbnail rail indices into a single source of truth.

### 2. Zero-Gap Flush Hero & Thumbnail Architecture
- The outer wrapper uses `flex flex-col gap-0`.
- The main hero preview retains rounded-2xl on top corners on desktop, while meeting the thumbnail strip directly below without an empty channel.
*Alternatives considered*: Negative margin (`-mt-3`) - rejected as fragile across responsive breakpoints.

### 3. Exact 12px Gap with Auto-Center Synchronization
- Thumbnail container uses `gap-3` (12px in Tailwind theme).
- An `$effect` tracking `activeIndex` invokes:
  ```ts
  thumbnailElements[activeIndex]?.scrollIntoView({
    behavior: 'smooth',
    inline: 'center',
    block: 'nearest'
  });
  ```
- Desktop left/right chevrons appear when the rail is scrollable and scroll by `±240px` smoothly.

### 4. Product Video Playback Architecture
- Video assets declared in `Product.video?: { url: string; poster?: string; title?: string }`.
- In the thumbnail rail, the video tile displays a frosted glass dark pill with `[▶ VIDEO]`.
- On the main stage, an HTML5 `<video playsinline controls preload="metadata">` is rendered with rounded corners and high-contrast play/pause overlay.
- Navigating away from the video slide automatically pauses video playback to conserve battery and avoid background audio.

### 5. Streamlined Controls & Coherent Catalog Assets
- Hide redundant pagination dots on desktop when thumbnails are present.
- Replace mismatched stock assets in `src/lib/data/catalog.ts` with authentic multi-angle product photos (front, back, camera cutout, side, and in-hand).

## Risks / Trade-offs

- **[Risk] Mobile browser autoplay audio policy** → *Mitigation*: Videos initialize muted with `playsinline` and explicit audio toggle button.
- **[Risk] Horizontal scroll track edge cutoffs on mobile** → *Mitigation*: Add `px-4 sm:px-0` and CSS edge fade masks (`mask-image: linear-gradient(...)`) so overflowing thumbnails show a subtle visual peek.
