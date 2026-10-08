## 1. CSS Animations

- [x] 1.1 In `src/routes/layout.css`, add the `.fit-session-hero-bubble` class with a green-tinted background color (`emerald-600` or similar hex) and drifting radial gradient bubbles (matching the animation logic of `profile-hero-bubble`). Verify it compiles without CSS errors.

## 2. Layout Restructuring

- [x] 2.1 In `src/routes/search/+page.svelte`, move the `isWizardFitSession` block out of the right column and place it above the `max-w-7xl` container so it spans full width. Verify it appears at the very top of the page.
- [x] 2.2 Move the breadcrumbs (`<nav>`) either directly inside the new hero banner or right below it, removing the `py-4 sm:py-8` from the main `min-h-screen` container when the hero is active (or restructuring the wrappers to ensure the hero is flush to the top edge). Verify no white gap exists above the hero banner.

## 3. Hero Content Styling

- [x] 3.1 Inside the new hero banner in `+page.svelte`, style the `modelDisplayName` to be large, bold hero text (`text-3xl md:text-5xl font-black text-white`). 
- [x] 3.2 Place the "100% Fit Guaranteed" message and checkmark icon prominently below the device name in a clean, legible format against the green background.
- [x] 3.3 Ensure the "Show All Devices" dismiss button is cleanly integrated (e.g., in the top right corner) with ghost/transparent styling so it doesn't distract from the hero text. Verify clicking it correctly dismisses the fit session.
- [x] 3.4 Run `npx svelte-check --tsconfig ./tsconfig.json` to ensure no Svelte compiler or type errors were introduced.
