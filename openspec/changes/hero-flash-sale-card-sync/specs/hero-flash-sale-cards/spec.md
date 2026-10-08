## Purpose

Standardizes the desktop Hero Flash Sale spotlight cards to use the store's primary ProductCard layout (without star ratings and reviews) inside a vertically scrollable 2-column container.

## ADDED Requirements

### Requirement: ProductCard rating toggle
`ProductCard.svelte` SHALL support an optional `showRating` boolean prop (defaulting to `true`) that controls the visibility of the star rating and review count row.

#### Scenario: Rating displayed by default
- **WHEN** `<ProductCard {product} />` is rendered without specifying `showRating`
- **THEN** the star icon, numerical rating, and review count are displayed

#### Scenario: Rating omitted when showRating is false
- **WHEN** `<ProductCard {product} showRating={false} />` is rendered
- **THEN** the entire star rating and review count row is omitted, and the card layout remains cleanly aligned

### Requirement: Standardized card layout in Hero Flash Sale
The desktop Flash Sale spotlight module in `Hero.svelte` SHALL render flash deal cards using the standard ProductCard layout (gradient image thumbnail, discount badge, brand label, 2-line title, pricing, and Buy Now CTA) with `showRating={false}`.

#### Scenario: Flash sale card appearance
- **WHEN** the desktop Hero Flash Sale module renders
- **THEN** each deal card displays the standard ProductCard visual design and typography, with no star rating or review count visible

### Requirement: Scrollable 2-column inner track
The cards container in the desktop Hero Flash Sale module SHALL arrange cards in a 2-column grid (`grid-cols-2`) and be vertically scrollable (`overflow-y-auto`) within the module's fixed height.

#### Scenario: Scrolling flash sale deals
- **WHEN** the number of flash sale deal cards exceeds the immediate visible height
- **THEN** the user can scroll vertically inside the deals area to view additional cards while the countdown header and footer remain pinned in place

### Requirement: Deal count limit
The desktop Hero Flash Sale module SHALL display a limited count of flash deals (up to 6 products) rather than rendering an unbounded list.

#### Scenario: Limiting deal count
- **WHEN** flash sale products are loaded
- **THEN** only the top N products (up to 6) are rendered in the scrollable grid
