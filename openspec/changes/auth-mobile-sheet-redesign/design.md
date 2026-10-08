## Context

Currently, `AuthSplitLayout.svelte` uses `hidden lg:flex` to hide the branded left column completely on mobile screens (`< 1024px`), rendering a stark white container with no brand atmosphere. When users focus inputs on mobile devices, the virtual keyboard consumes 40-50% of the screen height, covering buttons and creating poor ergonomics.

## Goals / Non-Goals

**Goals:**
- Provide a branded electric blue top canopy on mobile viewports with floating bubbles, gadget icons, and bold Joytech typography.
- House the authentication form inside an elevated, modern rounded sheet (`rounded-t-[28px]`, crisp background, subtle elevation).
- Automatically trigger a smooth upward slide of the sheet and condensing of the canopy when any input inside the form receives focus (`focusin`), ensuring the input and primary CTA remain clearly visible above the keyboard.
- Automatically restore the spacious canopy when inputs lose focus (`focusout`).
- Maintain seamless desktop 50/50 split layout without regression.

**Non-Goals:**
- Modifying authentication state logic, Firebase/SMS verification endpoints, or session tokens.
- Altering the desktop two-column split layout or desktop responsive breakpoints.

## Decisions

### Decision 1: Focus Detection via Container-Level Event Delegation (`focusin` / `focusout`)
Instead of prop-drilling `isFocused` states into every input across `/auth` and `/auth/verify`, `AuthSplitLayout.svelte` attaches `onfocusin` and `onfocusout` listeners to the mobile form sheet container.
- **Rationale**: Any input—whether the phone number input on `/auth`, the phone link input on `/auth/verify`, or the 4 separate OTP digit inputs—automatically bubbles its focus event up to the sheet wrapper.
- **Debounce / RelatedTarget**: When transitioning between adjacent OTP digit inputs, a slight check ensures the sheet does not jump or flash between focus changes.
- **Alternatives Considered**: Manually passing a Svelte store or reactive callback into each route. This was rejected because it introduces tight coupling and boilerplates route files.

### Decision 2: Hardware-Accelerated CSS Transitions
The mobile layout uses CSS transitions (`transition: all 320ms cubic-bezier(0.16, 1, 0.3, 1)`) to animate canopy height and sheet position:
- **Rest State**: Canopy takes ~`180px` (`h-44 sm:h-48`), showcasing the electric blue gradient, ambient bubbles, floating headphone/watch icons, and centered Joytech logo. Form sheet sits below with `rounded-t-[28px]`.
- **Focused State**: Canopy smoothly condenses to ~`60px` (`h-14`), positioning the back button and a compact white `JOYTECH` header cleanly at the top. The form sheet slides upward, positioning the active input field and the action button in the upper half of the screen, safely above the mobile keyboard.
- **Alternatives Considered**: `window.visualViewport` resize listener. This was deemed complementary; relying on `focusin`/`focusout` provides immediate 0ms response before the OS keyboard animation finishes, preventing visual layout lag.

### Decision 3: Preserving Ambient Tech Gadget Motifs on Mobile
The mobile canopy adapts the desktop floating icons (headphones, smartwatch, smartphone) and white bubbles at scaled-down sizes (`size={28}` to `{34}` with `text-white/25`), ensuring mobile feels dynamic and fun without overwhelming the header.

## Risks / Trade-offs

- **[Small Screen Heights e.g. iPhone SE / Landscape]** → The sheet container is styled with `overflow-y-auto` and bounded flex heights, ensuring content remains scrollable if screen space is exceptionally constrained.
- **[Rapid Focus Switch Between OTP Boxes]** → Using `setTimeout(() => { if (!sheetEl.contains(document.activeElement)) isFocused = false; }, 50)` prevents stuttering when tabbing between the 4 OTP fields.
