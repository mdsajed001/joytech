## Why

The current Shop by Phone configurator and container screens feel disconnected from Joy Telecom's premium design system. The mobile screen is missing top bar branding, buttons lack tactile micro-animations and proper geometry, and the flow is bogged down with verbose instructional text rather than being visual-first and self-explanatory.

Aligning the experience with Joy Telecom's design system elevates brand trust, simplifies device filtering into effortless visual taps, and provides delightful tactile micro-interactions.

## What Changes

- **Mobile Page Top Bar Branding**: Add a Joy Telecom header to `src/routes/shop-by-phone/+page.svelte` featuring the brand logo squircle (`J`), title, "100% Fit Guarantee" trust badge, and tactile back button.
- **Desktop Drawer Header**: Upgrade `ShopByPhoneDrawer.svelte` with a branded header pod, 3D device accent, and smooth backdrop-blur scrim.
- **Visual Step Progress Rail**: Replace heavy text explanations with an interactive 3-step progress bar (`1. Device -> 2. Brand -> 3. Model`) with active indicator glow.
- **Tactile Device Cards**: Replace generic square buttons with frosted 3D icon pods, curated radii, and tactile press physics (`active:scale-[0.97]`).
- **Instant Popular Brand Grid**: Render recognizable brand tiles (Apple, Samsung, Google Pixel, Xiaomi, OnePlus) directly on-screen so users can select their brand in one tap without reading or typing into a search overlay.
- **Organized Model Series Chips**: Group models by series chips (`iPhone 16`, `iPhone 15`, `Galaxy S24`, etc.) for instant visual identification.
- **Design-System Action Button**: Replace flat CTAs with Joy Telecom's `.cta-blue-bubble` ambient floating bubble animations, linking directly into filtered catalog results (`/search?phoneModel=...`).

## Capabilities

### New Capabilities
- `shop-by-phone-visual-experience`: Covers branded mobile header, visual step rail, tactile device/brand/model cards, and design-system action buttons.

### Modified Capabilities
None.

## Impact

- `src/routes/shop-by-phone/+page.svelte`: Header branding and responsive presentation.
- `src/lib/components/ShopByPhoneDrawer.svelte`: Drawer styling and animation.
- `src/lib/components/AutoWizardConfigurator.svelte`: Visual-first cards, progress rail, brand grid, and CTA styling.
- `src/lib/components/SearchableListOverlay.svelte`: Visual polish for the secondary search fallback.
