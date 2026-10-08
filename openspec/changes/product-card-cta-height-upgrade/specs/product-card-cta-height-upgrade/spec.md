## Purpose

Defines visual hierarchy, physical height, and touch target requirements for product card purchase CTA buttons across mobile and desktop viewports.

## ADDED Requirements

### Requirement: Prominent Purchase CTA Dimensions
The product card purchase button SHALL have a minimum height of at least 32px and substantial horizontal padding, providing clear visual dominance and effortless tap target ergonomics.

#### Scenario: Visual presence and minimum height
- **WHEN** a product card renders in any listing or grid
- **THEN** the purchase CTA button renders with a minimum height of at least 32px
- **AND** the button text and icon are scaled proportionally to fill the button without clipping

#### Scenario: Responsive button label and icon scaling
- **WHEN** rendered on a screen >= 640px
- **THEN** the button displays "Buy Now" accompanied by the lightning flash icon
- **WHEN** rendered on a screen < 640px
- **THEN** the button displays "Buy" accompanied by the lightning flash icon

#### Scenario: Alignment with stacked price
- **WHEN** rendered alongside a stacked original and active price in the card footer
- **THEN** the purchase CTA vertically aligns cleanly at the bottom edge with the active price
