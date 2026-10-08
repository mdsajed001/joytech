## 1. Search Component Ergonomics & Button Integration

- [x] 1.1 Refactor the desktop search bar in `src/lib/components/Header.svelte` to a flex layout with `rounded-full overflow-hidden`, making the Search button span full height (`h-full`) and sit flush against the top, bottom, and right edge with zero gap.
- [x] 1.2 Upgrade the mobile search bar in `Header.svelte` to `h-11` (44px) and apply the same flush right search button for touch-friendly ergonomics.

## 2. Validation & Verification

- [x] 2.1 Run `npm run check` and verify zero Svelte/TypeScript errors.
- [x] 2.2 Run `npm run build` to verify production bundle builds cleanly.
- [x] 2.3 Verify visually in the browser that the Search button on both desktop and mobile is flush with the container without any side, top, or bottom gaps.
