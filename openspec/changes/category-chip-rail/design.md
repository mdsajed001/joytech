## Context

The Joy Telecom e-commerce store features an "Explore by Category" section to let users navigate to specific accessory types. Currently, `CategorySection.svelte` renders a 6-item multi-row card grid that takes up ~480px of vertical space on phones. See `proposal.md` for motivation.

## Goals / Non-Goals

**Goals:**
- Compress the vertical footprint of the category section from ~480px to under 85px on mobile viewports (<640px).
- Provide a smooth single-row horizontal touch rail on mobile with edge peeking to encourage natural horizontal swiping.
- Implement an aligned, space-efficient chip ribbon on desktop (≥640px).
- Adhere strictly to the design system `.meta-chip` tokens (`design-system.html` line 106).
- Preserve all existing anchor navigation links (`#{cat.slug}`).

**Non-Goals:**
- No multi-level category taxonomy or subcategory dropdowns in this change.
- No backend API filtering (the catalog remains static and client-side).

## Decisions

### D1: Single adaptive component with responsive flex containers
**Choice**: Refactor `CategorySection.svelte` directly using Tailwind CSS v4 responsive utilities rather than branching into multiple separate components.
- Mobile container: `flex items-center gap-2.5 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden touch-pan-x snap-x px-4 sm:px-0 py-1`
- Desktop container: `sm:flex-wrap sm:gap-3`
**Rationale**: Keeps all category presentation in a single cohesive component, preventing markup or data duplication while providing a seamless mobile and desktop experience.
**Alternatives considered**: Separate `CategoryGrid.svelte` and `CategoryChips.svelte` — rejected because desktop is also adopting the chip ribbon style and logic is 100% identical.

### D2: Design system `.meta-chip` styling
**Choice**: Style each category item as an interactive pill chip:
- Pill shape: `rounded-full` (`var(--radius-full)`)
- Background: `bg-[var(--color-bg-surface)]` with subtle border `border border-[var(--color-border-default)]`
- Active/Hover: `hover:border-[var(--color-brand-primary)] hover:bg-[var(--color-brand-primary-subtle)] hover:text-[var(--color-brand-primary)]`
- Icon: 16px HugeIcon (`text-[var(--color-brand-primary)]`)
- Title: `text-xs font-bold text-[var(--color-text-primary)] whitespace-nowrap`
- Count badge: `text-[10.5px] font-semibold text-[var(--color-text-disabled)] ml-1`
- Accessible sizing: `min-h-[38px] px-3.5 py-2` ensuring compliance with mobile touch targets.
**Rationale**: Exactly matches the specification in `design-system.html` (`.meta-chip`, line 106) and aligns with the design tokens already active in the codebase.

### D3: Compressed section chrome
**Choice**: Replace the verbose 3-line heading ("Curated Catalog / Explore by Category / Genuine certified accessories imported for BD devices") with a clean, single-line header row:
- Left: `Categories` (`text-sm sm:text-base font-black text-[var(--color-text-primary)]`)
- Right: Subtle count `6 Categories` (`text-xs text-[var(--color-text-disabled)] font-semibold`)
- Container padding: Reduced from `py-12 sm:py-16` to `py-3.5 sm:py-5`.
**Rationale**: Eliminates unnecessary descriptive text that delays user access to high-conversion product sections below.

## Risks / Trade-offs

- **[Risk: Category names truncated or wrapping on small devices]** → Mitigation: Use `whitespace-nowrap` and `shrink-0` on chips, allowing smooth horizontal pan without awkward multi-line text wrapping.
- **[Risk: Horizontal scrolling might hijack vertical page gesture]** → Mitigation: Use `touch-pan-x` so vertical scrolling remains frictionless.
