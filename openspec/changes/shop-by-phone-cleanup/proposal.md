## Why

The previous "Shop by Phone" feature was implemented as a cramped right-side slide-over drawer, which felt like a shopping cart utility rather than a personalized device shopping experience. We are removing the side drawer and its associated state to reset the slate for a future ground-up design, while retaining the "Shop by Phone" navigation entry points as clean, inert menu items.

## What Changes

- **Remove Side Drawer & Global State**:
  - Delete `ShopByPhoneDrawer.svelte`.
  - Remove `PhoneDrawerState` class and `phoneDrawerState` singleton from `src/lib/state.svelte.ts`.
  - Remove `<ShopByPhoneDrawer>` mounting and import from `src/routes/+page.svelte`.
- **Preserve Navigation Positions as Inert Labels**:
  - Keep `★ Shop by Phone` in the desktop header secondary navigation bar without triggering the drawer or causing side-effects.
  - In `MobileDrawer.svelte`, replace the promotional banner and brand button grid with a clean, single `Shop by Phone` menu item row in the same position, without click action.
- **Unhook Secondary Callers**:
  - Remove drawer opening triggers from `PromoBannerSlider.svelte` and `EmptyCartView.svelte`.

## Capabilities

### New Capabilities
- `shop-by-phone-cleanup`: Removes the legacy slide-over drawer and cleans up menu navigation to serve as static/inert entry points while the new concept is planned.

### Modified Capabilities
<!-- None -->

## Impact

- **Affected Files**:
  - `src/lib/components/ShopByPhoneDrawer.svelte` (deleted)
  - `src/lib/state.svelte.ts`
  - `src/routes/+page.svelte`
  - `src/lib/components/Header.svelte`
  - `src/lib/components/MobileDrawer.svelte`
  - `src/lib/components/PromoBannerSlider.svelte`
  - `src/lib/components/cart/EmptyCartView.svelte`
- **Dependencies**: None.
