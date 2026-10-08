## Context

See [proposal.md](./proposal.md) for motivation.

The project's auth page (`AuthSplitLayout.svelte`) already implements the exact visual language needed: blue gradient background (`from-[#0066FF] via-[#0055D4] to-[#003E9E]`), ambient floating bubbles (`.bubble` elements with `floatBubble1`/`floatBubble2` keyframe animations), and the `+layout.svelte` root already has a `position: fixed` stacking context used by `ToastContainer`. The SVG logo is at `/static/Joy tech.svg` and consists of three filled `<path>` elements with `fill="#155BD2"`.

## Goals / Non-Goals

**Goals:**
- A single self-contained `SplashScreen.svelte` component with all animation logic and styles inside.
- Mount point in `+layout.svelte` — rendered above everything else via `position: fixed, z-[9999]`.
- Three-phase CSS animation driven entirely by keyframes (no JS timers driving DOM changes beyond the initial mount/unmount).
- `sessionStorage` gate so the splash shows only once per tab session.

**Non-Goals:**
- No loading indicator or progress bar — this is purely a brand moment, not tied to data fetching.
- No skip/dismiss button — auto-plays and exits.
- No `prefers-reduced-motion` conditional skip — the component still mounts but collapses the animation durations to near-zero via `@media (prefers-reduced-motion: reduce)`.

## Decisions

### 1. Inline SVG for the logo (not `<img>`)
- **Decision:** Inline the SVG paths directly into the component markup so individual `<path>` elements can be targeted with CSS for the stroke/fill animation.
- **Rationale:** An `<img>` tag treats the SVG as an opaque raster; CSS cannot reach inside its paths. `brightness-0 invert` (used on the auth page) converts the whole image to flat white but cannot animate a fill-in sequence.
- **Alternative considered:** CSS `filter` sequence — rejected because transitioning a `filter` drop-shadow or hue-rotate cannot replicate the stroke-only → fill-in sequence convincingly.

### 2. CSS animation sequence using `animation-delay` chaining
- **Decision:** Three keyframe animations on the logo `<g>` / `<path>` elements, chained by `animation-delay`:
  - `splashLogoReveal` (0s → 0.6s): `opacity: 0, scale(0.85)` → `opacity: 1, scale(1)`. Paths have `fill: none; stroke: white; stroke-width: 4`.
  - `splashLogoFill` (delay: 0.6s, duration: 0.45s): `fill` transitions from `transparent` → `white` on each path (using `@keyframes` on fill; note SVG `fill` is animatable via CSS).
  - `splashSlideOut` (delay: 1.4s, duration: 0.55s): applied to the root overlay div — `transform: translateY(0)` → `translateY(100%)`.
- **Total runtime:** ~2s from mount to DOM removal.

### 3. DOM removal via Svelte `$state` bound to `animationend`
- **Decision:** A `$state(true)` flag `visible` controls whether the component renders. An `animationend` listener on the root overlay flips `visible = false` when `splashSlideOut` fires, which removes the element from the DOM cleanly.
- **Rationale:** Keeps the unmount declarative and avoids a `setTimeout` that could drift from actual animation duration.

### 4. sessionStorage gate in `+layout.svelte`
- **Decision:** Before rendering `<SplashScreen />`, check `sessionStorage.getItem('splash_shown')`. If not set, render the component and set the flag. The component handles its own removal; the flag persists for the session.
- **Rationale:** Simple, zero-dependency, framework-agnostic. Survives SvelteKit client-side navigations because `+layout.svelte` is mounted once per tab lifetime.

### 5. Bubble count: 3 bubbles only
- **Decision:** Three bubbles (vs. 5 on the auth desktop panel) — slightly lighter since the splash is transient.

## Risks / Trade-offs

- **Risk:** SVG `fill` CSS animation has limited support in older browsers.  
  → **Mitigation:** All target browsers (modern evergreen) support it. A fallback static fill is fine for edge cases.

- **Risk:** `animationend` may not fire if the tab is hidden/backgrounded when animation completes.  
  → **Mitigation:** Add a `setTimeout` safety net (2.5s) that also sets `visible = false`, whichever fires first.

- **Risk:** SSR — `sessionStorage` is not available server-side.  
  → **Mitigation:** Wrap the check in `if (typeof sessionStorage !== 'undefined')` or use `onMount`.
