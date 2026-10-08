## Purpose

Adapts toast notifications to the active color theme, displaying a crisp light glass card in light mode and a deep glowing glass card in dark mode.

## ADDED Requirements

### Requirement: Light Mode Toast Appearance
When the application is in light mode, toast notifications SHALL display with a light background (`bg-white/95`), dark text (`text-slate-900`), and a light border (`border-slate-200/90`).

#### Scenario: Toast rendered in light mode
- **WHEN** a toast notification is triggered while the application is in light mode
- **THEN** the toast container SHALL render with light mode surface colors and dark typography without dark card inversion.

### Requirement: Dark Mode Toast Appearance
When the application is in dark mode, toast notifications SHALL display with dark glass background (`dark:bg-slate-950/94`), white text (`dark:text-white`), and translucent light border (`dark:border-white/18`).

#### Scenario: Toast rendered in dark mode
- **WHEN** a toast notification is triggered while the application is in dark mode
- **THEN** the toast container SHALL render with dark glass styling and white typography.

### Requirement: Theme-Adaptive Action and Dismiss Controls
Toast actions (such as "View Cart") and the dismiss button SHALL automatically adapt their contrast and hover states according to the current theme.

#### Scenario: Action button in light mode
- **WHEN** a toast displays an action button in light mode
- **THEN** the button SHALL render with dark fill (`bg-slate-900 text-white`) and subtle hover effect.

#### Scenario: Action button in dark mode
- **WHEN** a toast displays an action button in dark mode
- **THEN** the button SHALL render with light fill (`dark:bg-white dark:text-slate-900`) and high contrast hover effect.
