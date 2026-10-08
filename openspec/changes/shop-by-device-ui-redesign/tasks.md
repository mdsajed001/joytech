## 1. Stepper & Header Scale Upgrade

- [x] 1.1 In `src/lib/components/AutoWizardConfigurator.svelte`, upgrade the progress rail step circles to 34px–36px (`w-9 h-9 sm:w-10 sm:h-10`), add `.cta-blue-bubble` and ring accents to active steps, upgrade the back button to 36px, and verify responsive visual alignment.
- [x] 1.2 In `src/lib/components/AutoWizardConfigurator.svelte`, redesign active summary chips (Device & Brand) into high-contrast pill capsules with brand accent styling and min 36px touch height.

## 2. Step 1 & Step 2 Card System Refresh

- [x] 2.1 In `src/lib/components/AutoWizardConfigurator.svelte`, redesign Step 1 device cards with `rounded-[var(--radius-xl)]`, 48px+ frosted icon pods, dynamic brand/device counts, and tactile hover states.
- [x] 2.2 In `src/lib/components/AutoWizardConfigurator.svelte`, redesign Step 2 brand cards with soft `rounded-[var(--radius-xl)]` radii and prominent brand glowing pods, and replace the dashed "More Brands" box with an elevated action tile.

## 3. Step 3 Series Chips, Search & Model Cards

- [x] 3.1 In `src/lib/components/AutoWizardConfigurator.svelte`, re-engineer series filter chips to match `CategorySection.svelte` pill standards (rounded-full, `.cta-blue-bubble` active state, 40px touch height).
- [x] 3.2 In `src/lib/components/AutoWizardConfigurator.svelte`, upgrade the model search bar to a rounded-full pill design and upgrade model cards to min 56px tactile rows with bold typography (13.5px–14px), series tags, and alias badges.

## 4. Step 4 Confirmation Screen & Final Verification

- [x] 4.1 In `src/lib/components/AutoWizardConfigurator.svelte`, redesign Step 4 with a hero device card, 1-tap quick category shortcuts (`Cases`, `Screen Glass`, `Chargers`, `MagSafe`), and the `.cta-search-animated` CTA button.
- [x] 4.2 Run `npm run check` (`svelte-check`) and verify across mobile viewport (375px) and desktop drawer/page that all buttons, chips, and cards match the Joy Telecom design language.
