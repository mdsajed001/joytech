## Why

In the mobile view of Joy Telecom, the Flash Sale product rail is nested inside a container with 16px horizontal padding (`px-4`). When users swipe horizontally through flash sale products, the cards abruptly clip 16px before the right edge of the screen, creating an awkward dead white space and hiding incoming cards. Making the scrollable rail full-bleed allows the cards to scroll seamlessly edge-to-edge all the way to the glass boundaries of the phone screen, providing an intuitive, premium e-commerce browsing affordance.

## What Changes

- Modify `src/lib/components/FlashSaleSection.svelte` so the horizontal scrolling track extends edge-to-edge on mobile using negative margins (`-mx-4 px-4 sm:mx-0 sm:px-0`).
- Add scroll padding (`scroll-pl-4 scroll-pr-4`) so snap points align with the 16px content gutter when resting.
- Preserve the existing card dimensions (`w-[180px]`) and crisp overflow without artificial gradient fades.
- Maintain the multi-column grid layout on tablet/desktop viewports (`sm:`, `md:`).

## Capabilities

### New Capabilities
- `flash-sale-mobile-scroll-bleed`: Defines the full-bleed edge-to-edge horizontal scroll behavior for the mobile Flash Sale product rail.

### Modified Capabilities
<!-- None -->

## Impact

- **Affected Components**: `src/lib/components/FlashSaleSection.svelte`
- **APIs/Data**: No data structures or external APIs are changed.
- **Dependencies**: No new dependencies.
