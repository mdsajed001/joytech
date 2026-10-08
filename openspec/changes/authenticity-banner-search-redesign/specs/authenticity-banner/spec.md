## Purpose

Defines the product discovery banner section that invites users to search for products, communicating authenticity and quality through premium visual design rather than marketing claims.

## ADDED Requirements

### Requirement: Premium dark background conveys quality
The section SHALL use a deep dark navy background (gradient from `#0B111E` to `#0F2557`) rather than a bright promotional gradient, so the visual design itself communicates premium quality and trustworthiness.

#### Scenario: Section renders with dark premium background
- **WHEN** the authenticity banner section is rendered on any viewport
- **THEN** it displays a deep navy gradient background and white text with no bright blue promotional styling

### Requirement: Content is action-oriented and search-focused
The section SHALL present a concise, confident headline and subline that invite the user to search, replacing pain-point copy with an affirmative discovery message.

#### Scenario: Copy is confident and minimal
- **WHEN** the section renders
- **THEN** it displays an eyebrow label ("AUTHENTIC ACCESSORIES"), headline ("Find Your Perfect Accessory"), and a brief subline ("Official brands. Real stock.") with no defensive or pain-point language

### Requirement: Search form is the primary CTA
The section SHALL contain a search form as its primary call-to-action, allowing users to search for products directly from within the section.

#### Scenario: Desktop inline search form
- **WHEN** the viewport width is 768px or wider
- **THEN** the search input and Search button are displayed inline (side-by-side) with the input taking available width and the button on the right

#### Scenario: Mobile stacked search form
- **WHEN** the viewport width is less than 768px
- **THEN** the search input is displayed above the Search button, with both elements taking full width

#### Scenario: Search submission
- **WHEN** the user types a query and submits the search form (button click or Enter key)
- **THEN** the `onSearch` callback is invoked with the trimmed query string

### Requirement: Responsive layout adapts to viewport
The section SHALL use a centered, single-column layout on all viewports, with text centered and the search form constrained to a maximum readable width.

#### Scenario: Mobile layout
- **WHEN** the viewport is less than 768px
- **THEN** all content (eyebrow, headline, subline, search form) is centered and stacked vertically with consistent spacing

#### Scenario: Desktop layout
- **WHEN** the viewport is 768px or wider
- **THEN** all content remains centered with the search form horizontally constrained to `max-w-2xl` for optimal readability
