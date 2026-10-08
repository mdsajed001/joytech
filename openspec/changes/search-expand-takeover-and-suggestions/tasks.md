## 1. Mobile Search Full-Screen Takeover

- [x] 1.1 In `src/lib/components/Header.svelte`, implement mobile search takeover state (`isMobileSearchOpen`), binding it to tapping the mobile search bar to expand into a full-screen white canvas (`100vw` × `100vh`, `fixed inset-0 z-50`).
- [x] 1.2 Implement the smooth shape-morphing animation on the search bar container and button from capsule (`rounded-full`) to boxy (`rounded-[var(--radius-sm)]`), with the search bar staying pinned at the top without vertical drift.
- [x] 1.3 Add horizontal text centering for both placeholder and active input text (`text-center placeholder:text-center`), along with automatic keyboard focus on expansion.
- [x] 1.4 Add left back arrow button `[<]` to dismiss the takeover, blur input, restore scrolling, and smoothly collapse back to the standard header.
- [x] 1.5 Implement empty state popular tag chips (e.g. *iPhone 16 Pro Max*, *Anker 30W*, *MagSafe Case*) that immediately fill the search query when tapped.
- [x] 1.6 Implement live matching product cards from the catalog with thumbnails, titles, brand badges, and prices, allowing direct tap-to-navigate.

## 2. Desktop Autocomplete Dropdown

- [x] 2.1 In `src/lib/components/Header.svelte`, implement desktop autocomplete dropdown attached directly beneath the input when typing.
- [x] 2.2 Render matching products, brand badges, and price previews with keyboard accessibility and click-away outside dismiss.

## 3. Verification & Deployment

- [x] 3.1 Run `npm run check` and `npm run build` to verify type safety and bundle generation.
- [x] 3.2 Deploy to Vercel production and verify live mobile full-screen expansion, smooth shape morphing, centered text, and desktop autocomplete dropdown.
