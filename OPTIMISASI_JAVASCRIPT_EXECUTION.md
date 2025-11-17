# Optimasi JavaScript Execution Time

## Masalah

GTmetrix menunjukkan **1.9s spent executing JavaScript** dengan masalah utama:

- `framework-af353efbad687f13f4eb.js`: **2.9s CPU time** (1.2s evaluation)
- reCAPTCHA: **553ms CPU time** (441ms evaluation)
- Component page: **265ms CPU time**
- app.js: **169ms CPU time**

## Strategi Optimasi

### 1. Lazy Load Komponen Non-Critical di Homepage

Komponen berikut tidak perlu di-load saat initial page load:

- `AccountComparison` - Below the fold
- `TrustContent` - Below the fold
- `FeaturesSectionContent` - Below the fold
- `GuideContent` - Below the fold
- `OurCommunityContent` - Bottom of page

### 2. Lazy Load Library Besar

- `react-table` - Hanya digunakan di beberapa halaman (spreads-and-fees, forex, dll)
- `react-spring` - Animasi library, bisa di-lazy load
- `react-player` - Video player, hanya digunakan di trust section
- `lottie-react` - Animation library, bisa di-lazy load

### 3. Defer Third-Party Scripts

- TrustPilot widget - Load setelah user scroll
- MetaTrader widget - Load setelah user scroll

### 4. Code Splitting

Gatsby sudah melakukan code splitting otomatis, tapi kita bisa optimize lebih dengan:

- Dynamic imports untuk komponen besar
- Intersection Observer untuk lazy load saat komponen masuk viewport

## Implementasi

### Step 1: Lazy Load Komponen Homepage

Update `src/pages/index.js` untuk lazy load komponen non-critical.

### Step 2: Lazy Load react-table

Update `src/components/shared/table/index.js` untuk dynamic import react-table.

### Step 3: Defer TrustPilot Widget

Load TrustPilot widget hanya saat user scroll ke trust section.

## Expected Results

- **JavaScript execution time**: 1.9s → ~1.0-1.2s (reduction ~40-50%)
- **TBT (Total Blocking Time)**: Reduced significantly
- **FCP (First Contentful Paint)**: Improved
- **LCP (Largest Contentful Paint)**: Improved
