## Context

The Shop by Phone functionality is being reimagined as an auto-advancing, linear wizard to make accessory shopping entirely idiot-proof for regular users. See `proposal.md` for the motivation. This design explains how the state machine and component hierarchy will be structured to achieve the automatic stepping, collapsible history, and searchable overlays.

## Goals / Non-Goals

**Goals:**
- Build a robust Svelte 5 state machine (`autoWizardState`) to manage the linear progression (Device Type -> Brand -> Model).
- Create a dedicated `/shop-by-phone` route for mobile that utilizes the full viewport.
- Re-use the existing `ShopByPhoneDrawer.svelte` on PC, but replace its internal contents with the new `AutoWizardConfigurator` component.
- Implement high-performance, full-view searchable overlays for selecting Brands and Models.

**Non-Goals:**
- Fetching data from a live backend (the data catalog remains static/mocked for this iteration).
- Designing the final accessory result page (this change stops at the success state/CTA).

## Decisions

### D1: Centralized State Machine for the Wizard
**Choice:** Use a dedicated Svelte 5 class `AutoWizardState` instantiated within the component (or shared via context if needed) to manage the strict progression.
```ts
class AutoWizardState {
  step = $state<'type' | 'brand' | 'model' | 'done'>('type');
  deviceType = $state<string | null>(null);
  brand = $state<string | null>(null);
  model = $state<string | null>(null);

  selectType(type: string) {
    this.deviceType = type;
    this.step = 'brand';
  }
  
  selectBrand(brand: string) {
    this.brand = brand;
    this.step = 'model';
  }
  
  editStep(target: 'type' | 'brand' | 'model') {
    this.step = target;
    if (target === 'type') { this.brand = null; this.model = null; }
    if (target === 'brand') { this.model = null; }
  }
}
```
**Rationale:** Keeps the UI components incredibly dumb and declarative. The UI just observes `state.step` to determine what to show as active and what to render as a collapsed summary pill.

### D2: Component Architecture
**Choice:** Create a main `AutoWizardConfigurator.svelte` component. This component renders the stacked summary pills at the top, and below it, it renders the currently active step (e.g., `DeviceTypeSelector`, `BrandSelectorOverlay`, `ModelSelectorOverlay`).
**Rationale:** This encapsulates the entire wizard logic, making it trivial to drop into the mobile `+page.svelte` and the desktop `ShopByPhoneDrawer.svelte`.

### D3: Full-View Searchable Overlays
**Choice:** For the Brand and Model steps, the component will take over the view (or the drawer body) entirely, presenting a sticky `<input type="search">` at the top and a virtualized or highly optimized list below, optionally with an A-Z quick-jump bar on the right.
**Rationale:** Solves the "insane amount of items" constraint mentioned by the user. By dedicating the entire view to the list when it's active, we maximize screen real estate for searching.

## Risks / Trade-offs

- **[Risk: State desync if user hits browser back button on mobile]** → Mitigation: On the mobile `/shop-by-phone` route, we could optionally map the `step` to URL hashes (e.g., `#brand`, `#model`) so the native back button functions as an "Edit previous step" action rather than ejecting them from the page entirely.
- **[Risk: Performance of rendering hundreds of models]** → Mitigation: Use a lightweight virtual list or CSS `content-visibility: auto` if the model list exceeds 200 items. However, relying heavily on the search bar is the primary UX mitigation.
