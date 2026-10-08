## Purpose

Provides a persistent bottom navigation bar on mobile viewports, enabling one-tap access to the four primary app destinations (Home, Offers, Cart, Profile) and matching the design system `.bottomnav` component specification.

## ADDED Requirements

### Requirement: Bottom nav renders on mobile viewports only
The bottom navigation bar SHALL render on viewports narrower than 640px (the Tailwind `sm` breakpoint) and SHALL be hidden on viewports ≥640px.

#### Scenario: Visible on phone
- **WHEN** the viewport width is less than 640px
- **THEN** the bottom navigation bar is visible, fixed to the bottom of the screen

#### Scenario: Hidden on tablet and desktop
- **WHEN** the viewport width is 640px or greater
- **THEN** the bottom navigation bar is not rendered in the DOM

### Requirement: Bottom nav contains exactly four items
The bottom navigation bar SHALL contain exactly four items in this order: Home, Offers, Cart, Profile.

#### Scenario: All four items rendered
- **WHEN** the bottom navigation bar is visible
- **THEN** it displays four items labeled "Home", "Offers", "Cart", "Profile" in left-to-right order, each with an icon above the label

### Requirement: Bottom nav matches design system spec
Each nav item SHALL follow the `.bottomnav-item` specification: flex column layout, centered icon and label, 9.5px/700 weight label text, `--color-text-disabled` default color, 44px minimum height tap target, 3px gap between icon and label.

#### Scenario: Inactive item styling
- **WHEN** a nav item is not the active route
- **THEN** its icon and label color is `--color-text-disabled`

#### Scenario: Active item styling
- **WHEN** a nav item corresponds to the current route
- **THEN** its icon and label color is `--color-brand-primary` and its icon indicator dot is filled with `--color-brand-primary` at full opacity

### Requirement: Bottom nav bar styling matches design system
The bottom navigation bar container SHALL use `border-top: 1px solid --color-border-default`, `background: --color-bg-surface`, and flex layout. It SHALL NOT have border-radius (flat anchor per design system guidance).

#### Scenario: Container appearance
- **WHEN** the bottom navigation bar is rendered
- **THEN** it has a top border, surface background, no border-radius, and is positioned fixed at the bottom of the viewport

### Requirement: Cart badge in bottom nav
The Cart nav item SHALL display a badge count when the cart contains one or more items.

#### Scenario: Cart is empty
- **WHEN** the cart has zero items
- **THEN** no badge is shown on the Cart icon

#### Scenario: Cart has items
- **WHEN** the cart has 1 or more items
- **THEN** a badge showing the count is displayed on the Cart icon using `--color-accent` background and white text

### Requirement: Bottom nav items navigate to routes
Each nav item SHALL link to its corresponding SvelteKit route: Home → `/`, Offers → `/offers`, Cart → `/cart`, Profile → `/profile`.

#### Scenario: Tapping a nav item navigates
- **WHEN** the user taps a bottom nav item
- **THEN** the browser navigates to the associated route

### Requirement: Main content padding clears bottom nav
The main content area SHALL have sufficient bottom padding on mobile viewports to prevent content from being obscured by the fixed bottom navigation bar.

#### Scenario: Footer is fully visible
- **WHEN** the user scrolls to the bottom of the page on mobile
- **THEN** all footer content is fully visible above the bottom navigation bar

### Requirement: Header cart button hidden on mobile
On mobile viewports (<640px), the header's cart button SHALL be hidden to avoid duplicate cart affordance with the bottom navigation bar's cart item.

#### Scenario: Cart only in bottom nav on mobile
- **WHEN** the viewport is narrower than 640px
- **THEN** the cart button in the header is not visible, and cart access is available only through the bottom navigation bar
