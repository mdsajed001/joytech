## Why

Currently, the website displays temporary placeholder square tiles with the letter "J" in the header, mobile drawer, and footer, and lacks a branded favicon. An official vector logo (`static/Joy tech.svg`) has been added to the project. Replacing these placeholders with the official SVG logo at appropriate dimensions will significantly enhance brand identity, consistency, and visual polish across desktop and mobile viewports.

## What Changes

- Replace the placeholder "J" icon in the navigation bar ([Header.svelte](file:///c:/Users/Sajed/Documents/joytech/src/lib/components/Header.svelte)) with the official SVG logo mark (`/Joy%20tech.svg`), sized appropriately (`w-9 h-9 object-contain`).
- Replace the placeholder "J" icon in the mobile slide-over navigation drawer ([MobileDrawer.svelte](file:///c:/Users/Sajed/Documents/joytech/src/lib/components/MobileDrawer.svelte)) with the SVG logo mark (`w-8 h-8 object-contain`).
- Replace the placeholder "J" icon in the site footer ([Footer.svelte](file:///c:/Users/Sajed/Documents/joytech/src/lib/components/Footer.svelte)) with the SVG logo mark (`w-9 h-9 object-contain`).
- Add an SVG favicon link tag in the HTML head document ([app.html](file:///c:/Users/Sajed/Documents/joytech/src/app.html)) referencing `/Joy%20tech.svg` to brand browser tabs and bookmarks.

## Capabilities

### New Capabilities
- `brand-svg-logo`: Establishes the official SVG brand mark integration across primary navigational landmarks (Header, Mobile Drawer, Footer) and the browser tab icon.

### Modified Capabilities
- None

## Impact

- **UI Components:** Updates `Header.svelte`, `MobileDrawer.svelte`, and `Footer.svelte`.
- **HTML Document:** Updates `app.html` to add the favicon `<link>`.
- **Assets:** Utilizes the existing `static/Joy tech.svg` asset without breaking backward compatibility or text brand typography.
