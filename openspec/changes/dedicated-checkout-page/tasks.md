## 1. Checkout Components Scaffolding

- [x] 1.1 Create `src/lib/components/checkout/CheckoutTrustBar.svelte` — renders the `.profile-hero-bubble` header with a lock icon, "Secure Checkout" label, and a back-to-cart `<a href="/cart">` link.
- [x] 1.2 Create `src/lib/components/checkout/CheckoutOrderReview.svelte` — displays a comprehensive, collapsible list of cart items with images (48×48), product titles, selected variant/model, quantities, line pricing, and complementary setup recommendations.
- [x] 1.3 Create `src/lib/components/checkout/CheckoutAddressCard.svelte` — displays the selected delivery destination (recipient name, phone, address, city) with a prominent "Change" action and an address switcher modal/sheet allowing selection of saved addresses or custom entry.
- [x] 1.4 Create `src/lib/components/checkout/CheckoutPaymentMethods.svelte` — 2×2 grid of payment method cards (Cash on Delivery, bKash, Nagad, Debit/Credit Card) with active highlight states.
- [x] 1.5 Create `src/lib/components/checkout/CheckoutPolicyAgreement.svelte` — renders the mandatory terms & 7-day replacement policy agreement checkbox with validation feedback before proceeding.
- [x] 1.6 Create `src/lib/components/checkout/CheckoutSuccess.svelte` — full in-page success view with order ID, itemized order summary, selected address, estimated delivery date, and a "Continue Shopping" CTA.

## 2. Dedicated Checkout Page Route Assembly

- [x] 2.1 Create `src/routes/checkout/+page.svelte` — orchestrates the full checkout page: redirects to `/cart` if empty, integrates TrustBar, Order Review, Selected Address Card, Delivery Zone Selector, Payment Methods, Policy Agreement, and sticky/mobile Proceed CTA buttons.
- [x] 2.2 Add `<svelte:head>` with title "Secure Checkout — Joy Telecom" and meta description for the checkout page.

## 3. Cart Page Refactoring & Modal Deletion

- [x] 3.1 Modify `src/routes/cart/+page.svelte` — remove `CheckoutModal` import and instance, updating `onProceedToCheckout` callback to navigate directly to `/checkout`.
- [x] 3.2 Modify `src/lib/components/cart/OrderSummary.svelte` — ensure checkout CTA links navigate to `/checkout`.
- [x] 3.3 Delete `src/lib/components/cart/CheckoutModal.svelte` and ensure no orphaned imports remain.

## 4. Bottom Navigation Route Filter

- [x] 4.1 Modify `src/lib/components/BottomNav.svelte` — hide the bottom navigation when on `/checkout`.

## 5. End-to-End Verification

- [x] 5.1 Run typechecking and test complete checkout journey: Cart &rarr; `/checkout` &rarr; Order Summary &rarr; Address Selection &rarr; Payment &rarr; Policy Agreement &rarr; Confirm Order &rarr; Success Receipt.
