## 1. Favicon Integration

- [x] 1.1 Add the SVG favicon `<link>` tag pointing to `/Joy%20tech.svg` in `src/app.html` and verify the link is rendered in the head.

## 2. Component Brand Mark Replacements

- [x] 2.1 Replace the placeholder letter tile in `src/lib/components/Header.svelte` with `<img src="/Joy%20tech.svg" ... />` at `w-9 h-9` with `object-contain` and verify the logo renders cleanly on both desktop and mobile header bars.
- [x] 2.2 Replace the placeholder letter tile in `src/lib/components/MobileDrawer.svelte` with `<img src="/Joy%20tech.svg" ... />` at `w-8 h-8` with `object-contain` and verify the logo renders cleanly in the drawer header.
- [x] 2.3 Replace the placeholder letter tile in `src/lib/components/Footer.svelte` with `<img src="/Joy%20tech.svg" ... />` at `w-9 h-9` with `object-contain` and verify the logo renders cleanly in the footer brand column.

## 3. Visual Verification

- [x] 3.1 Verify across breakpoints that all three logo instances and the favicon load with zero console 404s and no layout shifts.
