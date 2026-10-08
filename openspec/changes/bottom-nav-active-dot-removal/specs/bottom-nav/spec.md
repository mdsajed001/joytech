## Purpose

Defines the structure and styling for mobile bottom navigation items without vertical dot indicators.

## ADDED Requirements

### Requirement: Active item indicated by color without bottom dot indicator
The mobile bottom navigation bar SHALL indicate active navigation state using text and icon color highlighting, without rendering a bottom indicator dot.

#### Scenario: Active item rendering
- **WHEN** a navigation item corresponds to the current page route
- **THEN** the icon and label text are styled with brand primary color, and no indicator dot is rendered beneath the label

#### Scenario: Nav bar spatial distribution
- **WHEN** rendering items in the bottom navigation bar
- **THEN** the item container uses available vertical height for icon, label, and balanced padding
