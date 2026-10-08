## Why

On the `/cart` page, the current cross-sell section is titled "Frequently Bought Together" and displays items in an enclosed 2-column box with non-standard compact mini-cards. On mobile viewports, cards are clipped abruptly by the parent body padding and the box borders, preventing an intuitive swipe experience. Transitioning this section to "You Might Also Like" with standard homepage `ProductCard` components, edge-to-edge horizontal swiping on mobile, and a clean flex-wrap layout on desktop delivers a high-converting, visually rich discovery experience consistent with the Joy Telecom design system.

## What Changes

- **Rename Section**: Update the heading to "You Might Also Like" (Bengali: "আপনার পছন্দ হতে পারে") with a curated discovery subtitle.
- **Adopt Standard Product Cards**: Replace custom mini-cards with the standard `ProductCard.svelte` used on the homepage, preserving discounts, ratings, pricing, and animated Buy Now CTAs.
- **Mobile Full-Bleed Edge-to-Edge Scrolling**: On mobile screens (`< 1024px`), remove enclosing card borders and use negative margins (`-mx-4 px-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0`) so cards scroll freely from physical edge to edge without clipping at body padding.
- **Desktop Flex-Wrap (Option A)**: In desktop view (`lg: >= 1024px`), position the section within the left column (`lg:col-span-7`) underneath cart items and flex-wrap cards into clean rows rather than requiring horizontal scrolling.
- **Catalog Pool & Quick Add**: Offer 6 curated products not currently in the cart with instant add-to-cart functionality and toast feedback.

## Capabilities

### New Capabilities
- `cart-you-might-also-like`: Defines the responsive "You Might Also Like" recommendation rail on the cart page, specifying the full-bleed horizontal scroll behavior on mobile and the flex-wrap layout on desktop.

### Modified Capabilities
<!-- None -->

## Impact

- **Affected Components**: `src/lib/components/cart/CrossSellRail.svelte`
- **APIs/State**: Interacts with `cartState` (`items`, `addItem`) and `i18nState`.
- **Dependencies**: No external dependencies added; utilizes `@hugeicons/core-free-icons` and `ProductCard.svelte`.
