## 1. Vector Logo Component Creation

- [x] 1.1 Create `src/lib/components/checkout/PaymentGatewayLogo.svelte` with precision vector SVGs for bKash origami bird (`#E2136E`), Nagad swirl/flame emblem (`#F7941D` / `#ED1C24`), Visa / Mastercard combined badge, and Cash on Delivery Bangladeshi Taka (`৳`) emblem, verifying clean TypeScript compilation.
- [x] 1.2 Configure theme-adaptive badge containers with boxy token `rounded-[var(--radius-xs)]`, neutral high-contrast surfaces, and subtle borders for crisp presentation across dark and light modes.

## 2. Integration into Checkout Payment Methods

- [x] 2.1 Update `src/lib/components/checkout/CheckoutPaymentMethods.svelte` to import and render `<PaymentGatewayLogo />` for each payment option (`cod`, `bkash`, `nagad`, `card`) in place of generic `@hugeicons` outlines.
- [x] 2.2 Preserve tactile interaction states (active selection border, ring, checkmark badge, and `rounded-[var(--radius-sm)]` card containers) with clean layout alignment.

## 3. Verification & UI Polish

- [x] 3.1 Verify the `/checkout` page at `http://localhost:5173/checkout` in the browser, testing selection changes, light mode, and dark mode to confirm logo crispness and contrast.
- [x] 3.2 Run `npm.cmd run check` to verify zero type check or build errors across all modified components.
