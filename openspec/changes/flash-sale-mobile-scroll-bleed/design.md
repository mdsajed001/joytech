## Context

See `proposal.md` for motivation. In [`FlashSaleSection.svelte`](file:///c:/Users/Sajed/Documents/joytech/src/lib/components/FlashSaleSection.svelte), the product list container is rendered inside `<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">`. On mobile devices (<640px), the horizontal scroll rail is constrained within this `px-4` (16px) boundary, causing products to be cut off 16px before the right screen edge.

## Goals / Non-Goals

**Goals:**
- Extend the mobile horizontal scroll rail to 100% of the viewport width with no clipping boundaries at the screen edges.
- Maintain initial alignment of the first product card with the section header at resting position (`scrollLeft = 0`).
- Ensure touch snap behavior aligns cleanly to the 16px grid line.
- Preserve responsive desktop multi-column grid layout without visual side effects.

**Non-Goals:**
- Adding gradient mask fades or edge overlays.
- Altering card dimensions (`w-[180px]` remains unchanged).
- Changing timer logic, products catalog, or desktop Hero split flash deals.

## Decisions

### 1. Full-Bleed Negative Margin & Padding Technique
- **Decision**: Apply `-mx-4 px-4 sm:mx-0 sm:px-0` to the scroll container.
- **Rationale**: This cancels the parent container's 16px padding on mobile viewports while restoring internal 16px padding on the track, matching the proven pattern in [`CategorySection.svelte`](file:///c:/Users/Sajed/Documents/joytech/src/lib/components/CategorySection.svelte). On screens >= 640px (`sm:`), margins and padding reset to 0 to seamlessly retain the grid layout.
- **Alternatives Considered**: Moving the scroll container outside the `max-w-7xl` container was rejected because it would duplicate layout wrappers and complicate desktop alignment.

### 2. Snap Padding & Scroll Alignment
- **Decision**: Add `scroll-pl-4 scroll-pr-4 sm:scroll-p-0`.
- **Rationale**: When users flick through cards with `snap-mandatory snap-start`, CSS scroll padding ensures the active card snaps aligned with the 16px content gutter rather than hard-sticking to the 0px phone edge.

### 3. Crisp Edge-to-Edge Visual Treatment (No Fade Mask)
- **Decision**: No gradient fade or mask applied to the container edges.
- **Rationale**: Directly aligns with the user's preference for an un-hidden, crisp bleed where cards stay 100% visible till the edge of the phone screen.

## Risks / Trade-offs

- **[Risk] Horizontal scrollbar visible on some mobile browsers** → **Mitigation**: Existing utility classes `[scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden` remain intact.
- **[Risk] Layout spill on parent container** → **Mitigation**: Parent `section` is already width-constrained and does not cause page horizontal blowout because `-mx-4` exactly matches `px-4`.
