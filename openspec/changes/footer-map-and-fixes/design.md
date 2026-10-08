## Context

See `proposal.md` for motivation. The footer layout currently uses a 5-column grid on desktop (`lg:grid-cols-5`), featuring "Brand", "Top Categories", "Customer Service", and "Policies & Legal". On mobile, these lists toggle via local state, but the template string class logic is failing to apply correctly.

## Goals / Non-Goals

**Goals:**
- Fix the accordion toggle on mobile.
- Re-architect the desktop grid to fit a map preview for the Mirpur store.
- Re-architect the mobile layout to show the map prominently before the accordions.

**Non-Goals:**
- Removing any existing links (they will be consolidated, not removed).

## Decisions

- **Accordion Fix:** We will use Svelte's class directive `class:hidden={expandedSection !== 'section'}` on the `<ul>` tags, which correctly toggles the `hidden` utility without being broken by Svelte's class interpolation. We will keep `lg:!block` so they are always visible on desktop.
- **Layout Consolidation:** 
  - On desktop, the grid will remain `lg:grid-cols-5`. 
  - Column 1-2: Brand Information (unchanged).
  - Column 3: "Quick Links" (combining Top Categories and tracking/contact).
  - Column 4: "Support & Legal" (combining FAQ, warranty, shipping, and all legal links).
  - Column 5: "Find Us" map preview.
- **Map Implementation:** We will use an `<iframe src="https://www.google.com/maps/embed?...">` to embed a real Google Map of the Mirpur location. The iframe will be styled with `rounded-xl w-full h-40` (or `h-full` on desktop) for a premium look. An external `<a href="...">Get Directions</a>` link will be added below the iframe.
- **Mobile Map Placement:** The map container will be placed in the DOM before the link accordion containers, so on mobile (`grid-cols-1`) it stacks right under the Brand info.

## Risks / Trade-offs

- **Risk:** Loading an iframe can slightly impact page load performance.
  **Mitigation:** We will add `loading="lazy"` to the Google Maps iframe so it doesn't block the initial page render.
