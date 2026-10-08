## 1. Redesign AuthenticityBanner Component

- [x] 1.1 Replace the `<section>` background from bright blue gradient to deep navy gradient (`from-[#0B111E] to-[#0F2557]`), update section padding to `py-16 md:py-20`, and verify the premium dark look renders correctly
- [x] 1.2 Replace the two-column flex layout with a centered single-column layout: eyebrow → headline → subline stacked with centered text, constrained to `max-w-3xl`, and verify content reads naturally on desktop and mobile
- [x] 1.3 Replace the `<Button>` CTA with an inline search form — local `searchQuery` state, `<input>` with dark-translucent styling (`bg-white/10 border-white/20 text-white placeholder:text-white/50`), and a Search `<button>` that calls `onSearch?.(searchQuery.trim())` on submit; inline layout on `md:` and stacked full-width on mobile
- [x] 1.4 Update copy to: eyebrow "AUTHENTIC ACCESSORIES", headline "Find Your Perfect Accessory", subline "Official brands. Real stock.", input placeholder "Search phones, chargers, cases..."
- [x] 1.5 Remove the `onCheckCompatibility` prop and replace with `onSearch?: (query: string) => void`

## 2. Update Page Wiring

- [x] 2.1 In `+page.svelte`, replace `onCheckCompatibility={() => phoneDrawerState.open()}` with `onSearch={(q) => cartState.showToast(`Searching for "${q}"...`)}` and remove the unused `phoneDrawerState` import if no longer needed elsewhere on the page

## 3. Verification

- [x] 3.1 Run `npm run check` and `npm run build` to confirm zero TypeScript, Svelte, or build errors
