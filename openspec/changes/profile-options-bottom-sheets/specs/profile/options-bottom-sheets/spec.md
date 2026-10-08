## Purpose

Defines user interface and behavioral requirements for Joy Telecom's 8 profile option bottom sheets, ensuring a high-density, uncluttered, brand-consistent mobile and desktop presentation.

## ADDED Requirements

### Requirement: Streamlined Bottom Sheet Shell and Navigation
The system SHALL display a responsive slide-over panel (bottom sheet on mobile viewports, side drawer on desktop viewports) featuring a streamlined header, count indicator, drag handle, and swift dismiss capabilities.

#### Scenario: Opening and closing an option sheet
- **WHEN** the customer taps any of the 8 profile action shortcuts (Orders, History, Wishlist, Reviews, Addresses, Returns, Promos, Request)
- **THEN** the system displays the corresponding bottom sheet with a max height bounded to 80-85vh on mobile, a drag-down handle, clear title, count badge where applicable, and close button, without extraneous marketing subtitle copy

### Requirement: Dense Horizontal Wishlist Display
The system SHALL present saved wishlist items in high-density horizontal list rows on mobile and desktop views, enabling immediate cart addition and removal.

#### Scenario: Viewing and adding wishlist item to cart
- **WHEN** the customer views the Wishlist sheet
- **THEN** the system displays each item with a 48px square image, product title, formatted active price, strike-through original price, a prominent 1-tap "Add to Cart" button, and a delete button, without redundant stock chips or descriptive paragraphs

### Requirement: High-Density Order History Presentation
The system SHALL render customer orders with clear delivery status, compact product thumbnails, and immediate reorder/tracking actions without verbose repetitive labels.

#### Scenario: Reviewing order status and tracking
- **WHEN** the customer opens Orders or History
- **THEN** the system displays each order with order number, date, concise status pill, item thumbnails with quantities, total amount, and quick buttons for "Track Shipment" and "Buy Again"

### Requirement: Compact Delivery Address Management
The system SHALL display saved delivery addresses in a space-efficient card layout and provide a non-intrusive form for adding destinations.

#### Scenario: Adding and switching default address
- **WHEN** the customer manages delivery destinations in the Addresses sheet
- **THEN** the system displays current addresses with recipient name, phone, compact address lines, default status indicator, and an expandable inline form with tag selectors (Home, Office, Other) that does not obscure the viewport

### Requirement: Curated Reviews and Compact Rating Submission
The system SHALL show customer reviews in streamlined verified-buyer cards and provide an inline rating submission form.

#### Scenario: Submitting a product review
- **WHEN** the customer opens the Reviews sheet and submits rating feedback
- **THEN** the system renders an interactive 5-star selector, compact comment field, and submit button, displaying previous reviews with verified buyer badges and star ratings

### Requirement: Intuitive Replacement Guarantee and Return Claims
The system SHALL offer a reassuring 7-day guarantee overview, interactive order/reason selection, and direct WhatsApp hotline access for returns.

#### Scenario: Filing a return claim
- **WHEN** the customer accesses the Returns sheet
- **THEN** the system provides a clean guarantee summary card, order selection selector, reason selection selector, submission button, and a direct WhatsApp hotline link

### Requirement: Voucher Ticket Styling for Promo Codes
The system SHALL display promotional discounts and coupons as interactive voucher cards with 1-tap copy capabilities.

#### Scenario: Copying a promo code
- **WHEN** the customer views active promotions in the Promos sheet and taps a coupon code
- **THEN** the system copies the promo code to the clipboard, triggers a confirmation toast, and displays the discount value, single-line condition (`Min. ৳X • Till Date`), and copy action

### Requirement: Quick Concierge Accessory Sourcing Request
The system SHALL provide a focused, low-friction sourcing form for unavailable phone accessories.

#### Scenario: Submitting a sourcing request
- **WHEN** the customer submits a request in the Request sheet
- **THEN** the system captures phone model, accessory type, and contact phone, displaying instantaneous submission confirmation and clearing the form
