## Purpose

Defines tactile nod-and-lift micro-interactions and touch feedback for navigation and action icon buttons across header, bottom navigation, and profile surfaces.

## ADDED Requirements

### Requirement: Desktop Header Icon Tactile Micro-Interaction
The system SHALL animate desktop header action buttons (Wishlist, Profile, and Cart) with an upward lift of 4 pixels and a clockwise nod rotation of 11 degrees when clicked, returning smoothly to rest position across a 500 millisecond spring cycle. The animation SHALL play to completion independently of pointer release duration or page navigation completion.

#### Scenario: User clicks header wishlist icon
- **WHEN** user clicks the Wishlist icon in the desktop header
- **THEN** the heart icon performs a smooth nod-and-lift motion tilting to the right and rising upward before returning smoothly to rest across 500ms

#### Scenario: User clicks header cart button
- **WHEN** user clicks the Cart button in the desktop header
- **THEN** the shopping bag icon performs the nod-and-lift motion tilting to the right and rising upward, completing its full motion even after the destination page loads

### Requirement: Mobile Bottom Navigation Tactile Micro-Interaction
The system SHALL animate mobile bottom navigation icons (Home, Offers, Cart, and Profile) with the nod-and-lift motion upon tap or click, with GPU-accelerated transforms, 500ms spring easing, and full completion independent of page routing.

#### Scenario: User taps bottom navigation item
- **WHEN** user taps any tab in the mobile bottom navigation bar
- **THEN** the corresponding icon lifts upward and nods right before settling back to resting state over 500ms, continuing to animate through route transitions without premature abortion

### Requirement: Profile Shortcut Action Buttons Tactile Micro-Interaction
The system SHALL animate the circular action shortcut buttons in the Profile header (Orders, History, Wishlist, Reviews, Addresses, Returns, Promos, Request) with the nod-and-lift micro-interaction when tapped or clicked.

#### Scenario: User taps a profile shortcut button
- **WHEN** user taps any circular shortcut button in the profile header
- **THEN** the icon inside the circular tile tilts right and lifts upward before the corresponding drawer or action opens

### Requirement: Accessible Motion Controls
The system SHALL respect the user's reduced-motion preference (`prefers-reduced-motion: reduce`) by disabling physical rotation and translation, substituting subtle opacity transitions instead.

#### Scenario: Reduced motion preference enabled
- **WHEN** a user with reduced motion enabled activates an icon button
- **THEN** the icon does not translate or rotate, displaying an accessible subtle opacity feedback instead
