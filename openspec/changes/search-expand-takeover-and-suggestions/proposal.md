## Why

Mobile shopping requires a fast, distraction-free search experience where tapping the search bar immediately brings focus to searching without page clutter. Concurrently, desktop search benefits from in-place focus and live product autocomplete rather than disrupting the whole page.

## What Changes

- **Mobile Full-Screen Search Takeover (`100vw` × `100vh`)**:
  - When the mobile search bar is clicked/tapped, it expands into a full-screen solid white takeover (`100vw`, `100vh`, `fixed inset-0 z-50`).
  - **Zero Vertical Drift**: The search bar stays pinned at the top header level with zero vertical jumping.
  - **Horizontal Text Centering**: The search placeholder and active query text center horizontally within the search field.
  - **Smooth Capsule-to-Boxy Shape Morphing**: The search input container and "Search" CTA button smoothly transition from rounded capsule (`rounded-full`) to boxy (`rounded-[var(--radius-sm)]`).
  - **Left Back Arrow `[<]`**: Appears on the left side to dismiss the takeover, blur the input, restore page scroll, and return smoothly to normal header view.
  - **Virtual Keyboard Auto-Pop**: Input is auto-focused immediately upon opening the takeover.
  - **Popular Search Tag Chips**: When the query is empty, the white canvas displays curated popular search tags (e.g., *iPhone 16 Pro Max*, *Anker 30W*, *MagSafe Case*, *Fast Charger*, *Spigen*, *AirPods*), allowing instant 1-tap searches.
  - **Live Mobile Product Suggestions**: As the user types, real-time matching products from the catalog are displayed with thumbnails, titles, brand badges, and prices in BDT.
- **Desktop In-Place Autocomplete (`md:` and `lg:`)**:
  - Clicking on the desktop search bar retains standard in-place focus without opening the full-screen overlay.
  - As the user types, a floating autocomplete dropdown displays beneath the desktop search input showing matching products, direct navigation links, and total match count.

## Capabilities

### New Capabilities
- `search-experience`: Full-screen mobile search takeover with smooth shape-morphing (capsule to boxy), centered text, popular tags, and auto-focused keyboard, paired with desktop inline autocomplete suggestions.

### Modified Capabilities
<!-- None -->

## Impact

- **Affected Files**:
  - `src/lib/components/Header.svelte`
  - `src/lib/components/SearchOverlay.svelte` (or integrated search component)
  - `src/routes/+layout.svelte`
- **APIs/Dependencies**: Catalog products from `src/lib/data/catalog.ts`.
