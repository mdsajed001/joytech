## Context

See `proposal.md` and `specs/cart-animated-checkout-cta/spec.md`. Joy Telecom uses a signature `.cta-search-animated` micro-animation featuring two radial gradients (`::before` and `::after`) animated using keyframes `search-bubble-a` and `search-bubble-b` with a 10s infinite loop. The user wants the cart checkout CTAs to share this exact smooth animation.

## Goals / Non-Goals

**Goals:**
- Add `.cta-bubble-animated` / `.cta-checkout-animated` in `src/routes/layout.css` reusing the smooth ambient keyframe animations.
- Ensure all child content has `relative z-10` to stay cleanly above the animated pseudo-elements.

**Non-Goals:**
- Modify standard static buttons that intentionally don't have bubble animation.

## Decisions

1. **Shared Animation Rule in `src/routes/layout.css`**:
   - Reuse existing keyframes `search-bubble-a` and `search-bubble-b` or attach them to `.cta-checkout-animated`.
   - Maintain `isolation: isolate`, `overflow: hidden`, and `pointer-events: none` on pseudo-elements.

2. **Button Content Layering**:
   - Wrap inner spans/icons with `relative z-10` to guarantee high contrast and legibility over the animated background bubbles.
