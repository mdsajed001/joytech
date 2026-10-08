## Purpose

Defines the responsive layout and visual presentation standards for Joytech's authentication and verification views across desktop and mobile screens.

## ADDED Requirements

### Requirement: Desktop Split-Screen Presentation
The authentication pages MUST render a two-column split layout on desktop screens (`lg:` breakpoint and above), taking up at least the full viewport height (`min-h-screen`).

#### Scenario: User visits auth page on desktop
- **WHEN** user opens `/auth` or `/auth/verify` on a screen width >= 1024px
- **THEN** the left 50% renders the branded visual panel with animated floating elements, and the right 50% renders the centered form

### Requirement: Ambient Animated Tech Visuals
The desktop left panel MUST feature ambient animated white bubbles and floating tech accessory category icons on a brand blue gradient background.

#### Scenario: Ambient animation behavior
- **WHEN** the left brand panel is displayed
- **THEN** translucent white bubbles and tech accessory icons (headphones, smartwatch, phone, charger, cable, gamepad) float subtly without obscuring the central Joytech brand anchor

### Requirement: Edge-to-Edge Mobile Presentation
The authentication pages MUST render a seamless, edge-to-edge full-screen layout on mobile screens without nested card borders.

#### Scenario: User visits auth page on mobile
- **WHEN** user opens `/auth` or `/auth/verify` on a screen width < 1024px
- **THEN** the form elements and navigation render directly on the page surface with flush edge-to-edge styling and standard mobile padding
