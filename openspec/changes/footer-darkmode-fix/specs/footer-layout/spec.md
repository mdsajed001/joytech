## Purpose

Provides high-contrast, readable footer rendering across both light and dark mode themes.

## ADDED Requirements

### Requirement: High-contrast footer background and readable typography in dark mode
The system SHALL render the Footer component in `Footer.svelte` with a deep dark navy/slate background (`bg-[#0B111E] dark:bg-[#070B14]`) and high-contrast typography (`text-white` headers, `text-slate-300` body, `text-slate-400` links) when dark mode is toggled, avoiding white-on-white text rendering.

#### Scenario: Toggling dark mode while viewing the footer
- **WHEN** the user toggles dark mode theme
- **THEN** the footer background remains deep dark slate with white/slate text and all section links, contact info, and copyright text remain fully readable
