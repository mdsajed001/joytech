# Proposal: Authentic Payment Gateway Brand Logos for Checkout

## Why

Currently, the payment selection interface in `CheckoutPaymentMethods.svelte` (and associated payment representations) uses generic mono outline glyphs (`SmartPhone01Icon`, `CreditCardIcon`, `BanknoteIcon`) inside generic colored boxes. For an e-commerce platform operating in Bangladesh, customers expect instantly recognizable, authentic brand iconography for major payment services—specifically **bKash** (signature origami bird), **Nagad** (dynamic swirl/flame emblem), **Visa / Mastercard** (authentic card network marks), and **Cash on Delivery** (clear Bangladeshi Taka cash badge).

Replacing generic icons with crisp, authentic brand logos elevates buyer trust, eliminates visual ambiguity during high-stakes checkout decisions, and gives the Joy Telecom checkout experience a premium, polished feel matching industry leaders.

## What Changes

- **Create Dedicated Payment Gateway Vector Logo Component**:
  - Implement a reusable Svelte 5 component (`PaymentGatewayLogo.svelte`) containing precision, self-contained SVG vectors for:
    - **bKash**: Official origami bird emblem in brand magenta (`#E2136E`) on an optimized badge container.
    - **Nagad**: Official swirl/flame emblem in brand gradient/warm orange (`#F7941D` / `#ED1C24`) on an optimized badge container.
    - **Visa / Mastercard**: Authentic dual card badge featuring Mastercard's interlocking circles (`#EB001B` / `#F79E1B`) and Visa's distinct wordmark.
    - **Cash on Delivery (COD)**: High-trust emerald (`#059669`) badge with authentic Bangladeshi Taka (`৳`) delivery symbol.
- **Upgrade `CheckoutPaymentMethods.svelte`**:
  - Replace the generic `@hugeicons` placeholder icons and plain text-color classes with the new `PaymentGatewayLogo` component.
  - Maintain the boxy design system (`rounded-[var(--radius-xs)]` / `rounded-[var(--radius-sm)]`), responsive 2x2 grid, active selection border highlight, and checkmark badge.
  - Ensure pristine contrast and crispness in both light mode and dark mode without pixelation or external image network latency.
- **Extensible Integration**:
  - Ensure the logo component is structured so other payment-displaying components (such as `PaymentsTab.svelte` in user profile or order confirmation summaries) can consume the same vector logos.

## Capabilities

### New Capabilities
- `checkout-payment-logos`: High-fidelity vector logos and visual badges for supported payment gateways (bKash, Nagad, Visa/Mastercard, and Cash on Delivery) in checkout and payment management workflows.

### Modified Capabilities
*(None; this introduces the payment logo presentation capability to the OpenSpec registry)*

## Impact

- **UI Components**:
  - New component: `src/lib/components/checkout/PaymentGatewayLogo.svelte` (or `src/lib/components/ui/PaymentGatewayLogo.svelte`).
  - Modified component: `src/lib/components/checkout/CheckoutPaymentMethods.svelte`.
  - Reusable by: `src/lib/components/profile/PaymentsTab.svelte` and `src/lib/components/checkout/CheckoutSuccess.svelte`.
- **Dependencies**: Zero new npm dependencies; purely lightweight inline SVG vectors without external image CDN dependencies or layout shifting.
- **Performance**: Instant render, 0kb network requests, resolution-independent vector scaling.
