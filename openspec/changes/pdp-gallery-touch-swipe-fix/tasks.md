## 1. Touch-Action & Element Structure Fixes

- [x] 1.1 Remove `touch-action: pan-y` from `sliderContainer` and configure `lightboxSlider` touch-action to permit horizontal gesture panning.
- [x] 1.2 Replace `<button>` image slide wrapper in `src/lib/components/product/ProductGallery.svelte` with a touch-pass-through `<div>` to eliminate WebKit pointer-event scroll suppression.

## 2. Directional Touch-Swipe Engine Implementation

- [x] 2.1 Implement directional touch handlers (`handleTouchStart`, `handleTouchMove`, `handleTouchEnd`) on the main gallery stage with horizontal angle lock and 35px swipe threshold.
- [x] 2.2 Wire full-screen lightbox touch swipe handlers to advance and rewind slides on horizontal swipe in modal view.
- [x] 2.3 Refine tap detection to open the lightbox only on stationary taps (< 250ms, < 8px displacement), preventing swipe drags from inadvertently triggering modal expansion.

## 3. Verification & Testing

- [x] 3.1 Execute `npm run check` and ensure 0 Svelte/TypeScript compiler errors.
- [x] 3.2 Validate horizontal touch swipe navigation across both standard PDP view and full-screen lightbox modal.

