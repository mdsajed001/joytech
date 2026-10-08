## Purpose

Defines visual and interaction requirements for product cards, unifying discount presentation to a single top badge, vertically stacking strikethrough prices above active prices, and providing a responsive "Buy Now" CTA button.

## ADDED Requirements

### Requirement: Single Source Discount Presentation
The product card SHALL display discount percentage exclusively via the top image overlay badge and SHALL NOT render a duplicate savings line in the pricing footer.

#### Scenario: Discount badge on image only
- **WHEN** a product has a discount percentage or original price higher than the active price
- **THEN** the discount percentage is displayed in the badge at the top-left of the product image
- **AND** no duplicate "Save ৳... (%)" text is displayed below the price

### Requirement: Vertical Price Stacking
The product card SHALL stack any strikethrough original price directly on top of the active price.

#### Scenario: Product with discount price
- **WHEN** a product has an original price greater than the active price
- **THEN** the original crossed-off price renders directly above the bold active price
- **AND** the active price sits below the crossed-off price

#### Scenario: Product without discount price
- **WHEN** a product does not have an original price or the original price equals the active price
- **THEN** only the active price is rendered without any crossed-off price above it

### Requirement: Responsive Buy Now CTA Button
Product cards SHALL render a high-intent "Buy Now" button replacing the shopping bag icon button.

#### Scenario: Desktop viewport button text
- **WHEN** viewed on a screen >= 640px
- **THEN** the button displays "Buy Now" accompanied by a mini icon
- **AND** clicking the button adds the product to cart and displays an instant confirmation toast

#### Scenario: Mobile viewport button text
- **WHEN** viewed on a screen < 640px
- **THEN** the button displays "Buy" accompanied by a mini icon
- **AND** clicking the button adds the product to cart and displays an instant confirmation toast
