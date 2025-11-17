# Solusi Alternatif: Gunakan Extracted Images sebagai CSS Background

## 🔄 Masalah dengan Solusi Sebelumnya

Path relatif di dalam SVG tidak resolve dengan benar saat SVG digunakan sebagai CSS background. Ini menyebabkan tampilan tidak seperti file aslinya.

## ✅ Solusi yang Lebih Baik: CSS Background Direct

Karena SVG digunakan sebagai **CSS background** (bukan inline SVG), solusi terbaik adalah:

1. **Extract images** dari SVG
2. **Gunakan extracted images langsung di CSS** sebagai background
3. **Hapus SVG** atau buat SVG sederhana tanpa embedded images

## 🚀 Langkah-langkah

### Langkah 1: Rollback Perubahan SVG

Pulihkan file SVG ke versi original:

```bash
npm run rollback:svg
```

Atau manual:

```bash
# Restore dari backup
copy src\assets\images\bg\join-our-community\join-our-community-desktop.svg.backup src\assets\images\bg\join-our-community\join-our-community-desktop.svg
copy src\assets\images\trust\trust-video-desktop.svg.backup src\assets\images\trust\trust-video-desktop.svg
copy src\assets\images\bg\account-comparison\account-comparison-desktop.svg.backup src\assets\images\bg\account-comparison\account-comparison-desktop.svg
```

### Langkah 2: Extract Images (Tanpa Mengubah SVG)

Extract images dari SVG tapi **jangan ubah SVG file**:

```bash
# Jalankan script extract tapi dengan flag untuk hanya extract, tidak replace
node scripts/extract-svg-images.js
```

Atau extract manual menggunakan online tool:

- https://svgtom.com/
- Copy base64 string dari SVG dan decode

### Langkah 3: Optimasi Extracted Images

1. **Convert ke WebP** (lebih kecil 25-50%):

   - Gunakan Squoosh: https://squoosh.app/
   - Atau TinyPNG: https://tinypng.com/

2. **Compress images**:
   - Resize jika terlalu besar untuk web
   - Compress dengan quality 80-85%

### Langkah 4: Update CSS untuk Menggunakan Extracted Images

#### A. Update `our-community.scss`

```scss
.our-community-content {
  &::before {
    // Ganti dari SVG ke extracted image
    // background: url("../../assets/images/bg/join-our-community/join-our-community-desktop.svg")

    // Menjadi direct image (WebP dengan fallback)
    background-image: url("../../assets/images/extracted/bg/join-our-community/join-our-community-desktop-image-1.webp"),
      url("../../assets/images/extracted/bg/join-our-community/join-our-community-desktop-image-1.png");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    // ... rest of styles
  }
}
```

#### B. Update `trust.scss`

```scss
.trust-video {
  // Default state
  background-image: url("../../assets/images/extracted/trust/trust-video-desktop-image-1.webp"),
    url("../../assets/images/extracted/trust/trust-video-desktop-image-1.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;

  // Hovered state
  &--hovered {
    background-image: url("../../assets/images/extracted/trust/trust-video-desktop-image-1.webp"),
      url("../../assets/images/extracted/trust/trust-video-desktop-image-1.png");
    // ... rest
  }
}
```

#### C. Update `account-comparison` Component

File ini sudah menggunakan `<img>` tag, jadi cukup update path:

```javascript
// src/components/shared/account-comparison/index.js
import AccountComparisonDesktopBg from "../../../assets/images/extracted/bg/account-comparison/account-comparison-desktop-image-1.webp";
// Fallback untuk browser yang tidak support WebP
import AccountComparisonDesktopBgFallback from "../../../assets/images/extracted/bg/account-comparison/account-comparison-desktop-image-1.jpg";
```

Atau gunakan `<picture>` element:

```jsx
<picture>
  <source srcSet={AccountComparisonDesktopBgWebp} type="image/webp" />
  <img
    src={AccountComparisonDesktopBgFallback}
    alt={t("account-comparison-shared_background-alt")}
    className="account-comparison-bg__image"
    loading="lazy"
    decoding="async"
    fetchpriority="low"
  />
</picture>
```

### Langkah 5: Hapus atau Simplifikasi SVG Files

Setelah menggunakan extracted images di CSS, Anda bisa:

**Opsi A: Hapus SVG files** (jika tidak digunakan lagi)

```bash
# Hapus SVG files yang sudah tidak digunakan
rm src/assets/images/bg/join-our-community/join-our-community-desktop.svg
rm src/assets/images/trust/trust-video-desktop.svg
# account-comparison mungkin masih digunakan, jadi jangan hapus dulu
```

**Opsi B: Buat SVG sederhana** (jika masih perlu untuk fallback)
Buat SVG sederhana tanpa embedded images, hanya dengan vector shapes jika diperlukan.

## 📊 Keuntungan Solusi Ini

1. ✅ **Path resolve dengan benar** - CSS background langsung ke image file
2. ✅ **Ukuran lebih kecil** - WebP lebih kecil dari SVG dengan embedded images
3. ✅ **Loading lebih cepat** - Images bisa di-cache terpisah
4. ✅ **Lebih mudah di-maintain** - Struktur lebih jelas
5. ✅ **Browser support** - Fallback untuk browser lama

## 📝 Checklist

- [ ] Rollback SVG files ke original
- [ ] Extract images dari SVG (simpan di `extracted/`)
- [ ] Optimasi images (convert ke WebP, compress)
- [ ] Update CSS untuk menggunakan extracted images
- [ ] Test di browser (desktop & mobile)
- [ ] Verifikasi ukuran file di Network tab
- [ ] Hapus SVG files jika tidak diperlukan lagi
- [ ] Commit perubahan

## 🎯 Hasil Akhir

Dengan solusi ini:

- **CSS background langsung ke image file** (tidak melalui SVG)
- **Ukuran lebih kecil**: WebP biasanya 25-50% lebih kecil dari PNG/JPEG
- **Loading lebih cepat**: Images bisa di-cache dan lazy load
- **Tampilan tetap sama**: Tidak ada perubahan visual

**Total pengurangan**: ~14.77 MB → ~500 KB - 1.5 MB (90-97% reduction) 🚀
