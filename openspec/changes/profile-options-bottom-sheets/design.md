## Context

The Joytech storefront features 8 profile action shortcuts (Orders, History, Wishlist, Reviews, Addresses, Returns, Promos, Request) that open a slide-over drawer (`ProfileDrawer.svelte`). On mobile devices, this drawer functions as a bottom sheet. As noted in `proposal.md`, current sheets suffer from layout bloat, verbose marketing text, redundant tags/chips, and oversized cards that make browsing cumbersome on mobile viewports.

## Goals / Non-Goals

**Goals:**
- Eliminate filler marketing copy, redundant labels (`Payment:`, `Delivery:`, `In Stock`), and excessive vertical whitespace across all 8 sheets.
- Switch `WishlistTab` from bulky vertical cards to compact, high-density horizontal list rows allowing 3-4 items on screen.
- Streamline `OrdersTab` into clean, scannable order cards with compact 48px product thumbnails and instant actions.
- Redesign `AddressesTab` to feature concise cards and an uncluttered destination form.
- Elevate Reviews, Returns, Promos, and Request panels inside `ProfileDrawer.svelte` to match the brand's sleek design system (ticket vouchers for promos, trust card for warranty, compact rating inputs).
- Preserve smooth drag-to-dismiss gesture and keyboard accessibility.

**Non-Goals:**
- Modifying backend APIs or introducing persistent database changes (mock state and cart store are preserved).
- Changing profile hero shortcut buttons in `ProfileHeader.svelte`.
- Redesigning the main profile settings / preferences tabs outside the drawer.

## Decisions

### Decision 1: Horizontal Product Rows for Wishlist instead of Multi-column Grid
- **Choice**: Display each wishlist item as a horizontal row: 48x48px thumbnail on left, title + pricing in center, 1-tap `+ Cart` button and delete icon on right.
- **Rationale**: In a bottom sheet constrained to ~80vh on mobile, vertical cards allow only 1 item to be visible without scrolling. Horizontal rows quadruple information density and speed up purchases.
- **Alternatives Considered**: 2-column grid (cluttered, text wraps awkwardly on narrow mobile screens).

### Decision 2: Single-Line Condition Voucher Cards for Promos
- **Choice**: Present promo codes in a voucher ticket card format with a brand blue/amber accent, bold discount headline, single-line condition (`Min. ৳1,500 • Till 30 Sep`), and 1-tap copy button.
- **Rationale**: Replaces two rows of generic text (`Min. Spend: ৳2,000` and `Expires: 30 Sep 2026`) with a clean, high-conversion visual treatment matching the store's design tokens.
- **Alternatives Considered**: Plain table layout (unattractive and doesn't encourage code copying).

### Decision 3: Quick Select Order & Reason Chips for Returns
- **Choice**: Provide visual chip / compact card selectors for selecting the order to claim and the claim reason, backed by an instant WhatsApp VIP Hotline CTA button.
- **Rationale**: Native bulky `<select>` elements feel detached from the modern UI. Compact selectable buttons make the return submission effortless on mobile touch screens.
- **Alternatives Considered**: Retaining native `<select>` dropdowns (poor touch ergonomics on mobile).

### Decision 4: Clean Streamlined Address Form
- **Choice**: Organize the address form into a compact 2-column grid with a quick tag toggle (`Home`, `Office`, `Other`) and clean inputs without redundant help text.
- **Rationale**: Keeps the form height under control so users don't lose context of their existing addresses while adding a new destination.

## Risks / Trade-offs

- **[Risk] Touch targets on compact horizontal rows could be too small**:
  - *Mitigation*: Ensure minimum 40px touch targets for buttons (`+ Cart` and delete icon) with adequate padding even within compact 60px row heights.
- **[Risk] Long product titles clipping on narrow screens (e.g., iPhone SE 375px)**:
  - *Mitigation*: Apply `line-clamp-1` or `line-clamp-2` with `truncate` on product names and flex-shrink constraints on pricing and action buttons.
