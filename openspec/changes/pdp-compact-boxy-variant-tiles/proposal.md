## Why

On mobile viewports, the variant selector currently stacks options in a single vertical column of tall, pill-rounded rows, consuming ~270px to 400px of screen height and pushing crucial purchase actions far below the fold. Redesigning these options into compact, strictly boxy tiles (`rounded-[var(--radius-sm)]`) in a 2-column mobile grid reduces vertical space consumption by over 65%, eliminates bubbly pill curves, and brings the component into harmony with the store's modern design system.

## What Changes

- **2-Column Compact Responsive Grid**: Switch mobile layout from single-column full-width rows (`grid-cols-1`) to a dense 2-column grid (`grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2`), allowing 4 options to fit neatly in just 2 compact rows.
- **Strictly Boxy Geometry**: Replace rounded-xl pill styling with crisp `--radius-sm` (8px) card corners and `--radius-xs` (4px) inner thumbnail corners, completely removing bubbly pill silhouettes.
- **High-Density Tile Architecture**: Re-architect tile interiors with a compact 32×32px product thumbnail, tight 2-line title and price display, and an unobtrusive checkmark selection badge.
- **Visual Feedback & Theme Coherence**: Maintain high-contrast brand selection highlights (`border-[var(--color-brand-primary)]`, subtle background tint, ring), hover feedback, tactile press states (`active:scale-[0.98]`), and dark mode styling.

## Capabilities

### New Capabilities
- `pdp-compact-boxy-variant-tiles`: Compact, strictly boxy product variant option tiles organized in a dense responsive grid.

### Modified Capabilities
<!-- None -->

## Impact

- **Affected Code**: `src/lib/components/product/ProductVariantSelector.svelte`.
- **Dependencies & APIs**: Pure UI layout update using existing Tailwind tokens and Svelte reactive states; no backend or schema changes.
