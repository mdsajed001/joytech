## 1. Single-Body Container & Section Restructure

- [x] 1.1 Remove card wrappers, background panels, borders, and shadows from `src/lib/components/profile/SettingsTab.svelte` to establish a seamless single-body surface
- [x] 1.2 Structure settings groups (Appearance, Personal Details, Notifications, Security) using vertical margin gaps (`mt-8`) and clean uppercase section titles without divider lines, borders, or colored background bands

## 2. Single-Row Controls & Terse Typography Implementation

- [x] 2.1 Refactor Appearance items (Theme & Language) into single horizontal rows with direct labels and compact right-aligned segmented selectors, stripping all explanatory subtext
- [x] 2.2 Refactor Personal Details (Full Name, Phone Number, Email) into single horizontal rows with direct labels and compact right-aligned inputs
- [x] 2.3 Refactor Notification items (SMS Order Updates, WhatsApp Tracking, Restock Alerts) into single horizontal rows with direct labels and right-aligned switch toggles
- [x] 2.4 Refactor Security & Session items into clean single horizontal rows with verification status badges and sign-out actions

## 3. Verification & Responsive Polish

- [x] 3.1 Verify responsive alignment across mobile (< 380px), tablet, and desktop viewports to ensure no awkward wrapping or horizontal overflow
- [x] 3.2 Run `npm run check` and confirm 0 errors and full accessibility compliance across light and dark themes
