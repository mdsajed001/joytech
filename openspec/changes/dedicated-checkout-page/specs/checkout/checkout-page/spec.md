## Purpose

Provides a dedicated full-page checkout experience that replaces the modal, featuring a full order summary, selected address with change capability, payment method picker, policy agreement, and verified order placement.

## ADDED Requirements

### Requirement: Dedicated Checkout Page Route
The system SHALL serve a dedicated page at `/checkout` replacing the previous modal overlay. If the shopping cart contains 0 items, the system MUST redirect the user to `/cart`.

#### Scenario: Navigating to checkout with cart items
- **WHEN** the customer navigates to `/checkout` with 1 or more items in the cart
- **THEN** the system displays the dedicated checkout page with full order summary, address card, payment methods, and policy agreement

#### Scenario: Navigating to checkout with an empty cart
- **WHEN** the customer visits `/checkout` with an empty cart
- **THEN** the system immediately redirects the user to `/cart`

### Requirement: Distraction-Free Checkout Header
The checkout page MUST be served in a distraction-free environment, omitting the global store announcement bar, main header, search bar, and drawer navigation. The checkout page MUST display a dedicated blue top bar containing Joy Telecom branding, back-to-cart link, and secure checkout trust indicators. Shipping rates MUST be automatically derived from the selected delivery address without presenting a manual Dhaka/Outside Dhaka toggle.

### Requirement: Full Order Summary Review
The checkout page MUST display a comprehensive order summary listing all items with product images, titles, variants, quantities, unit prices, delivery fee, discounts, and the grand total.

#### Scenario: Reviewing order details
- **WHEN** the customer views the Order Summary section on the checkout page
- **THEN** the system displays each cart item with thumbnail, name, variant, qty, line price, plus an itemized breakdown of subtotal, delivery fee, voucher discounts, and grand total

### Requirement: Selected Delivery Address and Switcher
The checkout page MUST display the customer's selected delivery address in a clean card format and MUST provide an intuitive "Change" option to select from existing saved addresses or enter a new shipping destination.

#### Scenario: Viewing active address
- **WHEN** the checkout page renders
- **THEN** the system shows the primary selected address with recipient name, contact phone, and full delivery location

#### Scenario: Changing delivery address
- **WHEN** the customer clicks the "Change" action on the address card
- **THEN** the system displays an address switcher allowing selection of any alternate saved address or inputting a new destination, immediately updating the active address on selection

### Requirement: Payment Method Selection
The checkout page MUST allow the customer to choose between at least four payment methods: Cash on Delivery, bKash Online, Nagad, and Debit/Credit Card, with Cash on Delivery preselected by default.

#### Scenario: Switching payment method
- **WHEN** the customer taps "bKash Online"
- **THEN** the system marks bKash as selected with active brand styling, deselecting other payment options

### Requirement: Terms and Policy Agreement
The checkout page MUST present a mandatory policy agreement checkbox requiring the user to agree to the store's Terms of Service and 7-Day Return & Replacement Policy before placing the order.

#### Scenario: Attempting to proceed without agreeing to policy
- **WHEN** the customer clicks the proceed button while the policy checkbox is unchecked
- **THEN** the system prevents order submission and alerts the customer to agree to the terms and refund policy

### Requirement: Order Placement and Receipt Confirmation
The checkout page MUST validate that address, payment method, and policy agreement are satisfied, process the order, clear the active cart, and display a comprehensive in-page success confirmation receipt.

#### Scenario: Successful order placement
- **WHEN** the customer satisfies all requirements and clicks "Confirm & Place Order"
- **THEN** the system creates the order, clears the cart, and presents an in-page receipt with order number, estimated delivery date, selected address, and total amount
