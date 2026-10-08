## Why

Joy Telecom currently has a bare placeholder at `/profile` indicating that customer account features are "Coming soon". Because the mobile bottom navigation bar and desktop header directly route users to `/profile`, customers encounter a dead-end screen. Building a clean, modular, and interactive Customer Profile page fulfills core customer needs: viewing recent order history with live status tracking, managing saved delivery addresses, inspecting wishlisted accessories, and configuring account settings, all built with clean, structured, and reusable Svelte 5 components matching the Joy Telecom design system.

## What Changes

- **Customer Profile Hub**: Replace the placeholder at `/profile/+page.svelte` with a high-fidelity, responsive customer profile dashboard.
- **Modular Subcomponents**: Build modular, reusable components under `src/lib/components/profile/`:
  - `ProfileHeader.svelte`: Customer identity banner with avatar, membership badge, quick stats (total orders, saved addresses, wishlist items).
  - `ProfileNavTabs.svelte`: Sleek responsive tab navigation for desktop and mobile viewports.
  - `OrdersTab.svelte`: Order history list with status badges (Processing, Shipped, Delivered), order numbers, tracking stepper modal, and quick reorder actions.
  - `AddressesTab.svelte`: Saved addresses card grid supporting primary address badges and address details formatted for Bangladesh delivery.
  - `WishlistTab.svelte`: Saved accessory cards with stock status and instant "Add to Cart" integration.
  - `SettingsTab.svelte`: Clean form controls for notifications, delivery preferences, and security settings.
- **Profile & Orders State**: Provide clean mock data and reactive state in `src/lib/data/mockProfile.ts` for realistic demo orders, saved addresses, and profile info.

## Capabilities

### New Capabilities
- `customer-profile`: Complete customer account hub including profile overview, order history with tracking, saved addresses, wishlist, and account settings.

### Modified Capabilities
*(None - no prior specs exist in this repository)*

## Impact

- Affected route: `src/routes/profile/+page.svelte`
- New components: `src/lib/components/profile/`
- Data store: `src/lib/data/mockProfile.ts`
- Global design token alignment: uses CSS variables `--color-bg-canvas`, `--color-bg-surface`, `--color-brand-blue`, `--color-text-primary`, `--color-border-default`, and standard Hugeicons.
