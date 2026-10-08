## Why

The current homepage was built desktop-first and deviates from the design system HTML specification in several critical areas: buttons use Tailwind ad-hoc sizes instead of the `.btn` token specs (min-height 40px, font-size 13.5px, radius-sm), product cards use `radius-lg` and padding p-3/p-4 instead of the design system's `.product-card` (width 190px, radius-sm, 130px thumb, body padding space-3, title 12.5px/700), the hero section is CTA-heavy on mobile when it should be a compact promo banner slider, and there is no bottom navigation bar — the primary navigation pattern the design system explicitly defines (`.bottomnav` / `.bottomnav-item`). Additionally, the site needs stub pages for Offers, Cart, and Profile so the bottom nav routes are functional.

## What Changes

- **Hero section (mobile)**: Replace the current CTA-heavy hero with a full-width promo banner slider on phone viewport (<640px). No headline/subheading/CTAs on mobile — just swipeable promotional banners. Desktop hero stays unchanged.
- **Product card redesign**: Rebuild `ProductCard.svelte` to match the design system spec — `radius-sm`, 130px thumb height with gradient, `product-body` padding `space-3`, title at `12.5px/700`, price using `.price-current` / `.price-was` token sizing, rating using `.rating` / `.star` patterns, and card shadow only on hover.
- **Button alignment**: Fix `Button.svelte` to match `.btn` specs — min-height 40px (not 44px), font-size 13.5px, font-weight 600, `radius-sm` default, `.btn-small` at 32px/12.5px, `.btn-lg` at 48px/14.5px. Add `:active` translateY(1px).
- **Badge alignment**: Fix `Badge.svelte` to match `.badge` spec — font-size 11.5px, font-weight 700, padding 4px 10px, `radius-full`.
- **Flash sale section**: Add a new "Flash Sale" section between Categories and Best Sellers on the homepage with a countdown timer and a horizontal scrollable product row.
- **Bottom navigation bar**: Add a new `BottomNav.svelte` component matching the `.bottomnav` design system spec (border-top, bg-surface, flex items, 9.5px/700 labels, 44px min-height, active color brand-primary with filled dot indicator). Items: Home, Offers, Cart, Profile.
- **Stub pages**: Create blank SvelteKit routes for `/offers`, `/cart`, `/profile` — empty pages with just a title and "Coming soon" placeholder so navigation works.
- **Layout update**: Add bottom padding on mobile to clear the bottom nav, hide header cart button on mobile (cart moves to bottom nav).

## Capabilities

### New Capabilities
- `mobile-bottom-nav`: Bottom navigation bar component and its integration into the global layout, matching the design system `.bottomnav` specification.
- `homepage-mobile`: Mobile-specific homepage layout — promo banner slider hero, flash sale section, and mobile-optimized section ordering.

### Modified Capabilities

_(none — no existing specs to modify)_

## Impact

- **Components modified**: `Hero.svelte`, `ProductCard.svelte`, `Button.svelte`, `Badge.svelte`, `+layout.svelte`, `Header.svelte`, `Footer.svelte`, `layout.css`
- **Components created**: `BottomNav.svelte`, `PromoBannerSlider.svelte`, `FlashSaleSection.svelte`
- **Routes created**: `src/routes/offers/+page.svelte`, `src/routes/cart/+page.svelte`, `src/routes/profile/+page.svelte`
- **Data**: May add flash sale product data or flags to `catalog.ts`
- **Dependencies**: No new npm packages — slider uses CSS scroll-snap
