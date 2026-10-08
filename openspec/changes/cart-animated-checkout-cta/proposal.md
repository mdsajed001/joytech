## Why

The user requested that the primary Checkout CTA buttons in the cart experience feature the same smooth, continuous ambient dual-bubble position interchange animation as the search button (`cta-search-animated`), enhancing the interactive visual delight and aesthetic polish of the checkout flow.

## What Changes

- Introduce a reusable CSS class `.cta-checkout-animated` (or generalize `.cta-bubble-animated`) in `src/routes/layout.css` featuring the smooth 10s dual-bubble cubic-bezier translation animation with text isolation.
- Apply the animated bubble class to:
  - The mobile sticky checkout button in `src/routes/cart/+page.svelte`
  - The desktop order summary checkout button in `src/lib/components/cart/OrderSummary.svelte`
  - The final confirmation button in `src/lib/components/cart/CheckoutModal.svelte`

## Capabilities

### New Capabilities
- `cart-animated-checkout-cta`: Smooth ambient bubble animation for cart checkout action buttons matching the search button micro-interactions.

### Modified Capabilities

## Impact

- [`src/routes/layout.css`](file:///c:/Users/Sajed/Documents/joytech/src/routes/layout.css)
- [`src/routes/cart/+page.svelte`](file:///c:/Users/Sajed/Documents/joytech/src/routes/cart/+page.svelte)
- [`src/lib/components/cart/OrderSummary.svelte`](file:///c:/Users/Sajed/Documents/joytech/src/lib/components/cart/OrderSummary.svelte)
- [`src/lib/components/cart/CheckoutModal.svelte`](file:///c:/Users/Sajed/Documents/joytech/src/lib/components/cart/CheckoutModal.svelte)
