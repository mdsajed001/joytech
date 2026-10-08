## Why

On mobile touch devices, swiping horizontally to navigate between product photos does not work in either the standard PDP view or the full-screen lightbox modal. This occurs because:
1. `touch-action: pan-y` explicitly disables horizontal touch gestures in the browser's compositor.
2. The `<button>` wrapper around each slide intercepts touch events on mobile WebKit, suppressing parent scroll physics.
3. In full-screen mode, vertical scrolling is disabled by modal body-lock (`overflow: hidden`), meaning `touch-action: pan-y` completely freezes all touch interaction.

Fixing these touch blockers and adding a robust directional touch swipe engine restores smooth 60fps gesture navigation for both standard and full-screen views.

## What Changes

- **Remove Blocking `touch-action: pan-y`**: Update both the main stage slider (`sliderContainer`) and the lightbox modal track (`lightboxSlider`) to permit horizontal touch panning.
- **Eliminate Click-Trapping `<button>` Slide Wrappers**: Replace slide-level `<button>` elements with touch-pass-through `<div>` elements, preventing mobile Safari and Chrome from swallowing swipe gestures.
- **Directional Touch-Swipe Engine**: Add `touchstart`, `touchmove`, and `touchend` handlers with angle detection (`Math.abs(deltaX) > Math.abs(deltaY)`) and a 35px swipe threshold on both the main stage and full-screen lightbox.
- **Full-Screen Lightbox Gesture Support**: Enable seamless left/right swipe navigation within the full-screen lightbox modal.
- **Preserve Clean Tap-to-Zoom**: Distinguish between quick taps (< 250ms, < 8px delta) to open the lightbox and horizontal drags/swipes to switch slides.

## Capabilities

### New Capabilities
- `pdp-media-gallery`: Adds comprehensive touch swipe gesture support on mobile for standard view and full-screen lightbox modal.

### Modified Capabilities
*(None)*

## Impact

- `src/lib/components/product/ProductGallery.svelte`: Replaces `touch-action: pan-y`, converts slide `<button>` to `<div>`, and adds touch swipe gesture handlers to both the main gallery stage and the full-screen lightbox slider.
