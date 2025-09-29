# Translation Update Script

This script updates all translation files to match the English version, removes unused keys, and ensures consistent key ordering.

## What it does:

1. **Reads English translation file** as the source of truth
2. **Removes unused translation keys** (20 keys identified as unused)
3. **Updates all language files** with proper translations
4. **Maintains consistent key order** across all languages
5. **Preserves existing translations** where available
6. **Falls back to English** for missing translations

## Unused Keys Removed:

- `header-nav-tab-platforms-desc`
- `header-nav-tab-platforms-general-desc`
- `header-nav-tab-trading-education-how-to-videos-title`
- `header-nav-tab-trading-education-how-to-videos-desc`
- `header-nav-tab-trading-trading-tools-tradeview-title`
- `header-nav-tab-trading-trading-tools-tradeview-desc`
- `header-nav-tab-trading-trading-tools-economic-calendar-title`
- `header-nav-tab-trading-trading-tools-economic-calendar-desc`
- `header-nav-tab-trading-trading-tools-market-sentiment-tools-title`
- `header-nav-tab-trading-trading-tools-market-sentiment-tools-desc`
- `header-nav-tab-trading-education-title`
- `header-nav-tab-trading-education-desc`
- `header-nav-tab-trading-copy-trading-title`
- `header-nav-tab-trading-copy-trading-desc`
- `header-nav-tab-trading-why-trade-with-title`
- `header-nav-tab-trading-why-trade-with-desc`
- `header-nav-tab-partners-affiliate-partnership-title`
- `header-nav-tab-partners-affiliate-partnership-desc`
- `cookie_policy_search_placeholder`
- `cookie_policy_mobile_search_placeholder`

## How to run:

```bash
# From project root
node scripts/update-translations.js

# Or add to package.json scripts
npm run update-translations
```

## Languages Updated:

- Arabic (ar)
- Brazilian Portuguese (br)
- Chinese Simplified (cn)
- Spanish (es)
- French (fr)
- Indonesian (id)
- Italian (it)
- Japanese (jp)
- Malay (my)
- Thai (th)
- Vietnamese (vn)
- Chinese Traditional (zh)

## Features:

- ✅ **Backup-safe**: Only updates existing files
- ✅ **Consistent ordering**: All files match English key order
- ✅ **Translation preservation**: Keeps existing translations
- ✅ **Fallback handling**: Uses English for missing translations
- ✅ **Unused key removal**: Cleans up 20 unused keys
- ✅ **Progress logging**: Shows detailed progress and results

## Output:

The script will show:

- Number of keys processed
- Keys removed (unused)
- Translation status for each language
- Summary of changes made
