# Proposal: Mobile Header Cart Icon & Add to Cart Micro-Interaction

## Why
On phone viewports, the bottom navigation bar is replaced by the sticky buy bar on the product details page, leaving mobile shoppers without an accessible cart navigation link. Furthermore, tapping "Add to Cart" currently lacks tangible visual feedback directed at the cart icon.

This change introduces a dedicated, touch-friendly cart icon in the mobile top header beside the hamburger menu. It also adds a synchronized micro-interaction: when a user adds a product to their cart, the top cart icon triggers a tactile nod animation (`nod-lift`) and its accent badge dynamically pops with the updated count.

## What Changes
- **Mobile Header Cart Button**:
  - Add a mobile cart button (`href="/cart"`) in `Header.svelte` on `< sm` viewports directly adjacent to the mobile menu trigger.
  - Follow the design system with `rounded-[var(--radius-sm)]` (8px), a 40px touch target, and `ShoppingBag01Icon`.
  - Include an accent-colored notification badge (`bg-[var(--color-accent)] text-white`) in the top-right corner showing current `cartCount`.
- **Add to Cart Micro-Interaction**:
  - Expose a reactive trigger (`lastAddedTimestamp`) in `CartState` whenever `addItem(...)` is invoked.
  - In `Header.svelte`, listen to cart additions and trigger the tactile `nod-lift-active` rightward nod animation on the cart icon.
  - Trigger a spring scale pop animation (`animate-badge-pop`) on the cart count badge when the number updates.
- **Design System Consistency**:
  - Strict adherence to design tokens (`--radius-sm`, `--color-accent`, `--color-brand-primary`, `--color-text-primary`).

## Capabilities

### New Capabilities
- `mobile-header-cart`: Defines requirements for mobile top-bar cart navigation and reactive micro-interactions on cart additions.

### Modified Capabilities
<!-- None. -->

## Impact
- `src/lib/state.svelte.ts`: Add `lastAddedTimestamp = $state(0)` and update it in `addItem`.
- `src/lib/components/Header.svelte`: Add the mobile cart icon markup, badge, and reactive animation handler.
- `src/routes/layout.css`: Add keyframe animation for badge pop micro-interaction (`@keyframes badge-pop`).
