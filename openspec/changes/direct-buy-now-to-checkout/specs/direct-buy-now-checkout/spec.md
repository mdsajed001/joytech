## Purpose

Enforces universal direct-to-checkout routing whenever a customer clicks any "Buy Now" CTA across the entire store, bypassing intermediate cart pages to accelerate order placement.

## ADDED Requirements

### Requirement: Universal Direct Checkout Navigation on Buy Now
The system SHALL immediately add the selected item to the cart state and navigate the customer directly to the `/checkout` page whenever any "Buy Now" call-to-action is activated.

#### Scenario: Product card Buy Now click
- **WHEN** a customer clicks the "Buy Now" CTA on any product card (on the homepage, category sections, flash sale rails, search drawer, or offers page)
- **THEN** the system SHALL add the product to the active cart state and navigate directly to `/checkout`.

#### Scenario: Product details page Buy Now click
- **WHEN** a customer clicks the "Buy Now with 1-Click" CTA on a product details page
- **THEN** the system SHALL add the configured product with selected variant, quantity, and model selection to the cart state and navigate directly to `/checkout`.

#### Scenario: Sticky bottom bar Buy Now click
- **WHEN** a customer clicks the "Buy Now" CTA on the sticky bottom action bar of a product page
- **THEN** the system SHALL add the configured item to the cart state and navigate directly to `/checkout`.

### Requirement: State Preservation and Item Staging
The system SHALL ensure all selected product options (such as color variants, phone model compatibility, and item quantity) are preserved when staging the item before navigating to checkout.

#### Scenario: Product configuration staging before redirect
- **WHEN** a user activates a Buy Now action with specific variant or model selections
- **THEN** the active cart state SHALL store the exact selected variant ID, phone model slug, and quantity before the `/checkout` route initializes.
