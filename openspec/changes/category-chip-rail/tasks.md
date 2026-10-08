## 1. CategorySection Refactoring

- [x] 1.1 Update `src/lib/components/CategorySection.svelte` header and container chrome: replace the 3-line heading with a compact, single-row "Categories" title and total count badge, and reduce vertical padding to `py-3.5 sm:py-5`. Verify: header renders compactly with minimal vertical height.
- [x] 1.2 Implement the responsive rail container in `CategorySection.svelte`: single-row horizontal swipeable rail on mobile (`flex items-center gap-2.5 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden touch-pan-x snap-x px-4 sm:px-0`) and graceful chip ribbon on desktop (`sm:flex-wrap sm:gap-3`). Verify: mobile view does not wrap onto multiple lines and desktop view wraps neatly.
- [x] 1.3 Style each category item as an interactive design system `.meta-chip`: `rounded-full`, `border border-[var(--color-border-default)]`, `bg-[var(--color-bg-surface)]`, 16px HugeIcon in `var(--color-brand-primary)`, `text-xs font-bold` label, subtle item count `(142)`, hover/active highlights, and accessible touch target height (`min-h-[38px]`). Verify: each category renders as a self-contained pill chip linking to `#{cat.slug}`.

## 2. Integration & Quality Verification

- [x] 2.1 Run `npm run check` (`svelte-check`) and `npm run build` (`vite build`). Verify: 0 errors, 0 warnings, and clean production build.
- [x] 2.2 Test mobile viewport (<640px): verify horizontal swipe gesture works smoothly, section height is under 85px, and clicking a category chip navigates to that category's anchor.
- [x] 2.3 Test desktop viewport (≥640px): verify clean chip ribbon presentation, hover styling, and responsive layout across standard widths.
