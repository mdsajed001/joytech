## Context

See `proposal.md` for motivation. Currently, `src/lib/components/cart/CrossSellRail.svelte` renders an enclosed card containing a 2-column grid of custom mini-cards. On mobile viewports, the parent container (`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`) imposes side body padding. An inner scroll container or boxed card with borders clips child elements before they reach the phone glass edge.

## Goals / Non-Goals

**Goals:**
- Replace custom cross-sell cards with the canonical `ProductCard.svelte` from the homepage.
- Implement full-bleed horizontal scrolling on mobile (`-mx-4 px-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0`) with hidden scrollbars and smooth snapping.
- Position the rail in the left column (`lg:col-span-7`) underneath cart items and flex-wrap cards into multi-column rows on desktop (`lg: >= 1024px`).
- Filter out items currently in the cart and provide 6 curated recommendations with instant quick-add capability.

**Non-Goals:**
- Moving the cross-sell section to the bottom of the page outside the left column (user selected Option A).
- Modifying `ProductCard.svelte` internals or adding carousel drag libraries.

## Decisions

### Decision 1: Mobile Full-Bleed Scroll vs Nested Padding
- **Choice**: Remove the enclosing border card and apply `-mx-4 px-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0` to the scroll container.
- **Rationale**: Negative margins allow the scroll track to extend to the physical screen edges (0px and 100vw), eliminating clipping at body padding while maintaining correct content gutter alignment (`px-4`) at rest.
- **Alternatives Considered**: Keeping cards inside the bordered card box resulted in awkward clipping and cramped cards on small screens.

### Decision 2: Desktop Flex-Wrap vs Desktop Horizontal Scroll
- **Choice**: Use responsive utility classes `flex overflow-x-auto lg:overflow-visible lg:flex-wrap` with card sizing `w-[170px] sm:w-[190px] lg:w-[calc(33.333%-11px)] shrink-0 lg:shrink`.
- **Rationale**: On desktop, the left column width (~720px) is ideal for 3 wrapped cards per row. This avoids requiring desktop users to scroll horizontally while displaying recommendations seamlessly below cart items.
- **Alternatives Considered**: Desktop horizontal carousel with arrow buttons was evaluated during explore, but user explicitly requested flex-wrap for PC view.

### Decision 3: Standard ProductCard Reuse
- **Choice**: Direct import and rendering of `<ProductCard {product} onAddToCart={handleQuickAdd} />`.
- **Rationale**: Ensures complete visual and interaction parity with homepage product grids, including rating stars, discount percentages, stock indicators, and the animated Buy Now CTA button.

## Risks / Trade-offs

- **[Risk] High item counts causing vertical clutter on desktop** → **Mitigation**: Slice recommendations to 6 items (exactly two 3-card rows on desktop), maintaining a tidy footprint below cart items.
- **[Risk] Mobile card sizing wrapping or shrinking unpredictably** → **Mitigation**: Apply `shrink-0 snap-start` with explicit width `w-[170px]` on mobile so swipe behavior remains crisp.
