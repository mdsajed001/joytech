## 1. Icon Library Expansion & Sizing Upgrades

- [x] 1.1 Import expanded set of 12-14 accessory icons (`HeadphonesIcon`, `SmartWatch01Icon`, `FlashIcon`, `UsbIcon`, `BatteryCharging01Icon`, `SmartPhone01Icon`, `Shield01Icon`, `BluetoothIcon`, `GameController01Icon`, `Navigation01Icon`, `Camera01Icon`, `VolumeHighIcon`, `BookmarkIcon`, `ComputerIcon`) into `src/lib/components/AuthenticityBanner.svelte`
- [x] 1.2 Upgrade mobile icon dimensions to 28-34px (`w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9`) with boosted contrast and glow

## 2. Real-Time Scroll-to-Depth Parallax Engine

- [x] 2.1 Implement `requestAnimationFrame`-throttled scroll progress tracker that measures viewport intersection and updates `--scroll-depth` (from 0 to 1) dynamically
- [x] 2.2 Wire icon styles to `--scroll-depth` with individual depth factors so icons scale forward on scroll down and retreat backward on scroll up
- [x] 2.3 Layer continuous ambient drift animations (`anim-float-1` through `anim-float-4`) on the inner icon containers

## 3. Verification & Polish

- [x] 3.1 Run `npm run check` to verify zero type, syntax, or Svelte compiler errors
- [x] 3.2 Verify in browser that scrolling down brings icons closer, scrolling up sends them farther back, mobile icons are prominent (not small), and desktop has rich 12+ icon density
