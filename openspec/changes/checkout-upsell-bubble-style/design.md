## Context

The checkout order review component (`CheckoutOrderReview.svelte`) includes a bottom upsell area entitled "COMPLETE YOUR SETUP" that suggests complementary accessories (such as chargers or screen protectors). Currently, it renders on a muted gray background (`bg-[var(--color-bg-subtle)]/30`) with basic borders. See `proposal.md` for motivation.

## Goals / Non-Goals

**Goals:**
- Upgrade the upsell recommendations container in `CheckoutOrderReview.svelte` to a vibrant blue bubble theme (`profile-hero-bubble` inspired) with soft corners and subtle depth.
- Style individual recommendation cards as clean, frosted/white bubble cards with crisp typography, prominent prices, and responsive mobile-first tap targets.
- Ensure the "+ Add" CTA has an energetic, tactile design that provides immediate feedback upon item insertion into `cartState`.
- Maintain full bilingual support (English & Bengali).

**Non-Goals:**
- Changing recommendation selection heuristics or product catalog schemas.
- Modifying cross-sell rails in `/cart` or other pages.

## Decisions

### Decision 1: Blue Bubble Container Architecture
- **Choice**: Wrap the upsell section in a rich blue gradient bubble container:
  ```html
  <div class="profile-hero-bubble text-white p-3.5 sm:p-4 rounded-b-xl border-t border-blue-400/30 relative overflow-hidden">
  ```
- **Rationale**: Reuses the signature Joytech `.profile-hero-bubble` design language established on the profile page and the checkout trust bar, creating cohesive brand aesthetics.

### Decision 2: High-Contrast Frosted Product Bubble Cards
- **Choice**: Display recommended products in rounded cards with a high-contrast white background:
  ```html
  <div class="flex items-center justify-between gap-2.5 p-2 sm:p-2.5 rounded-xl bg-white/95 dark:bg-slate-900/90 backdrop-blur-sm border border-white/20 shadow-xs">
  ```
- **Rationale**: Placing white/dark-surface cards inside the blue container ensures 100% legibility of product images and names, avoiding low-contrast text while letting the blue bubble container frame the entire section attractively.

### Decision 3: High-Visibility Pill CTA
- **Choice**: Feature an energetic "+ Add" button with `Icon` and instant active animation:
  ```html
  <button class="h-7 sm:h-8 px-3 rounded-lg bg-[var(--color-brand-primary)] text-white hover:bg-blue-600 active:scale-95 transition-all font-bold text-xs flex items-center gap-1 shadow-xs cursor-pointer">
  ```
- **Rationale**: A prominent button on each card makes adding impulse accessories effortless and gratifying.

## Risks / Trade-offs

- **[Risk] Visual weight overpowering the primary order summary**:
  - *Mitigation*: Restrict maximum recommendations to 2 items and keep card height compact (thumbnails at 36×36px to 40×40px), maintaining focus on the checkout flow.
