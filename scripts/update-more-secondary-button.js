const fs = require("fs");
const path = require("path");

// Translations for "Try a Demo Account" in all languages
const translations = {
  ar: "جرب حساب تجريبي",
  br: "Experimente uma Conta Demo",
  cn: "尝试模拟账户",
  es: "Prueba una Cuenta Demo",
  fr: "Essayer un Compte Démo",
  id: "Coba Akun Demo",
  it: "Prova un Conto Demo",
  jp: "デモアカウントを試す",
  my: "Cuba Akaun Demo",
  th: "ลองบัญชีทดลอง",
  vn: "Thử Tài khoản Demo",
  zh: "尝试模拟账户",
};

const localesPath = path.join(__dirname, "..", "src", "locales");
const keyToUpdate = "navbar-dropdown-highlight_more_secondary-button";

function updateTranslationFile(language) {
  const filePath = path.join(localesPath, language, "index.json");

  try {
    // Read the file
    const fileContent = fs.readFileSync(filePath, "utf8");
    const translationsObj = JSON.parse(fileContent);

    // Update the translation if the key exists
    if (translationsObj[keyToUpdate] !== undefined && translations[language]) {
      translationsObj[keyToUpdate] = translations[language];

      // Write back to file with proper formatting
      fs.writeFileSync(
        filePath,
        JSON.stringify(translationsObj, null, 2) + "\n",
        "utf8"
      );

      console.log(`✅ Updated ${language}/index.json`);
      return true;
    } else {
      console.log(
        `⚠️  Key not found or translation missing for ${language}/index.json`
      );
      return false;
    }
  } catch (error) {
    console.error(`❌ Error updating ${language}/index.json:`, error.message);
    return false;
  }
}

function main() {
  console.log(
    "🚀 Updating 'navbar-dropdown-highlight_more_secondary-button' translations...\n"
  );

  const languages = Object.keys(translations);
  let successCount = 0;

  languages.forEach((language) => {
    if (updateTranslationFile(language)) {
      successCount++;
    }
  });

  console.log(`\n✨ Translation update completed!`);
  console.log(`\n📝 Summary:`);
  console.log(`- Updated ${successCount} language files`);
  console.log(`- Total languages: ${languages.length}`);
  console.log("\n🔍 Files updated:");
  languages.forEach((lang) => {
    console.log(`  - src/locales/${lang}/index.json`);
  });
}

if (require.main === module) {
  main();
}

module.exports = { translations, updateTranslationFile };
