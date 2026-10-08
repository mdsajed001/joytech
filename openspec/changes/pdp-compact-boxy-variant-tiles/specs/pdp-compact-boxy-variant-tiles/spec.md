## Purpose

Provides a compact, high-density product variant selection interface featuring strictly boxy tiles arranged in a multi-column responsive grid on mobile and desktop viewports.

## ADDED Requirements

### Requirement: Dense 2-Column Responsive Variant Grid
The system SHALL render product variant options in a 2-column grid on mobile viewports (`grid-cols-2`) and expand responsively on tablet and desktop screens (`sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4`), fitting multiple options in a compact vertical area without single-column row bloat.

#### Scenario: Viewing variants on mobile viewport
- **WHEN** a user views a product with multiple variants on a mobile screen
- **THEN** options are arranged in 2 columns side-by-side with a compact gap, consuming less than half the previous vertical height.

#### Scenario: Viewing variants on desktop viewport
- **WHEN** a user views the product variant selector on larger viewports
- **THEN** the grid scales to display 2 to 4 columns depending on available container width.

### Requirement: Strictly Boxy Shape and Geometry
The system SHALL style variant tiles and thumbnails using strictly boxy geometry (`rounded-[var(--radius-sm)]` for tiles, `rounded-[var(--radius-xs)]` for image thumbnails), eliminating all pill curves and rounded-xl shapes.

#### Scenario: Variant tile visual geometry
- **WHEN** any variant tile is rendered
- **THEN** the tile has crisp 8px corners (`rounded-[var(--radius-sm)]`) and the inner thumbnail has crisp 4px corners (`rounded-[var(--radius-xs)]`).

#### Scenario: Selected state indication
- **WHEN** a variant is selected by the user
- **THEN** the tile displays an active brand border, subtle brand tint, tactile press feedback, and a checkmark selection indicator.

### Requirement: Out-of-Stock and Validation Handling
The system SHALL display out-of-stock items as disabled with appropriate visual cues and display validation rings when no variant is selected upon submission.

#### Scenario: Out-of-stock variant tile
- **WHEN** a variant has zero stock or is marked out of stock
- **THEN** the tile is disabled, muted with reduced opacity, and displays a sold-out notice.

#### Scenario: Required variant validation trigger
- **WHEN** the user attempts an action requiring a variant selection without choosing one
- **THEN** the grid container highlights with a validation ring and warning message.
