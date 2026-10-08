## Context

Currently `OrdersTab.svelte` receives an array of `orders` and renders them in a single sequence regardless of whether they are processing, ready to ship, or shipped.

## Goals / Non-Goals

**Goals:**
- Add `ordersSubTab` state (`'processing' | 'ready_to_ship' | 'shipped'`) inside `OrdersTab.svelte`.
- Render a 3-column full-bleed control bar (`-mx-4 -mt-4 sm:-mx-5 sm:-mt-5 mb-4 grid grid-cols-3`) at the top of `OrdersTab.svelte`.
- Filter visible orders: `filteredOrders = orders.filter(o => o.status === ordersSubTab)`.
- Update `Order['status']` type definition in `mockProfile.ts` to include `'ready_to_ship'`.

**Non-Goals:**
- Changing courier tracking modal or live timeline stage details.

## Decisions

### Decision 1: Full-Bleed 3-Column Control Bar
- **Choice**: Structure the sub-tab bar as `<div class="-mx-4 -mt-4 sm:-mx-5 sm:-mt-5 mb-4 grid grid-cols-3 border-b border-[var(--color-border-default)] bg-[var(--color-bg-subtle)] overflow-hidden">`.
- **Rationale**: Replaces top inset padding and maintains 100% design system visual consistency with the `reviewsSubTab` bar.

### Decision 2: Stage Badge Color Mapping
- **Choice**:
  - `processing`: Amber badge (`bg-amber-50 text-amber-700`)
  - `ready_to_ship`: Purple/Indigo badge (`bg-purple-50 text-purple-700`)
  - `shipped`: Blue badge (`bg-blue-50 text-blue-700`)
- **Rationale**: Distinct colors help users immediately distinguish stage progression at a glance.

## Risks / Trade-offs

- **[Risk]** Empty state when a stage has 0 orders.
- **Mitigation**: Render a clean empty state card ("No orders in Processing", etc.) tailored to the active stage tab.
