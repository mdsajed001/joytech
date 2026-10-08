## 1. Data Model & Mock Data Enhancements

- [x] 1.1 In `src/lib/data/mockProfile.ts`, extend `Order['status']` union type with `'ready_to_ship'`, update `getStatusBadgeClass` mappings, and add mock orders for `Processing`, `Ready to Ship`, and `Shipped` stages; verify TypeScript compilation.

## 2. Orders Tab Sub-Navigation & Filtering

- [x] 2.1 In `src/lib/components/profile/OrdersTab.svelte`, implement `ordersSubTab` state (`'processing' | 'ready_to_ship' | 'shipped'`) and render a 3-column full-bleed control bar (`Processing`, `Ready to Ship`, `Shipped`) with stage counter badges; verify tab switching.
- [x] 2.2 In `src/lib/components/profile/OrdersTab.svelte`, filter visible order items according to the selected `ordersSubTab` and render stage-tailored empty states when a stage has no active orders.

## 3. Verification

- [x] 3.1 Run `npx svelte-check` to verify zero TypeScript/Svelte compilation errors across the project.

