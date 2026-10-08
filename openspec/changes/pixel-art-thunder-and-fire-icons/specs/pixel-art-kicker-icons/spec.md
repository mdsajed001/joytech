## Purpose

Provides authentic retro pixel-art animated icons (thunder bolt and campfire flame) with stepped frame-by-frame arcade GIF animations for promotional kickers and headers.

## ADDED Requirements

### Requirement: PixelThunderIcon Stepped Frame Animation
The system SHALL provide a dedicated `PixelThunderIcon` component that renders a crisp 8-bit/16-bit retro pixel-art thunder bolt and animates through multiple stepped frames resembling an animated arcade GIF without continuous linear vector deformation.

#### Scenario: Renders crisp pixel edges
- **WHEN** `PixelThunderIcon` is rendered at any supported size (e.g., 16px, 18px, 22px)
- **THEN** it SHALL render with `shape-rendering="crispEdges"` and pixelated image rendering so individual pixel blocks remain sharp without anti-aliasing blur.

#### Scenario: Frame cycle execution
- **WHEN** `PixelThunderIcon` is mounted in the viewport
- **THEN** it SHALL continuously cycle through at least 3 discrete pixel states (charging silhouette, bright electric flash, and dissipating discharge/sparkles) using stepped CSS keyframe intervals (`steps(1)`).

### Requirement: PixelFireIcon Stepped Flame & Ember Animation
The system SHALL provide a dedicated `PixelFireIcon` component that renders a vibrant retro pixel-art campfire flame with layered pixel colors (crimson outer, orange body, golden-yellow core) and animated rising ember pixels.

#### Scenario: Multi-color stepped flame flickering
- **WHEN** `PixelFireIcon` is rendered
- **THEN** its flame tongues and core SHALL cycle through discrete animated pixel frames simulating a flickering campfire without smooth gradient fading.

#### Scenario: Rising ember particles
- **WHEN** `PixelFireIcon` executes its animation cycle
- **THEN** detached pixel embers above the flame body SHALL step upward and toggle visibility across frames to emulate an animated retro GIF.

### Requirement: Flash Sale Thunder Icon Replacement
The system SHALL replace the thin outlined line thunder icon in the Hero flash sale card and the dedicated FlashSaleSection with the animated `PixelThunderIcon`.

#### Scenario: Hero flash sale header
- **WHEN** the Hero section flash sale deal box renders
- **THEN** the badge icon beside "FLASH SALE" SHALL be the animated `PixelThunderIcon` instead of the outlined `BoltIcon`.

#### Scenario: Mobile FlashSaleSection header
- **WHEN** the mobile `FlashSaleSection` renders
- **THEN** the header icon beside "FLASH SALE" SHALL be the animated `PixelThunderIcon` instead of the outlined `BoltIcon`.

### Requirement: Customer Favorites Flame Icon Replacement
The system SHALL display the animated `PixelFireIcon` on the Customer Favorites section kicker.

#### Scenario: Customer Favorites kicker display
- **WHEN** the Best Sellers / Customer Favorites `ProductSection` renders
- **THEN** the kicker prefix icon beside "CUSTOMER FAVORITES" SHALL render `PixelFireIcon` with stepped retro flame animation.
