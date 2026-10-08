## 1. Implement Floating Social Badges

- [x] 1.1 In `AuthenticityBanner.svelte`, ensure the `<section>` has `relative` positioning and add the bottom-anchored container (`absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-20 flex items-center justify-center gap-3.5 sm:gap-5`) and verify it bridges the bottom section boundary
- [x] 1.2 Implement the 4 authentic brand SVG logos (Facebook `#1877F2`, WhatsApp `#25D366`, Instagram gradient, YouTube `#FF0000`) inside round `w-12 h-12 sm:w-14 sm:h-14` circular badges with `ring-4 ring-white shadow-xl` and verify sharp contrast across both backgrounds
- [x] 1.3 Add accessible attributes (`aria-label`, `title`, `target="_blank"`, `rel="noopener noreferrer"`) and interactive micro-interactions (`hover:scale-110 hover:-translate-y-1 transition-all duration-200 active:scale-95`) to all 4 social badge links

## 2. Verification

- [x] 2.1 Run `npm run check` and `npm run build` to verify zero TypeScript, Svelte, or build errors
- [x] 2.2 Verify in browser that badges sit cleanly half in the dark navy section and half out on the canvas below across both mobile and desktop viewports
