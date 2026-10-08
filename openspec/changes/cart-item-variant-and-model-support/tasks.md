## 1. State & Cart Data Layer

- [x] 1.1 Update `CartItem` in `src/lib/state.svelte.ts` to include `id: string`, `selectedVariant?: ProductVariant`, `selectedModel?: string`, and `selectedModelName?: string`, and verify TypeScript compilation.
- [x] 1.2 Update `CartState.addItem` to compute composite line item key (`${productId}__${variantId || 'base'}__${modelSlug || 'any'}`) and accept optional variant and phone model parameters, incrementing existing item quantity if matching or appending a new line item.
- [x] 1.3 Update `CartState.updateQuantity` and `CartState.removeItem` to operate on `cartItemId: string`, verifying that altering or deleting one variant does not impact others.

## 2. Product Details Dispatch

- [x] 2.1 Update `handleAddToCart` in `src/routes/product/[slug]/+page.svelte` to pass `selectedVariant`, `selectedModel`, and resolved model name into `cartState.addItem`, verifying in-browser that adding different variants generates separate entries.

## 3. Cart Item Card Boxy Presentation

- [x] 3.1 Add a compact, non-rounded boxy badge (`rounded-[var(--radius-sm)]`) in `src/lib/components/cart/CartItemCard.svelte` beneath the product title, displaying variant title and selected phone model separated by a dot divider.
- [x] 3.2 Verify responsive layout for mobile screens ("phone cards cart") ensuring text truncation and spacing prevent layout shifts or overlapping controls.

## 4. Verification & Validation

- [x] 4.1 Run `npm run check` to ensure zero type errors across `src/lib/state.svelte.ts`, `src/lib/components/cart/CartItemCard.svelte`, and `src/routes/product/[slug]/+page.svelte`.
