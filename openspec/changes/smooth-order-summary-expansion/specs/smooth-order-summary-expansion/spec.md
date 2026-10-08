## Purpose

Defines the calibrated clearance gap scroll trigger and continuous CSS Grid drawer expansion for the mobile Order Summary sheet on the cart page.

## ADDED Requirements

### Requirement: Calibrated Scroll Clearance Gap
The system SHALL require the user to scroll completely past the "You Might Also Like" recommendations and clear a dedicated clearance gap before auto-expanding the mobile Order Summary sheet.

#### Scenario: User browsing recommendations
- **WHEN** user scrolls into and views the "You Might Also Like" recommendation rail
- **THEN** the mobile Order Summary sheet remains in its collapsed compact state and does not expand

#### Scenario: User scrolling past recommendations and gap
- **WHEN** user scrolls past the entire "You Might Also Like" rail and clears the buffer gap
- **THEN** the mobile Order Summary sheet automatically initiates its smooth upward expansion

### Requirement: Continuous Fluid Drawer Expansion
The mobile Order Summary sheet SHALL animate between collapsed and expanded states using continuous CSS transitions without sudden height jumps or visual layout snapping.

#### Scenario: Expanding the order summary
- **WHEN** expansion is triggered via scroll past the gap or by tapping the summary header
- **THEN** the drawer unrolls upward smoothly over an animated easing curve without snapping

#### Scenario: Collapsing the order summary
- **WHEN** user scrolls back up into the recommendations or taps the collapse button
- **THEN** the drawer rolls back down into the compact bottom bar smoothly

### Requirement: Header Morph and Single CTA Invariant
The system SHALL ensure exactly one active Checkout CTA button is rendered on the screen at all times on mobile viewports.

#### Scenario: Collapsed state CTA
- **WHEN** the bottom sheet is collapsed
- **THEN** the single Checkout CTA button is displayed in the compact header row

#### Scenario: Expanded state CTA
- **WHEN** the bottom sheet expands
- **THEN** the header button transforms into a Collapse toggle, and the primary Proceed to Checkout CTA is displayed inside the unrolled summary body
