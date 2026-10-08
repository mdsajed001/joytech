## Context

See `proposal.md` for motivation. Currently, `CartItem` in `src/lib/state.svelte.ts` models items only as `{ product: Product; quantity: number }`. When users select a variant or compatible phone model on `/product/[slug]`, the cart does not track them distinctly and operations index by `product.id`, collapsing different variants into one.

## Goals / Non-Goals

**Goals:**
- Provide a composite unique identifier for each cart line item: `id: `${productId}-${variantId || 'base'}-${modelSlug || 'any'}``.
- Extend `CartItem` to persist `selectedVariant`, `selectedModel`, and `selectedModelName`.
- Render a compact, boxy metadata badge (`rounded-[var(--radius-sm)]`) directly below the title in `CartItemCard.svelte` showing variant and model.
- Maintain responsive layout on mobile ("phone cards cart") without overflowing or height blowup.
- Ensure cart mutations (`updateQuantity`, `removeItem`) target the specific `cartItem.id`.

**Non-Goals:**
- Allowing changing variants directly inside the cart drawer (users can re-add from the product page).
- Modifying checkout payment gateway structures (subtotal and pricing remain derived from cart items).

## Decisions

### 1. Unique Line Item ID Formula
- **Decision**: Generate `cartItem.id` as `${product.id}__${variant?.id ?? 'base'}__${modelSlug ?? 'any'}`.
- **Rationale**: Ensures deterministic matching when adding duplicate items while separating distinct selections into individual rows.
- **Alternative Considered**: Generating random UUIDs on add. Rejected because adding the exact same variant twice should increment quantity instead of creating duplicate line rows.

### 2. Boxy Badge Component & Styling
- **Decision**: Use a single boxy badge with `rounded-[var(--radius-sm)]` (or `rounded-xs`), subtle background `bg-[var(--color-bg-subtle)]`, subtle border `border border-[var(--color-border-default)]`, text size `text-[11px]`, and font `font-semibold`.
- **Rationale**: Aligns with user preference for a boxy (not rounded pill) aesthetic and matches the brand's sharp modern tech theme.
- **Alternative Considered**: Rounded-full pill tags. Rejected explicitly by user request.

### 3. Mobile Viewport Truncation
- **Decision**: Use `max-w-full truncate inline-block` or `flex items-center gap-1.5 flex-wrap` so that if variant + model names are long on 360px screens, they fit gracefully without overlapping action controls.

## Risks / Trade-offs

- **[Risk]** Existing hardcoded mock items in `CartState` initialization might not have `id` or `selectedVariant`.
  &rarr; *Mitigation*: Provide default `id`s for initial items during initialization and fallback to `item.product.id` if `item.id` is not present.
- **[Risk]** Wishlist or toast actions referencing `product.id`.
  &rarr; *Mitigation*: Keep `item.product` accessible on `CartItem` so components that need the underlying product object continue to function unchanged.
