# Proposal: Settings Toggle Pill Rounding & Border Softening

## Why

In `SettingsTab.svelte`, the theme and language segmented controls display an awkward, lopsided active indicator where icon-only buttons appear squished and clipped flush against the capsule edges. Furthermore, a missing CSS token definition in light mode causes the track border to fall back to `currentColor`, resulting in a harsh, pitch-black outline around the controls.

## What Changes

- **Pill Geometry & Track Padding**: Redesign the segmented control track with `rounded-full p-1 bg-[var(--color-bg-subtle)]` and a clean soft border (`--color-border-default` or `--color-border-subtle`), allowing active indicators to float comfortably inside the track.
- **Round Indicator (`min-w = height`)**:
  - Enforce `rounded-full` on all segmented buttons.
  - Enforce that the active indicator's minimum width equals its height (`min-w = height`, e.g. `min-w-9 h-9 sm:min-w-10 sm:h-10`), ensuring icon buttons (Sun and Moon) form perfect 1:1 circles instead of squashed ovals.
  - Text-based options ("System", "English", "বাংলা") maintain full round pill ergonomics with comfortable horizontal padding (`px-4` or `px-5`).
- **Fix Harsh Black Line**:
  - Define `--color-border-subtle: #EEF2F6;` in `layout.css` under light mode `@theme` to prevent CSS fallback to pitch black `currentColor`.
  - Ensure the segmented control container uses a subtle, harmonious border (`border-[var(--color-border-default)]` or `border-[var(--color-border-subtle)]`).

## Capabilities

### New Capabilities
- `settings-toggle-controls`: Visual styling, layout padding, and indicator geometry rules for segmented theme and language toggle controls in user settings.

### Modified Capabilities
<!-- None -->

## Impact

- **Affected Files**:
  - `src/lib/components/profile/SettingsTab.svelte`: Updated track and button classes for theme and language segmented controls.
  - `src/routes/layout.css`: Added `--color-border-subtle` token in light mode.
