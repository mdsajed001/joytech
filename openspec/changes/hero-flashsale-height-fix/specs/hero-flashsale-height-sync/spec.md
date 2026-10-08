## Purpose

Enforces strict visual height parity and container boundary containment between the desktop Hero promotional banner slider and the Flash Sale spotlight card, preventing layout breaks and downward overflow.

## ADDED Requirements

### Requirement: Desktop Hero Height Synchronization
The desktop Hero section SHALL render the Flash Sale spotlight card with a height that strictly matches the height of the promotional banner slider, without extending beyond the container.

#### Scenario: Flash Sale card matches banner slider height
- **WHEN** the user views the homepage on a desktop screen (viewport width >= 1024px)
- **THEN** the bottom border of the Flash Sale spotlight card aligns flush with the bottom border of the promotional banner slider
- **AND** the Flash Sale card does not exceed or protrude below the promotional banner container

### Requirement: Overflow Containment and Boundary Isolation
The Flash Sale module SHALL encapsulate all inner elements within its bounding box and SHALL NOT overflow into subsequent page sections.

#### Scenario: No overlapping with category chip rail
- **WHEN** the desktop homepage is rendered with 4 flash sale products
- **THEN** all flash sale elements (countdown header, product thumbnails, titles, prices, CTAs, and footer link) remain fully contained within the Flash Sale card boundary
- **AND** no flash sale element overlaps, clips, or obscures the Category chip rail below the Hero section

### Requirement: Deal Item Content Density and Fit
The 2x2 grid inside the Flash Sale card SHALL adapt its thumbnail size and internal spacing so that all four product cards fit within the synchronized container height.

#### Scenario: All 4 deals visible without vertical scrollbar
- **WHEN** the Flash Sale card is displayed within the synchronized desktop hero height
- **THEN** all 4 flash sale products display their image, title, price, discount badge, and Add to Cart button cleanly without vertical scrolling or truncation of CTAs
