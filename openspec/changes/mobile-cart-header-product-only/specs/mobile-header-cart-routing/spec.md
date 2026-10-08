## Purpose

Restricts the mobile top header cart button to product details pages where the mobile bottom navigation bar is absent.

## ADDED Requirements

### Requirement: Route-Restricted Mobile Cart Header Button
The top header SHALL render the mobile cart button (`sm:hidden`) only on product details pages, and SHALL suppress it on home and other root browsing routes.

#### Scenario: Product details page mobile header view
- **WHEN** a user on a mobile viewport (< 640px) views a product details page (`/product/*`)
- **THEN** the mobile cart button is displayed in the top header adjacent to the hamburger menu

#### Scenario: Home or browsing route mobile header view
- **WHEN** a user on a mobile viewport (< 640px) views the homepage (`/`) or any route outside of `/product/*`
- **THEN** the mobile cart button is not rendered in the top header, leaving only the hamburger menu

#### Scenario: Desktop viewport header view
- **WHEN** a user views any page on a desktop viewport (>= 640px)
- **THEN** the desktop cart button continues to be displayed regardless of the current route
