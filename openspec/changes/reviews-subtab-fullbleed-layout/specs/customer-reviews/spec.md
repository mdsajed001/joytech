## Purpose

Provides full-bleed edge-to-edge sub-tab navigation for switching between pending product reviews and past published reviews within the Profile Drawer.

## ADDED Requirements

### Requirement: Full-bleed sub-tab control bar layout
The system SHALL render the Reviews sub-tab control bar in `ProfileDrawer.svelte` as a full-bleed, edge-to-edge container flush against the top, left, and right borders of the drawer content panel without inset container margins or internal padding gaps.

#### Scenario: Sub-tab bar rendered flush edge-to-edge
- **WHEN** the user opens the Profile Drawer and selects the Reviews tab
- **THEN** the sub-tab bar spans 100% of the drawer width, eliminating top, left, and right inset padding gaps

### Requirement: 2-Column equal-width block sub-tabs
The system SHALL display `Pending Reviews` and `Past Reviews` as two 50% equal-width block tab buttons with active border/background highlight indicators and real-time counter badges.

#### Scenario: Switching sub-tabs in Reviews view
- **WHEN** the user clicks either `Pending Reviews` or `Past Reviews`
- **THEN** the active tab updates instantly to highlight the selected view and displays the corresponding product list or review history
