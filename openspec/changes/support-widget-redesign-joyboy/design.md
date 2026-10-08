## Context

See proposal.md - Why. The support widget component `SupportWidget.svelte` currently renders a fixed floating trigger button in the bottom right corner with an expandable modal card.

## Goals / Non-Goals

**Goals:**
- Update `SupportWidget.svelte` popover container geometry from bubble (`rounded-[var(--radius-xl)]`) to boxy architecture (`rounded-[var(--radius-sm)] border border-[var(--color-border-default)] shadow-xl`).
- Add tone-on-tone header (`bg-[var(--color-bg-subtle)] border-b border-[var(--color-border-default)]`) with title ("Need Support?") and subtitle ("Instant help from Joy Telecom team & Joyboy AI").
- Include 4 support action cards:
  1. WhatsApp (`https://wa.me/8801700000000`)
  2. Messenger (`https://m.me/joytelecom`)
  3. Joyboy AI Chatbot (AI assistant badge & launcher)
  4. Direct Phone Call (`tel:+8801700000000`)
- Standardize icon badges to sharp boxes (`w-8 h-8 rounded-[var(--radius-xs)]`) with proper contrast in light and dark modes.

**Non-Goals:**
- Creating a full standalone AI chat window backend service (Joyboy AI option will link/trigger Joyboy AI assistant context).

## Decisions

- **Boxy Design System Alignment**: Use `rounded-[var(--radius-sm)]` for card boundaries and `rounded-[var(--radius-xs)]` for inner icon badges to match Joytech's crisp UI token rules across the application.
- **Icon Imports**: Use Hugeicons `Message01Icon`, `Call02Icon`, `Cancel01Icon`, `AiMagicIcon`, and appropriate messenger/chat icons for uniform vector scaling.
- **Theme Accents**:
  - WhatsApp: `bg-[#25D366]/15 text-[#25D366]`
  - Messenger: `bg-[#0084FF]/15 text-[#0084FF]`
  - Joyboy AI: `bg-[var(--color-brand-primary-subtle)] text-[var(--color-brand-primary)]` with `⚡ AI` pill
  - Phone: `bg-[var(--color-bg-subtle)] text-[var(--color-text-primary)]`

## Risks / Trade-offs

- [Risk] Modal height increase with 4 channels instead of 2.
  - *Mitigation*: Use compact horizontal option rows with `p-2.5` and `gap-3` to keep vertical footprint lean (~340px total width/height on mobile/desktop).
