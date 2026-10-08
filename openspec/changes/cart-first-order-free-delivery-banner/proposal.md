## Why

The current cart page features a floating card with a threshold progress bar ("Add ৳... more for FREE delivery at ৳2,500") separated by top page padding. The customer requested replacing this section with a full-width banner that sits flush at the very top of the cart with zero top gap, removes the loading/progress bar entirely, and prominently announces that 1st order delivery is free nationwide.

## What Changes

- **Full-Width Flush Placement**: Remove the top margin/gap (`pt-0 mt-0`) so the delivery announcement banner sits completely flush at the top of the cart area, spanning full width across the layout.
- **Eliminate Loading / Progress Bar**: Remove the percentage badge chip, progress bar track, and threshold calculation markup.
- **1st Order Free Delivery Messaging**: Update the headline and copy to clearly state "1st Order Delivery FREE" ("১ম অর্ডারে ফ্রি ডেলিভারি") with nationwide coverage across all 64 districts in Bangladesh.
- **Order Summary Delivery Fee Sync**: Align `CartState` so that 1st order delivery evaluates to FREE (৳0 delivery fee) across the cart and order summary calculations.

## Capabilities

### New Capabilities
- `cart-first-order-free-delivery-banner`: Defines the full-width, zero-top-gap 1st order free delivery announcement banner on the cart page without a progress bar.

### Modified Capabilities
<!-- None -->

## Impact

- **Affected Components**: `src/lib/components/cart/DeliveryProgressBar.svelte`, `src/routes/cart/+page.svelte`, `src/lib/state.svelte.ts`.
- **APIs/State**: Uses `cartState` and `i18nState`.
- **Dependencies**: Uses existing Hugeicons.
