## Why

On mobile screens, the login form sheet vertically centers its content using flexbox and `my-auto`, causing an excessively large empty white gap (~100px–140px) between the blue canopy boundary and the heading ("Sign in or create account"). The user requested that the heading/form start directly from the top boundary (at the red line), leaving empty breathing space at the bottom rather than at the top.

## What Changes

- **Top-Align Mobile Form Sheet**: In the mobile container of `AuthSplitLayout.svelte`, replace the vertical auto-centering (`my-auto`) on the form wrapper with top-aligned positioning (`mt-1 mb-auto` or `mt-0 mb-auto`).
- **Tighten Sheet Top Clearance**: Adjust container top padding from `pt-6` (24px) to `pt-4` (16px) so the title aligns immediately beneath the canopy boundary edge.
- **Bottom Space Distribution**: Ensure any extra vertical space on taller mobile viewports naturally resides at the bottom above the support footer, rather than pushing the form down.
- **Preserve Desktop Alignment**: Ensure desktop (`lg:`) auth split layout remains unaffected and retains its balanced centering.

## Capabilities

### New Capabilities
- `auth-mobile-top-align`: Top-aligned mobile auth sheet layout eliminating dead space above the primary title and allocating surplus height to the bottom.

### Modified Capabilities
<!-- None -->

## Impact

- **Affected Files**:
  - `src/lib/components/auth/AuthSplitLayout.svelte`
- **APIs/Dependencies**: None (layout and CSS class adjustment only).
