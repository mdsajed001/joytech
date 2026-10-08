## Context

See proposal.md - Why.
`SupportWidget.svelte` currently uses `fixed bottom-5 right-5 z-40`. `BottomNav.svelte` is fixed to the bottom on viewports below 640px (`sm:hidden`) with height ~56px (`h-14`), placing the floating support button directly over the bottom navigation bar.

## Goals / Non-Goals

**Goals:**
- Shift the floating support widget higher on mobile (<640px) so it clears `BottomNav.svelte` cleanly.
- Keep standard `bottom-5 right-5` layout on desktop/tablet (≥640px).

**Non-Goals:**
- Changing the internal options menu or expanded state of the support widget.

## Decisions

- **Use responsive Tailwind positioning classes `bottom-20 sm:bottom-5` on `SupportWidget.svelte` root**:
  - `bottom-20` (80px / 5rem) on mobile elevates the widget top/bottom bounds above `BottomNav.svelte` (~56px height) with comfortable breathing room.
  - `sm:bottom-5` maintains the desktop offset (20px).

## Risks / Trade-offs

- None identified.
