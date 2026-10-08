## Purpose

Provides a legible, responsive, and engaging 404 error page featuring an unobscured status code, an open-source vector illustration from the internet, culturally tailored bilingual humor, and intuitive recovery pathways.

## ADDED Requirements

### Requirement: Prominent and Unobscured 404 Status
The 404 error view SHALL display the HTTP status code "404" clearly and prominently without being occluded, clipped, or obscured by any overlapping foreground cards or elements.

#### Scenario: 404 Status Visibility
- **WHEN** a user visits a non-existent URL or the `/404` route
- **THEN** the "404" status identifier is clearly visible at first glance with high contrast and no overlapping container cards covering the numbers

### Requirement: Cohesive Free Internet Illustration
The 404 error view SHALL render a single, cohesive open-source vector illustration sourced from unDraw ("Page Not Found") rather than a collage of disjointed floating cards.

#### Scenario: Rendering Vector Illustration
- **WHEN** the 404 view renders
- **THEN** it displays a clean SVG illustration with the 404 theme and explorer character, styled using Joytech brand colors (primary electric blue with warm accent tones)

### Requirement: Theme and Viewport Responsiveness
The 404 illustration and layout SHALL be fully responsive across mobile, tablet, and desktop viewports, adapting gracefully to both light and dark themes.

#### Scenario: Dark Mode and Mobile Scaling
- **WHEN** the user switches between light and dark modes or views on a mobile screen
- **THEN** the illustration scales proportionally within its container without horizontal overflow, and vector stroke/fill colors adjust harmoniously to the dark theme

### Requirement: Bilingual Humor and Recovery Actions
The 404 view SHALL automatically display the culturally tailored joke corresponding to the user's active language preference (`i18nState.language`), with quick recovery actions to return home or search for products.

#### Scenario: Setting Language Determines Joke
- **WHEN** the language is set to Bangla (`bn`)
- **THEN** the page displays the delivery rider location joke in Bengali, and when set to English (`en`), it displays the 65W GaN charger unplugged joke in English

#### Scenario: Recovery Navigation
- **WHEN** the user clicks "Back to Home" or any popular search chip
- **THEN** the application navigates directly to the designated destination route or initiates the search query
