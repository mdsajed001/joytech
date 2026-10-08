## Why

Joy Telecom needs a high-converting, mobile-first e-commerce homepage aligned with the V1 (P0) Product Blueprint and the WCAG 2.2 AAA Token-Based Design System. The homepage serves as the primary storefront and brand anchor, introducing customers to Joy Telecom's verified device accessories and featuring the core "Shop by Phone" compatibility wizard.

## What Changes

- **Design System Integration**: Configure Tailwind CSS v4 with the 3-tier token architecture (Primary `#1D5FCB`, Accent `#F2790B`, Neutral ramps, WCAG AAA contrast, 44px tap targets, and bilingual typography with `Manrope` and `Noto Sans Bengali`).
- **Global Layout & Navigation**: Implement top announcement bar, brand header with search bar, cart indicator, mobile drawer menu, footer, and non-intrusive floating support widget (WhatsApp/Call).
- **Homepage Structure**:
  - Hero banner with genuine accessory value proposition and clear primary/secondary CTAs.
  - Featured Categories showcase (Cases, Screen Protectors, Fast Chargers, MagSafe).
  - Flagship **Shop by Phone** interactive module (Brand selection $\to$ Model selection $\to$ Compatible accessories query).
  - Product display sections: "Best Sellers" and "New Arrivals" using spec-compliant product cards with stock status badges and BDT currency formatting.
  - "Why Joy Telecom?" 5-point trust section.
- **Catalog Mock Data Layer**: Provide typed data models and mock inventory for phone brands, device models, accessory categories, and featured products.

## Capabilities

### New Capabilities
- `homepage`: Homepage layout, hero banner, category cards, best sellers, new arrivals product rows, and trust signals.
- `shop-by-phone`: Two-step device compatibility selector (Brand $\to$ Phone Model) providing verified accessory filtering.
- `global-navigation`: Global header, announcement banner, category/device navigation, mobile drawer menu, footer, and floating contact support widget.

### Modified Capabilities
<!-- None: Greenfield project, no pre-existing specs -->

## Impact

- **Frontend Codebase**: Installs font imports in `src/app.html`, configures tokens in `src/routes/layout.css`, builds reusable Svelte components in `src/lib/components/`, and implements `src/routes/+page.svelte`.
- **Dependencies**: Uses SvelteKit 2, Svelte 5 runes, Tailwind CSS v4, and `@hugeicons/svelte`.
- **APIs / Data**: Adds client-side mock datasets in `src/lib/data/` for accessories and device compatibility.
