## Purpose

Provides a gentle, hardware-accelerated ambient white bubble position interchange micro-animation for the header Search CTA button.

## ADDED Requirements

### Requirement: Ambient Bubble Position Interchange Animation
The header Search CTA button SHALL feature two ambient semi-transparent white bubbles that gently interchange their positions between opposite corners (top-right and bottom-left) in a smooth, continuous transition cycle every 5 seconds.

#### Scenario: Continuous smooth diagonal glide
- **WHEN** the user views the header search bar
- **THEN** the Search CTA button displays two soft white ambient bubbles continuously and gently gliding across diagonally to swap corner positions every 5 seconds with organic ease-in-out easing

#### Scenario: Visual styling consistency
- **WHEN** the ambient bubbles move across the Search CTA
- **THEN** they maintain low opacity (12% to 28%) and radial softness without obscuring the white "Search" button text or button focus indicators

### Requirement: Scoped Animation Application
The bubble interchange animation SHALL apply strictly to Search CTA buttons in the header and SHALL NOT alter the static ambient gradient behavior of any other blue CTA buttons.

#### Scenario: Search CTA exclusively animated
- **WHEN** inspecting the header Search CTA buttons (desktop and mobile search bars)
- **THEN** both exhibit the active bubble interchange animation

#### Scenario: Standard blue CTAs remain static
- **WHEN** inspecting product card Buy Now buttons, support triggers, or banner action buttons
- **THEN** they remain in their standard static `.cta-blue-bubble` state with no position movement

### Requirement: Reduced Motion Accessibility Compliance
The system SHALL respect the user's `prefers-reduced-motion` operating system setting.

#### Scenario: User has reduced motion enabled
- **WHEN** the browser reports `prefers-reduced-motion: reduce`
- **THEN** the bubble interchange animation SHALL freeze in place or revert to static gradient positioning to prevent motion sickness
