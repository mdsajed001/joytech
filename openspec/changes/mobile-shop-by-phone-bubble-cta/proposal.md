## Why

The current mobile menu "Shop by Phone" placeholder is visually flat and does not command the attention of mobile shoppers browsing the navigation drawer. By redesigning it with a primary brand blue breathing background, floating translucent bubbles, and a crisp white CTA featuring a playful 3D smartphone icon that wiggles periodically, we make the entry point feel premium, dynamic, and eye-catching while preserving its inert status until the destination flow is finalized.

## What Changes

- **Primary Blue Breathing Container**:
  - Style the "Shop by Phone" section in `src/lib/components/MobileDrawer.svelte` with a rich brand blue gradient.
  - Implement a subtle continuous "breathing" scale and glow animation.
- **Floating Translucent Bubble Animation**:
  - Add layered translucent orbs inside the blue container that drift on continuous organic float paths.
- **White "Shop by Phone" CTA Card**:
  - Embed a high-contrast white card/button inside the blue container with bold title "Shop by Phone", Bengali subtitle "ফোনের মডেল অনুযায়ী", and action arrow indicator.
  - Strictly non-interactive / inert on click (no navigation or drawer side-effects for now).
- **3D Phone Icon with 5-Second Attention Wiggle**:
  - Render a stylized 3D smartphone graphic that stays poised and executes a lively wiggle burst every 5 seconds.
- **Mobile-Only Scope**:
  - All changes apply strictly to the mobile navigation drawer (`MobileDrawer.svelte`).

## Capabilities

### New Capabilities
- `mobile-shop-by-phone-bubble-cta`: Delivers an eye-catching breathing blue bubble card with a 5-second periodic wiggling 3D phone CTA in the mobile navigation drawer.

### Modified Capabilities
<!-- None -->

## Impact

- **Affected Files**:
  - `src/lib/components/MobileDrawer.svelte`: Redesign the "Shop by Phone" menu row with blue breathing container, floating bubbles, white CTA, and 3D wiggle phone.
  - `src/lib/components/StickerPhone3D.svelte` (or inline 3D asset): Dedicated 3D phone sticker component with periodic wiggle animation.
- **Dependencies**: None.
