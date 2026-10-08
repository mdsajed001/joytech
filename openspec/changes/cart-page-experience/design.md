## Context

The shopping cart route (`/cart`) currently renders a static placeholder message. We are replacing this with a complete cart and checkout management module that mirrors the clean aesthetic, cohesive tokens, and responsive structure established on the homepage and profile page.

## Goals / Non-Goals

**Goals:**
- Provide reactive, client-side cart state management (`CartState` with runes) supporting quantity stepper adjustments, item removal, and transfer to wishlist.
- Implement a two-column responsive grid layout: Left 65% for Cart Items & Delivery Zone selection, Right 35% for Sticky Order Summary.
- Implement a fixed bottom action bar on mobile viewports for effortless 1-thumb checkout.
- Include coupon code input with validation against pre-defined voucher rules, loyalty points redemption, and delivery fee calculation (Dhaka ৳60, Outside Dhaka ৳120, Free above ৳2,500).
- Provide an interactive Checkout & Confirmation modal simulating COD, bKash, Nagad, and Card order placement.
- Provide a clean Empty Cart state with quick navigation buttons.
- Full Dark Mode compatibility with design-system tokens (`var(--color-bg-surface)`, `var(--color-bg-canvas)`, `var(--color-brand-primary)`).

**Non-Goals:**
- Real backend database integration or actual credit card processing (simulated client-side mock flow with toasts and order generation).

## Decisions

1. **Reactive Cart State Enhancement in `state.svelte.ts`**:
   - *Decision*: Extend `CartState` class with methods `updateQuantity(id, qty)`, `removeItem(id)`, `moveToWishlist(product)`, `applyCoupon(code)`, `removeCoupon()`, `setDeliveryZone(zone)`, and derived getters for `subtotal`, `deliveryFee`, `discount`, and `grandTotal`.
   - *Rationale*: Centralizing cart calculations in the Svelte 5 rune state allows any component (header counter, wishlist, cart page, checkout modal) to stay seamlessly in sync.

2. **Component Modularity under `$lib/components/cart/`**:
   - *Decision*: Decompose the Cart UI into focused components:
     - `CartItemCard.svelte`: Individual item row with thumbnail, stepper, model badge, price, and actions.
     - `DeliveryProgressBar.svelte`: Visual progress indicator towards the ৳2,500 free shipping goal.
     - `DeliveryZoneSelector.svelte`: Inside Dhaka vs Outside Dhaka radio cards with courier details.
     - `OrderSummary.svelte`: Subtotal, discounts, delivery fee, grand total, promo input, points slider, and Checkout CTA.
     - `CrossSellRail.svelte`: Add-on recommendations (Tempered Glass, Braided Cable) with 1-click addition.
     - `CheckoutModal.svelte`: Payment method selection (COD, bKash, Nagad, Card) and order receipt modal.
     - `EmptyCartView.svelte`: Engaging empty state with category chips and flash deal links.

3. **Responsive Sticky Summary**:
   - *Decision*: Desktop uses `lg:sticky lg:top-24` inside a 12-column grid (`lg:col-span-7` items, `lg:col-span-5` summary). Mobile renders stacked items with a floating bottom checkout bar (`fixed bottom-16 sm:hidden`).

4. **Consistency with Design System**:
   - *Decision*: All primary buttons use `cta-blue-bubble` / `var(--color-brand-primary)` with 44px tap targets (`min-h-[44px]` or `h-11`). Clean card surfaces with `var(--color-bg-surface)` and single subtle borders.

## Risks / Trade-offs

- *Risk*: Cart being empty when user first lands on `/cart`.
  → *Mitigation*: If `cartState.items.length === 0`, render `EmptyCartView` with instant "Add Sample Items" or category jump links so the user can test the cart effortlessly.
