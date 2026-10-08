## 1. Design System Token Alignment (Foundation)

- [x] 1.1 Update `Button.svelte` size styles to match design system `.btn` spec: md → `min-h-[40px] px-4 text-[13.5px] rounded-[var(--radius-sm)]`, sm → `min-h-[32px] px-3 text-[12.5px] rounded-[var(--radius-sm)]`, lg → `min-h-[48px] px-5 text-[14.5px] rounded-[var(--radius-sm)]`. Change `font-bold` (700) to `font-semibold` (600). Verify: inspect a rendered button in browser devtools and confirm min-height, font-size, font-weight, and border-radius match the spec values.

- [x] 1.2 Update `Badge.svelte` to match design system `.badge` spec: font-size 11.5px, font-weight 700, padding `4px 10px`, radius-full. Ensure all variants include a 1px solid border with the correct semantic border token. Verify: inspect a rendered badge and confirm dimensions match `.badge` spec.

- [x] 1.3 Add missing design system tokens to `layout.css` `@theme` block: `--shadow-xs`, `--shadow-sm`, `--shadow-md`, `--shadow-lg`, `--shadow-top`, spacing variables (`--space-1` through `--space-16`), and `--dur-*` / `--ease-*` motion tokens. Verify: tokens resolve correctly in devtools computed styles.

## 2. Product Card Redesign

- [x] 2.1 Rebuild `ProductCard.svelte` to match design system `.product-card` spec: change border-radius from `radius-lg` to `radius-sm` (8px), remove card padding (p-3/p-4), set thumbnail height to exactly 130px with `linear-gradient(180deg, var(--color-bg-subtle), var(--color-border-default))` background, set body padding to `var(--space-3)` (12px), title at 12.5px/700/line-height 1.4/min-height 34px. Shadow only on hover (`--shadow-sm`), hover border to `--color-border-strong`. Verify: compare rendered card side-by-side with design system HTML page's `.product-card` demo.

- [x] 2.2 Update price display in `ProductCard.svelte` to match design system `.price-current` / `.price-was` / `.price-save` patterns: current price at 15px/800 weight, struck-through original price at 13px in `--color-text-disabled`, add savings line at 11.5px/700 in `--color-success-text`. Verify: price, strike-through, and savings text render with correct font-sizes and colors.

- [x] 2.3 Update rating display in `ProductCard.svelte` to match design system `.rating` pattern: inline-flex with 4px gap, 12.5px/700 weight for text, star icons at 14px in `--color-rating-star`, review count in `--color-text-secondary` at regular weight. Verify: rating row matches `.rating` demo in design-system.html.

## 3. Bottom Navigation Bar

- [x] 3.1 Create `BottomNav.svelte` component at `src/lib/components/BottomNav.svelte`. Implement with: fixed bottom position, `border-top: 1px solid var(--color-border-default)`, `background: var(--color-bg-surface)`, flex layout, no border-radius. Four items (Home, Offers, Cart, Profile) each as `<a>` tags linking to `/`, `/offers`, `/cart`, `/profile`. Each item: flex-col, centered, 3px gap, 9.5px/700 label, 44px min-height, `padding: 9px 4px 10px`. Import HugeIcons: `Home01Icon`, `PercentCircleIcon`, `ShoppingBag01Icon`, `UserIcon`. Use `$page.url.pathname` from `$app/stores` for active state. Active: `--color-brand-primary` with filled dot. Inactive: `--color-text-disabled`. Cart badge: shown when `cartState.count > 0` using `--color-accent` bg. Add `padding-bottom: env(safe-area-inset-bottom)` to container. Visible only on `sm:hidden`. Verify: render bottom nav on mobile viewport (375px), confirm 4 items, correct icons, active highlighting on `/`, and cart badge reactivity.

- [x] 3.2 Import `BottomNav` in `+layout.svelte`, render it after `<Footer />` inside the `min-h-screen` container. Pass `cartCount={cartState.count}`. Add `pb-14 sm:pb-0` to `<main>` element to clear the bottom nav on mobile. Verify: main content doesn't clip behind bottom nav, and footer scrolls fully above the nav bar.

- [x] 3.3 Update `Header.svelte`: add `hidden sm:flex` to the cart button container (line ~110) so it's hidden on mobile (<640px). Verify: on 375px viewport, header shows only logo + hamburger + search; cart button is not visible.

## 4. Promo Banner Slider Hero

- [x] 4.1 Generate 3 promotional banner images (16:9 aspect ratio, 750×420px) using the image generation tool. Banners for: (a) "Flash Sale — Up to 40% Off" accessories promo, (b) "Shop by Phone Model" compatibility feature, (c) "Free Dhaka Delivery on ৳999+" shipping promo. Save to `src/lib/assets/` or `static/`. Verify: images exist and are loadable.

- [x] 4.2 Create `PromoBannerSlider.svelte` at `src/lib/components/PromoBannerSlider.svelte`. Implement with: full-width container, horizontal CSS scroll-snap (`scroll-snap-type: x mandatory`), each banner as a `scroll-snap-align: start` child taking 100% width. Add dot indicators below the slider tracking scroll position via `IntersectionObserver` or `scrollLeft`. No auto-play. Verify: on 375px viewport, banners swipe horizontally, dots update on scroll, no auto-play occurs.

- [x] 4.3 Update `Hero.svelte`: wrap existing desktop hero content in a `hidden sm:block` container. Add the `PromoBannerSlider` component in a `sm:hidden` container above it. Verify: on mobile (<640px) only the slider is visible; on desktop (≥640px) the original hero is unchanged.

## 5. Flash Sale Section

- [x] 5.1 Create `FlashSaleSection.svelte` at `src/lib/components/FlashSaleSection.svelte`. Implement with: section header ("⚡ Flash Sale" title + countdown timer), horizontally scrollable product card row using CSS scroll-snap and `overflow-x: auto`. Countdown uses `$effect` with `setInterval` targeting a timestamp 24 hours from page load, displaying HH:MM:SS. Ended state shows "Sale Ended" text. Verify: countdown ticks correctly, horizontal scroll works on mobile, and flash sale products render as product cards.

- [x] 5.2 Add flash sale product data: either flag existing products in `catalog.ts` with `isFlashSale: true` or create a `FLASH_SALE_PRODUCTS` export. Add the `isFlashSale` flag to the `Product` type in `types.ts` if needed. Verify: `FlashSaleSection` receives and renders products.

- [x] 5.3 Import and place `FlashSaleSection` in `+page.svelte` between the Categories section and the Best Sellers section (after `ShopByPhoneWizard`, before `#best-sellers`). Verify: section order matches spec — Categories → Shop by Phone → Flash Sale → Best Sellers.

## 6. Stub Pages

- [x] 6.1 Create `src/routes/offers/+page.svelte` with `<svelte:head><title>Offers — Joy Telecom</title></svelte:head>` and a centered "Coming soon" placeholder styled with design system tokens. Verify: navigating to `/offers` renders the page with header, bottom nav, footer, and placeholder content.

- [x] 6.2 Create `src/routes/cart/+page.svelte` with `<svelte:head><title>Cart — Joy Telecom</title></svelte:head>` and a centered "Coming soon" placeholder. Verify: navigating to `/cart` renders correctly.

- [x] 6.3 Create `src/routes/profile/+page.svelte` with `<svelte:head><title>Profile — Joy Telecom</title></svelte:head>` and a centered "Coming soon" placeholder. Verify: navigating to `/profile` renders correctly.

## 7. Integration Verification

- [x] 7.1 Test full mobile flow on 375px viewport: load homepage → confirm promo slider hero → scroll past categories → confirm flash sale section with countdown → confirm best sellers → scroll to footer → confirm footer is fully visible above bottom nav. Confirm bottom nav active state changes when navigating between Home, Offers, Cart, Profile. Verify: no visual regressions, no console errors, cart badge updates when adding items.

- [x] 7.2 Test desktop flow on 1280px viewport: confirm original desktop hero renders unchanged, bottom nav is hidden, header cart button is visible, all sections render in correct order. Verify: no regressions from mobile changes.
