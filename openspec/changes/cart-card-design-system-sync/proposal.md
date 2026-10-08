# Proposal: Cart Item Card Design System & Homepage Alignment

## Why

The current cart item card (`CartItemCard.svelte`) suffers from design system drift, visual clutter, and layout inconsistency when compared to homepage catalog cards (`ProductCard.svelte`). Specifically, it hardcodes Tailwind slate colors, uses inconsistent corner radii (`rounded-2xl` vs `--radius-sm`), hardcodes discount badges instead of using the system `<Badge>` component, duplicates price values when quantity is 1, and relies on an unnecessary internal divider line on mobile. Aligning `CartItemCard.svelte` with the established design system tokens creates visual unity across the application and improves cart UX.

## What Changes

- **Design Token & Radii Alignment**:
  - Replace hardcoded `rounded-2xl` and `rounded-xl` with design system tokens `rounded-[var(--radius-md)]` (card shell) and `rounded-[var(--radius-sm)]` (image container).
  - Replace hardcoded `slate-100`, `slate-300`, `slate-700` colors with system tokens `--color-bg-subtle`, `--color-border-default`, and `--color-border-strong`.
- **Reusable Component Integration**:
  - Replace hardcoded `bg-rose-600` discount pill with the standard `<Badge variant="accent" size="sm">` component used across product grids.
- **Brand Typography Harmony**:
  - Update Brand text styling to match `ProductCard.svelte` (`text-[11px] font-bold tracking-wider text-[var(--color-text-disabled)] uppercase`).
- **Duplicate Price Cleanup & Layout Simplification**:
  - Eliminate duplicate pricing when quantity is 1: unit price is displayed under title; item total is displayed only when `quantity > 1`.
  - Remove the cluttered internal mobile divider line (`border-t`).
  - Align mobile controls into a clean bottom bar: stepper on left, Wishlist & Delete action icons on right.

## Capabilities

### New Capabilities
- `cart-card-design-alignment`: Standardized layout, token usage, component reuse, and pricing hierarchy for cart item cards.

### Modified Capabilities
<!-- None -->

## Impact

- `src/lib/components/cart/CartItemCard.svelte`: Refactored layout, tokens, badges, and pricing display.
- No breaking API changes or state logic modifications.
