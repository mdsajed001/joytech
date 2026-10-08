## Context

In `src/lib/components/product/ProductGallery.svelte`, touch gestures are blocked by:
1. `touch-action: pan-y` on both `sliderContainer` and `lightboxSlider`.
2. Slide elements wrapped in `<button>` tags that trigger WebKit click-trapping and swallow drag events.
3. Lack of directional swipe detection to distinguish vertical page scroll from horizontal image swipes.

## Goals / Non-Goals

**Goals:**
- Enable 100% reliable, fluid horizontal touch swiping on mobile and tablet devices in both the main gallery preview and full-screen lightbox.
- Preserve natural vertical page scrolling when swiping vertically over the gallery.
- Eliminate click-trapping by replacing `<button>` slide wrappers with accessible `<div>` containers.
- Maintain quick-tap lightbox opening (< 250ms and < 8px displacement) while completely preventing swipe drags from opening the modal.

**Non-Goals:**
- Adding third-party carousel libraries; the solution is built with lightweight, dependency-free Svelte logic.

## Decisions

### 1. Remove Restrictive `touch-action: pan-y`
- On `sliderContainer`: Remove `style="touch-action: pan-y;"` and allow touch gestures to be processed by both native scroll and gesture listeners.
- On `lightboxSlider`: Set `style="touch-action: pan-x pinch-zoom;"` so horizontal gestures are unrestricted in full-screen modal mode.

### 2. Replace Slide `<button>` with Touch-Transparent Container
- Replace `<button type="button" class="w-full h-full ...">` with `<div role="button" tabindex="0" class="w-full h-full ...">`.
- This eliminates WebKit's automatic scroll cancellation on `<button>` descendants.

### 3. Directional Touch-Swipe Engine
Implement a unified touch handler with angle detection:
```ts
function handleTouchStart(e: TouchEvent) {
  touchStartX = e.touches[0].clientX;
  touchStartY = e.touches[0].clientY;
  touchStartTime = Date.now();
  isSwipeGesture = false;
}

function handleTouchMove(e: TouchEvent) {
  const dx = e.touches[0].clientX - touchStartX;
  const dy = e.touches[0].clientY - touchStartY;
  // If horizontal movement exceeds vertical movement by 10px, flag as horizontal swipe
  if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 10) {
    isSwipeGesture = true;
  }
}

function handleTouchEnd(e: TouchEvent) {
  const dx = e.changedTouches[0].clientX - touchStartX;
  const dy = e.changedTouches[0].clientY - touchStartY;
  const elapsed = Date.now() - touchStartTime;

  if (isSwipeGesture && Math.abs(dx) > 35) {
    if (dx < 0 && activeIndex < mediaItems.length - 1) {
      scrollToSlide(activeIndex + 1);
    } else if (dx > 0 && activeIndex > 0) {
      scrollToSlide(activeIndex - 1);
    }
    return;
  }

  // Quick tap detection for lightbox
  if (Math.abs(dx) < 8 && Math.abs(dy) < 8 && elapsed < 250) {
    if (currentMedia?.type !== 'video') {
      openLightbox();
    }
  }
}
```

### 4. Full-Screen Lightbox Touch Handling
Attach symmetrical swipe detection to `lightboxSlider` so horizontal swiping moves to next/prev slides in the full-screen view.

## Risks / Trade-offs

- **[Risk] Diagonal swipes conflicting with vertical page scroll** → *Mitigation*: The angle check (`Math.abs(dx) > Math.abs(dy)`) ensures that whenever vertical movement dominates, the browser handles standard page scrolling without interference.
