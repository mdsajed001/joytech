## Context

See proposal.md - Why.
In `CartItemCard.svelte`, the Wishlist (heart) and Delete (trash) icon buttons currently rely on basic hover opacity and background color transitions. When tapped on touchscreens or clicked with a mouse, there is no spatial feedback.

## Goals / Non-Goals

**Goals:**
- Create an organic, directional "nod and lift" keyframe animation (`@keyframes nod-lift`) with upward displacement (`-4px`) and rightward tilt (`+12°`).
- Trigger the animation reliably on both rapid mobile taps and desktop mouse clicks.
- Add a 200ms visual grace period for the Remove action so the user sees the button nod and lift before the item unmounts from the cart list.

**Non-Goals:**
- Global sound effects or haptic vibration APIs.
- Altering stepper button behaviors or other navigation icons outside `CartItemCard.svelte`.

## Decisions

### Decision 1: Pure CSS Keyframes with GPU Transforms
- **Choice**: Use CSS `@keyframes nod-lift` with `transform: translate(2px, -4px) rotate(12deg)` and `transform-origin: bottom center`.
- **Alternatives considered**:
  - *JavaScript requestAnimationFrame*: Unnecessary complexity and runtime overhead.
  - *CSS `:active` pseudo-class only*: Quick finger taps (30-50ms) on mobile phones prematurely abort `:active`, cutting the animation short before it can nod and return.
- **Rationale**: CSS keyframes running on compositor threads guarantee 60fps performance without stutter.

### Decision 2: Component-Level Interaction State
- **Choice**: Manage brief transient animation flags (`isWishlistNodding`, `isRemoveNodding`) in `CartItemCard.svelte` that apply the animation class on click and reset automatically.
- **Rationale**: Ensures the complete 320ms animation arc plays even on the quickest tap.

### Decision 3: Deletion Grace Delay (200ms)
- **Choice**: When Remove is clicked, set `isRemoveNodding = true`, disable the button, and defer `cartState.removeItem()` by 200ms.
- **Rationale**: Immediate deletion removes the card from the DOM at 0ms, preventing the user from ever seeing the animation.

## Risks / Trade-offs

- **[Double Tapping Delete]** → Disable the delete button immediately upon first click (`disabled={isRemoveNodding}`) to prevent duplicate invocation during the 200ms delay window.
- **[Reduced Motion Preferences]** → Wrap the animation in `@media (prefers-reduced-motion: reduce)` to gracefully fall back to opacity changes for users who request minimal motion.
