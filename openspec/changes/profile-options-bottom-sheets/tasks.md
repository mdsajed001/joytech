## 1. Sheet Shell & Navigation Refactor

- [x] 1.1 Refactor drawer header and mobile container in `src/lib/components/profile/ProfileDrawer.svelte` — bound max-height to 82vh on mobile, trim verbose subtitle copy, show count badges next to the title, and verify smooth drag and dismiss behavior.

## 2. High-Density Wishlist & Orders Redesign

- [x] 2.1 Refactor `src/lib/components/profile/WishlistTab.svelte` — replace vertical grid cards with compact horizontal list rows (48px square image, title, price, 1-tap `+ Cart`, delete), remove filler copy, and verify layout density on mobile and desktop viewports.
- [x] 2.2 Refactor `src/lib/components/profile/OrdersTab.svelte` — streamline order headers, compact item previews (44px thumbnails), remove verbose label prefixes, and add crisp action buttons (`Track`, `Buy Again`). Verify on mobile and desktop viewports.

## 3. Compact Address Management Redesign

- [x] 3.1 Refactor `src/lib/components/profile/AddressesTab.svelte` — remove marketing subtitle, style address cards with clean pill tags and default indicator, and streamline the add-address form. Verify layout and address submission in browser.

## 4. In-Drawer Panels Polish (Reviews, Returns, Promos, Request)

- [x] 4.1 Redesign Reviews section in `src/lib/components/profile/ProfileDrawer.svelte` — implement compact verified-buyer cards and an inline star rating submission form. Verify review posting in browser.
- [x] 4.2 Redesign Returns section in `src/lib/components/profile/ProfileDrawer.svelte` — implement sleek 7-Day Guarantee trust banner, interactive order/reason selectors, and direct WhatsApp VIP action. Verify submission and WhatsApp link in browser.
- [x] 4.3 Redesign Promos section in `src/lib/components/profile/ProfileDrawer.svelte` — implement voucher ticket card design with single-line condition and 1-tap copy button with toast. Verify copy interaction.
- [x] 4.4 Redesign Request section in `src/lib/components/profile/ProfileDrawer.svelte` — remove lengthy explanation paragraph, streamline input layout, and verify form submission.

## 5. End-to-End Integration & Responsive Verification

- [x] 5.1 Test all 8 shortcut bottom sheets from the Profile page on mobile (<640px) and desktop (>=1024px) viewports to verify visual consistency, design token adherence, touch targets, and absence of text clutter.
