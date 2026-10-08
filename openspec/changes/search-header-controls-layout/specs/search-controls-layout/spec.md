## Purpose

Provides a clean, ergonomic header layout for search results with left-aligned minimal sort trigger, right-aligned mobile filter button, and right-aligned result count.

## ADDED Requirements

### Requirement: Search Controls Header Bar Layout
The search results header bar SHALL present the primary search title on the left and the total matching items count on the right.

#### Scenario: Header result counter alignment
- **WHEN** the search page is rendered with active query or catalog results
- **THEN** the title appears on the left and "Showing X items" appears aligned to the right.

---

### Requirement: Controls Ordering (Sort Left, Filter Right)
The search results action bar SHALL position the Sort control on the left side and the mobile Filters button on the right side.

#### Scenario: Controls positioning
- **WHEN** the search action bar is displayed
- **THEN** the Sort control is positioned on the left and the mobile Filters button is positioned on the right.

---

### Requirement: Minimalist Inline Sort Trigger Appearance
The Sort selector trigger SHALL render with an understated, inline text styling without heavy button borders or solid filled backgrounds.

#### Scenario: Clean non-button Sort trigger styling
- **WHEN** the user observes the Sort dropdown
- **THEN** it displays the sort label and current selection with a subtle chevron indicator and transparent background.

#### Scenario: Left-aligned popover on interaction
- **WHEN** the user clicks the minimalist Sort trigger
- **THEN** the dropdown menu opens aligned with the left edge of the trigger control.
