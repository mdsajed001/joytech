## Purpose

Defines layout, placement, and visual hierarchy standards for the mobile header navigation trigger and the Flash Sale section header countdown elements.

## ADDED Requirements

### Requirement: Right-Aligned Mobile Navigation Trigger
The mobile navigation drawer toggle button SHALL be positioned on the right side of the main header bar for mobile and tablet viewports (<lg), while the brand logo remains anchored on the left.

#### Scenario: Mobile header layout
- **WHEN** viewed on a screen width below 1024px (mobile and tablet)
- **THEN** the brand logo is displayed on the left side of the header
- **AND** the mobile navigation hamburger button is displayed on the right side of the header

#### Scenario: Desktop header layout
- **WHEN** viewed on a screen width 1024px or wider
- **THEN** the mobile navigation hamburger button remains hidden
- **AND** desktop search, wishlist, account, and cart controls render in their designated slots

### Requirement: Two-Column Stacked Flash Sale Mobile Header
The Flash Sale section header SHALL render as a clean two-column layout on mobile viewports (<640px) without premature line-wrapping.

#### Scenario: Left column content
- **WHEN** viewed on a screen width below 640px
- **THEN** the left column contains the "⚡ Flash Sale" title
- **AND** the "Up to 40% OFF" badge is positioned directly below the title

#### Scenario: Right column countdown stacking
- **WHEN** viewed on a screen width below 640px
- **THEN** the right column is right-aligned
- **AND** the "Ends in:" label is stacked directly above the countdown clock boxes
- **AND** the countdown clock boxes (`[HH] : [MM] : [SS]`) render directly below the label
