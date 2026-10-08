## Context

Currently, `ProfileDrawer.svelte` wraps the `reviewsSubTab` controls (`Pending Reviews` and `Past Reviews`) inside a styled inset container (`p-1 bg-[var(--color-bg-subtle)] border border-[var(--color-border-subtle)] rounded-[var(--radius-sm)]`), leaving noticeable padding gaps between the drawer walls and the sub-tab bar.

## Goals / Non-Goals

**Goals:**
- Convert the `reviewsSubTab` bar into a full-bleed block component (`-mx-4 -mt-4 sm:-mx-5 sm:-mt-5 mb-4`) that extends flush to the left, right, and top edges of the scrollable drawer content pane.
- Maintain smooth tab switching (`'pending' | 'past'`), badge count tracking, and dark mode theme compatibility.

**Non-Goals:**
- Altering product card layout, review rating mechanisms, or form interaction logic inside the sub-tab views.
- Modifying other drawer tabs (`orders`, `wishlist`, `addresses`, `returns`, `promos`).

## Decisions

### Decision 1: Negative Margin Container Bleed
- **Choice**: Apply `-mx-4 -mt-4 sm:-mx-5 sm:-mt-5 mb-4` to the outer sub-tab bar element in `type === 'reviews'`.
- **Rationale**: The scrollable drawer body uses `p-4 sm:p-5`. Using matching negative margins allows the sub-tab bar to bleed directly to the drawer borders without altering global drawer body padding.
- **Alternatives Considered**: Removing `p-4` from the outer drawer body conditionally (rejected because it adds complex state logic to the parent container).

### Decision 2: Flush 2-Column Grid Bar Styling
- **Choice**: Structure the bar as `<div class="grid grid-cols-2 border-b border-[var(--color-border-default)] bg-[var(--color-bg-subtle)]">` with `h-11 sm:h-12` buttons.
- **Rationale**: Gives both `Pending Reviews` and `Past Reviews` equal 50% width and clean visual separation, aligning with boxy design system rules (`rounded-none`).
- **Alternatives Considered**: Underline-only tabs with transparent background (rejected to maintain clear visual weight against the background header).

## Risks / Trade-offs

- **[Risk]** Layout shift if negative margins misalign on extreme mobile viewport sizes.
- **Mitigation**: Match negative margins (`-mx-4 sm:-mx-5`) precisely to the drawer body padding (`p-4 sm:p-5`).
