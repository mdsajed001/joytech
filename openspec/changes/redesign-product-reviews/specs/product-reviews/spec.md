## Purpose

Provides a transparent, authentic, and engaging product review system with rating breakdowns, filter tools, verified purchaser credentials, helpfulness voting, and an interactive review submission modal.

## ADDED Requirements

### Requirement: Filled Star Rating Display
The system SHALL render all rating stars with a filled amber/gold color (`fill-amber-400 text-amber-400`), accurately indicating review score without transparent or hollow wireframe artifacts.

#### Scenario: User views overall product score
- **WHEN** user scrolls to the reviews section
- **THEN** the overall score shows filled gold stars matching the rating number

#### Scenario: User views an individual review card
- **WHEN** user views any review card
- **THEN** the reviewer's rating displays the corresponding number of filled gold stars

### Requirement: Rating Distribution Breakdown
The system SHALL display a 5-tier distribution bar breakdown (5★ to 1★) displaying the percentage and count of customer reviews for each star level.

#### Scenario: Viewing rating distribution
- **WHEN** the reviews section is mounted
- **THEN** each star row from 5★ to 1★ shows a visual progress bar with percentage label
- **WHEN** user clicks on a star bar row
- **THEN** the review list filters to display only reviews matching that star tier

### Requirement: Interactive Review Filtering & Sorting
The system SHALL provide real-time filter chips and sorting controls allowing customers to organize reviews.

#### Scenario: Filtering by verified purchasers
- **WHEN** user clicks the "Verified Only" filter chip
- **THEN** the review list updates to show only reviews with `verified: true`

#### Scenario: Sorting reviews
- **WHEN** user selects "Highest Rated" from the sort selector
- **THEN** the reviews reorder descending by rating

### Requirement: Helpfulness Voting
The system SHALL allow users to mark a review as helpful, updating the count with optimistic micro-interaction feedback.

#### Scenario: User clicks Helpful button
- **WHEN** user taps the "Helpful" button on a review
- **THEN** the helpful count increments by 1 and the button indicates active voted state

### Requirement: Write a Review Modal Flow
The system SHALL provide a modal dialog allowing users to submit a new product rating and review.

#### Scenario: Submitting a review
- **WHEN** user clicks the "Write a Review" button
- **THEN** an accessible modal opens with an interactive 1–5 star rating picker, name input, and comment textarea
- **WHEN** user submits the form
- **THEN** the new review is added to the active reviews list and a success toast notification appears
