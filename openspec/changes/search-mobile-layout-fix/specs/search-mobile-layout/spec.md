## Purpose

Defines the mobile search header takeover layout with Row 1 logo, Row 2 (back button, centered search input, and search CTA button), and Row 3 (non-overlapping flex results canvas).

## ADDED Requirements

### Requirement: Mobile search header row layout composition
When mobile search is activated on small screens, the header SHALL transform into a full-screen container with a clean three-tier structure: Row 1 displays the Joy Telecom brand logo while hiding the mobile hamburger menu; Row 2 displays the back button `[<]` on the far left, the search input field in the center, and the Search CTA button on the far right.

#### Scenario: Mobile search takeover layout structure
- **WHEN** a user taps the mobile search input or activates mobile search
- **THEN** the mobile hamburger menu icon is hidden from Row 1
- **AND** the back button `[<]` is displayed on the left side of Row 2 directly preceding the search input field
- **AND** the Search CTA button is displayed on the right side of Row 2

### Requirement: Search input visibility and text centering
The active mobile search input and its typed text SHALL remain fully visible in Row 2 at all times without being obscured or clipped by the results canvas, with placeholder and entered text horizontally centered.

#### Scenario: Typing a search query on mobile
- **WHEN** a user enters text into the mobile search input
- **THEN** the entered text is centered horizontally within the input container
- **AND** the search input field remains clearly visible in Row 2 above the matching results or popular tags

### Requirement: Absence of colored brand blue border
The mobile search input container SHALL NOT display a colored brand blue border outline when focused or active, maintaining a neutral subtle border or clean surface.

#### Scenario: Visual styling of active search container
- **WHEN** the mobile search input is focused or query text is present
- **THEN** the input container uses a neutral subtle border without a high-contrast colored brand blue outline

### Requirement: Non-overlapping flex child results canvas
The search results and tag recommendations canvas SHALL be positioned as a native flex child (Row 3) beneath Row 2 rather than using fixed pixel top coordinate offsets that can collide with the search input.

#### Scenario: Viewing search results beneath Row 2
- **WHEN** search suggestions or search results are displayed
- **THEN** the results scrollable canvas begins directly beneath Row 2 and extends to the bottom of the viewport
- **AND** scrolling inside the canvas does not displace or conceal Row 1 or Row 2
