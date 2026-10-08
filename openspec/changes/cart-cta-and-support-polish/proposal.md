## Why

On the `/cart` page, the floating customer support headset widget collides with and obscures the mobile bottom checkout bar, obstructing the user's primary action. Additionally, the checkout CTA buttons (on mobile and desktop) currently appear thin with pill-like rounded corners, lacking the signature brand gradient, height, and border radius consistency established in Joy Telecom's design system.

## What Changes

- Hide the floating `<SupportWidget />` on the `/cart` page to prevent obstruction of the checkout CTA bar.
- Upgrade the mobile sticky Checkout Now button to use the signature `cta-blue-bubble` aesthetic with consistent `rounded-[var(--radius-sm)]` / `rounded-lg` corners, 46px+ tap height, bold typography, and ambient shadow.
- Align desktop [`OrderSummary.svelte`](file:///c:/Users/Sajed/Documents/joytech/src/lib/components/cart/OrderSummary.svelte) and [`CheckoutModal.svelte`](file:///c:/Users/Sajed/Documents/joytech/src/lib/components/cart/CheckoutModal.svelte) primary action buttons to match the exact same `cta-blue-bubble` tokenized aesthetic.

## Capabilities

### New Capabilities
- `cart-cta-and-support-polish`: Consistent design system checkout CTA buttons and clean layout visibility without support widget interference on cart screens.

### Modified Capabilities

## Impact

- [`src/routes/+layout.svelte`](file:///c:/Users/Sajed/Documents/joytech/src/routes/+layout.svelte) (conditional rendering of support widget)
- [`src/routes/cart/+page.svelte`](file:///c:/Users/Sajed/Documents/joytech/src/routes/cart/+page.svelte) (mobile checkout bar styling)
- [`src/lib/components/cart/OrderSummary.svelte`](file:///c:/Users/Sajed/Documents/joytech/src/lib/components/cart/OrderSummary.svelte) (desktop checkout CTA)
- [`src/lib/components/cart/CheckoutModal.svelte`](file:///c:/Users/Sajed/Documents/joytech/src/lib/components/cart/CheckoutModal.svelte) (modal confirmation CTA)
