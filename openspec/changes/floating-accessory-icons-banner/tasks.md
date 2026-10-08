## 1. Icon Setup & Intersection Observer

- [x] 1.1 Import accessory icons (`HeadphonesIcon`, `SmartPhone01Icon`, `UsbIcon`, `BatteryCharging01Icon`, `FlashIcon`, `Shield01Icon`, `SmartWatchIcon`) into `src/lib/components/AuthenticityBanner.svelte`
- [x] 1.2 Implement Svelte 5 `$effect` with `IntersectionObserver` on the banner root to toggle `isVisible = true` when scrolling into view, and verify observer triggers correctly

## 2. Background Animation & Responsive Layout

- [x] 2.1 Add the background floating icon markup with outer entrance wrapper and inner looping float container in `src/lib/components/AuthenticityBanner.svelte`
- [x] 2.2 Add CSS keyframe animations for the 3D depth-zoom entrance (`scale(0.2)`, `blur`, `opacity`) and continuous multi-axis ambient drift (`float-1`, `float-2`, `float-3`)
- [x] 2.3 Configure responsive breakpoint classes so icons scale down and hide non-essential elements on mobile (`< 640px`) while maintaining `pointer-events-none` and `overflow-hidden`
- [x] 2.4 Add `@media (prefers-reduced-motion: reduce)` rules to disable motion when requested by the OS

## 3. Verification & Polish

- [x] 3.1 Run `npm run check` to verify zero type, syntax, or Svelte compiler errors
- [x] 3.2 Verify in the running dev server that icons smoothly zoom in from depth on scroll, float organically, and never block mobile input or cause horizontal scroll
