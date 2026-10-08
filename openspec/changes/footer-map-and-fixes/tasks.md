## 1. Desktop Grid Re-architecture

- [x] 1.1 Combine Link Columns: In `Footer.svelte`, consolidate the three existing link lists into two: "Quick Links" (combining Categories and Tracking/Contact) and "Support & Legal" (combining FAQ, Warranty, and Policies). Verify the DOM structure reduces from 3 lists to 2 lists.
- [x] 1.2 Update Desktop Layout: Ensure the main grid container remains `lg:grid-cols-5`. The "Brand" section takes 2 columns, "Quick Links" takes 1, "Support & Legal" takes 1, leaving the final column (1) for the new Map container. Verify the columns align correctly on desktop.

## 2. Map Component Implementation

- [x] 2.1 Create Map Container: Create a new `div` for the "Find Us" section. Place it in the DOM *before* the two link columns (so it appears right under Brand info on mobile). Use Tailwind `lg:order-last` to push it to the 5th column on desktop. Verify the ordering behaves correctly on both mobile and desktop.
- [x] 2.2 Embed Map Iframe: Add a Google Maps iframe pointing to a generic Dhaka location (e.g. Multiplan Center) inside the new container. Wrap the iframe with `class="w-full h-48 lg:h-full min-h-[120px] rounded-xl overflow-hidden border border-white/10"`. Add a "Get Directions" anchor tag underneath it. Verify the map renders and looks premium.

## 3. Accordion Logic Fix

- [x] 3.1 Fix Accordion Toggle: Update the `<ul>` tags for the "Quick Links" and "Support & Legal" lists. Replace the interpolated template string with Svelte's directive: `class:hidden={expandedSection !== 'quick'}` and `class:hidden={expandedSection !== 'support'}`. Keep the `lg:!block` utility. Verify that tapping the section headers on a mobile viewport now correctly expands and collapses the lists without failure.
