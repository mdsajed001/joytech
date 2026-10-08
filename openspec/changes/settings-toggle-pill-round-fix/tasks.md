## 1. CSS Token & Design System Update

- [x] 1.1 Add `--color-border-subtle: #EEF2F6;` to `@theme` in `src/routes/layout.css` to prevent fallback to black `currentColor` in light mode.

## 2. Settings Toggle Component Updates

- [x] 2.1 Update the theme segmented control in `src/lib/components/profile/SettingsTab.svelte` with `p-1`, `rounded-full`, and `border-[var(--color-border-default)]` track, and `rounded-full` buttons where `min-w` equals height (`w-9 h-9 sm:w-10 sm:h-10 min-w-9 sm:min-w-10`) for Sun and Moon icons.
- [x] 2.2 Update the language segmented control in `src/lib/components/profile/SettingsTab.svelte` with `p-1`, `rounded-full`, and `border-[var(--color-border-default)]` track, with `rounded-full` active pill buttons for English and বাংলা.

## 3. Verification & Validation

- [x] 3.1 Run `npm run check` to verify TypeScript and Svelte diagnostics pass with 0 errors.
- [x] 3.2 Visually verify that the segmented toggles have smooth circular/pill active indicators and a soft subtle border in both light and dark modes.
