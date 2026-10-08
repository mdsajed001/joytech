## Context

The product variant selector component (`ProductVariantSelector.svelte`) displays compatible device models using pill-styled buttons inside a wrapping flex container. On mobile screens, having 3 or more models forces them to wrap into multiple rows, consuming excessive vertical space and cluttering the card layout. Furthermore, the rounded pill geometry clashes with the store's boxy CTA button design language.

## Goals / Non-Goals

**Goals:**
- Update phone model option buttons to a boxy CTA button style (`rounded-[var(--radius-sm)]`) with confident typography, crisp borders, and clear selected state.
- Create a single-row horizontally scrollable touch rail on mobile (`overflow-x-auto`, `flex-nowrap`, `touch-pan-x`, hidden scrollbars) so all options can be swiped through smoothly.
- Preserve text integrity with `shrink-0 whitespace-nowrap` on model buttons.
- Preserve multi-row wrapping on tablet and desktop viewports (`sm:flex-wrap`) for desktop mouse accessibility.
- Maintain validation ring and error message styling.

**Non-Goals:**
- Modifying the variant selection cards (images, prices, stock status) below the phone model selector.
- Changing backend data structures, product properties, or cart mutation logic.

## Decisions

### 1. Geometry and Corner Radius: `rounded-[var(--radius-sm)]` (8px)
- **Rationale**: The store design system standardizes on `--radius-sm` (8px) for modern, boxy CTA buttons. Using this token creates immediate visual consistency with primary CTAs.
- **Alternatives Considered**:
  - `rounded-xs` (4px): Too sharp and boxy, looks dated.
  - `rounded-xl` / `rounded-full` (existing pill): Round and bubbled, rejected by user.

### 2. Mobile-Only Horizontal Scroll Rail with Desktop Flex-Wrap
- **Rationale**: On mobile viewports (<640px), vertical viewport space is critical. A horizontal swipe rail keeps the section height fixed at a single row. On desktop screens (≥640px), horizontal swipe with a mouse is cumbersome; standard wrapping (`sm:flex-wrap`) is natural and comfortable.
- **Alternatives Considered**:
  - Horizontal scrolling across all viewports: Cumbersome for desktop mouse users.
  - Select dropdown: Obscures options behind an extra tap and hides compatible model availability at a glance.

### 3. Scrollbar Suppression & Touch Pan
- **Rationale**: Combining `[scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden` and `touch-pan-x` delivers native-speed gesture swiping without distracting desktop/mobile scrollbar tracks.
- **Alternatives Considered**:
  - Native visible scrollbar: Looks cluttered and cuts into button padding.

## Risks / Trade-offs

- **[Risk] Off-screen options might not be immediately obvious if an item ends exactly at the viewport boundary** → **[Mitigation]** The container uses natural gap spacing (`gap-2`) and right padding, ensuring adjacent items are partially sliced at typical mobile widths (360px–414px), giving an immediate visual clue that the rail is scrollable.
- **[Risk] Validation ring clipping inside an `overflow-x-auto` container** → **[Mitigation]** The error ring (`ring-2`) is placed on the container with `p-1` interior buffer so the ring and button borders remain fully visible without getting clipped by the scroll bounds.
