# Recruitment Matching Platform

A modern AI-powered recruitment platform that matches job roles with candidates using compatibility scoring. Built with React, TypeScript, and Tailwind CSS v4.

## Features

- **Dual Dashboards**: Separate interfaces for recruiters and candidates
- **Job Listings**: Search and filter capabilities with detailed job descriptions
- **Candidate Profiles**: Portfolio showcases and skill assessments
- **AI Matching**: Comprehensive compatibility analysis between jobs and candidates
- **Application Tracking**: Complete recruitment workflow management
- **Responsive Design**: Optimized for both mobile and desktop

## Local Development Setup

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Step 1: Create Vite Project

```bash
npm create vite@latest recruitment-app -- --template react-ts
cd recruitment-app
```

### Step 2: Install Tailwind CSS v4

```bash
npm install tailwindcss@next
```

### Step 3: Install Required Dependencies

```bash
# Core UI dependencies
npm install lucide-react
npm install @radix-ui/react-slot
npm install @radix-ui/react-dialog
npm install @radix-ui/react-select
npm install @radix-ui/react-tabs
npm install @radix-ui/react-progress
npm install @radix-ui/react-checkbox
npm install @radix-ui/react-label
npm install @radix-ui/react-textarea
npm install @radix-ui/react-avatar
npm install @radix-ui/react-separator

# Form handling
npm install react-hook-form@7.55.0
npm install @hookform/resolvers
npm install zod

# Charts for dashboards
npm install recharts

# Utility libraries
npm install class-variance-authority
npm install clsx
npm install tailwind-merge

# Toast notifications
npm install sonner@2.0.3
```

### Step 4: Configure Vite

Create `vite.config.ts`:

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        require('tailwindcss'),
      ],
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
```

### Step 5: Set Up Project Structure

```bash
# Remove default src content
rm -rf src/*

# Create required directories
mkdir -p src/components/ui
mkdir -p src/components/figma
mkdir -p src/styles
```

### Step 6: Copy Project Files

Copy the following files from this project to your local setup:

- Copy `App.tsx` to `src/App.tsx`
- Copy all files from `components/` to `src/components/`
- Copy `styles/globals.css` to `src/styles/globals.css`

### Step 7: Create Entry Point

Create `src/main.tsx`:

```typescript
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

### Step 8: Update index.html

Replace the content of `index.html`:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Recruitment Matching Platform</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

### Step 9: Fix Import Paths

Update component imports to use relative paths from `src/`. For example:

```typescript
// In your components, change:
import { Button } from "./components/ui/button";

// To:
import { Button } from "../ui/button";
```

### Step 10: Add TypeScript Support

Create `src/vite-env.d.ts`:

```typescript
/// <reference types="vite/client" />
```

### Step 11: Run the Application

```bash
npm install
npm run dev
```

The application will be available at `http://localhost:5173`

## Project Structure

```
src/
├── components/
│   ├── ui/                 # Shadcn/ui components
│   ├── figma/             # Figma-specific components
│   ├── Navigation.tsx     # Main navigation
│   ├── LandingPage.tsx    # Home page
│   ├── JobListings.tsx    # Job search and listings
│   ├── CandidateDashboard.tsx
│   ├── RecruiterDashboard.tsx
│   └── MatchResults.tsx   # AI matching results
├── styles/
│   └── globals.css        # Tailwind CSS configuration
├── App.tsx               # Main application component
└── main.tsx              # React entry point
```

## Key Features Explained

### Navigation System
- Dynamic navigation based on user type (candidate/recruiter)
- Responsive mobile menu
- State management for current page

### Landing Page
- Hero section with user type selection
- Feature highlights
- Call-to-action buttons

### Job Listings
- Search and filter functionality
- Job cards with detailed information
- Apply/view buttons

### Dashboards
- **Candidate Dashboard**: Profile management, applications, matches
- **Recruiter Dashboard**: Job posting, candidate search, analytics

### Matching System
- AI-powered compatibility scoring
- Detailed match analysis
- Skills and requirements comparison

## Styling System

The project uses Tailwind CSS v4 with:
- Custom CSS variables for theming
- Light and dark mode support
- Responsive design utilities
- Component-specific styling

## Troubleshooting

### Common Issues

1. **Styles not loading**: Ensure `globals.css` is imported in `App.tsx`
2. **Component errors**: Check that all required dependencies are installed
3. **TypeScript errors**: Make sure `vite-env.d.ts` exists
4. **Build errors**: Verify Vite configuration includes PostCSS setup

### Missing Dependencies

If you encounter import errors, install additional Radix UI components:

```bash
npm install @radix-ui/react-[component-name]
```

## Development Notes

- Base font size: 14px
- Typography system uses CSS custom properties
- All components are fully responsive
- Dark mode support included
- Form validation with React Hook Form and Zod

## Next Steps

Consider integrating:
- **Supabase**: For backend functionality, user authentication, and data storage
- **Real API**: Replace mock data with actual job and candidate APIs
- **Advanced Filtering**: More sophisticated search capabilities
- **Real-time Updates**: Live notifications for new matches and applications