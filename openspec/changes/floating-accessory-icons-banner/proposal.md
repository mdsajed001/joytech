## Why

The "Find Your Perfect Accessory" search banner currently features a static dark blue/navy gradient background. To elevate the visual delight and brand identity as a dedicated tech accessories authority, we introduce dynamic, semi-translucent accessory icons (headphones, smartwatch, USB cable, fast charger, power bank, shield) that zoom in from deep space on scroll and gently float in the background without obstructing text or mobile ergonomics.

## What Changes

- **Background Floating Accessory Icons**:
  - Add 6 distinct tech accessory vector icons (`HeadphonesIcon`, `SmartPhone01Icon`, `UsbIcon`, `BatteryCharging01Icon`, `FlashIcon`, `Shield01Icon`, `SmartWatchIcon`) positioned asymmetrically in the banner backdrop.
- **Scroll-Driven Depth Entrance ("From Far Deep")**:
  - Implement a scroll-triggered reveal effect where icons animate into view when the banner intersects the viewport, transitioning from deep perspective (`scale(0.2)`, `blur(8px)`, `opacity: 0`) up to foreground plane (`scale(1)`, `blur(0px)`, `opacity: 0.2` to `0.3`) with staggered delays.
- **Continuous Ambient Floating**:
  - After entry, icons smoothly transition into continuous organic drifting/bobbing animations (`float-slow`, `float-reverse`, `float-drift`) with subtle rotation.
- **Mobile Layout & Usability Protection**:
  - Ensure icons on mobile devices (`< 640px`) scale down (e.g. 18-22px vs 28-36px on desktop) and stay on the outer margins to avoid crowding the search bar or text.
  - Wrap in `overflow-hidden pointer-events-none select-none` to guarantee zero touch/click obstruction and prevent any viewport horizontal scroll.
  - Respect `@media (prefers-reduced-motion: reduce)` by skipping the deep zoom and float animations.

## Capabilities

### New Capabilities
- `banner-floating-accessory-icons`: Defines the scroll-triggered 3D depth zoom entrance, continuous multi-axis ambient floating, mobile-first responsive constraints, and non-blocking background layer for the accessories banner.

### Modified Capabilities
<!-- None -->

## Impact

- **Affected Files**:
  - `src/lib/components/AuthenticityBanner.svelte`
- **Dependencies**: Uses existing `@hugeicons/core-free-icons` and Svelte 5 runes/intersection observer. Zero new external dependencies.
