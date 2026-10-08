## Context

See proposal.md - Why.
The profile page settings currently render in separate card blocks (`rounded-2xl`, `border-[var(--color-border-default)]`, `bg-[var(--color-bg-surface)]`) with circular colored icon badges and extensive instructional descriptions.

## Goals / Non-Goals

**Goals:**
- Replace the card-based modular layout with a single, continuous, boxless surface in `SettingsTab.svelte`.
- Standardize all preference items into single-row entries (`label` on left, `control` on right).
- Eliminate all explanatory subtitles and text descriptions.
- Separate groups purely with vertical whitespace gaps and clean uppercase headers (no lines, no borders, no colored background bands).
- Maintain 100% full interactive functionality (theme switcher, language switcher, contact fields, notifications toggles, security session).

**Non-Goals:**
- Changing backend data models or state persistence logic.
- Altering the hero banner or action shortcuts grid above the tab.

## Decisions

### Decision 1: Boxless Seamless Body Architecture
- **Choice**: Remove all card wrappers, shadows, and outer borders from `SettingsTab.svelte`. All sections render directly onto the page surface.
- **Rationale**: Eliminates visual heaviness and fragmented boxes, giving an open, airy, modern application feel.
- **Alternatives considered**: Minimalist cards with lighter borders (rejected: user specifically requested "rid of the box", "not border not line").

### Decision 2: Standardized Single-Row Item Format
- **Choice**: Implement items with `flex items-center justify-between py-3 sm:py-3.5 gap-4`:
  - **Left**: `text-xs sm:text-sm font-bold text-[var(--color-text-primary)]`.
  - **Right**: Compact segmented button pill, inline input field, or toggle switch.
- **Rationale**: Clean visual alignment, highly readable, matches native mobile settings.
- **Alternatives considered**: Stacked labels over inputs (takes twice as much vertical space and feels like a long form).

### Decision 3: Pure Whitespace Section Separation
- **Choice**: Separate sections with a vertical margin gap (`mt-8 sm:mt-10`) preceded by a terse section heading (`text-[11px] font-bold uppercase tracking-wider text-[var(--color-text-muted)]`).
- **Rationale**: Fulfills the requirement: "every section will be devided with its section titel and a bit of gap from the privious one not color not border not line".
- **Alternatives considered**: `<hr>` or subtle `border-b` dividers (explicitly forbidden by design constraint).

### Decision 4: Removal of Explanatory Subtexts
- **Choice**: Strip all subtitles ("Customize your display theme...", "Product details, SMS notifications...", etc.).
- **Rationale**: Direct labels like "Theme", "Language", "SMS Order Updates", and "WhatsApp Tracking" are completely self-explanatory.

## Risks / Trade-offs

- **[Input Field Space on Narrow Viewports]** → Text inputs (Name, Email, Phone) on screens < 360px will utilize compact right-aligned inputs with `max-w-[200px] sm:max-w-xs` to preserve the single-row structure without wrapping awkwardly.
