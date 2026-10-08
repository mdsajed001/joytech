## Purpose

Provides a dedicated, mobile-first product details page that displays comprehensive accessory information, verified device compatibility, customer reviews, and a high-conversion sticky purchase bar without distracting root bottom navigation.

## ADDED Requirements

### Requirement: Dedicated Product Details Page Route
The system SHALL provide a dedicated, crawlable route at `/product/[slug]` that resolves the product from the catalog by its slug and renders full details. If an invalid or nonexistent slug is accessed, the system SHALL display a graceful 404/not found state with a button to return to the catalog.

#### Scenario: Valid product slug navigation
- **WHEN** user navigates to `/product/spigen-ultra-hybrid-magsafe-iphone-16-pro-max`
- **THEN** the system renders the Spigen Ultra Hybrid MagSafe Frosted Case detail view with accurate pricing, rating, gallery, and compatibility details.

#### Scenario: Invalid product slug navigation
- **WHEN** user navigates to `/product/non-existent-device-slug`
- **THEN** the system displays a clear "Product Not Found" state with an option to browse catalog categories.

---

### Requirement: Product Card Route Linkage
The system SHALL configure product cards across the homepage, category listings, and search results to navigate to `/product/[slug]` when the product image, title, or card container is clicked. Direct action buttons on the card (such as "Buy Now") SHALL continue to execute rapid cart addition without navigating away unless clicked outside the button.

#### Scenario: Clicking product card title or thumbnail
- **WHEN** customer taps or clicks a product card's thumbnail or product name
- **THEN** browser navigates to the corresponding `/product/[slug]` page.

#### Scenario: Clicking quick Buy Now button on card
- **WHEN** customer clicks the "Buy Now" button on a product card
- **THEN** the item is added to the cart directly and toast notification appears without forcing page transition.

---

### Requirement: Root Bottom Navigation Suppression
The system SHALL hide the global 5-tab root navigation bar (`BottomNav.svelte`) when the user is on any `/product/[slug]` route, keeping the screen focused on the product experience and purchase actions.

#### Scenario: Viewing product page on mobile device
- **WHEN** customer views any product details page on a viewport width below 768px
- **THEN** the root bottom navigation bar with Home, Categories, Offers, Cart, and Profile tabs is NOT rendered in the viewport.

#### Scenario: Navigating back to homepage or cart
- **WHEN** customer navigates back from a product page to the homepage or cart
- **THEN** the root bottom navigation bar is restored and visible.

---

### Requirement: Phone-First Sticky Purchase Bar
The system SHALL display a sticky bottom purchase bar on mobile viewports pinned above the safe area. The bar SHALL feature current price, an "Add to Cart" button with cart icon, and a primary "Buy Now" button with icon.

#### Scenario: User engages with sticky purchase bar
- **WHEN** customer taps "Add to Cart" on the sticky bottom bar with a valid variant selected
- **THEN** the selected item and variant are added to the cart, the cart item counter increments, and a confirmation toast is shown.

#### Scenario: User clicks Buy Now on sticky purchase bar
- **WHEN** customer taps "Buy Now" on the sticky bottom bar
- **THEN** the item is added to the cart and the user is immediately navigated to `/cart` for rapid checkout.

#### Scenario: Sticky purchase bar avoids floating support widget
- **WHEN** customer scrolls on mobile
- **THEN** the floating support widget is positioned above the sticky purchase bar so neither overlaps nor obstructs purchase actions.

---

### Requirement: Mandatory Device and Variant Selection
The system SHALL provide interactive selectors for compatible phone models and color variants. Selection of required variants SHALL be mandatory before completing purchase actions.

#### Scenario: User attempts purchase without selecting a required variant
- **WHEN** customer clicks "Add to Cart" or "Buy Now" before selecting a model or color
- **THEN** the system prevents addition, scrolls or smoothly focuses to the variant selector, and highlights the selector with a helpful prompt.

#### Scenario: User selects a valid model and color
- **WHEN** customer selects "iPhone 16 Pro Max" and "Frosted Black"
- **THEN** the selected labels update visually and purchase buttons are enabled for that specific variant.

---

### Requirement: Media Gallery and Preview
The system SHALL provide a multi-angle image gallery with a prominent hero preview, thumbnail strip, zoom capability, and badges for discounts and stock levels.

#### Scenario: Switching image thumbnail
- **WHEN** customer taps or clicks an alternative thumbnail image
- **THEN** the hero display instantly transitions to display the selected angle.

---

### Requirement: Fulfilment, Warranty and Trust Guarantees
The system SHALL prominently display localized Bangladesh delivery estimates (Dhaka 24–48 hours at ৳60, Outside Dhaka 48–72 hours at ৳120), Cash on Delivery support, 6 Months Official Warranty badge, and 7-day return policy.

#### Scenario: Inspecting delivery terms
- **WHEN** customer views the fulfilment card on the product details page
- **THEN** delivery timeframes, rates for Dhaka and outside Dhaka, and warranty terms are clearly visible without leaving the page.

---

### Requirement: Technical Specifications and Package Contents
The system SHALL provide organized, collapsible accordions or tabs detailing the product overview, technical specifications table, and package contents list.

#### Scenario: Expanding technical specifications
- **WHEN** customer clicks on the "Specifications" accordion header
- **THEN** the panel smoothly expands to show materials, dimensions, weight, and port compatibility.

---

### Requirement: Customer Reviews Display
The system SHALL display an aggregate star rating, total review count, rating distribution, and a list of verified customer reviews including reviewer name, star rating, date, and feedback comment.

#### Scenario: Viewing customer feedback
- **WHEN** customer scrolls to the reviews section
- **THEN** verified reviews and overall rating score are rendered with star icons and reviewer names.

---

### Requirement: Complementary Product Recommendations
The system SHALL render a "You May Also Like" carousel or grid featuring compatible accessories from the same device ecosystem.

#### Scenario: Exploring complementary accessories
- **WHEN** customer views a phone case product page
- **THEN** the recommendations rail displays matching tempered glass screen protectors and fast chargers compatible with the same phone model.
