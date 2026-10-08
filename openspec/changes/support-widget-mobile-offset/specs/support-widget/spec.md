## Purpose

Provides floating customer support contact options while maintaining clear visibility and usability of mobile navigation UI.

## ADDED Requirements

### Requirement: Support widget floats above mobile bottom navigation bar
On mobile viewports (<640px), the support widget SHALL be positioned far enough above the viewport bottom so that it does not overlap or obscure any items in the bottom navigation bar.

#### Scenario: Mobile viewport support widget positioning
- **WHEN** the application is rendered on a viewport width less than 640px
- **THEN** the support widget floats vertically above the fixed bottom navigation bar without overlapping navigation links or icons

#### Scenario: Desktop viewport support widget positioning
- **WHEN** the application is rendered on a viewport width equal to or greater than 640px
- **THEN** the support widget remains positioned at the standard bottom right offset (bottom-5 right-5)
