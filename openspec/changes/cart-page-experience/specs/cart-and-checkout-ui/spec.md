## Purpose

Provides an authentic, high-converting shopping cart and checkout interface for Joy Telecom users to manage item quantities, apply promo codes and loyalty points, select delivery zones, calculate live totals, and place orders seamlessly.

## ADDED Requirements

### Requirement: Interactive Cart Item Management
The system SHALL display all products added to the shopping cart with model compatibility badges, unit prices, quantity controls `[-] [qty] [+]`, and actions to remove items or move them to the wishlist.

#### Scenario: User adjusts item quantity
- **WHEN** user clicks the `+` or `-` button on a cart item
- **THEN** the system updates the quantity between 1 and 10 and immediately recalculates the line total and subtotal

#### Scenario: User moves item to wishlist
- **WHEN** user clicks "Move to Wishlist" on an item
- **THEN** the system removes the product from the active cart, adds it to the user's saved wishlist, and displays a confirmation toast

### Requirement: Free Delivery Progress Meter
The system SHALL render a dynamic progress bar showing the remaining order amount required to qualify for free nationwide courier delivery (e.g., threshold of ৳2,500).

#### Scenario: Subtotal is below free delivery threshold
- **WHEN** cart subtotal is ৳1,800
- **THEN** progress bar fills to 72% and displays "Add ৳700 more for FREE nationwide delivery"

#### Scenario: Subtotal reaches or exceeds free delivery threshold
- **WHEN** cart subtotal is ৳2,800
- **THEN** progress bar fills to 100% and displays "You have unlocked FREE nationwide courier delivery!"

### Requirement: Delivery Zone Selection and Rates
The system SHALL allow users to select between "Inside Dhaka" (Standard ৳60 / Express ৳120) and "Outside Dhaka" (৳120 across all 64 districts) and dynamically update the delivery fee in the summary.

#### Scenario: User selects Outside Dhaka
- **WHEN** user selects the Outside Dhaka delivery option
- **THEN** delivery fee updates to ৳120 (or ৳0 if free delivery threshold is met) and the estimated delivery timeline updates to 48-72 hours

### Requirement: Promo Voucher and Joy Points Redemption
The system SHALL validate promo coupon codes (e.g. `JOYVIP500`, `EIDGIFT200`, `FREEDELIVERY`) and allow users to redeem Joy Loyalty Points for store credit.

#### Scenario: User applies valid coupon code
- **WHEN** user enters `JOYVIP500` and clicks Apply
- **THEN** the system applies ৳500 discount, displays a success badge, and subtracts the discount from the grand total

#### Scenario: User applies invalid coupon code
- **WHEN** user enters an invalid or expired code
- **THEN** the system shows a clear error message without altering the totals

### Requirement: Responsive Order Summary and Mobile Checkout Bar
The system SHALL present a sticky order summary on desktop viewports and a fixed bottom checkout action bar on mobile viewports.

#### Scenario: User views cart on mobile viewport
- **WHEN** screen width is less than 640px
- **THEN** a fixed bottom action bar displays the grand total and "Proceed to Checkout" button positioned above the bottom navigation bar

### Requirement: Simulated Checkout and Order Receipt Modal
The system SHALL open an order confirmation modal upon clicking Checkout, allowing selection of Cash on Delivery, bKash, Nagad, or Card, and displaying an invoice summary upon order placement.

#### Scenario: User places order with Cash on Delivery
- **WHEN** user confirms order with COD
- **THEN** the system generates an order confirmation with a unique Order Number (e.g., `#JT-9950`), clears the cart, and provides a "Track Order" button
