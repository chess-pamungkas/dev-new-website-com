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

// Define translations for lang-select-popup-badge-text
const TRANSLATIONS = {
  ar: "اختر تفضيلك",
  br: "Escolha sua preferência",
  cn: "选择您的偏好",
  es: "Elige tu preferencia",
  fr: "Choisissez votre préférence",
  id: "Pilih preferensi Anda",
  it: "Scegli la tua preferenza",
  jp: "お好みを選択してください",
  my: "Pilih pilihan anda",
  th: "เลือกความต้องการของคุณ",
  vn: "Chọn sở thích của bạn",
  zh: "选择您的偏好",
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
    data["lang-select-popup-badge-text"] = TRANSLATIONS[lang];

    // Write back to file
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf8");

    console.log(
      `✅ Updated ${lang}: "lang-select-popup-badge-text" = "${TRANSLATIONS[lang]}"`
    );
  } catch (error) {
    console.error(`❌ Error updating ${lang}:`, error.message);
  }
}

// Update all language files
console.log("🚀 Updating lang-select-popup-badge-text translations...\n");

LANGUAGES.forEach(updateLanguageFile);

console.log("\n✨ Translation update completed!");
