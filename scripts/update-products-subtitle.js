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

// Define translations for navbar-dropdown-highlight_products_subtitle
const TRANSLATIONS = {
  ar: "أكثر من 1000 أصل للتداول مباشرة على الهاتف المحمول أو سطح المكتب أو الجهاز اللوحي في أي مكان وفي أي وقت",
  br: "Mais de 1.000 ativos para negociar diretamente no celular, desktop ou tablet em qualquer lugar a qualquer hora",
  cn: "超过1,000种资产可直接在手机、桌面或平板电脑上随时随地交易",
  es: "Más de 1.000 activos para operar directamente en móvil, escritorio o tableta en cualquier lugar y momento",
  fr: "Plus de 1 000 actifs à trader directement sur mobile, bureau ou tablette n'importe où et n'importe quand",
  id: "Lebih dari 1.000 aset untuk diperdagangkan langsung di ponsel, desktop atau tablet di mana saja kapan saja",
  it: "Più di 1.000 asset da negoziare direttamente su mobile, desktop o tablet ovunque e in qualsiasi momento",
  jp: "モバイル、デスクトップ、タブレットでいつでもどこでも直接取引できる1,000以上の資産",
  my: "Lebih daripada 1,000 aset untuk didagangkan secara langsung di telefon bimbit, desktop atau tablet di mana-mana pada bila-bila masa",
  th: "มากกว่า 1,000 สินทรัพย์เพื่อเทรดโดยตรงบนมือถือ เดสก์ท็อป หรือแท็บเล็ตได้ทุกที่ทุกเวลา",
  vn: "Hơn 1.000 tài sản để giao dịch trực tiếp trên di động, máy tính để bàn hoặc máy tính bảng ở bất cứ đâu bất cứ lúc nào",
  zh: "超过1,000种资产可直接在手机、桌面或平板电脑上随时随地交易",
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
    data["navbar-dropdown-highlight_products_subtitle"] = TRANSLATIONS[lang];

    // Write back to file
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf8");

    console.log(
      `✅ Updated ${lang}: "navbar-dropdown-highlight_products_subtitle" = "${TRANSLATIONS[lang]}"`
    );
  } catch (error) {
    console.error(`❌ Error updating ${lang}:`, error.message);
  }
}

// Update all language files
console.log(
  "🚀 Updating navbar-dropdown-highlight_products_subtitle translations...\n"
);

LANGUAGES.forEach(updateLanguageFile);

console.log("\n✨ Translation update completed!");
