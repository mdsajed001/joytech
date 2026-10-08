## Why

The checkout page and its modular components currently utilize exaggerated, overly rounded corners (`rounded-xl` at 24px and `rounded-2xl` at 32px) on action buttons, container cards, and module blocks. This conflicts with Joytech's established design system, which features a disciplined, architectural "boxy" aesthetic built on `--radius-xs` (4px), `--radius-sm` (8px), and `--radius-md` (12px) tokens. Aligning the checkout page with these boxy geometric tokens restores visual cohesion with the rest of the storefront (such as `OrderSummary.svelte` and `CartItemCard.svelte`).

## What Changes

- **Checkout Action CTAs**: Replace `rounded-xl` on both the desktop sidebar CTA and the mobile sticky proceed button with crisp `rounded-[var(--radius-sm)]` (8px) boxy styling.
- **Section Container Cards**: Adjust outer wrappers for Order Review, Shipping Destination, Payment Methods, Policy Agreement, and Sticky Summary from `rounded-xl` / `rounded-2xl` to disciplined `rounded-[var(--radius-md)]` (12px).
- **Inner Modules & Interactive Elements**:
  - Payment method option cards: change from `rounded-xl` to `rounded-[var(--radius-sm)]`.
  - Address switcher modal and saved address cards: change from `rounded-2xl` / `rounded-xl` to `rounded-[var(--radius-md)]` and `rounded-[var(--radius-sm)]`.
  - Upsell cards & action buttons in Order Review: change from `rounded-xl` / `rounded-lg` to boxy `rounded-[var(--radius-sm)]` and `rounded-[var(--radius-xs)]`.
  - Form inputs and select triggers: align to `rounded-[var(--radius-sm)]`.
  - Success receipt card and action buttons: align to `rounded-[var(--radius-md)]` and `rounded-[var(--radius-sm)]`.

## Capabilities

### New Capabilities
- `checkout/checkout-boxy-geometry`: Design token alignment for boxy corner radii across checkout buttons, section modules, and cards.

### Modified Capabilities
<!-- None -->

## Impact

- `src/routes/checkout/+page.svelte`
- `src/lib/components/checkout/CheckoutOrderReview.svelte`
- `src/lib/components/checkout/CheckoutAddressCard.svelte`
- `src/lib/components/checkout/CheckoutPaymentMethods.svelte`
- `src/lib/components/checkout/CheckoutPolicyAgreement.svelte`
- `src/lib/components/checkout/CheckoutSuccess.svelte`
- No breaking data or API changes. Pure visual design system alignment.
