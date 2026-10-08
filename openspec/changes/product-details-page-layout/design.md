## Context

Joytech's application architecture uses SvelteKit with Svelte 5 runes (`$state`, `$derived`, `$props`). Currently:
- Catalog data is defined in `src/lib/data/catalog.ts` containing products with slugs, compatible models, brands, prices, images, ratings, and features.
- Global navigation is rendered inside `src/routes/+layout.svelte`, where `BottomNav.svelte` renders on mobile viewports for all routes.
- `ProductCard.svelte` handles grid rendering on the homepage and lists, but its container is not yet linked to a dedicated product details route.

See `proposal.md` for background and user rationale.

## Goals / Non-Goals

**Goals:**
- Provide a dedicated, high-conversion, mobile-first PDP route at `/product/[slug]`.
- Suppress the 5-tab root `BottomNav` on product pages so mobile viewports are fully dedicated to product evaluation and buying actions.
- Build a sticky bottom action bar on mobile with real-time price, secondary "Add to Cart" (with cart icon), and primary "Buy Now" (with flash/arrow icon).
- Provide desktop 2-column split layout and phone-first vertical hierarchy (Gallery → Identity & Price → Model/Color Variants → Delivery & Trust → Specifications Accordions → Reviews → Related Products).
- Integrate seamlessly with existing reactive stores (`cartState` and `i18nState`).

**Non-Goals:**
- Backend API / database persistence (all catalog data remains statically loaded from `$lib/data/catalog.ts` with local cart storage).
- Real-time payment gateway processing (stays within P0 boundary: Cash on Delivery active, online payments simulated).

## Decisions

### 1. Dynamic Routing & Catalog Lookup
- **Approach**: Create `src/routes/product/[slug]/+page.svelte` and `+page.ts` (or direct lookup).
- **Lookup**: Given `$page.params.slug`, find the corresponding item in `PRODUCTS` from `$lib/data/catalog.ts`. If not found, render a branded "Product Not Found" state with a clear link back to the homepage.
- **Alternative Considered**: Query parameters (e.g., `/product?id=...`). Rejected because slug-based routes (`/product/spigen-ultra-hybrid-magsafe-iphone-16-pro-max`) are SEO-friendly, clean, and shareable.

### 2. Root Bottom Navigation Suppression
- **Approach**: In `src/routes/+layout.svelte`, inspect `$page.url.pathname`. When `pathname.startsWith('/product/')`, omit `<BottomNav />` from rendering.
- **Rationale**: On root pages (Home, Offers, Cart, Profile), bottom navigation facilitates discovery. On PDP, having both the 5-tab root navigation and the sticky purchase bar consumes ~140px of vertical mobile space, creating severe visual clutter and reducing purchase intent.
- **Alternative Considered**: Stacking root nav below the sticky bar. Rejected because it crowds the viewport and distracts the customer at the final purchase step.

### 3. Mobile Sticky Purchase Bar Architecture
- **Approach**: A pinned bottom bar (`fixed bottom-0 left-0 right-0 z-40 bg-[var(--color-bg-surface)] border-t border-[var(--color-border-default)] pb-[env(safe-area-inset-bottom)]`) rendered exclusively on mobile viewports for the product page.
- **Components of the Bar**:
  1. Price display (formatted in BDT with original strikethrough if discounted).
  2. Quantity stepper (`[-] qty [+]`).
  3. "Add to Cart" button with `ShoppingBag01Icon` / `CartIcon`.
  4. "Buy Now" CTA with `FlashIcon` / `ArrowRight01Icon` using the animated blue gradient CTA style (`cta-checkout-animated` / `cta-blue-bubble`).

### 4. Floating Support Widget Offset
- **Approach**: In `SupportWidget.svelte` (or via layout class binding), detect when PDP sticky bar is present and elevate the floating WhatsApp/Call button (`bottom-22` instead of `bottom-6` or `bottom-18`) so it never obstructs or collides with the Buy Now CTAs (per rule BR-SUP-01).

### 5. PDP Sub-Component Decomposition
To maintain clean architecture under `src/lib/components/product/`:
- `ProductGallery.svelte`: Multi-angle photos, zoom on hover/tap, thumbnail selector, discount/stock badges.
- `ProductVariantSelector.svelte`: Interactive phone model chips and color swatches with mandatory validation state.
- `ProductTrustCard.svelte`: Dhaka (24–48h) and Outside Dhaka delivery cards, Cash on Delivery badge, 6 Months Warranty, 7-Day Returns.
- `ProductAccordion.svelte`: Svelte 5 interactive collapsible panels for Overview, Technical Specifications table, and Package Contents.
- `ProductReviews.svelte`: Star summary, breakdown bars, verified customer reviews list.
- `ProductStickyBar.svelte`: Mobile bottom action bar.

## Risks / Trade-offs

- **[Risk]** User enters PDP without selecting mandatory phone model or color variant.
  - **Mitigation**: Purchase buttons check selection. If missing, highlight the variant picker with a smooth scroll and a micro-shake/pulse animation.
- **[Risk]** Out-of-stock product purchased accidentally.
  - **Mitigation**: When `product.inStock === false` or `stockCount === 0`, disable both Add to Cart and Buy Now buttons, replacing them with a muted "Sold Out" state.
- **[Risk]** Long accessory titles wrapping awkwardly on compact mobile screens.
  - **Mitigation**: Responsive typography (`text-lg sm:text-2xl font-black leading-snug`), with brand overline label.
