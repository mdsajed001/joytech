## Purpose

Provides dedicated, category-specific filter facets in the search sidebar and mobile drawer when browsing a specific category (e.g., Wattage for Fast Chargers, Style for Cases, Glass Type for Screen Protectors).

## ADDED Requirements

### Requirement: Header Category Navigation Routing
The application SHALL route category navigation clicks from the header navbar and mobile drawer directly to the search catalog with that category active (`/search?category={cat.id}`).

#### Scenario: User clicks category from header
- **WHEN** the user clicks "Fast Chargers" in the desktop or mobile header navigation
- **THEN** the browser navigates to `/search?category=chargers` and the search page initializes with the chargers category active.

---

### Requirement: Category-Dedicated Filter Presentation
The system SHALL dynamically render specialized, category-specific filter sections in `SearchSidebar` and `SearchMobileFilterDrawer` whenever a single category is active.

#### Scenario: Viewing Fast Chargers dedicated filters
- **WHEN** the active category is "chargers"
- **THEN** the filter panel renders dedicated sections for "Wattage" (20W-30W, 45W, 65W-67W, 100W+) and "Port Configuration" (Single USB-C, Dual USB-C, 3+ Ports).

#### Scenario: Viewing Cases & Covers dedicated filters
- **WHEN** the active category is "cases"
- **THEN** the filter panel renders dedicated sections for "Case Style" (Clear, Frosted, Rugged Armor, Leather, Slim) and "Special Features" (Ring Kickstand, Camera Slider, MagSafe).

#### Scenario: Viewing Screen Protectors dedicated filters
- **WHEN** the active category is "screen-glass"
- **THEN** the filter panel renders dedicated sections for "Glass Type" (HD Clear, 28° Anti-Spy Privacy, Matte Anti-Glare, UV Liquid) and "Coverage" (Case-Friendly, Edge-to-Edge).

#### Scenario: Viewing Cables, MagSafe, and Audio dedicated filters
- **WHEN** the active category is "cables", "magsafe", or "audio"
- **THEN** the filter panel renders the corresponding dedicated attributes (Connector Type, Cable Length, Accessory Sub-Type, Wearing Style, Noise Cancellation).

---

### Requirement: Specialized Attribute Product Filtering
The search query engine SHALL filter catalog products by the selected category-specific facets in real time.

#### Scenario: User filters by specific wattage
- **WHEN** the user selects the "65W – 67W" wattage filter while viewing chargers
- **THEN** the product results list only displays chargers matching 65W-67W capacity.

#### Scenario: Combined device compatibility and category facet
- **WHEN** the user filters for "Galaxy S24 Ultra" and selects "Camera Slider" case feature
- **THEN** only cases compatible with Galaxy S24 Ultra that include a camera slider are shown.

---

### Requirement: Category Facet URL State & Active Filter Badges
The system SHALL reflect active dedicated category facets as URL query parameters and display them as dismissible active filter pills.

#### Scenario: User removes an active dedicated facet pill
- **WHEN** the user clicks the "×" on an active category facet pill (e.g. "Wattage: 65W – 67W")
- **THEN** the facet is cleared, the URL parameter is updated, and the results list refreshes immediately.
