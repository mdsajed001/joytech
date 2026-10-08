## Why

Currently, clicking the top hero action shortcuts navigates the main page tabs below, duplicating titles and forcing full-page context shifts. Converting all 8 shortcuts into a responsive slide-over panel—opening as a native Bottom Sheet on phones and as a Right Side Drawer on PC—enables fast, in-context customer operations without leaving the current view. Concurrently, removing the duplicated shopping titles (`Orders`, `Addresses`, `Wishlist`) from the bottom tabs allows the customer hub to focus on dedicated account management, preference controls (theme and language toggles), loyalty rewards, device compatibility, and payment methods.

## What Changes

- **Unified Slide-Over Panel for All 8 Hero Shortcuts**:
  - Tapping **Orders**, **History**, **Wishlist**, **Reviews**, **Addresses**, **Returns**, **Promos**, or **Request** opens a unified slide-over panel instead of navigating bottom tabs.
  - **Phone UI (<768px)**: Native Bottom Sheet sliding up from the bottom with a drag handle and full swipe/scroll support.
  - **PC UI (>=1024px)**: Desktop Side Drawer sliding in from the right edge (`max-w-lg shadow-2xl`).
  - Contains rich dedicated views for all 8 shopping actions (order list, courier tracking, wishlist cart additions, review form, address manager, return claim, coupon codes, and accessory sourcing request).
- **Remove Duplicated Titles from Bottom Tabs**:
  - Remove `My Orders`, `Saved Addresses`, and `Wishlist` from `ProfileNavTabs`.
- **New Account Management Tab Structure**:
  - **Preferences & Account (Tab 1)**:
    - **Language Switcher**: Instant toggle between English and বাংলা.
    - **Theme Toggle**: Switcher for Light, Dark, or System theme preferences.
    - **Personal Information**: Full name, verified mobile number, and email.
    - **Notification Controls**: Granular toggles for SMS delivery alerts, WhatsApp updates, restock alerts, and marketing emails.
    - **Security**: Password update form and biometric login toggle.
  - **Joy Rewards & VIP (Tab 2)**:
    - Points balance display (1,250 Joy Points), VIP Tier status progress bar (Silver → Gold → Platinum), and VIP perk summary.
  - **My Devices (Tab 3)**:
    - Saved customer devices (e.g. *iPhone 16 Pro Max*, *Google Pixel 9*) with 1-click shortcut to auto-filter the store catalog for compatible gear.
  - **Payment Methods (Tab 4)**:
    - Saved bKash / Nagad mobile wallets and debit/credit cards.

## Capabilities

### New Capabilities
- `customer-profile`: Slide-over drawer behavior (Bottom Sheet on phone, Side Drawer on PC) for shopping actions, and dedicated account management tabs with theme, language, rewards, and device preferences.

### Modified Capabilities
<!-- None: No existing specs in openspec/specs/ yet -->

## Impact

- **Affected Code**:
  - `src/lib/components/profile/ProfileHeader.svelte`: Shortcut click handlers invoke slide-over drawer instead of tab switching.
  - `src/lib/components/profile/ProfileDrawer.svelte`: New unified slide-over component (Bottom Sheet on mobile, Side Drawer on PC) holding all 8 shortcut views.
  - `src/lib/components/profile/ProfileNavTabs.svelte`: Replace shopping tabs with the 4 dedicated account tabs.
  - `src/lib/components/profile/SettingsTab.svelte`: Upgrade to comprehensive Preferences & Account tab with theme and language toggles.
  - `src/lib/components/profile/RewardsTab.svelte`, `MyDevicesTab.svelte`, `PaymentsTab.svelte`: New tab panels for rewards, devices, and payments.
  - `src/routes/profile/+page.svelte`: Wire drawer state and tab routing.
- **Dependencies**: None.
