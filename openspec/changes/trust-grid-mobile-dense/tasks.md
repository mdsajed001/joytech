## 1. TrustGrid Redesign

- [x] 1.1 Update Grid Container Layout: Update `src/lib/components/TrustGrid.svelte` to change the grid container class from `grid-cols-1` to `grid-cols-2`. Verify by inspecting the grid layout on mobile screens in the dev server.
- [x] 1.2 Hide Description on Mobile: Update the description `<p>` tag in `TrustGrid.svelte` by adding `hidden sm:block` classes so it only appears on screens larger than the sm breakpoint. Verify the description text is hidden on small mobile views and visible on desktop.
- [x] 1.3 Center Content Vertically: Update the card container in `TrustGrid.svelte` to ensure it has `justify-center` so that when the description is missing, the icon and title are vertically centered. Verify the visual alignment on mobile screens.
- [x] 1.4 Handle 5th Item Alignment: Add `i` as the index in the `{#each}` block in `TrustGrid.svelte`, and conditionally add classes for the 5th item (e.g., `class:col-span-2={i === 4} class:sm:col-span-1={i === 4}`) so it spans both columns on mobile. Verify the 5th item is centered on the 3rd row on mobile and perfectly aligned on desktop.
