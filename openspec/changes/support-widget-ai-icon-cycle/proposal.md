# Proposal: Support Widget AI Icon Cycle Animation

## Why

The floating customer support trigger button currently displays a static customer service headset icon (`CustomerService01Icon`). To signal modern AI-assisted customer capabilities, draw delightful ambient attention to the support hub, and enrich the UI micro-interactions without disrupting usability, we introduce a subtle, continuous 10-second cyclical icon transition between the support headset icon and `AiMagicIcon`.

## What Changes

- **Periodic Dual-Icon Transition**: Inside the circular floating support button in `SupportWidget.svelte`, alternate between the customer support headset icon (`CustomerService01Icon`) and `AiMagicIcon` on a 10-second loop.
- **Radial Curved Trajectory (Continuous Flow)**:
  - Headphone icon exits along a radial curved arc toward the **top-left** (`translate(-120%, -120%)`).
  - `AiMagicIcon` enters along a radial curved arc from the **bottom-right** (`translate(120%, 120%) -> translate(0, 0)`).
  - In the center, `AiMagicIcon` executes a smooth magical shimmer wobble (tilting `-14°` to `+14°` with a gentle `1.08x` scale pulse).
  - `AiMagicIcon` exits toward the **top-left** along the same diagonal flow.
  - Headphone icon re-enters from the **bottom-right** back to the center and rests for the remainder of the 10-second period.
- **Hover & Interaction Rules**:
  - The cycle continues playing smoothly on hover (no interruption/freeze).
  - When the support popup is expanded (`expanded = true`), the static close icon (`Cancel01Icon`) displays cleanly without any background icon shifting.
- **Hardware-Accelerated Animation**: Implemented via pure CSS `@keyframes` on `transform` and `opacity` properties for fluid 60/120 FPS performance with zero JavaScript timer overhead.

## Capabilities

### New Capabilities
- `support-widget`: Requirements and motion specifications for the floating support launcher button, including the 10-second cyclical icon transition between customer care and AI assistant icons.

### Modified Capabilities
<!-- None -->

## Impact

- **Affected Components**: `src/lib/components/SupportWidget.svelte`
- **Dependencies**: Imports `AiMagicIcon` from `@hugeicons/core-free-icons` alongside existing icons.
- **Performance**: Zero JS main-thread cost; transforms are GPU-composited and clipped cleanly by the button's `overflow-hidden` container.
