## Context

In [ProductSection.svelte](file:///c:/Users/Sajed/Documents/joytech/src/lib/components/ProductSection.svelte), the section header container currently renders:
```svelte
<div class="flex items-end justify-between mb-8 gap-4">
  <div>
    <!-- Kicker and H2 -->
  </div>
  {#if viewAllLink}
    <!-- View All Link -->
  {:else if subtitle}
    <span class="text-xs text-[var(--color-text-secondary)] font-medium">
      {subtitle}
    </span>
  {/if}
</div>
```
When `subtitle` is present (such as in the New Arrivals section), it occupies the right-hand slot intended for action links. On constrained viewports, the two columns squeeze each other, breaking the headline and kicker across multiple lines.

## Goals / Non-Goals

**Goals:**
- Unify the section header into a clean editorial vertical stack: Eyebrow (kicker) → Main Headline (`<h2>`) → Contextual Subtitle (`<p>`).
- Protect the heading block with `min-w-0 flex-1` and `whitespace-nowrap` on the kicker to prevent awkward mid-word breaks.
- Reserve the right slot exclusively for `viewAllLink` with `shrink-0`.
- Maintain clean baseline alignment between the heading block and optional action links.

**Non-Goals:**
- Changing the product cards or grid layout within `ProductSection.svelte`.
- Altering the props API of `ProductSection.svelte`.

## Decisions

### Decision 1: Editorial Vertical Stack
- **Structure**:
  ```svelte
  <div class="flex items-end justify-between mb-6 sm:mb-8 gap-4">
    <div class="flex flex-col min-w-0 flex-1">
      <!-- Kicker Eyebrow -->
      <div class="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider mb-1 whitespace-nowrap">...</div>
      <!-- Section Title -->
      <h2 class="text-2xl sm:text-3xl font-black text-[var(--color-text-primary)] tracking-tight">...</h2>
      <!-- Contextual Subtitle -->
      {#if subtitle}
        <p class="text-xs sm:text-sm text-[var(--color-text-secondary)] font-medium mt-1">
          {subtitle}
        </p>
      {/if}
    </div>

    <!-- Optional Right Action Slot -->
    {#if viewAllLink}
      <a href={viewAllLink.href} class="hidden sm:inline-flex items-center gap-1 text-xs font-bold text-[var(--color-brand-primary)] hover:underline tap-target shrink-0 mb-0.5">...</a>
    {/if}
  </div>
  ```
- **Rationale**: Aligns with standard modern e-commerce hierarchy (Apple, Nike, Stripe). The title receives maximum horizontal space and never breaks prematurely.

## Risks / Trade-offs

- **[Risk: Vertical height increase]** → *Mitigation*: Set subtitle margin to `mt-1` with balanced container spacing (`mb-6 sm:mb-8`), preserving compact vertical rhythm.
