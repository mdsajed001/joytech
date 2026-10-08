## Why

The Order Summary component in the cart experience currently suffers from "box-in-a-box" nested modularity: Joy Club Points and Total Savings are encased in their own heavy bordered containers inside the card, while the coupon code and dashed chips occupy excessive vertical real estate with low visual hierarchy. Additionally, the green Total Savings text has poor contrast against its background. The card needs to be streamlined into a cohesive, unboxed receipt flow matching Joy Telecom's clean modern design system.

## What Changes

- **Eliminate Nested Boxes**: Remove inner bordered card wrappers around Joy Club Points and Total Savings, making them clean, native rows within the receipt breakdown.
- **Streamline Loyalty Points**: Integrate Joy Club Points into a compact, elegant unboxed row with an inline switch or redeem action.
- **Improve Contrast & Typography**: Replace the low-contrast Total Savings capsule with a crisp, accessible emerald discount line item (`-৳...`).
- **Simplify Promo Code Area**: Condense the coupon code input and suggestions into a sleek, compact single-line input group or collapsible toggle to prioritize financial clarity.
- **Reduce Hairline Dividers**: Remove excessive horizontal dividers, keeping only a single clean separator above the Grand Total.

## Capabilities

### New Capabilities
- `order-summary-unclutter`: Clean, unified receipt-style Order Summary without nested box borders or visual clutter.

### Modified Capabilities

## Impact

- [`src/lib/components/cart/OrderSummary.svelte`](file:///c:/Users/Sajed/Documents/joytech/src/lib/components/cart/OrderSummary.svelte)
