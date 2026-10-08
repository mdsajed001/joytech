# Technical Design: Support Widget AI Icon Cycle Animation

## Context

The `SupportWidget.svelte` component houses the floating action button at the bottom-right corner of the viewport. Currently, the button contains a static instance of `CustomerService01Icon` when closed and `Cancel01Icon` when opened.

See `proposal.md` for motivation and `specs/support-widget/spec.md` for behavioral requirements.

## Goals / Non-Goals

**Goals:**
- Implement a synchronized 10-second repeating cycle between `CustomerService01Icon` and `AiMagicIcon`.
- Execute a radial curved exit toward top-left and radial curved entry from bottom-right.
- Render a smooth, charming shimmer wobble rotation for `AiMagicIcon` in the center.
- Ensure 60/120 FPS buttery-smooth performance using CSS hardware acceleration (`transform` and `opacity`).
- Maintain zero layout shift and clean clipping via `overflow-hidden` on the circular button.

**Non-Goals:**
- Do not introduce complex JS interval/raf loops or external animation dependencies.
- Do not modify the popover contents (WhatsApp link, phone call link) or other navigation items.

## Decisions

### 1. Pure CSS `@keyframes` vs JavaScript Timers
- **Decision**: Use scoped `<style>` block `@keyframes` with `animation: ... 10s cubic-bezier(...) infinite`.
- **Rationale**: CSS keyframe animations run off the main thread on the browser's compositor layer, preventing UI stuttering and avoiding memory leaks or drift from browser tab backgrounding.
- **Alternatives Considered**: `setInterval` in Svelte 5 `$effect` — rejected due to timer drift, garbage collection, and need for manual teardown.

### 2. Icon Container & Stacking Structure
- **Decision**: Wrap the closed-state icons in a relative/absolute container inside the button:
  ```svelte
  {#if expanded}
    <Icon icon={Cancel01Icon} size={24} color="white" />
  {:else}
    <div class="relative w-6 h-6 flex items-center justify-center">
      <div class="absolute inset-0 flex items-center justify-center motion-headphone">
        <Icon icon={CustomerService01Icon} size={24} color="white" />
      </div>
      <div class="absolute inset-0 flex items-center justify-center motion-ai-magic">
        <Icon icon={AiMagicIcon} size={24} color="white" />
      </div>
    </div>
  {/if}
  ```
- **Rationale**: Absolute stacking ensures both icons share the exact center origin without affecting button dimensions or flex layout.

### 3. Keyframe Percentage Breakdown (10s total duration)
- **Headphone Loop (`motion-headphone`)**:
  - `0% - 64%`: Center rest (`transform: translate(0, 0) scale(1)`, `opacity: 1`)
  - `65% - 71%`: Radial exit to top-left (`transform: translate(-130%, -130%) rotate(-20deg) scale(0.6)`, `opacity: 0`)
  - `72% - 90%`: Off-screen, transition to bottom-right readiness (`transform: translate(130%, 130%) rotate(20deg) scale(0.6)`, `opacity: 0`)
  - `91% - 97%`: Radial entry from bottom-right into center (`transform: translate(0, 0) rotate(0deg) scale(1)`, `opacity: 1`)
  - `98% - 100%`: Center rest
- **AI Magic Loop (`motion-ai-magic`)**:
  - `0% - 64%`: Off-screen at bottom-right (`transform: translate(130%, 130%) rotate(20deg) scale(0.6)`, `opacity: 0`)
  - `65% - 72%`: Radial entry into center (`transform: translate(0, 0) rotate(0deg) scale(1)`, `opacity: 1`)
  - `74%`: Center tilt left (`transform: translate(0, 0) rotate(-14deg) scale(1.08)`)
  - `78%`: Center tilt right (`transform: translate(0, 0) rotate(14deg) scale(1.08)`)
  - `82%`: Center tilt slight left (`transform: translate(0, 0) rotate(-6deg) scale(1.04)`)
  - `85%`: Settle in center (`transform: translate(0, 0) rotate(0deg) scale(1)`)
  - `86% - 92%`: Radial exit to top-left (`transform: translate(-130%, -130%) rotate(-20deg) scale(0.6)`, `opacity: 0`)
  - `93% - 100%`: Off-screen, reset to bottom-right readiness

## Risks / Trade-offs

- **[Risk]** Visual clipping during entry/exit if button has sharp corners.
  - **Mitigation**: The button is already `rounded-full`. Adding `overflow-hidden` ensures smooth circular aperture framing during the radial slide.
- **[Risk]** Reduced motion accessibility.
  - **Mitigation**: Add `@media (prefers-reduced-motion: reduce)` rule to keep the headphone icon stationary and hide the AI icon for users who prefer reduced motion.
