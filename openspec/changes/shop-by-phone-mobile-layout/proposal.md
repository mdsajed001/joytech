## Why

On mobile viewports, the `/shop-by-phone` route suffers from redundant visual layers:
1. It displays a second local header underneath the global header, creating two stacked layers of Joy Telecom branding.
2. The global header displays the mobile search bar row, which is unnecessary when the user has already entered the dedicated device selector.
3. The device configurator is wrapped in a padded card with an extra outer border, causing layout cramping and double-border nesting on mobile.

Cleaning up these redundant layers provides a streamlined, full-width, flush mobile experience under a single clean top bar.

## What Changes

- **Header Search Bar Suppression**: In `Header.svelte`, hide the mobile search row on `/shop-by-phone` so only the single top bar (Logo + Hamburger) is displayed.
- **Remove Duplicate Header**: In `src/routes/shop-by-phone/+page.svelte`, remove the local `<header>` bar.
- **Flush Edge-to-Edge Layout**: In `src/routes/shop-by-phone/+page.svelte`, remove the outer container padding, border, and rounded corners on phone view so the configurator renders flush edge-to-edge.

## Capabilities

### New Capabilities
- `shop-by-phone-clean-mobile`: Covers the single clean top bar without search and flush full-width mobile container layout.

### Modified Capabilities
None.

## Impact

- `src/lib/components/Header.svelte`: `shouldHideMobileSearch` includes `/shop-by-phone`.
- `src/routes/shop-by-phone/+page.svelte`: Eliminates local header and strips mobile outer card borders.
