## Purpose

Defines the display presentation and action button hierarchy for the bottom sticky bar on product detail pages.

## ADDED Requirements

### Requirement: Vertical Price Presentation in Sticky Bar
The sticky bar SHALL display the original price (if discounted) stacked directly above the current active price without displaying inventory stock status text.

#### Scenario: Discounted product price display
- **WHEN** a user views a product with a discounted price
- **THEN** the original price is rendered on top with a strikethrough styling and the active selling price is rendered directly underneath in bold primary typography

#### Scenario: Regular priced product display
- **WHEN** a user views a product without any discount
- **THEN** only the active selling price is displayed without an original price or stock status badge

### Requirement: Sticky Bar CTA Height and Distinct Hierarchy
The sticky bar action buttons SHALL be rendered with an ergonomic height of 48px, presenting "Add to Cart" with an outlined accent design token and "Buy Now" as the primary emphasized action.

#### Scenario: Add to cart button styling
- **WHEN** the sticky bar is rendered for an in-stock product
- **THEN** the "Add to Cart" button is rendered with an outlined border using the project accent color (`var(--color-accent)`), transparent background, and accent text color

#### Scenario: Buy now button visual emphasis
- **WHEN** the sticky bar is rendered for an in-stock product
- **THEN** the "Buy Now" button is rendered with primary brand color, checkout animated shimmer, and solid white typography, maintaining visual dominance over "Add to Cart"

#### Scenario: Out of stock state
- **WHEN** the displayed product is out of stock
- **THEN** both the "Add to Cart" and "Buy Now" buttons are disabled with reduced opacity and appropriate disabled cursor styling
