## Purpose

Enables single-thread product variants where every option combination (such as color, finish, wattage, and capacity) is displayed as an interactive card featuring a direct image thumbnail, compound label, and price, with real-time gallery photo synchronization.

## ADDED Requirements

### Requirement: Unified Single-Thread Variant Representation
The system SHALL present product options within a single unified selector thread rather than fragmented multi-attribute dropdowns. Each variant item SHALL contain a unique identifier, compound title (e.g., `Red • 64W`, `Blue • 64W`), image thumbnail, price, and stock status.

#### Scenario: Viewing a multi-attribute accessory
- **WHEN** customer views a product with multiple power ratings and colors (such as 30W and 64W chargers in Red and Blue)
- **THEN** all available configurations are listed in a single unified thread without dead-end combination states.

---

### Requirement: Interactive Variant Card Layout with Image and Label
The system SHALL render each variant option as an interactive card containing a 36px–44px product photo thumbnail on the left, compound label, and optional price. The active variant SHALL be distinctly marked with a prominent brand highlight border, ring, and selection indicator.

#### Scenario: Selecting a variant option
- **WHEN** customer taps or clicks on a variant card (such as `Blue • 64W`)
- **THEN** that variant card is highlighted with the active selection border and checkmark, and the active variant label updates accordingly.

---

### Requirement: Hero Gallery Image Synchronization
The system SHALL synchronize the main product hero gallery image with the selected variant. When a customer switches variants, the primary photo preview SHALL update to display that variant's dedicated photo.

#### Scenario: Customer taps a different color/style variant
- **WHEN** customer selects the `Blue • 64W` variant card
- **THEN** the main hero image preview in the gallery immediately switches to the corresponding Blue charger photograph.

---

### Requirement: Per-Variant Price and Stock Dynamic Updates
The system SHALL dynamically update the product price, savings badge, stock status badge, and sticky bottom purchase bar to reflect the pricing and stock of the selected variant.

#### Scenario: Selecting a variant with higher wattage and price
- **WHEN** customer switches from `Red • 30W` (৳1,950) to `Red • 64W` (৳2,850)
- **THEN** the main pricing block and the mobile sticky bottom bar update to display ৳2,850.

---

### Requirement: Cart State Integration with Selected Variant Data
The system SHALL pass the selected variant's title, image thumbnail, and price to `cartState.addItem` so that the shopping cart and checkout line items clearly identify the exact variant chosen.

#### Scenario: Adding a specific variant to cart
- **WHEN** customer taps "Add to Cart" or "Buy Now" with `Red • 64W` selected
- **THEN** the item is added to the cart store with the label including `Red • 64W` and its specific thumbnail image.
