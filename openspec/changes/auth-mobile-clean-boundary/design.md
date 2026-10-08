## Context

In `src/lib/components/auth/AuthSplitLayout.svelte`, the mobile form container was rendered as a modal-style sheet with `rounded-t-[28px]` and a top horizontal grab pill (`w-10 h-1 rounded-full bg-[var(--color-border-strong)]/40 mx-auto mb-3`). The user provided a screenshot specifically pointing out these elements for removal.

## Goals / Non-Goals

**Goals:**
- Remove the top horizontal grab indicator bar completely.
- Remove the top border radius (`rounded-t-[28px]`) to provide a crisp straight-edge boundary.
- Normalize top padding from `pt-4` to `pt-6` to ensure proper visual breathing room now that the pill bar is gone.
- Maintain the upward sliding motion and blue canopy condensation when inputs are focused.

**Non-Goals:**
- Changing any desktop layout styles or breakpoints.
- Altering input focus/blur detection logic.

## Decisions

### Decision 1: Direct Removal of Sheet Grab Indicator Bar
Delete the `<div class="w-10 h-1 rounded-full ..."></div>` element from the mobile layout in `AuthSplitLayout.svelte`.

### Decision 2: Straight-Edge Boundary (`rounded-none`)
Replace `rounded-t-[28px]` with `rounded-none` on the form container div. The top border `border-t border-[var(--color-border-subtle)]` and shadow will remain to cleanly demarcate the blue canopy from the form surface.

## Risks / Trade-offs

- None identified; this is an aesthetic cleanup that removes visual noise and sheet artifacts.
