/*
  Updates "how-to-trade-swap-free_card1_button" to "Contact Us" in all languages except English.

  Usage:
    node scripts/update-swap-free-card1-button.js [--overwrite]
*/

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..", "src", "locales");
const OVERWRITE = process.argv.includes("--overwrite");

// Translations for "Contact Us" in each language
const TRANSLATIONS = {
  en: "Contact Us", // Keep English as is
  ar: "اتصل بنا",
  br: "Entre em Contato",
  cn: "联系我们",
  es: "Contáctenos",
  fr: "Contactez-nous",
  id: "Hubungi Kami",
  it: "Contattaci",
  jp: "お問い合わせ",
  my: "Hubungi Kami",
  th: "ติดต่อเรา",
  vn: "Liên Hệ Chúng Tôi",
  zh: "联系我们",
};

const KEY = "how-to-trade-swap-free_card1_button";

function isLanguageDir(entryName) {
  const full = path.join(ROOT, entryName);
  if (!fs.existsSync(full)) return false;
  const stat = fs.statSync(full);
  if (!stat.isDirectory()) return false;

  return !["language.config.js", "processLanguages.js"].includes(entryName);
}

function updateLocale(lang) {
  const file = path.join(ROOT, lang, "index.json");
  if (!fs.existsSync(file)) {
    console.warn(`Skip ${lang}: index.json not found`);
    return { lang, added: 0, updated: 0 };
  }

  let json;
  try {
    json = JSON.parse(fs.readFileSync(file, "utf8"));
  } catch (e) {
    console.error(`Failed to parse ${file}:`, e.message);
    return { lang, added: 0, updated: 0, error: true };
  }

  // Skip English - keep it as is
  if (lang === "en") {
    return { lang, added: 0, updated: 0, skipped: true };
  }

  const newValue = TRANSLATIONS[lang] || TRANSLATIONS.en;
  let added = 0;
  let updated = 0;

  if (json[KEY] === undefined) {
    json[KEY] = newValue;
    added += 1;
  } else if (OVERWRITE || json[KEY] !== newValue) {
    json[KEY] = newValue;
    updated += 1;
  }

  if (added > 0 || updated > 0) {
    fs.writeFileSync(file, JSON.stringify(json, null, 2) + "\n", "utf8");
  }

  return { lang, added, updated };
}

function main() {
  if (!fs.existsSync(ROOT)) {
    console.error(`Locales directory not found: ${ROOT}`);
    process.exit(1);
  }

  const languages = fs.readdirSync(ROOT).filter(isLanguageDir).sort();

  if (languages.length === 0) {
    console.error("No language directories found");
    process.exit(1);
  }

  console.log(
    `Updating "${KEY}" in ${languages.length} language file(s)${
      OVERWRITE ? " (overwrite mode)" : ""
    }...`
  );

  const results = languages.map(updateLocale);
  const summary = results.reduce(
    (acc, r) => {
      if (r.error) {
        acc.errors += 1;
      } else if (r.skipped) {
        acc.skipped += 1;
      } else {
        acc.added += r.added;
        acc.updated += r.updated;
      }
      return acc;
    },
    { added: 0, updated: 0, errors: 0, skipped: 0 }
  );

  results.forEach((r) => {
    if (r.error) {
      console.error(`❌ ${r.lang}: Error`);
    } else if (r.skipped) {
      console.log(`○ ${r.lang}: Skipped (English - keeping original value)`);
    } else if (r.added > 0 || r.updated > 0) {
      console.log(
        `✓ ${r.lang}: ${r.added > 0 ? "added" : "updated"} to "${
          TRANSLATIONS[r.lang] || TRANSLATIONS.en
        }"`
      );
    } else {
      console.log(`○ ${r.lang}: No changes (already up to date)`);
    }
  });

  console.log(
    `\nSummary: ${summary.added} added, ${summary.updated} updated, ${
      summary.skipped
    } skipped${summary.errors > 0 ? `, ${summary.errors} errors` : ""}`
  );
}

main();
