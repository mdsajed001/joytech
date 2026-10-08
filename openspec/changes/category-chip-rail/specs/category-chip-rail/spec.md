## Purpose

Provides a compact, space-efficient meta-chip rail interface for exploring product categories across mobile and desktop devices without cluttering vertical scroll space.

## ADDED Requirements

### Requirement: Mobile single-row scrollable chip rail
On viewports narrower than 640px, the category exploration interface SHALL render as a single horizontal scrollable rail of compact chips that supports smooth swipe and drag gestures without wrapping onto multiple lines.

#### Scenario: Mobile category browsing
- **WHEN** a user views the category section on a screen width below 640px
- **THEN** all category chips are arranged along a single horizontal row with touch pan scrolling and right-edge peek

#### Scenario: Smooth swiping on mobile
- **WHEN** a user swipes horizontally across the category chip strip
- **THEN** the rail scrolls smoothly without obstructing or hijacking vertical page scroll

### Requirement: Desktop responsive chip ribbon
On viewports 640px or wider, the category interface SHALL render as a cohesive ribbon of category chips that aligns neatly within the content container and provides clear hover and focus feedback.

#### Scenario: Desktop category display
- **WHEN** a user views the category section on a desktop screen
- **THEN** category chips are displayed in a clean, space-efficient ribbon with interactive hover highlights

### Requirement: Design system token alignment
Each category chip SHALL adhere to the design system meta-chip specifications, featuring a fully rounded pill border, an inline 16px category icon, the category title, and an item count badge.

#### Scenario: Visual chip structure
- **WHEN** any category chip is rendered
- **THEN** it displays with `rounded-full` borders, `var(--color-brand-primary)` icon tint, `text-xs font-bold` typography, and a subtle item count badge

#### Scenario: Accessible tap target
- **WHEN** rendered on any device
- **THEN** each chip maintains a minimum touch target height of at least 38px for touch usability

### Requirement: Compressed section chrome and direct anchor navigation
The category section SHALL feature a compressed, single-line header title with reduced vertical padding, and tapping any chip SHALL navigate directly to that category's anchor link.

#### Scenario: Clicking a category chip
- **WHEN** the user clicks or taps a category chip (e.g. "Cases & Covers")
- **THEN** the browser navigates smoothly to `#cases-covers`

#### Scenario: Vertical space compression
- **WHEN** the category section is rendered on mobile
- **THEN** the total vertical section height remains under 85px, ensuring subsequent promotional sections remain immediately accessible
