## Context

See `proposal.md` and `specs/auth-layout/spec.md`. The user wants to replace the modular card presentation in `/auth` and `/auth/verify` with an edge-to-edge layout on mobile, and a 50/50 split-screen layout on PC featuring a blue branded left column with slowly floating ambient white bubbles and floating tech accessory icons, centered around the Joytech logo.

## Goals / Non-Goals

**Goals:**
- Desktop: 50/50 split layout (`grid lg:grid-cols-2 min-h-screen`) where the left panel is a branded visual experience with animated bubbles and tech icons, and the right panel is the clean form.
- Mobile: Edge-to-edge full-screen presentation without nested cards or modular boxes.
- Create a shared layout wrapper (`src/lib/components/auth/AuthSplitLayout.svelte`) used by both `/auth` and `/auth/verify`.
- Preserve the global footer below the split layout when scrolled down on desktop and mobile.

**Non-Goals:**
- Modifying backend authentication logic (this is a layout and visual animation redesign).
- Altering the core form steps (Phone input, Google CTA, OTP verification, Phone linking remain as previously agreed).

## Decisions

**1. Shared Component Architecture**
- **Decision**: Create `src/lib/components/auth/AuthSplitLayout.svelte` that receives slots/snippets for the back button and the right-column form content.
- **Rationale**: Keeps both `/auth` and `/auth/verify` DRY, ensuring the ambient bubble animations and icon floating effects are loaded and configured identically without duplication.

**2. Ambient Animation Technique**
- **Decision**: Pure CSS keyframe animations (`@keyframes float-bubble` and `@keyframes float-sway`) using CSS transforms (`translateY`, `rotate`, `scale`).
- **Rationale**: Hardware-accelerated, lightweight, runs at 60fps without JavaScript performance overhead or main thread blocking.

**3. Accessory Icons Selection**
- **Decision**: Use curated Hugeicons representing core gadget categories:
  - `HeadphonesIcon` (audio)
  - `SmartPhone01Icon` (phones)
  - `SmartWatchIcon` (wearables)
  - `BatteryCharging01Icon` (charging / power banks)
  - `UsbIcon` (cables)
  - `Gamepad01Icon` (gaming accessories)
- **Rationale**: Directly reflects Joytech's e-commerce inventory while maintaining a tech-forward visual theme.

**4. Responsive Sizing & Boxy System Adherence**
- **Decision**: Right-side form container is constrained to `max-w-md w-full mx-auto` on desktop and full width on mobile, retaining `rounded-[var(--radius-sm)]` (8px) on all inputs, flags, and buttons.
- **Rationale**: Ensures the form looks compact and ergonomic on wide desktop displays, while matching the site's boxy design standard.

## Risks / Trade-offs

- **Risk**: Moving elements could cause distraction or motion sensitivity.
  **Mitigation**: Set animation durations to slow, ambient rates (10s to 18s cycles) with low opacity (`opacity-25` to `opacity-35`) and respect `prefers-reduced-motion`.
