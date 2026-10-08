## 1. Promotional Data Layer

- [x] 1.1 Create `src/lib/data/offers.ts` defining structured `OFFER_EVENTS` (Flash Sale, Combo Protection Packs, Anker Power Week, Budget Clearance) and active `PROMO_COUPONS`. Verify that types and product cross-references compile without error.

## 2. Reusable Promotional Components

- [x] 2.1 Implement `src/lib/components/offers/PromoCouponBar.svelte` with tap-to-copy interaction and feedback indicator. Verify coupon copying in browser.
- [x] 2.2 Implement `src/lib/components/offers/OfferHeroBanner.svelte` with live countdown timer, badge styling, and responsive layout. Verify timer ticks every second and scales smoothly on mobile.
- [x] 2.3 Implement `src/lib/components/offers/OfferEventRail.svelte` featuring event banner, horizontal snap-scrolling rail, `ProductCard` items with quick add-to-cart, and an end-of-rail "See All" card. Verify horizontal swipe and snap behavior on mobile viewport.
- [x] 2.4 Implement `src/lib/components/offers/DedicatedEventView.svelte` featuring pinned top hero banner, back navigation button, sort/filter controls, and a multi-column product grid. Verify layout on mobile and desktop.

## 3. Offers Hub Integration & Verification

- [x] 3.1 Overhaul `src/routes/offers/+page.svelte` to assemble sticky quick-jump chips, coupon bar, promotional event rails, and query-param-driven routing to the dedicated event view (`?event=<slug>`). Verify navigation between hub and event view.
- [x] 3.2 Execute `npm run check` and ensure 0 Svelte/TypeScript compiler errors across the application.
