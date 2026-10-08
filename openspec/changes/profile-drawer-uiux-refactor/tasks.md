## 1. Drawer Shell & Profile Header Alignment

- [x] 1.1 In `ProfileDrawer.svelte`, update header counter badge to boxy `rounded-[var(--radius-xs)]`, close button to boxy `rounded-[var(--radius-sm)]`, and mobile drag handle to boxy bar; verify responsive rendering on mobile and desktop.
- [x] 1.2 In `ProfileHeader.svelte`, update shortcut counter badges and tier badge to `rounded-[var(--radius-xs)]`; verify visual harmony with boxy hero buttons.

## 2. Orders & History Modules

- [x] 2.1 In `OrdersTab.svelte`, refactor order card container into a full-width modular box with tone-on-tone background banding (`bg-[var(--color-bg-subtle)]` for header/footer, `bg-[var(--color-bg-surface)]` for items) and eliminate stacked interior border lines; verify layout in both Orders and History drawer modes.
- [x] 2.2 In `OrdersTab.svelte`, convert status badges to boxy `rounded-[var(--radius-xs)]` uppercase tags, and standardize action CTAs (`Buy Again`, `Track`) to `rounded-[var(--radius-sm)]`; verify click interactions.

## 3. Wishlist Module

- [x] 3.1 In `WishlistTab.svelte`, convert wishlist items into full-width modular rows with `p-3.5 sm:p-4` internal padding, boxy thumbnail frame (`rounded-[var(--radius-xs)]`), and boxy "+ Cart" CTA (`rounded-[var(--radius-sm)]`); verify cart addition toast and item deletion.

## 4. Reviews & Ratings Module

- [x] 4.1 In `ProfileDrawer.svelte` (reviews section), convert "Write a Review" form into a full-width `bg-[var(--color-bg-subtle)]` container with `p-4` inside padding, boxy textarea (`rounded-[var(--radius-sm)]`), and boxy submit CTA (`rounded-[var(--radius-sm)]`); verify form submission.
- [x] 4.2 In `ProfileDrawer.svelte` (reviews section), update existing review list item cards and "Verified Buyer" badge to boxy `rounded-[var(--radius-xs)]`; verify dark mode contrast.

## 5. Addresses Module

- [x] 5.1 In `AddressesTab.svelte`, replace the cramped 2-column grid with single-column full-width address cards with `p-4` internal padding, boxy `Default` badge (`rounded-[var(--radius-xs)]`), and subtle surface tint for the active default address; verify address text legibility.
- [x] 5.2 In `AddressesTab.svelte`, refactor the "New Address" accordion form into a full-width `bg-[var(--color-bg-subtle)]` block with boxy tag chips and boxy inputs; verify address addition and default toggle.

## 6. Returns, Promos & Request Modules

- [x] 6.1 In `ProfileDrawer.svelte` (returns section), refactor the trust banner and return claim form into a full-width `bg-[var(--color-bg-subtle)]` container with boxy order and reason selector chips (`rounded-[var(--radius-xs)]`), boxy submit CTA, and boxy WhatsApp action banner; verify claim submission.
- [x] 6.2 In `ProfileDrawer.svelte` (promos section), refactor coupon vouchers into full-width cards with `p-4` internal padding, boxy 1-tap copy buttons (`rounded-[var(--radius-sm)]`), and boxy promo badges (`rounded-[var(--radius-xs)]`); verify clipboard copy toast.
- [x] 6.3 In `ProfileDrawer.svelte` (request section), merge concierge header and sourcing form into a single full-width `bg-[var(--color-bg-subtle)]` module with boxy inputs and boxy submit CTA; verify sourcing submission.

## 7. Tracking Modal & Verification

- [x] 7.1 In `OrderTrackingModal.svelte`, update modal container corners to `rounded-t-[var(--radius-md)] sm:rounded-[var(--radius-md)]` and carrier status badge to boxy `rounded-[var(--radius-xs)]`; verify tracking stepper modal opening from Orders tab.
- [x] 7.2 Run `npx svelte-check` and verify all 8 profile drawer views on desktop side drawer and mobile bottom sheet across light and dark modes with zero errors.
