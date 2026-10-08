## Context

The Joytech storefront currently invokes `CheckoutModal.svelte` from the `/cart` page. This causes visual crowding on mobile devices, conceals the order review while entering shipping details, and lacks an organized, trustworthy checkout flow. As requested, the checkout will be transformed into a dedicated full page (`/checkout`) structured in a clear, sequential journey: **1. Full Order Summary** &rarr; **2. Selected Address (with Change option)** &rarr; **3. Payment Selection** &rarr; **4. Policy Agreement** &rarr; **5. Proceed**.

## Goals / Non-Goals

**Goals:**
- Replace the modal completely with a dedicated `/checkout` route in `src/routes/checkout/+page.svelte`.
- Render a comprehensive Order Summary displaying items, variants, quantities, unit prices, delivery fee, discounts, and total.
- Implement an active Selected Address Card with a "Change Address" trigger that opens a selection sheet/dialog of saved addresses or custom entry.
- Implement a clear 4-option Payment Selector (Cash on Delivery, bKash, Nagad, Card).
- Add an explicit Policy Agreement checkbox ("I agree to terms, refund & 7-day replacement policy") required before proceeding.
- Display a dedicated in-page success confirmation receipt upon successful submission.
- Ensure seamless mobile (<640px) sticky bottom CTA bar and desktop (≥1024px) 2-column grid layout.
- Remove `CheckoutModal.svelte` and redirect all cart checkout CTAs to `/checkout`.

**Non-Goals:**
- Integration with external live payment gateway APIs (mock payment flow is preserved).
- Requiring mandatory account login (guest checkout using address input is fully supported).

## Decisions

### Decision 1: Sequential Section Architecture on Dedicated Page
- **Choice**: The checkout page follows a natural logical flow:
  1. **Trust Header Bar**: Secure checkout indicator and back-to-cart link.
  2. **Order Summary Card**: Collapsible/full line-item breakdown with images and quantities.
  3. **Delivery Address Card**: Shows current selected destination (recipient, phone, address) with a "Change" button.
  4. **Payment Method Card**: COD / bKash / Nagad / Card selection.
  5. **Policy Agreement & Proceed**: Terms & 7-day warranty checkbox, followed by the "Confirm & Place Order" button.
- **Rationale**: Keeps the customer informed of what they are purchasing before asking them to verify shipping and payment, preventing unexpected friction.

### Decision 2: Selected Address Card with Switcher Dialog
- **Choice**: Rather than presenting an empty form on every checkout, the system presents the customer's selected primary address in a high-density card. A "Change" button triggers a modal/sheet listing saved addresses (`MOCK_ADDRESSES`) and an option to input a new address.
- **Rationale**: 1-click address confirmation speeds up checkout for returning users while still accommodating guest changes.

### Decision 3: Policy Agreement Checkbox Validation
- **Choice**: A standard checkbox `agreedToPolicy = $state(false)` bound before the submit CTA. If the user clicks Proceed without checking it, a subtle red highlight ring and toast notification prompt them to agree.
- **Rationale**: Meets user requirements for policy agreement and establishes customer trust regarding Joy Telecom's 7-day replacement guarantee.

### Decision 4: Responsive Layout
- **Choice**: On desktop (lg: ≥1024px), a 7-col / 5-col split with left column holding order items, address, and payment, and right column holding sticky price summary, policy checkbox, and submit button. On mobile, sequential cards with sticky bottom bar holding total price and proceed CTA.

### Decision 5: Distraction-Free Checkout Environment & Automated Delivery Zone
- **Choice**: Global header, announcement bar, drawer menu, and search bar are omitted on `/checkout`. The top is replaced by a dedicated blue branded trust bar. Manual inside/outside Dhaka picker is removed; shipping zone is automatically derived from the selected delivery address.
- **Rationale**: Reduces cognitive friction and checkout drop-off, focusing the user solely on finalizing their order with brand confidence.

## Risks / Trade-offs

- **[Risk] Customer navigates directly to `/checkout` with an empty cart**:
  - *Mitigation*: The page checks `cartState.items.length === 0` in an `$effect` / SSR load and redirects to `/cart`.
- **[Risk] Policy checkbox missed by mobile user if placed above sticky CTA**:
  - *Mitigation*: If unchecked when tapping the mobile sticky CTA, smoothly scroll to or display an inline prompt above the button.
