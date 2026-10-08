## Purpose

Provides a responsive "You Might Also Like" product discovery shelf on the cart page that seamlessly scrolls edge-to-edge on mobile and wraps into clean rows on desktop.

## ADDED Requirements

### Requirement: Section Identity and Bilingual Header
The cart page SHALL display a recommendation section titled "You Might Also Like" in English and "আপনার পছন্দ হতে পারে" in Bengali, accompanied by a curated discovery subtitle.

#### Scenario: Bilingual title rendering
- **WHEN** user visits the `/cart` page with active products in catalog
- **THEN** the system displays the recommendation section with title "You Might Also Like" in English mode and "আপনার পছন্দ হতে পারে" in Bengali mode

### Requirement: Full-Bleed Edge-to-Edge Scrolling on Mobile
On mobile viewports (`< 1024px`), the recommendation rail SHALL display products in a single horizontally scrollable track that extends edge-to-edge without being clipped at the container side body padding.

#### Scenario: Swiping through recommendations on phone
- **WHEN** user views the cart page on a mobile device and swipes horizontally across the recommendation track
- **THEN** the product cards scroll smoothly across the full screen width from edge to edge without boundary clipping

### Requirement: Flex-Wrap Multi-Column Layout on Desktop
On desktop viewports (`>= 1024px`), the recommendation section SHALL be positioned in the left column beneath the cart items and SHALL flex-wrap product cards into rows rather than horizontally scrolling.

#### Scenario: Viewing recommendations on desktop
- **WHEN** user views the cart page on a desktop display (`lg:` breakpoint)
- **THEN** the recommendation cards wrap naturally into rows within the left column without displaying a horizontal scrollbar

### Requirement: Standard ProductCard Integration and Quick Add
The recommendation shelf SHALL render items using the standard homepage `ProductCard` component, allowing users to view ratings, discounts, and click the animated Buy Now CTA to add items directly to the cart.

#### Scenario: Adding a recommended product
- **WHEN** user clicks the Buy Now button on a recommended product card
- **THEN** the item is added to the cart, the cart count updates, and a feedback toast confirms the addition
