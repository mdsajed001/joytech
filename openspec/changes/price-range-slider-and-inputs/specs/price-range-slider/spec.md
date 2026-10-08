## Purpose

Allows customers to filter catalog products by an interactive dual-thumb price range slider, manual minimum and maximum numeric inputs, and quick preset chips between ৳0 and ৳10,000.

## ADDED Requirements

### Requirement: Dual-Thumb Interactive Range Slider
The system SHALL render an interactive dual-thumb range slider spanning from ৳0 to ৳10,000 with a visual active range fill track.

#### Scenario: User adjusts price range using slider thumbs
- **WHEN** the user drags the min slider thumb to ৳1,000 and the max slider thumb to ৳4,500
- **THEN** the highlighted track updates between ৳1,000 and ৳4,500, the manual inputs reflect ৳1,000 and ৳4,500, and catalog products filter to items priced between ৳1,000 and ৳4,500.

#### Scenario: Preventing handle collision or crossover
- **WHEN** the user drags the minimum thumb toward or past the maximum thumb
- **THEN** the system clamps the minimum handle value to not exceed the maximum handle value.

---

### Requirement: Manual Min and Max Price Inputs
The system SHALL provide manual numeric input fields for minimum and maximum price with two-way synchronization to the slider handles.

#### Scenario: User types custom minimum and maximum price
- **WHEN** the user enters "800" in the Min input and "3200" in the Max input
- **THEN** both slider handles move to ৳800 and ৳3,200 respectively, and product results update to display products within ৳800 – ৳3,200.

#### Scenario: Handling out-of-bounds input values
- **WHEN** the user enters a number below 0 or above 10,000
- **THEN** the system clamps the input to the allowable bounds (0 minimum, 10,000 maximum).

---

### Requirement: Real-Time Live Product Catalog Filtering
The search page SHALL filter displayed products live in real time based on active minimum and maximum price boundaries.

#### Scenario: Immediate live filtering on slider change
- **WHEN** the user moves either slider thumb
- **THEN** the product list recalculates immediately without requiring an "Apply" button click.

#### Scenario: Debounced live filtering on text input
- **WHEN** the user types digits into the manual price inputs
- **THEN** the filter applies with a subtle ~150ms debounce so typing feels smooth and responsive.

---

### Requirement: Quick Preset Chips
The filter panel SHALL render quick preset chips that update slider handles, manual inputs, and product results immediately upon selection.

#### Scenario: User clicks preset chip
- **WHEN** the user clicks the "৳1k – ৳2.5k" preset chip
- **THEN** Min is set to 1,000, Max is set to 2,500, the slider thumbs snap to these positions, and the product list updates immediately.

---

### Requirement: Active Filter Pill and Reset Action
The system SHALL display an active filter pill when price is constrained, and provide a reset action to restore the full ৳0 – ৳10,000 range.

#### Scenario: Dismissing active price filter pill
- **WHEN** the user clicks the "×" on the active price filter pill (e.g. "Price: ৳1,000 – ৳4,500")
- **THEN** the price range resets to ৳0 – ৳10,000, the active pill disappears, and all matching products across the full price spectrum are displayed.

#### Scenario: Clicking reset inside the price section
- **WHEN** the user clicks "Reset" in the price filter header
- **THEN** the min and max handles return to 0 and 10,000 and the preset chips return to neutral state.
