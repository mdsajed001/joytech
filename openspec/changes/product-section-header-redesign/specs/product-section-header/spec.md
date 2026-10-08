## Purpose

Standardizes the responsive product section header layout with an editorial stack for kickers, titles, and subtitles, preventing layout crushing.

## ADDED Requirements

### Requirement: Editorial Stack Layout for Product Section Headers
The ProductSection component SHALL display its header information in an editorial vertical stack where the kicker eyebrow sits above the headline, the headline (`<h2>`) has primary horizontal width, and the optional subtitle sits cleanly underneath the headline.

#### Scenario: Subtitle renders beneath section headline
- **WHEN** a product section provides both a `title` and a `subtitle` (e.g. New Arrivals)
- **THEN** the subtitle SHALL render beneath the title as a supportive subline rather than adjacent in the right action column

#### Scenario: Prevention of awkward mid-word breaks
- **WHEN** the section header is rendered on mobile or constrained viewports
- **THEN** the kicker and title SHALL NOT be horizontally compressed by the subtitle, ensuring phrases like "LATEST ADDITIONS" and "New Arrivals" remain intact without breaking prematurely

### Requirement: Non-Conflicting Action Link Positioning
The ProductSection component SHALL reserve the right slot of the header flex container strictly for interactive navigation actions (such as `viewAllLink`).

#### Scenario: Subtitle and View All link rendered simultaneously
- **WHEN** a product section specifies both a `subtitle` and a `viewAllLink`
- **THEN** the subtitle displays under the main title on the left, while the `viewAllLink` renders aligned on the right with `shrink-0`
