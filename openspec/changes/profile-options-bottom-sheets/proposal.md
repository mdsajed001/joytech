## Why

The current profile option sheets (Orders, History, Wishlist, Reviews, Addresses, Returns, Promos, Request) in `ProfileDrawer.svelte` suffer from severe UI bloat, marketing text clutter, redundant chips, and inefficient vertical layouts. On mobile devices, excessive padding and stacked card designs prevent users from seeing more than one item at a time, looking inconsistent with the rest of Joy Telecom's clean, modern, high-conversion design system.

Redesigning these 8 option sheets removes unnecessary text and chips, introduces compact horizontal list cards (especially for wishlist and orders), tightens form layouts, and elevates visual styling to match the site's sleek dark/light design system tokens.

## What Changes

- **Bottom Sheet Shell & Ergonomics**:
  - Unify the slide-over bottom sheet header with sleek brand iconography, dynamic count badge, and clean dismiss target.
  - Eliminate redundant subtitle paragraphs and marketing slogans from every sheet header.
  - Set ergonomic max height (75vh-85vh) with clean scrollable viewports.

- **Orders & History (`OrdersTab.svelte`)**:
  - Remove verbose repeated labels (`Payment:`, `Delivery:`, `Total:`).
  - Compact order rows with 48px product thumbnails, concise status badges (Delivered, In Transit), and quick 1-tap `Track` and `Buy Again` actions.

- **Wishlist (`WishlistTab.svelte`)**:
  - Transform from clumsy 1-col/grid full-width cards to high-density horizontal list rows.
  - Display 48px square image, product title, compact price + crossed-out original, 1-tap "Add to Cart" button, and minimalist remove icon.
  - Remove filler text ("Keep track of your favorite gadgets...") and redundant stock chips.

- **Saved Addresses (`AddressesTab.svelte`)**:
  - Strip verbose marketing copy ("Manage primary addresses for swift 1-click guest & VIP checkout").
  - Create dense, clean address cards with subtle tag pills (Home, Office) and default indicators.
  - Streamline "Add Address" form to fit nicely within the bottom sheet without crowding out existing entries.

- **Reviews Sheet**:
  - Redesign customer reviews into clean, compact verified-buyer cards without dated italic blockquotes.
  - Streamline the "Write a Review" form with an inline compact star picker and clean textarea.

- **Returns & Warranty Sheet**:
  - Replace the alert-style amber warning block with a clean, trust-inspiring "7-Day Replacement Guarantee" card.
  - Replace clunky native dropdowns with responsive quick-select order cards/chips and reason chips.
  - Provide a prominent 1-tap WhatsApp VIP Hotline action.

- **Promos & Vouchers Sheet**:
  - Convert generic bordered promo boxes into sleek ticket-voucher cards with notch styling.
  - Condense "Min. Spend" and "Expires" into an elegant single metadata row (`Min. ৳1,500 • Till 30 Sep`).
  - Add instant 1-tap "Copy" button with micro-animation.

- **Accessory Sourcing Request Sheet**:
  - Remove long introductory paragraphs.
  - Transform into a modern concierge request form with device prefill from active model / profile.

## Capabilities

### New Capabilities
- `profile/options-bottom-sheets`: High-density, brand-consistent bottom sheet layouts for profile action shortcuts (Orders, History, Wishlist, Reviews, Addresses, Returns, Promos, Request) matching Joy Telecom design system tokens.

### Modified Capabilities
*(None - no prior capability specs exist in the repository.)*

## Impact

- **Files Modified / Refactored**:
  - `src/lib/components/profile/ProfileDrawer.svelte` (main drawer shell, reviews, returns, promos, request)
  - `src/lib/components/profile/OrdersTab.svelte` (dense orders list)
  - `src/lib/components/profile/WishlistTab.svelte` (dense horizontal wishlist cards)
  - `src/lib/components/profile/AddressesTab.svelte` (compact address cards & form)
- **Dependencies**: Uses existing `@hugeicons/core-free-icons` and design system CSS custom properties from `src/routes/layout.css`.
- **Breaking Changes**: None. All state interfaces, event handlers, and data models remain backwards-compatible.
