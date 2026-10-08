## Purpose

Enables the hero section search area on mobile screens to activate the storefront's existing full-screen mobile search overlay when tapped, providing immediate access to real-time search and popular suggestions.

## ADDED Requirements

### Requirement: Mobile Hero Search Activation
On mobile viewports (`< 768px`), the system SHALL open the existing full-screen mobile search overlay when a user clicks or taps anywhere within the hero section search area (including the input field and search button).

#### Scenario: User taps hero search input on phone
- **WHEN** the user is viewing the homepage on a mobile viewport (< 768px) and taps the hero search input
- **THEN** the existing top mobile search overlay opens immediately, body scrolling is locked, and the search input in the overlay receives keyboard focus

#### Scenario: User taps hero search button on phone
- **WHEN** the user is viewing the homepage on a mobile viewport (< 768px) and taps the hero search button
- **THEN** the existing top mobile search overlay opens immediately without submitting an empty form or triggering a toast notification

---

### Requirement: Search Query Isolation
The system SHALL NOT transfer text between the hero search input and the top mobile search overlay.

#### Scenario: Fresh mobile search session
- **WHEN** the user activates the mobile search overlay from the hero section
- **THEN** the opened mobile search overlay initializes with an empty query and displays default popular search tags

---

### Requirement: Desktop Search Form Preservation
On desktop and tablet viewports (`>= 768px`), the system SHALL preserve the existing standard inline search form behavior in the hero banner.

#### Scenario: User interacts with hero search on desktop
- **WHEN** the user is on a desktop or tablet viewport (>= 768px) and types into the hero search input
- **THEN** the input focuses normally as an inline input, without triggering the mobile search overlay
