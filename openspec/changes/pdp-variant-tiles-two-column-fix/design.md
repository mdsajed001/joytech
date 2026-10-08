## Context

See proposal.md - Why. In `ProductVariantSelector.svelte`, the variant cards container was configured with `grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2`. Because the product details purchase box lives inside a 5-column desktop sidebar (`lg:col-span-5` of ~420px–480px width), `lg:grid-cols-4` forced 4 option tiles into a single line, causing severe text truncation down to fragments like "Rec", "Blue • 6", etc.

## Goals / Non-Goals

**Goals:**
- Replace the multi-column breakpoint classes with a clean, consistent `grid-cols-2` across all breakpoints.
- Ensure 4 variants always split into 2 rows of 2 items, providing ~210px of width per tile.
- Guarantee that variant titles, prices, and checkmark badges render without truncation or overlap.

**Non-Goals:**
- Modifying the phone model selector or cart actions.
- Changing individual tile styling, tokens, or event handlers.

## Decisions

### 1. Consistent 2-Column Grid (`grid-cols-2`)
- **Rationale**: Since the purchase box container on desktop is already constrained to a ~450px sidebar, 2 columns is the optimal density. It preserves the compact boxy tile aesthetic while providing ample room for full text strings like "Red • 64W Ultra" and "Titanium Gray • MagSafe".
- **Alternatives Considered**:
  - `lg:grid-cols-3` or `lg:grid-cols-4`: Stretches or squashes tiles too aggressively, leading to text truncation.

## Risks / Trade-offs

- None identified; pure class adjustment on the grid container.
