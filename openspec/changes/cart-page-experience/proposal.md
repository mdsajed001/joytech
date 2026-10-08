## Why

The current cart route (`/cart`) is a placeholder without functional item management, quantity controls, coupon validation, delivery fee calculation, or checkout capabilities. This change introduces a comprehensive, responsive Cart & Checkout experience adhering strictly to the design system (ambient blue glow, clean card surfaces, 44px tap targets, and full Dark Mode support) optimized for both desktop and mobile viewports.

## What Changes

- **Rich Cart Items Management**: Interactive item cards with model badges, thumbnail preview, price/discount display, quantity stepper `[-][qty][+]`, "Move to Wishlist", and item removal with undo toasts.
- **Dynamic Delivery Progress Meter**: Visual free courier delivery progress indicator (e.g. "Add ৳350 more for FREE nationwide delivery!").
- **Delivery Zone Selector**: Toggle between Inside Dhaka (৳60 / Same-Day Express ৳120) and Outside Dhaka (৳120 courier across all 64 districts).
- **Vouchers, Promos & Loyalty Redemption**: Instant promo coupon validation (`JOYVIP500`, `EIDGIFT200`) and Joy Points slider/toggle to redeem points for store credit.
- **Responsive Order Summary**:
  - *Desktop*: Sticky sidebar (`sticky top-24`) showing live item subtotal, delivery fee, discounts, grand total in BDT, trust badges, and primary Checkout CTA.
  - *Mobile*: Clean stacked layout with fixed bottom checkout bar above the bottom navigation.
- **One-Click Checkout & Order Confirmation Modal**: Simulated checkout modal supporting Cash on Delivery (COD), bKash Instant Payment, Nagad, and Cards with order receipt generation.
- **Interactive Cross-Sell Rail**: "Frequently Bought Together" recommendations (Tempered Glass, Fast Charging Cables) with 1-click cart addition.
- **Rich Empty Cart State**: Ambient blue bubble hero, recommended categories, and quick links to flash deals and phone models when the cart is empty.

## Capabilities

### New Capabilities
- `cart-and-checkout-ui`: End-to-end shopping cart management, delivery zone selection, coupon & points discount calculations, responsive order summary, and simulated checkout flow.

### Modified Capabilities

## Impact

- `src/routes/cart/+page.svelte`: Complete redesign from placeholder to interactive cart experience.
- `src/lib/state.svelte.ts`: Enhanced `CartState` with quantity modification, coupon application, loyalty points deduction, delivery zone management, and order placement simulation.
- `src/lib/components/cart/`: Modular cart components (CartItemCard, OrderSummary, DeliverySelector, CouponInput, CheckoutModal, CrossSellRail, EmptyCartView).
