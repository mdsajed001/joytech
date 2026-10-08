## Purpose

Defines responsive padding and visual density standards for product card bodies to ensure optimal space utilization and even 4-sided margins on mobile viewports.

## ADDED Requirements

### Requirement: Even Compact Padding in Phone View
The system SHALL apply an even, compact 8px padding (`p-2`) around all four sides of the product card body on mobile viewports narrower than 640px, and preserve 12px padding (`sm:p-3`) on tablet and desktop screens.

#### Scenario: View product card on mobile screens
- **WHEN** user views a product card on a viewport narrower than 640px
- **THEN** the product card body SHALL apply 8px padding uniformly across top, right, bottom, and left sides

#### Scenario: View product card on desktop screens
- **WHEN** user views a product card on a viewport 640px or wider
- **THEN** the product card body SHALL apply 12px padding (`sm:p-3`) across all four sides

### Requirement: Visual Alignment Across Card Body Content
The system SHALL ensure brand label, product title, star ratings, and the pricing/Buy Now CTA row fit comfortably without visual overflow inside the reduced padding boundaries.

#### Scenario: Internal elements spacing under compact padding
- **WHEN** a product card renders with 8px padding on mobile
- **THEN** the text, star rating, and price/Buy Now button row SHALL maintain appropriate internal gaps and remain fully legible without colliding with card borders
