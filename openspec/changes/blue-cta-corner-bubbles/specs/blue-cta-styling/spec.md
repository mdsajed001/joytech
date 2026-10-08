## Purpose

Provides a distinctive, dimensional visual design for all primary blue call-to-action (CTA) buttons by integrating soft, low-opacity ambient corner bubbles.

## ADDED Requirements

### Requirement: Ambient corner bubble geometry
Every primary blue CTA SHALL feature partially visible circular bubbles/gradients anchored at 1 or 2 corners (top-right and bottom-left), blending softly into the brand blue background.

#### Scenario: Visual presentation of corner bubbles
- **WHEN** any blue CTA is rendered
- **THEN** it displays a primary brand blue background overlaid with a soft radial white/light gradient bubble partially visible in the top-right corner and another in the bottom-left corner

### Requirement: Low opacity and text legibility
The corner bubbles SHALL maintain a low opacity (between 10% and 25%) so they enhance visual depth without impairing the contrast or readability of the button text and icons.

#### Scenario: Readability check
- **WHEN** text or icons are rendered inside the blue CTA
- **THEN** white typography and icons remain fully legible with crisp contrast against both the base blue and the corner bubbles

### Requirement: Uniform application across all blue CTAs
The corner-bubble styling SHALL be applied uniformly across all primary blue CTAs throughout the application.

#### Scenario: Product card action buttons
- **WHEN** a product card renders its primary action button
- **THEN** the button exhibits the corner-bubble gradient treatment

#### Scenario: Shared Button component
- **WHEN** `<Button variant="primary">` is rendered anywhere in the application
- **THEN** it exhibits the corner-bubble gradient treatment

#### Scenario: Header and Hero blue action buttons
- **WHEN** header search submit buttons or hero flash sale action buttons render
- **THEN** they exhibit the corner-bubble gradient treatment

### Requirement: Hover and active transitions
The blue CTA SHALL transition smoothly on hover and active states without visual clipping, layout shifts, or distortion of the corner bubbles.

#### Scenario: Hovering a blue CTA
- **WHEN** a user hovers over a blue CTA
- **THEN** the button transitions smoothly to its hover state while preserving the ambient corner bubble depth
