## Context

See `proposal.md` for background and motivation. `SettingsTab.svelte` was recently refactored to eliminate card containers and divider rules, using pure whitespace and single-row items. While single-row items work well for toggle switches and theme selectors, text inputs require dedicated horizontal breathing room and standard vertical hierarchy.

## Goals / Non-Goals

**Goals:**
- Replace horizontal single-row text items with standard vertical form controls (label stacked on top of input).
- Implement a responsive 2-column grid on desktop (`grid-cols-1 sm:grid-cols-2 gap-4`) that collapses to 1-column on mobile.
- Follow Joytech design system tokens: `h-11`, `px-3.5`, `rounded-xl`, `border-[var(--color-border-default)]`, `bg-[var(--color-bg-subtle)]`, `focus:border-[var(--color-brand-primary)]`, `focus:ring-1`.
- Display the `[✓ Verified]` badge adjacent to the Mobile Number label for clean layout and clear status indication.
- Provide a dedicated, brand-styled "Save Changes" action with immediate confirmation toast.
- Maintain the overall zero-box, whitespace-divided architecture across the settings tab.

**Non-Goals:**
- Altering the single-row layout of Appearance (Theme & Language), Notifications (SMS & WhatsApp), or Security session actions.
- Integrating external backend user authentication APIs (operates with local mock state and reactive callbacks).

## Decisions

### Decision 1: Responsive Form Grid
- **Chosen Approach**: Use `grid grid-cols-1 sm:grid-cols-2 gap-4` for personal details. Full Name and Mobile Number occupy individual columns on `sm:` screens; Email Address spans full width (`sm:col-span-2`).
- **Rationale**: Balances horizontal density on desktop while preventing input fields from stretching excessively, collapsing naturally into comfortable touch-friendly rows on mobile.
- **Alternatives Considered**: 
  - *Single-column full width*: Inputs become too wide on widescreen monitors unless given an awkward narrow max-width constraint.

### Decision 2: Badge Placement Adjacent to Field Label
- **Chosen Approach**: Render `<div class="flex items-center justify-between mb-1.5"><label ...>Mobile Number</label><span class="badge ...">[✓ Verified]</span></div>`.
- **Rationale**: Eliminates absolute padding overrides inside the input element while making the verification status prominent.

### Decision 3: Explicit Save Action
- **Chosen Approach**: Place a primary "Save Changes" button (`bg-[var(--color-brand-primary)] hover:bg-[var(--color-brand-primary-hover)] text-white font-bold h-10 px-5 rounded-xl`) beneath the inputs.
- **Rationale**: Gives users reassurance and explicit control over personal profile updates.

## Risks / Trade-offs

- **[Risk]** Space expansion in Personal Information section → **Mitigation**: Using a compact 2-column grid and tight `gap-4` keeps the vertical footprint restrained and harmonious with adjacent settings sections.
