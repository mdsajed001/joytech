## Context

See `proposal.md` for motivation.

The profile auxiliary drawer opens 8 distinct shopping and account actions: Orders, History, Wishlist, Reviews, Addresses, Returns, Promos, and Request. The component structure consists of:
- `src/lib/components/profile/ProfileDrawer.svelte`: The slide-over container (Side Drawer on desktop `sm:`, Bottom Sheet on mobile), holding header/dismiss handlers and inline views for Reviews, Returns, Promos, and Request.
- `src/lib/components/profile/OrdersTab.svelte`: Shared view for Orders and History.
- `src/lib/components/profile/WishlistTab.svelte`: Wishlist product items.
- `src/lib/components/profile/AddressesTab.svelte`: Saved addresses manager.
- `src/lib/components/profile/ProfileHeader.svelte`: Shortcut trigger buttons and counter badges.
- `src/lib/components/profile/OrderTrackingModal.svelte`: Modal popup for live carrier tracking.

All components currently leverage Tailwind utility classes with custom CSS variables from `src/routes/layout.css`.

## Goals / Non-Goals

**Goals:**
- Eliminate `rounded-full` pills on status badges, count tags, and close buttons in favor of Joytech's boxy tokens (`--radius-xs` 4px, `--radius-sm` 8px).
- Eliminate stacked nested borders across all 8 views, replacing them with full-width modular containers with comfortable internal padding (`p-3.5` to `p-5`).
- Use tone-on-tone background shifts (`--color-bg-subtle` vs `--color-bg-surface`) to separate headers, lists, and active form blocks.
- Convert `AddressesTab` from a cramped 2-column grid to a clean single-column full-width card layout.
- Maintain seamless light and dark mode compatibility with zero regressions in drawer slide gestures or form submissions.

**Non-Goals:**
- Changing backend data contracts or API schemas in `src/lib/data/mockProfile.ts`.
- Redesigning the main account tabs (`SettingsTab` / `PaymentsTab`) in the profile page body.
- Adding new routes or external libraries.

## Decisions

### Decision 1: Strict Token Mapping for Boxy Radii
- **Badges & Chips:** Use `rounded-[var(--radius-xs)]` (4px). Applied to order status chips (`Delivered`, `Shipped`), verified buyer badges, count indicators, tag chips, and coupon tags.
- **Buttons, Inputs & Containers:** Use `rounded-[var(--radius-sm)]` (8px). Applied to action CTAs (`Buy Again`, `Track`, `+ Cart`, `Save Address`, `Submit`), input text fields, textareas, and card containers.
- *Alternative Considered:* Using standard Tailwind `rounded-md` or `rounded-lg`. Rejected because `rounded-[var(--radius-sm)]` and `rounded-[var(--radius-xs)]` are canonical Joytech design system tokens that dynamically adapt to theme settings and match the boxy aesthetics of search bars and product cards.

### Decision 2: Elimination of Stroke Traps via Full-Width Modular Containers
- Replace card-in-card nested borders with edge-to-edge full-width card containers spanning the interior of the drawer.
- In `OrdersTab`, eliminate the multiple internal borders (`border-b`, `divide-y`, `border-t`). The header metadata strip sits on `bg-[var(--color-bg-subtle)]`, items sit on `bg-[var(--color-bg-surface)]`, and the action footer sits on `bg-[var(--color-bg-subtle)]`.
- In `WishlistTab`, items sit in full-width rows with consistent `p-3.5` padding instead of floating islands with tiny gaps.

### Decision 3: Background Surface Tone-on-Tone Differentiation
- Active input forms (Reviews "Write a Review", Returns "Submit Return Claim", and Request "Sourcing Concierge") are enclosed in full-width containers with `bg-[var(--color-bg-subtle)]` and `p-4` internal padding.
- Input fields inside these forms utilize `bg-[var(--color-bg-surface)]` with subtle default borders (`border-[var(--color-border-default)]`), providing tactile depth and focus clarity without requiring heavy outer borders.

### Decision 4: Single-Column Layout for Addresses
- `AddressesTab` switches from `grid-cols-1 sm:grid-cols-2` to a unified vertical stack (`flex flex-col gap-3`).
- Full-width address cards prevent address text line clamping and provide ample touch space for the "Set Default" button and delete icon.
- Default address is highlighted using `bg-[var(--color-brand-primary-subtle)]/30` with a boxy `Default` badge.

## Risks / Trade-offs

- **[Risk]** Spacing may feel tighter if padding is reduced.
  - *Mitigation:* Ensure internal padding is generous (`p-4` or `p-5`) while removing superfluous outer margin containers, yielding more net usable area.
- **[Risk]** Dark mode surface contrast washed out if opacity-based tints are used incorrectly.
  - *Mitigation:* Rely on standard semantic CSS variables `--color-bg-surface` and `--color-bg-subtle` which have dedicated, tested hex values in `html.dark` in `layout.css`.
