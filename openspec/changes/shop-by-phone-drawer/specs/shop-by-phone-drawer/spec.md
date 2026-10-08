## Purpose

Provides an on-demand, responsive modal experience for device-specific accessory shopping, displaying as a native-feeling Bottom Sheet on mobile devices and a sleek Slide-over Drawer on desktop computers.

## ADDED Requirements

### Requirement: Mobile bottom sheet presentation
On viewports narrower than 640px, the Shop by Phone interface SHALL render as an interactive Bottom Sheet sliding up from the bottom of the viewport with rounded top corners (`rounded-t-[var(--radius-xl)]`), a visual drag/grab handle, a maximum height of 85vh, and safe-area inset padding.

#### Scenario: Mobile bottom sheet opens
- **WHEN** the user triggers the Shop by Phone experience on a viewport narrower than 640px
- **THEN** a bottom sheet animates upward from the screen bottom over a dimmed backdrop, showing the device selection wizard and verified compatible accessories

#### Scenario: Mobile sheet dismissal
- **WHEN** the user taps the backdrop scrim, presses the close button, or presses the Escape key on mobile
- **THEN** the bottom sheet smoothly slides down off-screen and closes

### Requirement: Desktop slide-over drawer presentation
On viewports 640px or wider, the Shop by Phone interface SHALL render as a side drawer sliding in from the right edge of the screen, occupying full viewport height with a maximum width of 480px–512px (`max-w-lg`).

#### Scenario: Desktop side drawer opens
- **WHEN** the user triggers the Shop by Phone experience on a viewport 640px or wider
- **THEN** a side drawer slides in from the right edge over a dimmed backdrop, with a sticky header and scrollable device selection content

#### Scenario: Desktop drawer dismissal
- **WHEN** the user clicks the close icon button, clicks the backdrop scrim, or presses the Escape key on desktop
- **THEN** the drawer slides out to the right edge and closes

### Requirement: Removal of inline homepage section
The homepage (`+page.svelte`) SHALL NOT render the Shop by Phone wizard as a permanent inline section in the homepage body flow.

#### Scenario: Streamlined homepage scrolling
- **WHEN** a user scrolls down the homepage
- **THEN** the page transitions directly from Categories to Flash Sale without displaying an inline phone brand/model wizard block

### Requirement: Self-contained device and accessory shopping
The modal interface SHALL provide an all-in-one shopping experience where users can select a brand, choose an exact phone model, see immediate fit confirmation, and add compatible accessories to their cart directly inside the modal.

#### Scenario: Model selection updates products inside modal
- **WHEN** a user selects a phone model within the sheet/drawer
- **THEN** the modal immediately updates its product list to display verified compatible accessories for that model

#### Scenario: Adding to cart from within modal
- **WHEN** a user clicks "Add to Cart" on a product card inside the sheet/drawer
- **THEN** the item is added to the global cart state, a toast notification appears, and the user remains in the modal

### Requirement: Global trigger integration
The Shop by Phone modal SHALL be openable from multiple prominent entry points across the application, supporting brand pre-selection where applicable.

#### Scenario: Triggered from Hero CTA
- **WHEN** the user clicks the "★ Shop by Phone Model" CTA in the hero section
- **THEN** the Shop by Phone modal opens

#### Scenario: Triggered from Mobile Navigation Drawer
- **WHEN** the user taps a phone brand button (e.g. "Samsung") inside the mobile navigation drawer
- **THEN** the navigation drawer closes and the Shop by Phone bottom sheet opens with Samsung pre-selected

#### Scenario: Triggered from Authenticity Banner
- **WHEN** the user clicks "Check Compatibility" on the authenticity banner
- **THEN** the Shop by Phone modal opens
