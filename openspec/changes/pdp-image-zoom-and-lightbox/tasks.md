## 1. Desktop Cursor Hover Zoom Implementation

- [x] 1.1 In `src/lib/components/product/ProductGallery.svelte`, add pointer/mouse tracking handlers (`onmouseenter`, `onmousemove`, `onmouseleave`) to compute real-time relative cursor coordinates (`x%`, `y%`) and apply dynamic `transform-origin` with `scale(2.2)` magnification on desktop.
- [x] 1.2 Add GPU-accelerated transition smoothing (`will-change: transform, transform-origin`, cubic-bezier curve) and coordinate clamping to ensure zoom engages and resets smoothly without jitter.

## 2. Mobile Full-Screen Lightbox Modal Implementation

- [x] 2.1 In `src/lib/components/product/ProductGallery.svelte`, create the full-screen lightbox overlay (`fixed inset-0 z-50 bg-black/95 backdrop-blur-md`) with centered high-resolution photo display, glassmorphic header, active slide counter (e.g. `2 / 4`), and a prominent close button (`X`).
- [x] 2.2 Connect click/tap triggers on the hero image to launch the lightbox, and implement body scroll-locking (`document.body.style.overflow = 'hidden'`), backdrop tap dismiss, swipe-down dismiss, and keyboard listeners (`Escape`, `ArrowLeft`, `ArrowRight`).
- [x] 2.3 Add full-screen touch carousel swiping and bottom thumbnail navigation inside the modal to allow fluid multi-photo inspection in full screen.

## 3. Verification & Deployment

- [x] 3.1 Run `cmd /c npm run check` to verify 0 type or syntax errors across all components.
- [x] 3.2 Deploy to Vercel production (`cmd /c npx vercel --prod --yes`) and verify the live mobile lightbox and desktop hover zoom on production.
