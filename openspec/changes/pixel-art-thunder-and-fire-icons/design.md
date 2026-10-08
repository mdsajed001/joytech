## Context

The storefront currently utilizes thin outlined wireframe SVG icons from Hugeicons (`BoltIcon` and `FlameIcon`) in section headers. The user requested replacing these line icons with animated 8-bit/16-bit pixel-art GIF style icons that feel tactile, arcade-like, and vibrant rather than wireframe line art.

See `proposal.md` for motivation.

## Goals / Non-Goals

**Goals:**
- Provide standalone Svelte components: `PixelThunderIcon.svelte` and `PixelFireIcon.svelte`.
- Build the pixel art using SVG with a `16x16` coordinate grid (`viewBox="0 0 16 16"`), `shape-rendering="crispEdges"`, and `image-rendering: pixelated` to guarantee razor-sharp pixel squares on all screen resolutions and densities without blur.
- Emulate authentic retro GIF animation using discrete stepped CSS keyframes (`steps(1)` or step percentage blocks) cycling through 3 to 4 distinct pixel frames.
- Seamlessly integrate `PixelThunderIcon` into `Hero.svelte` and `FlashSaleSection.svelte`.
- Seamlessly integrate `PixelFireIcon` into `ProductSection.svelte` and `+page.svelte`.
- Ensure zero regression in TypeScript/Svelte checks (`npm run check`).

**Non-Goals:**
- Loading external heavy binary `.gif` files (which cause layout shifts, lack color synchronization, and scale poorly).
- Replacing standard navigation/utility icons (search, cart, user, arrows) with pixel art; pixel styling is strictly reserved for promotional urgency/energy kickers (Flash Sale & Customer Favorites).

## Decisions

### 1. Pure Inline SVG with Crisp Edges vs External GIF/WebP
- **Decision**: Implement the pixel art directly in inline SVG components with `<rect>` elements on a 16x16 coordinate grid, combined with SVG/CSS stepped frame animations.
- **Rationale**:
  - Zero network latency or external asset loading.
  - Scales flawlessly to any dimension (16px, 18px, 22px, 32px) while staying 100% crisp with `shape-rendering="crispEdges"`.
  - Accessible and fully controllable via props (`size`, `class`).
- **Alternatives Considered**:
  - Real animated `.gif` files: heavy, cannot easily be sized or styled, blurry on high-DPI retina screens when scaled.
  - Canvas 2D frame drawing: excessive complexity and memory overhead for small 16px kicker icons.

### 2. Stepped Keyframe Frame-by-Frame Swapping vs Continuous CSS Motion
- **Decision**: Group pixel rects into frame layers (`frame-1`, `frame-2`, `frame-3`, `frame-4`) and animate their `display` or `opacity` using `animation-timing-function: steps(1)` or keyframe percentage steps (0-25%, 25-50%, 50-75%, 75-100%).
- **Rationale**: Real pixel-art animations in classic arcade games never smoothly interpolate or blur between positions. They jump instantaneously between drawn sprite frames. Stepped keyframes accurately replicate this retro aesthetic.
- **Alternatives Considered**:
  - Smooth tweening/transforms: Looks like vector deformation rather than true 8-bit pixel art.

### 3. Integration in `ProductSection.svelte`
- **Decision**: Allow `ProductSection.svelte` to accept either an icon definition (`kickerIcon`) or a custom component (`kickerComponent`), rendering `kickerComponent` with `size={16}` when provided.
- **Rationale**: Keeps `ProductSection` backward-compatible with Hugeicons while cleanly supporting custom rich components like `PixelFireIcon`.

## Risks / Trade-offs

- **[Performance of multiple SVG elements]** → Both icons use 16x16 grids with minimal rect counts (~30-50 rects total per icon) and pure CSS display/opacity toggling, with negligible CPU/GPU cost.
- **[Dark mode / theme contrast]** → The pixel palettes use vivid high-contrast tones (for thunder: bright yellow `#FFE600`, amber `#FFB800`, electric cyan-white `#E0F7FF`; for fire: ruby `#E52E2E`, bright orange `#FF6B00`, radiant gold `#FFE600`) that stand out clearly against both dark and light surfaces.
