## Purpose

Provides a clean, distraction-free, and mathematically balanced top navigation header for the dedicated checkout screen, ensuring effortless back navigation and clear security reassurance without brand clutter or awkward pill buttons.

## ADDED Requirements

### Requirement: Distraction-Free Header Branding
The checkout top navigation bar SHALL omit redundant store brand names and circular logo avatars ("Joy Telecom"), keeping customer focus concentrated on order completion.

#### Scenario: Omission of store brand marks in checkout navigation
- **WHEN** a customer views the checkout screen
- **THEN** the top navigation bar SHALL NOT display the "Joy Telecom" brand name or "J" circular avatar.

### Requirement: Minimal Non-Pill Back Navigation
The checkout screen SHALL provide a clean, minimal "Back to Cart" navigation action without isolated background pill styling or excessive border radii.

#### Scenario: Back to cart navigation link
- **WHEN** a customer views the checkout top bar
- **THEN** the system SHALL display a minimal back navigation link featuring a directional arrow and clear label ("Back to Cart" / "কার্ট") styled with clean typography and hover color transitions without a pill container background.

### Requirement: Symmetrical Center-Aligned Layout
The checkout top navigation bar SHALL employ a balanced three-column layout structure ensuring the primary checkout title is mathematically centered and visually stabilized across all viewport sizes.

#### Scenario: Desktop view header balance
- **WHEN** the checkout header is rendered on viewport widths of 640px or greater
- **THEN** the left column SHALL contain the minimal back navigation link, the center column SHALL contain the centered "Secure Checkout" title with a lock or shield icon, and the right column SHALL contain right-aligned encryption/security reassurance text.

#### Scenario: Mobile view header balance
- **WHEN** the checkout header is rendered on mobile viewports below 640px
- **THEN** the header SHALL maintain symmetrical 3-part alignment with a compact back link on the left, centered title in the middle, and compact security badge on the right without horizontal crowding or visual imbalance.
