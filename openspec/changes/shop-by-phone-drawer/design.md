## Context

The Joy Telecom e-commerce application has a "Shop by Phone" compatibility wizard that allows customers to select their smartphone brand and model to find 100% verified accessories. Currently, this wizard is rendered inline as a permanent homepage section. This design establishes how to move it into an on-demand responsive modal interface: an interactive **Bottom Sheet** on mobile viewports (<640px) and a **Slide-over Drawer** from the right edge on desktop viewports (≥640px). See `proposal.md` for motivation.

## Goals / Non-Goals

**Goals:**
- Remove the inline Shop by Phone section from the homepage body flow to streamline page length.
- Build a responsive modal (`ShopByPhoneDrawer.svelte`) that adapts between mobile bottom sheet and desktop side drawer.
- Support complete self-contained shopping (brand selection, model selection, and adding compatible products to cart) inside the modal.
- Provide a centralized Svelte 5 reactive state (`phoneDrawerState`) to trigger the modal from any component.
- Wire up all relevant entry points (Hero CTA, Promo Slider Slide 2, Authenticity Banner CTA, Mobile Navigation Drawer brand chips).

**Non-Goals:**
- No backend API or server-side filtering (all data remains static and client-side).
- No multi-page device landing pages in this change.

## Decisions

### D1: Single adaptive component for Bottom Sheet and Side Drawer
**Choice**: Build `ShopByPhoneDrawer.svelte` as a unified component with responsive Tailwind styling:
- **Mobile (<640px)**: Fixed at the bottom (`bottom-0 inset-x-0 max-h-[88vh] rounded-t-[var(--radius-xl)]`), sliding up from below, with a grab handle indicator and safe-area padding.
- **Desktop (≥640px)**: Fixed at the right (`top-0 right-0 inset-y-0 w-full max-w-lg border-l border-[var(--color-border-default)]`), sliding in from the right edge.
**Rationale**: Eliminates duplication of the brand selector, model selector, and compatible product cards. A single component handles state and presentation across all screen sizes.
**Alternatives considered**: Two separate components (`BottomSheet.svelte` and `SideDrawer.svelte`) — rejected due to 90% markup and state logic duplication.

### D2: Global Svelte 5 runes modal state
**Choice**: Add `PhoneDrawerState` in `src/lib/state.svelte.ts`:
```ts
export class PhoneDrawerState {
  isOpen = $state(false);
  activeBrandId = $state('apple');
  activeModelSlug = $state('iphone-16-pro-max');

  open(brandId?: string) {
    if (brandId) {
      this.activeBrandId = brandId;
      const first = PHONE_MODELS.find(m => m.brandId === brandId);
      if (first) this.activeModelSlug = first.slug;
    }
    this.isOpen = true;
  }
  close() {
    this.isOpen = false;
  }
  selectBrand(id: string) { ... }
  selectModel(slug: string) { ... }
}
export const phoneDrawerState = new PhoneDrawerState();
```
**Rationale**: Allows any button in the app (e.g. Hero CTA, Authenticity CTA, Mobile Drawer brand chips) to open the modal and optionally pre-select a brand without messy prop drilling or custom events.

### D3: In-drawer product display and direct Add to Cart
**Choice**: Once a model is selected, the verified products display inside the scrollable body of the drawer/sheet as responsive cards. Tapping "Add to Cart" triggers the standard cart action and toast without closing the modal.
**Rationale**: Provides a seamless shopping experience where the user can pick multiple accessories for their phone without losing context.

### D4: Accessibility and scroll locking
**Choice**: When the modal is open, lock body scrolling (`document.body.style.overflow = 'hidden'`) and handle `Escape` key and backdrop click dismissal.
**Rationale**: Standard accessible modal behavior preventing double-scroll bugs.

## Risks / Trade-offs

- **[Risk: Mobile viewport height constraints when keyboard or many models are shown]** → Mitigation: Use `max-h-[88vh]` with `overflow-y-auto` and a sticky header so close and step navigation are always accessible.
- **[Risk: Anchor link `#shop-by-phone` might be clicked from external or existing links]** → Mitigation: Keep a listener or redirect so hash navigation `#shop-by-phone` triggers `phoneDrawerState.open()`.
