## Purpose

Ensures seamless navigation to the customer profile from desktop headers and maintains consistent horizontal layout alignment with the global navigation container.

## ADDED Requirements

### Requirement: Desktop Header Profile Navigation
The global header on viewports >= `sm` SHALL provide a clickable account profile anchor element linking to `/profile`. When a customer clicks the profile icon, the browser SHALL navigate directly to the customer profile page.

#### Scenario: Clicking profile icon on PC view
- **WHEN** the customer clicks the profile user icon in the top navigation header on desktop
- **THEN** the application navigates to `/profile` and loads the Customer Profile Hub.

### Requirement: Consistent Profile Container Alignment
The profile page container wrapper SHALL match the standard Joy Telecom layout width (`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`), ensuring flush horizontal alignment with the header logo on the left and the header cart/actions on the right.

#### Scenario: Viewing profile on desktop viewports
- **WHEN** a customer views `/profile` on a desktop viewport (`>= 1024px`)
- **THEN** the outer edges of the profile card align flush with the left and right bounds of the sticky top navigation bar.
