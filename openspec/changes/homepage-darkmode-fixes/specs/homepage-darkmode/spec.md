## Purpose

Establishes dark mode visual styling, semantic tokens, and high-contrast element treatments across all sections of the Home Page.

## ADDED Requirements

### Requirement: Home Page Background Color Adaptation
The home page sections (Hero, CategorySection, FlashSaleSection, and Best Sellers) SHALL render on semantic surface backgrounds (`var(--color-bg-surface)`) instead of hardcoded white backgrounds, adapting seamlessly when the application toggles between light and dark modes.

#### Scenario: Dark mode enabled on Home Page
- **WHEN** the user or system switches theme to dark mode
- **THEN** Hero, CategorySection, FlashSaleSection, and Best Sellers render with dark surface color (`#131B2E`) without white bands or background glitches

### Requirement: Countdown Timer Digit Contrast
The countdown timer blocks in both the desktop Hero section and the mobile Flash Sale section SHALL render digits with high visual contrast in both light and dark modes, preventing white-on-white text disappearance.

#### Scenario: Flash sale countdown timer in dark mode
- **WHEN** the user views the desktop Hero or mobile Flash Sale in dark mode
- **THEN** countdown clock numbers for hours, minutes, and seconds are clearly visible and legible with contrasting background and foreground colors

### Requirement: Interactive States and Gradient Overlays
Interactive elements on the Home Page, including category fade masks, scroll navigation arrow buttons, TrustGrid cards, and the search input focus state SHALL adapt to dark mode without abrupt white flashes or washed-out backgrounds.

#### Scenario: Hovering or focusing interactive elements in dark mode
- **WHEN** the user interacts with category rail arrows, hovers TrustGrid cards, or focuses the search bar in dark mode
- **THEN** elements maintain their dark theme surfaces and borders rather than flashing or turning solid white
