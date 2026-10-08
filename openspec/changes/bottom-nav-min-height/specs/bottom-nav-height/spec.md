## Purpose

Defines height requirements for the mobile bottom navigation bar container.

## ADDED Requirements

### Requirement: Bottom navigation container minimum height
The mobile bottom navigation container (`<nav>` element) SHALL have a minimum height of at least 44px (`min-h-[44px]`).

#### Scenario: Mobile viewport nav bar rendering
- **WHEN** the mobile bottom navigation bar is rendered on viewport width <640px
- **THEN** the `<nav>` container enforces a minimum height of 44px before applying safe-area inset padding
