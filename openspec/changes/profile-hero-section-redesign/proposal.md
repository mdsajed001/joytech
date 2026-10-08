## Why

The current customer profile header uses an enclosed card container with default borders, padding, and a standard breadcrumb navigation, which feels disconnected from Joy Telecom's flagship brand presentation on the homepage hero. Redesigning the profile header into a full-bleed hero banner with primary blue background and ambient white bubble styling elevates the customer account hub to feel premium, cohesive, and seamlessly integrated with the top navigation bar.

## What Changes

- **Edge-to-Edge Hero Banner Layout**: Remove the external card container, side borders, and corner radius from the profile header, allowing it to span full-width edge-to-edge starting directly flush against the bottom edge of the top navigation bar.
- **Brand Primary Blue & Bubble Style Surface**: Style the hero banner background with Joy Telecom's primary blue (`var(--color-brand-primary)`) augmented with the ambient white radial-gradient bubble motif matching the design system (`cta-blue-bubble` aesthetic).
- **Remove Breadcrumb Navigation**: Remove the "Home > My Account" breadcrumb row from the profile page layout for a cleaner, modern hero feel.
- **Refined Typography & Frosted Glass Metrics**: Update customer identity typography for high-contrast presentation on blue (white typography, glowing avatar border, verified badge styling) and transform quick-metric buttons (Orders, Addresses, Wishlist, Joy Points) into frosted glass cards (`backdrop-blur`, semi-transparent white backgrounds and borders).
- **Preserved Responsive Content Grid**: Keep the lower content area (profile navigation tabs and tab panels: Orders, Addresses, Wishlist, Settings) centered inside the max-w-7xl padded container directly beneath the hero banner.

## Capabilities

### New Capabilities
- `customer-profile`: Defines the visual presentation, edge-to-edge layout, responsive stats, and account management capabilities for the customer profile hub.

### Modified Capabilities
<!-- None: No existing specs in openspec/specs/ yet -->

## Impact

- **Affected Code**:
  - `src/routes/profile/+page.svelte`: Split layout into full-bleed hero area and padded content area; remove breadcrumb navigation.
  - `src/lib/components/profile/ProfileHeader.svelte`: Redesign header into full-bleed hero with frosted glass stat cards and high-contrast styling.
  - `src/routes/layout.css`: Add hero bubble animation/styling utility class if needed.
- **Dependencies**: None.
- **APIs / Data**: No breaking changes to `mockProfile.ts` or profile state machine.
