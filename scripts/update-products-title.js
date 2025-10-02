#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

// Define all language directories
const LANGUAGES = [
  "ar",
  "br",
  "cn",
  "es",
  "fr",
  "id",
  "it",
  "jp",
  "my",
  "th",
  "vn",
  "zh",
];

// Define translations for navbar-dropdown-highlight_products_title
const TRANSLATIONS = {
  ar: "OQtima مصمم للتداول",
  br: "OQtima é construído para Trading",
  cn: "OQtima专为交易而建",
  es: "OQtima está construido para Trading",
  fr: "OQtima est conçu pour le Trading",
  id: "OQtima dibangun untuk Trading",
  it: "OQtima è costruito per il Trading",
  jp: "OQtimaはトレーディング用に構築されています",
  my: "OQtima dibina untuk Perdagangan",
  th: "OQtima สร้างขึ้นเพื่อการเทรด",
  vn: "OQtima được xây dựng cho Giao dịch",
  zh: "OQtima专为交易而建",
};

// Function to update a single language file
function updateLanguageFile(lang) {
  const filePath = path.join(
    __dirname,
    "..",
    "src",
    "locales",
    lang,
    "index.json"
  );

  try {
    // Read the current file
    const fileContent = fs.readFileSync(filePath, "utf8");
    const data = JSON.parse(fileContent);

    // Add the new translation
    data["navbar-dropdown-highlight_products_title"] = TRANSLATIONS[lang];

    // Write back to file
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf8");

    console.log(
      `✅ Updated ${lang}: "navbar-dropdown-highlight_products_title" = "${TRANSLATIONS[lang]}"`
    );
  } catch (error) {
    console.error(`❌ Error updating ${lang}:`, error.message);
  }
}

// Update all language files
console.log(
  "🚀 Updating navbar-dropdown-highlight_products_title translations...\n"
);

LANGUAGES.forEach(updateLanguageFile);

console.log("\n✨ Translation update completed!");
