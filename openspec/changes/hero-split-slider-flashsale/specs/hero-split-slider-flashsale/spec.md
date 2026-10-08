## Purpose

Provides a high-conversion, edge-to-edge desktop hero section featuring a split 65% promotional banner slider and 35% live Flash Sale spotlight module, optimizing above-the-fold engagement while maintaining seamless mobile continuity.

## ADDED Requirements

### Requirement: Edge-to-edge desktop split hero layout
On desktop viewports (1024px and wider), the hero section SHALL render edge-to-edge across the full viewport width with a 65% / 35% horizontal split between the promotional banner slider and the Flash Sale spotlight module.

#### Scenario: Desktop view rendering
- **WHEN** a user visits the homepage on a screen 1024px or wider
- **THEN** the hero section expands to full width, displaying promotional banners on the left (65% width) and the Flash Sale module on the right (35% width) side-by-side with matched heights

### Requirement: Live Flash Sale spotlight module in desktop hero
The right section of the desktop hero SHALL render a live Flash Sale module featuring a real-time countdown timer, up to 40% off badge, a compact 2x2 grid of flash deal products, and direct "Add to Cart" functionality.

#### Scenario: Flash sale countdown ticking
- **WHEN** the desktop hero is displayed
- **THEN** the countdown timer updates every second showing remaining hours, minutes, and seconds until the sale ends

#### Scenario: Adding flash sale product to cart
- **WHEN** the user clicks "Add" on a flash sale product card inside the hero spotlight
- **THEN** the item is added to the cart, the cart count increments, and a toast notification confirms the addition

### Requirement: Desktop slider navigation controls
The promotional banner slider SHALL support desktop mouse interaction with left and right navigation arrow buttons on hover as well as clickable pagination dot indicators.

#### Scenario: Clicking next banner arrow
- **WHEN** a desktop user clicks the right slider arrow
- **THEN** the slider transitions smoothly to the next promotional banner slide

#### Scenario: Clicking banner 2 trigger
- **WHEN** a user clicks promotional banner slide 2 (Shop by Phone Model)
- **THEN** the Shop by Phone modal opens

### Requirement: Desktop deduplication of lower flash sale section
The standalone lower Flash Sale section below the Category chips SHALL be hidden on desktop viewports (1024px and wider) to prevent redundant display of the same flash sale items.

#### Scenario: Desktop page scrolling
- **WHEN** a user scrolls down the homepage on desktop
- **THEN** the page transitions from Categories directly to Best Sellers without repeating the Flash Sale product grid

### Requirement: Mobile continuity
On viewports narrower than 1024px, the hero section SHALL render as a full-width promotional banner slider with touch-swipe gestures, and the Flash Sale section SHALL continue to render below the Category chips.

#### Scenario: Mobile hero presentation
- **WHEN** a user views the homepage on a mobile device (<640px)
- **THEN** the hero displays the edge-to-edge banner slider with swipe gestures, followed by category chips, and then the mobile-optimized scrollable Flash Sale section
