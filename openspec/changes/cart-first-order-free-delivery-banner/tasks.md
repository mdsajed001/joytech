## 1. Component Refactor & Messaging

- [x] 1.1 Refactor `src/lib/components/cart/DeliveryProgressBar.svelte` to remove progress track and percentage chips, styling it as a sleek announcement banner declaring "1st Order Delivery FREE" ("১ম অর্ডারে ফ্রি ডেলিভারি")
- [x] 1.2 Update `src/lib/state.svelte.ts` to set `isFreeDelivery = true` for first order deliveries, ensuring delivery fee evaluates to ৳0 (FREE) in the order summary

## 2. Full-Width Flush Page Integration

- [x] 2.1 Reposition the delivery banner in `src/routes/cart/+page.svelte` to sit full-width flush at the very top of the cart view with zero top gap (`pt-0 mt-0`)
- [x] 2.2 Verify full-width geometry, absence of progress bar/loading elements, dark/light styling, and run `npm run check`
