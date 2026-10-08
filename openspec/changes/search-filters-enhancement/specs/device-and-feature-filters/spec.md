## Purpose

Extends search catalog filtering with device compatibility selection (Phone Brand and Model) and specialized hardware feature badges (MagSafe/Magnetic compatibility and active Promotional Deals).

## ADDED Requirements

### Requirement: Device Compatibility Selection
The search filtering system SHALL provide a phone brand and phone model selector allowing customers to filter search results by exact device compatibility.

#### Scenario: User filters by specific phone model
- **WHEN** the user selects the "Apple" brand and chooses "iPhone 16 Pro Max"
- **THEN** the product grid updates to show only items where `compatibleModels` includes "iphone-16-pro-max"

#### Scenario: User changes phone brand
- **WHEN** the user changes the brand selection from "Apple" to "Samsung"
- **THEN** the model dropdown resets and populates with Samsung phone models (e.g., Galaxy S24 Ultra, Galaxy S24+, Galaxy A55 5G)

#### Scenario: User clears device filter
- **WHEN** the user selects "All Devices" or clears the phone model selection
- **THEN** the device constraint is removed and products across all models are displayed

---

### Requirement: MagSafe Attribute Filter
The search filtering system SHALL allow users to filter products to only display MagSafe or magnetic alignment compatible accessories.

#### Scenario: User enables MagSafe filter
- **WHEN** the user checks or activates the "MagSafe / Magnetic" filter
- **THEN** the search results only display accessories whose feature list includes MagSafe, Magnetic, or wireless alignment technology

---

### Requirement: On Sale / Promotional Deal Filter
The search filtering system SHALL allow users to filter products to only display items that have an active discount or participate in flash sales.

#### Scenario: User enables On Sale filter
- **WHEN** the user checks the "On Sale / Deals" filter
- **THEN** the search results exclude items without a discount, displaying only products with `discountPercent > 0` or `isFlashSale: true`

---

### Requirement: Filter Synchronization & Removal Pills
Active device compatibility and feature filters SHALL display removable indicator pills in the search header and remain synchronized between the desktop sidebar and mobile filter drawer.

#### Scenario: User removes phone model filter via badge
- **WHEN** the user clicks the dismiss button on the active phone model badge
- **THEN** the phone model filter is cleared and the product grid immediately expands
