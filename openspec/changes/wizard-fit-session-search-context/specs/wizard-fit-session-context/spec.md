## Purpose

Provides URL parameter synchronization for device-specific accessory filtering and displays a dedicated Fit Session reassurance context bar when users arrive at search results from the device configurator wizard.

## ADDED Requirements

### Requirement: Search Page Synchronizes Phone Model URL Parameter
The search page SHALL read the `phoneModel` query parameter from the current URL and synchronize it with the selected phone model filter on initial page load and URL navigation.

#### Scenario: User navigates from wizard with phoneModel query parameter
- **WHEN** user navigates to `/search?phoneModel=iphone-16-pro-max`
- **THEN** the search page sets the active phone model filter to `iphone-16-pro-max` and filters the product list to compatible accessories

#### Scenario: User navigates to search page without phoneModel query parameter
- **WHEN** user navigates to `/search` without `phoneModel` parameter
- **THEN** the search page maintains no active phone model filter by default

### Requirement: Wizard Fit Session Banner Display
The search page SHALL display a prominent Fit Session reassurance banner at the top of the search results if and only if the session has an active `phoneModel` query parameter originating from URL navigation (such as the device configurator wizard).

#### Scenario: Banner renders on wizard origin
- **WHEN** user arrives at `/search?phoneModel=galaxy-s24-ultra`
- **THEN** the Fit Session reassurance banner is displayed above the product results with the phone model and brand name clearly identified

#### Scenario: Banner does not render on manual sidebar filter selection
- **WHEN** user visits `/search` without `phoneModel` query parameter and selects a model via the sidebar filter
- **THEN** products are filtered by the selected model, but the Wizard Fit Session reassurance banner is NOT displayed

### Requirement: Fit Session Reassurance Messaging
The Fit Session banner SHALL communicate that all displayed products are guaranteed to fit the selected device model, and it SHALL NOT display product count numbers inside the banner.

#### Scenario: Reassurance copy rendering
- **WHEN** the Fit Session banner is rendered for model `pixel-9-pro-xl`
- **THEN** the banner displays "All products shown fit your Google Pixel 9 Pro XL" with a verified fit badge/icon and NO numeric count

### Requirement: Dismissing Wizard Fit Session
The Fit Session banner SHALL provide an interactive dismiss/clear action that removes the device filter and returns the catalog to an unfiltered state.

#### Scenario: User dismisses fit session
- **WHEN** user clicks the dismiss button on the Fit Session banner
- **THEN** the phone model filter is cleared, the `phoneModel` URL parameter is removed, and the banner is dismissed
