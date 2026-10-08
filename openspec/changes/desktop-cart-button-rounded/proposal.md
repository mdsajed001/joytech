## Why

In desktop (PC) view, the header cart button currently uses a boxy corner radius (`rounded-[var(--radius-sm)]`), which creates an inconsistent visual silhouette alongside adjacent header utility icons (Wishlist and Account Profile) that use rounded pill circles (`rounded-full`). Updating the desktop cart button to a sleek pill-rounded geometry (`rounded-full`) unifies header ergonomics and delivers a smooth, cohesive look.

## What Changes

- **Pill-Rounded Desktop Cart Button**: Change the desktop cart button in `src/lib/components/Header.svelte` from `rounded-[var(--radius-sm)]` to `rounded-full`.
- **Preserved Interactions**: Keep all existing micro-interactions intact, including the nod-lift bounce on the shopping bag icon, badge pop animation, accent color counter pill, and brand color hover transitions.

## Capabilities

### New Capabilities
- `desktop-header-cart-pill`: Pill-rounded styling (`rounded-full`) for the desktop header cart button.

### Modified Capabilities
<!-- None -->

## Impact

- **Affected Code**: `src/lib/components/Header.svelte`.
- **Dependencies & APIs**: None; uses existing Tailwind utility classes.
