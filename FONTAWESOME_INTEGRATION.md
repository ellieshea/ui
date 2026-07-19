# FontAwesome Icon Library Integration

## Overview

This PR adds support for FontAwesome icons to shadcn/ui, allowing developers to use FontAwesome's clean and rounded icon set in their projects.

## What's Included

### 1. Documentation
- **`apps/v4/content/docs/icon-libraries/fontawesome.mdx`** - Complete guide on using FontAwesome icons
  - Installation instructions
  - Basic usage examples
  - Solid icons examples
  - Brand icons examples
  - Styling with Tailwind CSS
  - Component integration examples
  - Links to FontAwesome resources

### 2. Examples
- **`apps/v4/registry/examples/fontawesome-icons-demo.tsx`** - Showcase of various FontAwesome icons
  - Solid icons demonstration
  - Colored icons
  - Brand icons
  - Size variants

- **`apps/v4/registry/examples/fontawesome-dashboard.tsx`** - Real-world example
  - Dashboard layout using FontAwesome icons
  - Navigation menu with icons
  - Header with search and notifications
  - Analytics cards

## Supported Icon Sets

- **Classic (Solid)**: `@fortawesome/free-solid-svg-icons`
- **Brands**: `@fortawesome/free-brands-svg-icons`

## Installation

Users can install FontAwesome with:

```bash
npm install @fortawesome/react-fontawesome @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/free-brands-svg-icons
```

## Usage Example

```tsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faCog } from '@fortawesome/free-solid-svg-icons'

export function MyComponent() {
  return (
    <div className="flex gap-4">
      <FontAwesomeIcon icon={faHome} className="h-5 w-5" />
      <FontAwesomeIcon icon={faCog} className="h-5 w-5" />
    </div>
  )
}
```

## Notes

- FontAwesome is integrated as a wrapper around the official `@fortawesome/react-fontawesome` package
- Users can use the FontAwesomeIcon component directly with Tailwind CSS for styling
- No need for a bundled component; the official FontAwesome package handles all functionality
- Full compatibility with shadcn/ui's component system

## Next Steps

- [ ] Add FontAwesome to the icon library selection in CLI
- [ ] Create registry entries for FontAwesome icon components
- [ ] Add FontAwesome to the website icon library showcase
- [ ] Update CLI templates to support FontAwesome as an option
