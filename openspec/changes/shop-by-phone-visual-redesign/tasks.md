## 1. Container & Shell Branding

- [x] 1.1 In `src/routes/shop-by-phone/+page.svelte`, implement Joy Telecom's authentic header (blue squircle `J` emblem, store title, "100% Fit Guarantee" live trust pill, and tactile back button), and verify by visiting `/shop-by-phone` on mobile viewport.
- [x] 1.2 In `src/lib/components/ShopByPhoneDrawer.svelte`, upgrade the desktop drawer header with brand emblem, 3D icon accent, subtitle, and backdrop-blur styling, and verify by opening the drawer on desktop.

## 2. Visual Configurator & Tactile Cards

- [x] 2.1 In `src/lib/components/AutoWizardConfigurator.svelte`, implement the 3-step visual progress bar (`1. Device -> 2. Brand -> 3. Model`) with active indicator glow and checkmarks, and verify by clicking through steps to observe the progress rail update.
- [x] 2.2 In `src/lib/components/AutoWizardConfigurator.svelte`, redesign Device Type selection into tactile cards with frosted icon pods, `--shadow-sm`, and `active:scale-[0.97]` press physics, and verify by interacting with device tiles.
- [x] 2.3 In `src/lib/components/AutoWizardConfigurator.svelte`, implement the on-screen Popular Brand Grid (Apple, Samsung, Google Pixel, Xiaomi, OnePlus) with one-tap selection and secondary search overlay for other brands, and verify by selecting a brand.
- [x] 2.4 In `src/lib/components/AutoWizardConfigurator.svelte`, implement Model Series filter chips and visual model tiles, and verify by selecting a model.

## 3. Design-System Action CTA & Verification

- [x] 3.1 In `src/lib/components/AutoWizardConfigurator.svelte`, style the final completion card with Joy Telecom's `.cta-blue-bubble` ambient bubble animation and direct routing to `/search?phoneModel=<modelSlug>`, and verify by completing a configuration and clicking the CTA.
- [x] 3.2 Run `npm run check` (`svelte-check`) and verify that all responsive interactions, animations, and typography adhere to Joy Telecom's design system without errors.
