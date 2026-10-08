## Purpose

Provides a smooth, pill-rounded geometry for the desktop header cart button, matching the circular styling of adjacent navigation utilities.

## ADDED Requirements

### Requirement: Pill-Rounded Desktop Cart Button Styling
The system SHALL render the desktop cart link button in the main navigation header with full pill curvature (`rounded-full`), harmonizing with adjacent round icon buttons.

#### Scenario: Desktop cart button rendered on larger viewports
- **WHEN** a user views the website header on viewports with screen width at or above the `sm:` breakpoint (640px and wider)
- **THEN** the desktop cart button displays a smooth, fully rounded pill contour (`rounded-full`) encasing the bag icon, 'Cart' label, and counter badge.

#### Scenario: Hover and active state feedback
- **WHEN** a user hovers over or activates the desktop cart pill button
- **THEN** the button smoothly transitions background and text colors within the pill boundary while preserving icon animations and badge pop states.
