## Context

See proposal.md - Why.
`BottomNav.svelte` currently renders a `w-1 h-1 rounded-full` dot below the active navigation item label.

## Goals / Non-Goals

**Goals:**
- Remove active indicator dot.
- Improve vertical spacing and balance for icon and label in `BottomNav.svelte`.

**Non-Goals:**
- Changing navigation items or route targets.

## Decisions

- **Remove dot span and tweak vertical layout**:
  - Delete line 52-54 `<span class="w-1 h-1 rounded-full...` from `BottomNav.svelte`.
  - Adjust container padding/flex layout to evenly distribute vertical space (`py-2` / `py-2.5` with `gap-1`, text size `text-[10px]`).

## Risks / Trade-offs

- None.
