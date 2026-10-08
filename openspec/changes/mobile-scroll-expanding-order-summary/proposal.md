## Why

On mobile viewports in the cart page, users encounter two duplicate "Checkout" CTA buttons simultaneously: one inside the in-flow `OrderSummary` card and one in the floating bottom sticky bar. This creates visual clutter and redundancy. Consolidating the mobile Order Summary into a smart, scroll-responsive bottom sheet that remains compact while browsing items and smoothly expands into the full Order Summary when the user scrolls past "You Might Also Like" creates a sleek, modern, single-CTA mobile checkout experience.

## What Changes

- **Eliminate Duplicate Mobile CTA**: Hide the static in-flow `OrderSummary` card on mobile (`hidden lg:block lg:col-span-5`), reserving static card rendering for desktop viewports.
- **Scroll-Responsive Bottom Sheet**:
  - **Collapsed State**: Sleek compact bottom bar (`fixed bottom-14 left-0 right-0 sm:hidden`) displaying `Total Amount ৳...`, a subtle expand pill/chevron indicator, and a single animated checkout CTA button.
  - **Expanded State**: Automatically unfolds upward (`transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1)`) when the user scrolls past the "You Might Also Like" section, revealing the complete Order Summary breakdown (Subtotal, Delivery, Joy Club redeem toggle, Total Savings, Promo code input with quick apply chips, Grand Total, and trust badges).
  - **Manual Peek Affordance**: Users can tap "Total Amount" or the expand chevron to manually open or close the summary anytime.
- **Full-Bleed Mobile Geometry**:
  - The bottom sheet extends to the phone glass edges (`0px` to `100vw`), eliminating side padding cutoffs.
  - Styled with `rounded-t-2xl`, `rounded-b-none`, and resting flush directly above the bottom nav bar (`bottom-14`).
- **Component Prop Support**: Update `src/lib/components/cart/OrderSummary.svelte` with `variant?: 'card' | 'sheet'` to share calculation, coupon, and points logic between desktop and mobile without code divergence.

## Capabilities

### New Capabilities
- `mobile-scroll-expanding-order-summary`: Defines the single-CTA scroll-expanding bottom sheet architecture for mobile checkout on the cart page.

### Modified Capabilities
<!-- None -->

## Impact

- **Affected Components**: `src/routes/cart/+page.svelte`, `src/lib/components/cart/OrderSummary.svelte`.
- **APIs/State**: Uses existing `cartState` and `i18nState`.
- **Dependencies**: Uses existing Hugeicons and Svelte runes with `IntersectionObserver`.
