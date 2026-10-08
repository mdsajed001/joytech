## Why

Customers purchasing premium mobile accessories online need to closely inspect high-precision physical details (such as camera bezel elevation, MagSafe magnetic alignment rings, tactile button covers, and charger port finishes) before making a purchasing decision. 

On mobile devices, screen real estate is limited; tapping a photo should open an immersive, full-screen lightbox modal with touch swipe and pinch capability. On desktop/PC, customers expect instantaneous inspection by hovering their cursor over the image, with the magnified crop smoothly panning to follow the mouse position.

## What Changes

- **Mobile Full-Screen Lightbox**:
  - Tapping/clicking the hero product image on mobile or touch viewports opens a high-resolution, full-screen lightbox overlay.
  - Features swipe gestures to navigate through gallery photos, a glassmorphic header with image counter (e.g., `2 / 4`) and close button (`X`), and tap-outside / swipe-down to dismiss.
  - Locks background page scrolling while the lightbox is active.
- **Desktop Dynamic Cursor Hover Zoom**:
  - On PC/mouse viewports, hovering over the hero product image activates smooth 2.2x–2.5x magnification.
  - Moving the mouse across the image calculates proportional coordinates (`x%`, `y%`) and dynamically shifts the `transform-origin` in real time.
  - Mouse departure immediately restores the normal frame with smooth cubic-bezier transitions.
- **Variant & Slide Synchronization**:
  - Both lightbox and hover zoom automatically sync with active product variants and thumbnail selections.

## Capabilities

### New Capabilities
- `image-zoom-and-lightbox`: Implements mobile full-screen modal lightbox viewing and PC cursor-tracking hover magnification for product media galleries.

### Modified Capabilities
*(None - existing catalog and cart behavior remain unchanged.)*

## Impact

- **Affected Components**:
  - `src/lib/components/product/ProductGallery.svelte`: Adds hover zoom tracking logic, transform physics, and portal-level full-screen modal overlay.
- **Dependencies**: No external npm packages required; implemented using native Svelte 5 runes, pointer events, and hardware-accelerated CSS transforms.
