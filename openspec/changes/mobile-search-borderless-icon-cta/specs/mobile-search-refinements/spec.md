## Purpose

Defines visual and interactive refinements for the mobile search bar: borderless text input container in the expanded state, an icon-only CTA button in the expanded state, and complete prevention of focus outlines.

## ADDED Requirements

### Requirement: Borderless mobile search text area in expanded state
The mobile search input container SHALL be borderless (`border-none`) when the search takeover is expanded, while retaining defined border styling on adjacent buttons such as the back button `[<]`.

#### Scenario: Visual styling of text area in expanded state
- **WHEN** mobile search is expanded
- **THEN** the search text input area has no outer border outline
- **AND** the adjacent back navigation button `[<]` retains its defined border

### Requirement: Icon-only CTA button in expanded state
In the expanded mobile search state, the search submission button SHALL display only a search magnifying glass icon without the text label "Search", while preserving the full text label in the collapsed state.

#### Scenario: Submitting search from expanded mobile view
- **WHEN** the mobile search takeover is expanded
- **THEN** the submission CTA button displays an icon-only magnifying glass
- **AND** the button maintains its boxy rounded corners matching the expanded theme

#### Scenario: Submitting search from collapsed mobile view
- **WHEN** mobile search is collapsed in the default header
- **THEN** the submission CTA button displays the text "Search" with its capsule rounded edge

### Requirement: Prevention of blue focus outline or ring
The search input element and its wrapping container SHALL NOT exhibit any browser default or Tailwind blue outline, focus ring, or halo effect when active or focused.

#### Scenario: Focusing the search input on mobile
- **WHEN** a user taps or focuses inside the mobile search text input
- **THEN** no blue outline, blue border, or focus ring is visible around the input or container
