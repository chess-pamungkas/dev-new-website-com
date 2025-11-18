# GTM/UTM Testing Guide

## Setup

### Development Environment

GTM is now enabled in development mode. To enable/disable it, set the following in `.env.development`:

```env
GATSBY_ENABLE_GTM_DEV=true  # Set to "true" to enable, "false" to disable
```

**Important:** After changing this value, restart your development server.

### Production/Staging Environment

GTM is **automatically enabled** in production/staging environments (Vercel, etc.) as long as `GATSBY_GOOGLE_TAG_MANAGER` environment variable is set.

**Note:** Helper functions (`window.testGTMWithCampaignCode`, etc.) are only available in development mode. For production testing, use URL parameters directly.

## Testing GTM

### 1. Check GTM Status

Open browser console and run:

```javascript
// Check if GTM is loaded
window.checkGTMStatus();
```

This will show:

- Whether GTM container is loaded
- Whether dataLayer exists
- Current dataLayer length
- GTM Container ID

### 2. Test UTM Parameters

#### Method 1: Using URL Parameters

Visit your site with UTM parameters in the URL:

**Test dengan UTM parameters saja:**

```
http://localhost:8000/?utm_source=test_source&utm_medium=test_medium&utm_campaign=test_campaign
```

**Test dengan campaign_code saja:**

```
http://localhost:8000/?campaign_code=test123
```

**Test dengan kombinasi campaign_code + UTM parameters:**

```
http://localhost:8000/?campaign_code=test123&utm_source=test_source&utm_medium=test_medium&utm_campaign=test_campaign
```

**Test dengan kombinasi di path dengan language:**

```
http://localhost:8000/zh/?campaign_code=test123&utm_source=test_source&utm_medium=test_medium&utm_campaign=test_campaign
```

The parameters will be:

1. Saved to localStorage
2. Pushed to GTM dataLayer
3. Removed from URL (for clean URLs)

#### Method 2: Using Browser Console

Open browser console and run:

**Test dengan kombinasi campaign_code + UTM:**

```javascript
// Test dengan kombinasi campaign_code dan UTM parameters
window.testGTMWithCampaignCode({
  campaign_code: "test_campaign_123",
  utm_source: "google",
  utm_medium: "cpc",
  utm_campaign: "summer_sale",
});

// Check hasilnya
window.getDataLayer();
```

**Test dengan campaign_code saja:**

```javascript
window.testGTMWithCampaignCode({
  campaign_code: "IB08801328J",
});
```

**Test dengan UTM saja:**

```javascript
window.testGTMWithCampaignCode({
  utm_source: "facebook",
  utm_medium: "social",
  utm_campaign: "promo_2024",
});
```

**Simulate URL visit dengan parameters:**

```javascript
// Simulate visit dengan kombinasi parameters
window.simulateURLWithParams({
  campaign_code: "test123",
  utm_source: "test_source",
  utm_medium: "test_medium",
  utm_campaign: "test_campaign",
  pathname: "/zh/", // Optional: specify pathname
});
```

**Check dataLayer:**

```javascript
window.getDataLayer();

// Check GTM status
window.checkGTMStatus();
```

### 3. Verify in GTM Preview Mode

1. Open [Google Tag Manager](https://tagmanager.google.com/)
2. Select your container (GTM-TFM34GFQ)
3. Click "Preview" button
4. Enter your localhost URL: `http://localhost:8000`
5. You should see:
   - Container loaded
   - Page view events
   - UTM parameters in dataLayer
   - Route change events (when navigating)

### 4. Check dataLayer in Browser

Open browser console and run:

```javascript
// View current dataLayer
console.log(window.dataLayer);

// Filter for UTM parameters
window.dataLayer.filter(
  (item) => item.utm_source || item.utm_campaign || item.campaign_code
);
```

### 5. Test Events

You can manually push events to test GTM triggers:

```javascript
// Push a test event
window.dataLayer.push({
  event: "test_event",
  eventCategory: "test",
  eventAction: "click",
  eventLabel: "test_button",
});

// Check if event was pushed
console.log(window.dataLayer);
```

## Available Helper Functions

The following functions are available in `src/helpers/services/gtm-service.js` and exposed to `window` in development:

- `pushUTMParamsToDataLayer()` - Automatically pushes UTM params from localStorage to dataLayer
- `testGTMDataLayer(testData)` - Manually push test data to dataLayer
- `getDataLayer()` - Get current dataLayer contents
- `checkGTMStatus()` - Check if GTM is loaded and ready
- `testGTMWithCampaignCode(params)` - **Test dengan kombinasi campaign_code + UTM parameters**
- `simulateURLWithParams(params)` - Simulate URL visit dengan parameters

## Testing Scenarios

### Scenario 1: Campaign Code Only

```javascript
// URL: http://localhost:8000/?campaign_code=IB08801328J
// Expected:
// - campaign_code saved to localStorage
// - campaign_code pushed to dataLayer
// - URL cleaned (campaign_code removed)
// - r_code removed from localStorage if exists
```

### Scenario 2: UTM Parameters Only

```javascript
// URL: http://localhost:8000/?utm_source=google&utm_medium=cpc&utm_campaign=summer
// Expected:
// - UTM parameters saved to localStorage
// - UTM parameters pushed to dataLayer
// - URL cleaned (UTM parameters removed)
```

### Scenario 3: Campaign Code + UTM Parameters (Combined)

```javascript
// URL: http://localhost:8000/?campaign_code=test123&utm_source=google&utm_medium=cpc&utm_campaign=summer
// Expected:
// - campaign_code saved to localStorage
// - UTM parameters saved to localStorage
// - All parameters pushed to dataLayer together
// - URL cleaned (all parameters removed)
// - r_code removed from localStorage if exists
```

### Scenario 4: Test dengan Browser Console

```javascript
// Test kombinasi
window.testGTMWithCampaignCode({
  campaign_code: "IB08801328J",
  utm_source: "facebook",
  utm_medium: "social",
  utm_campaign: "winter_promo",
});

// Verify di dataLayer
window.dataLayer.filter(
  (item) => item.campaign_code || item.utm_source || item.utm_campaign
);

// Verify di localStorage
console.log({
  campaign_code: localStorage.getItem("campaign_code"),
  utm_source: localStorage.getItem("utm_source"),
  utm_medium: localStorage.getItem("utm_medium"),
  utm_campaign: localStorage.getItem("utm_campaign"),
});
```

## Common Issues

### GTM Not Loading

1. Check `.env.development` has `GATSBY_ENABLE_GTM_DEV=true`
2. Restart development server
3. Check browser console for errors
4. Verify GTM Container ID is correct: `GTM-TFM34GFQ`

### UTM Parameters Not Appearing

1. Check localStorage: `localStorage.getItem('utm_source')`
2. Check dataLayer: `window.dataLayer`
3. Verify parameters are being pushed: Look for console log "UTM parameters pushed to dataLayer"
4. Check URL was cleaned (parameters should be removed from URL after saving)

### dataLayer Not Updating

1. Ensure `pushUTMParamsToDataLayer()` is called (it's called in Layout component)
2. Check browser console for errors
3. Verify GTM is loaded: `window.checkGTMStatus()`

## Testing GTM di Production/Staging (Vercel)

### Testing di https://dev-new-website-com.vercel.app/

#### Method 1: Test dengan URL Parameters

Buka browser dan kunjungi URL dengan parameters:

**Test dengan kombinasi campaign_code + UTM:**

```
https://dev-new-website-com.vercel.app/?campaign_code=test123&utm_source=test_source&utm_medium=test_medium&utm_campaign=test_campaign
```

**Test dengan campaign_code saja:**

```
https://dev-new-website-com.vercel.app/?campaign_code=IB08801328J
```

**Test dengan UTM parameters saja:**

```
https://dev-new-website-com.vercel.app/?utm_source=google&utm_medium=cpc&utm_campaign=summer_sale
```

**Test dengan kombinasi di path dengan language:**

```
https://dev-new-website-com.vercel.app/zh/?campaign_code=test123&utm_source=test_source&utm_medium=test_medium&utm_campaign=test_campaign
```

#### Method 2: Verify di Browser Console

Setelah membuka URL dengan parameters, buka browser console (F12) dan jalankan:

```javascript
// Check GTM Status
console.log("GTM Status:", {
  gtmLoaded: typeof window.google_tag_manager !== "undefined",
  dataLayerExists: typeof window.dataLayer !== "undefined",
  dataLayerLength: window.dataLayer?.length || 0,
});

// Check localStorage
console.log("LocalStorage:", {
  campaign_code: localStorage.getItem("campaign_code"),
  utm_source: localStorage.getItem("utm_source"),
  utm_medium: localStorage.getItem("utm_medium"),
  utm_campaign: localStorage.getItem("utm_campaign"),
});

// Check dataLayer untuk UTM/Campaign parameters
const paramsInDataLayer = window.dataLayer.filter(
  (item) =>
    item.campaign_code ||
    item.utm_source ||
    item.utm_medium ||
    item.utm_campaign
);
console.log("Parameters in dataLayer:", paramsInDataLayer);

// Check current URL (should be cleaned)
console.log("Current URL:", window.location.href);
```

#### Method 3: Test dengan GTM Preview Mode

1. Buka [Google Tag Manager](https://tagmanager.google.com/)
2. Pilih container **GTM-TFM34GFQ**
3. Klik tombol **"Preview"**
4. Masukkan production URL dengan parameters:
   ```
   https://dev-new-website-com.vercel.app/?campaign_code=test123&utm_source=test_source&utm_medium=test_medium&utm_campaign=test_campaign
   ```
5. Klik **"Connect"**
6. Di GTM Preview panel, Anda akan melihat:
   - Container loaded
   - Page view events
   - UTM parameters di dataLayer
   - Campaign code di dataLayer
   - Route change events (saat navigasi)

#### Method 4: Manual Push ke dataLayer (Production)

Jika helper functions tidak tersedia di production, Anda bisa manual push:

```javascript
// Manual push parameters ke dataLayer
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  campaign_code: "test123",
  utm_source: "test_source",
  utm_medium: "test_medium",
  utm_campaign: "test_campaign",
});

// Verify
console.log("dataLayer:", window.dataLayer);
```

#### Method 5: Check Network Requests

1. Buka Chrome DevTools → **Network** tab
2. Filter dengan **"gtm"** atau **"collect"**
3. Kunjungi URL dengan parameters
4. Anda akan melihat requests ke:
   - `https://www.googletagmanager.com/gtm.js?id=GTM-TFM34GFQ`
   - `https://www.google-analytics.com/collect` (jika GA configured di GTM)

### Expected Behavior di Production

1. ✅ **Parameters disimpan ke localStorage** - Check di Application → Local Storage
2. ✅ **Parameters di-push ke dataLayer** - Check di Console: `window.dataLayer`
3. ✅ **URL dibersihkan** - Parameters dihapus dari URL setelah disimpan
4. ✅ **GTM container loaded** - Check di Network tab atau Console
5. ✅ **Events terkirim ke GTM** - Verify di GTM Preview Mode atau Network tab

### Troubleshooting Production Testing

**GTM tidak load:**

- Check Network tab untuk error
- Verify `GATSBY_GOOGLE_TAG_MANAGER` environment variable di Vercel
- Check browser console untuk error messages

**Parameters tidak muncul di dataLayer:**

- Check localStorage apakah parameters tersimpan
- Refresh page setelah menambahkan parameters ke URL
- Check console untuk log "UTM parameters pushed to dataLayer"

**URL tidak dibersihkan:**

- Check console untuk log "Cleaning URL"
- Verify fungsi `getCampaignParamsAndSetToStorage` dipanggil
- Check apakah ada error di console

## Testing Checklist

### Development

- [ ] GTM container loads in development
- [ ] UTM parameters from URL are saved to localStorage
- [ ] UTM parameters are pushed to dataLayer
- [ ] URL is cleaned (parameters removed after saving)
- [ ] Route changes trigger events
- [ ] GTM Preview mode shows events correctly
- [ ] Campaign code works correctly
- [ ] Multiple UTM parameters work together

### Production/Staging

- [ ] GTM container loads di production URL
- [ ] UTM parameters dari URL disimpan ke localStorage
- [ ] UTM parameters di-push ke dataLayer
- [ ] URL dibersihkan setelah parameters disimpan
- [ ] GTM Preview mode bekerja dengan production URL
- [ ] Campaign code + UTM kombinasi bekerja dengan baik
- [ ] Network requests ke GTM terkirim dengan benar
