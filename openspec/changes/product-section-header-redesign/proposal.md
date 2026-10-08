## Why

In `ProductSection.svelte`, the section header placed the optional `subtitle` in the right-aligned flex slot opposite the title. For descriptive subtitles such as `"Updated for iPhone 16 & Galaxy S24 Series"` in the New Arrivals section, this horizontal arrangement forces the title and subtitle to crush each other on mobile and compact viewports, causing "New Arrivals" to break into two lines ("New" / "Arrivals") and the kicker to break into "LATEST" / "ADDITIONS". Moving the subtitle directly into the heading column establishes a clean, modern editorial typography hierarchy (Eyebrow → Title → Subtitle) that never wraps awkwardly and keeps the right slot exclusively for navigation actions like "View all".

## What Changes

- Restructure the [ProductSection.svelte](file:///c:/Users/Sajed/Documents/joytech/src/lib/components/ProductSection.svelte) header layout into a clear, responsive editorial hierarchy:
  - **Eyebrow / Kicker**: Displayed with icon, uppercase tracking, and `whitespace-nowrap` at the top.
  - **Main Title (`<h2>`)**: Displayed with full width, clean single-line priority, and tracking.
  - **Subtitle**: Placed directly underneath the title with muted text styling, providing context without fighting the headline for horizontal space.
  - **Right Slot**: Reserved strictly for `viewAllLink` with `shrink-0`.
- Protect the heading column with `min-w-0 flex-1` and prevent awkward mid-phrase word breaks.
- Allow both `subtitle` and `viewAllLink` to be rendered simultaneously without conflict.

## Capabilities

### New Capabilities
- `product-section-header`: Responsive section header layout with stacked kicker, headline, contextual subtitle, and independent right-aligned action link.

### Modified Capabilities
<!-- None -->

## Impact

- **Affected Files**:
  - `src/lib/components/ProductSection.svelte`: Header markup and flexbox alignment adjustments.
- **Dependencies**: None. Pure Svelte markup and Tailwind CSS layout enhancement.
- **UX Improvement**: Eliminates text squashing, prevents awkward title breaks across mobile and desktop, and standardizes section header patterns across the site.
