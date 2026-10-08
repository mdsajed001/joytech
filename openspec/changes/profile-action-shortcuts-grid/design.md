## Context

See `proposal.md` for motivation and background. The profile hero currently displays 3 rectangular frosted cards (`Orders`, `Addresses`, `Wishlist`) plus an amber loyalty points box. The user has requested to replace this section with the exact 8-option circular icon reference layout for both desktop (PC) and phone (mobile) viewports.

## Goals / Non-Goals

**Goals:**
- Replace the rectangular stat boxes with an 8-item shortcut grid arranged in 4 columns x 2 rows.
- Implement the exact 8 options from the reference: **Orders**, **History**, **Wishlist**, **Reviews**, **Addresses**, **Returns**, **Promos**, and **Request**.
- Format each item with a pure white circular button, centered outline icon, optional top-right count badge, and centered high-contrast white text label underneath.
- Implement modal dialogs for the 4 auxiliary actions: Customer Reviews, Returns & Refunds, Promo Vouchers, and Custom Gadget Requests.
- Ensure the 4x2 grid looks native and balanced on both mobile viewports (<768px) and desktop layouts (>=1024px).

**Non-Goals:**
- Modifying the existing `OrdersTab`, `AddressesTab`, `WishlistTab`, or `SettingsTab` underlying logic.
- Building a complex multi-page returns ticketing backend (frontend modal flows with client state are sufficient).

## Decisions

### Decision 1: Circular Button & Typography Architecture
- **Button**: `w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white text-[var(--color-brand-primary)] shadow-sm hover:scale-105 active:scale-95 transition-all flex items-center justify-center relative cursor-pointer`.
- **Badges**: For items with counts (`Orders`, `Addresses`, `Wishlist`, `Promos`), render an absolute `-top-1 -right-1 min-w-[18px] h-[18px] px-1 bg-[var(--color-accent)] text-white text-[10px] font-black rounded-full flex items-center justify-center shadow-xs border-2 border-[var(--color-brand-primary)]`.
- **Label**: `text-[11px] sm:text-xs font-semibold text-white/90 group-hover:text-white text-center truncate max-w-[64px] sm:max-w-[72px] mt-1.5`.

### Decision 2: 4-Column x 2-Row Responsive Layout
- **Mobile (<768px)**: Stacks beneath the user credentials in a clean `grid grid-cols-4 gap-x-2 gap-y-3.5 pt-4 border-t border-white/15`.
- **Desktop (>=1024px)**: Floats alongside the user info block on the right as a compact `grid grid-cols-4 gap-x-4 gap-y-3.5 shrink-0`.
- **Why over alternatives**: A single horizontal row with 8 items would require horizontal scrolling on mobile, whereas 4x2 neatly presents all 8 items simultaneously in the viewport without scrolling.

### Decision 3: Auxiliary Action Modal Handler
- **Implementation**: Create a unified `ProfileAuxModal.svelte` or dialog in the profile page that accepts `activeModal: 'reviews' | 'returns' | 'promos' | 'request' | null`:
  - **Reviews**: Displays customer's verified ratings and review score.
  - **Returns**: Explains the 7-day hassle-free Joy Telecom return process with a button to select an eligible order.
  - **Promos**: Displays available coupon codes (`JOY100`, `FREEDEL`, `PLATINUM15`) with a 1-click copy-to-clipboard button and toast notification.
  - **Request**: A clean request form for unlisted accessories with model name and submit confirmation.

## Risks / Trade-offs

- **[Risk] Touch target overlap on small mobile screens** → **Mitigation**: Use `min-h-[44px]` tap targets, ample horizontal spacing, and `p-1` interactive wrapper around each circular button.
- **[Risk] Icon consistency** → **Mitigation**: Use HugeIcons outline collection (`ShoppingBag01Icon`, `Time02Icon`, `FavouriteIcon`, `StarIcon`, `Notebook01Icon`, `PackageMovingIcon`, `Coupon01Icon`, `GiftIcon`) for uniform stroke weight and sizing.
