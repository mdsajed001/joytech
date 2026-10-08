## Why

On desktop screens, the profile page container is visibly indented and narrower than the global top header navigation bar (`max-w-6xl` vs `max-w-7xl` with `lg:px-8`), breaking horizontal grid alignment. Furthermore, desktop users clicking the account profile icon in the top navigation bar cannot navigate to `/profile` because the icon is rendered as a placeholder `<button>` with no action.

## What Changes

- **Desktop Grid & Container Alignment**: Update the container wrapper in `src/routes/profile/+page.svelte` from `max-w-6xl mx-auto px-4 sm:px-6` to `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`, achieving identical horizontal bounds and side margins to the top header and homepage sections.
- **Top Header Profile Navigation**: In `src/lib/components/Header.svelte`, convert the desktop account profile button into an interactive anchor link (`<a href="/profile">`), enabling 1-click navigation to `/profile`. Also connect the wishlist icon to `/profile`.

## Capabilities

### New Capabilities
- `profile-navigation`: Unified desktop header navigation linking directly to the customer profile and standardized responsive container alignment.

### Modified Capabilities
*(None)*

## Impact

- `src/routes/profile/+page.svelte`: Container width and padding classes.
- `src/lib/components/Header.svelte`: Profile icon markup and routing.
