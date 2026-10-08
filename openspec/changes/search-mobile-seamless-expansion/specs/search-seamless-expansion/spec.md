## Purpose

Provides a smooth mobile search expansion that maintains exact vertical anchoring of the search input, removes colored border outlines, and expands smoothly into a full-screen white canvas.

## ADDED Requirements

### Requirement: Vertical position anchoring on mobile
The mobile search bar SHALL remain anchored at its exact vertical location in the header (~72px from top) when tapped, avoiding upward or downward displacement during expansion.

#### Scenario: Tapping the search bar on mobile
- **WHEN** a user taps the mobile search bar
- **THEN** the search bar stays in its vertical header position without jumping to the top edge of the screen

### Requirement: Absence of colored borders
The mobile search input container SHALL NOT display a colored brand border outline when active or expanded.

#### Scenario: Active search field border appearance
- **WHEN** the search input is focused or expanded on mobile
- **THEN** the input container exhibits a clean, neutral subtle border or borderless surface without a colored blue outline

### Requirement: Smooth full-screen canvas expansion
The full-screen white search canvas SHALL smoothly expand from the search row downward and across the viewport without abrupt snapping or sudden pop-in.

#### Scenario: Smooth expansion and dismissal
- **WHEN** the search bar is activated
- **THEN** the white background smoothly expands to 100vw × 100vh using continuous CSS transitions
- **AND** when the back button `[<]` is clicked, the canvas smoothly collapses back into the normal header
