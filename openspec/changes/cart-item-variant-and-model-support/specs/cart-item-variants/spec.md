## Purpose

Provides distinct line item management and clear visual badge presentation for product variants and selected phone models across desktop and mobile carts.

## ADDED Requirements

### Requirement: Distinct Cart Line Items by Variant and Model
The system SHALL treat items of the same product with different selected variants or different compatible phone models as independent cart line items, each with its own quantity and unique line item identifier.

#### Scenario: Adding same product with different variants
- **WHEN** a user adds an accessory in variant A and then adds the same accessory in variant B
- **THEN** the cart SHALL contain two separate line items, each initialized with their respective quantities.

#### Scenario: Adding same product with same variant and model
- **WHEN** a user adds an accessory with the exact same variant and phone model selection that already exists in the cart
- **THEN** the system SHALL increment the quantity of the existing line item rather than creating a duplicate row.

### Requirement: Cart Item Boxy Badge for Variant and Model
The cart item card SHALL render a compact, non-rounded boxy badge (`rounded-[var(--radius-sm)]`) directly below the product title whenever a variant or phone model is associated with that line item.

#### Scenario: Item with both variant and phone model
- **WHEN** a cart item has both a selected variant and a selected phone model
- **THEN** the cart card SHALL display a single boxy badge containing both the variant title and the phone model name separated by a divider dot.

#### Scenario: Mobile viewport display
- **WHEN** viewed on narrow mobile screens ("phone cards cart")
- **THEN** the boxy badge SHALL fit within the item text column and truncate gracefully without overflowing or forcing abnormal card heights.

### Requirement: Independent Quantity and Removal Operations
The cart controls (increment, decrement, remove, and move to wishlist) SHALL operate specifically on the targeted line item identifier.

#### Scenario: Updating quantity of one variant
- **WHEN** a user increments the quantity of variant A in the cart
- **THEN** only variant A's quantity SHALL increase, leaving all other line items unaffected.

#### Scenario: Removing one variant
- **WHEN** a user removes variant A from the cart
- **THEN** only variant A SHALL be removed from the cart, while other variants of that product remain in the cart.
