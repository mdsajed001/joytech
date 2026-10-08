## 1. Component & State Removal

- [x] 1.1 Delete `src/lib/components/ShopByPhoneDrawer.svelte` and remove its usage and import from `src/routes/+page.svelte`.
- [x] 1.2 Remove `PhoneDrawerState` class and `phoneDrawerState` singleton export from `src/lib/state.svelte.ts`.
- [x] 1.3 Unhook drawer open calls in `src/lib/components/PromoBannerSlider.svelte` and `src/lib/components/cart/EmptyCartView.svelte`.

## 2. Navigation Menu Alignment

- [x] 2.1 Keep `★ Shop by Phone` in the desktop secondary navigation bar in `src/lib/components/Header.svelte` as an inert link without click action.
- [x] 2.2 Replace the promo banner and brand buttons in `src/lib/components/MobileDrawer.svelte` with a clean, single `Shop by Phone` menu row in the same position without click triggers.

## 3. Verification & Validation

- [x] 3.1 Run `npm run check` and verify 0 Svelte/TypeScript errors.
- [x] 3.2 Run `npm run build` and verify successful production bundle compilation.
