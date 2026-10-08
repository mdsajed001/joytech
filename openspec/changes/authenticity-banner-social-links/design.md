## Context

See proposal.md - Why.

The current `AuthenticityBanner.svelte` ends cleanly with padding (`py-16 md:py-20`). The user requested 4 round social logo badges positioned "half in, half out" along the bottom seam of this section, using official brand logos (not monochrome stroke icons).

## Goals / Non-Goals

**Goals:**
- Position 4 round social badges floating 50% over the dark banner and 50% over the section below (`translate-y-1/2`).
- Include authentic, official brand logos for Facebook, WhatsApp, Instagram, and YouTube.
- Apply high-contrast white ring border (`ring-4 ring-white`) and elevated shadow (`shadow-xl`) for crisp visibility on dual backgrounds.
- Provide smooth hover and touch micro-interactions (`hover:scale-110 hover:-translate-y-1`).
- Secure external links with `target="_blank" rel="noopener noreferrer"`.

**Non-Goals:**
- Dynamically fetching live follower counts or API feeds.
- Modifying the header or footer social links.

## Decisions

### 1. Seam-Overlapping CSS Technique
We anchor the badge container at the bottom edge of the section using:
```html
<div class="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-20 flex items-center justify-center gap-3.5 sm:gap-5">
  ...
</div>
```
- **Rationale**: `translate-y-1/2` mathematically guarantees the badges are centered exactly 50% in and 50% out across the section boundary on all screen widths.
- **Section Adjustment**: The parent `<section>` must have `relative` positioning. To ensure content inside doesn't collide with the badges, the section maintains its bottom padding (`pb-16 md:pb-20`).

### 2. Authentic Brand Logos via Inline SVG
Instead of generic Hugeicons or external PNG raster files:
- **Facebook**: Official `#1877F2` blue circle with authentic white Facebook `f` glyph.
- **WhatsApp**: Official `#25D366` green circle with authentic white phone handset & bubble glyph.
- **Instagram**: Authentic multi-color gradient (`bg-gradient-to-tr from-[#FD1D1D] via-[#E1306C] to-[#833AB4]`) with white rounded camera outline & lens.
- **YouTube**: Official `#FF0000` red circle with authentic centered white play triangle glyph.
- **Rationale**: Vector SVGs render with zero blur on high-DPI displays, require no external HTTP requests, and match the exact brand trademarks.

### 3. Sizing and Tactile Feel
- **Size**: `w-12 h-12 sm:w-14 sm:h-14` (48px on mobile for ideal touch target compliance, 56px on desktop).
- **Border**: `ring-4 ring-white shadow-xl hover:shadow-2xl` — the white ring prevents the colored badges from blending into either the dark navy background or the adjacent canvas background.
- **Animation**: `transition-all duration-200 hover:scale-110 hover:-translate-y-1 active:scale-95`.

### 4. Component Structure & Data
Keep the social links structured as an array within `AuthenticityBanner.svelte`:
```typescript
interface SocialLink {
  name: string;
  href: string;
  label: string;
  bgClass: string;
}
```
URLs default to Joy Telecom channels with placeholder handles that can easily be updated.

## Risks / Trade-offs

- **Overlap on Next Section**: The lower 24px–28px of each badge protrudes into the following section (`ProductSection`).
  - *Mitigation*: The subsequent section has `py-12` or `py-16` padding, so there is abundant clear space before any product card or title appears.
