## Purpose

Specifies visibility rules for the mobile bottom navigation bar, ensuring distraction-free authentication and onboarding experiences.

## ADDED Requirements

### Requirement: Hide Mobile Bottom Navigation on Auth Pages
The system MUST NOT render the mobile bottom navigation bar (`BottomNav`) on any authentication and verification routes.

#### Scenario: User visits auth page on mobile device
- **WHEN** user navigates to `/auth` or `/auth/verify` on mobile
- **THEN** the mobile bottom navigation bar is not displayed
- **AND** the main content area does not reserve unnecessary bottom padding for navigation
