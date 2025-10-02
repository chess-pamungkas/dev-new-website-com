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

// Define translations for navbar-dropdown-highlight_products_badge-text
const TRANSLATIONS = {
  ar: "تداول الآن",
  br: "Negociar Agora",
  cn: "立即交易",
  es: "Comerciar Ahora",
  fr: "Trader Maintenant",
  id: "Berdagang Sekarang",
  it: "Commercia Ora",
  jp: "今すぐ取引",
  my: "Dagang Sekarang",
  th: "เทรดตอนนี้",
  vn: "Giao Dịch Ngay",
  zh: "立即交易",
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
    data["navbar-dropdown-highlight_products_badge-text"] = TRANSLATIONS[lang];

    // Write back to file
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf8");

    console.log(
      `✅ Updated ${lang}: "navbar-dropdown-highlight_products_badge-text" = "${TRANSLATIONS[lang]}"`
    );
  } catch (error) {
    console.error(`❌ Error updating ${lang}:`, error.message);
  }
}

// Update all language files
console.log(
  "🚀 Updating navbar-dropdown-highlight_products_badge-text translations...\n"
);

LANGUAGES.forEach(updateLanguageFile);

console.log("\n✨ Translation update completed!");
