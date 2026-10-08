## Purpose

Provides a clean, de-modularized interface for customer profile tabs (Preferences, Rewards, Payments) and responsive slide-over drawers/bottom sheets with unified toggle control heights and complete dark mode compatibility.

## ADDED Requirements

### Requirement: Flat and De-modularized Section Hierarchy
The system SHALL present profile settings, rewards, and payments using clean grouped sections with single subtle dividers, avoiding deeply-nested inner borders or multi-layered box-in-box wrappers.

#### Scenario: User views Preferences tab
- **WHEN** user navigates to the Preferences tab
- **THEN** system displays Appearance, Personal Information, Notifications, and Security as clean surface cards with unified internal padding and subtle dividers instead of nested sub-boxes

### Requirement: Standardized Segmented and Switch Control Heights
The system SHALL enforce consistent component heights and styling across theme switchers, language selectors, notification switches, and action buttons.

#### Scenario: User inspects Theme and Language selectors
- **WHEN** user views the Appearance section
- **THEN** both the Theme (Light/Dark/System) and Language (EN/BN) segmented controls render with standardized 44px tap target heights, consistent font styles, and active blue pill indicators

#### Scenario: User toggles notification preferences
- **WHEN** user toggles SMS or WhatsApp updates
- **THEN** the switch component renders with design-system tokens for active background and transitions smoothly without layout shifts

### Requirement: Full Dark Mode Support in Profile Drawer and Bottom Sheet
The system SHALL render slide-over profile drawers (on desktop) and bottom sheets (on mobile) using design system theme tokens (`var(--color-bg-surface)` and `var(--color-bg-canvas)`), ensuring high contrast and seamless dark mode rendering.

#### Scenario: User opens drawer in dark mode
- **WHEN** dark mode is active and user clicks any profile shortcut (e.g. Orders, Addresses, Wishlist, Reviews, Returns, Promos, Request)
- **THEN** the modal sheet opens with dark surface background (`var(--color-bg-surface)`), readable text colors, and dark-themed form inputs

### Requirement: Responsive Mobile Bottom Sheet List Layout
The system SHALL display orders, wishlist items, and saved addresses inside the mobile bottom sheet using streamlined row layouts without bulky desktop-style card borders.

#### Scenario: User views active orders inside mobile drawer
- **WHEN** user opens the Orders drawer on a mobile viewport
- **THEN** order entries render cleanly with subtle separators and clear action buttons fitting within the bottom sheet container
