## Purpose

Provides a cohesive, interactive product media gallery on the Product Details Page (PDP) featuring flush hero-to-thumbnail layout, 12px thumbnail spacing, horizontally scrollable thumbnail rail, auto-center synchronization, and inline product video playback.

## ADDED Requirements

### Requirement: Flush Hero-to-Thumbnail Connection
The PDP media gallery SHALL render the main hero preview container and the thumbnail rail with zero vertical gap (`gap-0`), ensuring the two elements appear as a unified media module without awkward separating margins.

#### Scenario: User views PDP media section
- **WHEN** user navigates to any product page
- **THEN** the main hero image card and the thumbnail strip sit flush against one another with 0px vertical gap

---

### Requirement: 12px Spacing Between Thumbnail Tiles
The thumbnail rail SHALL arrange thumbnail tiles with an exact 12px (`gap-3`) horizontal gap between each tile, maintaining consistent aspect ratios, rounded corners, and a high-contrast active selector ring around the currently selected media.

#### Scenario: Multiple thumbnail tiles rendered
- **WHEN** the product has 2 or more media assets
- **THEN** each thumbnail tile is separated by exactly 12px of space
- **AND** the active thumbnail displays an active brand border and subtle elevation ring

---

### Requirement: Horizontally Scrollable Thumbnail Rail with Auto-Center Sync
The thumbnail rail SHALL support smooth horizontal scrolling when media items exceed the visible viewport width. On desktop, left and right navigation chevrons SHALL appear when thumbnails overflow. On mobile, the rail SHALL support free-flowing touch-swipe with CSS scroll snap. When the user swipes or navigates through media on the main hero stage, the matching thumbnail tile SHALL automatically scroll into view and center itself within the rail.

#### Scenario: Desktop user navigates overflowing thumbnails
- **WHEN** a product has more thumbnails than fit horizontally on the desktop screen
- **THEN** left and right chevron buttons are available to smoothly scroll the thumbnail rail by 3–4 items per click

#### Scenario: User swipes main hero stage
- **WHEN** user swipes from slide 1 to slide 5 on the main hero stage
- **THEN** the thumbnail rail smoothly auto-scrolls thumbnail #5 into center view

---

### Requirement: Product Video Presentation and Playback
The product media model and gallery SHALL support product demonstration video assets. When a product contains video media, the thumbnail rail SHALL render a thumbnail tile displaying a `[▶ VIDEO]` pill badge. When the video item is selected, the main hero stage SHALL render an inline HTML5 video player with play/pause and mute/unmute controls.

#### Scenario: User selects video thumbnail
- **WHEN** user clicks or taps the thumbnail with the `[▶ VIDEO]` badge
- **THEN** the main hero stage switches to the video player and begins playback
- **AND** the thumbnail shows the active selection state

#### Scenario: User switches away from playing video
- **WHEN** user navigates from the active video to an image slide
- **THEN** the video player automatically pauses and audio stops

---

### Requirement: Gallery Visual Streamlining and Coherent Catalog Assets
The PDP gallery SHALL eliminate redundant pagination dots on desktop when interactive thumbnail tiles are displayed below the main stage. Navigation arrows on desktop SHALL exhibit balanced visual weight on hover. Catalog accessory products SHALL provide coherent, category-accurate multi-angle product assets (front, back, camera cutout, side profile, and packaging).

#### Scenario: User inspects product media gallery
- **WHEN** user views the product gallery on desktop
- **THEN** no redundant pagination dots overlap the bottom of the product photo
- **AND** all gallery images correspond strictly to the category and design of the viewed product
