## Purpose

Provides direct cart navigation and reactive micro-interaction feedback in the mobile top navigation header.

## ADDED Requirements

### Requirement: Mobile Top Cart Navigation Button
The mobile application header SHALL render a dedicated cart navigation button beside the mobile hamburger menu icon on viewports smaller than 640px.

#### Scenario: Mobile cart button visibility
- **WHEN** a user visits any page on a viewport width below 640px
- **THEN** an icon button with a shopping bag icon and an item count badge is rendered in the top header adjacent to the hamburger menu

#### Scenario: Mobile cart button navigation
- **WHEN** a user taps the mobile top cart button
- **THEN** the application navigates directly to the cart page (`/cart`)

### Requirement: Add to Cart Micro-Interaction Feedback
When a user adds an item to the shopping cart, the top mobile cart icon SHALL trigger a tactile nod animation and its count badge SHALL pop with an animated scale transition.

#### Scenario: Add to cart triggers icon nod
- **WHEN** an item is successfully added to the cart from any component or action button
- **THEN** the top cart icon performs the tactile `nod-lift-active` rightward nod and lift animation

#### Scenario: Add to cart triggers badge pop
- **WHEN** the cart count increases after an item is added
- **THEN** the count badge expands and snaps back with a spring scale pop animation, updating the displayed count
