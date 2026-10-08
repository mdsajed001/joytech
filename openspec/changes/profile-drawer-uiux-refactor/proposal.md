## Why

The 8 profile drawer and bottom sheet options (Orders, History, Wishlist, Reviews, Addresses, Returns, Promos, Request) currently suffer from design system inconsistencies: capsule/pill badges (`rounded-full`), wireframe stroke clutter caused by multiple nested borders, cramped multi-column cards, and flat monochromatic backgrounds lacking visual hierarchy. Redesigning these panels to use Joytech's boxy radii (`--radius-sm`, `--radius-xs`), full-width modular containers with comfortable internal padding, and subtle background differentiation (`--color-bg-subtle` vs `--color-bg-surface`) establishes a clean, modern, tactile hardware aesthetic across both desktop side drawers and mobile bottom sheets.

## What Changes

- **Boxy Radii Standard across CTAs, Badges & Chips**:
  - Replace all `rounded-full` status badges (`Delivered`, `Shipped`, `Default`, `Verified Buyer`) with boxy micro-badges using `rounded-[var(--radius-xs)]` (4px).
  - Convert drawer header counter badges and profile shortcut count badges to boxy micro-badges (`rounded-[var(--radius-xs)]`).
  - Standardize all action CTAs (`Buy Again`, `Track`, `+ Cart`, `Save Address`, `Submit`, `Copy`) to boxy buttons with `rounded-[var(--radius-sm)]` (8px).
  - Update drawer close buttons to boxy tactile buttons (`rounded-[var(--radius-sm)]`).
- **Unclutter Nested Borders into Full-Width Modular Containers**:
  - Remove card-in-card stroke traps where outer borders, header borders, divider strokes, and footer borders are stacked together.
  - Expand sub-cards (orders, wishlist items, address cards, review forms, return claims, promos) into full-width modular containers spanning the width of the drawer content area with generous internal padding (`p-3.5` to `p-5`).
- **Tone-on-Tone Surface Differentiation**:
  - Replace harsh 1px dividing border lines with subtle background color shifts (`bg-[var(--color-bg-subtle)]` vs `bg-[var(--color-bg-surface)]`).
  - Emphasize interactive forms (e.g. Write a Review, Return Claim, Accessory Sourcing, Add Address) by framing them in `bg-[var(--color-bg-subtle)]` containers with crisp input fields sitting on `bg-[var(--color-bg-surface)]`.
  - Contrast order metadata strips, courier tracking headers, and promo voucher cards using soft tonal surface differences.
- **Single-Column Address Layout**:
  - Convert the cramped 2-column address grid in `AddressesTab` to single-column full-width address cards to avoid line truncations and small buttons.
- **Tracking Modal & Profile Header Consistency**:
  - Align `OrderTrackingModal` corners and carrier status badge to boxy tokens.
  - Align `ProfileHeader` tier badge and shortcut counter badges to boxy tokens.

## Capabilities

### New Capabilities
- `profile-drawer`: Boxy, full-width, surface-differentiated slide-over drawer and mobile bottom sheet specifications for the 8 profile auxiliary options (Orders, History, Wishlist, Reviews, Addresses, Returns, Promos, Request).

### Modified Capabilities
<!-- None: No existing specs in openspec/specs/ yet -->

## Impact

- **Affected Components**:
  - `src/lib/components/profile/ProfileDrawer.svelte`: Drawer header, mobile drag handle, Reviews, Returns, Promos, and Request modules.
  - `src/lib/components/profile/OrdersTab.svelte`: Order cards, status badges, and action CTAs for Orders and History.
  - `src/lib/components/profile/WishlistTab.svelte`: Product cards, thumbnail frames, and "+ Cart" CTAs.
  - `src/lib/components/profile/AddressesTab.svelte`: Single-column address cards, default location highlight, and Add Address form.
  - `src/lib/components/profile/ProfileHeader.svelte`: Shortcut counter badge and tier badge boxy radius alignment.
  - `src/lib/components/profile/OrderTrackingModal.svelte`: Modal corner radii and carrier status badge boxy alignment.
- **Dependencies**: No external npm packages needed; fully powered by existing Tailwind CSS tokens and Joytech custom properties.
