## Context

See `proposal.md` for motivation. `CartItemCard.svelte` currently uses non-system radii (`rounded-2xl`), hardcoded Slate/Rose utility classes (`bg-slate-100`, `hover:border-slate-300`, `bg-rose-600`), and duplicates pricing values on `quantity = 1`.

## Goals / Non-Goals

**Goals:**
- Refactor `CartItemCard.svelte` to strictly use design system tokens (`--color-bg-surface`, `--color-bg-subtle`, `--color-border-default`, `--color-border-strong`, `--radius-md`, `--radius-sm`).
- Replace hardcoded discount overlays with the system `<Badge variant="accent" size="sm">` component.
- Align Brand typography style with `ProductCard.svelte` (`text-[11px] font-bold text-[var(--color-text-disabled)] uppercase`).
- Display Line Item Total ONLY when `quantity > 1` so `quantity = 1` items display single unit pricing without visual duplication.
- Remove the internal mobile border divider (`border-t`) and harmonize mobile action controls (stepper bottom-left, Wishlist & Remove icons bottom-right).

**Non-Goals:**
- Changing state calculations in `CartState`.
- Altering the Order Summary calculation table.

## Decisions

### Decision 1: Use System `<Badge>` and CSS Variables for Card Shell
- **Rationale**: Replaces raw Tailwind Slate/Rose utility classes with `--color-bg-surface`, `--color-bg-subtle`, `--color-border-default`, `--color-border-strong`, and system `<Badge>`. Ensures cart item cards instantly reflect theme switches and token updates across the store.

### Decision 2: Conditional Line Item Total Display (`quantity > 1`)
- **Rationale**: Printing unit price `৳2,450` under the title AND `Item Total ৳2,450` at the bottom right when `quantity = 1` creates visual clutter. By rendering item total only when `item.quantity > 1`, single-quantity items remain lean while multi-quantity items clearly communicate total cost calculation.

### Decision 3: Unified Control Footer on Mobile
- **Rationale**: Removes the horizontal divider line across the card. Positions the quantity stepper on the bottom-left and icon buttons (Wishlist & Remove) on the bottom-right for clean, ergonomic touch targets on mobile viewports.

## Risks / Trade-offs

- **[Risk] Users might look for total price on single-item cards** → Mitigation: Unit price is prominently displayed directly under the item title in bold font, maintaining immediate cost visibility.
