## Context

See `proposal.md` for background and motivation. The project is initialized with SvelteKit 2 (Svelte 5 runes), Tailwind CSS v4, and `@hugeicons/svelte`. We must translate the specifications from `joy-telecom-v1-p0-blueprint.md` and the 3-tier token architecture from `design-system.html` into a maintainable, high-performance web storefront.

## Goals / Non-Goals

**Goals:**
- Implement the design system tokens (Rokomari/Telecom seed colors, neutral ramps, typography with Manrope and Noto Sans Bengali, spacing, radii) into Tailwind v4.
- Build reusable Svelte 5 components: `Button`, `Badge`, `ProductCard`, `SearchInput`, `ShopByPhoneWizard`, `TrustGrid`, `Header`, `Footer`, `SupportWidget`.
- Assemble the complete homepage (`src/routes/+page.svelte`) matching the blueprint hierarchy and wireframe.
- Support responsive viewports (mobile 360px+ with 44px tap targets, tablet, desktop).
- Provide a clean in-memory mock catalog in `src/lib/data/` for accessories and phone compatibility.

**Non-Goals:**
- User accounts / login / registration (deferred to V2 per blueprint).
- Server database / real payment gateway integration (V1 uses client mock data and COD placeholder).
- Product Details Page (PDP), Cart, Checkout, or Order Tracking routes (will be built in subsequent changes).

## Decisions

### Decision 1: Token Architecture Integration with Tailwind CSS v4
- **Choice**: Embed design tokens directly in `src/routes/layout.css` using the CSS `@theme` block and root variables matching `design-system.html`.
- **Rationale**: Tailwind v4 uses CSS-first configuration rather than a JS config file. This ensures design system variables (`--color-brand-primary: #1D5FCB;`, `--color-accent: #F2790B;`, etc.) are directly available as Tailwind utility classes (e.g. `bg-brand-primary`, `text-accent`) while keeping raw CSS variable access intact for token fidelity.
- **Alternatives Considered**: Traditional Tailwind v3 PostCSS setup with `tailwind.config.js` (rejected in favor of the requested v4).

### Decision 2: Typography & Bilingual Handling
- **Choice**: Load Google Fonts (`Manrope` for Latin/numerals, `Noto Sans Bengali` for Bengali text) via `src/app.html`. Set default Latin UI font and provide a `font-bengali` utility with `line-height: 1.75` for `lang="bn"`.
- **Rationale**: Aligns strictly with `design-system.html`, which notes that Bengali conjuncts clip when rendered with standard 1.5 line height.
- **Alternatives Considered**: Single universal system font (rejected due to inconsistent rendering of Bengali scripts across devices).

### Decision 3: Component Architecture with Svelte 5 Runes
- **Choice**: Structure components in `src/lib/components/` using modern Svelte 5 runes (`$props()`, `$state()`, `$derived()`).
- **Rationale**: Svelte 5 provides clean fine-grained reactivity, perfect for the multi-step "Shop by Phone" wizard and live cart badge updates.
- **Alternatives Considered**: Legacy Svelte 4 syntax (`let`, `export let`) (rejected as Svelte 5 is the installed version).

### Decision 4: Iconography Standardization with Hugeicons
- **Choice**: Use `@hugeicons/svelte` outline icons with `size={20}` or `size={24}` and `strokeWidth={1.8}`.
- **Rationale**: Matches the outline iconography rules specified in `design-system.html` (1.75–2px stroke, filled variant reserved for active states).

## Risks / Trade-offs

- **[Risk] High DPI images for product cards and brand logos** → Mitigation: Use high-quality SVG brand marks and optimized modern WebP/Unsplash placeholders with standard dimensions and fallback background tints.
- **[Risk] Mobile tap target violations in compact product rows** → Mitigation: Ensure button containers enforce `min-h-[44px]` and `min-w-[44px]` per WCAG 2.2 AAA guidelines even when the visual icon is smaller.
