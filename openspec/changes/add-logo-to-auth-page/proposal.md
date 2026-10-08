## Why

Following the recent brand logo integration across the site's primary navigation landmarks (header, footer, drawer, and favicon), the sign-up / sign-in page (`/auth`) still lacks the official brand logo. To ensure a cohesive and trustworthy brand identity throughout the authentication process, the official SVG logo needs to be prominently displayed on the authentication page.

## What Changes

- Add the official SVG brand logo (`/Joy%20tech.svg`) to the `src/routes/auth/+page.svelte` component.
- The logo will be positioned above the "Sign in or create account" text, aligned with the rest of the authentication form content.

## Capabilities

### New Capabilities
- `auth-page-logo`: Integrates the official SVG brand mark into the authentication page to improve brand consistency.

### Modified Capabilities
- None

## Impact

- **UI Components:** Updates the `src/routes/auth/+page.svelte` layout to include the logo image.
- **Assets:** Utilizes the existing `static/Joy tech.svg` asset.
