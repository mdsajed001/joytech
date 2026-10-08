## Purpose

Provides brand navigation, real-time search trigger, cart status, mobile menu, and customer service contact access across the store layout.

## ADDED Requirements

### Requirement: Top Announcement Bar
The layout SHALL render a top announcement bar displaying promotional notices and delivery thresholds (e.g. Free delivery on orders over ৳999).

#### Scenario: Rendering announcement notice
- **WHEN** user lands on any page of the store
- **THEN** system SHALL display the announcement text at the very top of the viewport

### Requirement: Brand Header and Search Input
The header SHALL display the Joy Telecom brand logo, an accessible search bar with prompt placeholder "Search products, brands or phone models...", and a cart icon with live count badge.

#### Scenario: Cart item counter display
- **WHEN** cart contains items
- **THEN** cart icon SHALL display an accented badge showing the total quantity of items in the cart

#### Scenario: Search interaction trigger
- **WHEN** user inputs text into the search bar
- **THEN** search suggestions or filtered matches SHALL be prompted

### Requirement: Mobile Drawer Navigation
On mobile viewports (< 768px), the header SHALL offer a hamburger menu toggle that opens a slide-out navigation drawer with categories and quick phone brand access.

#### Scenario: Opening mobile drawer
- **WHEN** user clicks the hamburger menu icon
- **THEN** navigation drawer opens smoothly and traps focus until closed

### Requirement: Floating Customer Support Widget
The layout SHALL feature a floating support widget in the bottom-right corner offering immediate contact channels (WhatsApp, Phone Call) without obstructing mobile bottom purchase actions.

#### Scenario: Support trigger visibility
- **WHEN** user views the store on mobile or desktop
- **THEN** floating widget remains accessible with minimum 44px touch targets and never covers checkout or primary purchase buttons

### Requirement: Global Store Footer
The layout SHALL render a footer containing category links, customer service contact info, company policies (Privacy, Terms, FAQ), and accepted payment method indicators (COD active, bKash/Nagad badges).

#### Scenario: Accessing policies from footer
- **WHEN** user navigates to the footer
- **THEN** all core customer service and trust links are present and accessible
