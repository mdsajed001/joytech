## Context

The Shop by Phone configurator and container screens (`src/routes/shop-by-phone/+page.svelte` and `ShopByPhoneDrawer.svelte`) require visual overhaul to adhere to Joy Telecom's established design tokens and UI patterns. See `proposal.md` for motivation.

## Goals / Non-Goals

**Goals:**
- Provide a branded header on mobile (`/shop-by-phone`) matching Joy Telecom's brand identity and trust credentials.
- Enhance `ShopByPhoneDrawer.svelte` desktop shell with 3D device iconography, subtitles, and backdrop-blur scrim.
- Streamline the configurator UX to be visual-first and self-explanatory:
  - 3-step visual progress bar.
  - Tactile frosted icon pods for device types.
  - Instant popular brand grid directly on canvas.
  - Organized series chips for model selection.
  - High-energy `.cta-blue-bubble` action button linking directly to `/search?phoneModel=<slug>`.

**Non-Goals:**
- Modifying backend catalog data or adding server-side endpoints.

## Decisions

### 1. Inline Popular Brand Grid vs Full-Screen Text List
- **Choice**: Display top brands (Apple, Samsung, Google Pixel, Xiaomi, OnePlus) as prominent, tactile visual tiles directly in the configurator, retaining the searchable overlay as a secondary "More Brands" option.
- **Rationale**: 95%+ of shoppers looking for accessories in Joy Telecom's inventory search for these flagship brands. Forcing an immediate full-screen search input with 30 text lines adds unnecessary friction. Visual tiles enable instant one-tap selection with zero typing or reading.

### 2. Standardized Mobile Top Bar
- **Choice**: Structure the mobile route header with Joy Telecom's blue `J` squircle logo, store title, a "100% Fit Guarantee" trust badge, and an `active:scale-95` back button.
- **Rationale**: Maintains brand continuity with the homepage and mobile drawer so the customer feels firmly within the official store.

### 3. Joy Telecom Button Physics & Tokens
- **Choice**: Use CSS tokens (`var(--color-brand-primary)`, `var(--radius-lg)`, `var(--radius-full)`, `active:scale-[0.97]`) and the ambient bubble animation (`.cta-blue-bubble`) for the completion CTA.
- **Rationale**: Eliminates dull, flat buttons and ensures tactile satisfaction on touch devices.

## Risks / Trade-offs

- **[Risk]** Dense visual cards on smaller viewports (e.g. 375px width).
  - **Mitigation**: Use compact responsive grids (2-column for devices, 2-to-3 column for brands) with flex layouts and clean spacing tokens.
