## Purpose

Provides Joy Telecom customers with a centralized and responsive account hub to view their profile, inspect past orders, track deliveries, manage saved delivery addresses, review wishlisted accessories, and adjust preferences.

## ADDED Requirements

### Requirement: Profile Overview and Tabbed Navigation
The profile hub SHALL display the customer's account summary (name, phone number, email, and VIP tier badge) along with quick counters for total orders, saved addresses, and wishlist items. The system SHALL provide responsive tabs allowing the customer to switch views between Orders, Addresses, Wishlist, and Settings without a full page reload.

#### Scenario: Switching between profile tabs
- **WHEN** the customer clicks or taps any navigation tab (e.g., "Addresses" or "Wishlist")
- **THEN** the active tab view immediately changes to display the selected section's content and the active tab is visually highlighted.

### Requirement: Order History and Delivery Tracking
The Orders section SHALL display a list of customer orders containing the order ID, order placement date, payment method, formatted total amount in BDT, status badge (e.g., "Processing", "Shipped", "Delivered"), and item thumbnails. Customers SHALL be able to expand or view tracking details showing a 6-stage order tracking progress stepper (Placed, Confirmed, Processing, Shipped, Out for Delivery, Delivered).

#### Scenario: Inspecting order tracking details
- **WHEN** the customer clicks the "Track Package" action on an order
- **THEN** a tracking modal or expanded view opens displaying the current stage, estimated delivery date, courier name, and step-by-step progress history.

### Requirement: Saved Delivery Addresses Management
The Addresses section SHALL display all saved delivery addresses formatted with recipient name, phone number, division, district, delivery address notes, and primary address indicator badge. Customers SHALL be able to select a primary address and toggle an add/edit address modal or form.

#### Scenario: Setting a default shipping address
- **WHEN** the customer clicks "Set as Default" on a non-default address card
- **THEN** that address becomes marked as the primary default address and the default badge updates accordingly.

### Requirement: Saved Wishlist Accessories Management
The Wishlist section SHALL display all saved favorite accessories including image, title, price, discount badge, and stock availability. Each in-stock item card SHALL provide an instant "Add to Cart" CTA that adds the product directly to the customer's shopping cart.

#### Scenario: Adding a wishlisted product to cart
- **WHEN** the customer clicks "Add to Cart" on a wishlisted item
- **THEN** the product is added to the shopping cart, the cart count in the header updates, and a confirmation feedback is displayed.

### Requirement: Account and Notification Settings
The Settings section SHALL allow customers to configure notification preferences (SMS delivery updates, WhatsApp updates, promotional alerts) and interface preferences (Language: English / বাংলা).

#### Scenario: Toggling notification preference
- **WHEN** the customer changes a notification switch (e.g., toggling SMS updates)
- **THEN** the setting updates immediately with visual confirmation.
