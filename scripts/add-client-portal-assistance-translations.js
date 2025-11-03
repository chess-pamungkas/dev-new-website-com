/*
  Adds/updates Client Portal Assistance hero translations in all languages.

  Usage:
    node scripts/add-client-portal-assistance-translations.js [--overwrite]

  Notes:
  - By default, it only adds missing keys and leaves existing ones untouched.
  - Pass --overwrite to force-update values in all locales.
*/

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..", "src", "locales");

const OVERWRITE = process.argv.includes("--overwrite");

// Figma-based English copy (used as default for all locales)
const KEYS = {
  "client-portal-assistance_badge-text": "Start trading smarter",
  "client-portal-assistance_client-portal-assistance-title":
    "Client Portal assistance",
  "client-portal-assistance_client-portal-assistance-text":
    "From registration to your first trade—this step-by-step guide helps you set up, verify, and fund your account with confidence.",
  "client-portal-assistance_button-get-started": "Get started",
  "client-portal-assistance_button-watch-quick-overview":
    "Watch Quick Overview",
};

function isLanguageDir(entryName) {
  const full = path.join(ROOT, entryName);
  if (!fs.existsSync(full)) return false;
  const stat = fs.statSync(full);
  if (!stat.isDirectory()) return false;
  // exclude non-language directories/files
  return !["language.config.js", "processLanguages.js"].includes(entryName);
}

function updateLocale(langDir) {
  const file = path.join(ROOT, langDir, "index.json");
  if (!fs.existsSync(file)) {
    console.warn(`Skip ${langDir}: index.json not found`);
    return { lang: langDir, added: 0, updated: 0 };
  }

  let json;
  try {
    json = JSON.parse(fs.readFileSync(file, "utf8"));
  } catch (e) {
    console.error(`Failed to parse ${file}:`, e.message);
    return { lang: langDir, added: 0, updated: 0, error: true };
  }

  let added = 0;
  let updated = 0;

  Object.entries(KEYS).forEach(([key, value]) => {
    if (OVERWRITE) {
      if (json[key] !== value) {
        json[key] = value;
        updated += 1;
      }
    } else {
      if (json[key] === undefined) {
        json[key] = value;
        added += 1;
      }
    }
  });

  fs.writeFileSync(file, JSON.stringify(json, null, 2) + "\n", "utf8");
  return { lang: langDir, added, updated };
}

function main() {
  if (!fs.existsSync(ROOT)) {
    console.error(`Locales directory not found at ${ROOT}`);
    process.exit(1);
  }

  const langs = fs.readdirSync(ROOT).filter(isLanguageDir);
  const results = langs.map(updateLocale);

  const summary = results
    .map(({ lang, added, updated }) => `${lang}: +${added}, ~${updated}`)
    .join("\n");

  console.log(
    `Updated Client Portal Assistance translations (${
      OVERWRITE ? "overwrite" : "add-only"
    })`
  );
  console.log(summary);
}

main();
