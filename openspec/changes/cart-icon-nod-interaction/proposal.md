## Why

Currently, the Wishlist (love) and Remove (trash) icon buttons in `CartItemCard.svelte` trigger state mutations without immediate tactile visual feedback. Adding a fluid "nod & lift" micro-interaction (rising -4px and tilting +12° to the right before smoothly settling back to rest) provides instant tactile delight and tangible visual acknowledgement for customer interactions.

## What Changes

- Add a reusable CSS keyframe micro-interaction (`animate-nod-lift` / `nod-lift-active`) that lifts the button/icon upward by 4px, tilts it clockwise by 12°, and smoothly settles back with spring-like physics.
- Wire the micro-interaction to the Wishlist (love) and Delete (trash) icon buttons in `CartItemCard.svelte`.
- For the Delete button, introduce a brief grace delay (~200ms) before cart item unmounting so the tactile nod animation plays visibly to completion before removal.
- Ensure optimal touch accessibility with GPU-accelerated transforms (`transform`, `transform-origin: bottom center`) and responsive responsiveness across phone and desktop viewports.

## Capabilities

### New Capabilities
- `cart-item-card-interactions`: Interactive micro-animations, tactile feedback states, and removal transitions for cart item cards.

### Modified Capabilities
<!-- None: No existing specs in openspec/specs/ -->

## Impact

- `src/lib/components/cart/CartItemCard.svelte`: Button interaction handlers, animation classes, and CSS keyframe styles.
- User experience: Immediate visual feedback on Wishlist and Remove actions across mobile and desktop.
