## Purpose
Integrates the global Shop by Phone drawer trigger directly into the search filters sidebar and mobile filter drawer in place of standard dropdowns.

## ADDED Requirements

### Requirement: Shop by Phone CTA in Search Sidebar
The search sidebar and mobile filter drawer SHALL display a "Shop by Phone" CTA card in place of the standard brand and model dropdowns under "Device Compatibility".

#### Scenario: User clicks the Shop by Phone CTA
- **WHEN** the user clicks the "Shop by Phone" CTA card in the search filters
- **THEN** the global Shop by Phone drawer opens

### Requirement: Active Device State in Sidebar
When a device is actively selected (e.g., via the wizard), the search sidebar and mobile filter drawer SHALL display the currently active device model and provide actions to change or clear the selection.

#### Scenario: User views filters with an active device selected
- **WHEN** the user opens the filters with an active device selection
- **THEN** they see the selected device model, a button to open the drawer to "Change" it, and a button to clear the selection.
