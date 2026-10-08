## Context

In `src/routes/product/[slug]/+page.svelte`, the main product presentation uses a 12-column CSS Grid (`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start`). Currently, the left column (`lg:col-span-7`) nests `ProductGallery`, `ProductTrustCard`, and `ProductAccordion` together, while the right column (`lg:col-span-5`) nests the title, pricing, model/variant selectors, and desktop CTA buy-box. On mobile viewports (`grid-cols-1`), this forces the trust card and accordion between the gallery and the purchase options.

## Goals / Non-Goals

**Goals:**
- On mobile (`< lg`), display the product purchasing section (Brand, Title, Rating, Pricing, Phone Model, Variant options) directly below `ProductGallery`.
- Position `ProductTrustCard` and `ProductAccordion` below the variant selector on mobile.
- Retain the exact desktop (`lg+`) 2-column layout (gallery + trust + accordion on the left, sticky buy box on the right).
- Avoid duplicating components or state across DOM nodes.

**Non-Goals:**
- Modifying the internal logic or styling of `ProductGallery`, `ProductTrustCard`, or `ProductAccordion`.
- Changing the mobile sticky bottom bar CTA behavior.

## Decisions

### 1. Pure CSS Grid Placement vs Component Duplication
- **Decision**: Restructure the grid into 3 top-level sibling containers with responsive CSS Grid positioning:
  - **Child 1 (Gallery)**: `lg:col-span-7 lg:col-start-1 lg:row-start-1`
  - **Child 2 (Purchase Details)**: `lg:col-span-5 lg:col-start-8 lg:row-start-1 lg:row-span-2 lg:sticky lg:top-24`
  - **Child 3 (In-Depth Specs & Guarantees)**: `lg:col-span-7 lg:col-start-1 lg:row-start-2`
- **Rationale**:
  - On mobile (`grid-cols-1`), items flow in standard DOM sequence: `Gallery` -> `Purchase Details` -> `Specs & Guarantees`.
  - On desktop (`lg:grid-cols-12`), `Purchase Details` is placed in column 8 spanning rows 1 & 2 as a sticky sidebar, while `Gallery` takes row 1 (columns 1–7) and `Specs & Guarantees` takes row 2 (columns 1–7).
  - Eliminates redundant DOM nodes and preserves component instance state (e.g. accordion expanded states).
- **Alternative Considered**: Duplicating `ProductTrustCard` and `ProductAccordion` with `hidden lg:block` / `block lg:hidden`. Rejected because it creates duplicate DOM elements and unnecessary HTML overhead.

## Risks / Trade-offs

- **[Risk]** Grid row alignment or height collapse when sticky sidebar stretches.
  - **Mitigation**: Using `items-start` on the grid container ensures the sticky right column doesn't stretch or push row 2 downward unintentionally.
