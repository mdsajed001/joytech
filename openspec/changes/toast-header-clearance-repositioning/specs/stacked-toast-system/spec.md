## Purpose

Provides unobtrusive, accessible global toast notifications that adapt dynamically to responsive viewport header layouts, never obscuring navigation, search inputs, or cart controls.

## ADDED Requirements

### Requirement: Responsive Header Clearance for Toast System
The system SHALL position the floating toast notification container strictly beneath the sticky header across all responsive breakpoints.

#### Scenario: Mobile viewport clearance below search bar
- **WHEN** a toast notification is triggered on a mobile viewport (< 768px)
- **THEN** the notification container renders with vertical clearance (`top-34` / ~136px) below both the logo header and the mobile search input bar with at least 8px margin

#### Scenario: Desktop viewport clearance below header and sub-navigation
- **WHEN** a toast notification is triggered on a tablet or desktop viewport (>= 768px)
- **THEN** the notification container renders anchored to the top-right corner below the desktop header bar (`md:top-22`, `lg:top-30`), keeping search and header action icons unobstructed

### Requirement: Search Interactivity Preservation
The system SHALL ensure the search bar and input controls remain fully visible, focused, and clickable without interference while toasts are active.

#### Scenario: Typing in search while toast is displayed
- **WHEN** one or more toasts are currently displayed
- **THEN** the user can tap or click into the search input and type queries without any toast bounding box overlapping the input element
