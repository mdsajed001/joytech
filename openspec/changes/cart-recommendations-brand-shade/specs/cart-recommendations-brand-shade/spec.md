## Purpose

Differentiates the "You Might Also Like" section on the cart page using an ambient brand-tinted background shade instead of hard divider lines.

## ADDED Requirements

### Requirement: Removal of Hard Separator Line
The "You Might Also Like" section SHALL NOT render a top border or divider line to demarcate itself from the preceding cart items.

#### Scenario: Inspecting section boundary
- **WHEN** user views the cart items and the "You Might Also Like" section
- **THEN** no horizontal divider line or top border is rendered between the sections

### Requirement: Brand-Tinted Background Shade
The "You Might Also Like" section SHALL feature a brand-tinted background shade (`bg-blue-50/70 dark:bg-blue-950/25`) providing soft visual separation and depth.

#### Scenario: Visual contrast against cards and canvas
- **WHEN** user views the recommendations section in light or dark theme
- **THEN** the section displays a subtle blue brand-tinted background while the contained product cards maintain their elevated surface styling

### Requirement: Responsive Background Geometry
The brand-tinted background SHALL stretch edge-to-edge across the viewport on mobile devices (`< 1024px`) and SHALL render as a rounded panel container on desktop devices (`>= 1024px`).

#### Scenario: Mobile viewport full-bleed shade
- **WHEN** user views the cart on a mobile device
- **THEN** the brand-tinted background extends full-bleed across the screen edges while product cards scroll horizontally across the tinted area

#### Scenario: Desktop viewport rounded panel
- **WHEN** user views the cart on a desktop screen
- **THEN** the brand-tinted background displays as a rounded container in the left column with flex-wrapped cards inside
