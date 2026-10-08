## Context

The current `/offers` page is a 32-line static placeholder. Joy Telecom has existing, battle-tested UI primitives (`ProductCard.svelte`, `cartStore`, `Button.svelte`, design tokens in `layout.css`), but lacks promotional campaign components.

## Goals / Non-Goals

**Goals:**
- Provide a modular, campaign-driven promotional hub on `/offers`.
- Support multiple distinct event sections with customizable banners, countdown timers, and horizontally scrollable product rails on mobile.
- Implement a dedicated full event view accessible via "See All" that pins the event hero banner at the top and provides a full product grid with sorting.
- Provide a quick-claim promotional coupon bar with clipboard copy support.
- Ensure seamless mobile touch interaction (native horizontal snap scrolling, responsive card sizing, one-tap add-to-cart).

**Non-Goals:**
- Backend API or persistent promo code validation database (uses structured client-side catalog data matching existing Joy Telecom mock architecture).
- Checkout discount calculation overhaul (coupons link with cart toast feedback).

## Decisions

### 1. View Transition Strategy: URL Query State (`?event=<slug>`)
- **Decision**: Manage the transition between the Offers Hub and the Dedicated Event View via reactive query param (`/offers` vs `/offers?event=<slug>`) using SvelteKit's `$page.url.searchParams`.
- **Rationale**: Keeps the experience lightning-fast without requiring server hops, preserves browser history/back button navigation, and allows direct deep-linking to specific event campaigns from marketing banners or push notifications.
- **Alternatives Considered**: Separate subroute `/offers/[event]` (more routing boilerplate and SvelteKit page reload overhead) or purely internal Svelte `$state` (would break browser back button and shareable links).

### 2. Campaign Data Architecture (`src/lib/data/offers.ts`)
- **Decision**: Define a clean, strongly typed campaign schema in `src/lib/data/offers.ts` referencing product IDs from `$lib/data/catalog.ts`.
- **Schema**:
  - `OfferEvent`: `id`, `slug`, `title`, `subtitle`, `badge`, `discount`, `themeColor`, `bannerBg`, `timerHours`, `productIds: string[]`.
  - `PromoCoupon`: `code`, `discount`, `minSpend`, `desc`.
- **Rationale**: Isolates promotional scheduling and presentation metadata from raw product catalog data, allowing easy additions or rotations of seasonal campaigns.

### 3. Modular Component Hierarchy
- `src/routes/offers/+page.svelte`: Orchestrator managing hub vs event view.
- `src/lib/components/offers/PromoCouponBar.svelte`: Sticky / top coupon claim chips.
- `src/lib/components/offers/OfferHeroBanner.svelte`: High-impact banner with countdown clock and badge.
- `src/lib/components/offers/OfferEventRail.svelte`: Event header + mobile horizontal snap scroll rail + "See All" card.
- `src/lib/components/offers/DedicatedEventView.svelte`: Hero banner pinned on top + sort/filter pills + full product grid.

### 4. Touch & Scroll Polish
- Mobile rails use `-mx-4 px-4` edge-to-edge bleed, `snap-x snap-mandatory`, and hidden scrollbars (`[scrollbar-width:none]`).
- Card width fixed at `172px` on mobile to ensure the next card peeks into view (~1.8 cards visible), giving immediate visual affordance that the list is horizontally scrollable.

## Risks / Trade-offs

- **[Risk] Long event banner pushing cards off-screen on small screens** → *Mitigation*: Keep mobile event banner height compact (~120–140px) or integrate the title/timer directly into the section header.
- **[Risk] Cart state synchronization** → *Mitigation*: Directly invoke `cart.addItem()` and dispatch the global toast message, matching existing `FlashSaleSection.svelte` behavior.
