## Purpose

Enables customers to find guaranteed compatible accessories for their exact smartphone model through an intuitive two-step selection wizard directly on the homepage.

## ADDED Requirements

### Requirement: Brand Selection Step
The system SHALL present a grid of supported phone brands (Apple, Samsung, Google Pixel, Xiaomi) allowing immediate brand selection.

#### Scenario: User chooses a brand
- **WHEN** user clicks on a phone brand
- **THEN** system SHALL highlight the selected brand and immediately display available phone models for that brand

### Requirement: Phone Model Selection Step
The system SHALL display available phone models for the selected brand, allowing the user to pick their specific device.

#### Scenario: User chooses a phone model
- **WHEN** user selects a specific phone model (e.g. iPhone 16 Pro Max)
- **THEN** system SHALL show a verified compatibility confirmation banner and a direct call to action to view compatible accessories

### Requirement: Guaranteed Compatibility Navigation
The system SHALL allow the user to view accessories filtered specifically for their chosen phone model.

#### Scenario: Navigating to filtered accessories
- **WHEN** user clicks "View Compatible Accessories"
- **THEN** system updates the displayed product grid to only show items tagged as compatible with that device model
