## Purpose

Provides Joy Telecom customers with a non-intrusive responsive slide-over drawer (Bottom Sheet on phone, Side Drawer on PC) for all 8 shopping action shortcuts, and provides a dedicated account management bottom tab interface with theme and language toggles, loyalty tier progression, device compatibility, and payment methods.

## ADDED Requirements

### Requirement: Responsive Slide-Over Drawer for Action Shortcuts
The customer profile page SHALL render all 8 top hero shortcuts (Orders, History, Wishlist, Reviews, Addresses, Returns, Promos, Request) within a responsive slide-over drawer that operates independently of the bottom tab section. Clicking or tapping any shortcut SHALL NOT navigate or change the active tab in the bottom section.
- On mobile viewports (<768px), the slide-over SHALL render as a native Bottom Sheet sliding up from the bottom of the screen with a mobile drag handle.
- On desktop viewports (>=1024px), the slide-over SHALL render as a Side Drawer sliding in from the right viewport edge.
- The slide-over SHALL support closing via close button, background backdrop click, and Escape key.

#### Scenario: Mobile customer opens a shortcut
- **WHEN** a customer taps any of the 8 shortcuts on a mobile device
- **THEN** a bottom sheet slides up from the bottom with a drag handle, displaying the requested view without altering the bottom tab section.

#### Scenario: Desktop customer opens a shortcut
- **WHEN** a customer clicks any of the 8 shortcuts on a desktop browser
- **THEN** a side drawer slides in from the right edge with a shadow backdrop, displaying the requested view while the main page remains on its current tab.

### Requirement: Dedicated Account Management Tabs and Preference Toggles
The customer profile page's bottom tab navigation SHALL exclude duplicated shopping titles (`Orders`, `Addresses`, `Wishlist`) and SHALL provide 4 dedicated account management tabs:
1. **Preferences & Account**: SHALL feature an instant language toggle (English / বাংলা), theme toggle (Light / Dark / System), profile contact information, notification switches (SMS, WhatsApp, restock), and password security.
2. **Joy Rewards & VIP**: SHALL feature the customer's loyalty points balance, VIP Tier progress meter, and VIP platinum benefits.
3. **My Devices**: SHALL feature registered customer phone models with 1-click catalog filtering for compatible phone cases and screen protectors.
4. **Payment Methods**: SHALL feature saved bKash/Nagad mobile wallets and debit/credit payment cards.

#### Scenario: Customer toggles language or theme preferences
- **WHEN** a customer selects "বাংলা" or changes the theme toggle in the Preferences & Account tab
- **THEN** the preference is saved and applied immediately with visual confirmation.

#### Scenario: Customer switches between account management tabs
- **WHEN** a customer clicks any of the 4 account tabs (Preferences & Account, Joy Rewards & VIP, My Devices, Payment Methods)
- **THEN** the panel smoothly updates to display the selected account management section.
