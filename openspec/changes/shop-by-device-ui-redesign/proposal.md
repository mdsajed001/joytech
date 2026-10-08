## Why

The "Shop by Device" flow (across `/shop-by-phone` and `ShopByPhoneDrawer.svelte`) currently uses a cramped, boxy, wireframe-like aesthetic with micro-typography (`text-[10px]`, `text-[11px]`), rigid square cards, tiny 24px stepper circles, and flat gray series chips. This breaks visual cohesion with Joy Telecom's signature design language, which relies on generous touch targets (min 44px), tactile rounded cards (`rounded-[var(--radius-xl)]`), ambient `.cta-blue-bubble` gradients, and vibrant pill-shaped category chips. Aligning this feature with the design system will make the device finder feel premium, legible, and effortless to use on all screen sizes.

## What Changes

- **Typography & Scale Upgrade**: Replace cramped micro-fonts (`text-[10px]`, `text-[11px]`) with legible, high-contrast hierarchy (titles: 14–18px, subtitles/tags: 12px, badges: 10–11px bold).
- **Tactile Stepper Progress Rail**: Upgrade step circles from 24px (`w-6 h-6`) to 34px–36px (`w-9 h-9`) with bold numbering, `.cta-blue-bubble` on active steps, emerald checks on completed steps, and smooth backward navigation.
- **Pill-Capsule Selection Chips**: Transform summary chips at the top into high-contrast pill capsules with brand accent colors and intuitive tap-to-change styling.
- **Joy Telecom Card Styling for Steps 1 & 2**:
  - Step 1 (Device Types): Soft rounded cards (`rounded-[var(--radius-xl)]`) with generous padding, frosted icon pods (48px+), and dynamic device/brand counts.
  - Step 2 (Brands): Tactile cards with brand color glow gradients and replace the dashed "More Brands" box with a prominent action tile.
- **Category-Grade Series Filter Chips (Step 3)**:
  - Re-engineer series chips to match `CategorySection.svelte` (`rounded-full`, 44px tap target, `.cta-blue-bubble` on active chip).
  - Upgrade search bar to rounded-full pill design matching the global header search.
  - Upgrade model cards to comfortable tactile rows (min 56px height) with prominent model names, release year tags, and alias match indicators.
- **Rich Confirmation Hero (Step 4)**:
  - Redesign Step 4 with a device summary badge, 1-tap quick category shortcuts (`Cases`, `Screen Glass`, `Fast Chargers`, `MagSafe`), and an animated primary CTA button (`.cta-search-animated`).

## Capabilities

### New Capabilities
- `shop-by-device-visual-design`: Comprehensive design system alignment for the Shop by Device configurator, side drawer, and dedicated page incorporating Joy Telecom's signature bubble accents, generous touch targets, and tactile pill shapes.

### Modified Capabilities
<!-- None: No existing main specs are being changed. -->

## Impact

- `src/lib/components/AutoWizardConfigurator.svelte`: Full design revamp (stepper, cards, chips, search, confirmation screen).
- `src/lib/components/ShopByPhoneDrawer.svelte`: Header and container polish to match refreshed aesthetics.
- `src/routes/shop-by-phone/+page.svelte`: Layout container adjustments for responsive spacing.
