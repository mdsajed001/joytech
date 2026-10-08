## Purpose

Establishes the visual-first, self-explanatory UX and Joy Telecom design system integration for the Shop by Phone configurator and container screens.

## ADDED Requirements

### Requirement: Branded Mobile Navigation Bar
The `/shop-by-phone` mobile route SHALL display a branded header that includes Joy Telecom's brand emblem, title, "100% Fit Guarantee" trust badge, and tactile back navigation.

#### Scenario: Mobile header displays brand and trust elements
- **WHEN** a user visits `/shop-by-phone` on a mobile viewport
- **THEN** the header displays the Joy Telecom squircle logo, store title, a trust badge indicating 100% fit guarantee, and a tactile back button returning to the homepage

### Requirement: Visual Step Progress Rail
The configurator SHALL provide an interactive 3-step visual progress bar (`1. Device`, `2. Brand`, `3. Model`) indicating the current stage and completed stages with brand color accents.

#### Scenario: User advances through wizard steps
- **WHEN** a user selects a device type, brand, or model
- **THEN** the progress rail updates to display completed steps with checkmarks and highlights the active stage with brand color glow

### Requirement: Tactile Visual Selection Tiles
The configurator SHALL present device types, popular brands, and model series as visual, self-explanatory tactile tiles with responsive press physics.

#### Scenario: User taps a selection tile
- **WHEN** a user taps a device tile or brand tile
- **THEN** the tile provides tactile press feedback (`active:scale-[0.97]`) and advances the user to the subsequent step without requiring manual search or heavy reading

### Requirement: Design System Action CTA
Upon completing device selection, the configurator SHALL display an animated action button that navigates directly to the catalog with the chosen model filtered.

#### Scenario: User clicks Browse Accessories CTA
- **WHEN** a user reaches the completion state and clicks the action button
- **THEN** the browser routes to `/search?phoneModel=<modelSlug>` with matching products ready for browsing
