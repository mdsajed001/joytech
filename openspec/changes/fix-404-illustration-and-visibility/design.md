## Context

The previous 404 implementation used an absolute watermark "404" covered by two floating cards containing a phone sticker and an unplugged icon. This resulted in an occluded, unreadable "404" and a disjointed collage. See [proposal.md](proposal.md) and [spec.md](specs/error-page-404/spec.md).

## Goals / Non-Goals

**Goals:**
- Provide a clean, unified vector illustration from unDraw ("Page Not Found") that integrates seamlessly into Joytech's store layout.
- Ensure the "404" status identifier is prominent, sharp, and 100% unobscured.
- Preserve the approved bilingual jokes (English GaN charger and Bangla delivery rider).
- Ensure smooth responsiveness and clean dark mode styling without layout shifts or horizontal clipping.

**Non-Goals:**
- Reintroducing an on-page language toggle pill (language is controlled globally via app settings).
- Changing the backend error handling or routing architecture.

## Decisions

### 1. Vector SVG Illustration from unDraw
- **Decision**: Use unDraw's open-source "Page Not Found" vector illustration, implemented as a dedicated clean SVG component or inline asset.
- **Rationale**: unDraw's 404 illustration is an open-source standard with a clean tech aesthetic, featuring bold geometric "4 0 4" numerals with an explorer character. It is lightweight (~5 KB), perfectly sharp on all screen resolutions, and allows precise fill color mapping.
- **Alternatives Considered**:
  - *Storyset with separate header*: Good, but requires an external status badge to be prominent.
  - *Custom multi-card CSS collage*: Previously attempted and produced a cluttered, broken result.

### 2. Elimination of Overlapping Card Layers
- **Decision**: Remove the floating `floating-phone-wrap` and `floating-cable-wrap` cards. The illustration will have its own dedicated container (`w-full max-w-sm sm:max-w-md mx-auto`) with comfortable margins.
- **Rationale**: Solves the occlusion bug directly at the root by eliminating foreground cards placed over numbers.

### 3. Joytech Brand Theme Calibration
- **Decision**: Style the SVG vectors using Joytech's primary electric blue (`#2563eb` / `var(--color-brand-primary)`), amber accents, and adaptive slate tones for light/dark mode.
- **Rationale**: Harmonizes the open-source artwork with Joytech's sleek aesthetic so it looks native to the store.

### 4. Language & Recovery Integration
- **Decision**: Keep the reactive `$derived(i18nState.language)` state to toggle between the GaN charger joke (English) and Delivery rider joke (Bangla). Retain the recovery buttons ("Back to Home", mobile search takeover trigger, and search chips).

## Risks / Trade-offs

- *[Risk]* SVG fill colors looking washed out in dark mode.
  → *Mitigation*: Use Tailwind dark variant classes or SVG opacity fills calibrated against Joytech's dark surface background.
- *[Risk]* Wide SVG causing mobile overflow.
  → *Mitigation*: Constrain the SVG wrapper with `max-w-xs sm:max-w-md w-full` and `viewBox="0 0 1074 584"` with `preserveAspectRatio="xMidYMid meet"`.
