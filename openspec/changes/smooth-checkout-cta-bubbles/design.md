## Context

See `proposal.md` for motivation. In `src/routes/layout.css`, `.cta-checkout-animated` uses `::before` and `::after` with `width: 170%` and `height: 170%`. On wide buttons (e.g. 360px x 48px), this produces an elongated rectangle where `translate3d(-50%, 50%, 0)` pulls the pseudo-element's right and top edges to `(50%, 50%)`, cutting the button in half with a straight line.

## Goals / Non-Goals

**Goals:**
- Eliminate sharp straight lines and 90-degree boxy cuts in `.cta-checkout-animated` and `.cta-search-animated`.
- Structure the pseudo-elements so that their geometry and radial gradients naturally prevent any visible bounding box edges.
- Preserve the 10-second dual-bubble position interchange effect with 60fps GPU acceleration.

**Non-Goals:**
- Removing the bubble animation or replacing it with static solid colors.
- Introducing JavaScript animation libraries.

## Decisions

### Decision 1: Circular Orb Pseudo-Elements (Option A)
- **Choice**: Style `::before` and `::after` with `width: 150px; height: 150px; border-radius: 50%; aspect-ratio: 1/1;` (or proportional circular bounds) and a centered `radial-gradient(circle, rgba(255, 255, 255, 0.28) 0%, rgba(255, 255, 255, 0.08) 40%, transparent 70%)`.
- **Rationale**: Setting `border-radius: 50%` ensures the element itself is physically circular. Fading the gradient to `transparent` at 70% guarantees that the perimeter of the element has 0 opacity.
- **Alternatives Considered**: Using a massive rectangular canvas (`300% x 300%`) caused high offscreen composite memory without providing geometric circular guarantees.

### Decision 2: Calibrated Translation Path
- **Choice**:
  - Bubble A: Positioned at top-right (`top: -45px; right: -25px;`), travels diagonally to bottom-left with `translate3d(...)`, then returns.
  - Bubble B: Positioned at bottom-left (`bottom: -45px; left: -25px;`), travels diagonally to top-right with `translate3d(...)`, then returns.
- **Rationale**: Keeps both bubbles smoothly gliding across the diagonal axis with zero visual artifacts.

## Risks / Trade-offs

- **[Risk] Small buttons (e.g. mobile search button) vs wide buttons (checkout)** → **Mitigation**: Using `pointer-events: none` and `overflow: hidden` on the button parent ensures any part of the circular orb outside the button is clipped cleanly by the button's rounded corners.
