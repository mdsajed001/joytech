## Purpose

Provides responsive entry triggers across the site to open the Shop by Phone drawer on desktop viewports and navigate to the dedicated wizard page on mobile devices.

## ADDED Requirements

### Requirement: Desktop Header Entry Trigger
The desktop secondary navigation bar SHALL provide an interactive "Shop by Phone" button that opens the Shop by Phone slide-over drawer when activated.

#### Scenario: User clicks desktop header trigger
- **WHEN** a user on a desktop viewport clicks the "Shop by Phone" button in the secondary navigation bar
- **THEN** the system sets the configurator drawer state to open and displays the slide-over drawer

### Requirement: Mobile Drawer Entry Trigger
The mobile navigation drawer SHALL provide an interactive "Shop by Phone" card that closes the menu drawer and navigates to the dedicated `/shop-by-phone` page.

#### Scenario: User taps mobile drawer CTA card
- **WHEN** a user on a mobile viewport taps the "Shop by Phone" breathing banner card in the mobile drawer
- **THEN** the system dismisses the mobile navigation drawer and navigates to `/shop-by-phone`

### Requirement: Promotional Banner Navigation
The second slide of the promotional banner slider SHALL direct users to the appropriate Shop by Phone experience based on viewport.

#### Scenario: User clicks promotional banner
- **WHEN** a user clicks or taps the "Shop by Phone Model" promotional banner
- **THEN** the system routes mobile users to `/shop-by-phone` or opens the configurator drawer on desktop
