## 1. Keyframe Animation & Styles

- [x] 1.1 Define `@keyframes nod-lift` with `-4px` translation, `+12deg` clockwise rotation around `bottom center`, and a smooth spring curve (`cubic-bezier(0.34, 1.56, 0.64, 1)`) in `CartItemCard.svelte`
- [x] 1.2 Add reduced motion fallback (`@media (prefers-reduced-motion: reduce)`) to ensure accessible behavior for users who prefer minimal movement

## 2. Component Integration & Handlers

- [x] 2.1 Wire transient animation trigger (`isWishlistNodding`) to the Wishlist icon button in `CartItemCard.svelte`, verifying the icon lifts and nods right on click
- [x] 2.2 Wire transient animation trigger (`isRemoveNodding`) to the Remove icon button with a 200ms grace period before triggering `cartState.removeItem()`, disabling the button during the animation to prevent double-clicks

## 3. Verification & Diagnostic Checks

- [x] 3.1 Run `npm run check` to ensure SvelteKit and TypeScript diagnostics pass with 0 errors
- [x] 3.2 Verify tactile micro-interaction smoothness across mobile and desktop viewports in both light and dark themes

