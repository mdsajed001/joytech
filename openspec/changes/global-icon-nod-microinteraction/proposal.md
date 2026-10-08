## Why

The primary navigation and action icon buttons across the desktop header, mobile bottom navigation, and customer profile shortcuts currently lack tactile motion feedback when clicked or tapped. Introducing a shared "nod & lift" micro-interaction (rising upward by 4px and tilting clockwise by 12° before springing smoothly back to rest) provides instant tactile delight and consistent interactive feedback across all key surfaces of the application.

## What Changes

- Define a shared `.nod-lift` and `.nod-lift-active` CSS utility and `@keyframes nod-lift` in `src/routes/layout.css` so any button or icon can easily adopt the motion.
- Wire the tactile nod-and-lift micro-interaction to Desktop Header buttons in `src/lib/components/Header.svelte`: Wishlist (`♡`), Profile (`👤`), and Cart (`🛍 Cart`).
- Wire the tactile nod-and-lift micro-interaction to Mobile Bottom Navigation tabs in `src/lib/components/BottomNav.svelte`: Home, Offers, Cart, and Profile.
- Wire the tactile nod-and-lift micro-interaction to the 8 circular Action Shortcuts in `src/lib/components/profile/ProfileHeader.svelte`: Orders, History, Wishlist, Reviews, Addresses, Returns, Promos, and Request.
- Ensure accessible reduced-motion support across all touchpoints with `@media (prefers-reduced-motion: reduce)`.

## Capabilities

### New Capabilities
- `global-icon-interactions`: Shared tactile micro-interactions and interactive nod-and-lift feedback for navigation and action icon buttons across header, bottom navigation, and profile shortcuts.

### Modified Capabilities
<!-- None: No existing specs in openspec/specs/ -->

## Impact

- `src/routes/layout.css`: Global `@keyframes nod-lift` and utility classes.
- `src/lib/components/Header.svelte`: Header icon buttons.
- `src/lib/components/BottomNav.svelte`: Mobile bottom navigation tabs.
- `src/lib/components/profile/ProfileHeader.svelte`: Profile shortcut buttons.
