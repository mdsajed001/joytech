## 1. Clearance Gap & Scroll Observer Calibration

- [x] 1.1 Insert clearance buffer gap element (`h-28 lg:hidden`) below `CrossSellRail` in `src/routes/cart/+page.svelte` before the scroll sentinel
- [x] 1.2 Calibrate `IntersectionObserver` in `src/routes/cart/+page.svelte` with `rootMargin: '0px 0px -160px 0px'` so the sheet remains collapsed during recommendation browsing and only expands after clearing the gap

## 2. Smooth CSS Grid Drawer & Single CTA Morph

- [x] 2.1 Refactor the mobile sheet in `src/lib/components/cart/OrderSummary.svelte` to use a persistent CSS Grid height transition (`grid-template-rows: 0fr` ➔ `1fr`, `transition-all 0.45s cubic-bezier(0.16, 1, 0.3, 1)`) without DOM node destruction
- [x] 2.2 Implement header action morphing between `Checkout Now >` (collapsed) and `Collapse ∨` (expanded) in `src/lib/components/cart/OrderSummary.svelte`, preserving the single CTA invariant
- [x] 2.3 Verify smooth unrolling/rolling, clearance gap behavior, responsive dark/light styling, and run `npm run check`
