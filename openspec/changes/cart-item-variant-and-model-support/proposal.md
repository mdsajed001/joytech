## Why

Currently, when a user selects a specific product variant (e.g. 30W White / Matte Black) or compatible phone model (e.g. iPhone 16 Pro Max) on the product page, this selection is flattened or omitted in the cart. Cart items only track `product.id`, which causes different variants or phone models of the same accessory to collide into a single line item rather than staying distinct. Furthermore, cart item cards on both desktop and mobile viewports lack a clean visual display for the selected variant and phone model.

Providing a dedicated boxy badge for the variant and phone model in the cart card—and tracking separate cart line items per variant/model selection—ensures clear purchasing intent, correct order fulfillment, and a consistent boxy design language across all screen sizes.

## What Changes

- **Separate Cart Line Items**: Cart state tracks unique line item IDs (`${productId}-${variantId || 'base'}-${modelSlug || 'any'}`) so selecting different variants or models creates distinct entries in the cart with their own quantities.
- **Variant & Model Storage in CartItem**: Expand `CartItem` state to include `selectedVariant`, `selectedModel`, and `selectedModelName`.
- **Product Page Cart Dispatch**: Update `handleAddToCart` in `/product/[slug]` to pass the explicitly selected variant and phone model.
- **Cart Item Card Boxy Badge**: Render a compact, non-rounded boxy badge (`rounded-[var(--radius-sm)]`) under the product title in `CartItemCard.svelte` showing both the variant title and the selected phone model with clean text truncation on mobile ("phone cards cart").
- **Cart Operations by Line Item ID**: Update quantity increments, decrements, and removals in `CartState` to operate on the unique cart item ID rather than `product.id`.

## Capabilities

### New Capabilities
- `cart-item-variants`: Multi-variant and phone model cart tracking, distinct line items, and boxy badge presentation across desktop and mobile carts.

### Modified Capabilities
<!-- None: No existing specs recorded in repository -->

## Impact

- `src/lib/types.ts` / `src/lib/state.svelte.ts`: `CartItem` model structure, `addItem`, `updateQuantity`, and `removeItem` functions.
- `src/lib/components/cart/CartItemCard.svelte`: Layout to display the boxy variant & phone model badge cleanly on mobile and desktop.
- `src/routes/product/[slug]/+page.svelte`: Product details page passing selected variant and model to `cartState.addItem`.
