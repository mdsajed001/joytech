## Why

The floating bubble animation on checkout CTAs (`.cta-checkout-animated`) suffers from a geometric cutoff at the 50% keyframe. Because the pseudo-elements were styled as elongated rectangles (`170%` width by `170%` height on a 360x48px button) with a default `farthest-corner` gradient radius exceeding the element's height, translating them by 50% dragged the physical 90-degree corner of the pseudo-element directly into the center of the button. This caused the animation to look sharp, boxy, and cut off rather than remaining a fluid, organic bubble.

## What Changes

- **True Circular Geometry**: Refactor animated bubble pseudo-elements (`::before` and `::after`) into true circular orbs (`border-radius: 50%`, `aspect-ratio: 1/1`) with zero-opacity boundary falloffs.
- **Radial Gradient Boundary Taper**: Ensure the radial gradient reaches 0% opacity (`transparent`) before the physical boundary of the pseudo-element, eliminating hard clipping borders.
- **Calibrated Translation Keyframes**: Adjust translation distances so bubbles glide smoothly between corners (top-right to bottom-left and bottom-left to top-right) without ever pulling straight element edges into the visible button area.
- **Cross-Component Polish**: Ensure full visual consistency on wide checkout buttons (`OrderSummary`, mobile sticky checkout, checkout modal) and compact search buttons.

## Capabilities

### New Capabilities
- `smooth-checkout-cta-bubbles`: Defines the circular orb geometry, zero-opacity falloffs, and smooth translation keyframes for animated bubble CTAs across the application.

### Modified Capabilities
<!-- None -->

## Impact

- **Affected Components**: `src/routes/layout.css` (`.cta-checkout-animated`, `.cta-search-animated`, and their keyframes).
- **APIs/State**: No state or API changes.
- **Dependencies**: Pure CSS animation using GPU-composited `transform` and `opacity`.
