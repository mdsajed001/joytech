## Context

See `proposal.md` for motivation. Currently, in `ProductVariantSelector.svelte`, the root container is a transparent `<div class="space-y-4">` rendered inside the product page container (`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`).

## Goals / Non-Goals

**Goals:**
- Give the variant and model selection section an elevated, distinct background (`var(--color-bg-surface)`).
- On mobile viewports (`< sm`), achieve true screen-edge full bleed by cancelling the parent's `px-4` padding with `-mx-4 px-4 py-4`, using square corners (`rounded-none`) and top/bottom borders (`border-y border-[var(--color-border-default)]`).
- On desktop viewports (`sm:` and up), restore standard container bounds with `sm:mx-0`, `sm:rounded-2xl`, four-sided border `sm:border`, and internal padding `sm:p-5`.
- Preserve inner interactive chips, variant card selection states, and validation highlight rings.

**Non-Goals:**
- Altering the layout or styling of other product page sections (media gallery, reviews, specs table).
- Changing variant pricing logic or cart submission contracts.

## Decisions

### Decision: Apply container classes directly to the root element of `ProductVariantSelector.svelte`
- **Choice**: Style the outermost wrapper in `ProductVariantSelector.svelte` with:
  `-mx-4 px-4 py-4 sm:mx-0 sm:p-5 rounded-none sm:rounded-2xl bg-[var(--color-bg-surface)] border-y sm:border border-[var(--color-border-default)] shadow-xs transition-colors`
- **Rationale**: Keeps the visual encapsulation and responsive geometry contained within the variant selector component itself, without requiring changes to the parent page layout.
- **Alternatives Considered**:
  - *Wrapping `ProductVariantSelector` in a parent `div` in `+page.svelte`*: Spreads styling across two files and risks duplicating layout margin adjustments.

### Decision: Use `border-y` on mobile and `sm:border` on desktop
- **Choice**: Render top and bottom divider borders when bleeding to the edge on mobile (`border-y`), transitioning to a complete 4-sided card border on desktop (`sm:border`).
- **Rationale**: Side borders are invisible or awkward when touching the screen edge; top and bottom divider lines clearly separate the band from the title/price section above and quantity/action buttons below.

## Risks / Trade-offs

- **[Risk]** Parent horizontal padding changing from `px-4` on different viewports.  
  → **Mitigation**: The product page explicitly defines `px-4` for mobile `< sm`, perfectly matched by `-mx-4 px-4`.
