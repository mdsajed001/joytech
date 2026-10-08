## Context

See proposal.md - Why.
`BottomNav.svelte` uses `<nav class="fixed bottom-0 left-0 right-0 z-40 sm:hidden flex items-center ...">` without an explicit `min-h-[44px]` on the container element.

## Goals / Non-Goals

**Goals:**
- Ensure `<nav>` container in `BottomNav.svelte` has `min-h-[44px]`.
- Keep item link targets at `min-h-[44px]`.

**Non-Goals:**
- Changing desktop navigation header.

## Decisions

- Update `<nav>` class in `BottomNav.svelte` to include `min-h-[44px]`.
- Update item link `<a>` class in `BottomNav.svelte` to use `min-h-[44px]`.

## Risks / Trade-offs

- None.
