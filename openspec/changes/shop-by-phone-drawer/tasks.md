## 1. Global State & Modal Foundation

- [x] 1.1 Add `PhoneDrawerState` class with `$state` runes to `src/lib/state.svelte.ts` supporting `isOpen`, `activeBrandId`, `activeModelSlug`, `open(brandId?)`, and `close()`. Verify: `phoneDrawerState` exports cleanly and can be imported across components.

## 2. ShopByPhoneDrawer Component Creation

- [x] 2.1 Create `src/lib/components/ShopByPhoneDrawer.svelte` with backdrop scrim, `Escape` key handling, and responsive container layout: mobile bottom sheet (`bottom-0 inset-x-0 rounded-t-[var(--radius-xl)] max-h-[88vh]`) and desktop side drawer (`top-0 right-0 inset-y-0 w-full max-w-lg`). Include grab handle on mobile and header with title and close button. Verify: component renders correctly when `phoneDrawerState.isOpen` is toggled.
- [x] 2.2 Implement Step 1 (Brand selector buttons) and Step 2 (Model pills) inside `ShopByPhoneDrawer.svelte` bound to `phoneDrawerState`. Verify: selecting brand updates available models and selecting model updates active confirmation badge.
- [x] 2.3 Render verified compatible products list with `ProductCard` and direct `onAddToCart` inside `ShopByPhoneDrawer.svelte`. Verify: items render in a 2-column grid and clicking "Add" adds items to cart with toast notification.

## 3. Homepage Refactor & Trigger Wiring

- [x] 3.1 Remove inline `<ShopByPhoneWizard>` from `src/routes/+page.svelte` and mount `<ShopByPhoneDrawer />` at the page level. Verify: homepage no longer contains an inline wizard section between Categories and Flash Sale.
- [x] 3.2 Update `Hero.svelte` secondary CTA ("★ Shop by Phone Model") to call `phoneDrawerState.open()`. Verify: clicking Hero button opens the modal.
- [x] 3.3 Update `PromoBannerSlider.svelte` slide 2 click handler to trigger `phoneDrawerState.open()`. Verify: tapping banner 2 opens the bottom sheet on mobile.
- [x] 3.4 Update `AuthenticityBanner.svelte` CTA ("Check Compatibility") to call `phoneDrawerState.open()`. Verify: clicking CTA opens the modal.
- [x] 3.5 Update `MobileDrawer.svelte` brand quick buttons to call `phoneDrawerState.open(brand.id)`. Verify: tapping a brand inside the mobile navigation menu closes the drawer and opens the bottom sheet with that brand preselected.

## 4. Integration & Quality Verification

- [x] 4.1 Run `npm run check` (`svelte-check`) and `npm run build` (`vite build`). Verify: 0 errors, 0 warnings, and clean production build.
- [x] 4.2 Test mobile view (375px): verify bottom sheet slides up with grab handle, scroll locking works, model selection updates products, adding to cart triggers toast, and backdrop/close button dismisses sheet.
- [x] 4.3 Test desktop view (1280px): verify side drawer slides from right, full height styling applies, and backdrop/Escape dismissal works cleanly.
