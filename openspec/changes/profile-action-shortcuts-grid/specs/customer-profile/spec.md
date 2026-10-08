## Purpose

Provides Joy Telecom customers with an 8-item circular action shortcut grid on the profile hero for rapid navigation to orders, addresses, wishlist, promo vouchers, returns, reviews, and custom requests.

## ADDED Requirements

### Requirement: Circular Action Shortcuts Grid Presentation
The profile hero banner SHALL display an 8-item quick action shortcut grid arranged in a responsive 4-column by 2-row layout. Each shortcut SHALL consist of an interactive circular icon button (`rounded-full`) with a centered icon and a descriptive text label centered directly beneath it. The 8 action items SHALL be:
1. **Orders**: Shopping bag icon, showing total active order count badge.
2. **History**: Clock history icon, navigating to chronological order logs.
3. **Wishlist**: Heart favorite icon, showing saved wishlist item count badge.
4. **Reviews**: Star review icon, opening customer reviews and ratings.
5. **Addresses**: Notebook/map pin icon, showing saved address count badge.
6. **Returns**: Box return icon, opening returns and replacement claims.
7. **Promos**: Coupon/ticket icon, showing active voucher count badge.
8. **Request**: Gift box/request icon, opening special product or accessory sourcing requests.

#### Scenario: Customer views shortcuts grid
- **WHEN** a customer loads the `/profile` page on desktop or mobile
- **THEN** all 8 circular shortcut buttons are displayed in a 4-column by 2-row grid with centered text labels and count badges on applicable items.

### Requirement: Interactive Shortcut Actions and Dialog Modals
The system SHALL respond to customer clicks on any of the 8 action shortcuts:
- Clicking **Orders**, **History**, **Wishlist**, or **Addresses** SHALL switch the active profile tab view and scroll smoothly to the tab area.
- Clicking **Reviews** SHALL open a Customer Reviews modal displaying reviewed products and a star-rating submission form.
- Clicking **Returns** SHALL open a Returns & Warranty modal with return policies and order return claim triggers.
- Clicking **Promos** SHALL open a Promo Vouchers modal displaying discount coupon codes with copy-to-clipboard actions.
- Clicking **Request** SHALL open a Custom Gadget Request modal with form inputs for phone model, required accessory, and phone contact.

#### Scenario: Customer opens promo vouchers modal
- **WHEN** the customer taps the "Promos" circular shortcut
- **THEN** the Promo Vouchers modal opens displaying available discount codes, and the customer can copy a voucher code with confirmation feedback.

#### Scenario: Customer navigates to a tab via shortcut
- **WHEN** the customer taps the "Wishlist" circular shortcut
- **THEN** the active tab switches immediately to the Wishlist view.
