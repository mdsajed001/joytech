## Purpose

Defines a clean, unboxed, and concise 404 error messaging layout that displays a 1-2 line joke directly below the vector illustration without container borders or excess vertical padding.

## ADDED Requirements

### Requirement: Unboxed Message Presentation
The 404 error view SHALL present the humorous message directly on the main page background without a card box, container border, background surface card, or top color accent strip.

#### Scenario: Clean seamless canvas
- **WHEN** the 404 page renders
- **THEN** no outer card border, shadow, or card surface box is drawn around the text

### Requirement: Concise 1-2 Line Humorous Copy
The 404 error view SHALL display a brief, punchy 1-2 line joke tailored to the current language preference without redundant sub-headers, pill badges, or lengthy reassurance paragraphs.

#### Scenario: English concise joke
- **WHEN** the active language is English (`en`)
- **THEN** it displays a 1-2 line GaN charger / URL delivery joke

#### Scenario: Bangla concise joke
- **WHEN** the active language is Bangla (`bn`)
- **THEN** it displays a 1-2 line delivery rider location joke in Bengali

### Requirement: Compact Vertical Hierarchy
The recovery navigation buttons ("Back to Home" and "Search Catalog") SHALL sit immediately below the 1-2 line joke text so the entire experience fits within the viewport above the fold.

#### Scenario: Viewport visibility
- **WHEN** viewed on standard mobile and desktop displays
- **THEN** the vector illustration, 1-2 line text, and CTA buttons are all visible without scrolling
