## 1. Auth Split Layout Component

- [x] 1.1 Create `src/lib/components/auth/AuthSplitLayout.svelte` implementing the desktop split-screen grid (`min-h-screen lg:grid-cols-2`) and mobile edge-to-edge layout. Verify responsive structure renders properly.
- [x] 1.2 Implement the ambient animated floating white bubbles (`@keyframes float-bubble`) with smooth, slow drift inside the left brand panel. Verify visual motion.
- [x] 1.3 Add floating gadget & accessory category icons (`HeadphonesIcon`, `SmartPhone01Icon`, `SmartWatchIcon`, `BatteryCharging01Icon`, `UsbIcon`, `Gamepad01Icon`) with subtle drift animations. Verify icons render with soft ambient opacity.
- [x] 1.4 Render the central white Joytech logo, tech slogan, and trust assurances in the left panel. Verify alignment and contrast.

## 2. Page Integrations

- [x] 2.1 Refactor `src/routes/auth/+page.svelte` to use `<AuthSplitLayout>`, removing the nested modular card for mobile and utilizing the right column for the form. Verify `/auth` renders correctly on both mobile and desktop.
- [x] 2.2 Refactor `src/routes/auth/verify/+page.svelte` to use `<AuthSplitLayout>`, rendering the OTP verification and phone linking states in the right column. Verify `/auth/verify` transitions seamlessly.
