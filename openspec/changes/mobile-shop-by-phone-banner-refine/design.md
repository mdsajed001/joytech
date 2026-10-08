## Context

In `src/lib/components/MobileDrawer.svelte`, the "Shop by Phone" section sits between the header and "Browse Categories". User feedback indicated:
1. No outer corner radius (`rounded-none`).
2. No outer side margins (`-mx-5 px-5 py-3`) so it spans full-bleed across the drawer.
3. Breathing effect must be restricted only to background bubbles, not the whole div or button.
4. The button's corner radius must match standard Joytech CTAs (`--radius-sm`).
See [proposal.md](file:///c:/Users/Sajed/Documents/joytech/openspec/changes/mobile-shop-by-phone-banner-refine/proposal.md).

## Goals / Non-Goals

**Goals:**
- Eliminate outer corner radius on the blue container (`rounded-none`).
- Span the blue container full width edge-to-edge across the drawer width (`-mx-5 px-5 py-3`).
- Remove `@keyframes breathing-glow` from `.shop-by-phone-container`.
- Enhance the bubble float animations so they provide a rich, organic breathing expansion (`scale` and `opacity` oscillation) purely in the background.
- Adjust the white CTA button's corner radius to `rounded-[var(--radius-sm)]` (8px).

**Non-Goals:**
- Altering the 3D phone icon graphic or its 5s wiggle animation.
- Enabling navigation from the CTA.

## Decisions

### 1. Full-Bleed Edge-to-Edge Layout
- **Decision:** Apply `-mx-5 px-5 py-3.5` with `rounded-none` and `border-y border-blue-400/20` to `.shop-by-phone-container`.
- **Rationale:** The drawer body has `p-5`. Applying `-mx-5` allows the blue background to bleed seamlessly from the left edge to the right edge with clean square edges, exactly as requested.

### 2. Confining Breathing Motion to Bubbles Only
- **Decision:** Delete the `animation: breathing-glow` from `.shop-by-phone-container` and ensure the white button is also stationary.
- **Rationale:** The button and outer container remain stable and grounded. The ambient orbs/bubbles inside carry the breathing pulse:
  ```css
  @keyframes bubble-breathe-1 {
    0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.75; }
    50% { transform: translate(-10px, 6px) scale(1.22); opacity: 1; }
  }
  ```

### 3. CTA Corner Radius Alignment
- **Decision:** Update the inner white button class from `rounded-xl` to `rounded-[var(--radius-sm)]`.
- **Rationale:** Aligns with Joytech's established design token (`--radius-sm = 8px`), consistent with product cards, checkout CTAs, and dialogs.

## Risks / Trade-offs

- None. Cleaner geometry and smoother visual rhythm.
