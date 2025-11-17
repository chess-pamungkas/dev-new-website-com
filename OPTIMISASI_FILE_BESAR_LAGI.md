# Optimasi File SVG Besar - Batch 2

## File-file yang Perlu Dioptimasi

Berdasarkan GTmetrix report, masih ada beberapa file SVG besar:

1. **hand.svg** - 6.16 MB (4.60 MB di GTmetrix)

   - Lokasi: `src/assets/images/bg/hero/main-promotion/hand.svg`
   - Digunakan di: Hero component (main-promotion)
   - Status: ✅ Mengandung embedded bitmap images

2. **star-beginner-choice.svg** - 1.91 MB (1.39 MB di GTmetrix)

   - Lokasi: `src/assets/images/icons/account-comparison/star-beginner-choice.svg`
   - Digunakan di: Account Comparison components
   - Status: ✅ Mengandung embedded bitmap images

3. **star-most-popular.svg** - 1.46 MB (1.06 MB di GTmetrix)

   - Lokasi: `src/assets/images/icons/account-comparison/star-most-popular.svg`
   - Digunakan di: Account Comparison components
   - Status: ✅ Mengandung embedded bitmap images

4. **globe.svg** - 0.52 MB (398 KB di GTmetrix)
   - Lokasi: `src/assets/images/bg/hero/main-promotion/globe.svg`
   - Digunakan di: Hero component (LCP element)
   - Status: ⚠️ Perlu dicek apakah mengandung bitmap

## Solusi: Convert ke WebP

Karena file-file ini mengandung embedded bitmap images, solusi terbaik adalah:

1. **Extract bitmap images** dari SVG
2. **Convert ke WebP** untuk kompresi lebih baik
3. **Gunakan WebP** dari static folder (seperti yang sudah dilakukan sebelumnya)

## Langkah-langkah Optimasi

### Opsi 1: Manual (Recommended)

1. **Buka SVG di browser atau editor** (Inkscape, Adobe Illustrator, dll)
2. **Export bitmap images** yang di-embed sebagai file terpisah (PNG/JPG)
3. **Convert ke WebP** menggunakan tool online atau command line:
   ```bash
   # Menggunakan cwebp (Google WebP tools)
   cwebp input.png -q 80 -o output.webp
   ```
4. **Copy WebP ke static folder**:
   - `static/images/hand.webp`
   - `static/images/star-beginner-choice.webp`
   - `static/images/star-most-popular.webp`
   - `static/images/globe.webp`

### Opsi 2: Menggunakan Script (Jika diperlukan)

Script bisa dibuat untuk extract bitmap images secara otomatis, tapi karena file sangat besar, manual conversion mungkin lebih reliable.

## Update Components

Setelah file WebP tersedia, update komponen untuk menggunakan WebP:

### 1. Hero Component (`src/components/shared/hero/index.js`)

```javascript
// Ganti import SVG dengan path static folder
const globeImage = "/images/globe.webp";
const handImage = "/images/hand.webp";
```

### 2. Account Comparison Components

Update `src/components/shared/account-comparison/index.js` dan `src/components/pages-content/accounts-type-page-content/account-comparison/index.js`:

```javascript
// Ganti import SVG dengan path static folder
const StarMostPopularIcon = "/images/star-most-popular.webp";
const StarBeginnerChoiceIcon = "/images/star-beginner-choice.webp";
```

### 3. Gatsby SSR (`gatsby-ssr.js`)

Update preload untuk LCP image:

```javascript
const GlobeImage = "/images/globe.webp";
const HandImage = "/images/hand.webp";
```

## Expected Results

Setelah optimasi:

- **hand.svg**: 6.16 MB → ~200-500 KB (WebP)
- **star-beginner-choice.svg**: 1.91 MB → ~50-100 KB (WebP)
- **star-most-popular.svg**: 1.46 MB → ~50-100 KB (WebP)
- **globe.svg**: 0.52 MB → ~100-200 KB (WebP)

**Total reduction**: ~9.9 MB → ~1-2 MB (reduction ~80-90%)

## Catatan Penting

1. **LCP Element**: `globe.svg` adalah LCP element, pastikan WebP di-preload dengan benar
2. **Hand Image**: Digunakan di hero dengan `loading="eager"` dan `fetchpriority="high"`, pastikan WebP juga di-set dengan priority tinggi
3. **Star Icons**: Digunakan di account comparison, bisa menggunakan lazy loading jika tidak critical

## Tools untuk Convert ke WebP

- **Online**: https://cloudconvert.com/svg-to-webp
- **Command Line**: `cwebp` (Google WebP tools)
- **Node.js**: `sharp` package
- **Photoshop/GIMP**: Export as WebP
