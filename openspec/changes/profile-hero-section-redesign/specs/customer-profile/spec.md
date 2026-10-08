## Purpose

Provides Joy Telecom customers with an elevated, brand-consistent account hub featuring a full-bleed primary blue hero section with ambient white bubble accents, high-contrast customer credentials, and interactive frosted-glass metrics.

## ADDED Requirements

### Requirement: Full-Bleed Profile Hero Presentation
The customer profile page SHALL render a full-width, edge-to-edge hero banner that sits flush against the bottom border of the top navigation bar without outer container margin, side padding, or border radius. The hero banner background SHALL use Joy Telecom primary blue (`var(--color-brand-primary)`) overlaid with the ambient white radial-gradient bubble aesthetic (`cta-blue-bubble` style). The hero banner SHALL display the customer's avatar with a white glow outline and verified checkmark badge, customer full name, VIP tier badge, contact info, and registration tenure. The hero banner SHALL NOT display a breadcrumb navigation trail.

#### Scenario: Customer loads profile page
- **WHEN** a customer navigates to `/profile` on desktop or mobile
- **THEN** the profile hero spans 100% viewport width directly under the top navigation bar with no outer padding or corner radius, presenting customer identity and frosted-glass stat cards against the primary blue bubble background.

### Requirement: Frosted Glass Interactive Metric Cards
The profile hero banner SHALL render responsive quick-metric cards for Orders, Addresses, Wishlist, and Loyalty Joy Points formatted with frosted-glass styling (semi-transparent white fill, subtle border, backdrop blur). The Orders, Addresses, and Wishlist metric cards SHALL be interactive buttons that switch the active profile tab upon selection.

#### Scenario: Switching tab via hero metric card
- **WHEN** a customer clicks or taps any interactive metric card (Orders, Addresses, or Wishlist) in the hero banner
- **THEN** the active tab changes immediately to the selected section and the metric card displays active state visual emphasis.
