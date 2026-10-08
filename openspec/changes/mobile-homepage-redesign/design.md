## Context

The Joy Telecom e-commerce site runs on SvelteKit + Tailwind CSS v4 + HugeIcons. The homepage was built in the previous `homepage-ui` change but was desktop-first and diverges from the authoritative design system defined in `design-system.html`. This design describes how to realign the existing components and add the new mobile-first features. See proposal.md for the full motivation.

## Goals / Non-Goals

**Goals:**
- Align `Button.svelte`, `Badge.svelte`, `ProductCard.svelte` with the exact token values defined in `design-system.html`
- Build a design-system-compliant bottom navigation bar visible only on mobile
- Replace the desktop CTA hero with a promo banner slider on mobile viewports
- Add a Flash Sale section with countdown and horizontal scroll
- Create navigable stub pages for `/offers`, `/cart`, `/profile`

**Non-Goals:**
- No functional cart page, checkout flow, or account system (V2)
- No server-side data fetching — all data remains client-side mock
- No dark mode support in this change
- No changes to the desktop hero, footer structure, or ShopByPhoneWizard

## Decisions

### D1: CSS scroll-snap for promo slider and flash sale
**Choice**: Use native CSS `scroll-snap-type: x mandatory` with `scroll-snap-align: start` for the promo banner slider and flash sale horizontal scroll.
**Rationale**: The design system uses no external JS carousel library. CSS scroll-snap provides native-feeling swipe on mobile, requires zero JS, respects `prefers-reduced-motion`, and keeps the bundle size unchanged.
**Alternative considered**: Swiper.js — rejected because it adds ~30KB and the design system explicitly avoids external dependencies for these patterns.

### D2: Bottom nav uses SvelteKit `$page.url.pathname` for active state
**Choice**: Import `$app/stores`'s `page` store and match `$page.url.pathname` against each nav item's `href` to determine the active item.
**Rationale**: SvelteKit provides this reactively with zero cost. It correctly highlights the active route even on direct URL navigation or browser back/forward.
**Alternative considered**: Client-side `$state` — rejected because it wouldn't survive page reload or deep linking.

### D3: Bottom nav height = 56px + safe-area-inset-bottom
**Choice**: The bottom nav has 56px content height (sufficient for 44px tap targets with 9px top + 10px bottom padding per design system `.bottomnav-item`) plus `env(safe-area-inset-bottom)` for iPhone home bar.
**Rationale**: The design system defines `padding: 9px 4px 10px` for `.bottomnav-item` within the flex container, yielding exactly 56px of visual height. The safe-area padding prevents the nav from being obscured by iOS gesture bars.

### D4: Product card width — fluid instead of fixed 190px
**Choice**: Cards use 100% width within a `grid-cols-2` grid on mobile, rather than the fixed 190px specified in the design system's demo.
**Rationale**: The design system's `.product-card` at 190px is a documentation demo size. In a responsive e-commerce grid, cards must fill the column. All other token values (radius-sm, 130px thumb, space-3 body padding, 12.5px/700 title) are preserved exactly.

### D5: Promo banner slider — indicator dots, no auto-play
**Choice**: The slider shows navigation dots below the banners. No auto-play.
**Rationale**: Auto-play violates WCAG 2.2.2 and the design system's motion principles (`prefers-reduced-motion` collapses durations). Dots give visual position feedback. Banners are generated as static promotional images.

### D6: Flash sale countdown — client-side with target timestamp
**Choice**: The countdown is driven by a client-side `setInterval` against a hardcoded target timestamp. When time expires, the section shows an "Ended" state.
**Rationale**: There is no backend in V1. The countdown is a UI pattern demonstration. Using `$effect` in Svelte 5 with `setInterval` is idiomatic and automatically cleans up.

### D7: Stub pages — minimal with consistent shell
**Choice**: Each stub page (`/offers`, `/cart`, `/profile`) renders the shared layout (header + bottom nav + footer) and contains only a centered title + "Coming soon" message. No custom content.
**Rationale**: The user explicitly requested blank pages that simply make the nav links work. The shared layout wraps them via `+layout.svelte`.

### D8: Header cart button visibility — `hidden sm:flex`
**Choice**: On mobile (<640px), hide the header cart button entirely. Cart access lives only in the bottom nav.
**Rationale**: Duplicate cart affordances (header + bottom nav) create visual noise and decision paralysis on a small screen. The bottom nav is the primary mobile navigation surface.

## Risks / Trade-offs

- **[Risk: Promo banner images are generated/static]** → Mitigation: Use `generate_image` to create realistic promotional banners. In production, these would be CMS-driven.
- **[Risk: Countdown target is hardcoded]** → Mitigation: Set it 24 hours from page load so it always shows a meaningful countdown during demos. Production would use server-provided timestamps.
- **[Risk: Fixed 130px thumb height may crop some product images]** → Mitigation: Use `object-cover` with the gradient background as fallback, matching the design system's `.product-thumb` exactly.
- **[Trade-off: Cart badge in bottom nav duplicates state from cartState]** → Acceptable: `cartState.count` is a derived reactive value. Reading it in both Header (desktop) and BottomNav (mobile) adds no overhead.
