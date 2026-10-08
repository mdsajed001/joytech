## Purpose

Establishes the official SVG vector brand mark and favicon integration across key navigation components, replacing temporary text placeholder boxes.

## ADDED Requirements

### Requirement: Desktop and Mobile Header Brand Mark
The main application header SHALL render the official SVG brand logo image alongside the brand name typography.

#### Scenario: User views the site header
- **WHEN** any page loads on desktop or mobile
- **THEN** the header displays the SVG logo at `/Joy%20tech.svg` with appropriate constrained sizing (`w-9 h-9 object-contain`) and accessible alt text.

### Requirement: Mobile Drawer Brand Mark
The mobile navigation drawer SHALL render the official SVG brand logo image in its header bar.

#### Scenario: User opens mobile navigation drawer
- **WHEN** the user opens the mobile menu drawer
- **THEN** the drawer header displays the SVG logo at `/Joy%20tech.svg` (`w-8 h-8 object-contain`) next to the store name.

### Requirement: Footer Brand Mark
The site footer SHALL render the official SVG brand logo image in its primary brand column.

#### Scenario: User scrolls to the site footer
- **WHEN** the footer is visible
- **THEN** the brand section displays the SVG logo at `/Joy%20tech.svg` (`w-9 h-9 object-contain`) next to the brand title.

### Requirement: Site Favicon
The application HTML head document SHALL link the official SVG logo as the browser favicon.

#### Scenario: User opens the site in a browser tab
- **WHEN** the document loads
- **THEN** the browser tab displays the SVG icon from `/Joy%20tech.svg`.
