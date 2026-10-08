## Purpose

Defines visual and structural requirements for a clean, unboxed receipt flow in the Order Summary component.

## ADDED Requirements

### Requirement: Unboxed Receipt Layout
The Order Summary SHALL render financial calculations (Subtotal, Delivery Fee, Points Credit, Coupon Discount, Total Savings, Grand Total) as a single cohesive receipt list without nested bordered containers or internal card boxes.

#### Scenario: Customer views order summary
- **WHEN** user views the cart order summary
- **THEN** line items display directly on the card surface without nested bounding boxes around points or savings

### Requirement: Accessible High-Contrast Discount Display
All savings and discounts SHALL meet WCAG AAA contrast ratios using vivid emerald colors on surface background instead of low-contrast tinted capsules.

#### Scenario: Customer has active savings
- **WHEN** customer items have discounts or customer applies coupons
- **THEN** total savings displays as a clean `-৳...` line item with high contrast readable text

### Requirement: Compact Promo Code Interaction
The coupon entry field SHALL be compact and integrated, allowing coupon application without dominating the card's vertical layout.

#### Scenario: Customer enters a coupon
- **WHEN** customer types a valid coupon code and submits
- **THEN** coupon discount is deducted and applied tag is displayed seamlessly
