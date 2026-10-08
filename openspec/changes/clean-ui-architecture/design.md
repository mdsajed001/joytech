## Context

The Joy Telecom frontend is a SvelteKit application using Tailwind CSS v4 and HugeIcons. The previous changes implemented the desktop homepage and mobile-first redesign. Currently, several sections (`categories`, `best-sellers`, `authenticity banner`, `new-arrivals`) are implemented as raw inline HTML blocks in `src/routes/+page.svelte`, leading to code duplication and a cluttered page file. This change cleans up the architecture into modular components and cements the pure UI dummy architecture. See `proposal.md` for motivation.

## Goals / Non-Goals

**Goals:**
- Extract all inline homepage markup into focused, single-responsibility Svelte components.
- Create a reusable `ProductSection.svelte` component to eliminate duplicate grid markup between Best Sellers and New Arrivals.
- Reduce `+page.svelte` to a clean, declarative ~40-line composition.
- Maintain full design system fidelity (`design-system.html` tokens) across all components.
- Keep the project strictly client-side with zero backend dependencies or API simulations.

**Non-Goals:**
- No changes to visual design, layouts, or CSS tokens — this is a pure architectural refactoring.
- No backend API routes or async network fetching.
- No changes to existing global components (`Header`, `Footer`, `BottomNav`, `ProductCard`).

## Decisions

### D1: Extract inline sections into discrete components
**Choice**: Create `CategorySection.svelte`, `ProductSection.svelte`, and `AuthenticityBanner.svelte` in `src/lib/components/`.
**Rationale**: Keeps all section logic, icon mappings, and layout containers isolated. `+page.svelte` becomes a clean orchestration layer.
**Alternatives considered**: Leaving inline markup in `+page.svelte` — rejected because it harms maintainability and violates component-driven design.

### D2: Unified reusable `ProductSection.svelte`
**Choice**: Build a single `ProductSection.svelte` component that accepts:
- `id`: section anchor id (e.g. `'best-sellers'`, `'new-arrivals'`)
- `title`: section headline string
- `kicker`: small uppercase badge label
- `kickerIcon`: HugeIcon icon definition
- `kickerColor`: brand or accent color variable
- `subtitle` or `viewAllLink`: optional header accessories
- `products`: array of `Product` objects
- `onAddToCart`: event callback
**Rationale**: Both Best Sellers and New Arrivals use the exact same grid layout (`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6`), section header pattern, and product card mapping. Consolidating them into one reusable component removes duplicate code and ensures future styling changes apply uniformly.
**Alternatives considered**: Separate `BestSellersSection.svelte` and `NewArrivalsSection.svelte` — rejected because they would contain 90% duplicated markup.

### D3: Synchronous mock data architecture
**Choice**: All data is imported statically from `$lib/data/catalog`. No async loaders, no mock API fetch delays, and no server endpoints.
**Rationale**: The user confirmed this project will not have a backend and will remain a dummy UI site. Keeping data synchronous makes the application instantly responsive, eliminates network failure modes, and drastically simplifies testing.

## Risks / Trade-offs

- **[Risk: Component prop sprawl in ProductSection]** → Mitigation: Keep the props interface minimal and focused (title, kicker, icon, products, onAddToCart).
- **[Risk: Breaking scroll navigation targets (`#best-sellers`, `#categories`)]** → Mitigation: Ensure extracted components retain their exact `id` attributes on their root `<section>` tags.
