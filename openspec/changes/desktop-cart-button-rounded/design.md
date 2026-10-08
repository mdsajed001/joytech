## Context

See proposal.md - Why. In `src/lib/components/Header.svelte`, the desktop cart button (`hidden sm:flex`) currently uses `rounded-[var(--radius-sm)]` (8px boxy corners). Its adjacent sibling buttons (Wishlist and Profile) use `rounded-full` circular contours.

## Goals / Non-Goals

**Goals:**
- Replace `rounded-[var(--radius-sm)]` with `rounded-full` on the desktop cart button in `Header.svelte`.
- Ensure the pill contour smoothly wraps the shopping bag icon, "Cart" text, and count badge.
- Preserve micro-animations (`nod-lift-active`, `badge-pop-active`) and hover color transitions.

**Non-Goals:**
- Altering the mobile cart button on product details pages or mobile bottom navigation bar.
- Changing cart drawer or checkout routing logic.

## Decisions

### 1. Shape Token: `rounded-full`
- **Rationale**: `rounded-full` applies a 9999px border-radius, creating an organic capsule/pill silhouette for horizontal buttons with mixed content. It visually pairs with the `rounded-full` shape of the Wishlist, Profile, and Search pill buttons in the header.
- **Alternatives Considered**:
  - `rounded-xl` or `rounded-2xl`: Still noticeably squircle/boxy and doesn't achieve the true smooth pill aesthetic requested by the user.

## Risks / Trade-offs

- None identified; pure class swap on a single element with no breaking behavioral or layout shifts.
