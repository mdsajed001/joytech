## Context

On mobile viewports, `/shop-by-phone` is currently rendered with two stacked headers (global `<Header />` with a search bar + local `<header>` bar) and an outer padded card border around `AutoWizardConfigurator`. See `proposal.md` for motivation.

## Goals / Non-Goals

**Goals:**
- Present a single, clean header on mobile for `/shop-by-phone` by suppressing the mobile search bar row in `Header.svelte`.
- Remove the local duplicate header in `src/routes/shop-by-phone/+page.svelte`.
- Ensure `AutoWizardConfigurator` renders flush edge-to-edge on mobile with no outer box or border.
- Preserve desktop side drawer and layout behavior without regression.

**Non-Goals:**
- Changing desktop configurator or side drawer behavior.
- Altering search row visibility on homepage or catalog pages.

## Decisions

### 1. Route-Based Search Bar Suppression in `Header.svelte`
- **Choice**: In `Header.svelte`, update `isCartOrProfile` to include `$page?.url?.pathname?.startsWith('/shop-by-phone')`.
- **Rationale**: `Header.svelte` already uses `shouldHideMobileSearch = customHideMobileSearch ?? isCartOrProfile` to gracefully suppress the second header row on focused transaction routes (`/cart`, `/profile`). Including `/shop-by-phone` follows this established pattern.

### 2. Flush Responsive Wrapper in `/shop-by-phone/+page.svelte`
- **Choice**: Remove the local `<header>` element entirely. Style the outer main container with `p-0 sm:p-6 lg:p-8` and the inner card with `border-0 sm:border rounded-none sm:rounded-[var(--radius-xl)] shadow-none sm:shadow-xs`.
- **Rationale**: On mobile phones, this renders `AutoWizardConfigurator` directly below the single global header with zero horizontal padding or card borders. On desktop, it maintains a structured centered container.

## Risks / Trade-offs

- **[Risk]** Absence of an explicit back button on mobile when the second header is removed.
  - **Mitigation**: The Joy Telecom logo in the global top bar links to `/`, and the standard mobile bottom nav / browser back button remain available.
