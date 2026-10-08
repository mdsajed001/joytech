## Context

See `proposal.md` for background and motivation. The user specified that:
1. The 8 top shortcuts on the profile hero (`Orders`, `History`, `Wishlist`, `Reviews`, `Addresses`, `Returns`, `Promos`, `Request`) must NOT navigate the bottom tab section.
2. Instead, all 8 shortcuts must open a slide-over panel: a **Bottom Sheet on phone** and a **Side Drawer on PC**.
3. Titles from the top shortcuts must be removed from the bottom tab options to prevent duplication.
4. The first tab in the bottom section must be **Preferences & Account**, featuring theme and language toggles alongside profile and security settings.

## Goals / Non-Goals

**Goals:**
- Implement `ProfileDrawer.svelte`, a unified responsive slide-over that renders as a Bottom Sheet on mobile viewports (<768px) and a Side Drawer on desktop viewports (>=1024px).
- Enable in-context execution for all 8 shopping actions inside `ProfileDrawer.svelte` without navigating or resetting the bottom tabs.
- Remove duplicate shopping titles (`Orders`, `Addresses`, `Wishlist`) from `ProfileNavTabs.svelte`.
- Redesign the bottom tabs into 4 dedicated account management views:
  1. **Preferences & Account** (with theme and language toggles, profile info, notifications, security)
  2. **Joy Rewards & VIP** (points balance, tier progression meter, VIP perks)
  3. **My Devices** (registered phone models with 1-click catalog compatibility filtering)
  4. **Payment Methods** (saved bKash/Nagad and cards)

**Non-Goals:**
- Modifying global root layout themes (the theme toggle persists user preference in `mockProfile.ts` / local state).
- Changing order tracking modal logic.

## Decisions

### Decision 1: Unified Responsive Drawer (`ProfileDrawer.svelte`)
- **Structure**: Modeled after `ShopByPhoneDrawer.svelte`:
  - `class="fixed bottom-0 inset-x-0 z-50 max-h-[88vh] bg-white rounded-t-2xl shadow-2xl flex flex-col pb-[env(safe-area-inset-bottom)] overflow-hidden transition-transform duration-300 sm:top-0 sm:right-0 sm:bottom-0 sm:left-auto sm:w-full sm:max-w-lg sm:max-h-full sm:rounded-none sm:border-l sm:border-[var(--color-border-default)]"`
  - Mobile drag handle: `<div class="sm:hidden w-12 h-1.5 bg-slate-300 rounded-full mx-auto my-2.5 shrink-0"></div>`
  - Sticky header with icon, title, description, and close button.
  - Body dynamically renders the active view (`orders`, `history`, `wishlist`, `reviews`, `addresses`, `returns`, `promos`, `request`).
- **Why over alternatives**: A single responsive drawer container avoids maintaining separate bottom sheets and desktop dialogs, provides consistent animations, and guarantees zero layout disruption to the page body.

### Decision 2: Redesigned Bottom Tab Architecture
- **Tab definitions**:
  - `preferences`: Preferences & Account (`Settings02Icon`)
  - `rewards`: Joy Rewards & VIP (`CrownIcon`)
  - `devices`: My Devices (`SmartPhone01Icon`)
  - `payments`: Payment Methods (`CreditCardIcon`)
- **Active tab rune in `+page.svelte`**:
  `let activeTab = $state<'preferences' | 'rewards' | 'devices' | 'payments'>('preferences');`
- **Default state**: Defaults to `'preferences'` so customer account controls and toggles are visible immediately.

### Decision 3: Preference Toggles in `SettingsTab.svelte`
- **Theme Toggle**: Visual pill selector for `Light` / `Dark` / `System`.
- **Language Switcher**: Visual pill selector for `English` / `বাংলা`.
- **Form Controls**: Profile info, notification switches, and password management.

### Decision 4: New Modular Tab Panels
- **`RewardsTab.svelte`**: Highlights loyalty points (`1,250 Pts`), tier meter with progress to next tier, VIP Platinum perks, and points transaction history.
- **`MyDevicesTab.svelte`**: Displays saved devices (`iPhone 16 Pro Max`, `Google Pixel 9`) with quick "Find Accessories" CTA linked to compatible products.
- **`PaymentsTab.svelte`**: Displays saved bKash/Nagad accounts and credit cards with default selector.

## Risks / Trade-offs

- **[Risk] Drawer content scrolling on mobile** → **Mitigation**: Set body overflow to hidden when drawer is active, with inner container having `overflow-y-auto` and bottom safe area padding.
- **[Risk] Tab transition responsiveness** → **Mitigation**: Use lightweight Svelte 5 conditional blocks (`{#if activeTab === ...}`) with pre-loaded mock data for instant switching.
