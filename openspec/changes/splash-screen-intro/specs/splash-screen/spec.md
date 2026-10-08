## Purpose

A branded, animated full-screen intro overlay shown once per browser session when the user first lands on the site, reinforcing Joy Telecom's visual identity with a smooth logo reveal and slide-out exit.

## ADDED Requirements

### Requirement: Splash shown on first visit per session
The system SHALL display the splash screen overlay on the user's first page load within a browser session in production (`!dev`), and on every reload during local development (`dev`). Subsequent navigations within the same session SHALL NOT show the splash again in production.

#### Scenario: First visit in session
- **WHEN** the user opens the site in a new tab or browser session
- **THEN** the splash screen overlay is displayed covering the full viewport

#### Scenario: Page reload in development mode
- **WHEN** the user reloads the page during local development (`dev`)
- **THEN** the splash screen is shown on every reload to facilitate UI testing

#### Scenario: Page reload within same session in production
- **WHEN** the user reloads the page in production after the splash has already been shown in the current session
- **THEN** the splash screen is NOT shown and the page content is visible immediately

### Requirement: Branded overlay appearance
The splash screen SHALL display the brand's blue gradient background, ambient animated bubble decorations, and the official SVG logo centered in the viewport.

#### Scenario: Splash renders on load
- **WHEN** the splash screen is shown
- **THEN** the overlay covers the entire viewport with the brand blue gradient and floating bubble elements visible behind the logo

### Requirement: Three-phase logo animation
The logo SHALL animate through three sequential phases: (1) outline-only reveal, (2) fill-in, (3) full panel slide-out exit.

#### Scenario: Logo outline reveal
- **WHEN** the splash screen first appears
- **THEN** the logo renders with a white stroke and no fill, fading in with a slight upward scale

#### Scenario: Logo fill transition
- **WHEN** the outline reveal completes
- **THEN** the logo fill transitions from transparent to solid white

#### Scenario: Splash exit
- **WHEN** the logo fill animation completes
- **THEN** the entire splash panel slides downward out of the viewport, revealing the page content beneath

### Requirement: Non-blocking exit
The splash screen SHALL complete its full animation and remove itself from the DOM without any user interaction required.

#### Scenario: Auto-dismiss
- **WHEN** the exit animation finishes
- **THEN** the splash element is removed from the DOM and page content is fully interactive
