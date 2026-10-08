## 1. Mobile Form Alignment

- [x] 1.1 In `src/lib/components/auth/AuthSplitLayout.svelte`, update the mobile form wrapper from `my-auto` to `mt-1 mb-auto` and adjust sheet container top padding to `pt-4`, verifying that the form header sits directly below the canopy boundary edge with no large dead space.
- [x] 1.2 Verify on `/auth` and `/auth/verify` that surplus vertical screen height is pushed to the bottom above the support footer, and that keyboard avoidance transitions remain responsive.
- [x] 1.3 Verify desktop view (`lg:`) retains centered vertical alignment and unaffected layout.

## 2. Validation & Deployment

- [x] 2.1 Run `npm run check` and `npm run build` to ensure type checks and production bundle builds succeed without errors.
- [x] 2.2 Deploy to Vercel production and verify live behavior.
