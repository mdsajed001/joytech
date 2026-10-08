## 1. Design System & Token Setup

- [x] 1.1 Import Manrope and Noto Sans Bengali Google fonts in `src/app.html` and verify font definitions load cleanly
- [x] 1.2 Configure design system tokens (brand-primary `#1D5FCB`, accent `#F2790B`, neutral ramps, radii, focus rings) in `src/routes/layout.css` and verify `@theme` compilation with `npm run check`

## 2. Mock Data & Types Layer

- [x] 2.1 Define TypeScript models for categories, brands, phone models, and accessories in `src/lib/types.ts`
- [x] 2.2 Create catalog dataset in `src/lib/data/catalog.ts` with Joy Telecom accessory products, compatibility tags, and stock counts; verify data compiles without type errors

## 3. Atomic & Reusable UI Components

- [x] 3.1 Create `src/lib/components/Badge.svelte` supporting stock, discount, and status pills with text+color pairing and verify visual states
- [x] 3.2 Create `src/lib/components/Button.svelte` enforcing 44px minimum tap targets and 5 semantic intents
- [x] 3.3 Create `src/lib/components/ProductCard.svelte` showing image, brand, BDT price (`৳`), discount badge, stock states, and Add to Cart action
- [x] 3.4 Create `src/lib/components/TrustGrid.svelte` rendering the 5 "Why Joy Telecom?" value points with Hugeicons

## 4. Navigation & Layout Frame

- [x] 4.1 Implement `AnnouncementBar.svelte` with promotional notice and delivery thresholds
- [x] 4.2 Implement `Header.svelte` with brand logo, search input, cart counter badge, and mobile drawer trigger
- [x] 4.3 Implement `MobileDrawer.svelte` supporting category and phone brand navigation on mobile viewports
- [x] 4.4 Implement `Footer.svelte` with categorized navigation, policies, contact info, and payment badges
- [x] 4.5 Implement `SupportWidget.svelte` with floating WhatsApp and direct call triggers positioned to avoid mobile CTA overlap

## 5. Homepage Sections & Shop by Phone Feature

- [x] 5.1 Implement `Hero.svelte` with genuine accessory value proposition, primary "Shop Now" CTA, and secondary device selector CTA
- [x] 5.2 Implement `ShopByPhoneWizard.svelte` with 2-step Brand $\to$ Model selection and verified compatibility indicator
- [x] 5.3 Implement `src/routes/+page.svelte` assembling Hero, Featured Categories, Shop by Phone wizard, Best Sellers row, New Arrivals row, and Trust section

## 6. Verification & Validation

- [x] 6.1 Run `npm run check` and `npm run build` to verify zero type errors and build warnings
- [x] 6.2 Test interactive flows (Shop by Phone selection, responsive mobile drawer, 44px tap targets) in dev server
