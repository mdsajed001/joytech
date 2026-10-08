## 1. CSS Animation Definition

- [x] 1.1 Add `.cta-checkout-animated` in `src/routes/layout.css` mirroring the dual-bubble keyframe animation from `.cta-search-animated`, and verify CSS compiles cleanly.

## 2. Component Application

- [x] 2.1 Update the mobile sticky checkout button in `src/routes/cart/+page.svelte` to include `.cta-checkout-animated`, and verify the smooth ambient bubble animation.
- [x] 2.2 Update the desktop checkout button in `src/lib/components/cart/OrderSummary.svelte` with `.cta-checkout-animated`, and verify smooth bubble animation on desktop.
- [x] 2.3 Update the modal confirmation button in `src/lib/components/cart/CheckoutModal.svelte` with `.cta-checkout-animated`, and verify animation in modal.

## 3. Verification

- [x] 3.1 Run `npm run check` to verify zero type or markup errors.
- [x] 3.2 Visually verify smooth performance and seamless text contrast across light and dark themes.
