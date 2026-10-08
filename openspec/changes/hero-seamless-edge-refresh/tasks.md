## 1. Seamless Edge-to-Edge Hero Overhaul

- [x] 1.1 Update `src/lib/components/Hero.svelte` and `src/lib/components/PromoBannerSlider.svelte` to remove outer padding (`p-0`), remove inter-column gaps (`gap-0`), and eliminate container corner radiuses (`rounded-none`).
- [x] 1.2 Enlarge the Flash Sale deal cards in `Hero.svelte` with taller product image frames (`h-24 sm:h-28`), generous card padding (`p-2.5`), larger font sizes, and adjust hero height to `h-[440px] xl:h-[460px]` so product details breathe freely.
- [x] 1.3 Remove the "Stock Dhaka" status indicator from the Flash Sale footer in `Hero.svelte`, dedicating the extra vertical space to the 2x2 cards and centering the "Explore All Flash Deals" link.

## 2. Validation & Verification

- [x] 2.1 Run `npm run check` and verify zero Svelte/TypeScript errors.
- [x] 2.2 Run `npm run build` to verify production bundle builds cleanly.
- [x] 2.3 Verify visually in the browser that the Hero section sits completely edge-to-edge with square container edges, spacious deal cards, and a clean footer.
