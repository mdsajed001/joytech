## Purpose

Provides a responsive search experience featuring a full-screen mobile takeover with smooth shape-morphing and horizontally centered query input, alongside in-place desktop autocomplete suggestions.

## ADDED Requirements

### Requirement: Full-screen mobile search takeover
The system SHALL expand the search interaction into a full-screen white canvas (100vw and 100vh) upon tapping the search bar on mobile viewports (`< md`).

#### Scenario: Opening mobile search takeover
- **WHEN** a user taps the search bar on a mobile viewport
- **THEN** the search interface expands to fill the entire viewport (`100vw` × `100vh`) with a solid white background
- **AND** the top search bar retains its vertical level without downward drift
- **AND** the search input automatically receives focus to trigger the mobile virtual keyboard

### Requirement: Mobile shape morphing and horizontal centering
The search bar container and action button SHALL smoothly morph from capsule shape to boxy corners during expansion, and the input placeholder and active search text SHALL be centered horizontally.

#### Scenario: Visual morphing on expansion
- **WHEN** the mobile search takeover opens
- **THEN** the input container and action button smoothly animate their border-radius from `rounded-full` (capsule) to `rounded-[var(--radius-sm)]` (boxy)
- **AND** the placeholder text "Search" and any typed search query are horizontally centered within the field

### Requirement: Mobile dismiss button
The mobile search takeover SHALL provide a back arrow button `[<]` on the left to dismiss the full-screen view.

#### Scenario: Closing mobile search takeover
- **WHEN** the user clicks or taps the back arrow button `[<]`
- **THEN** the full-screen takeover closes, the keyboard is dismissed, and the standard header view is restored

### Requirement: Popular tag chips and live mobile suggestions
The mobile search canvas SHALL display popular search chips when the search query is empty, and SHALL display real-time product suggestion cards when characters are typed.

#### Scenario: Empty query view
- **WHEN** the mobile search takeover is open and no query is entered
- **THEN** popular search tag chips are displayed and clickable to immediately populate the search query

#### Scenario: Typing query on mobile
- **WHEN** the user types characters into the mobile search input
- **THEN** live matching products from the catalog are displayed with image thumbnails, titles, brand badges, and prices

### Requirement: Desktop in-place autocomplete suggestions
On viewports `md:` and wider, clicking the search bar SHALL focus in place without full-screen takeover, and typing SHALL reveal a floating autocomplete dropdown attached directly beneath the search bar.

#### Scenario: Typing in desktop search
- **WHEN** a user types into the desktop search bar
- **THEN** a floating dropdown displays matching products and category suggestions directly below the input
- **AND** clicking a product navigates directly to that product's details page
