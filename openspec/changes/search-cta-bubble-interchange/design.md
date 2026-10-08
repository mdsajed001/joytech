## Context

In `src/routes/layout.css`, `.cta-blue-bubble` defines two static radial gradients representing semi-transparent white bubbles positioned at the top-right (`circle at 100% 0%`) and bottom-left (`circle at 0% 100%`) corners of blue action buttons.

The Search CTA in [Header.svelte](file:///c:/Users/Sajed/Documents/joytech/src/lib/components/Header.svelte) currently uses this static style. We are adding a gentle 5-second position interchange animation strictly to the Search CTA button.

## Goals / Non-Goals

**Goals:**
- Deliver a gentle, fluid 5-second position interchange (10-second complete loop) between the two ambient white bubbles.
- Implement via GPU-accelerated CSS transforms (`translate3d`) using `::before` and `::after` pseudo-elements for silk-smooth 60/120fps motion with zero CPU repainting or layout shift.
- Scope the animated utility class (`.cta-search-animated`) exclusively to the desktop and mobile search buttons in [Header.svelte](file:///c:/Users/Sajed/Documents/joytech/src/lib/components/Header.svelte).
- Support `@media (prefers-reduced-motion: reduce)` by freezing the animation for users with vestibular sensitivity.

**Non-Goals:**
- Altering the static `.cta-blue-bubble` behavior on any other buttons (e.g., product card Buy Now buttons, Support widget).
- Introducing JavaScript runtime timers or external animation libraries.

## Decisions

### Decision 1: Hardware-Accelerated Pseudo-Elements (`::before` & `::after`)
- **Rationale**: Direct CSS `background-position` animations on gradients can trigger continuous CPU repaints. Using `::before` and `::after` with `transform: translate3d(...)` leverages the GPU compositor layer, guaranteeing jitter-free 60/120fps motion without performance degradation on mobile or low-power devices.
- **Layering**: The button receives `relative overflow-hidden`. The pseudo-elements are positioned with `pointer-events-none absolute inset-0 z-0`. Any text or icons inside the button remain above the animation with `relative z-10`.
- **Alternatives Considered**:
  - *CSS `@keyframes` on `background-position`*: Rejected due to potential paint cycles and lower framerate consistency across mobile browsers.
  - *SVG / Canvas overlay*: Rejected as over-engineered and unnecessary when pure CSS pseudo-elements achieve the effect natively.

### Decision 2: 10-Second Complete Loop with Gentle Ease-in-Out
- **Timing Breakdown**:
  - `0%` to `50%` (0s → 5s): Bubble A drifts from top-right to bottom-left; Bubble B drifts from bottom-left to top-right.
  - `50%` to `100%` (5s → 10s): Bubbles smoothly glide back to their starting positions.
- **Easing Curve**: `cubic-bezier(0.45, 0.05, 0.55, 0.95)` provides a gradual acceleration, soft mid-flight velocity, and gentle deceleration at the corner turns.

## Risks / Trade-offs

- **[Risk: Text readability]** → *Mitigation*: The ambient bubbles retain subtle opacities (`0.12` to `0.22`), ensuring the bold white "Search" text retains full WCAG contrast against the primary blue background.
- **[Risk: Subpixel overflow beyond pill shape]** → *Mitigation*: The Search button maintains `overflow: hidden; border-radius: 9999px;`, cleanly clipping the bubbles within the button curvature.
