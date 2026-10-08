## 1. Refactor Checkout Header Bar

- [x] 1.1 Update `src/lib/components/checkout/CheckoutTrustBar.svelte` to remove "Joy Telecom" branding and the "J" circular avatar from the header.
- [x] 1.2 Remove the pill background (`bg-white/10`, `rounded-lg`) from the "Back to Cart" link, replacing it with a minimal text-and-arrow navigation link with subtle hover transition.
- [x] 1.3 Re-architect the navigation container to use a symmetrical 3-column grid (`grid grid-cols-3 items-center`) ensuring the "Secure Checkout" title is mathematically centered with a left-aligned Back action and right-aligned security signal.

## 2. Verification & Visual Polish

- [x] 2.1 Verify `/checkout` on `http://localhost:5173/checkout` on mobile and desktop viewports, confirming the header is balanced, uncluttered, and pill-free.
- [x] 2.2 Run `npm.cmd run check` to ensure zero compilation or type check errors.
