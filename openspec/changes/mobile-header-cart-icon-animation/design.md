# Technical Design: Mobile Header Cart Icon & Add to Cart Micro-Interaction

## Context
See `proposal.md` for background.
Currently in `Header.svelte`, the cart button is configured with `hidden sm:flex`, rendering it invisible on mobile viewports (< 640px). On product detail pages, the bottom sticky bar replaces the mobile bottom navigation, leaving users without any cart link in the viewport. When items are added to the cart, feedback is only given via toast, without tactile visual resonance on the cart icon or count badge.

## Goals / Non-Goals

**Goals:**
- Provide a dedicated, touch-friendly mobile cart navigation button on `< sm` viewports adjacent to the hamburger menu.
- Display a floating accent badge (`bg-[var(--color-accent)]`) on the mobile cart icon reflecting `cartCount`.
- Expose a reactive trigger `lastAddedTimestamp` in `CartState` to announce cart addition events.
- Animate the top cart icon with the project's existing `@keyframes nod-lift` (`nod-lift-active`) and pop the badge with `@keyframes badge-pop` whenever `addItem` is executed.
- Ensure consistent design tokens (`--radius-sm`, `--color-accent`, 40px touch targets).

**Non-Goals:**
- Changing desktop navigation structure or mega-menu drawers.
- Modifying cart persistence or checkout flow.

## Decisions

### 1. Mobile Cart Button Placement
- **Decision**: Place the mobile cart anchor directly beside the mobile menu trigger inside `Header.svelte`:
  ```svelte
  <div class="flex items-center gap-1.5 sm:gap-2">
    <!-- Desktop Cart (hidden on mobile) -->
    <!-- Mobile Cart Button (hidden sm:hidden) -->
    <!-- Mobile Menu Trigger (lg:hidden) -->
  </div>
  ```
- **Rationale**: Keeps navigation actions grouped on the right side of the header where mobile thumbs naturally reach.

### 2. Reactive Event Architecture
- **Decision**: Add `lastAddedTimestamp = $state<number>(0)` to `CartState` in `src/lib/state.svelte.ts`. Whenever `addItem` is called, `this.lastAddedTimestamp = Date.now()` is set.
- **Rationale**: Svelte 5 runes handle fine-grained reactivity elegantly without needing custom DOM event bubbling or external pub/sub stores.

### 3. Micro-Interaction Keyframes
- **Decision**:
  - Icon: Utilize existing `.nod-lift-active` class to rotate and lift the icon.
  - Badge: Create `@keyframes badge-pop` with a cubic-bezier spring curve (`cubic-bezier(0.34, 1.56, 0.64, 1)`):
    ```css
    @keyframes badge-pop {
      0% { transform: scale(1); }
      35% { transform: scale(1.4); }
      65% { transform: scale(0.9); }
      100% { transform: scale(1); }
    }
    .badge-pop-active {
      animation: badge-pop 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
      will-change: transform;
    }
    ```
- **Rationale**: Combining the tactile icon nod with a spring scale badge pop provides high-end visual feedback and clear acknowledgement of added products.

## Risks / Trade-offs

- **[Risk]** Rapid repeated clicks on "Add to Cart" could interrupt or clip the animation.
  - **Mitigation**: Reset and restart the animation classes using `requestAnimationFrame` on each timestamp change.
