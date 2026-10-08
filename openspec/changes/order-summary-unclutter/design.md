## Context

See `proposal.md` and `specs/order-summary-unclutter/spec.md`. The user identified that the Order Summary card feels "too modular, modular in module, too nested and cluttered". We are redesigning the internal card structure into a continuous, elegant receipt layout.

## Goals / Non-Goals

**Goals:**
- Remove nested border boxes for Joy Club Points and Total Savings.
- Integrate Joy Club Points into an inline, unboxed row with a subtle toggle or redeem pill.
- Ensure high-contrast emerald text for savings and discounts without murky container backgrounds.
- Streamline promo code section into an integrated, compact input group.
- Keep only 1 divider line above the Grand Total.

**Non-Goals:**
- Modify calculation math in `CartState`.

## Decisions

1. **Integrated Inline Points Row**:
   - Rather than `<div class="p-3.5 rounded-xl bg-subtle border ...">`, render a clean flex row between Subtotal and Delivery or in the calculation table with an icon, points text, and a sleek toggle/button.
2. **High-Contrast Discount & Savings Row**:
   - Display `-৳...` in `text-emerald-600 dark:text-emerald-400 font-bold` directly in the receipt list.
3. **Integrated Promo Code Field**:
   - Design a single unified input with embedded right-hand "Apply" button (`rounded-xl` or `rounded-[var(--radius-sm)]` with internal action), reducing height.
