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

// Define translations for navbar-dropdown-highlight_products_primary-button
const TRANSLATIONS = {
  ar: "ابدأ التداول",
  br: "Começar a Negociar",
  cn: "开始交易",
  es: "Comenzar a Operar",
  fr: "Commencer à Trader",
  id: "Mulai Berdagang",
  it: "Inizia a Operare",
  jp: "取引を開始",
  my: "Mula Berdagang",
  th: "เริ่มเทรด",
  vn: "Bắt đầu Giao dịch",
  zh: "开始交易",
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
    data["navbar-dropdown-highlight_products_primary-button"] =
      TRANSLATIONS[lang];

    // Write back to file
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf8");

    console.log(
      `✅ Updated ${lang}: "navbar-dropdown-highlight_products_primary-button" = "${TRANSLATIONS[lang]}"`
    );
  } catch (error) {
    console.error(`❌ Error updating ${lang}:`, error.message);
  }
}

// Update all language files
console.log(
  "🚀 Updating navbar-dropdown-highlight_products_primary-button translations...\n"
);

LANGUAGES.forEach(updateLanguageFile);

console.log("\n✨ Translation update completed!");
