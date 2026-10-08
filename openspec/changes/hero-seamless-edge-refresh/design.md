## Context

See `proposal.md` for background and motivation. The desktop Hero section previously had outer margins (`px-3 sm:px-4 lg:px-6 py-3.5`), rounded container radiuses, and an inter-column gap of `gap-4`. The deal cards in the Flash Sale section were also restricted to a miniature image height (`h-16`), which caused product details and badges to feel compressed. Furthermore, a redundant "Stock Dhaka" status pill in the footer consumed vertical space needed by the cards.

## Goals / Non-Goals

**Goals:**
- Eliminate outer padding and inter-column gaps so the Hero section stretches seamlessly from edge to edge with a clean vertical divider between the banner slider and the Flash Sale spotlight.
- Remove rounded corners (`rounded-none`) from the desktop Hero containers and the banner slider.
- Substantially enlarge the Flash Sale deal cards (increasing thumbnail height to ~96px–112px, providing larger typography and comfortable padding).
- Remove the "Stock Dhaka" footer element and allocate all available vertical space to the deal cards.
- Maintain equal height matching between the banner slider and the Flash Sale card with zero overflow.

**Non-Goals:**
- Modifying mobile hero behavior (< 1024px).
- Modifying product catalogue data, countdown timer calculations, or cart state management.

## Decisions

### 1. Zero-Gap Edge-to-Edge Desktop Layout
- **Choice**: Remove outer padding on `<section>` (`p-0`), remove `gap-4` on the flex container (`gap-0`), and add a single border separator (`border-r border-[var(--color-border-default)]`) between the 65% banner and the 35% flash sale module.
- **Rationale**: Creates an immersive, modern, full-bleed design where media fills the entire width and both columns meet flush.

### 2. Elimination of Corner Radiuses
- **Choice**: Replace `rounded-[var(--radius-xl)]` with `rounded-none` on the Hero container wrappers and in `PromoBannerSlider.svelte`. Keep subtle radiuses on individual internal deal cards (`rounded-[var(--radius-md)]`) to distinguish product cards against the subtle background.
- **Rationale**: Square container edges align perfectly with the browser viewport borders and adjacent page sections.

### 3. Enlarge Deal Cards & Reallocate Vertical Space
- **Choice**:
  - Increase the desktop Hero row height from `h-[400px]` to `h-[440px] xl:h-[460px]`.
  - Expand product image thumbnail frames from `h-16` to `h-24 sm:h-28` (`96px` to `112px`) with `object-cover`.
  - Increase title and price typography to `text-xs` and `text-[13px] font-black`.
  - Enlarge the Add to Cart CTA button to `px-3 py-1 text-[10.5px]`.
  - Remove the "Stock Dhaka" label from the footer and center the "Explore All Flash Deals" link.
- **Rationale**: This gives each of the 4 deal cards substantial breathing room, allowing high-resolution product photography to shine while keeping the entire module strictly contained.

## Risks / Trade-offs

- **[Risk] Banner aspect ratio adjustment on ultra-wide screens** → **Mitigation**: `PromoBannerSlider.svelte` uses `object-cover`, ensuring high-resolution banners fill the frame without distortion or letterboxing.
