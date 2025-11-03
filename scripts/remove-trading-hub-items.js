const fs = require("fs");
const path = require("path");

// Translation keys to remove
const keysToRemove = [
  "header-nav-tab-trading-hub-webinars-tutorials-title",
  "header-nav-tab-trading-hub-webinars-tutorials-desc",
  "header-nav-tab-trading-hub-request-call-title",
  "header-nav-tab-trading-hub-request-call-desc",
];

const localesPath = path.join(__dirname, "..", "src", "locales");
const languages = [
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

function removeTranslationKeys(language) {
  const filePath = path.join(localesPath, language, "index.json");

  try {
    // Read the file
    const fileContent = fs.readFileSync(filePath, "utf8");
    const translationsObj = JSON.parse(fileContent);

    let removedCount = 0;

    // Remove each key if it exists
    keysToRemove.forEach((key) => {
      if (translationsObj[key] !== undefined) {
        delete translationsObj[key];
        removedCount++;
      }
    });

    if (removedCount > 0) {
      // Write back to file with proper formatting
      fs.writeFileSync(
        filePath,
        JSON.stringify(translationsObj, null, 2) + "\n",
        "utf8"
      );

      console.log(
        `✅ Removed ${removedCount} keys from ${language}/index.json`
      );
      return removedCount;
    } else {
      console.log(`ℹ️  No keys found to remove in ${language}/index.json`);
      return 0;
    }
  } catch (error) {
    console.error(`❌ Error updating ${language}/index.json:`, error.message);
    return 0;
  }
}

function main() {
  console.log("🚀 Removing Trading Hub menu item translation keys...\n");
  console.log("Keys to remove:");
  keysToRemove.forEach((key) => console.log(`  - ${key}`));
  console.log();

  let totalRemoved = 0;

  languages.forEach((language) => {
    const removed = removeTranslationKeys(language);
    totalRemoved += removed;
  });

  console.log(`\n✨ Translation removal completed!`);
  console.log(`\n📝 Summary:`);
  console.log(`- Removed keys from ${languages.length} language files`);
  console.log(`- Total keys removed: ${totalRemoved}`);
  console.log("\n🔍 Files updated:");
  languages.forEach((lang) => {
    console.log(`  - src/locales/${lang}/index.json`);
  });
}

if (require.main === module) {
  main();
}

module.exports = { keysToRemove, removeTranslationKeys };
