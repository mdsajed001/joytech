## Context

See [proposal.md](file:///c:/Users/Sajed/Documents/joytech/openspec/changes/integrate-brand-svg-logo/proposal.md) for motivation and [spec.md](file:///c:/Users/Sajed/Documents/joytech/openspec/changes/integrate-brand-svg-logo/specs/brand-svg-logo/spec.md) for behavior requirements.

Currently:
- The site renders `[ J ]` in a colored `<div>` with `w-9 h-9` or `w-8 h-8` in `Header.svelte`, `MobileDrawer.svelte`, and `Footer.svelte`.
- An SVG asset exists at `static/Joy tech.svg` (`viewBox="0 0 241 256"`).

## Goals / Non-Goals

**Goals:**
- Replace letter-box placeholders with `<img src="/Joy%20tech.svg" ... />` while retaining existing surrounding layout, typography, flex spacing, and hover animations.
- Maintain high crispness and correct aspect ratios without distorting the vector icon.
- Add `<link rel="icon" type="image/svg+xml" href="/Joy%20tech.svg" />` to `src/app.html`.

**Non-Goals:**
- Modifying brand typography ("Joy Telecom / Genuine Accessories").
- Modifying the SVG vector paths or internal color definitions directly.

## Decisions

### 1. Direct Image Element referencing static asset
- **Decision:** Use `<img src="/Joy%20tech.svg" alt="Joy Telecom" class="w-9 h-9 object-contain" />` (and `w-8 h-8` for MobileDrawer).
- **Rationale:** The SVG has fixed internal fills (`#155BD2`) and does not require inline CSS variable fill manipulation. Referencing it as an image asset allows browser caching and cleaner component templates.
- **Alternatives Considered:** Inlining the full SVG in each component (rejected due to template bloat).

### 2. URL Encoding for space in filename
- **Decision:** Reference as `/Joy%20tech.svg` in markup and HTML links.
- **Rationale:** Avoids breaking web conventions or requiring file rename operations that might affect user-managed files.

## Risks / Trade-offs

- [Risk] Layout shift if the image dimensions aren't explicitly specified.
  → **Mitigation:** Explicit width and height Tailwind utility classes (`w-9 h-9` or `w-8 h-8`) with `object-contain` and `shrink-0` prevent layout jumping.
