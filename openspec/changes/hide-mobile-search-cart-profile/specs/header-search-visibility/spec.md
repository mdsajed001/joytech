## Purpose

Controls contextual visibility of the top header's mobile search bar across different store routes, hiding it on dedicated workflow screens like cart and customer profile to prioritize essential actions.

## ADDED Requirements

### Requirement: Hide Mobile Header Search Bar on Cart Page
The header component SHALL hide the secondary mobile search row on viewports below the medium breakpoint (`< md`) when the active route is the cart page (`/cart` or any subroute of `/cart`).

#### Scenario: User visits cart page on a mobile device
- **WHEN** a user navigates to `/cart` on a mobile viewport below `md` breakpoint
- **THEN** the mobile search input row under the top bar is hidden from the header
- **AND** the top bar displays only the brand logo and mobile navigation trigger

#### Scenario: User visits cart page on desktop viewport
- **WHEN** a user views `/cart` on a desktop viewport (`md` breakpoint or wider)
- **THEN** the desktop search input centered inside the main header bar remains visible and functional

### Requirement: Hide Mobile Header Search Bar on Profile Page
The header component SHALL hide the secondary mobile search row on viewports below the medium breakpoint (`< md`) when the active route is the profile page (`/profile` or any subroute of `/profile`).

#### Scenario: User visits profile page on a mobile device
- **WHEN** a user navigates to `/profile` on a mobile viewport below `md` breakpoint
- **THEN** the mobile search input row under the top bar is hidden from the header
- **AND** the top bar displays only the brand logo and mobile navigation trigger

#### Scenario: User visits profile page on desktop viewport
- **WHEN** a user views `/profile` on a desktop viewport (`md` breakpoint or wider)
- **THEN** the desktop search input centered inside the main header bar remains visible and functional

### Requirement: Retain Mobile Header Search Bar on Discovery Pages
The header component SHALL continue rendering the mobile search row on viewports below `md` across all other discovery pages, including the homepage, catalog, and product details.

#### Scenario: User visits homepage or product page on a mobile device
- **WHEN** a user navigates to `/` or `/product/[slug]` on a viewport below `md`
- **THEN** the mobile search input row remains displayed beneath the main navigation bar
