## Context

`AutoWizardConfigurator.svelte` manages the multi-step "Shop by Device" drawer/modal interface. Steps 1 (Type), 2 (Brand), and 3 (Model) render directly inside the drawer's scrollable container (`<div class="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">`) using clean, unboxed flex/grid layouts.

In contrast, Step 4 (`autoWizardState.step === 'done'`) was previously enclosed inside an extra card container (`border border-[var(--color-border-default)] bg-[var(--color-bg-surface)] rounded-[var(--radius-xl)] shadow-sm`). This created a nested "box inside a box" look with redundant outer borders. Furthermore, the primary action button ("Browse All Verified Accessories") used `rounded-full` (capsule), conflicting with Joy Telecom's boxy button tokens (`rounded-[var(--radius-sm)]` / 6px corners) established across `Button.svelte`, `ProductCard.svelte`, and checkout flows.

## Goals / Non-Goals

**Goals:**
- Eliminate the redundant outer border and nested card background in Step 4, rendering it flush within the drawer container like Steps 1, 2, and 3.
- Update the primary CTA button corner radius to `rounded-[var(--radius-sm)]` to align with the rest of the store's action buttons.
- Maintain smooth entrance animation, clean vertical rhythm, and tactile category shortcut cards.

**Non-Goals:**
- Modifying wizard step state transitions or data models in `devices.ts` or `autoWizard.svelte.ts`.
- Altering the category shortcuts destinations or visual asset icons.

## Decisions

### 1. Remove Outer Card Wrapper and Adopt Flush Step Container
- **Choice**: Replace the enclosing card `div` (`p-5 sm:p-7 rounded-[var(--radius-xl)] bg-[var(--color-bg-surface)] border border-[var(--color-border-default)] shadow-sm text-center space-y-4 sm:space-y-5 animate-in zoom-in-95 duration-200`) with a flush step layout: `<div class="space-y-5 py-2 text-center animate-in fade-in duration-200">`.
- **Rationale**: Removes the awkward nested card border while matching the visual convention established in Steps 1, 2, and 3. The drawer body already provides background elevation and edge padding (`p-4 sm:p-5`).
- **Alternative considered**: Reducing the border opacity. Rejected because the enclosing card itself is redundant; unboxing provides a much cleaner, modern mobile-friendly presentation.

### 2. Boxy Corner Radius for Confirmation CTA Button
- **Choice**: Update button classes on the primary CTA from `rounded-full` to `rounded-[var(--radius-sm)]`.
- **Rationale**: All primary CTA buttons across Joy Telecom (`ProductCard`, `Button.svelte`, `CartDrawer`, `OrderSummary`) use `rounded-[var(--radius-sm)]`. Aligning the CTA to this token unifies the brand experience.
- **Alternative considered**: `rounded-[var(--radius-md)]` (8px). While close, `var(--radius-sm)` (6px) is the exact token used on Joy Telecom's primary `cta-blue-bubble` and `ProductCard` action buttons.

### 3. Preserving Animated Dual-Bubble CTA Effect
- **Choice**: Keep `cta-search-animated` with its ambient pulsating radial highlights and `active:scale-[0.98]` microinteraction.
- **Rationale**: The ambient bubble effect provides high visual delight and WOW factor without conflicting with the boxy border radius.

## Risks / Trade-offs

- [Risk: Loss of visual separation if Step 4 content feels unanchored without an outer border] → Mitigation: The glowing verified badge (`StickerThunder3D` pod), green 100% fit guarantee pill, device spec chips, and quick category shortcut tiles provide strong visual structure and focal anchors.
