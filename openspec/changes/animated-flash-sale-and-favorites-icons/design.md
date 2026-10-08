# Technical Design: Animated Flash Sale Thunder & Customer Favorites Fire Icons

## Context

Promotional headers on the Joy Telecom homepage feature badge kickers that highlight high-converting areas: the Flash Sale countdown modules in `Hero.svelte` and `FlashSaleSection.svelte`, and the "Customer Favorites" row in `ProductSection.svelte`.

See `proposal.md` for motivation and `specs/section-kicker-icons/spec.md` for behavioral requirements.

## Goals / Non-Goals

**Goals:**
- Replace static unicode `⚡` in `Hero.svelte` and `FlashSaleSection.svelte` with `BoltIcon` from `@hugeicons/core-free-icons`.
- Implement `animate-thunder-zap` for the thunder bolt with high-energy electric pulses and warm amber illumination.
- Implement `animate-flame-flicker` in `ProductSection.svelte` (or `layout.css`) for `FlameIcon` with organic swaying and stretching.
- Ensure 60/120 FPS performance using CSS transforms and drop-shadow filters on compositor layers.

**Non-Goals:**
- Do not modify countdown clock mechanics or product card contents.
- Do not alter other section kickers (e.g. New Arrivals `SparklesIcon`).

## Decisions

### 1. Vector Icon Upgrade for Flash Sale
- **Decision**: Import `BoltIcon` from `@hugeicons/core-free-icons` and wrap in `<Icon icon={BoltIcon} size={18} class="text-[var(--color-accent)] animate-thunder-zap" />`.
- **Rationale**: Replaces system-dependent emoji rendering with a crisp, brand-tinted vector icon matching the rest of the Hugeicons library.

### 2. CSS Keyframes Architecture
- **Thunder Zap (`@keyframes thunderZap`)**:
  - `0%, 65%, 100%`: `transform: scale(1) rotate(0deg); filter: drop-shadow(0 0 0 rgba(242, 121, 11, 0));`
  - `70%`: `transform: scale(1.22) rotate(-6deg); filter: drop-shadow(0 0 6px rgba(242, 121, 11, 0.8));`
  - `74%`: `transform: scale(1.1) rotate(6deg); filter: drop-shadow(0 0 8px rgba(242, 121, 11, 0.9));`
  - `78%`: `transform: scale(1.18) rotate(-4deg); filter: drop-shadow(0 0 5px rgba(242, 121, 11, 0.7));`
  - `84%`: `transform: scale(1) rotate(0deg); filter: drop-shadow(0 0 0 rgba(242, 121, 11, 0));`
  - Duration: `2.2s infinite ease-in-out`
- **Flame Flicker (`@keyframes flameFlicker`)**:
  - `transform-origin: bottom center;`
  - `0%, 100%`: `transform: scaleY(1) scaleX(1) rotate(0deg); filter: drop-shadow(0 -1px 3px rgba(242, 121, 11, 0.4));`
  - `25%`: `transform: scaleY(1.14) scaleX(0.92) rotate(-4deg); filter: drop-shadow(0 -2px 6px rgba(242, 121, 11, 0.7));`
  - `50%`: `transform: scaleY(0.94) scaleX(1.05) rotate(3deg); filter: drop-shadow(0 -1px 4px rgba(242, 121, 11, 0.5));`
  - `75%`: `transform: scaleY(1.08) scaleX(0.96) rotate(-2deg); filter: drop-shadow(0 -2px 5px rgba(242, 121, 11, 0.65));`
  - Duration: `1.6s infinite ease-in-out`

### 3. CSS Location
- **Decision**: Define utility classes `.animate-thunder-zap` and `.animate-flame-flicker` in `src/routes/layout.css`.
- **Rationale**: Centralized definition enables consistent reuse across desktop `Hero.svelte`, mobile `FlashSaleSection.svelte`, and `ProductSection.svelte`, and cleanly groups `@media (prefers-reduced-motion: reduce)` rules.

## Risks / Trade-offs

- **[Risk]** Excessive motion causing distraction.
  - **Mitigation**: Confine animations to subtle micro-interactions (small angular variations `< 6°`, scale variation `< 1.2x`), resting for ~65% of the thunder loop and moving smoothly for the flame.
