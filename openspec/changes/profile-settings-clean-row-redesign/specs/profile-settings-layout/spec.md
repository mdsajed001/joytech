## Purpose

Provides a clean, unified single-body layout for customer profile settings and preferences, featuring single-row controls, terse typography, and whitespace-only section division.

## ADDED Requirements

### Requirement: Boxless Unified Settings Body
The system SHALL display profile preferences and account settings on a single continuous surface without individual card containers, borders, card shadows, or colored bounding boxes.

#### Scenario: User navigates to profile preferences
- **WHEN** user views the customer profile preferences section
- **THEN** settings items are presented in a unified single body without card containers, card borders, or module boxes

### Requirement: Single-Row Item Configuration
The system SHALL present each setting and configuration option on a single row, with the descriptive setting label positioned on the left and the interactive control (segmented selector, input field, switch toggle, or action button) positioned on the right.

#### Scenario: User configures theme or language
- **WHEN** user views appearance controls
- **THEN** the setting label and its segmented pill selector appear aligned on a single horizontal row

#### Scenario: User toggles notification preferences
- **WHEN** user views notification settings
- **THEN** each notification type displays its label on the left and its switch toggle on the right on a single row

### Requirement: Whitespace-Only Section Separation
The system SHALL separate distinct settings categories (Appearance, Personal Details, Notifications, Security) using vertical margin whitespace and uppercase section titles, without horizontal divider rules, divider borders, or colored background block dividers.

#### Scenario: User scrolls between settings sections
- **WHEN** user navigates between settings categories
- **THEN** sections are visually divided solely by vertical whitespace and section titles without borders, lines, or background color blocks

### Requirement: Terse Typography Without Explanatory Clutter
The system SHALL present settings items with concise, direct labels, omitting multi-line explanatory subtext paragraphs.

#### Scenario: User reads settings labels
- **WHEN** user inspects any settings option
- **THEN** the item displays only its primary concise title without multi-line instructional or explanatory sentences
