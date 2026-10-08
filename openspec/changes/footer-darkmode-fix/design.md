## Context

`Footer.svelte` currently uses `bg-[var(--color-bg-inverse)]` which flips to `#FFFFFF` in dark mode (`html.dark`), clashing with hardcoded `text-white` classes.

## Goals / Non-Goals

**Goals:**
- Replace `bg-[var(--color-bg-inverse)] text-[var(--color-text-inverse)]` on `<footer>` with `bg-[#0B111E] dark:bg-[#070B14] text-slate-300`.
- Update internal dividers from `border-white/10` to `border-slate-800 dark:border-slate-800/80`.
- Update text link colors to `text-slate-400 hover:text-white transition-colors`.

**Non-Goals:**
- Altering the 5-column grid layout or store map iframe source URL.

## Decisions

### Decision 1: Explicit Deep Navy/Slate Background Theme
- **Choice**: Use `bg-[#0B111E] dark:bg-[#070B14]`.
- **Rationale**: Keeps the footer grounded as a rich dark section at the bottom of the page in both light mode (`#0B111E`) and dark mode (`#070B14`), ensuring 100% contrast stability regardless of global CSS variable flips.

## Risks / Trade-offs

- **[Risk]** None identified.
