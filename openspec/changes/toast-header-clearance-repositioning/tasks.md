## 1. Container Positioning & Clearance

- [x] 1.1 Update `src/lib/components/toast/ToastContainer.svelte` top clearance to `top-34 md:top-22 lg:top-30` so toasts render below the mobile search bar and desktop header
- [x] 1.2 Verify that entrance and exit transitions flow smoothly below the search bar without flickering or overlapping header controls

## 2. Quality Verification

- [x] 2.1 Run `npm run check` to ensure zero type or syntax errors
- [x] 2.2 Verify on mobile viewports (< 768px) and desktop viewports (>= 768px) in the browser that the search input remains fully clickable and unblocked when toasts are active
