## 1. Cart State & Calculation Engine

- [x] 1.1 Extend `CartState` in `src/lib/state.svelte.ts` with quantity bounds management, item removal, wishlist transfer, delivery zone calculation, and coupon/points discount engine, and verify reactive subtotal and grandTotal updates.

## 2. Cart Components Development

- [x] 2.1 Create `DeliveryProgressBar.svelte` with dynamic progress percentage toward the ৳2,500 threshold, and verify visual bar fill.
- [x] 2.2 Create `CartItemCard.svelte` with thumbnail preview, brand and phone model badges, price/discount tags, quantity stepper `[-][qty][+]`, and action buttons, and verify interaction.
- [x] 2.3 Create `DeliveryZoneSelector.svelte` with Inside Dhaka (৳60 / Express ৳120) and Outside Dhaka (৳120) selection cards, and verify zone change events.
- [x] 2.4 Create `OrderSummary.svelte` with sticky sidebar styling, coupon code input, points redemption toggle, financial breakdown, and checkout CTA, and verify discount computations.
- [x] 2.5 Create `CrossSellRail.svelte` with frequently bought together accessory recommendations and 1-click cart addition, and verify item addition.
- [x] 2.6 Create `EmptyCartView.svelte` with ambient blue bubble hero and quick discovery shortcuts, and verify empty cart presentation.
- [x] 2.7 Create `CheckoutModal.svelte` simulating payment method selection (COD, bKash, Nagad, Card) and order receipt generation, and verify order placement.

## 3. Cart Page Integration & Responsive Polish

- [x] 3.1 Integrate components into `src/routes/cart/+page.svelte` with responsive 2-column desktop grid (`lg:col-span-7` and `lg:col-span-5`) and sticky mobile checkout bar, and verify layout responsiveness.
- [x] 3.2 Ensure 100% Dark Mode compatibility across all cart components using design system tokens (`var(--color-bg-surface)`, `var(--color-bg-canvas)`, `var(--color-brand-primary)`).

## 4. Verification & Testing

- [x] 4.1 Run `npm run check` and `npm run build` to verify type safety and compilation.
- [x] 4.2 Test cart adding, quantity adjustment, coupon redemption, delivery zone toggling, and checkout simulation on desktop and mobile viewports.
