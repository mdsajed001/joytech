## Purpose

Provides a structured multi-category gadget catalog and interactive 3-step device selector supporting smartphones, tablets, smartwatches, and audio gear for Joy Telecom customers.

## ADDED Requirements

### Requirement: Multi-Category Device Catalog Data Loading
The system SHALL ingest the full device catalog from `src/lib/data/joy-telecom-device-tree.json`, exposing typed entities for device types (`phone`, `tablet`, `watch`, `audio`), brands, and models with release years, series tags, and popularity flags.

#### Scenario: Ingestion of all 4 supported device categories
- **WHEN** the application loads the device data module
- **THEN** it SHALL provide valid data structures for `phone`, `tablet`, `watch`, and `audio` without null pointer errors.

#### Scenario: Fallback safe access
- **WHEN** an invalid or unknown device category or brand ID is queried
- **THEN** the system SHALL return an empty array without throwing unhandled runtime exceptions.

### Requirement: Dynamic Brand Hierarchy and Filtering
The configurator UI SHALL dynamically display brands belonging specifically to the selected device type in Step 2, and support alias searching across brands.

#### Scenario: Display device-specific brand list
- **WHEN** user selects a device type such as "iPad & Tablet" or "Smartwatch" in Step 1
- **THEN** Step 2 SHALL display the brands associated with that device type (e.g. Apple, Samsung, Amazfit, Garmin) instead of default smartphone brands.

#### Scenario: Brand search overlay matches brand names and aliases
- **WHEN** user opens the "More Brands" searchable modal in Step 2 and types a brand name or alias (such as "Poco", "Redmi", "Narzo", or "CMF")
- **THEN** the modal SHALL match the parent brand (e.g. Xiaomi, Realme, Nothing) based on its defined aliases.

### Requirement: Series-Grouped Model Selection and Instant Search
In Step 3, the configurator SHALL present models belonging to the selected brand and device category, organized by series chips with an instant text filter that matches names and regional aliases.

#### Scenario: Dynamic series chips for selected brand
- **WHEN** user selects a brand in Step 2
- **THEN** Step 3 SHALL compute distinct series filter chips (e.g., "All", "iPhone 16 Series", "Galaxy S24 Series", "iPad Pro Series") derived directly from that brand's model catalog.

#### Scenario: Real-time model text search with alias matching
- **WHEN** user types into the model search input field in Step 3 matching either a primary model name or an alternative regional alias (e.g., "Ace 3" for OnePlus 12R, or "K70" for Poco F6 Pro)
- **THEN** the model list SHALL instantly filter and display the matching model, showing the matched alias where appropriate.

### Requirement: Multi-Step Navigation and Backward Progression
The configurator SHALL preserve previous choices when navigating between steps and allow one-tap return via the back button from Step 2 onwards.

#### Scenario: User clicks back button on Step 2
- **WHEN** user is on Step 2 (Brand) and clicks the back button
- **THEN** the wizard SHALL return to Step 1 (Device Type) and clear downstream brand and model selections.

#### Scenario: User completes model selection
- **WHEN** user clicks on a model card in Step 3
- **THEN** the wizard SHALL transition to the verified fit view and allow navigation to accessories filtered by that exact model slug.
