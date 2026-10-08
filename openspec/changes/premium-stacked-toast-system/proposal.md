## Why

The current toast system suffers from several critical UX and visual flaws: duplicate ad-hoc implementations in `+layout.svelte` and `cart/+page.svelte`, a flat pitch-black container with no physical depth, a single global string state that clobbers rapid notifications, misleading orange checkmarks used indiscriminately for errors and warnings, and zero contextual actions (like "View Cart"). 

We introduce a unified, multi-card stacked toast notification system with soft, dissolving full-background progress dissipation, tactile micro-animations, semantic variants, and contextual actions.

## What Changes

- **Stacked Toast Queue**:
  - Refactor `cartState` in `src/lib/state.svelte.ts` to manage a reactive array of active toasts (`toasts: ToastItem[]`), allowing multiple notifications to stack cleanly with a spring entry and vertical stagger.
- **Full-Background Dissolving Progress Bar**:
  - Instead of a thin wire progress line, the entire background fill and ambient glow smoothly dissipate/fade out across the notification's duration, creating an organic breathing expiration effect.
  - Hovering or holding touch freezes dissipation and timer immediately.
- **Contextual Action Buttons & Close Cross**:
  - Cart addition toasts feature an instant **"View Cart &rarr;"** CTA button leading to `/cart`.
  - Toasts without dedicated actions provide an accessible, tactile close cross (`[×]`) button.
- **Semantic Hierarchy & Physical Depth**:
  - Distinct variants: `cart` (brand blue glow), `success` (emerald glow), `warning` (amber glow), `error` (crimson red glow), and `info` (cyan/sky glow).
  - Glassmorphic acrylic chassis (`backdrop-blur-xl bg-slate-900/92 dark:bg-slate-950/92 border border-white/12`) with an inner specular top highlight and dynamic colored under-glow.
- **Consolidation**:
  - Create `ToastItem.svelte` and `ToastContainer.svelte`.
  - Remove duplicate toast markup from `src/routes/cart/+page.svelte` and `src/routes/+layout.svelte`, routing all notifications through the new unified container.

## Capabilities

### New Capabilities
- `stacked-toast-system`: Architecture, state management, full-background dissolving timer bleed, spring stack physics, and contextual action behaviors for global site notifications.

### Modified Capabilities
<!-- None -->

## Impact

- **Affected Files**:
  - `src/lib/state.svelte.ts` (toast state management & `showToast` API)
  - `src/lib/components/toast/ToastItem.svelte` (new component)
  - `src/lib/components/toast/ToastContainer.svelte` (new component)
  - `src/routes/+layout.svelte` (mount toast container)
  - `src/routes/cart/+page.svelte` (remove duplicate toast)
- **Dependencies**: Uses existing `@hugeicons/core-free-icons`, Svelte 5 runes. Zero new external dependencies.
