## Context

In `Header.svelte`, the mobile search bar currently snaps abruptly when clicked because it unmounts the normal header and mounts a separate `fixed inset-0` container with a top padding of `pt-3`. This shifts the search input from Y ≈ 72px up to Y ≈ 12px, applies an unwanted `border-2 border-[var(--color-brand-primary)]`, and breaks layout continuity.

## Goals / Non-Goals

**Goals:**
- Maintain the search input continuously in its exact vertical position (Row 2, ~72px from top).
- Remove the colored blue border outline, maintaining a clean, neutral subtle border or borderless surface.
- Animate the full-screen white canvas downward smoothly from the search bar using CSS transitions (`transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]`).
- Morph the search container and button in-place from capsule (`rounded-full`) to boxy (`rounded-[var(--radius-sm)]`).
- Keep the top row (Row 1) cleanly displaying a back arrow `[<]` and `JOYTECH` brand text when search is open, allowing 1-tap dismissal.

**Non-Goals:**
- Modifying desktop search autocomplete.
- Changing catalog data or search filtering algorithms.

## Decisions

### 1. Unified Header Architecture
- Keep the search bar inside the header rather than ripping it out into a disconnected overlay.
- When `isMobileSearchOpen` is true:
  - The header's background transitions to pure solid white.
  - Row 1 displays `[<] Back` alongside `JOYTECH`.
  - Row 2 keeps the search bar at the exact same Y coordinates.
  - Directly beneath Row 2, a full-viewport white canvas unfolds/slides down to cover the screen (`fixed top-[120px] inset-x-0 bottom-0 z-40 bg-[var(--color-bg-surface)]`).
  - This guarantees 0px vertical drift, no snapping, and buttery-smooth animation.

### 2. Elimination of Blue Outline
- Replace `border-2 border-[var(--color-brand-primary)]` with `border border-[var(--color-border-strong)] bg-[var(--color-bg-subtle)]`.

## Risks / Trade-offs

- **Z-Index Layering**: The header with the search bar is `z-50`, while the lower canvas is `z-40` or part of the same fixed wrapper, ensuring no underlying page elements bleed through.
