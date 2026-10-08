# Proposal: Restrict Mobile Top Header Cart Icon to Product Details Page

## Why
On root/homepage and standard browse routes (such as `/`, category lists, or user profile), the mobile interface already renders the fixed `BottomNav` bar, which features a dedicated cart tab with live item badges. Displaying a top header cart button on these pages is redundant and unnecessarily occupies header space.

On the product details page (`/product/[slug]`), however, `BottomNav` is intentionally hidden to make room for the sticky purchase bar. Restricting the top-bar mobile cart button exclusively to product details pages eliminates duplicate controls on browse pages while keeping essential cart navigation where it is needed.

## What Changes
- **Route-Scoped Mobile Cart Rendering**:
  - Update `Header.svelte` so that the mobile cart button (`sm:hidden`) is only displayed when the user is on a product details page (`/product/...`).
  - On the homepage (`/`) and other non-product routes, the mobile top bar renders only the hamburger menu on the right.
- **Desktop Invariance**:
  - The desktop header cart button (`hidden sm:flex`) continues to display universally across all routes as designed.
- **Preserved Micro-Interactions**:
  - The tactile nod animation (`nod-lift`) and count badge pop animation (`badge-pop`) remain fully active on the product details page when adding items to the cart.

## Capabilities

### New Capabilities
- `mobile-header-cart-routing`: Defines route-conditional rendering rules for the mobile top header cart button.

### Modified Capabilities
<!-- None. -->

## Impact
- `src/lib/components/Header.svelte`: Check `$page.url.pathname.startsWith('/product/')` to conditionally display the mobile cart button.
- Clean header appearance on mobile homepage and browsing views without redundant cart triggers.
