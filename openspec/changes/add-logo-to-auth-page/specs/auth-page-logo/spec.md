## Purpose

Integrates the official SVG brand mark into the authentication page to establish brand consistency during user sign-up and sign-in.

## ADDED Requirements

### Requirement: Auth Page Brand Logo
The authentication page SHALL display the official SVG brand logo image positioned prominently above the main form heading text.

#### Scenario: User navigates to the authentication page
- **WHEN** the user visits the `/auth` page
- **THEN** the page displays the SVG logo at `/Joy%20tech.svg` above the "Sign in or create account" text, with appropriate sizing (e.g., `w-12 h-12`).
