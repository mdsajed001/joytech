## Purpose

Regulates the initial quantity of displayed product reviews to a compact count and provides an outlined interactive CTA to reveal all remaining reviews.

## ADDED Requirements

### Requirement: Initial Maximum Review Limit
The product reviews section SHALL display at most 2 reviews initially from the filtered list of customer reviews.

#### Scenario: Two or fewer reviews available
- **WHEN** the number of reviews matching the active filter is 2 or fewer
- **THEN** the system SHALL display all matching reviews without showing an expansion CTA button.

#### Scenario: More than two reviews available
- **WHEN** the number of reviews matching the active filter is greater than 2 and the list has not been expanded
- **THEN** the system SHALL display only the first 2 reviews and display an outlined "Show All Reviews" CTA button directly beneath them.

### Requirement: Outlined Show All CTA Button
When more than 2 reviews are present, an outlined button SHALL allow users to view the entire set of matching reviews.

#### Scenario: Clicking Show All
- **WHEN** the user clicks the outlined "Show All" button
- **THEN** the feed SHALL expand to display all matching reviews, and the CTA button label SHALL switch to "Show Less".

#### Scenario: Clicking Show Less
- **WHEN** the user clicks the "Show Less" button while in expanded view
- **THEN** the feed SHALL collapse back to displaying only the top 2 reviews and the CTA button label SHALL revert to "Show All".

#### Scenario: Changing active review filter
- **WHEN** the user selects a different star rating filter
- **THEN** the expansion state SHALL reset to collapsed so that the newly filtered list displays at most 2 reviews initially.
