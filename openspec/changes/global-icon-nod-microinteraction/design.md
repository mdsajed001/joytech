## Context

See proposal.md - Why.
Earlier, the nod-lift animation was scoped exclusively within `CartItemCard.svelte`. The app's main navigation bars (desktop header and mobile bottom navigation) and profile shortcut tiles currently lack this tactile interaction.

## Goals / Non-Goals

**Goals:**
- Provide a centralized `@keyframes nod-lift` and `.nod-lift-active` utility in `src/routes/layout.css`.
- Apply the nod-and-lift micro-interaction to:
  1. Desktop Header action buttons (Wishlist, Profile, Cart) in `Header.svelte`.
  2. Mobile Bottom Navigation bar tabs (Home, Offers, Cart, Profile) in `BottomNav.svelte`.
  3. Circular action shortcut tiles in `ProfileHeader.svelte`.
- Ensure fluid 60fps GPU acceleration (`transform`, `will-change: transform`).

**Non-Goals:**
- Modifying routing or page navigation logic.
- Adding haptic or sound effects.

## Decisions

### Decision 1: Shared Global CSS Keyframes in layout.css
- **Choice**: Move `@keyframes nod-lift` and `.nod-lift-active` to `src/routes/layout.css`.
- **Rationale**: Eliminates duplication and ensures consistent physics (lift `-4px`, tilt `+12°`, spring `cubic-bezier(0.34, 1.56, 0.64, 1)`) across all UI modules.
- **Alternatives considered**: Local duplicate `<style>` tags in each component (violates DRY and drifts easily).

### Decision 2: Target the Inner Icon Glyph
- **Choice**: Apply the nod-and-lift animation specifically to the icon container / SVG inside the button, keeping the outer button bounds/pill anchored.
- **Rationale**: Prevents layout shift or border snapping, delivering a refined, native-app feel (like Apple iOS tab bar interactions).

### Decision 3: Capture-Phase Decoupled Animation Trigger
- **Choice**: Implement a global capture-phase `pointerdown` listener in `src/routes/+layout.svelte` that tags `.btn-nod-icon` with `.nod-lift-active` and retains it until `animationend`.
- **Rationale**: Relying solely on `:active` stops the animation immediately when a finger/mouse is released (typically 60-100ms). Decoupling via a transient class guarantees the full 500ms sequence plays to completion. Since Header and BottomNav reside in the persistent `+layout.svelte`, their elements are never unmounted during client-side route changes, so the animation finishes smoothly even after the target page has loaded.

### Decision 4: Calibrated 500ms Spring Curve
- **Choice**: Extend the duration to `0.5s` using `cubic-bezier(0.25, 1, 0.5, 1)` with a 4-point settling trajectory (lift `-4px` / tilt `11°` at 26%, cushion `-1.5px` / `-3°` at 50%, micro-settle `-0.3px` / `0.8°` at 75%, rest at 100%).
- **Rationale**: Provides a deliberate, luxurious feel without feeling rushed, twitched, or abrupt.

## Risks / Trade-offs

- **[Rapid Navigation Truncation]** → Solved by hosting Header and BottomNav in `+layout.svelte` and driving animation via `.nod-lift-active` class cleared only on `animationend`.
- **[Accessibility]** → Enforce `@media (prefers-reduced-motion: reduce)` in `layout.css` to disable translation and rotation for users requesting reduced motion.
