## Purpose

Provides a dynamic, event-driven offers and promotional shopping experience for Joy Telecom, featuring high-impact campaign banners, mobile-first horizontal swipe rails, quick-claim coupon chips, and dedicated full event campaign views with responsive product grids.

## ADDED Requirements

### Requirement: Offers Hub Event Sections
The system SHALL render promotional campaign events on the Offers page (`/offers`), where each campaign presents an event banner (with title, tagline, discount badge, and countdown where applicable) alongside a horizontal snap-scrolling rail of discounted product cards on mobile devices.

#### Scenario: Browsing campaign events on phone
- **WHEN** a user navigates to `/offers` on a mobile device
- **THEN** the system displays multiple campaign sections, each with a visual campaign banner and an edge-to-edge horizontally scrollable product rail with peeked cards.

#### Scenario: Adding a deal directly to cart
- **WHEN** a user taps the add-to-cart button on any promotional card in the horizontal rail
- **THEN** the product is added to the user's cart without leaving the Offers page, and a confirmation feedback toast is displayed.

### Requirement: Dedicated Full Event Campaign View
The system SHALL provide a full campaign view when the user clicks "See All" on any campaign banner or end-of-rail card, displaying that event's full hero banner on top and a complete responsive product grid below it.

#### Scenario: Navigating to dedicated event view
- **WHEN** a user clicks "See All" on a campaign banner or its rail end-card
- **THEN** the page transitions to the dedicated event view showing the full campaign banner on top, a back button to return to the Offers Hub, and a multi-column grid of all products in that event.

#### Scenario: Returning from dedicated event view to hub
- **WHEN** a user clicks the back button on the dedicated event view
- **THEN** the view returns smoothly to the main Offers Hub.

### Requirement: Promotional Coupon Quick-Claim
The system SHALL provide a coupon code quick-claim rail on the Offers page displaying active promotional vouchers with tap-to-copy functionality.

#### Scenario: Copying a coupon code
- **WHEN** a user taps a coupon code chip (e.g., `JOY200`)
- **THEN** the code is copied to the system clipboard, and a feedback state indicates the voucher is copied and ready to apply at checkout.

### Requirement: Sticky Event Quick-Jump Navigation
The system SHALL provide a sticky navigation rail on the Offers Hub that allows users to jump directly to specific campaign sections.

#### Scenario: Tapping an event quick-jump chip
- **WHEN** a user taps an event chip in the sticky navigation bar
- **THEN** the page smoothly scrolls to that corresponding campaign section.
