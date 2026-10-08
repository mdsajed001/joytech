## Purpose

Defines visual and structural requirements for a seamless, edge-to-edge desktop Hero section featuring zero outer padding, square corners, expanded Flash Sale deal cards, and a streamlined footer.

## ADDED Requirements

### Requirement: Seamless Edge-to-Edge Layout
The desktop Hero section SHALL render flush with the viewport edges with zero outer padding and zero horizontal gap between the promotional banner slider (65%) and the Flash Sale spotlight card (35%).

#### Scenario: Full-bleed desktop hero row
- **WHEN** the homepage is viewed on a desktop viewport (>= 1024px)
- **THEN** the Hero section spans edge-to-edge without outer horizontal or vertical padding
- **AND** the banner slider and the Flash Sale spotlight card touch directly with zero gap, separated by a crisp divider border

### Requirement: Square Corners Without Radius
The Hero promotional banner slider and Flash Sale spotlight card SHALL render with square corners without rounded corner radiuses.

#### Scenario: Zero border radius on hero containers
- **WHEN** the desktop Hero section renders
- **THEN** the banner slider container, banner images, and Flash Sale spotlight module have `rounded-none` (zero corner radius)

### Requirement: Spacious Flash Sale Product Cards
The Flash Sale module SHALL provide prominent, legible deal cards with enlarged thumbnail images and clear typography so that product details and badges do not appear squished.

#### Scenario: Enlarged deal thumbnails and comfortable card proportions
- **WHEN** the 4 flash sale products are rendered in the 2x2 grid
- **THEN** each product card features an enlarged image thumbnail with proportional height (at least 80px / aspect-ratio framed)
- **AND** product titles, discount badges, and Add to Cart buttons render with clear spacing and without overlapping text or cramped boundaries

### Requirement: Streamlined Flash Sale Footer
The Flash Sale module footer SHALL omit the "Stock Dhaka" status label, dedicating reclaimed vertical space to the product deal cards.

#### Scenario: Clean footer action
- **WHEN** the Flash Sale module is rendered
- **THEN** the footer contains the "Explore All Flash Deals" link without any "Stock Dhaka" badge
