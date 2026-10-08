## Why

In mobile phone accessory e-commerce, device compatibility is the single most critical factor: customers only care about accessories that physically fit their specific phone model. Currently, the search results page only filters by Category, Brand, Price, and Stock, lacking the ability to filter by phone model or key technical attributes like MagSafe compatibility and active discount deals. This change elevates the search results filtering system with a 2-tier Device Compatibility selector (Brand > Model), a "MagSafe / Magnetic" attribute filter, and an "On Sale / Flash Sale" promotional filter across both desktop and mobile viewports.

## What Changes

- **Device / Phone Model Compatibility Filter**:
  - Add phone brand selection (All, Apple, Samsung, Google Pixel, Xiaomi) using `PHONE_BRANDS`.
  - Add phone model selection (e.g., iPhone 16 Pro Max, Galaxy S24 Ultra, Pixel 9 Pro) using `PHONE_MODELS`.
  - Filter `displayedProducts` to ensure `product.compatibleModels` contains the selected model slug.
- **Hardware Feature & Promotion Badges**:
  - Add a "MagSafe / Magnetic Only" filter switch/checkbox to filter products whose features include MagSafe or magnetic alignment.
  - Add an "On Sale / Discounted" filter checkbox to show items with active discounts (`discountPercent > 0` or `isFlashSale: true`).
- **Sidebar & Mobile Drawer Updates**:
  - Integrate the new filter sections into `src/lib/components/search/SearchSidebar.svelte` (desktop left sidebar).
  - Integrate the new filter sections into `src/lib/components/search/SearchMobileFilterDrawer.svelte` (mobile slide-up bottom sheet).
- **Active Filter Pills & Reset**:
  - Display removable badges for selected Phone Model, MagSafe, and On Sale filters in the search header summary bar.
  - Resetting filters clears device compatibility and feature filters back to default.

## Capabilities

### New Capabilities
- `device-and-feature-filters`: Defines requirements for device compatibility filtering (Brand > Model selection), MagSafe attribute filtering, promotional deal filtering, and synchronizing these filters across desktop sidebar and mobile drawer.

### Modified Capabilities
<!-- None -->

## Impact

- **Modified Files**:
  - `src/lib/components/search/SearchSidebar.svelte`: Add device compatibility dropdown/pills, MagSafe toggle, and On Sale checkbox.
  - `src/lib/components/search/SearchMobileFilterDrawer.svelte`: Add device compatibility selectors and feature filters.
  - `src/routes/search/+page.svelte`: Add state management for `selectedPhoneBrand`, `selectedPhoneModel`, `magsafeOnly`, and `onSaleOnly`.
- **Dependencies**: No external libraries; leverages existing data models in `$lib/data/catalog`.
