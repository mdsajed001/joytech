## Context

The previous background icons in `AuthenticityBanner.svelte` used a one-time CSS entry animation triggered by `IntersectionObserver`. The user requested direct, real-time scroll linkage: scrolling down brings icons closer to the screen ("coming from far deep"), and scrolling up moves them back into the deep background. The icons also need to be substantially larger on mobile (28-34px) and more densely populated on desktop (12-14 items).

See `proposal.md` for motivation.

## Goals / Non-Goals

**Goals:**
- Implement real-time scroll calculation using window scroll listener throttled with `requestAnimationFrame`.
- Calculate normalized scroll progress `scrollProgress` between `0` (far deep) and `1` (front depth plane) as the section moves across the viewport.
- Pass `--scroll-p` CSS variable or apply dynamic style transforms `scale(min + (max - min) * progress)`, `opacity(...)`, and `translateZ(...)` to achieve bidirectional movement.
- Maintain continuous idle ambient floating (`float-drift`) layered beneath the scroll transform.
- Increase mobile icon size to 28-34px with clear glowing contrast (`drop-shadow`).
- Expand desktop accessory lineup to 12-14 varied items with staggered depth coefficients.

**Non-Goals:**
- Heavy physics engines or canvas drawing (pure CSS transforms driven by a single lightweight scroll progress scalar).
- Overcrowding the central search input and CTA buttons.

## Decisions

### 1. Unified RAF-Driven CSS Custom Property `--scroll-depth`
- **Decision**: Update a single CSS custom property `--scroll-depth: ${progress.toFixed(3)}` on the banner container on scroll, updated strictly through `requestAnimationFrame`.
- **Rationale**:
  - Updating one CSS variable on the parent container lets the browser CSS engine update all 12-14 icon transforms simultaneously on the GPU thread.
  - Zero re-rendering of Svelte components on scroll; DOM remains completely intact.
  - Eliminates jank and layout thrashing, delivering smooth 60–120fps motion.

### 2. Depth Layers & Asymmetric Depth Coefficients
- **Decision**: Assign each icon a `depthFactor` (e.g. `0.8` to `1.3`) and base `zOffset`.
- **Rationale**: Icons at different depths zoom at slightly different speeds, producing an authentic 3D spatial field rather than a flat billboard zoom.

### 3. Mobile vs Desktop Responsiveness
- **Decision**:
  - Mobile: Display 6 well-spaced, prominent 30px icons on outer perimeter.
  - Desktop: Display all 12-14 icons spread across left, right, and top peripheral coordinates.
  - Social media badges remain half-in/half-out across the bottom seam without `overflow-hidden` clipping.

## Risks / Trade-offs

- **[Scroll Performance on Low-End Mobile]** → The RAF throttle ensures calculations only occur when the banner is near/in the viewport; when completely out of view, the RAF loop skips calculations immediately.
