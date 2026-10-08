## Context

See proposal.md - Why. Currently, `ProductVariantSelector.svelte` renders variant options as 1-column full-width cards with `rounded-xl` pill curves. On mobile screens, this creates an excessively tall list that clutters the interface and pushes purchase buttons below the fold.

## Goals / Non-Goals

**Goals:**
- Implement a dense 2-column responsive grid on mobile (`grid-cols-2`), cutting vertical space consumption by over 60%.
- Apply strictly boxy styling: `rounded-[var(--radius-sm)]` (8px) for outer tiles and `rounded-[var(--radius-xs)]` (4px) for image containers.
- Re-architect tile interiors for high information density (compact 32×32px thumbnail, tight title and price typography, discreet checkmark).
- Maintain robust validation rings and disabled/sold-out styling across light and dark themes.

**Non-Goals:**
- Modifying product data models, cart mutation handlers, or pricing logic.
- Altering the phone model selector above it.

## Decisions

### 1. Multi-Column Grid Architecture: `grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2`
- **Rationale**: 2 columns on mobile enables 4 options to fit into just 2 rows (~95px height total vs ~270px previously), while remaining comfortably tappable (minimum touch target ~44px height).
- **Alternatives Considered**:
  - 1-column vertical list (current): Excessive height bloat.
  - Horizontal swipe rail: Explored, but user preferred Option C grid without hiding options off-screen.

### 2. Strictly Boxy Tokens: `--radius-sm` (8px) and `--radius-xs` (4px)
- **Rationale**: User explicitly directed: "not pill boxi shape". Replacing `rounded-xl` with `--radius-sm` (8px) delivers a crisp, engineered tech aesthetic that harmonizes with our CTA buttons and card standards.
- **Alternatives Considered**:
  - `rounded-xl` / `rounded-full`: Soft/bubbly curves, specifically rejected by user.
  - `rounded-none`: Completely sharp, 90-degree corners look unpolished; 8px provides modern architectural boxiness.

### 3. Compact Interior Layout
- **Structure**:
  - Thumbnail: `w-8 h-8 rounded-[var(--radius-xs)]` (32×32px).
  - Text: Stacked title (`text-[11px] font-bold truncate`) and price (`text-[11px] font-black text-[var(--color-brand-primary)]`).
  - Selection Badge: 16×16px checkmark circle indicator in the trailing corner.

## Risks / Trade-offs

- **[Risk] Long variant titles might be truncated in 2 columns on narrow devices** → **[Mitigation]** The title has `truncate text-[11px]`, and the header label directly above the grid (`Select Option / Variant:`) dynamically displays the full unclipped name of the currently selected variant.
- **[Risk] Touch target sizing in 2 columns** → **[Mitigation]** With `p-2` and `gap-2`, each tile has a height of ~46px and width of ~165px on mobile, satisfying WCAG 2.2 touch target requirements.
