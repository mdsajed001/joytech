## 1. Full-Bleed Sub-Tab Control Bar Layout

- [x] 1.1 In `src/lib/components/profile/ProfileDrawer.svelte` (under `type === 'reviews'`), refactor the sub-tab bar wrapper with negative margins (`-mx-4 -mt-4 sm:-mx-5 sm:-mt-5 mb-4`) to achieve 100% full-width layout touch-aligned with the top and side panel walls; verify visual alignment on mobile and desktop viewports.

## 2. Block Sub-Tab Styling & Verification

- [x] 2.1 In `src/lib/components/profile/ProfileDrawer.svelte`, style `Pending Reviews` and `Past Reviews` buttons as 2 equal-width 50% block elements (`grid grid-cols-2 h-11 sm:h-12 border-b border-[var(--color-border-default)] rounded-none py-2.5 px-3`) with active background/border highlights; verify sub-tab switching.
- [x] 2.2 Run `npx svelte-check` to verify zero TypeScript/Svelte compilation errors across the project.

