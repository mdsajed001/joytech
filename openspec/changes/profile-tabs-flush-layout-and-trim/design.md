## Context

See `proposal.md` for motivation. Currently in `src/routes/profile/+page.svelte`, `<ProfileNavTabs>` sits inside a padded wrapper (`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6`), introducing an unwanted vertical gap below the blue hero header and horizontal inset margins on mobile devices. Additionally, having 4 tabs (`Preferences & Account`, `Joy Rewards & VIP`, `My Devices`, `Payment Methods`) squeezed onto phone screens caused text overlap and cramped rendering.

## Goals / Non-Goals

**Goals:**
- Eliminate the top vertical gap between the blue hero header and the account tab bar in mobile viewports (`<sm`).
- Extend the tab bar to 100% full width from edge to edge on mobile (`rounded-none`, `border-x-0`).
- Completely remove the `devices` tab from the tab navigation, page state, and rendering.
- Shorten mobile tab titles to "Preferences", "Rewards", and "Payments" while retaining full titles on desktop.
- Prevent any text overlap or collision across screen sizes down to 320px.

**Non-Goals:**
- Altering the 8 top hero shortcuts (`Orders`, `Wishlist`, `Addresses`, etc.) or their slide-over drawer functionality.
- Modifying the internal contents of `SettingsTab.svelte`, `RewardsTab.svelte`, or `PaymentsTab.svelte`.

## Decisions

### 1. Flush Edge-to-Edge Container Architecture
- **Approach**: Position the tab bar immediately below `ProfileHeader` within a full-bleed wrapper:
  ```html
  <!-- Tab navigation wrapper -->
  <div class="w-full bg-[var(--color-bg-surface)] border-b border-[var(--color-border-default)] shadow-xs">
    <div class="max-w-7xl mx-auto px-0 sm:px-6 lg:px-8">
      <ProfileNavTabs ... />
    </div>
  </div>
  ```
  On mobile (`<sm`), `px-0` and `rounded-none` ensure zero outer margin and complete edge bleed. The content panel below starts with appropriate top padding (`pt-4 sm:pt-6`).
- **Alternative considered**: Keeping the tab bar inside the `py-6` container and applying negative margins (`-mx-4 -mt-6`). Rejected because negative margins are fragile with safe-area insets and cause overflow issues.

### 2. Responsive Shortened Tab Labels
- **Approach**: Define both compact and full labels for each of the 3 tabs:
  - Tab 1: `<span class="sm:hidden">Preferences</span><span class="hidden sm:inline">Preferences & Account</span>`
  - Tab 2: `<span class="sm:hidden">Rewards</span><span class="hidden sm:inline">Joy Rewards & VIP</span>` with compact `${rewardsPoints} Pts` badge
  - Tab 3: `<span class="sm:hidden">Payments</span><span class="hidden sm:inline">Payment Methods</span>`
- **Rationale**: Eliminates text overlapping while preserving full descriptive clarity on desktop.

### 3. Total Removal of Device Tab
- **Approach**:
  - Remove `My Devices` from `tabs` array in `ProfileNavTabs.svelte`.
  - Update `activeTab` type to `'preferences' | 'rewards' | 'payments'`.
  - Remove `MyDevicesTab` import and conditional rendering from `src/routes/profile/+page.svelte`.
  - Delete `src/lib/components/profile/MyDevicesTab.svelte`.

## Risks / Trade-offs

- **[Risk]** Very small mobile screens (<360px width) could still wrap if badges are large.  
  → **Mitigation**: Use compact padding (`px-2 sm:px-5`), `text-xs sm:text-sm`, and shrink icon size slightly on mobile (`size={15}`) so the 3 tabs comfortably fit side-by-side.
