## Why

The current profile header displays 3 rectangular stat cards that occupy significant space without offering intuitive access to secondary customer operations like order history, returns, promo vouchers, product reviews, and custom gadget requests. Adopting the reference design—a clean 4-column circular icon button grid with centered text labels underneath—brings modern e-commerce visual clarity, consistent touch targets, and instant access to all 8 core customer service actions across both desktop and mobile viewports.

## What Changes

- **8-Item Circular Action Grid**: Replace the rectangular stat boxes in `ProfileHeader.svelte` with an 8-item circular shortcut grid formatted into 4 columns x 2 rows:
  - **Orders**: Switches to active Orders tab (badge count: 2).
  - **History**: Displays order history / timeline log (navigates to Orders tab with history filter).
  - **Wishlist**: Switches to Wishlist tab (badge count: 3).
  - **Reviews**: Opens Customer Reviews & Ratings modal showing verified product reviews and feedback forms.
  - **Addresses**: Switches to Addresses tab (badge count: 2).
  - **Returns**: Opens Returns & Warranty Claims modal with return policy guidelines and easy claim initiation.
  - **Promos**: Opens Active Vouchers & Coupons modal displaying claimable Joy Telecom discount codes.
  - **Request**: Opens Special Gadget Request modal allowing customers to request unlisted phone accessories or parts.
- **Visual Design Matching Reference**:
  - Circular white button container (`w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white text-[var(--color-brand-primary)] shadow-sm`) with crisp outline icons.
  - Micro-interaction hover scale (`hover:scale-105 active:scale-95 transition-transform`).
  - Centered high-contrast white text label directly beneath each circle.
  - Notification count badges positioned on the top-right of applicable icons (`Orders`, `Wishlist`, `Addresses`, `Promos`).
- **Responsive Layout for Mobile and PC**:
  - **Phone UI (<768px)**: 4 equal columns x 2 rows (`grid grid-cols-4 gap-x-2 gap-y-4.5 pt-4`).
  - **PC UI (>=1024px)**: 4 columns x 2 rows aligned right of customer identity block with comfortable gap spacing.
- **Supporting Modals / Drawers**: Provide functional, interactive dialog modals for the new actions (Reviews, Returns, Promos, Request) so every button is responsive and useful.

## Capabilities

### New Capabilities
- `customer-profile`: Defines the 8-item circular shortcut action grid, badge counts, tab routing, and interactive support modals for customer self-service.

### Modified Capabilities
<!-- None: No existing specs in openspec/specs/ yet -->

## Impact

- **Affected Code**:
  - `src/lib/components/profile/ProfileHeader.svelte`: Update layout and render 8 circular icon shortcuts.
  - `src/lib/components/profile/ProfileModals.svelte` (or separate modals): Modals for Reviews, Returns, Promos, and Request.
  - `src/routes/profile/+page.svelte`: Wire modal open/close states and tab navigation triggers.
  - `src/lib/data/mockProfile.ts`: Add mock data for promo vouchers, past reviews, and return requests.
- **Dependencies**: None.
