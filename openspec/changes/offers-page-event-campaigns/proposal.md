## Why

The current Offers page (`/offers`) is an unstyled, single-card placeholder ("Special Offers & Deals - Coming soon!"), offering no active shopping utility or conversion value. Joy Telecom needs an engaging, event-driven offers hub that highlights promotional campaigns (Flash Deals, Combo Protection Packs, Brand Festivals, Clearance) with mobile-first horizontal swipe rails, high-impact event banners, and dedicated full event pages to maximize retail sales, clearance velocity, and average order value (AOV).

## What Changes

- **Event-Driven Offers Hub (`/offers`)**:
  - Replace the placeholder page with an event-driven promotional destination.
  - Sticky event quick-navigation rail (e.g., `⚡ Flash Sale`, `🎁 Protection Bundles`, `🔋 Anker Power Week`, `🏷️ Under ৳999`).
  - Interactive top voucher / coupon code bar with one-tap copy/auto-apply chips.
  - Repeating promotional event modules, each featuring:
    - Dedicated event banner with campaign theme, discount badge, and live countdown timer (where applicable).
    - Mobile-optimized horizontal snap-scroll product rail displaying discounted items with instant "Add to Cart" actions.
    - End-of-rail "See All (N) →" action card and banner link.
- **Dedicated Full Event Campaign View**:
  - When tapping "See All" on any campaign banner or end-rail card, navigate to the dedicated full event view.
  - Pinned full-width campaign hero banner at the top preserving promotional urgency, terms, and active discount timers.
  - Back navigation button returning directly to the Offers Hub.
  - Quick filter/sort chips (e.g., "Sort by Discount", "Price: Low to High", "Under ৳1,500").
  - Complete multi-column product grid of all products assigned to that campaign.
- **Dynamic Campaign Catalog Structure**:
  - Centralized campaign/offer dataset in `$lib/data/catalog.ts` or `$lib/data/offers.ts` defining active event banners, timer endpoints, discount percentages, and related product lists.

## Capabilities

### New Capabilities
- `offers-page`: Event-driven promotional hub and dedicated full event campaign layouts with horizontal product swipe rails, countdown banners, and full responsive product grids.

### Modified Capabilities
*(None - no prior specs exist in the repository)*

## Impact

- **Affected Routes & Components**:
  - `src/routes/offers/+page.svelte` (Hub and event detail views).
  - New components: `src/lib/components/offers/OfferEventSection.svelte`, `src/lib/components/offers/OfferHeroBanner.svelte`, `src/lib/components/offers/PromoCouponBar.svelte`.
  - Data models and mock event catalog in `src/lib/data/catalog.ts` or new `src/lib/data/offers.ts`.
- **Dependencies**: Uses existing `@hugeicons/core-free-icons`, Tailwind styling, and cart store integrations.
