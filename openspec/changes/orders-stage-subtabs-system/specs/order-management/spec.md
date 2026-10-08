## Purpose

Defines sub-tab stage filtering for active orders (`Processing`, `Ready to Ship`, `Shipped`) and enforces separation between active orders and historical delivered orders.

## ADDED Requirements

### Requirement: 3-Stage active orders sub-tab navigation
The system SHALL provide a 3-column sub-tab bar (`Processing`, `Ready to Ship`, `Shipped`) in `OrdersTab.svelte` that filters active orders by their current fulfillment stage and displays live counter badges for each stage.

#### Scenario: Switching active order sub-tabs
- **WHEN** the user selects a stage tab (`Processing`, `Ready to Ship`, or `Shipped`) in the Orders view
- **THEN** only active orders matching the selected stage status are rendered in the list with stage-specific badges

### Requirement: Order history separation for delivered orders
The system SHALL exclude `delivered` orders from the active Orders sub-tabs and render delivered orders exclusively in the Order History section (`type === 'history'`).

#### Scenario: Viewing completed orders
- **WHEN** an order status transitions to `delivered`
- **THEN** it is removed from the active Orders sub-tab views and appears in the Order History section
