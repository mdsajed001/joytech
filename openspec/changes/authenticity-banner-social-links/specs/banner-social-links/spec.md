## Purpose

Provides floating, authentic social media trust badges positioned across the bottom border of the product discovery banner to establish verifiable business presence and community trust.

## ADDED Requirements

### Requirement: Floating boundary positioning
The social badges row SHALL be positioned along the bottom border of the product discovery banner such that approximately half of each badge overlaps the dark banner background and the other half extends into the following page section ("half in, half out").

#### Scenario: Visual overlap on desktop and mobile
- **WHEN** the section is rendered on any viewport
- **THEN** the 4 round social badges sit centered horizontally along the bottom edge, bridging the boundary between the dark navy banner and the section below

### Requirement: Authentic round brand logos
The 4 social badges SHALL represent Facebook, WhatsApp, Instagram, and YouTube using their authentic, official brand logos and colors inside circular badges, rather than generic monochrome line icons.

#### Scenario: Facebook badge appearance
- **WHEN** the Facebook badge is rendered
- **THEN** it displays the official Facebook circular blue badge (`#1877F2`) with the authentic white `f` logo

#### Scenario: WhatsApp badge appearance
- **WHEN** the WhatsApp badge is rendered
- **THEN** it displays the official WhatsApp green badge (`#25D366`) with the authentic white speech bubble and phone icon

#### Scenario: Instagram badge appearance
- **WHEN** the Instagram badge is rendered
- **THEN** it displays the official Instagram radiant gradient (fuchsia/purple/orange) with the authentic white camera icon

#### Scenario: YouTube badge appearance
- **WHEN** the YouTube badge is rendered
- **THEN** it displays the official YouTube red badge (`#FF0000`) with the authentic white play triangle

### Requirement: High contrast and physical elevation
Each circular badge SHALL feature a prominent white ring border and elevated drop shadow to ensure sharp edge definition and depth against both the dark background above and the light background below.

#### Scenario: Edge definition on dual backgrounds
- **WHEN** badges intersect the dark top and light bottom surfaces
- **THEN** a white border ring and elevated shadow maintain clear visibility and edge separation on both colors

### Requirement: Interactive links and accessibility
Each social badge SHALL function as a secure clickable hyperlink opening the respective social channel in a new browser tab, complete with accessible labeling and hover elevation.

#### Scenario: Clicking a social badge
- **WHEN** a user clicks on any of the 4 social badges
- **THEN** the corresponding URL is opened in a new tab with `target="_blank"` and `rel="noopener noreferrer"` attributes

#### Scenario: Hover micro-interaction
- **WHEN** a user hovers over a social badge
- **THEN** the badge scales smoothly and elevates with an amplified shadow to signal interactivity
