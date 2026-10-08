## 1. Desktop Entry Point

- [x] 1.1 In `src/lib/components/Header.svelte`, import `autoWizardState` from `$lib/state.svelte`, convert the "★ Shop by Phone" `<span>` into an interactive button with hover styles and `onclick={() => autoWizardState.isDrawerOpen = true}`, and verify by clicking it on desktop to confirm `ShopByPhoneDrawer` opens.

## 2. Mobile Entry Point

- [x] 2.1 In `src/lib/components/MobileDrawer.svelte`, import `goto` from `$app/navigation`, replace the `preventDefault` handler on the "Shop by Phone" card to call `onClose()` and `goto('/shop-by-phone')`, and verify by tapping the card on mobile to confirm the menu closes and navigates to `/shop-by-phone`.

## 3. Banner Slider Entry Point

- [x] 3.1 In `src/lib/components/PromoBannerSlider.svelte`, update Banner #2 to route to `/shop-by-phone` on mobile or toggle `autoWizardState.isDrawerOpen = true` on desktop, and verify by clicking Banner #2 on desktop and mobile viewports.

## 4. End-to-End Verification

- [x] 4.1 Run `npm run check` (`svelte-check`) and verify that all entry links function cleanly without errors or styling regressions.
