## Context

In `src/lib/components/MobileDrawer.svelte`, the "Shop by Phone" section sits directly beneath the header and above the "BROWSE CATEGORIES" section. Currently, it is rendered as a plain neutral box. We are turning this into a rich, attention-grabbing hero callout specifically for mobile users. See [proposal.md](file:///c:/Users/Sajed/Documents/joytech/openspec/changes/mobile-shop-by-phone-bubble-cta/proposal.md).

## Goals / Non-Goals

**Goals:**
- Implement a primary blue breathing gradient container with multiple floating background bubbles in `MobileDrawer.svelte`.
- Create a crisp white card CTA with bold typography ("Shop by Phone" and Bengali translation).
- Create a high-quality 3D stylized phone sticker component (`StickerPhone3D.svelte`) that wiggles every 5 seconds using CSS keyframe animations.
- Ensure the CTA is purely a design enhancement for now with inert click behavior.

**Non-Goals:**
- Navigation or drawer flows upon clicking the CTA (preserved for a future feature release).
- Modifying desktop navigation.

## Decisions

### 1. Dedicated 3D Phone Sticker Component (`StickerPhone3D.svelte`)
- **Decision:** Build a dedicated SVG-based 3D smartphone sticker (`StickerPhone3D.svelte`) matching the design system of `StickerFire3D.svelte` and `StickerThunder3D.svelte`.
- **Details:** Includes multi-layered gradients (metallic rim, glossy dark screen, triple camera lenses, bevel drop shadow, and die-cut border).
- **Periodic Wiggle Keyframes:**
  ```css
  @keyframes phone-wiggle-5s {
    0%, 88%, 100% { transform: rotate(0deg) scale(1); }
    90% { transform: rotate(-14deg) scale(1.1); }
    92% { transform: rotate(12deg) scale(1.12); }
    94% { transform: rotate(-10deg) scale(1.08); }
    96% { transform: rotate(6deg) scale(1.04); }
    98% { transform: rotate(0deg) scale(1); }
  }
  ```

### 2. Breathing Container & Floating Bubble Animations
- **Breathing Rhythm:** 4s continuous cycle (`@keyframes container-breathe`) that smoothly oscillates scale (`1.0` to `1.015`) and glow shadow.
- **Bubble Animation:** 3 to 4 radial translucent orbs positioned absolutely behind the CTA, drifting on independent keyframe loops (`@keyframes float-orb-1`, `@keyframes float-orb-2`).

### 3. High-Contrast White CTA Card
- **Structure:**
  - Background: Crisp solid white (`#FFFFFF`) with subtle outer drop shadow.
  - Left: `StickerPhone3D` (wiggling every 5s).
  - Center: Dual-line text (English "Shop by Phone" in bold dark blue `#1e3a8a`, Bengali "ফোনের মডেল অনুযায়ী" in vivid blue `#2563eb`).
  - Right: Arrow indicator (`ArrowRight01Icon`).
  - Click behavior: `onclick={(e) => e.preventDefault()}`.

## Risks / Trade-offs

- *[Risk: Performance / Battery Drain on Mobile]* → Mitigation: Use pure GPU-accelerated CSS transforms (`transform: translate3d(...) rotate(...) scale(...)`) without layout recalculations or JavaScript interval timers.
