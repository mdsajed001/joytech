## Purpose

Streamlines the price range filter interface by eliminating duplicate price text and unifying section reset controls.

## ADDED Requirements

### Requirement: Singular Price Value Display
The system SHALL present current minimum and maximum price values solely within the editable numeric input boxes beneath the range slider, omitting any duplicate text display above the slider.

#### Scenario: Viewing price range values
- **WHEN** the user views the price filter widget in either desktop sidebar or mobile drawer
- **THEN** the active min and max prices are shown inside the Min and Max numeric input boxes, and no redundant price string is rendered above the slider track.

#### Scenario: Adjusting slider handles updates input boxes
- **WHEN** the user drags either slider handle
- **THEN** the corresponding Min or Max input box updates its number in real time without any duplicate text label above the track.

---

### Requirement: Section Header Reset Integration
The system SHALL display the price filter Reset button aligned inside the Price Range section header whenever price filters are active.

#### Scenario: Resetting price from section header
- **WHEN** the user constrains the price filter (min > 0 or max < 10,000)
- **THEN** a "Reset" button appears on the right side of the "Price Range" section header.

#### Scenario: Clicking section header reset
- **WHEN** the user clicks "Reset" in the Price Range section header
- **THEN** minPrice returns to 0, maxPrice returns to 10,000, slider handles snap to bounds, and the Reset button disappears.

---

### Requirement: Top-Level Placement in Filter Panel
The system SHALL position the Price Range filter section at the top of the filter list in both the desktop search sidebar and the mobile search filter drawer.

#### Scenario: Displaying Price Range at the top
- **WHEN** the user opens or views search filters on desktop or mobile
- **THEN** the Price Range section appears first below the Filters title header, before Device Compatibility and category filters.
