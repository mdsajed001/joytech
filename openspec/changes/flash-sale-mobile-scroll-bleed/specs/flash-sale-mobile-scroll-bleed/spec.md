## Purpose

Defines visual and interaction requirements for the mobile Flash Sale product rail to scroll edge-to-edge across the viewport without artificial clipping or padding cutoffs.

## ADDED Requirements

### Requirement: Full-Bleed Edge-to-Edge Mobile Scroll
The Flash Sale product rail SHALL extend to the full viewport width on mobile devices, allowing products to scroll smoothly between the screen boundaries without premature clipping.

#### Scenario: Mobile viewport horizontal scrolling
- **WHEN** viewed on a screen width below 640px
- **THEN** the product cards scroll horizontally across the entire width of the mobile viewport
- **AND** the scrolling container is not clipped by the section's 16px page margin

#### Scenario: Rest alignment with section content
- **WHEN** the scroll container is at its initial scroll position (scrollLeft = 0)
- **THEN** the first product card aligns with the section header and title along the standard 16px content margin

#### Scenario: Responsive tablet and desktop behavior
- **WHEN** viewed on viewports 640px or wider
- **THEN** the full-bleed margins and scroll padding are reset
- **AND** products are rendered in a multi-column grid within standard page container boundaries
