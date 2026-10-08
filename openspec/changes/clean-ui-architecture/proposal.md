## Why

The homepage (`+page.svelte`) currently mixes standalone components (`Hero`, `ShopByPhoneWizard`, `FlashSaleSection`, `TrustGrid`) with over 100 lines of inline markup for Categories, Best Sellers, Brand Authenticity, and New Arrivals. To maintain a clean, professional, and scalable architecture for this UI-only dummy e-commerce prototype, all page sections must be modular, reusable, and self-contained components with no backend or API overhead.

## What Changes

- **Extract `CategorySection.svelte`**: Move the inline category grid and header from `+page.svelte` into a self-contained component in `src/lib/components/CategorySection.svelte`.
- **Create reusable `ProductSection.svelte`**: Build a flexible, reusable product showcase component (`src/lib/components/ProductSection.svelte`) supporting custom section titles, kickers, icon badges, and product lists, replacing the duplicate inline markup for both "Best Sellers" and "New Arrivals".
- **Extract `AuthenticityBanner.svelte`**: Move the promotional brand authenticity guarantee banner from `+page.svelte` into `src/lib/components/AuthenticityBanner.svelte`.
- **Streamline `+page.svelte`**: Refactor `+page.svelte` into a clean, declarative ~40-line assembly file with zero raw section markup.
- **Formalize UI-Only Dummy Contract**: Cement that all data flows synchronously from `src/lib/data/catalog.ts` and interactive state resides solely in `src/lib/state.svelte.ts` (Svelte 5 runes) with zero backend/API stubs or server-side requirements.

## Capabilities

### New Capabilities
- `ui-modular-architecture`: Defines the modular component decomposition of the homepage sections and the client-only dummy data architecture.

### Modified Capabilities
_(none)_

## Impact

- **Components added**: `CategorySection.svelte`, `ProductSection.svelte`, `AuthenticityBanner.svelte` in `src/lib/components/`.
- **Files modified**: `src/routes/+page.svelte` (streamlined to declarative component composition).
- **Dependencies**: No new npm dependencies; purely architectural refactoring.
