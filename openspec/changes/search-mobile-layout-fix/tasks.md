## 1. Mobile Header Takeover Structure

- [x] 1.1 Convert `<header>` in `src/lib/components/Header.svelte` into a full-screen flex column (`fixed inset-0 z-50 flex flex-col md:relative md:inset-auto md:z-40`) when `isMobileSearchOpen` is active and verify class bindings
- [x] 1.2 Hide the mobile menu hamburger button in Row 1 when `isMobileSearchOpen` is true (`{#if !isMobileSearchOpen}...{/if}`) and remove the Row 1 back button

## 2. Mobile Search Row (Row 2) Realignment

- [x] 2.1 Add the back navigation button `[<]` to Row 2 immediately to the left of the search input container with smooth click handler to close mobile search
- [x] 2.2 Realign search input container in Row 2 with neutral border (`border-[var(--color-border-strong)]`), horizontally centered text (`text-center`), clear button `(X)` when query > 0, and right-aligned Search CTA button

## 3. Flex Results Canvas & Verification

- [x] 3.1 Replace fixed offset (`fixed top-[128px]`) with native `flex-1 min-h-0 overflow-y-auto` results canvas directly underneath Row 2 and verify no overlapping occurs
- [x] 3.2 Run `npm run check` and `npm run build` to verify clean compilation and type safety
- [x] 3.3 Deploy to Vercel production with `npx vercel --prod --yes` and verify live site behavior
