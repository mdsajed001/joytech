# Design: Authentic Payment Gateway Brand Logos

## Context

See `proposal.md` for motivation and background. The current checkout payment interface in `CheckoutPaymentMethods.svelte` relies on monochrome `@hugeicons` outline icons (`SmartPhone01Icon`, `CreditCardIcon`, `BanknoteIcon`) which fail to visually communicate the recognizable branding of Bangladesh's premier payment providers (bKash, Nagad, Visa/Mastercard).

The design must seamlessly integrate with Joy Telecom's boxy corner design tokens (`--radius-xs: 4px`, `--radius-sm: 8px`, `--radius-md: 12px`) and support dark/light theme switching with crisp contrast.

## Goals / Non-Goals

**Goals:**
- Provide a clean, standalone, reusable `PaymentGatewayLogo.svelte` component.
- Deliver authentic vector representations of:
  - **bKash**: Official origami bird logo in signature magenta (`#E2136E`).
  - **Nagad**: Official stylized dynamic swirl/flame emblem in brand orange/red (`#F7941D` / `#ED1C24`).
  - **Visa / Mastercard**: Combined payment card badge featuring Mastercard's overlapping red/yellow spheres (`#EB001B` / `#F79E1B`) and Visa's signature blue/gold identity.
  - **Cash on Delivery**: Modern Bangladesh Taka (`৳`) cash delivery emblem in emerald (`#059669`).
- Ensure 100% offline and zero-latency rendering (inline SVGs, 0 external image requests).
- Maintain crisp visual presentation on high-DPI/Retina screens and across light and dark color schemes.
- Maintain strict design system adherence (`rounded-[var(--radius-xs)]` for badge containers, `rounded-[var(--radius-sm)]` for selection cards).

**Non-Goals:**
- Integrating live merchant gateway SDKs, payment redirects, or webhook callbacks (frontend presentation only).
- Altering the checkout payment selection state machine or order placement logic.

## Decisions

### 1. Pure Inline SVGs vs External Bitmap (PNG/WebP) Assets
- **Choice**: Inline vector SVG geometry within a Svelte component.
- **Rationale**: External raster images require HTTP requests, can suffer from broken links, produce layout shifts, and blur on retina displays. Inline SVGs load instantaneously with 0 network latency, render flawlessly at any scale, and support dynamic styling.
- **Alternative considered**: Storing `.png` or `.svg` files in `/static/icons/payment/`. Rejected to avoid extra static file management and asset-loading race conditions during checkout.

### 2. Unified `PaymentGatewayLogo.svelte` Component
- **Choice**: Create a single component `src/lib/components/checkout/PaymentGatewayLogo.svelte` accepting a `method` or `provider` prop:
  ```svelte
  <script lang="ts">
    interface Props {
      method: 'cod' | 'bkash' | 'nagad' | 'card';
      size?: 'sm' | 'md' | 'lg';
      class?: string;
    }
  </script>
  ```
- **Rationale**: Provides a single source of truth for payment brand assets that can be imported into `CheckoutPaymentMethods.svelte`, `PaymentsTab.svelte`, and `CheckoutSuccess.svelte`.

### 3. High-Contrast Badge Tile Container
- **Choice**: Wrap each logo in a dedicated badge container (`w-10 h-10` or `w-9 h-9`) styled with `bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-[var(--radius-xs)] shadow-2xs`.
- **Rationale**: Both bKash magenta and Nagad orange require clean, neutral white/dark contrast backdrops to maintain brand legibility, preventing clashing with surrounding card background states.

## Risks / Trade-offs

- **[Risk]** SVG geometry bloat.
  → **Mitigation**: Optimize SVG vector paths to under 1KB per logo with concise coordinate definitions.
- **[Risk]** Brand color clashing in dark mode.
  → **Mitigation**: Place vector marks on high-contrast, theme-aware badge tiles that protect brand colors from contrast inversion.

## Migration Plan

1. Create `src/lib/components/checkout/PaymentGatewayLogo.svelte` with official vector paths for `bkash`, `nagad`, `card`, and `cod`.
2. Update `CheckoutPaymentMethods.svelte` to replace generic hugeicons with `PaymentGatewayLogo`.
3. Verify visual alignment, boxy radii, light/dark mode contrast, and interaction responsiveness.
