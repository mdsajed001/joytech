## 1. Mobile Search Row Styling & Icon CTA

- [x] 1.1 Update the mobile search input container in `src/lib/components/Header.svelte` to remove borders (`border-none`) in expanded state while keeping borders on the back button
- [x] 1.2 Update the mobile search submission button in `src/lib/components/Header.svelte` to display icon-only (`Search01Icon`, size 18) when `isMobileSearchOpen` is true and text "Search" when collapsed
- [x] 1.3 Add explicit focus reset utilities (`outline-none focus:outline-none ring-0 focus:ring-0 focus-visible:outline-none focus-visible:ring-0`) to eliminate blue outlines on focus

## 2. Verification & Deployment

- [x] 2.1 Run `npm run check` and `npm run build` to verify clean compilation and type safety
- [x] 2.2 Deploy to Vercel production with `npx vercel --prod --yes` and verify live site behavior
