## Purpose

Provides a responsive mobile authentication interface featuring a branded electric blue canopy and an interactive sliding form sheet that moves upward on input focus to prevent virtual keyboard obstruction.

## ADDED Requirements

### Requirement: Electric Blue Brand Canopy on Mobile View
The mobile authentication layout SHALL display a top brand canopy styled with Joytech's signature royal blue gradient (`from-[#0066FF] via-[#0055D4] to-[#003E9E]`), subtle floating ambient bubbles, floating tech accessory motifs (such as headphones, smartwatch, phone), a back navigation button, and bold "JOYTECH" typography.

#### Scenario: Mobile viewport displays branded canopy at rest
- **WHEN** a user visits `/auth` or `/auth/verify` on a screen narrower than the desktop breakpoint (`< 1024px`)
- **THEN** the system SHALL display the royal blue brand canopy in the upper portion of the screen with animated ambient bubbles and tech category icons
- **AND** the back navigation button and Joytech logo SHALL be clearly legible against the blue background

### Requirement: Elevated Sliding Form Sheet
The authentication form on mobile devices SHALL be housed inside an elevated sheet container with curved top borders (`rounded-t-[28px]` or greater), surface background color (`var(--color-bg-surface)`), and a top shadow that visually overlays the blue canopy.

#### Scenario: Form sheet sits over canopy in rest state
- **WHEN** the authentication page loads without any input focused
- **THEN** the form sheet SHALL sit anchored beneath the spacious brand canopy showing the form title, input fields, action buttons, and terms link
- **AND** the top corners of the sheet container SHALL be prominently rounded to look like a modern mobile application card

### Requirement: Keyboard-Aware Upward Slide on Input Focus
The system SHALL detect when an interactive text/number input (such as the mobile number input or OTP verification inputs) receives focus on mobile devices, and SHALL smoothly slide the form sheet upward into the canopy area while condensing the canopy into a compact top header bar.

#### Scenario: User focuses mobile number input
- **WHEN** the user taps or focuses the mobile phone input field on `/auth`
- **THEN** the form container SHALL smoothly animate upward via CSS transform/transition with an easing curve of approximately 300ms
- **AND** the top blue canopy SHALL condense in height to maintain a sleek header row containing the back button and logo
- **AND** the active input and the primary "Continue" button SHALL remain visible and unobstructed by the virtual keyboard

#### Scenario: User focuses OTP inputs on verification page
- **WHEN** the user taps or focuses any OTP digit box on `/auth/verify`
- **THEN** the form container SHALL smoothly animate upward to keep the 4 digit boxes and the "Verify & Proceed" CTA fully visible above the mobile keyboard

### Requirement: Focus Blur Reset to Rest State
When all inputs within the form lose focus (or the user taps outside), the mobile layout SHALL smoothly animate back down to the default spacious canopy rest state.

#### Scenario: User dismisses keyboard or blurs input
- **WHEN** the focused input field loses focus and no other input inside the sheet is active
- **THEN** the form sheet SHALL transition smoothly back to its default rest position
- **AND** the blue canopy SHALL expand back to its full spacious height with floating ambient elements

### Requirement: Desktop Split Screen Preservation
On desktop viewports (`>= 1024px`), the system SHALL preserve the 50/50 two-column split layout with the left full-height blue branding panel and the right centered form panel, completely bypassing the mobile slide sheet behavior.

#### Scenario: Desktop viewport loads auth page
- **WHEN** a user views `/auth` or `/auth/verify` on a screen with width 1024px or wider
- **THEN** the screen SHALL display the fixed 50/50 split layout without mobile slide transformations
