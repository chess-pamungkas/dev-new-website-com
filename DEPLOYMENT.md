# Deployment Guide for Vercel

## Issues Fixed

### 1. Case Sensitivity Issues

Fixed import paths for SVG files that were causing build failures:

- `UAE.svg` → `uae.svg`
- `MT5.svg` → `mt5.svg`

### 2. Missing SVG Files Check

Added a pre-build script to verify all required SVG files exist before building.

### 3. Server-Side Rendering (SSR) Issues

Fixed SSR errors with `lottie-react` library that was trying to access `document` object during server-side rendering.

## Files Modified

1. **src/components/pages-content/main-page-content/testimonials-security-content/testimonials-content/index.js**

   - Fixed import path: `UAE.svg` → `uae.svg`

2. **src/components/pages-content/mt5-page-content/index.js**

   - Fixed import path: `MT5.svg` → `mt5.svg`

3. **package.json**

   - Added `check:svg` script
   - Updated build script to include SVG check

4. **scripts/check-svg-files.js** (new)

   - Pre-build validation script for SVG files

5. **vercel.json** (new)

   - Simple Vercel deployment configuration for Gatsby

6. **.vercelignore** (new)

   - Files to ignore during deployment

7. **src/components/shared/lottie-wrapper/index.js** (new)

   - SSR-safe wrapper for lottie-react components

8. **Updated Lottie imports in:**
   - src/components/promotion-markets/static-images.js
   - src/components/promotion-markets/index.js
   - src/components/top-market-promotion/index.js
   - src/components/marketing-circle/index.js

## Deployment Steps

1. **Commit all changes:**

   ```bash
   git add .
   git commit -m "Fix SVG import paths and add deployment configuration"
   git push origin chess/OW-671/revamp-website
   ```

2. **Deploy to Vercel:**
   - The deployment should now work without the previous SVG import errors
   - Vercel will automatically run the build process with the fixed paths

## Build Process

The build process now includes:

1. SVG file validation (`npm run check:svg`)
2. Registration script copying (`npm run copy:registration-script`)
3. Gatsby build (`gatsby build`)

## Troubleshooting

If you encounter any issues:

1. **Check SVG files exist:**

   ```bash
   npm run check:svg
   ```

2. **Clean and rebuild locally:**

   ```bash
   npm run clean
   npm run build
   ```

3. **Verify all imports are correct:**
   - All SVG imports should use lowercase filenames
   - File paths should match the actual file structure

## Environment Variables

Make sure these environment variables are set in Vercel:

- `IFRAME_REGISTRATION_API_KEY` (if needed)
- Any other environment variables your app requires

## Notes

- The build warnings about peer dependencies are normal and won't cause deployment failure
- The deprecated package warnings are also normal and don't affect functionality
- Make sure all SVG files are committed to the repository
