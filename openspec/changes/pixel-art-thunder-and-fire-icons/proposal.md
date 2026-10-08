# Proposal: Retro Pixel-Art Animated Thunder & Fire Icons

## Why

The Flash Sale headers and Customer Favorites section kickers previously used thin outlined line icons (`BoltIcon` and `FlameIcon`). To deliver the requested vibrant, retro-modern, arcade GIF aesthetic instead of thin wireframe outlines, we introduce dedicated pixel-art animated components (`PixelThunderIcon` and `PixelFireIcon`) with stepped frame-by-frame animations, crisp pixel rendering, and rich stepped color palettes.

## What Changes

- **New Pixel Art Animated Icons**:
  - `PixelThunderIcon.svelte`: A custom 16x16 pixel-art lightning bolt with stepped animation cycling through charging, electric sparks, and bright flash frames using `steps(1)`.
  - `PixelFireIcon.svelte`: A custom 16x16 pixel-art roaring fire with multi-frame animated flame tongues (crimson, orange, golden core) and floating ember pixels using `steps(1)`.
- **Component Replacements**:
  - `Hero.svelte` & `FlashSaleSection.svelte`: Replace outlined `BoltIcon` with `<PixelThunderIcon />`.
  - `ProductSection.svelte` / `+page.svelte`: Replace outlined `FlameIcon` with `<PixelFireIcon />`.
- **Rendering & Crisp Edges**:
  - Use SVG with `shape-rendering="crispEdges"` and CSS `image-rendering: pixelated` to guarantee sharp, non-blurry pixel art on high-DPI and mobile displays.

## Capabilities

### New Capabilities
- `pixel-art-kicker-icons`: Behavioral, frame-cycle, and visual requirements for pixel-art retro-animated SVG icons, specifically the 8-bit stepped thunder bolt and 8-bit stepped campfire flame.

### Modified Capabilities
<!-- None -->

## Impact

- **Affected Files**:
  - `src/lib/components/PixelThunderIcon.svelte` (new component)
  - `src/lib/components/PixelFireIcon.svelte` (new component)
  - `src/lib/components/Hero.svelte`
  - `src/lib/components/FlashSaleSection.svelte`
  - `src/lib/components/ProductSection.svelte`
  - `src/routes/+page.svelte`
