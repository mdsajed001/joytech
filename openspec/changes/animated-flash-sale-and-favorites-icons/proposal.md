# Proposal: Animated Flash Sale Thunder & Customer Favorites Fire Icons

## Why

The Flash Sale headers in `Hero.svelte` and `FlashSaleSection.svelte` currently display a static unicode text glyph (`⚡`), and the "Customer Favorites" section in `ProductSection.svelte` displays a static `FlameIcon`. Upgrading these elements with delightful, continuous CSS micro-animations—an electric pulsing thunder bolt and a living flickering campfire flame—enriches the visual hierarchy, boosts urgency and warmth, and elevates the store's premium feel.

## What Changes

- **Flash Sale Thunder Icon**:
  - Replace the static text glyph `⚡` in both `Hero.svelte` (desktop hero card) and `FlashSaleSection.svelte` (mobile section header) with a scalable vector icon (`BoltIcon` from `@hugeicons/core-free-icons`).
  - Apply an electric zap micro-animation (`animate-thunder-zap`) with rhythmic pulse jumps, slight angle tilts, and glowing amber illumination.
- **Customer Favorites Fire Icon**:
  - In `ProductSection.svelte`, apply a living flame animation (`animate-flame-flicker`) anchored at `bottom center` when rendering `kickerIcon`.
  - The animation provides subtle vertical stretching/squashing (`scaleY(1.12)` to `scaleY(0.95)`), rhythmic organic swaying (`-4°` to `+5°`), and a warm pulsating ember glow (`drop-shadow`).
- **Performance & Accessibility**:
  - Implement pure CSS `@keyframes` on GPU-composited `transform` and `filter: drop-shadow` properties (zero JavaScript performance cost).
  - Add `@media (prefers-reduced-motion: reduce)` fallbacks that disable motion while preserving static vector beauty.

## Capabilities

### New Capabilities
- `section-kicker-icons`: Behavioral, styling, and micro-animation requirements for promotional kicker icons, specifically the electric thunder bolt for Flash Sale and the living dancing flame for Customer Favorites.

### Modified Capabilities
<!-- None -->

## Impact

- **Affected Components**:
  - `src/lib/components/Hero.svelte`: Upgraded `⚡` to animated `BoltIcon`.
  - `src/lib/components/FlashSaleSection.svelte`: Upgraded `⚡` to animated `BoltIcon`.
  - `src/lib/components/ProductSection.svelte`: Added flame animation styling for kicker icons.
  - `src/routes/layout.css`: Scoped reusable utility keyframes for electric zap and flame flicker.
