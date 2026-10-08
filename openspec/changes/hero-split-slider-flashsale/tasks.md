## 1. PromoBannerSlider Enhancements

- [x] 1.1 Upgrade `src/lib/components/PromoBannerSlider.svelte` with desktop hover navigation arrows (`<` and `>`), adaptable container height (`h-full` / `min-h-[380px]`), and responsive dot indicators. Verify: clicking arrows transitions slides on desktop and swipe gestures remain intact on mobile.

## 2. Hero Component Overhaul (Edge-to-Edge Split Layout)

- [x] 2.1 Refactor `src/lib/components/Hero.svelte` to an edge-to-edge layout (`w-full px-2 sm:px-4 lg:px-6 py-3 sm:py-4`) featuring a 65% / 35% side-by-side split on desktop (`lg:flex lg:gap-4`) and stacked flow on mobile. Verify: desktop renders the 65% slider and 35% flash sale module side-by-side with matched heights.
- [x] 2.2 Implement the 35% Flash Sale spotlight module in `Hero.svelte` with live countdown timer (`HH:MM:SS`), up to 40% OFF badge, a compact 2x2 grid of deal products with price tags, and direct "Add to Cart" actions. Verify: countdown timer ticks live and clicking "Add" increments cart and displays toast.

## 3. Page Layout & Desktop Deduplication

- [x] 3.1 Update `src/routes/+page.svelte` to hide the lower standalone `FlashSaleSection` on desktop viewports (`lg:hidden`). Verify: on desktop, flash sale items appear exclusively inside the Hero; on mobile, the lower flash sale section remains intact below Category chips.

## 4. Integration & Quality Verification

- [x] 4.1 Run `npm run check` (`svelte-check`) and `npm run build` (`vite build`). Verify: 0 errors, 0 warnings, and clean production build.
- [x] 4.2 Test desktop viewport (≥1024px): verify edge-to-edge full width, 65%/35% split, aligned heights, slider arrows, and 2x2 flash sale interaction.
- [x] 4.3 Test mobile viewport (<1024px): verify full-width slider hero, category chips, and lower scrollable flash sale section.
