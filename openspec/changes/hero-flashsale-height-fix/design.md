## Context

See `proposal.md` for background and motivation. In `src/lib/components/Hero.svelte`, the desktop view renders a split hero layout with a 65% width banner slider on the left and a 35% width Flash Sale spotlight on the right inside an `items-stretch` container. The right card overflowed downward past the banner boundary because it lacked `overflow-hidden` and `min-h-0`, and its internal 2x2 product card components (specifically `aspect-[4/3]` images, paddings, and button elements) were taller than the available vertical space.

## Goals / Non-Goals

**Goals:**
- Guarantee strict height equality between the left promotional banner slider and the right Flash Sale card on all desktop viewports (>= 1024px).
- Add strict overflow containment (`overflow-hidden`, `min-h-0`) to the right card container so no elements can ever spill downwards or overlap adjacent sections.
- Re-balance internal sizing for the Flash Sale countdown header, 2x2 product grid, and footer link so that all elements fit comfortably within the synchronized height without needing scrollbars or suffering ugly clipping.
- Maintain visual harmony with the Categories chip rail below the Hero section.

**Non-Goals:**
- Altering the mobile hero layout (< 1024px), which remains a single full-width promotional banner slider.
- Altering product data, countdown timer logic, or cart actions.
- Changing the 65% / 35% horizontal split ratio.

## Decisions

### 1. Containment & Equal Height Enforcement
- **Choice**: Apply `h-full min-h-0 overflow-hidden flex flex-col justify-between` to the right Flash Sale container within the shared desktop hero row.
- **Rationale**: Flex child elements default to `min-height: auto`, which prevents them from shrinking below content size and causes vertical overflow when content exceeds the parent height. Setting `min-h-0` and `overflow-hidden` guarantees strict containment within the container's bounds.
- **Alternative considered**: Allowing the container to grow dynamically based on the right card height. Rejected because the banner slider would stretch or letterbox, leaving excessive whitespace, and the hero would look overly tall.

### 2. Deal Card Density & Proportional Thumbnail Sizing
- **Choice**: 
  - Change product thumbnail from unbounded `aspect-[4/3]` to a controlled compact frame (e.g., `h-16 sm:h-18 w-full object-cover` or `aspect-[16/10] max-h-20`).
  - Set card padding to `p-2` (from `p-2.5`) and grid gap to `gap-2` (from `gap-2.5`).
  - Optimize deal typography: product title `text-[10.5px]` with truncation, price display `text-[11px] font-black`, and compact Add CTA button (`px-2 py-0.5 text-[9.5px]`).
- **Rationale**: This compact, precise geometry allows the 2x2 grid to occupy ~260px vertically. Combined with the header (~44px), footer (~32px), and container padding (`p-3.5` ~28px), the entire module occupies ~364px, easily fitting inside the 400px–420px banner height with balanced margins.
- **Alternative considered**: Switching to a 1-column list of 3 items instead of 2x2. Rejected because 4 deal items provide higher density and better product showcase.

### 3. Container Height Tuning
- **Choice**: Maintain a consistent height across standard desktop screens (e.g. `h-[400px]` or `lg:h-[400px] xl:h-[420px]`).
- **Rationale**: Provides consistent visual proportions for both the 16:9 banner images and the 4 deal cards across 1080p, 1440p, and laptop screens.

## Risks / Trade-offs

- **[Risk] Product titles may truncate on narrower desktop screens (1024px–1150px)** → **Mitigation**: Add `title={product.name}` HTML tooltip on the title header so full name remains accessible on hover.
- **[Risk] Image aspect ratio changes could distort images** → **Mitigation**: Use `object-cover` and maintain clean thumbnail backgrounds with centered placement.
