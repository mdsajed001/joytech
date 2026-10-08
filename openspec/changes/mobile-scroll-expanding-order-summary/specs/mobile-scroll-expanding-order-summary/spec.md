## Purpose

Defines the single-CTA mobile checkout architecture on the cart page, providing a scroll-responsive bottom sheet that automatically expands into the full Order Summary when the user scrolls past "You Might Also Like".

## ADDED Requirements

### Requirement: Single Mobile Checkout CTA
On mobile viewports (`< 1024px`), the system SHALL render only one active Checkout CTA button on the screen at any time, eliminating the duplicate button inside the in-flow column.

#### Scenario: Viewing cart on mobile viewport
- **WHEN** user views the cart on a mobile device
- **THEN** only one Checkout CTA is visible, integrated into the bottom sticky surface, and the static card in the main column is hidden

### Requirement: Scroll-Triggered Bottom Sheet Expansion
The mobile bottom sheet SHALL remain in a compact bar state while browsing items and SHALL smoothly expand upward into the full Order Summary breakdown when the user scrolls past the "You Might Also Like" section.

#### Scenario: Scrolling down to the bottom of the cart
- **WHEN** user scrolls past the "You Might Also Like" section
- **THEN** the bottom sheet automatically expands upward, displaying subtotal, delivery fee, Joy Club redeem toggle, savings, promo code input, and grand total

#### Scenario: Scrolling back up to the cart items
- **WHEN** user scrolls back up into the cart items list
- **THEN** the bottom sheet smoothly collapses back down into the compact single-line bar

### Requirement: Manual Peek Affordance
The mobile bottom sheet SHALL support manual tap-to-toggle so users can view or dismiss the full summary breakdown at any scroll position.

#### Scenario: Tapping the compact bottom bar
- **WHEN** user taps the total amount or expand handle on the compact bar
- **THEN** the sheet toggles between expanded and collapsed states

### Requirement: Full-Bleed Mobile Geometry
The expanded mobile Order Summary SHALL stretch from phone edge to phone edge (`0px` to `100vw`) without container side padding cuts and SHALL sit flush directly above the bottom navigation bar.

#### Scenario: Inspecting expanded sheet layout
- **WHEN** the bottom sheet is in its expanded state on a phone
- **THEN** it extends full width (`left: 0; right: 0;`), features top rounded corners (`rounded-t-2xl`), has square bottom corners (`rounded-b-none`), and sits at `bottom-14` flush above the bottom nav
