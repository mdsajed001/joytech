## 1. Grid Direct Children Restructuring

- [x] 1.1 In `src/routes/product/[slug]/+page.svelte`, decouple `ProductTrustCard` and `ProductAccordion` from the gallery container into an independent grid child container, creating 3 direct children in the main 12-column grid (`Gallery`, `Purchase Box`, and `In-Depth Specs`).
- [x] 1.2 Apply responsive CSS Grid positioning (`lg:col-span-7 lg:col-start-1 lg:row-start-1` to Gallery, `lg:col-span-5 lg:col-start-8 lg:row-start-1 lg:row-span-2 lg:sticky lg:top-24` to Purchase Box, and `lg:col-span-7 lg:col-start-1 lg:row-start-2` to In-Depth Specs) so that on mobile viewports (`< lg`) the purchase box renders directly beneath the image gallery, while desktop retains the sticky 2-column layout.

## 2. Verification & Deployment

- [x] 2.1 Run `cmd /c npm run check` to verify 0 type, syntax, or template errors.
- [ ] 2.2 Deploy to Vercel production (`cmd /c npx vercel --prod --yes`) and verify the live PDP on mobile viewport to confirm the purchase section (Brand, Title, Price, Model, Variants) displays directly below the product image gallery.
