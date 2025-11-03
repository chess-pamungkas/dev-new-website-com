/*
  Add/overwrite the page title translation for Client Portal Assistance in all locales.

  Key:
    "page-client-portal-assistance-title"

  Usage:
    node scripts/add-client-portal-assistance-page-title.js         # add only if missing
    node scripts/add-client-portal-assistance-page-title.js --overwrite  # force update
*/

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..", "src", "locales");
const OVERWRITE = process.argv.includes("--overwrite");

const KEY = "page-client-portal-assistance-title";

const MAP = {
  en: "Client Portal Assistance",
  ar: "مساعدة بوابة العميل",
  br: "Assistência do Portal do Cliente",
  cn: "客户门户协助",
  zh: "客戶入口協助",
  es: "Asistencia del Portal del Cliente",
  fr: "Assistance du Portail Client",
  id: "Bantuan Portal Klien",
  it: "Assistenza Portale Clienti",
  jp: "クライアントポータルサポート",
  my: "Bantuan Portal Pelanggan",
  th: "ความช่วยเหลือพอร์ทัลลูกค้า",
  vn: "Hỗ trợ Cổng Khách Hàng",
};

function isLanguageDir(entryName) {
  const full = path.join(ROOT, entryName);
  return fs.existsSync(full) && fs.statSync(full).isDirectory();
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

  const value = MAP[lang] || MAP.en;
  let added = 0;
  let updated = 0;

  if (json[KEY] === undefined) {
    json[KEY] = value;
    added = 1;
  } else if (OVERWRITE && json[KEY] !== value) {
    json[KEY] = value;
    updated = 1;
  }

  fs.writeFileSync(file, JSON.stringify(json, null, 2) + "\n", "utf8");
  return { lang, added, updated };
}

function main() {
  if (!fs.existsSync(ROOT)) {
    console.error(`Locales directory not found at ${ROOT}`);
    process.exit(1);
  }

  const langs = fs.readdirSync(ROOT).filter(isLanguageDir);
  const results = langs.map(updateLocale);

  console.log(`Updated '${KEY}' (${OVERWRITE ? "overwrite" : "add-only"}):`);
  results.forEach(({ lang, added, updated }) =>
    console.log(`${lang}: +${added}, ~${updated}`)
  );
}

main();
