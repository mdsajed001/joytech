## Purpose

Defines requirements for unified in-place brand selection and real-time search within the Shop by Device configurator.

## ADDED Requirements

### Requirement: In-Place Brand Search and Real-Time Filtering
The configurator SHALL provide an in-place search input pill at the top of Step 2 (Brand Selection) that filters the displayed brands in real-time based on brand name, short name, and common regional aliases.

#### Scenario: Real-time filtering by brand name
- **WHEN** user enters a brand search query (e.g. "OnePlus" or "Apple")
- **THEN** the brand grid SHALL immediately filter to only display cards matching the query.

#### Scenario: Real-time filtering by brand alias
- **WHEN** user enters a regional alias (e.g. "Poco" or "Mi" for Xiaomi, or "Pixel" for Google)
- **THEN** the brand grid SHALL display the corresponding parent brand card matching that alias.

#### Scenario: Clearing brand search
- **WHEN** user clicks the clear button or clears the search input text
- **THEN** the brand grid SHALL immediately restore all available brands for the current device type.

### Requirement: Complete Unified Brand Grid Presentation
The configurator SHALL render all brands available for the selected device category directly in the grid without an artificial popular cutoff tile or secondary overlay layer.

#### Scenario: Displaying all category brands directly
- **WHEN** user advances to Step 2 for any device type (e.g. Phone, Tablet, Watch, or Audio)
- **THEN** all brands associated with that device type SHALL be rendered directly in the grid, allowing 1-tap selection without requiring an external modal.

#### Scenario: Empty search state with in-place reset
- **WHEN** user inputs a search query that matches no brands in the category
- **THEN** the configurator SHALL display an in-place empty message with a 1-tap action button to reset the search query.
