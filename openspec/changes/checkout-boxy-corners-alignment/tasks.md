## 1. Checkout Page Shell & Primary CTAs Alignment

- [x] 1.1 In `src/routes/checkout/+page.svelte`, replace `rounded-xl` on the desktop CTA with `rounded-[var(--radius-sm)]` (8px).
- [x] 1.2 In `src/routes/checkout/+page.svelte`, replace `rounded-xl` on the mobile sticky bottom CTA with `rounded-[var(--radius-sm)]` (8px).
- [x] 1.3 In `src/routes/checkout/+page.svelte`, update the sidebar payment summary card from `rounded-xl` to `rounded-[var(--radius-md)]` (12px), and the VIP points box to `rounded-[var(--radius-sm)]`.

## 2. Order Review & Complementary Setup Boxy Geometry

- [x] 2.1 In `src/lib/components/checkout/CheckoutOrderReview.svelte`, update the main container to `rounded-[var(--radius-md)]` and item thumbnails to `rounded-[var(--radius-xs)]`.
- [x] 2.2 In `src/lib/components/checkout/CheckoutOrderReview.svelte`, update the Complete Your Setup container to `rounded-b-[var(--radius-md)]`, inner cards to `rounded-[var(--radius-sm)]`, and "+ Add" buttons to `rounded-[var(--radius-xs)]`.

## 3. Shipping Address, Payment, Policy & Success Cards

- [x] 3.1 In `src/lib/components/checkout/CheckoutAddressCard.svelte`, update container to `rounded-[var(--radius-md)]`, Change button to `rounded-[var(--radius-xs)]`, modal dialog to `rounded-[var(--radius-md)]`, and saved address cards/inputs to `rounded-[var(--radius-sm)]`.
- [x] 3.2 In `src/lib/components/checkout/CheckoutPaymentMethods.svelte`, update container to `rounded-[var(--radius-md)]`, payment method cards to `rounded-[var(--radius-sm)]`, and payment icon boxes to `rounded-[var(--radius-xs)]`.
- [x] 3.3 In `src/lib/components/checkout/CheckoutPolicyAgreement.svelte`, update container to `rounded-[var(--radius-md)]` and checkbox box to `rounded-[var(--radius-xs)]`.
- [x] 3.4 In `src/lib/components/checkout/CheckoutSuccess.svelte`, update receipt card to `rounded-[var(--radius-md)]` and Continue Shopping CTA to `rounded-[var(--radius-sm)]`.

## 4. Verification

- [x] 4.1 Run `npm.cmd run check` to verify 0 TypeScript and Svelte diagnostics errors.
- [x] 4.2 Verify visual appearance and boxy aesthetic consistency across `http://localhost:5173/checkout`.
