## Why

On desktop computers, the hero section currently displays a static text-and-button banner, while high-impact promotional graphics and urgent time-limited Flash Sale deals are scattered across lower sections of the page. Unifying the promotional banner slider with a live Flash Sale spotlight module in an edge-to-edge, full-width desktop hero instantly commands attention above the fold, drives conversion, and eliminates layout redundancy.

## What Changes

- **Edge-to-Edge Desktop Hero (`w-full`)**: Expand the desktop hero container to take full edge-to-edge width across the viewport with subtle edge gutter padding.
- **Split Hero Layout (65% / 35%)**:
  - **Left Section (65% width)**: Houses the interactive promotional banner slider with responsive sizing, dot indicators, and desktop arrow navigation.
  - **Right Section (35% width)**: Houses a dedicated Flash Sale spotlight module featuring a live countdown timer (`HH:MM:SS`), discount kicker, and a compact 2x2 product card mini-grid with direct "Add to Cart" functionality.
- **Desktop Deduplication**: Hide the standalone lower `FlashSaleSection` on desktop viewports (`lg:hidden`) to avoid showing duplicate flash sale items twice within the initial scroll, while retaining it on mobile where it stacks naturally below Category chips.
- **Mobile Continuity (<640px / <1024px)**: On mobile viewports, the hero remains the full-width swipeable promotional banner slider, and Flash Sale displays in its streamlined mobile section.

## Capabilities

### New Capabilities
- `hero-split-slider-flashsale`: Defines the full-width edge-to-edge desktop hero layout featuring a 65% promotional banner slider on the left and a 35% compact 2x2 flash sale deal spotlight on the right, with responsive fallback on mobile and desktop deduplication.

### Modified Capabilities
_(none)_

## Impact

- **Affected Components**:
  - `src/lib/components/Hero.svelte`: Upgraded to host the edge-to-edge split desktop layout.
  - `src/lib/components/PromoBannerSlider.svelte`: Enhanced to adapt to desktop split dimensions with arrow controls.
  - `src/lib/components/FlashSaleSection.svelte` / `+page.svelte`: Lower flash sale section hidden on desktop (`lg:hidden`).
- **Dependencies**: No external libraries; uses native Svelte 5 and Tailwind CSS v4.
- **Breaking Changes**: None.
