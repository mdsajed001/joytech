## Why

The site currently loads directly into content with no branded moment. A lightweight splash screen adds a premium first impression, matching the app-like feel of the existing UI and reinforcing the Joy Telecom brand identity every time a user arrives.

## What Changes

- Add a new `SplashScreen.svelte` component to `src/lib/components/`.
- Mount the component globally in `src/routes/+layout.svelte` so it appears on every page entry.
- The splash is shown **once per browser session** (gated by `sessionStorage`) so it does not repeat on every navigation.
- The overlay covers the full viewport as a `position: fixed` layer with the brand's blue gradient background (`from-[#0066FF] via-[#0055D4] to-[#003E9E]`) and ambient animated bubble effect (matching the auth page style).
- The brand SVG logo is inlined and animated in three phases:
  1. **Draw-in**: Logo appears as a white outlined shape (stroke only, no fill) — fades in with a slight scale-up.
  2. **Fill**: The logo's fill transitions from transparent to white.
  3. **Exit**: The entire splash panel slides downward out of the viewport (`translateY(100%)`).

## Capabilities

### New Capabilities
- `splash-screen`: Branded intro overlay shown once per session on first page load.

### Modified Capabilities
- None

## Impact

- **New file:** `src/lib/components/SplashScreen.svelte`
- **Modified file:** `src/routes/+layout.svelte` — import and conditionally render `SplashScreen`
- **No new dependencies** — uses only CSS animations and the existing SVG asset
- **No routing changes** — the overlay is layout-level, independent of page content
