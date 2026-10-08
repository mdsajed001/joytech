## Purpose

Provides catalog search capabilities allowing customers to find accessories by keywords, brands, phone models, categories, and attributes, complete with faceted filtering, multi-criteria sorting, and responsive product card presentation.

## ADDED Requirements

### Requirement: Search Form Navigation
The search system SHALL navigate the user to `/search?q=<query>` upon form submission (pressing Enter or tapping the search CTA button) rather than navigating on intermediate keystrokes or solely showing a toast notification.

#### Scenario: User submits query with Enter key
- **WHEN** the user types "spigen" into the search field and presses the Enter key
- **THEN** the system navigates to `/search?q=spigen` and closes any active mobile search overlay

#### Scenario: User clicks or taps Search CTA button
- **WHEN** the user types "charger" into the search field and activates the Search CTA button
- **THEN** the system navigates to `/search?q=charger` and closes any active mobile search overlay

#### Scenario: User submits an empty or whitespace query
- **WHEN** the user submits an empty search input or only whitespace
- **THEN** the system maintains the current view without navigating or performing an invalid search

---

### Requirement: Query Matching and Catalog Filtering
The search catalog engine SHALL match search terms against product names (English and Bengali), brand names, category identifiers, compatible phone model slugs, and feature keywords.

#### Scenario: Multi-token keyword search
- **WHEN** the user searches for "iphone 16 spigen"
- **THEN** the results include all products whose titles, brands, or compatible phone models match both "iphone 16" and "spigen"

#### Scenario: Compatible model search
- **WHEN** the user searches for "s24 ultra"
- **THEN** the results include accessories tagged with the "galaxy-s24-ultra" compatible model even if the product title does not explicitly contain "s24"

#### Scenario: Bengali title search
- **WHEN** the user searches for "চার্জার"
- **THEN** the results include products whose `nameBn` contains the specified Bengali characters

---

### Requirement: Desktop Left Sidebar Filtering
The search results page SHALL render a sticky left sidebar filter on desktop viewports allowing users to refine results by category, brand, price range, and stock availability.

#### Scenario: User filters by brand in desktop sidebar
- **WHEN** the user selects the "Anker" brand checkbox in the sidebar
- **THEN** the product grid updates to display only Anker products matching the search query

#### Scenario: User filters by in-stock availability
- **WHEN** the user toggles the "In Stock Only" switch
- **THEN** products with zero inventory or `inStock: false` are excluded from the grid

#### Scenario: User clears active filters
- **WHEN** the user clicks the "Clear All Filters" button
- **THEN** all filter selections reset to default and all search matches for the current query are displayed

---

### Requirement: Mobile Filter Drawer and Controls
The search results page SHALL provide a mobile-optimized filter experience with a compact trigger button and a slide-up filter sheet matching the desktop filter criteria.

#### Scenario: User opens filter drawer on mobile
- **WHEN** the user taps the "Filter" button on a viewport width below 768px
- **THEN** a bottom-sheet modal slides up displaying category, brand, price, and stock options with an "Apply Filters" button

#### Scenario: User applies filters on mobile
- **WHEN** the user selects filter criteria in the mobile drawer and taps "Apply Filters"
- **THEN** the drawer closes and the product grid reflects the selected criteria

---

### Requirement: Result Sorting
The search results page SHALL allow users to sort filtered items by Relevance, Price: Low to High, Price: High to Low, Highest Rated, and Highest Discount.

#### Scenario: Sort by price ascending
- **WHEN** the user selects "Price: Low to High" from the sort selector
- **THEN** the product cards are reordered from lowest price to highest price

#### Scenario: Sort by relevance
- **WHEN** the user selects "Relevance"
- **THEN** the products with highest text similarity and matching attributes appear first

---

### Requirement: Product Grid and Card Actions
Matching search results SHALL be displayed in responsive grid cards using `ProductCard.svelte` with full support for quick add-to-cart and navigation to product detail pages.

#### Scenario: User adds a search result to cart
- **WHEN** the user clicks "Add to Cart" on a product card in the search grid
- **THEN** the product is added to `cartState` and the cart counter animates with a toast confirmation

#### Scenario: User navigates to product details
- **WHEN** the user clicks the title or image of a product card
- **THEN** the application navigates to `/product/<slug>`

---

### Requirement: Zero-Results Fallback Experience
When a query produces zero matching catalog items, the search results page SHALL display a helpful empty state with search suggestions and recommended genuine accessories.

#### Scenario: Query with no catalog matches
- **WHEN** the user searches for a query that has zero matches in the catalog
- **THEN** the page displays a "No products found" notice, suggested search pills, and a curated grid of popular best-seller items
