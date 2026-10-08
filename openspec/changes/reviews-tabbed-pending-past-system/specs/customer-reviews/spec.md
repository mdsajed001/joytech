## Purpose

Defines the requirements for the 2-tab customer reviews panel, including pending product grids, Review Now action CTAs, interactive rating submission, and transition to published review history.

## ADDED Requirements

### Requirement: 2-Tab Sub-Navigation for Reviews & Ratings
The Reviews & Ratings panel SHALL provide a segmented sub-navigation bar with two tabs: `Pending Reviews` (items awaiting feedback) and `Past Reviews` (published reviews), displaying dynamic count badges for each tab.

#### Scenario: Switching between Pending and Past reviews tabs
- **WHEN** the customer taps the `Past Reviews` or `Pending Reviews` sub-tab
- **THEN** the system SHALL switch the view active tab and display the corresponding items without closing the drawer

### Requirement: 2-Column Pending Product Grid with Review Now CTA
The `Pending Reviews` tab SHALL display unreviewed delivered products in a 2-column grid (`grid-cols-2`). Each product card SHALL feature a thumbnail, brand label, product name, price, and a high-contrast **`Review Now`** CTA button (`rounded-[var(--radius-sm)]`) instead of a buy or cart action.

#### Scenario: Rendering pending review product cards
- **WHEN** the customer views the `Pending Reviews` tab
- **THEN** products SHALL be displayed in a 2-column grid with a `Review Now` button on each card

### Requirement: Interactive Inline Review Submission
Clicking the `Review Now` button on a pending product card SHALL expand an interactive review editor for that specific item, featuring a 5-star rating selector, a feedback text area, and a `Post Review` CTA button.

#### Scenario: Submitting a new review for a pending item
- **WHEN** the customer selects a star rating, enters feedback, and clicks `Post Review`
- **THEN** the system SHALL post the review, show a confirmation toast notification, move the item from `Pending Reviews` to `Past Reviews`, and update tab count badges in real-time
