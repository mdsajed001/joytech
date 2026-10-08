## Context

The application relies on CSS custom properties for theming (`--color-bg-canvas`, `--color-bg-surface`, `--color-border-default`, etc.) defined in `src/routes/layout.css` and applied via `html.dark`. Several homepage components retained hardcoded Tailwind utility classes (`bg-white`, `from-white`, `border-gray-100`) from initial development instead of referencing theme tokens.

## Goals / Non-Goals

**Goals:**
- Guarantee seamless dark mode visual styling across all homepage sections with zero white flashes or blinding stripes.
- Fix countdown timer digit contrast so digits are consistently legible in both light and dark themes.
- Harmonize hover and focus states with theme tokens.

**Non-Goals:**
- Modifying underlying catalog data, routing, or state stores.
- Redesigning the layout architecture or typography sizing.

## Decisions

1. **Token Adoption over Hardcoded Colors**: Replace all hardcoded `bg-white` classes on Home Page sections with `bg-[var(--color-bg-surface)]`. This keeps sections bright white in light mode (`#FFFFFF`) and dark surface in dark mode (`#131B2E`).
2. **Countdown Clock Inverse Contrast**: Replace `bg-[var(--color-text-primary)] text-white` with `bg-[var(--color-bg-inverse)] text-[var(--color-text-inverse)]`. In light mode, this renders white text on `#0B111E` background; in dark mode, it renders dark text on `#FFFFFF` background, guaranteeing high-contrast legibility.
3. **Category Fade Mask & Navigation Buttons**: Replace `from-white` with `from-[var(--color-bg-surface)]` and change arrow button styles to use `bg-[var(--color-bg-surface)]` with `border-[var(--color-border-default)]`.
4. **Subtle Dark Mode Badge Tokens**: Add dark-mode translucent overrides in `layout.css` for `--color-danger-bg`, `--color-warning-bg`, and `--color-success-bg` to prevent stark pastel flashes on product cards in dark mode.

## Risks / Trade-offs

- *[Risk]*: Passing Tailwind classes via component props (e.g. `bgColor="bg-white"`).
  *Mitigation*: Update default prop in `ProductSection.svelte` to `'bg-[var(--color-bg-surface)]'` and update `+page.svelte` caller.
