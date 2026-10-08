## Context

See `proposal.md` for the motivation. The UI is built using Svelte and TailwindCSS. The trust points are currently rendered in `TrustGrid.svelte` via an array in `catalog.ts`. The mobile view currently stacks all five items vertically.

## Goals / Non-Goals

**Goals:**
- Apply responsive Tailwind classes to create a 2-column grid (`grid-cols-2`) for small screens.
- Hide the item description text on mobile screens (e.g. using `hidden sm:block`).
- Ensure the 5th item spans both columns on mobile so it is centered on the third row.

**Non-Goals:**
- Do not change the underlying data for the trust points in `catalog.ts`.
- Do not affect the desktop layout (`lg:grid-cols-5`).

## Decisions

- **Responsive Hiding:** We will use Tailwind's `hidden sm:block` for the description text (`<p>` tag inside the card) so it disappears entirely on screens smaller than the `sm` breakpoint.
- **Grid Layout Changes:** The container grid will be updated. Currently it is `grid-cols-1 sm:grid-cols-2 lg:grid-cols-5`. We will change the base class from `grid-cols-1` to `grid-cols-2`.
- **5th Item Handling:** The 5th item will span 2 columns on mobile only. Since there's an `#each` block, we can conditionally add a class for the last item, e.g. `class:col-span-2={i === 4} class:sm:col-span-1={i === 4}`.

## Risks / Trade-offs

- **Risk:** Dropping the description might confuse users if the title isn't self-explanatory.
  **Mitigation:** The Joy Telecom Promise titles are already punchy and standard e-commerce trust signals. The meaning is clear even without descriptions.
