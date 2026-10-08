## Why

The current checkout flow is a modal overlay (`CheckoutModal.svelte`) triggered from the cart page. This constrains available screen real estate, clips on mobile screens, and hides the critical order review while entering shipping details. Replacing it with a dedicated full-page checkout (`/checkout`) enables a clean, linear checkout journey: full order summary, selected address with seamless switching, payment selection, and explicit policy agreement before proceeding.

## What Changes

- **Dedicated Full Checkout Page (`/checkout`)**: Completely replaces the modal overlay with a standalone route. Redirects to `/cart` if the cart is empty.
- **1. Full Order Summary**: Displays complete line-item breakdown (product thumbnail, title, selected variant, quantity, line price), delivery fee, discount/promo codes, and grand total.
- **2. Selected Address with Option to Change**: Displays the user's active/selected delivery address (prefilled with default saved address or guest address) with a prominent "Change" action to pick another saved address or input a new destination.
- **3. Payment Method Selection**: Radio/card selection between Cash on Delivery, bKash, Nagad, and Card payments with active highlight states.
- **4. Policy Agreement Checkbox**: Mandatory "I agree to the Terms of Service and 7-Day Return & Replacement Policy" acceptance checkbox before proceeding.
- **5. Final Proceed Action**: "Confirm & Place Order" button with price summary, validation feedback, and full in-page order confirmation view.
- **Cart Page Integration**: Cart "Proceed to Checkout" button navigates directly to `/checkout` via `<a href="/checkout">` / `goto('/checkout')`. `CheckoutModal.svelte` is permanently deleted.
- **Bottom Navigation**: Mobile bottom navigation is hidden on `/checkout` to keep the customer focused on completing the transaction.

## Capabilities

### New Capabilities
- `checkout/checkout-page`: Dedicated full-page checkout route with complete order summary, selected address card with change modal/drawer, payment selection, terms policy agreement, and order submission.

### Modified Capabilities
*(None - no prior checkout specs exist in the repository.)*

## Impact

- **New files**:
  - `src/routes/checkout/+page.svelte` (full checkout page route)
  - `src/lib/components/checkout/CheckoutOrderSummary.svelte` (complete items & price breakdown)
  - `src/lib/components/checkout/CheckoutAddressCard.svelte` (selected address display + change switcher)
  - `src/lib/components/checkout/CheckoutPaymentSelector.svelte` (payment methods)
  - `src/lib/components/checkout/CheckoutTrustBar.svelte` (trust & security header)
- **Modified files**:
  - `src/routes/cart/+page.svelte` (redirect CTA to `/checkout`, remove modal)
  - `src/lib/components/cart/OrderSummary.svelte` (link CTA to `/checkout`)
  - `src/lib/components/BottomNav.svelte` (hide on `/checkout`)
- **Removed files**:
  - `src/lib/components/cart/CheckoutModal.svelte`
- **Dependencies**: Uses existing `@hugeicons/core-free-icons`, `cartState`, and design tokens in `layout.css`.
