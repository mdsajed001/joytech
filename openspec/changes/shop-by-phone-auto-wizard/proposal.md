## Why

The current "Shop by Phone" capability is either embedded inline on the homepage or presented as a traditional form. For everyday shoppers, finding compatible accessories for their exact device needs to be effortless and foolproof. The new Auto-Advancing Wizard UX transforms this filter into a hand-holding, progressive disclosure flow (like a PC configurator, but automated). The user answers one simple question at a time (Device Type -> Brand -> Model), with the UI automatically collapsing past answers into a stacked summary and advancing to the next step instantly, removing all guesswork and cognitive load.

## What Changes

- **Create a dedicated Mobile Page** for the Shop by Phone wizard instead of a Bottom Sheet.
- **Update PC presentation** to a Side Drawer (keeping the existing paradigm but updating the UX flow inside).
- **Implement Auto-Advancing Flow**:
  - Show only one active question at a time.
  - Automatically stack answered questions as summary pills (with an "Edit/Change" button).
  - Reveal the next step immediately upon selection without requiring a "Next" button.
- **Implement Searchable Overlay Lists**:
  - When selecting Brand or Model, handle the huge list sizes by using a dedicated search input and A-Z quick-jump index within the view.
- **Wire up final selection** to reveal a success state and CTA to view the compatible items.

## Capabilities

### New Capabilities
- `shop-by-phone-auto-wizard`: Defines the progressive, auto-advancing UX flow for selecting Device Type, Brand, and Model, replacing the traditional inline or manual form selection process.

### Modified Capabilities
- *(none)*

## Impact

- **Components created**: `src/lib/components/AutoWizardConfigurator.svelte`, `src/lib/components/SearchableListOverlay.svelte`
- **Pages created**: `src/routes/shop-by-phone/+page.svelte` (mobile dedicated page)
- **Components modified**:
  - `src/lib/state.svelte.ts` (new wizard state machine)
  - `src/lib/components/ShopByPhoneDrawer.svelte` (updated to use the new auto-wizard inside the PC Side Drawer)
- **UX Impact**: Much higher conversion on accessory finding, completely idiot-proof navigation flow.
