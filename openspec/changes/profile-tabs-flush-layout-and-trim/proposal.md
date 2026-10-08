## Why

On mobile devices, the customer profile's account tabs had an unwanted vertical white gap below the blue hero section, outer margins that prevented full edge-to-edge bleed, and cramped 4-tab labeling that resulted in visual text overlapping. Additionally, the "My Devices" tab has been deemed unnecessary and needs to be completely removed across phone, PC, and the entire system.

## What Changes

- **Flush Full-Bleed Tab Navigation on Mobile**: In phone view (`<sm`), the tab bar spans 100% full-width to the edges of the screen (`rounded-none`, `w-full`, `border-x-0`) and connects directly underneath the blue profile hero banner with 0 vertical gap/padding.
- **Shortened Tab Labels for Phone View**: On mobile screens, tab names are shortened to prevent text collision or wrapping:
  - Tab 1: "Preferences" (desktop: "Preferences & Account")
  - Tab 2: "Rewards" with points badge (desktop: "Joy Rewards & VIP")
  - Tab 3: "Payments" (desktop: "Payment Methods")
- **Total Removal of My Devices Tab**: Completely remove the "My Devices" tab from mobile, PC, and the entire profile system.
- **Clean 3-Tab Account Structure**: The bottom account section focuses strictly on:
  1. `Preferences & Account` (Theme Light/Dark/System, Language English/বাংলা, Contact Info, Security)
  2. `Joy Rewards & VIP` (Loyalty balance, Tier progress, VIP perks, Point ledger)
  3. `Payment Methods` (Saved bKash, Nagad, Visa, Mastercard)

## Capabilities

### New Capabilities
- `customer-profile`: Defines the flush edge-to-edge mobile tab bar layout, shortened mobile tab names, and 3-tab account management architecture.

### Modified Capabilities
None.

## Impact

- `src/lib/components/profile/ProfileNavTabs.svelte`: Remove `devices` tab entry, add full-bleed phone styles (`rounded-none`, `w-full`, `border-x-0`), and use responsive shortened labels.
- `src/routes/profile/+page.svelte`: Mount tab bar flush below `ProfileHeader` without top gap on mobile, remove `MyDevicesTab` import and conditional rendering, update `activeTab` type to `'preferences' | 'rewards' | 'payments'`.
- `src/lib/components/profile/MyDevicesTab.svelte`: Removed from active usage.
