## 1. Phone Model Selector Container Rail

- [x] 1.1 Update `#device-model-selector` container in `ProductVariantSelector.svelte` to a single-row horizontal scroll rail on mobile (`flex flex-nowrap overflow-x-auto no-scrollbar touch-pan-x [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden`) and flex-wrap on desktop (`sm:flex-wrap`)
- [x] 1.2 Verify that horizontal scrolling allows swiping through all models without clipping buttons or validation outlines

## 2. Boxy CTA Button Style Implementation

- [x] 2.1 Update phone model buttons with boxy CTA styling (`rounded-[var(--radius-sm)]`), `shrink-0 whitespace-nowrap`, crisp borders, active state feedback, and high-contrast selected styling with checkmark
- [x] 2.2 Verify selected vs unselected states render with high contrast and legible typography in both light and dark themes

## 3. Responsive Verification & Quality Checks

- [x] 3.1 Verify on mobile viewport dimensions that all phone model options stay on a single horizontal row and can be swiped smoothly
- [x] 3.2 Verify on tablet and desktop viewports (`sm:` and above) that options wrap comfortably
- [x] 3.3 Run `npm run check` to confirm zero TypeScript and Svelte diagnostics errors
