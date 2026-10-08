## Purpose

Provides an immersive, scroll-triggered 3D depth-entry and continuous ambient floating animation of tech accessory icons in the background of the storefront accessories search banner.

## ADDED Requirements

### Requirement: Scroll-Triggered 3D Depth Entrance
The system SHALL trigger an entrance animation when the accessories banner scrolls into the viewport, animating accessory icons from deep 3D perspective (`scale(0.2)`, `blur(8px)`, `opacity: 0`) toward the viewer to their resting position (`scale(1)`, `blur(0px)`, `opacity: 0.2` to `0.3`).

#### Scenario: Banner scrolls into view
- **WHEN** the user scrolls the page and the accessories banner intersects the viewport by at least 15%
- **THEN** the background accessory icons SHALL execute a staggered 3D depth zoom entrance transition.

#### Scenario: Staggered entry sequence
- **WHEN** the depth entrance animation begins
- **THEN** individual icons SHALL enter with staggered animation delays (e.g. between 0ms and 600ms) rather than appearing in unison.

### Requirement: Continuous Multi-Axis Ambient Floating
The system SHALL animate the background accessory icons with smooth, continuous multi-axis translation and subtle rotation after their initial entrance.

#### Scenario: Continuous looping drift
- **WHEN** the initial entrance animation completes
- **THEN** each icon SHALL smoothly cycle through continuous floating keyframes with varying speeds (e.g., 7s to 13s) to create natural asynchronous movement.

### Requirement: Mobile Layout & Ergonomics Protection
The system SHALL adapt the size, count, and positioning of background icons on small screens to prevent visual obstruction of text, search inputs, or touch targets.

#### Scenario: Mobile viewport scaling
- **WHEN** the banner is viewed on viewports narrower than 640px (`sm`)
- **THEN** the accessory icons SHALL render with compact dimensions (18px to 22px) and remain constrained to the peripheral margins.

#### Scenario: Zero touch obstruction
- **WHEN** a user taps anywhere on the banner, including over a floating icon's bounding box
- **THEN** the touch event SHALL pass through unobstructed (`pointer-events: none`) to the underlying banner content and inputs.

#### Scenario: Zero horizontal page overflow
- **WHEN** floating icons drift across their animation trajectories
- **THEN** all icons SHALL remain clipped within the banner boundaries (`overflow: hidden`) without triggering horizontal page scrolling.

### Requirement: Reduced Motion Accessibility
The system SHALL respect user accessibility preferences for reduced motion.

#### Scenario: Reduced motion enabled
- **WHEN** the user's system has `prefers-reduced-motion: reduce` active
- **THEN** the depth zoom and continuous floating animations SHALL be disabled, rendering icons statically at their target resting opacity.
