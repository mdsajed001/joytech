## Purpose

Defines visual appearance, vector presentation, and motion dynamics for promotional kicker icons, ensuring lively electric animations for Flash Sale headers and organic flickering fire animations for Best Sellers / Customer Favorites.

## ADDED Requirements

### Requirement: Animated Thunder Bolt for Flash Sale Headers
The Flash Sale headers in both desktop (`Hero`) and mobile (`FlashSaleSection`) SHALL display a vector thunder bolt icon animated with an electric zap pulse.

#### Scenario: Rhythmic electric zap execution
- **WHEN** the Flash Sale header renders on the screen
- **THEN** it SHALL display a vector `BoltIcon` in `--color-accent`
- **THEN** every 2 seconds, the icon SHALL perform a rapid electric double-jump with slight angle tilts and glowing drop-shadow expansion

### Requirement: Living Flickering Flame for Customer Favorites
The Customer Favorites section kicker SHALL display an animated flame icon that dances with continuous organic flickering.

#### Scenario: Living flame motion
- **WHEN** `kickerIcon` is set to `FlameIcon`
- **THEN** the icon SHALL animate with a continuous organic cycle anchored at `bottom center`
- **THEN** the flame SHALL gently sway between `-5°` and `+5°` while subtly pulsing vertical scale between `0.95x` and `1.14x` with an ambient warm amber glow

### Requirement: Graceful Degradation for Reduced Motion
The animation effects SHALL automatically deactivate for users with reduced motion preferences.

#### Scenario: User prefers reduced motion
- **WHEN** `@media (prefers-reduced-motion: reduce)` is active
- **THEN** both the thunder bolt and the fire icon SHALL remain static without continuous transform or filter oscillations
