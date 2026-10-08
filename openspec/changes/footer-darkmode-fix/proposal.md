## Why

In `Footer.svelte`, the footer element uses `bg-[var(--color-bg-inverse)]`, which resolves to `#FFFFFF` (white) in dark mode according to `layout.css`. Because all typography, section titles, links, icons, and borders inside `Footer.svelte` use hardcoded white utility classes (`text-white`, `text-white/70`, `border-white/10`), activating dark mode results in white text on a white background, rendering the entire footer unreadable.

Updating the footer to a dedicated deep dark slate/navy architecture (`bg-[#0B111E] dark:bg-[#070B14]`) ensures consistent contrast, crisp typography, and seamless dark mode theme integration.

## What Changes

- **Consistent Dark Background**: Replace `bg-[var(--color-bg-inverse)]` with an explicit deep navy/slate grounding theme (`bg-[#0B111E] dark:bg-[#070B14]`).
- **High-Contrast Slate Typography**: Replace hardcoded `text-white/70`, `text-white/60`, and `text-white/80` with semantic slate tokens (`text-slate-300`, `text-slate-400`, `hover:text-white`).
- **Slate Borders & Containers**: Update section dividers and map container borders to `border-slate-800` / `border-slate-800/80` for clean definition in both light and dark modes.

## Capabilities

### New Capabilities
- `footer-layout`: High-contrast grounding footer styling for light and dark mode themes.

### Modified Capabilities
(None)

## Impact

- `src/lib/components/Footer.svelte`: Refactored background classes, text colors, and section border utility classes.
