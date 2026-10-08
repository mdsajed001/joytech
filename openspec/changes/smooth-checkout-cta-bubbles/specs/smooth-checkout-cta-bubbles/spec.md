## Purpose

Ensures the floating background bubble animation on animated CTA buttons remains continuously circular, organic, and free of boxy or sharp geometric cutoffs across all keyframes and viewport widths.

## ADDED Requirements

### Requirement: Continuous Circular Orb Geometry
The floating highlight bubbles on `.cta-checkout-animated` and `.cta-search-animated` SHALL be rendered with circular geometry and radial opacity falloff that reaches complete transparency before reaching the element perimeter.

#### Scenario: Inspecting bubble shape throughout animation
- **WHEN** user observes the CTA button across any point in its 10-second animation cycle
- **THEN** the highlight appears as a smooth, rounded, organic orb without any straight edges, boxy cuts, or 90-degree corners

### Requirement: Bounded Travel Without Edge Exposure
The animation keyframes SHALL translate the highlight bubbles between opposing corners without dragging the physical bounding box edges of the pseudo-elements into the visible interior of the button.

#### Scenario: Observing mid-cycle keyframe transition
- **WHEN** the animation reaches the 50% interchange keyframe
- **THEN** the bubbles transition smoothly across the button surface without showing rectangular dividing lines or sharp opacity steps
