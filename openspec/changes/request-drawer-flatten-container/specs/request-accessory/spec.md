## Purpose

Provides a clean, direct layout for the custom sourcing concierge and request form inside the Profile Drawer without nested card container wrappers.

## ADDED Requirements

### Requirement: Direct single-layer layout for Request Accessory form
The system SHALL render the concierge header banner and sourcing request form directly inside the drawer body in `ProfileDrawer.svelte` without an inner nested card background wrapper or double padding.

#### Scenario: Opening Request Accessory drawer
- **WHEN** the user opens the Profile Drawer and selects Request Accessory
- **THEN** the concierge header and input fields sit directly inside the drawer container without an extra nested card border
