## Purpose

Ensures seamless mobile shopping UX by presenting critical purchasing information (brand, title, rating, pricing, model, and variants) immediately below the product media gallery on phone viewports before displaying secondary specifications.

## ADDED Requirements

### Requirement: Direct Mobile Sequence Under Media Gallery
The system SHALL display the primary product purchase details section directly underneath the product media gallery on mobile viewports.

#### Scenario: Mobile shopper views product details page
- **WHEN** a customer loads a product page on a mobile viewport
- **THEN** the product media gallery appears first, immediately followed by the brand, product title, customer ratings, pricing breakdown with savings, phone model selector, and variant options.

#### Scenario: Secondary details positioned after purchase options on mobile
- **WHEN** a customer scrolls past the variant options on a mobile viewport
- **THEN** the delivery guarantee card, product accordion specifications, and customer reviews appear below the variant options.

---

### Requirement: Desktop Side-by-Side Buy-Box Integrity
The system SHALL preserve the side-by-side two-column split layout on desktop viewports.

#### Scenario: Desktop customer views product details page
- **WHEN** a customer views the product details page on a desktop viewport (`lg+`)
- **THEN** the left column contains the media gallery followed by the delivery guarantee card and specifications accordion, while the right column contains the sticky buy-box with product title, pricing, model and variant selectors, and desktop CTA buttons.
