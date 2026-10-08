## Context

The Joy Telecom homepage currently features a promotional banner slider only on mobile, while desktop displays a static text hero. High-urgency Flash Sale deals are rendered in a separate section below categories. This design outlines how to upgrade the desktop Hero into an edge-to-edge, 65%/35% split section combining the promotional banner slider and a live Flash Sale spotlight. See `proposal.md` for motivation.

## Goals / Non-Goals

**Goals:**
- Implement a full-width, edge-to-edge (`w-full`) Hero section without artificial max-width constraints.
- Display a side-by-side 65% / 35% split on desktop viewports (≥1024px):
  - Left (65%): Promotional banner slider with desktop arrow navigation and dot indicators.
  - Right (35%): Live Flash Sale spotlight module with countdown timer and compact 2x2 deal grid.
- Ensure aligned heights between the left slider and right flash sale panel for visual polish.
- Hide the duplicate lower Flash Sale section on desktop (`lg:hidden`) to eliminate page clutter.
- Maintain responsive continuity on mobile (<1024px).

**Non-Goals:**
- No backend timer synchronization (timer remains client-side reactive Svelte 5 state).
- No removal of mobile Flash Sale functionality.

## Decisions

### D1: Full-width edge-to-edge Hero layout with 65%/35% grid
**Choice**: Use `w-full px-2 sm:px-4 lg:px-6 py-3 sm:py-4` with a CSS grid or flex split on `lg` screens:
- Left container: `lg:w-[65%] shrink-0`
- Right container: `lg:w-[35%] shrink-0`
- Height: Fixed aligned height on desktop (e.g. `h-[420px]` or `min-h-[420px]`) so both columns align seamlessly.
**Rationale**: 65% width gives promotional banners high visual fidelity without letterboxing, while 35% accommodates 4 flash deal cards in a balanced 2x2 grid.
**Alternatives considered**: 50/50 split — rejected because wide banners look squished and cropped at 50% width.

### D2: Compact 2x2 Flash Sale deal spotlight
**Choice**: Design the right panel as a self-contained card (`rounded-[var(--radius-xl)] bg-[var(--color-bg-surface)] border border-[var(--color-border-default)] p-4 flex flex-col justify-between`):
- Header: ⚡ Flash Sale + discount badge + live countdown timer (`HH : MM : SS`).
- Grid: 2x2 grid displaying 4 items from `FLASH_SALE_PRODUCTS` with image, product name, discount price, and quick "Add" button triggering `cartState.addItem()`.
- Footer: Quick link ("View All Deals →").
**Rationale**: Drives instant conversion on the most urgent discounted products right upon page load.

### D3: Desktop arrow navigation for PromoBannerSlider
**Choice**: Add left and right arrow buttons to `PromoBannerSlider.svelte` that appear on desktop hover, triggering smooth scroll to `activeIndex - 1` and `activeIndex + 1`.
**Rationale**: Mouse users on desktop prefer clicking navigation arrows or dots over dragging horizontal scrollbars.

### D4: Desktop deduplication of lower Flash Sale section
**Choice**: Add `lg:hidden` to the standalone `<FlashSaleSection>` in `+page.svelte`.
**Rationale**: Prevents repeating the exact same 4 discounted items twice in the first two viewport scrolls on desktop, while preserving the standalone section for mobile users.

## Risks / Trade-offs

- **[Risk: Right-side 2x2 product cards feel cramped on small laptop screens (1024px–1180px)]** → Mitigation: Use compact card styling with 11px font sizes, 60px thumbnail images, and concise price displays tailored specifically for the 2x2 grid layout.
- **[Risk: Banner aspect ratio distortion when stretching full width]** → Mitigation: Use `object-cover` with `h-full w-full` to maintain sharp, un-distorted visuals across wide displays.
