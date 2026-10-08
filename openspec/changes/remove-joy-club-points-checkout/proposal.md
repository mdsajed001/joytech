## Why

The Joy Club Points widget is currently displayed in the checkout summary section, suggesting users earn points on purchases. If the Joy Club loyalty program is being deprecated or decoupled from the checkout experience, this widget can cause confusion. We need to remove the Joy Club points calculation and widget from the checkout page.

## What Changes

- Remove the "Joy Club Points" visual widget from the order summary sidebar in the checkout page.
- Remove the derived state `vipPoints` that calculates points based on the grand total.

## Capabilities

### New Capabilities
None

### Modified Capabilities
None. This change only removes an isolated UI widget from the checkout page and doesn't modify any established specification logic since checkout currently has no documented capabilities tracking this. We will set `skip_specs: true` for this UI-only change.

## Impact

- **Affected Code:** `src/routes/checkout/+page.svelte`
