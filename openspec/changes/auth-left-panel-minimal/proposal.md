## Why

The left panel of the desktop authentication layout currently includes marketing copy (headline, body paragraph, trust checklist points, copyright text, pill badges), making the screen feel cluttered rather than sleek and premium. The user requests a clean, minimal aesthetic: remove all excess marketing text and center the **JOYTECH** brand name in large, bold typography on the blue background, surrounded only by the ambient floating bubbles and tech accessory icons.

## What Changes

- In `src/lib/components/auth/AuthSplitLayout.svelte`:
  - Remove the badge ("Bangladesh's Tech Hub"), the headline ("Smart Gadgets. Authentic Gear."), the descriptive paragraph, the 3 trust points with checkboxes, and the top and bottom text clutter.
  - Center the **JOYTECH** brand name directly in the middle of the left panel using large, bold typography (`text-6xl` to `text-8xl` with tracking).
  - Retain the subtle, ambient floating white bubbles and gadget accessory icons around the centered branding.

## Capabilities

### New Capabilities
- `auth-left-brand-minimal`: Minimalist, centered brand presentation for the desktop authentication visual panel.

### Modified Capabilities
None

## Impact

- **Affected Code**: `src/lib/components/auth/AuthSplitLayout.svelte`.
- **Visual Design**: Replaces the text-heavy marketing layout with a minimalist, premium brand presence.
