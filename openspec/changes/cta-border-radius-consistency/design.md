# Technical Design: CTA Border Radius Consistency

## Context
See `proposal.md` for background.
In `ProductCard.svelte` (line 105) and `Button.svelte` (line 37-39), buttons are styled with `rounded-[var(--radius-sm)]` (8px).
However, `ProductStickyBar.svelte` and `src/routes/product/[slug]/+page.svelte` currently employ `rounded-xl` for their CTA buttons and quantity steppers, giving them an overly circular/pill-like appearance that clashes with the rest of the interface.

## Goals / Non-Goals

**Goals:**
- Replace `rounded-xl` on CTAs in `ProductStickyBar.svelte` with `rounded-[var(--radius-sm)]`.
- Replace `rounded-xl` on the desktop action CTAs in `src/routes/product/[slug]/+page.svelte` with `rounded-[var(--radius-sm)]`.
- Update the stepper container border-radius to `rounded-[var(--radius-sm)]` for aesthetic harmony.

**Non-Goals:**
- Changing button height (`h-12`), colors, text labels, or internal layouts.
- Altering other non-CTA card containers.

## Decisions

### 1. Design Token Utilization
- **Decision**: Apply `rounded-[var(--radius-sm)]` directly to the CTA button class lists.
- **Rationale**: `var(--radius-sm)` resolves to `8px` defined in `layout.css`:
  ```css
  --radius-sm: 8px;
  ```
  This is the exact token utilized by `ProductCard.svelte`:
  ```svelte
  class="... rounded-[var(--radius-sm)] ..."
  ```
  It guarantees that all CTA buttons across the app share uniform 8px corner radii.

## Risks / Trade-offs

- **[Risk]** None identified. Changing border-radius utility classes does not alter element box sizing, flow, or functionality.
