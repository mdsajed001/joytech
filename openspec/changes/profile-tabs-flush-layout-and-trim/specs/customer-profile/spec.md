## Purpose

Provides Joy Telecom customers with a seamless, flush edge-to-edge mobile account navigation experience with concise tab labels and a streamlined 3-tab account structure.

## ADDED Requirements

### Requirement: Flush Edge-to-Edge Navigation Tabs on Mobile
On mobile viewports (<768px), the account navigation tab bar SHALL connect directly flush underneath the blue profile hero section with zero vertical padding or margin gap. The tab bar SHALL extend 100% full width from the left screen edge to the right screen edge without outer margins or rounded corners.

#### Scenario: Mobile customer views profile account tabs
- **WHEN** a customer views the profile page on a mobile viewport (<768px)
- **THEN** the account navigation tab bar connects directly to the bottom of the blue profile hero banner with 0 vertical gap and spans full screen width from edge to edge.

### Requirement: Shortened Responsive Tab Labels on Mobile
On mobile viewports (<768px), the tab navigation bar SHALL render shortened, concise titles for all account tabs to prevent text collisions, awkward wrapping, and visual overlapping. On desktop viewports (>=768px), full descriptive titles and icon badges SHALL be rendered.

#### Scenario: Mobile customer views concise tab labels
- **WHEN** a customer views the account tabs on a mobile device
- **THEN** the tabs display concise titles ("Preferences", "Rewards", "Payments") fitting neatly across the viewport without overlapping.

#### Scenario: Desktop customer views full descriptive titles
- **WHEN** a customer views the account tabs on a desktop or tablet viewport
- **THEN** the tabs display full descriptive titles ("Preferences & Account", "Joy Rewards & VIP", "Payment Methods") with corresponding icons and badges.

### Requirement: Streamlined 3-Tab Account Structure Without Device Tab
The customer profile page SHALL provide exactly three account management tabs: Preferences & Account, Joy Rewards & VIP, and Payment Methods. The profile page SHALL NOT display, route, or contain a "My Devices" tab or device management sub-panel on mobile or desktop viewports.

#### Scenario: Customer interacts with account management tabs
- **WHEN** a customer browses the account management navigation
- **THEN** exactly three tabs are available (Preferences, Rewards, Payments) and no device management tab is present.
