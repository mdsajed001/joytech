## Purpose

Cleans up the legacy slide-over phone drawer and resets navigation items to static, inert labels while a new Shop by Phone concept is designed.

## ADDED Requirements

### Requirement: Removal of Slide-Over Drawer
The system SHALL NOT render or trigger any slide-over phone model drawer across desktop, mobile, and shopping flows.

#### Scenario: Interacting with Shop by Phone on desktop
- **WHEN** the user views or clicks the "★ Shop by Phone" link in the desktop secondary navigation bar
- **THEN** no drawer opens and the page remains in its current view without unintended side-effects.

#### Scenario: Interacting with Shop by Phone on mobile
- **WHEN** the user opens the mobile navigation drawer
- **THEN** "Shop by Phone" is displayed as a clean menu item row in its existing position without any promotional banner, brand selector buttons, or drawer triggers.

#### Scenario: Clicking promotional banners or empty cart actions
- **WHEN** the user views promotional sliders or empty cart screens
- **THEN** no interactive control attempts to open the legacy phone drawer.
