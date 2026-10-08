## 1. Mobile Header Adjustment

- [x] 1.1 In `src/lib/components/Header.svelte`, update `isCartOrProfile` to include `$page?.url?.pathname?.startsWith('/shop-by-phone')` so `shouldHideMobileSearch` suppresses the search bar row on `/shop-by-phone`, and verify on mobile that only the top row (Logo + Hamburger) appears.

## 2. Mobile Container Cleanup

- [x] 2.1 In `src/routes/shop-by-phone/+page.svelte`, remove the duplicate local `<header>` element and update the main container styling to `p-0 sm:p-6` with `border-0 sm:border rounded-none sm:rounded-[var(--radius-xl)] shadow-none sm:shadow-xs`, and verify that the configurator sits flush edge-to-edge on mobile with no outer border.

## 3. End-to-End Verification

- [x] 3.1 Run `npm run check` (`svelte-check`) and verify that `/shop-by-phone` renders cleanly with a single top bar, no search bar, and no outer card border on mobile viewports.

## 4. Back Step Navigation

- [x] 4.1 In `src/lib/state.svelte.ts` and `src/lib/components/AutoWizardConfigurator.svelte`, add a back button to the left of the step indicators when on step 2 or higher (`canGoBack`), enabling one-tap backward step navigation.
