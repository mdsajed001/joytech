## Why

The Search CTA button in the header currently uses a static ambient dual-corner bubble gradient. Adding a subtle, gentle, and continuous position interchange between the two ambient white background bubbles (drifting between the top-right and bottom-left corners every 5 seconds) creates an engaging, high-end micro-animation that draws visual focus to the primary search action without distracting from the rest of the interface. This animation is strictly scoped to the Search CTA in the header, keeping all other blue action buttons (such as product card Buy Now buttons) static.

## What Changes

- Introduce a dedicated animated bubble style (`.cta-search-animated`) in CSS that gently interchanges the positions of two ambient white bubbles over a smooth 5-second transition cycle (10-second full loop).
- Use GPU-accelerated pseudo-elements (`::before` and `::after`) with CSS transforms for silk-smooth, 60fps/120fps motion with zero CPU layout shifts or repaint stutter.
- Apply this animation exclusively to the desktop and mobile Search CTA buttons in [Header.svelte](file:///c:/Users/Sajed/Documents/joytech/src/lib/components/Header.svelte).
- Preserve all existing `.cta-blue-bubble` classes across standard buttons (e.g. `ProductCard.svelte`, `SupportWidget.svelte`) in their static state.

## Capabilities

### New Capabilities
- `search-cta-animation`: Ambient white bubble position interchange micro-animation scoped strictly to the Header Search CTA button with gentle 5-second transitions.

### Modified Capabilities
<!-- None -->

## Impact

- **Affected Files**:
  - `src/routes/layout.css`: New keyframes and `.cta-search-animated` style rule.
  - `src/lib/components/Header.svelte`: Update desktop and mobile search buttons to utilize `.cta-search-animated`.
- **Dependencies**: No external dependencies added; pure CSS transforms and transitions.
- **Performance**: Zero CPU layout shifts; hardware-accelerated transforms ensure smooth 60fps/120fps animation.
