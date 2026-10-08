## Context

See `proposal.md` for background and motivation. `ProductCard.svelte` currently uses a uniform `p-3` (12px) padding on the body wrapper across all screen sizes. On mobile viewports (< 640px), where products are displayed in a two-column grid, 12px padding consumes excessive card area, squishing titles and the bottom pricing/buy row.

## Goals / Non-Goals

**Goals:**
- Update `ProductCard.svelte` body container from `p-3` to `p-2 sm:p-3`.
- Provide an even, balanced 8px padding on all 4 sides (top, right, bottom, left) on mobile devices.
- Retain standard 12px padding (`sm:p-3`) on desktop and tablet screens.
- Ensure all inner card elements (brand label, 2-line title, review rating, pricing, and Buy button) maintain balanced internal proportions.

**Non-Goals:**
- Modifying image aspect ratio or badge positions.
- Changing desktop typography or card radius tokens.

## Decisions

### Decision: Symmetric `p-2 sm:p-3` Utility
- **Chosen Approach**: Use Tailwind's `p-2 sm:p-3` on the body container `<div class="p-2 sm:p-3 flex flex-col flex-1">`.
- **Rationale**: Sets exactly 8px padding on all 4 edges on mobile and 12px on larger screens. This gives the content 8px more horizontal width and 8px more vertical space on mobile devices without any asymmetry.
- **Alternatives Considered**: 
  - `px-2 py-2.5`: Rejected because user explicitly asked for "even" padding on all 4 sides.

## Risks / Trade-offs

- **[Risk]** Text crowding the divider border → **Mitigation**: The price/CTA row has `pt-2 border-t`, which already provides an 8px top spacer above the border line, keeping visual separation clean.
