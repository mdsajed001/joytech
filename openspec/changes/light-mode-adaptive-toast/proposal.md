## Why

Currently, toast notifications in `ToastItem.svelte` are hardcoded to dark colors (`bg-slate-900/92`, `text-white`, `border-white/18`). While this looks appropriate in dark mode, in light mode it remains dark, creating high contrast visual dissonance with the rest of the light interface.

Making the toast notification theme-adaptive ensures that light mode displays a crisp, premium light glass toast with dark text and borders, while dark mode retains its sleek, dark glass luminescence.

## What Changes

- **Theme-Adaptive Background and Border**: Update `ToastItem.svelte` container to use `bg-white/95 text-slate-900 border-slate-200/90 shadow-xl` in light mode, and `dark:bg-slate-950/94 dark:text-white dark:border-white/18` in dark mode.
- **Theme-Adaptive Typography & Badges**:
  - Title: `text-slate-500 dark:text-white/60`.
  - Message body: `text-slate-900 dark:text-white`.
  - Product thumbnail preview container: `bg-slate-100 border-slate-200/80 dark:bg-white/10 dark:border-white/15`.
  - Semantic icon containers: tuned to light and dark theme contrast.
- **Action & Dismiss Controls**:
  - Outlined/Solid CTA button: `bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100`.
  - Close button: `text-slate-400 hover:text-slate-700 hover:bg-slate-100 dark:text-white/50 dark:hover:text-white dark:hover:bg-white/10`.
- **Specular Top Light Rim**: Adapted for subtle light/dark contrast (`via-slate-300/50 dark:via-white/35`).

## Capabilities

### New Capabilities
- `theme-adaptive-toasts`: Dynamic light and dark theme visual presentation for all toast notifications.

### Modified Capabilities
<!-- None -->

## Impact

- `src/lib/components/toast/ToastItem.svelte`: Tailwind classes for card container, background dissolve, text colors, thumbnail wrapper, and action buttons.
