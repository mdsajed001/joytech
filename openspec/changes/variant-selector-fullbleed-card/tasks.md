## 1. Container & Responsive Layout

- [x] 1.1 Update root container of `src/lib/components/product/ProductVariantSelector.svelte` with contrasting background `bg-[var(--color-bg-surface)]`, mobile full-bleed padding and margin `-mx-4 px-4 py-4`, mobile square corners `rounded-none`, mobile borders `border-y border-[var(--color-border-default)]`, and desktop card styling `sm:mx-0 sm:p-5 sm:rounded-2xl sm:border`. Verify markup and responsive classes.
- [x] 1.2 Verify that on mobile viewport (< sm), the selector background extends edge-to-edge to the screen boundaries without rounded corners, and on desktop (sm:) it displays as a floating rounded card.
- [x] 1.3 Verify that selection states, validation rings, and inner variant cards render cleanly against the new background in both light and dark modes.

## 2. Validation

- [x] 2.1 Run `npm run check` to confirm zero TypeScript or Svelte compiler errors across the workspace.
