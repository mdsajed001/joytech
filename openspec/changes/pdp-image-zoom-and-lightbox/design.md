## Context

The Product Details Page (PDP) uses `src/lib/components/product/ProductGallery.svelte` to render product media. While the gallery supports mobile edge-to-edge scroll snap and variant synchronization, users currently have no way to inspect fine textures and details up close.

## Goals / Non-Goals

**Goals:**
- Provide desktop mouse cursor-tracking hover magnification that smoothly pans the zoomed region without layout shift or obscuring the adjacent buy box.
- Provide a mobile full-screen lightbox modal triggered by tapping the product image, featuring touch swipe navigation, slide counter, and dismiss gestures.
- Seamlessly synchronize both zoom and lightbox with the active variant SKUs and thumbnail strip.

**Non-Goals:**
- External heavy photo zoom libraries (e.g. PhotoSwipe or LightGallery); implement natively with Svelte 5 and modern CSS.

## Decisions

### 1. In-Place Pan-Zoom vs. Side Flyout Window
- **Decision**: Implement in-place dynamic pan zoom using CSS `transform: scale(2.2)` and real-time `transform-origin: ${xPercent}% ${yPercent}%`.
- **Rationale**: Keeps the zoom preview contained within the gallery column, ensuring the product title, active variant selector, and CTA buttons in the adjacent right column remain visible and unobstructed.
- **Alternative Considered**: Floating side zoom window (Amazon style). Rejected because on medium screens (1024px–1280px) it obscures the buy box and complicates responsive layout.

### 2. Touch vs. Pointer Interaction Separation
- **Decision**: 
  - On touch devices / mobile viewports, tapping the hero image opens the full-screen lightbox modal.
  - On mouse/desktop viewports, entering the image container activates hover zoom, while cursor movement dynamically tracks coordinates.
  - Clicking the image on desktop also provides access to the full-screen lightbox for maximum inspection fidelity.

### 3. Lightbox Modal Architecture
- **Decision**: Render the full-screen lightbox inside `ProductGallery.svelte` as a `fixed inset-0 z-50` overlay with dark blurred background (`bg-black/95 backdrop-blur-md`).
- **Capabilities**:
  - Image carousel track with touch swipe and left/right button controls.
  - Top header displaying active slide counter (e.g., `2 / 4`) and a prominent 44px close button (`X`).
  - Scroll lock on body (`document.body.style.overflow = 'hidden'`) while open to prevent background scrolling.
  - Keydown listeners for `Escape` (dismiss), `ArrowLeft` (previous), and `ArrowRight` (next).

### 4. Performance & Smoothness
- **Decision**: Apply `will-change: transform, transform-origin` and CSS transitions (`transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)`) for entering and exiting zoom states. Coordinate tracking uses relative bounding client rect percentages clamped to `0%–100%`.

## Risks / Trade-offs

- **[Risk]** Jitter during rapid mouse movement over image edges.
  - **Mitigation**: Clamp `x` and `y` strictly between `0%` and `100%`, and use pointer-events management on overlay badges so they don't capture mouseenter/leave events unexpectedly.
- **[Risk]** Background page jumping when scroll lock is enabled on mobile Safari.
  - **Mitigation**: Store previous `overflow` style and restore it on modal unmount / close.
