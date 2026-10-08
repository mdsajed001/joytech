## Purpose

Enables interactive deep visual inspection of product accessory photos through full-screen touch lightbox viewing on mobile devices and smooth cursor-tracking hover magnification on desktop computers.

## ADDED Requirements

### Requirement: Mobile Full-Screen Lightbox Modal
The system SHALL provide an immersive, full-screen lightbox modal when a customer taps or clicks on the primary product hero image on mobile viewports or touch-enabled devices.

#### Scenario: Customer taps photo on phone
- **WHEN** customer taps the hero image on a phone viewport
- **THEN** the system displays a full-screen lightbox overlay with a dark backdrop (95% black blur), centering the active photo at maximum screen resolution.

#### Scenario: Swiping through images in full-screen mode
- **WHEN** customer swipes left or right while in the full-screen lightbox
- **THEN** the lightbox smoothly slides to the adjacent product photo and updates the header index counter (e.g., `2 / 4`).

#### Scenario: Dismissing the lightbox
- **WHEN** customer taps the top-right `X` close button, presses the Escape key, or taps the backdrop
- **THEN** the full-screen overlay closes with a fade transition and restores background page scrolling.

---

### Requirement: PC Desktop Cursor-Tracking Hover Magnification
The system SHALL provide smooth, high-precision cursor magnification when a customer hovers over the product hero image on desktop and pointer-based devices.

#### Scenario: Customer hovers cursor over product image
- **WHEN** customer moves their mouse pointer into the hero image frame on a desktop viewport
- **THEN** the system smoothly scales the image to 2.2x–2.5x magnification and focuses on the area under the cursor.

#### Scenario: Moving mouse across different parts of the image
- **WHEN** customer moves their mouse across the image (e.g., from top camera cutouts to bottom port bevels)
- **THEN** the system dynamically recalculates the transform-origin in real time based on cursor percentages (`0%` to `100%`), panning the magnified texture smoothly under the mouse.

#### Scenario: Cursor exits the image container
- **WHEN** customer moves the mouse outside the hero image boundaries
- **THEN** the image smoothly transitions back to standard 1x scale and centers its transform origin without layout shift.

---

### Requirement: Variant Selection & Lightbox Photo Synchronization
The system SHALL synchronize the active variant photograph across both the desktop hover zoom and the mobile lightbox modal.

#### Scenario: Opening lightbox after choosing a variant
- **WHEN** customer selects a variant (such as `Blue • 64W Ultra`) and opens the full-screen lightbox
- **THEN** the lightbox displays that variant's dedicated photo as the initial slide.
