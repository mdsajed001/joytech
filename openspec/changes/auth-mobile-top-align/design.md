## Context

Currently in `src/lib/components/auth/AuthSplitLayout.svelte`, the mobile form sheet uses:
```html
<div class="flex-1 flex flex-col justify-between ... px-5 pt-6 pb-6 ...">
  <div class="w-full max-w-md mx-auto my-auto">
    {@render children()}
  </div>
```
`my-auto` vertically centers the form, creating a ~100px+ empty white gap above the heading on mobile screens.

## Goals / Non-Goals

**Goals:**
- Position the mobile auth heading and form directly beneath the canopy boundary edge with minimal top clearance (`pt-4` container padding and `mt-1 mb-auto` form wrapper).
- Distribute any remaining height on taller mobile displays to the bottom of the form sheet above the help footer.
- Maintain smooth input focus keyboard avoidance transitions (`-translate-y-2` on focus).
- Preserve existing desktop (`lg:`) auth split layout and vertical centering unchanged.

**Non-Goals:**
- Changing typography sizes, color tokens, or form logic.
- Altering the desktop two-column auth presentation.

## Decisions

### 1. Flex spacing with `mt-1 mb-auto`
- **Choice**: Replace `my-auto` on the mobile form wrapper with `mt-1 mb-auto`, paired with adjusting container top padding from `pt-6` to `pt-4`.
- **Rationale**: Flex column layout with `mb-auto` pushes all remaining vertical room to the bottom. The title starts right at the boundary (matching the user's annotated red line), while the footer stays pinned at the bottom.
- **Alternative considered**: Removing `flex-1 flex flex-col justify-between` entirely. Rejected because keeping flex column allows the help footer to cleanly rest at the bottom on tall screens without overlapping content on short screens.

### 2. Desktop isolation
- **Choice**: Keep desktop classes in `AuthSplitLayout.svelte` (lines 111–139) untouched.
- **Rationale**: Desktop has ample horizontal and vertical real estate and benefits from the centered card aesthetic.

## Risks / Trade-offs

- **Short mobile viewports**: On very short mobile screens (or when soft keyboards open), the container has `overflow-y-auto`, ensuring no content is clipped and all inputs remain accessible.
