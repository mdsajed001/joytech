## Why

The "Explore by Category" section currently renders as a bulky 2-column grid across 3 rows on mobile screens, consuming ~480px of vertical space (over 65% of a phone viewport) and forcing users to scroll past a full screen of oversized cards to reach high-converting sections like Flash Sale and Best Sellers. Transforming this section into a compact, single-row swipeable chip rail on mobile and an elegant chip ribbon on desktop dramatically accelerates navigation, improves thumb reachability, and compresses page height.

## What Changes

- **Compact Single-Row Mobile Chip Rail (<640px)**: Convert the 2-column grid into a horizontally scrollable single-row rail (`overflow-x-auto [scrollbar-width:none] touch-pan-x snap-x`) with smooth flick gestures and edge padding.
- **Sleek Desktop Chip Ribbon (≥640px)**: Transition desktop from oversized card tiles into a cohesive, space-efficient category chip ribbon that wraps gracefully beneath the Hero section.
- **Design System `.meta-chip` Token Alignment**: Style each category chip following the design system tokens (`rounded-full`, `bg-[var(--color-bg-surface)]`, `border border-[var(--color-border-default)]`, 16px HugeIcon in `var(--color-brand-primary)`, `text-xs font-bold text-[var(--color-text-primary)]`, subtle item count `(142)` in `var(--color-text-disabled)`, and 38px–40px accessible touch target).
- **Compressed Section Header**: Replace the multi-line 100px header and heavy padding (`py-12 sm:py-16`) with a clean, tight "Categories" title bar and minimal vertical padding (`py-3.5 sm:py-5`).

## Capabilities

### New Capabilities
- `category-chip-rail`: Defines the compact single-row chip rail presentation for category exploration, horizontal mobile touch gestures, design system token alignment, and compressed section chrome.

### Modified Capabilities
_(none)_

## Impact

- **Affected Components**:
  - `src/lib/components/CategorySection.svelte` (re-engineered from multi-row grid into responsive chip rail)
- **Dependencies**: No new packages; leverages existing Svelte 5 and `@hugeicons/core-free-icons`.
- **Breaking Changes**: None. All category links (`#{cat.slug}`) and anchor navigation targets remain intact.
