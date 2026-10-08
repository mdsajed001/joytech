## Context

In earlier iterations before the stacked toast system was introduced, `src/routes/product/[slug]/+page.svelte` explicitly called `cartState.showToast(...)` right after invoking `cartState.addItem(...)`. Now that `cartState.addItem` is enhanced to trigger rich `cart` toasts with image thumbnails and "View Cart" CTAs, having a second manual `showToast` call results in two concurrent notifications being stacked on a single click.

Additionally, the action button in `ToastItem.svelte` was implemented with `rounded-full` (capsule pill), whereas Joy Telecom's design system uses `--radius-sm: 8px` / `rounded-lg` for its brand buttons (such as the header search and checkout CTAs).

## Goals / Non-Goals

**Goals:**
- Eliminate redundant `cartState.showToast(...)` calls in `src/routes/product/[slug]/+page.svelte` (lines 112–116 in `handleAddToCart` and line 363 in related products).
- Restyle the action button in `ToastItem.svelte` to use a boxy, beveled rectangular form (`rounded-[var(--radius-sm)]` / 8px) with hairline border, high-contrast white background, dark bold text, and tactile micro-press feedback.

**Non-Goals:**
- Modifying other legitimate informational toasts across the app (coupons, language switch, profile updates).
- Changing the dismiss cross or container stacking logic.

## Decisions

### 1. Centralized Cart Toast Dispatch
- **Decision**: Keep cart notification dispatch strictly inside `cartState.addItem(product, quantity)`.
- **Rationale**: Single source of truth. Any component that calls `cartState.addItem` gets a consistent, properly localized rich cart toast without needing boilerplate toast calls.

### 2. Boxy CTA Geometry
- **Decision**: Use `rounded-lg` / `rounded-[var(--radius-sm)]` (8px border radius) on `<a class="... rounded-lg font-black ...">`.
- **Rationale**: Aligns visual language with Joy Telecom's product cards, badges, and primary action buttons.

## Risks / Trade-offs

- [Risk]: None identified. Removing duplicate calls simplifies code and eliminates state clobbering.
