## Purpose

Delivers a clean, single-header mobile experience for the Shop by Phone route with no search bar distraction and a flush full-width selector.

## ADDED Requirements

### Requirement: Mobile Header Single-Bar Presentation
On mobile viewports when visiting `/shop-by-phone`, the system SHALL omit the search input row from the global header, presenting only the primary top branding bar.

#### Scenario: User visits /shop-by-phone on mobile
- **WHEN** a user visits `/shop-by-phone` on a mobile viewport
- **THEN** the global header displays only the primary top row (logo and navigation menu) without rendering the mobile search bar row

### Requirement: Elimination of Secondary Page Header
The `/shop-by-phone` route SHALL NOT render a redundant second header bar below the global navigation bar.

#### Scenario: User views /shop-by-phone
- **WHEN** a user loads the `/shop-by-phone` page
- **THEN** no duplicate branding bar appears between the global header and the configurator progress rail

### Requirement: Flush Edge-to-Edge Mobile Layout
On mobile viewports, the device selector SHALL render flush edge-to-edge without outer container borders or inset padding.

#### Scenario: User navigates device selector on mobile
- **WHEN** a user interacts with the device configurator on mobile
- **THEN** the configurator sits flush against the viewport margins with no surrounding card border
