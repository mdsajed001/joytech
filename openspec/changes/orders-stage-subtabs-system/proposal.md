## Why

Active customer orders currently render as an unstructured list inside the Orders drawer panel (`type === 'orders'`). Introducing a 3-stage sub-tab navigation system (`Processing`, `Ready to Ship`, `Shipped`) allows customers to track order fulfillment stages cleanly, while keeping completed (`Delivered`) orders strictly in the Order History section (`type === 'history'`).

## What Changes

- **Active Orders Sub-Tab Navigation**: Add a 3-column full-bleed control bar (`grid grid-cols-3`) to `OrdersTab.svelte` featuring `Processing`, `Ready to Ship`, and `Shipped` sub-tabs with stage counter badges.
- **Strict Order Scope Separation**: Ensure active orders tab shows only non-delivered active stages (`processing`, `ready_to_ship`, `shipped`), while `Order History` handles all `delivered` & completed past orders.
- **Extended Order Status Data Model**: Update `Order['status']` in `mockProfile.ts` to support `'ready_to_ship'`, and populate realistic mock orders across all 3 active stages.

## Capabilities

### New Capabilities
- `order-management`: Sub-tab stage filtering for active orders and scope separation from order history.

### Modified Capabilities
(None)

## Impact

- `src/lib/data/mockProfile.ts`: Data model update for `Order['status']` and expanded mock dataset.
- `src/lib/components/profile/OrdersTab.svelte`: Refactored sub-tab bar and stage filtering logic.
- `src/lib/components/profile/ProfileDrawer.svelte`: Total active orders counter calculation update.
