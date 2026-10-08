## Purpose

Defines visual layout and touch-ergonomic requirements for the Header search bar, ensuring a flush integrated search button on desktop and an upgraded 44px height for mobile search.

## ADDED Requirements

### Requirement: Flush Integrated Search Button
The search button SHALL sit flush against the top, bottom, and right edges of the search container pill with zero inner margins, paddings, or border gaps.

#### Scenario: Desktop flush button alignment
- **WHEN** the user views the desktop search bar
- **THEN** the Search button spans the full height of the input container
- **AND** the right side of the Search button aligns flush with the outer right rounded border of the search container without any gap

### Requirement: Ergonomic Mobile Search Bar Height
The mobile search bar SHALL render with a minimum height of 44px (touch-friendly `h-11`) adhering to the design system's tap target requirements.

#### Scenario: Mobile viewport search height
- **WHEN** the user views the site on a mobile device (< 768px)
- **THEN** the mobile search bar container has a height of at least 44px (`h-11`)
- **AND** the search button on mobile aligns flush with the top, bottom, and right edges of the mobile search pill

### Requirement: Search Interaction and Input Focus
The search component SHALL highlight the entire container border on focus and execute search queries on button click or Enter keypress.

#### Scenario: Focusing and submitting search
- **WHEN** the user focuses the search text input
- **THEN** the container border highlights with the brand primary color
- **AND** submitting the form triggers the search action with the entered query
