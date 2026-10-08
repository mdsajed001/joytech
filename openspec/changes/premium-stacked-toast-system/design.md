## Context

The storefront previously rendered toasts through a simple `cartState.toastMessage` string with duplicate DOM markup in `+layout.svelte` and `cart/+page.svelte`. The user requested an overhaul featuring:
1. Contextual actions (e.g. "View Cart") or a close cross (`[×]`).
2. Full-background dissolving progress dissipation (slow organic fade-out sweep of the entire background color fill rather than a sharp bottom wire).
3. Stacked notification queue support.

See `proposal.md` for motivation.

## Goals / Non-Goals

**Goals:**
- Centralize all toast state in `src/lib/state.svelte.ts` with support for multiple toasts, typed variants (`cart`, `success`, `warning`, `error`, `info`), optional actions, and configurable durations.
- Create `src/lib/components/toast/ToastContainer.svelte` and `ToastItem.svelte`.
- Implement full-background progress dissipation via an animated luminous gradient layer with feathered edge (`mask-image` or soft right-edge gradient sweep) that smoothly shrinks from 100% to 0% width over time.
- Implement hover/touch-pause by freezing the CSS animation running state and clearing/restoring the JavaScript expiration timeout.
- Render prominent **"View Cart"** button on cart toasts; render tactile close cross on others.
- Ensure desktop positioning at `top-6 right-6` and mobile positioning at `top-4 inset-x-4 max-w-sm mx-auto` (safe distance from bottom navigation bar).
- Remove redundant toast markup in `cart/+page.svelte`.

**Non-Goals:**
- External toast dependencies like Sonner or Svelte-Toast (built with pure Svelte 5 and Tailwind to maintain zero extra bundle footprint).

## Decisions

### 1. Unified Svelte 5 Reactive Toast Queue
- **Decision**: Store toasts in `cartState.toasts = $state<ToastPayload[]>([])`. Overload `showToast` so legacy string invocations `showToast("msg")` automatically map to `{ message: msg, type: 'info' }`, while object invocations `showToast({ message, type, action })` provide rich configuration.
- **Rationale**: 100% backward-compatible with all existing ~30 call sites in the repository while enabling instant upgrades for cart additions, errors, and warnings.

### 2. Full-Background Dissipation Layer vs Sharp Bottom Progress Bar
- **Decision**: Position an inner absolute layer `<div class="toast-dissolve-bg">` behind the text/icon content. Animate its width from `100%` to `0%` with a feathered gradient fade edge (`linear-gradient(to right, ... 90%, transparent 100%)`).
- **Rationale**: Completely eliminates the jarring, mechanical look of a thin bottom line. The entire notification radiates warmth and energy, then gently and organically fades down as it expires.

### 3. Glassmorphic Chassis & Top Specular Illumination
- **Decision**: Base chassis: `backdrop-blur-xl bg-slate-900/90 dark:bg-slate-950/90 border border-white/12 shadow-[inset_0_1px_0_rgba(255,255,255,0.18)]` with a colored ambient drop-shadow (`shadow-[0_12px_32px_rgba(...)]`).
- **Rationale**: Seamlessly blends into both light and dark themes while radiating luxury, depth, and tactile polish.

## Risks / Trade-offs

- **[Rapid spamming of add to cart]** → Cap maximum concurrent visible toasts to 3; older toasts are automatically pruned from the tail of the queue.
- **[Timer desynchronization on tab blur]** → CSS animation pause and JS timeout sync via `mouseenter`/`mouseleave` and `touchstart`/`touchend` listeners.
