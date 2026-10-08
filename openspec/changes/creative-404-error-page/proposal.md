## Why

Currently, Joytech lacks a custom 404 error page and falls back to SvelteKit's default raw error view when a visitor lands on an unmatched or broken URL. A high-conversion ecommerce experience should turn dead ends into memorable, delightful brand moments. This change introduces a creative, engaging, and relevantly humorous 404 page for Joytech, complete with tailored bilingual tech jokes (distinct jokes for English and Bangla), a high-quality relevant phone accessory illustration, an instant language switcher, and smart recovery CTAs.

## What Changes

- **Creative 404 View Component (`NotFoundView.svelte`)**:
  - Displays a playful, polished 404 state with themed phone accessory illustration and subtle micro-animations.
  - Features friendly, distinct tech/shopping jokes tailored specifically for English and Bangla:
    - **English**: The 65W GaN Fast Charger & Delivery mixup joke (*"Even our 65W GaN super-fast charger couldn't power up this page! Either the link unplugged itself, or our courier delivered this URL to the wrong address."*).
    - **Bangla**: The Delivery Rider location call joke (*"ভাইয়া, ডেলিভারি রাইডার কল দিয়ে বলল—'আপনার পেজের লোকেশন তো পাচ্ছি না, একটু মেইন রোডে আসেন!' 🛵💨 মনে হচ্ছে লিংকটা লোডশেডিংয়ে চলে গেছে! তবে চিন্তা নেই, আমাদের আসল গ্যাজেট স্টকেই আছে।"*).
  - Includes an interactive language toggle pill (`[🇬🇧 English | 🇧🇩 বাংলা]`) on the 404 screen that synchronizes with `i18nState`.
  - Provides clear recovery pathways: "Back to Home", "Search Accessories" (which opens the global search), and popular search chips (*iPhone 16 Cases*, *Anker GaN*, *MagSafe*, *Spigen*).
- **Dedicated Testing Route (`/404`)**:
  - Adds `src/routes/404/+page.svelte` allowing direct preview and validation of the 404 page at `/404`.
- **Global Error Handling (`+error.svelte`)**:
  - Adds `src/routes/+error.svelte` to catch all unmatched client/server routes within the app layout.

## Capabilities

### New Capabilities
- `creative-404-error-page`: Provides a creative, bilingual, humorous 404 error view component and handles unmatched routes across SvelteKit with a dedicated `/404` test route.

### Modified Capabilities
<!-- None -->

## Impact

- **Affected Files**:
  - `src/lib/components/NotFoundView.svelte`: New reusable 404 page component with illustration, bilingual jokes, language switcher, and recovery CTAs.
  - `src/routes/+error.svelte`: SvelteKit error boundary page hosting the 404 view.
  - `src/routes/404/+page.svelte`: Direct testing route for immediate browser inspection.
- **Dependencies**: None.
