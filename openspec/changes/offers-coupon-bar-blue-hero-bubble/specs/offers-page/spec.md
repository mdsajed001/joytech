## ADDED Requirements

### Requirement: Blue Hero Bubble Coupon Rail Surface
The system SHALL style the promo coupon quick-claim bar on `/offers` with Joy Telecom's brand primary blue background and ambient white floating bubbles matching the profile hero design pattern.

#### Scenario: Displaying coupon bar with blue hero bubble style
- **WHEN** a user visits `/offers`
- **THEN** the coupon bar renders with a brand primary blue background, ambient drifting bubble pseudo-elements, crisp white typography, and white bubble coupon cards.

#### Scenario: Copying a coupon with visual confirmation
- **WHEN** a user clicks on any white bubble coupon card
- **THEN** the coupon code is copied to the clipboard, and the copy indicator transforms into a green checkmark with feedback toast.
