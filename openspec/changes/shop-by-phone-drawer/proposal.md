## Why

The "Shop by Phone" wizard is currently embedded as a heavy inline section on the homepage, cluttering the content flow and elongating page scroll. Transforming it into an on-demand modal interface—a native-feeling **Bottom Sheet** on mobile (<640px) and a sleek **Slide-over Drawer** on desktop (≥640px)—creates a focused, premium device-compatibility shopping experience while keeping the homepage clean and streamlined.

## What Changes

- **Remove Inline Homepage Section**: Remove the inline `<ShopByPhoneWizard>` section from `+page.svelte`.
- **Create `ShopByPhoneDrawer.svelte`**:
  - **Mobile (<640px)**: Renders as an interactive Bottom Sheet sliding up from the screen bottom with a grab handle, rounded top corners (`rounded-t-[var(--radius-xl)]`), safe-area inset padding, and `max-h-[85vh]` scrollable content.
  - **Desktop (≥640px)**: Renders as a right-side Slide-over Drawer (`w-full max-w-lg fixed top-0 right-0 inset-y-0`) with a sticky header and smooth transition.
  - Both viewports share a backdrop scrim, `Escape` key dismissal, and backdrop click-to-close.
- **Self-Contained Shopping Flow**: Users select their phone brand, choose their exact model, and can immediately browse and add verified compatible accessories directly within the drawer/sheet with instant cart feedback.
- **Global Modal State**: Add `phoneDrawerState` to `src/lib/state.svelte.ts` so any button or banner across the application can open the drawer with an optional preselected brand.
- **Connect Triggers**:
  - Hero CTA ("★ Shop by Phone Model") opens the drawer.
  - Mobile Promo Banner Slider (Slide 2 tap) opens the bottom sheet.
  - Authenticity Banner CTA ("Check Compatibility") opens the drawer.
  - Mobile Navigation Drawer brand buttons open the sheet with the brand preselected.

## Capabilities

### New Capabilities
- `shop-by-phone-modal`: Defines the responsive bottom sheet (mobile) and side drawer (desktop) presentation for the Shop by Phone experience, along with global open/close triggers and self-contained accessory selection.

### Modified Capabilities
_(none)_

## Impact

- **Components created**: `src/lib/components/ShopByPhoneDrawer.svelte`
- **Components modified**:
  - `src/lib/state.svelte.ts` (added `phoneDrawerState`)
  - `src/routes/+page.svelte` (removes inline wizard section, mounts `ShopByPhoneDrawer`)
  - `src/lib/components/Hero.svelte` (trigger callback opens drawer)
  - `src/lib/components/AuthenticityBanner.svelte` (trigger callback opens drawer)
  - `src/lib/components/PromoBannerSlider.svelte` (slide 2 click opens drawer)
  - `src/lib/components/MobileDrawer.svelte` (brand clicks open drawer)
- **Dependencies**: No external libraries; built with native Svelte 5 and Tailwind CSS v4 transitions.
