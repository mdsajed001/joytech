## Context

The storefront search banner in `AuthenticityBanner.svelte` provides a search form and social links over a dark navy gradient (`#0B111E` to `#0F2557`). Currently, the background is static. The user requested floating background accessory icons that enter on scroll as if emerging from deep 3D perspective ("coming from far deep"), while preserving strict mobile usability and readability.

See `proposal.md` for motivation.

## Goals / Non-Goals

**Goals:**
- Implement a scroll-triggered entrance effect using `IntersectionObserver` in Svelte 5 `$effect` that toggles an active class when the banner enters the viewport.
- Render 6-8 curated accessory icons (`HeadphonesIcon`, `SmartPhone01Icon`, `UsbIcon`, `BatteryCharging01Icon`, `FlashIcon`, `Shield01Icon`, `SmartWatchIcon`).
- Animate icons from a deep perspective (`scale(0.2)`, `blur(8px)`, `opacity: 0`) to foreground resting state (`scale(1)`, `blur(0)`, `opacity: 0.2` to `0.28`), followed by continuous multi-axis ambient drift.
- Position icons on the left/right flanks and outer margins so the central headline, copy, and search bar are never obscured.
- Maintain responsive sizing (18-22px on mobile, 28-34px on desktop) and container constraints (`overflow-hidden pointer-events-none`).
- Provide `@media (prefers-reduced-motion: reduce)` fallbacks.

**Non-Goals:**
- Adding floating particles across the entire site (this effect is specifically designed for the accessories search banner).
- Heavy 3D WebGL or Canvas rendering engines (pure CSS transforms and SVG icons provide 60fps performance with negligible memory consumption).

## Decisions

### 1. IntersectionObserver + CSS 3D Zoom Classes vs JavaScript RAF Loops
- **Decision**: Use a lightweight Svelte 5 `$effect` with an `IntersectionObserver` (threshold 0.15) to detect when the banner scrolls into view, setting `isVisible = true`. CSS keyframes and transitions handle the actual 3D scale/blur/opacity and floating.
- **Rationale**:
  - Offloads animation rendering entirely to the browser's GPU compositor.
  - Keeps battery/CPU consumption at zero when off-screen.
  - Zero heavy third-party animation libraries (e.g. GSAP or Framer Motion).
- **Alternatives Considered**:
  - Parallax on window `scroll` event: Choppy on lower-end mobile devices, prone to layout thrashing.
  - Pure scroll-timeline CSS: Still experimental in some mobile browsers.

### 2. Double-Layer CSS Animation: Entrance Zoom then Continuous Float
- **Decision**: Structure each floating element with an outer positioning/entrance wrapper that applies the staggered zoom-in transition on `isVisible`, containing an inner icon element running the continuous looping float animation.
- **Rationale**: Separating the entrance scale transition from the continuous translate/rotate float prevents CSS transform collision and eliminates timing synchronization glitches.

### 3. Mobile Ergonomics & Visual Weight
- **Decision**:
  - Desktop: 7 icons distributed across outer quadrants (top-left, bottom-left, top-right, bottom-right, upper-center-left, lower-center-right).
  - Mobile: Reduced to 4 key icons at edges with smaller sizes (18px) and lower opacity (0.16) to ensure the search input, submit button, and social badges remain the prominent focal points.
  - Layer positioned with `absolute inset-0 overflow-hidden pointer-events-none z-0`.

## Risks / Trade-offs

- **[Potential visual distraction behind input]** → Mitigated by keeping central 60% of the horizontal space completely free of icons, and capping opacity at 0.20-0.28 with soft cyan/white tones.
- **[Mobile Safari overflow quirks]** → Mitigated by using `overflow-hidden` on the parent `<section>` and explicit relative positioning with `isolation: isolate`.
