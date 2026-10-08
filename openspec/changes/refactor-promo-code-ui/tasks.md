## 1. State Updates

- [x] 1.1 In `state.svelte.ts`, replace `appliedCoupon: string | null` with `appliedCoupons: {code: string, discount: number}[]`. Update `couponDiscount` to be a getter that returns the sum of all discounts in `appliedCoupons`.
- [x] 1.2 Update `applyCoupon(code: string)` to accept any non-empty code. If the code is already applied, return false. If it matches `JOYVIP500`, add `{code: 'JOYVIP500', discount: 500}`. If it matches `EIDGIFT200`, add `{code: 'EIDGIFT200', discount: 200}`. If it matches `FREEDELIVERY`, add `{code: 'FREEDELIVERY', discount: this.deliveryFee}`. Otherwise, add `{code, discount: 100}` (a standard dummy discount). Show appropriate toast messages for success.
- [x] 1.3 Update `removeCoupon(code: string)` to remove a specific code from the `appliedCoupons` array. Update `clearCart()` to reset `appliedCoupons = []`.

## 2. UI Updates

- [x] 2.1 In `OrderSummary.svelte`, remove the `{#if !cartState.appliedCoupon}` check around the promo code input container so that the input is always visible.
- [x] 2.2 Update the placeholder text from `"Promo code (e.g. JOYVIP500)"` to `"Promo code"`.
- [x] 2.3 Update the receipt content loop that currently renders `{#if cartState.couponDiscount > 0}` to instead iterate over `cartState.appliedCoupons`. For each applied coupon, render a line item showing its specific code, discount amount, and an individual remove button that calls `handleRemoveCoupon(coupon.code)`. Ensure the layout retains generous whitespace and follows the clean design system without clutter.
