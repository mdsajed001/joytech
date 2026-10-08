## Context

See `proposal.md` for user intent and screenshot reference. On mobile viewports (<1024px and <640px), two UI layout issues were identified:
1. The hamburger menu icon in [`Header.svelte`](file:///c:/Users/Sajed/Documents/joytech/src/lib/components/Header.svelte) currently sits on the left adjacent to the logo, leaving the right side of the mobile top bar blank and resulting in poor thumb ergonomics.
2. In [`FlashSaleSection.svelte`](file:///c:/Users/Sajed/Documents/joytech/src/lib/components/FlashSaleSection.svelte), the title, discount badge, and countdown timer share a single flex row that wraps on phones (~375px), placing the countdown timer awkwardly on the left underneath the title.

## Goals / Non-Goals

**Goals:**
- Move the mobile menu trigger button to the right side of the main header row for viewports `<lg`.
- Reorganize the Flash Sale section header on mobile into a crisp two-column arrangement:
  - Left: "⚡ Flash Sale" with the "Up to 40% OFF" badge stacked directly underneath.
  - Right: "Ends in:" label stacked directly above the countdown digit blocks, right-aligned.
- Preserve desktop styling and tablet layouts.

**Non-Goals:**
- Altering mobile drawer navigation contents or animations.
- Modifying timer countdown calculation logic.

## Decisions

### 1. Header Mobile Menu Placement
- **Decision**: In `Header.svelte`, move `<button onclick={onToggleMobileMenu} ...>` into the right-hand action container (`div.flex.items-center`).
- **Rationale**: Keeps the brand logo anchored on the left edge, and anchors the hamburger menu button on the right edge. On mobile (`sm:hidden`), desktop buttons are hidden, making the menu button the single right-aligned header element.

### 2. Flash Sale Section Header Layout
- **Decision**: In `FlashSaleSection.svelte`, change the header container from `flex items-center justify-between mb-5 flex-wrap gap-3` to `flex items-end justify-between mb-5 gap-3`.
- **Left Column**:
  ```svelte
  <div class="flex flex-col items-start gap-1 sm:flex-row sm:items-center sm:gap-2.5">
    <span class="text-lg sm:text-2xl font-black text-[var(--color-text-primary)] flex items-center gap-1.5 leading-tight">
      <span class="text-[var(--color-accent)]">⚡</span> Flash Sale
    </span>
    <span class="text-[10.5px] sm:text-[11px] font-bold text-[var(--color-accent)] bg-[var(--color-accent-subtle)] border border-[var(--color-accent)]/30 px-2 py-0.5 rounded-full shrink-0">
      Up to 40% OFF
    </span>
  </div>
  ```
- **Right Column**:
  ```svelte
  <div class="flex flex-col items-end gap-1 shrink-0">
    <span class="text-[10px] sm:text-[11px] text-[var(--color-text-secondary)] font-sans font-semibold leading-none">
      Ends in:
    </span>
    <div class="flex items-center gap-1 sm:gap-1.5 font-mono text-xs">
      <!-- Timer boxes [HH] : [MM] : [SS] -->
    </div>
  </div>
  ```
- **Rationale**: Eliminates line wrapping completely across all phone widths down to 320px, and clearly establishes the two primary visual anchors (section identity on the left, urgency timer on the right).

## Risks / Trade-offs

- **[Risk] Title and countdown colliding on extremely narrow screens (<340px)** → **Mitigation**: Left column max-width is ~130px, right column is ~140px, total ~270px, which comfortably fits within 320px–360px screens with `justify-between`.
