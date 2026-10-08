## Purpose

Specifies the layout realignment for the product details page header: integrating review proof into the top metadata line, omitting stock count, and stacking original price above active price with right-aligned savings.

## ADDED Requirements

### Requirement: Top Metadata Row with Brand and Reviews Link
The product header SHALL render a single top row featuring the brand name and status text on the left, and the star rating, numerical rating, and clickable reviews hyperlink on the right, omitting any in-stock inventory count.

#### Scenario: Viewing product header on details page
- **WHEN** a user views a product details page
- **THEN** the brand (and optional status like `• Best Seller`) is displayed on the left of the top metadata row
- **AND** the star rating, score, and underlined review count link (e.g. `★★★★☆ 4.8 (342 reviews)`) are rendered on the right side of the same top row
- **AND** no in-stock pill or inventory badge is displayed in this header row

### Requirement: Stacked Original Price Above Active Current Price
In the product pricing section, when a product is discounted, the original strikethrough price SHALL render directly above the prominent active price on the left side of the container.

#### Scenario: Product is discounted
- **WHEN** the product has an active price lower than its original price
- **THEN** the strikethrough original price (e.g. `৳3,000`) is displayed on top
- **AND** the large active price (e.g. `৳2,450`) is displayed directly beneath it

#### Scenario: Product is not discounted
- **WHEN** the product has no discount
- **THEN** only the active price is displayed with no strikethrough text above it

### Requirement: Right-Aligned Discount and Savings Text
When a product has a discount, the savings calculation text SHALL be aligned to the right side of the pricing row, bottom-aligned with the active price.

#### Scenario: Displaying savings text
- **WHEN** the product is discounted
- **THEN** the discount percentage and saved amount (e.g. `-18% (Save ৳550)`) are displayed in accent rose text on the right side of the pricing container
