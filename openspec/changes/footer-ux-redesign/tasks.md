## 1. Footer Typography & Alignment

- [x] 1.1 Update Heading Typography: In `src/lib/components/Footer.svelte`, update all section headings (`<h4>`) from `text-xs font-bold uppercase tracking-wider text-[var(--color-accent)]` to `text-sm font-semibold text-white`. Verify visually on the dev server.
- [x] 1.2 Update Link Typography: Update all link lists (`<ul>` and `<a>`) and body text from `text-xs` to `text-sm` for better readability. Verify visually on the dev server.
- [x] 1.3 Realign Payment Badges: Update the bottom row container in `Footer.svelte` to ensure copyright text is left-aligned and payment badges are right-aligned on desktop (`sm:flex-row justify-between`). Verify alignment on desktop breakpoint.

## 2. Interactive Accordions (Mobile)

- [x] 2.1 Add Local State: Add a `let expandedSection: string | null = null` variable and a toggle function in the `<script>` block of `Footer.svelte`. Verify code compiles without errors.
- [x] 2.2 Implement Accordion UI: Update the `<ul>` lists for Categories, Customer Service, and Policies with Tailwind classes `class:hidden={expandedSection !== 'sectionName'} lg:!block`. Make the headers clickable buttons that trigger the toggle function on mobile, adding an expand icon (e.g., `+`). Verify that clicking the headers toggles the lists on mobile, and that lists remain always visible on desktop.

## 3. Social Media Icons

- [x] 3.1 Import Social Icons: Import Facebook, Instagram, YouTube, and WhatsApp icons (e.g., `Facebook01Icon`, `InstagramIcon`, etc.) from `@hugeicons/core-free-icons` in `Footer.svelte`. Verify imports resolve successfully.
- [x] 3.2 Render Social Row: Add a horizontal flex container under the contact information in the Brand column to display the social icons as clickable links. Verify the icons appear correctly sized beneath the email address on both mobile and desktop.
