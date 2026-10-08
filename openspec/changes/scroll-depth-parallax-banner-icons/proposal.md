## Why

The user requested interactive scroll-driven depth physics for the background accessory icons in `AuthenticityBanner.svelte`: as the user scrolls down towards the banner, the icons smoothly move forward from deep space towards the viewer, and as they scroll back up, the icons retreat into the far background. Furthermore, the icons on mobile devices were too small, and the desktop view lacked sufficient accessory icon density and variety.

## What Changes

- **Direct Scroll-to-Depth 3D Parallax**:
  - Replace the static one-time entrance trigger with real-time scroll progress tracking linked via `requestAnimationFrame` / scroll listener.
  - As scroll progresses into the section: icons smoothly scale up (`0.25 &rarr; 1.15`), translate forward, and increase opacity.
  - As user scrolls back up: icons smoothly sink back into deep perspective (`1.15 &rarr; 0.25`).
- **Mobile Size & Visibility Boost**:
  - Increase mobile icon dimensions from ~20px to **28px–34px** with boosted contrast and glow so they are clearly identifiable and tactile on phone displays.
- **Rich Desktop Icon Density (12–14 Unique Accessories)**:
  - Expand the accessory repertoire to include headphones, smartwatch, GaN charger, braided USB-C cable, power bank, smartphone case, armor shield, wireless earbuds, gaming controller triggers, car mount, camera lens protector, and speaker/dongle.
  - Populate the desktop canvas across peripheral and mid-flank zones without encroaching on the central search input.

## Capabilities

### New Capabilities
- `banner-scroll-depth-parallax`: Interactive real-time scroll-linked 3D depth projection, bidirectional forward/backward depth movement, bold mobile sizing, and 12+ accessory item density for the search banner.

### Modified Capabilities
<!-- None -->

## Impact

- **Affected Files**:
  - `src/lib/components/AuthenticityBanner.svelte`
- **Dependencies**: `@hugeicons/core-free-icons`, Svelte 5 runes (`$state`, `$effect`). Zero external dependencies.
