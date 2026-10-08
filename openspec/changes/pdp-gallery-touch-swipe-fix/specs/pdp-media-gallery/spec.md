## Purpose

Provides responsive, universal horizontal touch swipe gesture navigation across the PDP media gallery in both standard preview and full-screen lightbox views.

## ADDED Requirements

### Requirement: Horizontal Touch Swipe Navigation on Main Preview Stage
The PDP media gallery SHALL permit touch-enabled mobile and tablet users to swipe horizontally (left or right) across the main hero stage to navigate smoothly between media assets (images and videos).

#### Scenario: Mobile user swipes left on main stage
- **WHEN** user drags finger horizontally to the left by more than 35px on the main hero stage
- **THEN** the gallery advances to the next media item
- **AND** the thumbnail rail automatically scrolls to center the newly active thumbnail

#### Scenario: Mobile user swipes right on main stage
- **WHEN** user drags finger horizontally to the right by more than 35px on the main hero stage
- **THEN** the gallery navigates to the previous media item
- **AND** the thumbnail rail automatically scrolls to center the newly active thumbnail

---

### Requirement: Horizontal Touch Swipe Navigation in Full-Screen Lightbox
The full-screen lightbox modal SHALL support horizontal touch swiping, enabling touch users to advance through full-screen photos and videos without relying strictly on tiny navigation buttons.

#### Scenario: Touch user swipes in full-screen lightbox
- **WHEN** user opens the full-screen lightbox modal and swipes horizontally
- **THEN** the lightbox carousel smoothly navigates to the next or previous full-resolution media slide

---

### Requirement: Clean Discrimination Between Tap-to-Zoom and Touch Swipe
The gallery interaction layer SHALL distinguish between a quick tap and a touch swipe gesture, ensuring that horizontal drag motions do not inadvertently trigger full-screen lightbox modal expansion.

#### Scenario: Touch user drags to swipe
- **WHEN** user performs a horizontal drag gesture across the product photo
- **THEN** the slide transition executes
- **AND** the full-screen lightbox modal is NOT opened
