## 1. Component Adaptability & Prop Support

- [x] 1.1 Update `src/lib/components/cart/OrderSummary.svelte` with `variant?: 'card' | 'sheet'`, `isExpanded?: boolean`, and `onToggleExpand?: () => void` to support full-bleed sheet layout with grab handle and collapsible receipt body
- [x] 1.2 Hide the static Order Summary card on mobile screens in `src/routes/cart/+page.svelte` (`hidden lg:block lg:col-span-5`)

## 2. Scroll-Triggered Expansion & Integration

- [x] 2.1 Add scroll sentinel element below `CrossSellRail` in `src/routes/cart/+page.svelte` and implement `IntersectionObserver` to toggle expanded state when scrolling past "You Might Also Like"
- [x] 2.2 Replace the duplicate mobile sticky checkout bar with the smart `OrderSummary` sheet component (`fixed bottom-14 left-0 right-0 sm:hidden`), verifying full-bleed edge-to-edge geometry and single-CTA rendering
- [x] 2.3 Verify manual tap-to-toggle, smooth expansion easing, responsive dark/light styling, and run `npm run check`
