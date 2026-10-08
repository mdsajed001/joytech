## Purpose

Defines a clean, straight-edge boundary transition between the mobile electric blue brand canopy and the form surface without grab bars or rounded corners.

## ADDED Requirements

### Requirement: Straight Flush Edge on Mobile Form Container
The mobile authentication form container SHALL feature a straight, non-rounded top boundary (`rounded-none` / 0px border radius) where it meets the blue canopy, creating a crisp and flush architectural layout.

#### Scenario: Mobile viewport renders straight boundary
- **WHEN** a user visits `/auth` or `/auth/verify` on a mobile viewport
- **THEN** the top boundary of the form container SHALL meet the blue canopy with crisp square corners and no rounded cutouts

### Requirement: Removal of Mobile Grab Indicator Bar
The mobile authentication view SHALL NOT display any horizontal grab bar, drag handle, or pill indicator above the form content.

#### Scenario: Form container renders without indicator bar
- **WHEN** the authentication screen is viewed on mobile in either rest or focused states
- **THEN** the form container SHALL directly present its header content without any floating horizontal pill or bar element
