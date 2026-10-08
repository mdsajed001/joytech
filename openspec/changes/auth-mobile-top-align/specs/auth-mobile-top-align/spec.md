## Purpose

Provides a top-aligned mobile authentication sheet layout that starts content directly below the canopy boundary and allocates excess viewport height to the bottom.

## ADDED Requirements

### Requirement: Top-aligned mobile auth sheet
The mobile authentication sheet SHALL position the form container immediately below the canopy header boundary with minimal top clearance, avoiding dead space above the primary form title.

#### Scenario: Form title starts near the top boundary
- **WHEN** a user opens `/auth` or `/auth/verify` on a mobile viewport
- **THEN** the form heading is positioned near the top of the white sheet surface with no large vertical gap above it
- **AND** any excess vertical height on tall phone screens is allocated to the bottom of the container above the footer

### Requirement: Independent desktop vertical balance
The layout adjustments SHALL be scoped exclusively to mobile screens and SHALL preserve centered vertical alignment on desktop screens (`lg:` breakpoint and above).

#### Scenario: Desktop view preserves centered layout
- **WHEN** a user visits `/auth` on a viewport width of 1024px or wider
- **THEN** the form container remains vertically centered within the right-hand panel
