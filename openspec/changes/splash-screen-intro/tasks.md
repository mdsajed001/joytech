## 1. SplashScreen Component

- [x] 1.1 Create `src/lib/components/SplashScreen.svelte` with the full-viewport blue gradient overlay, 3 ambient animated bubbles (matching the `.bubble` style from `AuthSplitLayout.svelte`), and the inlined SVG logo centered — verify the file exists.
- [x] 1.2 Add the three-phase animation to the component: (a) `splashLogoReveal` keyframe — logo fades in from `opacity:0, scale(0.85)` with `fill:none; stroke:white; stroke-width:8` on paths; (b) `splashLogoFill` keyframe (delayed 0.6s) — fill transitions from transparent to white; (c) `splashSlideOut` keyframe on the root overlay (delayed 1.4s) — `translateY(0)` → `translateY(100%)` — verify animation CSS is present in the `<style>` block.
- [x] 1.3 Add `animationend` listener on the root overlay div that sets a Svelte `$state` flag to hide/remove the overlay when `splashSlideOut` fires; also add a 2500ms `setTimeout` safety net — verify the overlay disappears after ~2s.

## 2. Session Gate & Layout Integration

- [x] 2.1 In `src/routes/+layout.svelte`, import `SplashScreen` and add a `$state` flag `showSplash` initialized in `onMount` — set to `true` on every reload in `dev` mode or when `sessionStorage.getItem('splash_shown')` is falsy in production — verify SSR safety and ondismiss unmount.
- [x] 2.2 Render `{#if showSplash}<SplashScreen ondismiss={() => (showSplash = false)} />{/if}` at the very top of the layout markup (before the main content div) — verify it layers above all content via `position: fixed; z-index: 9999`.

## 3. Reduced Motion

- [x] 3.1 Add `@media (prefers-reduced-motion: reduce)` rule inside `SplashScreen.svelte` that collapses all animation durations to `0.01s` so the splash still mounts and unmounts but with no perceptible motion — verify rule is present in the `<style>` block.
