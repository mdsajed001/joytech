## Why

The current promo code UI has several limitations that create a frustrating user experience. It hides the input field once a single promo code is applied, preventing users from adding multiple codes. It requires strict validation against a hardcoded list of codes, which breaks the dummy UI illusion where we want any code to work for testing. Additionally, the placeholder text includes unnecessary example text ("E.G. JOYVIP500") that adds visual clutter, violating the clean design system mandate.

This change refactors the promo code UI and state to be cleaner, support multiple applied codes (stacking), simplify the input, and ensure the dummy validation accepts any text.

## What Changes

- Update `CartState` to store a list of applied promo codes (`appliedCoupons`) and compute `couponDiscount` as a sum of all applied discounts.
- Modify `applyCoupon()` so that ANY non-empty text string is accepted as a valid promo code, granting a generic flat discount (e.g., ৳100) if it doesn't match the special hardcoded ones (which will grant their specific amounts).
- Update `OrderSummary.svelte` to always show the promo code input box, even when one or more codes are applied.
- Remove "(E.G. JOYVIP500)" from the promo code input placeholder to reduce visual clutter.
- Render each applied coupon on its own line in the receipt breakdown with its own "cancel" button, ensuring the layout remains clean and retains breathing space on both mobile and desktop.
- Ensure the input UI respects the clean design system without unnecessary boxes or heavy borders.

## Capabilities

### New Capabilities
None

### Modified Capabilities
None. The `.openspec.yaml` has been configured with `skip_specs: true`.

## Impact

- `src/lib/state.svelte.ts`: `CartState` properties and `applyCoupon`/`removeCoupon` methods.
- `src/lib/components/cart/OrderSummary.svelte`: Receipt content loop for coupons and the promo code input visibility logic.
