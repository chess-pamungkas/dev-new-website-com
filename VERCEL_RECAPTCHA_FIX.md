# Fix reCAPTCHA di Vercel

## Masalah

reCAPTCHA tidak berfungsi di Vercel (`dev-new-website-com.vercel.app`) karena environment variable `GOOGLE_CAPTCHA_SITE_KEY` tidak tersedia di browser.

## Solusi

### 1. Update Environment Variables di Vercel

Di Vercel Dashboard, tambahkan environment variable dengan prefix `GATSBY_`:

```
GATSBY_GOOGLE_CAPTCHA_SITE_KEY=6LcZ7wUpAAAAADffshWY3AmNkFCHOgBkJROeAlIc
```

### 2. Pastikan Domain Terdaftar di Google reCAPTCHA

1. Buka [Google reCAPTCHA Console](https://www.google.com/recaptcha/admin)
2. Pilih site key `6LcZ7wUpAAAAADffshWY3AmNkFCHOgBkJROeAlIc`
3. Tambahkan domain berikut ke "Domains":
   - `dev-new-website-com.vercel.app`
   - `*.vercel.app` (untuk semua subdomain Vercel)

### 3. Redeploy

Setelah menambahkan environment variable, redeploy aplikasi di Vercel.

## Debugging

Setelah update, cek browser console untuk melihat:

- `reCAPTCHA Configuration:` - menunjukkan status key
- `Using reCAPTCHA key:` - menunjukkan key yang digunakan
- `reCAPTCHA script loaded successfully` - konfirmasi script ter-load

## Troubleshooting

Jika masih bermasalah, periksa:

1. Environment variable sudah di-set dengan benar di Vercel
2. Domain sudah terdaftar di Google reCAPTCHA Console
3. Cek browser console untuk error messages
