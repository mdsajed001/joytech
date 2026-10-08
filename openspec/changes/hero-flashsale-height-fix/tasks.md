## 1. Hero Layout & Overflow Containment

- [x] 1.1 Update the desktop Hero split layout in `src/lib/components/Hero.svelte` to enforce strict height matching (`h-[400px]` or `lg:h-[400px] xl:h-[420px]`), `min-h-0`, and `overflow-hidden` on the right Flash Sale spotlight column, and verify the container cannot exceed the banner slider bounds.
- [x] 1.2 Refactor the 2x2 flash deals grid in `Hero.svelte` with compact product image framing (`h-16 w-full object-cover rounded-[var(--radius-sm)]`), reduced padding (`p-2`), tight gap (`gap-2`), and refined typography so all 4 cards, the header, and footer fit comfortably inside the container.

## 2. Validation & Verification

- [x] 2.1 Run `npm run check` and verify zero Svelte/TypeScript errors.
- [x] 2.2 Run `npm run build` to confirm production build succeeds without warnings.
- [x] 2.3 Verify visually in the browser across desktop viewports (1024px, 1280px, 1536px) that the Flash Sale card bottom aligns flush with the banner slider and leaves the Category chip rail completely unobstructed.
