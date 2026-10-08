## Purpose

Defines a clean, unified visual hierarchy for the product header, metadata, social proof, and pricing layout on the product details page.

## ADDED Requirements

### Requirement: Unified Top Metadata Row with Inline Status and Stock
The product header SHALL render a single top row containing the brand name, an inline text-based product status label (such as `New Arrival` or `Best Seller`) without pill badge containers, and the real-time stock availability indicator aligned on the right.

#### Scenario: Product with brand, status, and stock
- **WHEN** a user views a product with status flags (e.g. `isNewArrival` or `isBestSeller`)
- **THEN** the brand is displayed followed by a dot separator and the status text (e.g. `BASEUS • New Arrival`) on the left
- **AND** the stock status (e.g. `● In Stock (7)` in emerald or `● Out of Stock` in rose) is rendered on the right side of the same top row

#### Scenario: Product without status flags
- **WHEN** a user views a product without `isNewArrival` or `isBestSeller`
- **THEN** only the brand is displayed on the left and the stock indicator is displayed on the right

### Requirement: Social Proof with Retained Reviews Hyperlink
The product header SHALL display the product title followed immediately by the star rating, numerical score, and an underlined clickable review count hyperlink that triggers smooth scrolling to the product reviews section.

#### Scenario: Clicking review link
- **WHEN** the user clicks or taps on the underlined review count (e.g. `(54 reviews)`)
- **THEN** the page smoothly scrolls to the product reviews anchor

### Requirement: Single-Line Baseline Pricing and Inline Savings
The product pricing section SHALL present the active price, original strikethrough price (when discounted), and discount percentage with savings text inline along a single horizontal baseline without bulky badge borders or secondary rows.

#### Scenario: Product has a discount
- **WHEN** the active price is lower than the original price
- **THEN** the current price, strikethrough original price, and savings text (e.g. `-13% (Save ৳900)`) are displayed side-by-side on the same line
- **AND** no secondary "You save" paragraph row or heavy pill badges are rendered

#### Scenario: Product has no discount
- **WHEN** the product is at its regular price
- **THEN** only the current active price is displayed cleanly on the pricing row
